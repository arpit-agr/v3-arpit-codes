import {reversedLinkItems} from './reversedLinkItems';
import {formatMonthYear} from '../utils/formatMonthYear';

/**
 * Groups an array of link items by month and year.
 * @param {Array} links - The array of link items to group.
 * @returns {Array} An array of objects, each containing a month and its links.
 */
function groupLinksByMonthYear(links) {
	const grouped = {};

	links.forEach(link => {
		const date = new Date(link.data.pubDate);
		const monthYear = formatMonthYear(date);

		if (!grouped[monthYear]) {
			grouped[monthYear] = [];
		}
		grouped[monthYear].push(link);
	});

	return Object.entries(grouped).map(([month, items]) => ({
		month,
		items
	}));
}

export const groupedLinks = groupLinksByMonthYear(reversedLinkItems);
