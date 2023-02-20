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
    <p class="product__price">{% localPrice price %}</p>
    {%- if link %}
    <a class="button product__button" href="{{link}}">{{linkTitle}}</a>
    {%- else %}
    <a href="mailto:info@oijazz.org?subject={{ title | mailText }}&body={{ mail | mailText }}{{ title | mailText }}{{ mail2 | mailText }}" class="button product__button">Per Mail bestellen</a>
    <div id="smart-button-container">
      <div style="text-align: center;">
        <div id="paypal-button-container"></div>
      </div>
    </div>
    {%- endif %}
    {%- if pages %}
      <p>{{ pages }} Seiten</p>
    {%- endif %}
    {{ content | safe }}
  </div>
</div>
<script src="https://www.paypal.com/sdk/js?client-id=AcV5HL0xQA5l0ydCNZ1u4Ltkd168rKs6tdZVSz-NPAFUoEetC5RV2YFoXPxLD7vOUcSmp1Jd5bUv9EEs&enable-funding=venmo&currency=EUR" data-sdk-integration-source="button-factory"></script>
<script defer>initPayPalButton({price: {{price}}, name: "{{title}}"})</script>
