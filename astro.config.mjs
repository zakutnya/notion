import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        port: 3000
    },
    site: 'https://zakutnya.github.io',
    base: 'notion',
});
