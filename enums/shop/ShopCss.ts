export default {
  "s--shop": {
    title: "Main shop page",
    children: {
      "s--top-banner": {
        title: "Top campaign banner",
      },
      "s--master-payment-dialog": {
        title: "Main payment dialog",
      },

      "s--products-list": {
        title: "Products list page",
        children: {
          "s--category-card": {
            title: "Category card",
            options: ["-small-mode"],
          },
          "s--product-card": {
            title: "Product card",
            options: ["-small-mode", "-insta-mode"],
          },
        },
      },
    },
  },
};
