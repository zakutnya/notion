import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    server: {
        port: 3000
    },
    site: 'https://exil-solidaire.vercel.app/',
    integrations: [mdx(), tailwind(), pagefind()],
    build: {
        format: "file",
    }
});