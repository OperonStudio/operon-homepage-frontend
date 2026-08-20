import { createServerFileRoute } from "@tanstack/react-start/server";

const BACKEND_URL =
  process.env.OPERON_AUTH_BACKEND_URL ??
  "https://operon-homepage-backend.onrender.com";

async function proxyToBackend(request: Request, path: string): Promise<Response> {
  const url = `${BACKEND_URL}${path}`;

  // Forward the incoming request body and headers
  const headers = new Headers();
  const contentType = request.headers.get("content-type");
  if (contentType) headers.set("content-type", contentType);

  // Forward the cookie header so refresh tokens reach the backend
  const cookie = request.headers.get("cookie");
  if (cookie) headers.set("cookie", cookie);

  const body = request.method !== "GET" ? await request.text() : undefined;

  const backendRes = await fetch(url, {
    method: request.method,
    headers,
    body,
  });

  // Build response and relay Set-Cookie from backend as first-party cookies
  const resHeaders = new Headers();
  resHeaders.set("content-type", backendRes.headers.get("content-type") ?? "application/json");

  // Relay all Set-Cookie headers — these will now be first-party (vercel.app domain)
  backendRes.headers.forEach((value, key) => {
    if (key.toLowerCase() === "set-cookie") {
      // Strip domain and rewrite to SameSite=Lax since it's now same-domain
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

export const ServerRoute = createServerFileRoute("/api/auth/login")({
  methods: {
    POST: async ({ request }) => proxyToBackend(request, "/api/auth/login"),
    OPTIONS: async ({ request }) => proxyToBackend(request, "/api/auth/login"),
  },
});
