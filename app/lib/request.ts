import { getAuthMiddlewareOptions } from "@operonstudio/auth";
import { createClient, type Middleware } from "@operonstudio/request";
import { withAuth } from "@operonstudio/request/middleware";

const AUTH_API_URL =
  import.meta.env.VITE_OPERON_AUTH_API_URL ?? "http://localhost:8081";

// MUST run last (closest to fetch) so the credentials mode is
// set on the actual Request object that reaches fetchMiddleware.
// Without this, the browser ignores the Set-Cookie from the backend
// even when SameSite=None; Secure is present.
const withCredentials: Middleware = async (state, next) => {
  const req = new Request(state.request, { credentials: "include" });
  return next({ ...state, request: req });
};

export const apiClient = createClient({
  baseURL: AUTH_API_URL,
})
  .use(
    withAuth({
      ...getAuthMiddlewareOptions({
        refreshUrl: `${AUTH_API_URL}/api/auth/refresh`,
        loginUrl: "/login",
      }),
      strict: false, // allow unauthenticated calls (login/register)
    })
  )
  .use(withCredentials); // always send + accept cookies cross-origin
