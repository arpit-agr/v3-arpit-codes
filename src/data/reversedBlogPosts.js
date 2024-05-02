import {publishedBlogPosts} from './publishedBlogPosts';

export const reversedBlogPosts = [...publishedBlogPosts].sort(
	(a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
);
