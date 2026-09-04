/**
 * Cross-product URLs. These live here rather than inside a feature module
 * because both the studio launcher and the post-auth redirect guard need the
 * same list, and they must not drift apart.
 */
const isProdDomain =
  typeof window !== "undefined" &&
  window.location.hostname.endsWith("operonstudio.tech");

const useProdUrls = isProdDomain || import.meta.env.PROD;

export const COMPOSE_URL = useProdUrls
  ? "https://compose.operonstudio.tech"
  : (import.meta.env.VITE_COMPOSE_URL ?? "http://localhost:4000");

export const CODEBLOCKS_URL = useProdUrls
  ? "https://codeblocks.operonstudio.tech"
  : (import.meta.env.VITE_CODEBLOCKS_URL ?? "http://localhost:4002");

export const ANALYTICS_URL = useProdUrls
  ? "https://analytics.operonstudio.tech"
  : (import.meta.env.VITE_ANALYTICS_URL ?? "http://localhost:4003");

/** Studio is served by this app, so it is a path rather than an origin. */
export const STUDIO_URL = "/studio";

export const PRODUCT_URLS = [COMPOSE_URL, CODEBLOCKS_URL, ANALYTICS_URL];
