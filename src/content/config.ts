// 1. Import utilities from `astro:content`
import {z, defineCollection} from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		summary: z.string().max(160).optional(),
		featuredImg: z
			.object({
				url: z.string(),
				caption: z.string().optional()
			})
			.optional(),
		pubDate: z.date(),
		tags: z.array(z.string()),
		draft: z.boolean().optional()
	})
});

const linksCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		url: z.string(),
		pubDate: z.date(),
		tags: z.array(z.string())
	})
});

const designPrinciplesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		url: z.string(),
		origin: z.string().optional(),
		author: z.array(z.string()).optional()
	})
});

const booksCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		author: z.string(),
		bookCover: z.string()
	})
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	blog: blogCollection,
	links: linksCollection,
	designPrinciples: designPrinciplesCollection,
	books: booksCollection
};
