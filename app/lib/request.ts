import { getAuthMiddlewareOptions } from "@operonstudio/auth";
import { createClient } from "@operonstudio/request";
import { withAuth } from "@operonstudio/request/middleware";

// API calls now go through same-origin server proxy routes (/api/auth/*)
// so cookies are first-party and credentials: include is not needed.
export const apiClient = createClient({
  baseURL: "",
}).use(
  withAuth({
    ...getAuthMiddlewareOptions({
      refreshUrl: "/api/auth/refresh",
      loginUrl: "/login",
    }),
    strict: false, // allow unauthenticated calls (login/register)
  }),
);
