import { createServerFileRoute } from "@tanstack/react-start/server";

const BACKEND_URL =
  process.env.OPERON_AUTH_BACKEND_URL ??
  "https://operon-homepage-backend.onrender.com";

async function proxyToBackend(request: Request, path: string): Promise<Response> {
  const url = `${BACKEND_URL}${path}`;

  const headers = new Headers();
  const contentType = request.headers.get("content-type");
  if (contentType) headers.set("content-type", contentType);

  const cookie = request.headers.get("cookie");
  if (cookie) headers.set("cookie", cookie);

  const body = request.method !== "GET" ? await request.text() : undefined;

  const backendRes = await fetch(url, {
    method: request.method,
    headers,
    body,
  });

  const resHeaders = new Headers();
  resHeaders.set("content-type", backendRes.headers.get("content-type") ?? "application/json");

  // Clear the cookie from the browser
  backendRes.headers.forEach((value, key) => {
    if (key.toLowerCase() === "set-cookie") {
      const rewritten = value
        .replace(/;\s*SameSite=None/gi, "; SameSite=Lax")
        .replace(/;\s*Secure/gi, "")
        .replace(/;\s*Domain=[^;]*/gi, "");
      resHeaders.append("set-cookie", rewritten);
    }
  });

  const resBody = await backendRes.text();
  return new Response(resBody, {
    status: backendRes.status,
    headers: resHeaders,
  });
}

export const ServerRoute = createServerFileRoute("/api/auth/logout")({
  methods: {
    POST: async ({ request }) => proxyToBackend(request, "/api/auth/logout"),
    OPTIONS: async ({ request }) => proxyToBackend(request, "/api/auth/logout"),
  },
});
