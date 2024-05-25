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
const posts = Object.fromEntries(reversedBlogPosts.map(({slug, data}) => [slug, data]));

// Generate pages for individual tag pages
const tags = Object.fromEntries(
	uniqueTags.map(tag => [
		`${tag}`,
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

	getImageOptions: (_path, page) => ({
		title: page.title,
		description: page.description,
		bgImage: {
			path: './public/images/arpit-codes-og-bg.png',
			fit: 'cover'
		},
		padding: 74,
		font: {
			title: {
				color: [235, 237, 239],
				size: 74,
				weight: 'SemiBold',
				lineHeight: 1.3,
				families: ['Geist', 'Arial']
			},
			description: {
				color: [235, 237, 239],
				size: 38,
				weight: 'Normal',
				lineHeight: 1.6,
				families: ['Geist', 'Arial']
			}
		},
		fonts: ['./public/fonts/GeistVF.woff2']
	})
});
