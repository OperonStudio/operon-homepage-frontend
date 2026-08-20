import { getAuthMiddlewareOptions } from "@operonstudio/auth";
import { createClient } from "@operonstudio/request";
import { withAuth } from "@operonstudio/request/middleware";

const AUTH_API_URL =
  import.meta.env.VITE_OPERON_AUTH_API_URL ?? "http://localhost:8081";

export const apiClient = createClient({
  baseURL: AUTH_API_URL,
}).use(
  withAuth({
    ...getAuthMiddlewareOptions({
      refreshUrl: `${AUTH_API_URL}/api/auth/refresh`,
      loginUrl: "/login",
    }),
    strict: false, // Don't block unauthenticated requests (e.g. login/register)
  })
);
