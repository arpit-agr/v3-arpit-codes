---
title: 'Rule of least power'
url: 'https://adactio.com/journal/14327'
---

From [Jeremy Keith's](https://adactio.com/) post "Robustness and Least Power":

When it comes to figuring out _what_ specific tools or technologies to use, there’s an equally useful principle: the rule of least power:

> Choose the least powerful language suitable for a given purpose.

On the face of it, this sounds counter-intuitive; why forego a powerful technology in favour of something less powerful?

Well, power comes with a price. Powerful technologies tend to be more complex, which means they can be trickier to use and trickier to swap out later.

Take the front-end stack, for example: HTML, CSS, and JavaScript. HTML and CSS are declarative, so you don’t get as much precise control as you get with an imperative language like JavaScript. But JavaScript comes with a steeper learning curve and a stricter error-handling model than HTML or CSS.

As a general rule, [it’s always worth asking if you can accomplish something with a less powerful technology](http://simplyaccessible.com/article/data-attributes/):

> In the web front-end stack — HTML, CSS, JS, and ARIA — if you can solve a problem with a simpler solution lower in the stack, you should. It’s less fragile, more foolproof, and just works.

- Instead of using JavaScript to do animation, see if you can do it in CSS instead.
- Instead of using JavaScript to do simple client-side form validation, try to use HTML input types and attributes like required.
- Instead of using ARIA to give a certain role value to a div or span, try to use a more suitable HTML element instead.

It sounds a lot like the KISS principle: Keep It Simple, Stupid. But whereas the KISS principle can be applied _within_ a specific technology—like keeping your CSS manageable—the rule of least power is all about [evaluating technology](https://adactio.com/articles/12839); choosing the most appropriate technology for the task at hand.
