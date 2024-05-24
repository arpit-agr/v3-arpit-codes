import rss from '@astrojs/rss';
import {getCollection} from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
	const blog = await getCollection('blog');
	return rss({
		title: "Arpit's Blog",
		description:
			"Arpit's blog is a place where he writes about and collects what he learns across various topics that pique his curiosity.",
		site: context.site,
		trailingSlash: false,
		items: blog.map(post => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${post.slug}/`,
			content: sanitizeHtml(parser.render(post.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
			}),
			...post.data
		})),
		customData: `<language>en-us</language>`,
		stylesheet: '/rss/styles.xsl'
	});
}
