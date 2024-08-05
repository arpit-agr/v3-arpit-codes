export function findMatchingItem(pageUrlPathname, array) {
	for (let item of array) {
		if (!!item.linkURL && item.linkURL === pageUrlPathname) {
			return item;
		}
	}
	return null; // If no match found
}
