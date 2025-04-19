---
title: 'The `text-underline-offset` CSS property'
summary: '`text-underline-offset` controls the position of underlines and not other possible line decoration options such as `overline` or `line-through`.'
pubDate: 2024-01-19
tags: ['underline', 'text-decoration', 'css', 'kevin-powell', 'code-pen-demo']
---

The `text-underline-offset` CSS property sets the distance of the underline from its default position.

```css
a {
	text-underline-offset: 4px;
}
```

Thanks to [Kevin Powell](https://youtube.com/watch?v=x3MTfp3HDLc&t=506), today I learned that the `text-underline-offset` property is named so because it _only_ applies to underlines and not other [`text-decoration-line`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line) values like `overline` and `line-through`.

From [MDN's guide on `text-underline-offset`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset):

> `text-underline-offset` is not part of the [`text-decoration`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) shorthand. While an element can have multiple `text-decoration` lines, `text-underline-offset` only impacts underlining, and not other possible line decoration options such as `overline` or `line-through`.

<code-pen>

```html
<a href="https://example.com">Example</a>
```

```css
a {
	text-decoration-line: underline overline; /* We can set multiple line-decoration properties at once */
	text-underline-offset: 16px; /* Only impacts underline */
}
```

</code-pen>

Understanding this distinction will be beneficial because I often get confused while styling the underline offset. Since all other underline style properties are associated with the `text-decoration` property, I mistakenly end up applying the non-existent `text-decoration-offset` property.

```css
a {
	text-decoration-line: underline; /* Sets the kind of decoration that is used on text in an element */
	text-decoration-thickness: 4px;
	text-decoration-style: double; /* Sets the style of the lines specified by text-decoration-line */
	text-decoration-color: red;
	text-decoration-offset: 4px; /* ❌ */ /* [!code --] */
	text-underline-offset: 4px; /* ✅ */ /* [!code ++] */
}
```

With this knowledge, I can now confidently style underline offsets. This clarity will help me avoid confusion in future CSS projects.
