---
title: 'Sorting numbers and strings that contain numbers in JavaScript'
summary: "JavaScript's default array sort method sorts numbers incorrectly. Discover how to sort numbers properly & use the Intl.Collator API for natural sorting."
pubDate: 2025-04-18
tags: ['sort', 'internationalization-api', 'javascript', 'jan-miksovsky']
---

Recently, I was reading [Jan Miksovsky's article](https://jan.miksovsky.com/posts/2025/04-17-zero-dependencies) on how he built a basic static site generator using plain JS with zero dependencies.

While exploring the [source code](https://github.com/WebOrigami/pondlife-zero-deps), I noticed the following bit of code:

```js
// For sorting in natural order
const naturalOrder = new Intl.Collator(undefined, {
	numeric: true
}).compare;
```

I was unaware of the [`Intl.Collator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) API and that it can be used for sorting. This sent me down a bit of a rabbit hole, revealing I had the wrong mental model of how JavaScript's default array [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) works and showing me a counter-intuitive detail about its behavior, especially with numbers.

In this post, I want to share what I learned about this surprising default behavior, why it can trip you up, and better ways to handle sorting correctly in JavaScript, including the neat `Intl.Collator` API that Jan's code led me to discover.

## The default sorting behaviour

By default, when no compare function is provided, the `sort()` method converts each element into a string and then compares these strings based on their sequences of UTF-16 code unit values. (JavaScript strings use the UTF-16 character encoding).

This string-based comparison can lead to results that seem "absurd" when you expect numeric sorting. Consider the following array of numbers:

```js
const array = [9, 8, 7, 60, 5];
array.sort();
// Output: [5, 60, 7, 8, 9]
```

When we sort this array using the default `sort()`, the numbers are first converted to strings. Then, the comparison starts with the UTF-16 code unit value of the first character of each string. The character '6' in '60' has a UTF-16 code unit value of 54, which is lower than the code unit values for '7' (55), '8' (56), and '9' (57). The rest of the string ('0' in '60') is only considered if the first characters are the same. This is why '60' appears before '7', '8', and '9' in the sorted output.

```js
'5'.charCodeAt(0); // Output: 53
'60'.charCodeAt(0); // Output: 54
'7'.charCodeAt(0); // Output: 55
'8'.charCodeAt(0); // Output: 56
'9'.charCodeAt(0); // Output: 57
```

## Sorting Numbers Correctly

If you are specifically sorting an array that contains only numbers, the standard way to achieve correct numeric sorting is to provide a simple compare function:

```js
const numbersArray = [9, 8, 7, 60, 5];
numbersArray.sort((a, b) => a - b);

// Output: [5, 7, 8, 9, 60]
```

This compare function subtracts `b` from `a`. If the result is negative, `a` comes first. If positive, `b` comes first. If zero, their order doesn't change relative to each other. This correctly orders numbers based on their mathematical value.

## Natural Sorting with the Intl.Collator API

However, the simple `(a - b)` approach works reliably only for pure numbers. What about sorting strings that contain numbers, like filenames? This is where the `Intl.Collator` API with the `numeric: true` option shines. It provides the natural sorting behavior that correctly handles numbers alongside other characters.

As I mentioned in the intro, this API was the solution Jan Miksovsky used in his code, and it's a much more powerful tool for "natural" sorting, especially when dealing with mixed numbers and strings.

```js
const naturalOrder = new Intl.Collator(undefined, {
	numeric: true
}).compare;

// Note: Passing `undefined` as the locale uses the browser's/runtime's default locale.
// You could specify a locale string like 'en-US' here if needed.

const array = [9, 8, 7, 60, 5];
array.sort((a, b) => naturalOrder(a, b));
// Output: [5, 7, 8, 9, 60]
```

By passing the `compare` method of the `Intl.Collator` instance to `sort()`, we override the default string comparison. The `Intl.Collator` object, configured with `numeric: true`, knows how to compare '60' and '7' such that 60 is treated as a single number and correctly placed after 7, 8, and 9.

This API is incredibly useful for sorting strings that contain numbers in a human-expected way, such as lists of filenames like `IMG_1.png`, `IMG_2.png`, `IMG_10.png`, `IMG_20.png`.

```js
const files = ['IMG_2.png', 'IMG_1.png', 'IMG_10.png', 'IMG_20.png'];
files.sort();
// Output: ['IMG_1.png', 'IMG_10.png', 'IMG_2.png', 'IMG_20.png']

files.sort((a, b) => naturalOrder(a, b));
// Output: ['IMG_1.png', 'IMG_2.png', 'IMG_10.png', 'IMG_20.png']
```

In summary, while JavaScript's default array `sort()` might surprise you with its string-based comparison, understanding this behavior is key. For simple numeric arrays, `(a, b) => a - b` is your go-to. For more complex natural sorting needs, especially with strings containing numbers, the `Intl.Collator` API provides a robust and locale-aware solution.
