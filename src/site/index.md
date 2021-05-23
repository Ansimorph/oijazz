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
{%- for book in collections.book | reverse -%}
  <li>
    <a href="{{ book.url }}">
      {% productImage book.data.cover, book.data.title %}
      {% productImage book.data.cover, book.data.title, 'class="product-list__shadow-image" aria-hidden="true"' %}
    </a>
  </li>
{%- endfor -%}
</ul>
