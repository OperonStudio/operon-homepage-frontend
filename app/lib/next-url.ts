import { PRODUCT_URLS } from "#/common/products";

/**
 * Resolves the `?next=` parameter used to send a user back where they came
 * from after signing in or signing up.
 *
 * The parameter is attacker-controlled — anyone can mail out
 * `/login?next=https://evil.example`. Following it unchecked turns the login
 * page into an open redirect, which is exactly what a credential-phishing page
 * wants. So a destination is only honoured when it is this site or one of the
 * Operon product origins.
 *
 * Returns null when there is nothing safe to redirect to; callers should fall
 * back to their own default route.
 */
export function resolveNextUrl(next: string | null): string | null {
  if (!next) return null;

  let url: URL;
  try {
    url = new URL(next, window.location.origin);
  } catch {
    return null;
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") return null;

  const allowed = [window.location.origin, ...PRODUCT_URLS].map(
    normalizeOrigin,
  );
  if (!allowed.includes(normalizeOrigin(url.origin))) return null;

  return url.toString();
}

/** Reads `next` off the current URL and resolves it in one step. */
export function readNextUrl(): string | null {
  if (typeof window === "undefined") return null;
  return resolveNextUrl(
    new URLSearchParams(window.location.search).get("next"),
  );
}

function normalizeOrigin(value: string): string {
  try {
    return new URL(value).origin;
  } catch {
    return value.replace(/\/+$/, "");
  }
}
