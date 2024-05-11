import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://arpit.codes',
	redirects: {
		'/notes/[...slug]': '/blog/[...slug]'
	},
	markdown: {
		shikiConfig: {theme: 'vesper'}
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
			nesting: true
		}),
		sitemap()
	]
});
