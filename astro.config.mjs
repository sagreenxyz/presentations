import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://sagreenxyz.github.io",
  base: "/presentations",
  vite: {
    plugins: [tailwindcss()],
  },
});
