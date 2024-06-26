import {min as _min, max as _max} from '../design-tokens/viewports.json';

/**
 * Takes an array of tokens and sends back and array of name
 * and clamp pairs for CSS fluid values.
 *
 * @param {array} tokens array of {name: string, min: number, max: number}
 * @returns {array} {name: string, value: string}
 */
const clampGenerator = tokens => {
	const rootSize = 16;

	return tokens.map(({name, min, max}) => {
		if (min === max) {
			return `${min / rootSize}rem`;
		}

		// Convert the min and max sizes to rems
		const minSize = min / rootSize;
		const maxSize = max / rootSize;

		// Convert the pixel viewport sizes into rems
		const minViewport = _min / rootSize;
		const maxViewport = _max / rootSize;

		// Slope and intersection allow us to have a fluid value but also keep that sensible
		const slope = (maxSize - minSize) / (maxViewport - minViewport);
		const intersection = -1 * minViewport * slope + minSize;

		if (minSize > maxSize) {
			return {
				name,
				value: `clamp(${maxSize.toFixed(2)}rem, ${intersection.toFixed(2)}rem + ${(
					slope * 100
				).toFixed(2)}vw, ${minSize.toFixed(2)}rem)`
			};
		} else {
			return {
				name,
				value: `clamp(${minSize.toFixed(2)}rem, ${intersection.toFixed(2)}rem + ${(
					slope * 100
				).toFixed(2)}vw, ${maxSize.toFixed(2)}rem)`
			};
		}
	});
};

export default clampGenerator;
