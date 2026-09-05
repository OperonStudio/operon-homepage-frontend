import { morphcss } from "@morph-css/kit/vite";
import babel from "@rolldown/plugin-babel";
import { devtools } from "@tanstack/devtools-vite";
import path from "node:path";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig, loadEnv } from "vite";
import viteCompression from "vite-plugin-compression";

const repoRoot = path.resolve("..");

/**
 * Resolves a backend origin from the first environment variable that is set.
 *
 * Every name is accepted because the two frontends grew different ones for the
 * same two services, and a fallback is always supplied: concatenating an unset
 * variable used to produce a proxy target of `undefined/api/auth/login`, which
 * fails at request time with a 502 rather than at startup.
 */
function backendOrigin(
  env: Record<string, string>,
  fallback: string,
  ...names: string[]
): string {
  for (const name of names) {
    const value = env[name]?.trim();
    if (value) return value.replace(/\/+$/, "");
  }
  return fallback;
}

/**
 * Where each service lives when no environment variable names it.
 *
 * A production build that falls back to localhost is simply wrong: the Nitro
 * server proxies to that target from inside the Vercel function, where nothing
 * is listening on 8081, so every platform call fails and the console answers
 * its own front page with a 500. The `vercel.json` rewrites cover requests that
 * arrive from a browser, but not the ones the server makes while rendering.
 */
const PRODUCTION_ORIGINS = {
  platform: "https://operon-homepage-backend.onrender.com",
  compose: "https://operon-compose-backend.onrender.com",
  analytics: "https://operon-analytics-backend.onrender.com",
  codeblocks: "https://operon-codeblocks-backend.onrender.com",
};

const LOCAL_ORIGINS = {
  platform: "http://localhost:8081",
  compose: "http://localhost:8080",
  analytics: "http://localhost:8083",
  codeblocks: "http://localhost:8084",
};

const config = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const origins = mode === "production" ? PRODUCTION_ORIGINS : LOCAL_ORIGINS;

  // Auth and the rest of the homepage API are served by operon-homepage-backend.
  const homepageBackend = backendOrigin(
    env,
    origins.platform,
    "OPERON_HOMEPAGE_BACKEND_URL",
    "VITE_OPERON_AUTH_API_URL",
  );

  // Page content comes from the Compose delivery API.
  const composeBackend = backendOrigin(
    env,
    origins.compose,
    "OPERON_COMPOSE_BACKEND_URL",
    "VITE_OPERON_COMPOSE_BACKEND_URL",
  );

  return {
    resolve: {
      tsconfigPaths: true,
      dedupe: [
        "solid-js",
        "solid-js/web",
        "solid-js/store",
        "react",
        "react-dom",
      ],
    },
    optimizeDeps: {
      include: ["solid-js", "solid-js/web"],
    },
    server: {
      fs: {
        allow: [repoRoot],
      },
    },
    plugins: [
      devtools(),
      morphcss(),
      tanstackStart(),
      nitro({
        routeRules: {
          "/api/content/**": {
            proxy: `${composeBackend}/api/content/**`,
          },
          "/api/**": {
            proxy: `${homepageBackend}/api/**`,
          },
        },
      }),
      viteReact(),
      babel({ presets: [reactCompilerPreset()] }),
      viteCompression({ algorithm: "brotliCompress" }),
      viteCompression({ algorithm: "gzip" }),
    ],
  };
});

export default config;
