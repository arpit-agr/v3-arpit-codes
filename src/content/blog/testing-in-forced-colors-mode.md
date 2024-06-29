---
title: 'Testing in Forced Colors Mode'
summary: 'Testing in forced colors mode improves accessibility for users and reveals design flaws, such as excessive reliance on color cues.'
pubDate: 2024-05-21
tags:
  [
    'forced-colors',
    'test',
    'high-contrast-mode',
    'accessibility',
    'css',
    'dave-rupert',
    'design',
    'kilian-valkhof',
    'low-vision',
		'media-query'
  ]
---

## Understanding the `forced-colors` CSS media query

From [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors):

> The `forced-colors` CSS media feature is used to detect if the user agent has enabled a forced colors mode where it enforces a user-chosen limited color palette on the page. An example of a forced colors mode is Windows High Contrast mode.

Regarding Windows High Contrast mode, as highlighted on the [Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/):

> The name "high contrast" is actually a misnomer—users can set their theme colors to whatever they prefer, including themes that result in _lower_ than common contrast levels.

```css
@media (forced-colors: active) {
	/* Styles here apply only when forced colors are active */
}
```

## Who uses this feature?

As [Kilian Valkhof](https://polypane.app/blog/forced-colors-explained-a-practical-guide/) explains:

> High contrast mode is useful for many different people and includes people with low vision, color blindness, people prone to migraines or light sensitivity and people prone to overstimulation.
>
> But also people who know of the feature and use it to keep their screen readable in bright sunlight, or dim their entire UI in dark environments

## So why should we test in forced colors mode?

As [Dave Rupert](https://frontendmasters.com/blog/you-want-border-color-transparent-not-border-none/#testing-forced-colors) mentions, "it’s worthwhile to test High-Contrast Mode just to support low-vision users." Additionally, since forced colors mode "aggressively flattens and removes colors it has a knock-on effect of showing places where you’ve over-relied on color to make elements or states distinct, which is another accessibility error in itself ([§1.4.1](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html))."

## CSS Properties affected by forced-color mode

Forced-color mode impacts various CSS properties. For a comprehensive list and detailed explanation, refer to the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors#properties_affected_by_forced-color_mode).
