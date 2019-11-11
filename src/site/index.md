---
title: Oijazz
layout: layouts/base.njk
---

<ul class="product-list">
  <li>
    <div class="reading">
      <h2>Lesungen</h2>
      <ul class="js_dates-section">
      </ul>
    </div>
    <div class="reading product-list__shadow-image">
      <h2>Lesungen</h2>
      <ul class="js_dates-section">
      </ul>
    </div>
  </li>
{%- for book in collections.book -%}
  <li>
    <a href="{{ book.url }}">
      <img src="/images/products/{{ book.data.cover | smallImage }}" alt="{{ book.data.title }}">
      <img class="product-list__shadow-image" src="/images/products/{{ book.data.cover | smallImage }}" aria-hidden="true">
    </a>
  </li>
{%- endfor -%}
</ul>
