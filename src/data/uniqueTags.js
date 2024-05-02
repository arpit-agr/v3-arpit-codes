import {reversedBlogPosts} from './reversedBlogPosts';

export const uniqueTags = [
	...new Set(reversedBlogPosts.map(entry => entry.data.tags).flat())
];
