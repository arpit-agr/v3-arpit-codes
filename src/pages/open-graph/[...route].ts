import {OGImageRoute} from 'astro-og-canvas';
import slugify from 'slugify';
import pageData from '../../data/pages.json';
import {reversedBlogPosts} from '../../data/reversedBlogPosts';
import {uniqueTags} from '../../data/uniqueTags';

// Generate pages for pages JSON data
const pages = Object.fromEntries(
	pageData.map(page => [
		slugify(page.title, {lower: true}),
		{
			title: page.title,
			description: page.description
		}
	])
);

// Generate pages for blog posts
const posts = Object.fromEntries(
	reversedBlogPosts.map(({slug, data}) => [`blog/${slug}`, data])
);

// Generate pages for individual tag pages
const tags = Object.fromEntries(
	uniqueTags.map(tag => [
		`tags/${tag}`,
		{
			title: `Tag: ${tag}`,
			description: `Explore posts tagged '${tag}'`
		}
	])
);

const opengraphPages = {...pages, ...posts, ...tags};

export const {getStaticPaths, GET} = OGImageRoute({
	param: 'route',
	pages: opengraphPages,

	getImageOptions: (_path, page) => {
		let titleSize = 93; // Default size for pages and tags
		let descriptionSize = 48;
		if (_path.startsWith('blog/') && _path !== '/blog/') {
			titleSize = 60; // Different size for blog collection entries
			descriptionSize = 48;
		}

		return {
			title: page.title,
			description: page.description,
			bgImage: {
				path: './public/images/arpit-codes-og-bg.png',
				fit: 'cover'
			},
			padding: 60,
			font: {
				title: {
					color: [235, 237, 239],
					size: titleSize,
					weight: 'SemiBold',
					lineHeight: 1.4,
					families: ['Geist', 'Arial']
				},
				description: {
					color: [209, 214, 216],
					size: descriptionSize,
					weight: 'Normal',
					lineHeight: 1.6,
					families: ['Geist', 'Arial']
				}
			},
			fonts: ['./public/fonts/GeistVF.woff2']
		};
	}
});
