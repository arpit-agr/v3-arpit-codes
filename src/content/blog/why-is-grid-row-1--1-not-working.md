---
title: 'Why is `grid-row: 1/-1` not working?'
summary: '-1 is the end-most explicit line, if no explicit rows exist, then all the rows are implicit. Understanding explicit vs. implicit grids clarifies everything.'
pubDate: 2025-02-05
tags: ['grid', 'grid-placement', 'css']
---

## Grid placement using `grid-row`

The `grid-row` grid-placement property is shorthand for `grid-row-start` and `grid-row-end`.

```css
.grid-item {
	grid-row: 1/-1;

	/* is equivalent to */

	grid-row-start: 1;
	grid-row-end: -1;
}
```

## Numeric Indexes and spans

In the above declaration, the value `1/-1` uses integers to position and size the grid item by line numbers.

As per the [spec](https://www.w3.org/TR/css-grid-1/#:~:text=Numeric,-indexes%20in%20the):

> Numeric indexes in the grid-placement properties count from the edges of the explicit grid. Positive indexes count from the start side (starting from 1 for the start-most explicit line), while negative indexes count from the end side (starting from -1 for the end-most explicit line).

The important bit is the explicit grid. This begs the question …

## What is the explicit grid?

As per the [spec](https://www.w3.org/TR/css-grid-1/#explicit-grids):

> The three properties `grid-template-rows`, `grid-template-columns`, and `grid-template-areas` together define the explicit grid of a grid container by specifying its explicit grid tracks.

Simply put, the explicit grid consists of manually defined rows and columns.

> The size of the explicit grid is determined by the larger of the number of rows/columns defined by `grid-template-areas` and the number of rows/columns sized by `grid-template-rows`/`grid-template-columns`. Any rows/columns defined by `grid-template-areas` but not sized by `grid-template-rows`/`grid-template-columns` take their size from the `grid-auto-rows`/`grid-auto-columns` properties. If these properties don’t define any explicit tracks the explicit grid still contains one grid line in each axis.

That last bit is what leads to line -1 being the same line as 1 because the explicit grid still contains one grid line in each axis.

## What is the implicit grid?

As [Manuel Matuzovic](https://css-tricks.com/difference-explicit-implicit-grids/#aa-implicit-grids) puts it:

> If there are more grid items than cells in the grid or when a grid item is placed outside of the explicit grid, the grid container automatically generates grid tracks by adding grid lines to the grid. The explicit grid together with these additional implicit tracks and lines forms the so called implicit grid.

## Conclusion

Paraphrasing [Jen Simmons](https://x.com/jensimmons/status/1239587367046037504):

- -1 is the last line of the _explicit_ grid
- If you haven't defined any explicit rows, then all your rows are implicit
- For implicit rows, -1 is the same line as 1
- Define explicit rows and `grid-row: 1/-1` will work as expected

## Further Reading

- [How does grid-row: 1 / -1 actually work?](https://stackoverflow.com/questions/63775143/how-does-grid-row-1-1-actually-work-references-needed)
- [What defines an explicit grid?](https://stackoverflow.com/questions/73559099/what-defines-an-explicit-grid)
