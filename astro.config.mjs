import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {theme: 'vesper'}
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
			nesting: true
		}),
		partytown(),
		sitemap()
	]
});
