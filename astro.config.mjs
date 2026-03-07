import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

const sitePrefix = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';

export default defineConfig({
  site: sitePrefix,
  devToolbar: {
    enabled: false,
    placement: 'bottom-left',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap(), icon()],
});
