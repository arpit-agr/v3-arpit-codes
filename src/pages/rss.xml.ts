// Adding RSS Feed Content and Fixing Markdown Image Paths in Astro
/* https://billyle.dev/posts/adding-rss-feed-content-and-fixing-markdown-image-paths-in-astro */

import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import {reversedBlogPosts} from '../data/reversedBlogPosts';
import {parse as htmlParser} from 'node-html-parser';
import {getImage} from 'astro:assets';

import type {AstroGlobal} from 'astro';
import type {RSSFeedItem} from '@astrojs/rss';

const parser = new MarkdownIt();

// get dynamic import of images as a map collection
const imagesGlob = import.meta.glob<{default: ImageMetadata}>(
	'/src/content/blog/**/*.{jpeg,jpg,png,webp}'
);

export async function GET(context: AstroGlobal) {
	if (!context.site) {
		throw Error('site not set');
	}

	const feed: RSSFeedItem[] = [];

	for (const post of reversedBlogPosts) {
		// remove rehype attributes
		const postMarkdown = post.body.replace(/<!--rehype:[\s\S]*?-->/g, '');

		// convert markdown to html string
		const body = parser.render(postMarkdown);

		// convert html string to DOM-like structure
		const html = htmlParser.parse(body);
		// hold all img tags in variable images
		const images = html.querySelectorAll('img');

		for (const img of images) {
			const src = img.getAttribute('src')!;

			// Relative paths that are optimized by Astro build
			if (src.startsWith('./')) {
				// remove prefix of `./`
				const prefixRemoved = src.replace('./', '');
				// create prefix absolute path from root dir
				const imagePathPrefix = `/src/content/blog/${post.slug}/${prefixRemoved}`;

				// call the dynamic import and return the module
				const imagePath = await imagesGlob[imagePathPrefix]?.()?.then(
					res => res.default
				);

				if (imagePath) {
					const optimizedImg = await getImage({src: imagePath});
					// set the correct path to the optimized image
					img.setAttribute(
						'src',
						context.site + optimizedImg.src.replace('/', '')
					);
				}
			} else if (src.startsWith('/images')) {
				// images starting with `/images/` is the public dir
				img.setAttribute('src', context.site + src.replace('/', ''));
			} else {
				throw Error('src unknown');
			}
		}

		feed.push({
			title: post.data.title,
			description: post.data.standfirst,
			pubDate: post.data.pubDate,
			categories: post.data.tags,
			link: `/blog/${post.slug}`,
			// sanitize the new html string with corrected image paths
			content: sanitizeHtml(html.toString(), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
			})
		});
	}

	return rss({
		xmlns: {
			atom: 'http://www.w3.org/2005/Atom'
		},
		title: 'Arpit Agrawal',
		description:
			'Arpit Agrawal is a web designer-developer from India. He designs and builds beautiful, blazing-fast websites. This blog is a place where he writes about and collects what he learns across various topics that pique his curiosity.',
		site: context.site,
		items: feed,
		customData: [
			'<language>en-us</language>',
			`<atom:link href="${new URL('rss.xml', context.site)}" rel="self" type="application/rss+xml" />`
		].join(''),
		stylesheet: '/rss/styles.xsl',
		trailingSlash: false
	});
}
