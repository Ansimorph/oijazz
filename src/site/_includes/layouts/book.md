---
layout: layouts/base.njk
pageClass: books
templateEngineOverride: njk, md
---

<div class="product">
  <img src="/images/products/{{ cover | smallImage }}" alt="{{ title }}">

  <div class="product__description">
    <h1 class="product__title">{{ title }}</h1>
    <p class="product__price">{{ price }} €</p>
    <a href="mailto:info@oijazz.org" class="button">Per Mail bestellen</a>
    <p>{{ pages }} Seiten</p>
    {{ content | safe }}
  </div>
</div>
