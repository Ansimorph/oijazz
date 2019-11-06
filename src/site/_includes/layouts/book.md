---
layout: layouts/base.njk
pageClass: books
templateEngineOverride: njk, md
---

<main>
  <img src="/images/products/{{cover}}" alt="{{title}}">
  {{ content | safe }}
</main>
