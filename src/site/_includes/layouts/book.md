---
layout: layouts/base.njk
pageClass: books
templateEngineOverride: njk, md
---

<main>
  <img src="/images/products/{{ cover }}" alt="{{ title }}">
  <h1>{{ title }}</h1>
  <span>{{ price }} €</span>
  <span>{{ pages }} Seiten</span>
  {{ content | safe }}
</main>
