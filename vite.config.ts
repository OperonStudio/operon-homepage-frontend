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

const config = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

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
            proxy: env.OPERON_COMPOSE_BACKEND_URL + "/api/content/**",
          },
          "/api/**": {
            proxy: env.OPERON_HOMEPAGE_BACKEND_URL + "/api/**",
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
