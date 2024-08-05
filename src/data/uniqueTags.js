import {reversedBlogPosts} from './reversedBlogPosts';
import {reversedLinkItems} from './reversedLinkItems';

// Helper function to safely extract and flatten tags
const extractTags = entries => entries.flatMap(entry => entry.data.tags);

// Extract tags from both sources
const postTags = extractTags(reversedBlogPosts);
const linkTags = extractTags(reversedLinkItems);

export const uniqueTags = [...new Set([...postTags, ...linkTags])];
