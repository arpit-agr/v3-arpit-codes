import {getCollection} from 'astro:content';

export const publishedBlogPosts = await getCollection('blog', ({data}) => {
	if (import.meta.env.PROD) {
		return data.draft !== true;
	} else {
		return data;
	}
});
