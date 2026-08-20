import { createClient } from "@operonstudio/request";

const AUTH_API_URL =
  import.meta.env.VITE_OPERON_AUTH_API_URL ?? "http://localhost:8081";

export const apiClient = createClient({
  baseURL: AUTH_API_URL,
});
