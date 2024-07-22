---
title: 'Transparent Borders'
summary: 'Using transparent borders instead of removing them entirely offers significant benefits for accessibility, user experience, and design system flexibility.'
pubDate: 2024-05-12
tags:
  [
    'accessibility',
    'high-contrast-mode',
    'design-systems',
    'css',
    'dave-rupert',
    'brad-frost',
    'code-pen-demo'
  ]
---

In web development, small design decisions can have a significant impact on accessibility and user experience. One such decision is how we handle borders on interactive elements.

## The Problem with Border: None

When styling interactive elements like buttons, it's common practice to remove default borders using `border: none`. However, this approach can lead to accessibility issues, especially in [high contrast mode](/blog/testing-in-forced-colors-mode/). As demonstrated in the image below, removing the border entirely can cause buttons to appear as floating text on the page, making it difficult for users with low vision to distinguish interactive elements.

![Side-by-side comparison of the contact form on Slae.app. The left image shows the contact form with forced colors disabled, displaying the default color scheme. The right image shows the contact form with forced colors enabled. In the right image, the submit button appears as floating text on the page.](./slae-before-after-high-contrast-mode.webp)<!--rehype:loading=eager-->

[Dave Rupert](https://frontendmasters.com/blog/you-want-border-color-transparent-not-border-none/) explains the importance of the default border and why it exists:

> In the case of interactive form controls (inputs, textareas, buttons, etc.), those pesky borders were put there because they have an accessibility benefit when using High Contrast Mode, a feature [used by 30.6% of low-vision users](https://webaim.org/projects/lowvisionsurvey2/#at).

## The Transparent Border Solution

To address this issue, Dave recommends making the border or outline transparent instead of removing it entirely. This can be achieved with the following CSS:

```css
button {
	border-color: transparent;
}
```

As demonstrated in the image below, this approach is effective for several reasons. First, sighted users will not notice the difference. Second, as [Kilian Valkhof](https://polypane.app/blog/forced-colors-explained-a-practical-guide/) explains, in forced color mode, the border color or outline color "will be overwritten with the current text color, making it nicely visible again without needing any special adaption or re-styling for forced color mode."

![Side-by-side comparison of the contact form on Slae.app with the transparent border solution applied. The left image shows the contact form with forced colors disabled, displaying the default color scheme. The right image shows the contact form with forced colors enabled. In the right image, the submit button appears as a button.](./slae-before-after-transparent-border.jpg)

## User Experience Benefits

Using transparent borders offers additional benefits for user experience. Consider hover effects, for example.

```css
button {
	border: none;
}

button:hover {
	border: 2px solid navy;
}
```

In such situations, applying a visible border on hover can inadvertently change the element's dimensions. This change in size can result in a jarring visual effect.

By setting a transparent border in the default state, we ensure smooth transitions and consistent element sizes across different states.

<code-pen>

```html
<div>
	<button class="no-border-btn">Button with no border</button>
	<button class="transparent-border-btn">Button with transparent border</button>
</div>
```

```css
.no-border-btn {
	border: none;

	&:hover {
		border: 2px solid navy;
	}
}

.transparent-border-btn {
	border: 2px solid transparent;

	&:hover {
		border-color: navy;
	}
}
```

</code-pen>

## Implications for Design Systems

Transparent borders are also valuable in the context of themeable design systems. [Brad Frost](https://bradfrost.com/blog/post/transparent-borders/) elaborates:

> When supporting multiple theme, it can be common for some themes to use borders while others don’t. This flexibility is great! Each brand is able to express themselves how they see fit. But if implemented using different border widths, shifts in the box model happen.

By using `border-color: transparent` for themes without visible borders, designers and developers can maintain consistent element sizes across different variants and themes. This approach provides the flexibility to adapt the visual design while preserving the underlying structure and layout of the components.

## Conclusion

Implementing transparent borders in your CSS addresses crucial accessibility concerns, enhances user experience across different display modes, and provides the flexibility needed for robust, adaptable design systems.
