---
layout: layouts/base.njk
pageClass: books
templateEngineOverride: njk, md
mail: "Hallo OiJazzer,


ich möchte gerne »"
mail2: "« bestellen.


Meine Adresse lautet:
"
---

<div class="product">
  {% productImage cover, title %}

  <div class="product__description">
    <h1 class="product__title">{{ title }}</h1>
    <p class="product__price">{{ price }} €</p>
    <a href="mailto:info@oijazz.org?subject={{ title | mailText }}&body={{ mail | mailText }}{{ title | mailText }}{{ mail2 | mailText }}" class="button product__button">Per Mail bestellen</a>
    {%- if pages %}
      <p>{{ pages }} Seiten</p>
    {%- endif %}
    {{ content | safe }}
  </div>
</div>
