import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://www.4bd4ll4h.site',
  base: '/',
  build: {
    assets: 'assets',
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
