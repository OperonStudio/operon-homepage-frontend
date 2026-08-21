import { morphcss } from "@morph-css/kit/vite";
import babel from "@rolldown/plugin-babel";
import { devtools } from "@tanstack/devtools-vite";
import path from "node:path";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";

const repoRoot = path.resolve("..");

const config = defineConfig({
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
        "/api/**": {
          proxy:
            (process.env.VITE_OPERON_AUTH_API_URL || "http://localhost:8081") +
            "/api/**",
        },
      },
    }),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
    viteCompression({ algorithm: "brotliCompress" }),
    viteCompression({ algorithm: "gzip" }),
  ],
});

export default config;
