import { defineConfig } from 'astro/config';

export default defineConfig({
  // Production URL (used for canonical and Open Graph URLs).
  site: 'https://salao-lumina.vercel.app',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  // Generate responsive srcset for every <Image>; layout styles stay in site CSS.
  image: { layout: 'constrained', responsiveStyles: false },
});
