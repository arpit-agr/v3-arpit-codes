import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeAttrs from 'rehype-attr';
import {
	transformerNotationDiff,
	transformerMetaHighlight,
	transformerNotationErrorLevel,
	transformerRemoveLineBreak
} from '@shikijs/transformers';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://arpit.codes',
	trailingSlash: 'always',
	redirects: {
		'/notes/understanding-the-naming-of-text-underline-offset/':
			'/blog/understanding-the-naming-of-text-underline-offset',
		'/notes/bhagat-singh-atheism/': '/blog/bhagat-singh-atheism'
	},
	markdown: {
		rehypePlugins: [
			[
				rehypeAttrs,
				{
					properties: 'attr'
				}
			]
		],
		shikiConfig: {
			theme: 'nord',
			transformers: [
				transformerNotationDiff(),
				transformerMetaHighlight(),
				transformerNotationErrorLevel(),
				transformerRemoveLineBreak()
			]
		}
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
			nesting: true
		}),
		sitemap(),
		icon()
	]
});
