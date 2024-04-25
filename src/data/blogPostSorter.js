import {getCollection} from 'astro:content';

const publishedBlogPosts = await getCollection('blog', ({data}) => {
	return data.draft !== true;
});

export const reversedBlogPosts = [...publishedBlogPosts].sort(
	(a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
);
