import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeAttrs from 'rehype-attr';

// https://astro.build/config
export default defineConfig({
	site: 'https://arpit.codes',
	redirects: {
		'/notes/[...slug]': '/blog/[...slug]'
	},
	markdown: {
		rehypePlugins: [[rehypeAttrs, {properties: 'attr'}]],
		shikiConfig: {theme: 'material-theme-darker'}
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
			nesting: true
		}),
		sitemap()
	]
});
