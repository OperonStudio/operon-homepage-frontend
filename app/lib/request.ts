import { createClient } from "@operonstudio/request";

const AUTH_API_URL =
  import.meta.env.VITE_OPERON_AUTH_API_URL ?? "http://localhost:8081";

// Middleware that injects credentials: 'include' so cross-origin cookies
// (Set-Cookie from Render backend) are accepted and sent by the browser.
const credentialsMiddleware = async (
  state: { request: Request; context: unknown },
  next: (state: { request: Request; context: unknown }) => Promise<Response>
): Promise<Response> => {
  const req = new Request(state.request, { credentials: "include" });
  return next({ ...state, request: req });
};

export const apiClient = createClient({
  baseURL: AUTH_API_URL,
  middlewares: [credentialsMiddleware],
});
