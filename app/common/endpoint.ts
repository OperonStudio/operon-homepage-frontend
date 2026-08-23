export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    REFRESH: "/api/auth/refresh",
    LOGOUT: "/api/auth/logout",
  },
  HOMEPAGE: {
    COLLECTION: (page_name: string) =>
      `/api/content/operon-homepage/${page_name}`,
  },
} as const;
