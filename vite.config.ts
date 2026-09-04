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

const config = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // Auth and the rest of the homepage API are served by operon-homepage-backend.
  const homepageBackend = backendOrigin(
    env,
    "http://localhost:8081",
    "OPERON_HOMEPAGE_BACKEND_URL",
    "VITE_OPERON_AUTH_API_URL",
  );

  // Page content comes from the Compose delivery API.
  const composeBackend = backendOrigin(
    env,
    "http://localhost:8080",
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
