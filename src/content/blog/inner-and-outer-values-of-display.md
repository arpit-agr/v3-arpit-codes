---
title: 'Inner And Outer Values Of `display`'
summary: 'Rachel Andrew explains the two-value syntax of the `display` property, clarifying how it affects element layout and child behavior in CSS.'
pubDate: 2024-05-13
tags: ['display', 'layout', 'css', 'rachel-andrew']
---

[Stefan Judis's post](https://front-end.social/@stefan/112426743422409016) on Mastodon about multi-keyword display values in CSS caught my attention, as I hadn't encountered this two-value syntax before.

> Hand to the heart: is anyone using multi-keyword display values? Because I haven't seem them anywhere but the MDN docs. 🫣

```css
.element {
	/* multi-keyword syntax */
	display: block flex;
	display: block flow;
	display: block flow-root;
	display: block grid;
	display: inline flex;
	display: inline flow;
	display: inline flow-root;
	display: inline grid;
}
```

It prompted me to delve deeper into the topic. Fortunately, [Rachel Andrew](https://rachelandrew.co.uk/) replied to Stefan's post, sharing that they had written about this topic several years ago.

They explain in ["Digging Into The Display Property: The Two Values Of Display"](https://www.smashingmagazine.com/2019/04/display-two-value/):

> In [Level 3 of the Display specification](https://www.w3.org/TR/css-display-3), the value of `display` is defined as two keywords. These keywords define the outer value of display, which will be `inline` or `block` and therefore define how the element behaves in the layout alongside other elements. They also define the inner value of the element — or how the direct children of that element behave.
>
> This means that when you say `display: grid`, what you are really saying is `display: block grid`. You are asking for a block level grid container. An element that will have all of the block attributes — you can give it height and width, margin and padding, and it will stretch to fill the container. The children of that container, however, have been given the inner value of `grid` so they become grid items. How those grid items behave is defined in the CSS Grid Specification: the `display` spec gives us a way to tell the browser that this is the layout method we want to use.

As simply put by Rachel:

> When you define layout on a box in CSS, you are defining what happens to this box in terms of how it behaves in relation to all of the other boxes in the layout. You are also defining how the children of that box behave.

## Browser Support

As per [Can I Use](https://caniuse.com/?search=display%20multi) and [Web Platform Dashboard](https://webstatus.dev/features/two-value-display?q=display), browsers do support the two-value syntax for the display property since 21 July 2023.

## More on the `display` property

[Rachel's article](https://www.smashingmagazine.com/2019/04/display-two-value/) also explains block and inline layout, `flow-root` and `inline-block`. It's an essential read and worth reading in its entirety.
