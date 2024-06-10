// http://snap.glitch.me/carousel-with-snap-stop.html

// Snappy Carousel with Smooth Scroll

// Grab the wrapper and scroller containing the items
const showcaseWrapper = document.querySelector('.project-showcase-wrapper');
const showcaseScroller = showcaseWrapper.querySelector('.project-showcase');

// Find out the width of one item in the scroller (assuming all items have the same width)
const showcaseItemSize = showcaseScroller.querySelector('li').clientWidth;

// Get the controls container and the individual prev/next buttons
const showcaseControls = document.querySelector('.project-showcase-controls');
const prevButton = showcaseControls.querySelector('[data-direction="prev"]');
const nextButton = showcaseControls.querySelector('[data-direction="next"]');

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia(
	'(prefers-reduced-motion: reduce)'
).matches;

// Set up event listeners for the prev/next buttons to handle scrolling
nextButton.addEventListener('click', scrollToNextPage);
prevButton.addEventListener('click', scrollToPrevPage);

// Scroll to the next item in the scroller
function scrollToNextPage() {
	showcaseScroller.scrollTo({
		left: showcaseScroller.scrollLeft + showcaseItemSize,
		behavior: prefersReducedMotion ? 'auto' : 'smooth' // Smooth scrolling if no preference for reduced motion
	});
}

// Scroll to the previous item in the scroller
function scrollToPrevPage() {
	showcaseScroller.scrollTo({
		left: showcaseScroller.scrollLeft - showcaseItemSize,
		behavior: 'smooth'
	});
}

// Update the state of the prev/next buttons based on the scroll position
function updateButtonState() {
	// Check if the first element is completely visible
	// Disable the prev button if we're at the start
	if (showcaseScroller.scrollLeft === 0) {
		prevButton.disabled = true;
	} else {
		prevButton.disabled = false;
	}

	// Check if the last element is completely visible
	// Disable the next button if we're at the end
	const maxScrollLeft =
		showcaseScroller.scrollWidth - showcaseScroller.clientWidth;
	if (showcaseScroller.scrollLeft >= maxScrollLeft) {
		nextButton.disabled = true;
	} else {
		nextButton.disabled = false;
	}
}

// Initial check to set the correct button state when the page loads
updateButtonState();

// Update button state after each scroll event
showcaseScroller.addEventListener('scroll', updateButtonState);
