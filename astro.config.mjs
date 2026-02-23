// @ts-check

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://leticiabrito.com.br',
  devToolbar: {
    enabled: false,
    placement: 'bottom-left',
  },
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: ['icow44kcc0oc4ccockc4kw40.72.60.139.146.sslip.io'],
    },
  },
  integrations: [react(), sitemap()],
});
