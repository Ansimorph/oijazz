const SHIPPING_COST = 2;

function initPayPalButton({ name, price }) {
  paypal
    .Buttons({
      style: {
        shape: "rect",
        color: "gold",
        layout: "horizontal",
        label: "paypal",
        tagline: false,
      },

      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              description: name,
              amount: {
                currency_code: "EUR",
                value: price + SHIPPING_COST,
                breakdown: {
                  item_total: { currency_code: "EUR", value: price },
                  shipping: { currency_code: "EUR", value: SHIPPING_COST },
                  tax_total: { currency_code: "EUR", value: 0 },
                },
              },
            },
          ],
        });
      },

      onApprove: function (data, actions) {
        return actions.order.capture().then(function (orderData) {
          // Show a success message within this page, e.g.
          const element = document.getElementById("paypal-button-container");
          element.innerHTML = "";
          element.innerHTML = "<h3>Gekauft!</h3>";
        });
      },

      onError: function (err) {
        console.log(err);
      },
    })
    .render("#paypal-button-container");
}
