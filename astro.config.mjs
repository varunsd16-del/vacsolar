import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vacsolar.com',
  server: {
    host: true,
    port: 4321
  },
  integrations: [
    tailwind(),
    sitemap()
  ],
});
