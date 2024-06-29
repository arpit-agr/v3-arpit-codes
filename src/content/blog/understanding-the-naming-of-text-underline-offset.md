---
title: 'The `text-underline-offset` CSS Property'
summary: '`text-underline-offset` controls the position of the underline and not other possible line decoration options such as `overline` or `line-through`.'
pubDate: 2024-01-19
tags: ['underline', 'css', 'kevin-powell']
---

The `text-underline-offset` CSS property sets how far you want the underline to be from its default position.

```css
a {
	text-underline-offset: 4px;
}
```

Thanks to [Kevin Powell](https://youtube.com/watch?v=x3MTfp3HDLc&t=506), today I learnt that the `text-underline-offset` property is named so because it _only_ applies to underlines.

As per [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset):

> `text-underline-offset` is not part of the [`text-decoration`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) shorthand. While an element can have multiple `text-decoration` lines, `text-underline-offset` only impacts underlining, and not other possible line decoration options such as `overline` or `line-through`.

Understanding this will be beneficial because the `text-underline-offset` property frequently trips me up. All other underline style properties are tied to the `text-decoration` property, so I instinctively reach for text-decoration-offset.

```css
a {
	text-decoration-thickness: 4px;
	text-decoration-style: solid;
	text-decoration-color: red;
	text-underline-offset: 4px;
}
```
