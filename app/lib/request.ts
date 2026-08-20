import { getAuthMiddlewareOptions } from "@operonstudio/auth";
import { createClient, type Middleware } from "@operonstudio/request";
import { withAuth } from "@operonstudio/request/middleware";

const AUTH_API_URL =
  import.meta.env.VITE_OPERON_AUTH_API_URL ?? "http://localhost:8081";

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
      strict: false,
    }),
  )
  .use(withCredentials);
