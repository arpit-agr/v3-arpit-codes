---
title: 'The `text-underline-offset` CSS Property'
summary: '`text-underline-offset` controls the position of underlines and not other possible line decoration options such as `overline` or `line-through`.'
pubDate: 2024-01-19
tags: ['underline', 'text-decoration', 'css', 'kevin-powell']
---

The `text-underline-offset` CSS property sets the distance of the underline from its default position.

Thanks to [Kevin Powell](https://youtube.com/watch?v=x3MTfp3HDLc&t=506), today I learnt that the `text-underline-offset` property is named so because it _only_ applies to underlines and not other [`text-decoration-line`](/blog/text-decoration-line-css-property/) values like `overline` and `line-through`.

```css
a {
	text-decoration-line: underline;
	text-underline-offset: 4px;
}
```

As per [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset):

> While an element can have multiple `text-decoration` lines, `text-underline-offset` only impacts underlining, and not other possible line decoration options such as `overline` or `line-through`.

Understanding this distinction will be beneficial because I often get confused while styling the underline offset. Since all other underline style properties are associated with the `text-decoration` property, I mistakenly end up applying the non-existent `text-decoration-offset` property.

```css
a {
	text-decoration-line: underline;
	text-decoration-thickness: 4px;
	text-decoration-style: solid;
	text-decoration-color: red;
	text-decoration-offset: 4px; /* ❌ */
	text-underline-offset: 4px; /* ✅ */
}
```

With this knowledge, I can now confidently style underline offsets. This clarity will help me avoid confusion in future CSS projects.
