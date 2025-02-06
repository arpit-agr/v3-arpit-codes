---
title: Understanding `grid-auto-rows` and `grid-auto-columns`
summary: '`grid-auto-rows` and `grid-auto-columns` size implicit tracks as well as any explicit tracks that are not explicitly sized.'
pubDate: 2025-02-05
tags: ['grid', 'css', 'code-pen-demo']
---

Until now, I was under the impression that the `grid-auto-rows` and `grid-auto-columns` properties size only the implicit grid tracks.

Today I learned from the [spec](https://www.w3.org/TR/css-grid-1/#:~:text=form%20the%20implicit%20grid.-,The,-grid%2Dauto%2Drows%20and):

> The `grid-auto-rows` and `grid-auto-columns` properties size these implicit grid tracks, as well as any explicit grid tracks created by grid-template-areas but not explicitly sized by `grid-template-rows` or `grid-template-columns`

Simply put, the `grid-auto-columns` and `grid-auto-rows` properties specify the size of tracks not assigned a size by `grid-template-rows` or `grid-template-columns`.

Inspect the following demo using Firefox grid inspector which does a great job displaying this behaivour.

<code-pen>

```html
<div class="grid-container">
	<div>Item</div>
	<div>Item</div>
	<div>Item</div>
	<div>Item</div>
	<div>Item</div>
</div>
```

```css
.grid-container {
	display: grid;
	grid-template-areas:
		'. .'
		'. .'
		'. .'
		'. .'
		'. .';
	grid-template-rows: repeat(2, 20px 50px);
	grid-auto-rows: 100px;
	gap: 1px;
	border: 1px solid;

	> div {
		outline: 1px solid red;
	}
}
```

</code-pen>
