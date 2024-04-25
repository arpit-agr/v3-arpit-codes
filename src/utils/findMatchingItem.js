export function findMatchingItem(pageUrlPathname, pageData) {
	if (!Array.isArray(pageData)) {
		throw new Error('pageData must be an array');
	}

	for (let item of pageData) {
		if (item.linkURL && item.linkURL === pageUrlPathname) {
			return item;
		}
	}
	return null; // If no match found
}
