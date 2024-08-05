import {getCollection} from 'astro:content';
const linkItems = await getCollection('links', ({data}) => data);

export const reversedLinkItems = [...linkItems].sort(
	(a, b) =>
		new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
);
