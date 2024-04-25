document.addEventListener('clipboard-copy', function (event) {
	// Fallback for browsers that don't support this API:
	if (!document.startViewTransition) {
		announceAndSetVisibility(event);
		return;
	}

	// With a transition:
	document.startViewTransition(() => announceAndSetVisibility(event));
});

function announceAndSetVisibility(data) {
	const notice = data.target.querySelector('.notice');
	const copyLabel = data.target.querySelector('.copy-label');

	announce.setAttribute('aria-label', 'Copied');
	notice.hidden = false; // Show the "Copied" text
	copyLabel.hidden = true; // Hide the "Copy" text

	setTimeout(function () {
		announce.setAttribute('aria-label', '');
		notice.hidden = true;
		copyLabel.hidden = false;
	}, 1000);
}
