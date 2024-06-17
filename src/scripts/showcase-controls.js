// Snappy Carousel with Smooth Scroll
// This script enables smooth horizontal scrolling for a carousel of items with forward and backward navigation buttons. It also respects users' reduced motion preferences and dynamically updates button states based on the scroll position.

// Grab the wrapper and scroller containing the items
const showcaseWrapper = document.querySelector('.project-showcase-wrapper');
const showcaseScroller = showcaseWrapper.querySelector('.project-showcase');

// Get all items and the last item
const showcaseItems = showcaseScroller.querySelectorAll('li');
const lastItem = showcaseItems[showcaseItems.length - 1];

// Find out the width of one item in the scroller (assuming all items have the same width)
const showcaseItemSize = showcaseItems[0].getBoundingClientRect().width;

// Get the controls container and the individual prev/next buttons
const showcaseControls = document.querySelector('.project-showcase-controls');
const prevButton = showcaseControls.querySelector('[data-direction="prev"]');
const nextButton = showcaseControls.querySelector('[data-direction="next"]');

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia(
	'(prefers-reduced-motion: reduce)'
).matches;

// Set up event listeners for the prev/next buttons to handle scrolling
nextButton.addEventListener('click', scrollToNextItem);
prevButton.addEventListener('click', scrollToPrevItem);

// Scroll to the next item in the scroller
function scrollToNextItem() {
	showcaseScroller.scrollBy({
		left: showcaseItemSize,
		behavior: prefersReducedMotion ? 'auto' : 'smooth'
	});
}

// Scroll to the previous item in the scroller
function scrollToPrevItem() {
	showcaseScroller.scrollBy({
		left: -showcaseItemSize,
		behavior: prefersReducedMotion ? 'auto' : 'smooth'
	});
}

// Check if an element is fully visible within its container
function isFullyVisible(element, container) {
	const elementRect = element.getBoundingClientRect();
	const containerRect = container.getBoundingClientRect();

	return (
		elementRect.left >= containerRect.left &&
		elementRect.right <= containerRect.right
	);
}

// Update the state of the prev/next buttons based on the scroll position
function updateButtonState() {
	// Disable the prev button if we're at the start
	prevButton.disabled = showcaseScroller.scrollLeft === 0;

	// Disable the next button if the last item is fully visible
	nextButton.disabled = isFullyVisible(lastItem, showcaseWrapper);
}

// Initial check to set the correct button state when the page loads
updateButtonState();

// Update button state after each scroll event
showcaseScroller.addEventListener('scroll', updateButtonState);

// Update button state when window is resized
window.addEventListener('resize', updateButtonState);
