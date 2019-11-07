---
title: Oijazz
layout: layouts/base.njk
---

<ul class="product-list">
{%- for book in collections.book -%}
  <li>
    <a href="{{ book.url }}">
      <img src="/images/products/{{ book.data.cover | smallImage }}" alt="{{ book.data.title }}">
      <img class="product-list__shadow-image" src="/images/products/{{ book.data.cover | smallImage }}" aria-hidden>
    </a>
  </li>
{%- endfor -%}
</ul>
