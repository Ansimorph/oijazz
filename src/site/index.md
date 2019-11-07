---
title: Oijazz
subtitle: Oijazz Verlag
layout: layouts/base.njk
---

<ul class="product-list">
{%- for book in collections.book -%}
  <li>
    <a href="{{ book.url }}">
      <img src="/images/products/{{ book.data.cover | smallImage }}" alt="{{ book.data.title }}">
    </a>
  </li>
{%- endfor -%}
</ul>
