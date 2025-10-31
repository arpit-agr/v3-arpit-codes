// 1. Import utilities from `astro:content`
import {z, defineCollection} from 'astro:content';

const designPrinciplesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		url: z.string().url(),
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
	designPrinciples: designPrinciplesCollection,
	books: booksCollection
};
