// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://klaustg.github.io/limepack",
  base: "/limepack",

  vite: {
    plugins: [tailwindcss()],
  },
});
