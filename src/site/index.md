---
title: Oijazz
subtitle: Oijazz Verlag
layout: layouts/base.njk
---

## Post pages

The pages found in in the posts

<ul class="listing">
{%- for book in collections.book -%}
  <li>
    <img src="/images/products/{{ book.data.cover | smallImage }}">
    <a href="{{ book.url }}">{{ book.data.title }}</a> -
  </li>
{%- endfor -%}
</ul>

## Links from an external data source

These links were sourced from [hawksworx.com](https://www.hawksworx.com/feed.json) at build time.

<ul class="listing">
{%- for item in hawksworx.entries.slice(0,5) -%}
  <li>
    <a href="{{ item.link }}">{{ item.title }}</a>
  </li>
{%- endfor -%}
</ul>
