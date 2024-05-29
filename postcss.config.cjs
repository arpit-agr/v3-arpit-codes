const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');

module.exports = {
	plugins: [
		postcssJitProps(OpenProps), // Load custom properties first
		require('tailwindcss/nesting'), // Apply nesting
		require('tailwindcss'), // Generate Tailwind utilities
		require('postcss-custom-media') // Apply custom media queries
	]
};
