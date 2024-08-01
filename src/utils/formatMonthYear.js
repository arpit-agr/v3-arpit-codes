/**
 * Formats a Date object to a string in the format "Month Year".
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string.
 */

export function formatMonthYear(date) {
	return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long'});
}
