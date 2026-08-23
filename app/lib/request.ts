import { ENDPOINTS } from "#/common/endpoint";
import { createClient } from "@operonstudio/request";
import { withAuth } from "@operonstudio/request/middleware";

// API calls now go through same-origin server proxy routes (/api/auth/*)
// so credentials: include is not needed.
export const apiClient = createClient({
  baseURL: "",
  headers: {
    "x-Operon-key": import.meta.env.VITE_OPERON_KEY || "",
  },
}).use(
  withAuth({
    refreshUrl: ENDPOINTS.AUTH.REFRESH,
  }),
);
