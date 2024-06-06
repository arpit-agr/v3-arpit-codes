---
title: 'Postel’s Law, aka the robustness principle'
url: 'https://adactio.com/journal/14327'
origin: 'An early specification of TCP'
author: ['Jon Postel']
---

From [Jeremy Keith's](https://adactio.com/) post "Robustness and Least Power":

> Be conservative in what you send, be liberal in what you accept.

Even though the robustness principle was formulated for packet-switching, I see it at work in all sorts of disciplines, including design. A good example is in [best practices for designing forms](https://www.smashingmagazine.com/2018/08/best-practices-for-mobile-form-design/):

> Every field you ask users to fill out requires some effort. The more effort is needed to fill out a form, the less likely users will complete the form. That’s why the foundational rule of form design is **shorter is better** — get rid of all inessential fields.

In other words, be conservative in the number of form fields you send to users. But then, when it comes to users filling in those fields:

> It’s very common for a few variations of an answer to a question to be possible; for example, when a form asks users to provide information about their state, and a user responds by typing their state’s abbreviation instead of the full name (for example, CA instead of California). The form should accept both formats, and it’s the developer job to convert the data into a consistent format.

In other words, be liberal in what you accept from users.

I find the robustness principle to be an immensely powerful way of figuring out _how_ to approach many design problems.
