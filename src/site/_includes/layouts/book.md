---
layout: layouts/base.njk
pageClass: books
templateEngineOverride: njk, md
---

<div class="product">
  {% productImage cover, title %}

  <div class="product__description">
    <h1 class="product__title">{{ title }}</h1>
    {%- if link %}
    <a class="button product__button" href="{{link}}">{{linkTitle}}</a>
    {%- endif %}
    {%- if pages %}
      <p>{{ pages }} Seiten</p>
    {%- endif %}
    {{ content | safe }}
  </div>
</div>
