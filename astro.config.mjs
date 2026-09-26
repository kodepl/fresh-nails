import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  site: "https://www.freshnails.pl",
  trailingSlash: "always",
  compressHTML: true,
  markdown: { rehypePlugins: [rehypeSlug] },
  integrations: [tailwind()],
});
