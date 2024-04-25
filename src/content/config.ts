// 1. Import utilities from `astro:content`
import {z, defineCollection} from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		tags: z.array(z.string()),
		image: z
			.object({
				src: z.string(),
				alt: z.string()
			})
			.optional(),
		draft: z.boolean().optional()
	})
});

const designPrinciplesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		url: z.string(),
		description: z.string()
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
	designPrinciples: designPrinciplesCollection,
	books: booksCollection
};
