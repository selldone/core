export default {
  Inventory: {
    group: "inventory",

    code: "Inventory",
    title: "Inventory",
    desc: "Send after changing the product quantity.",
    icon:'precision_manufacturing',
    actions:['AddProduct','CloneProduct','EditProduct','AddVariant','EditVariant','DeleteProduct','DeleteVariant']
  },

  OnlineOrder: {
    group: "orders",
    code: "OnlineOrder",
    title: "Online Order",
    desc: "Send after change in online orders status.",
    icon:'shopping_cart',
    actions:['CheckoutOrder','PaymentOrder','CancelProduct']

  },
  PosOrder: {
    group: "orders",

    code: "PosOrder",
    title: "POS Order",
    desc: "Send after change in in-person (POS) orders status.",
    icon:'shopping_bag',
    actions:['CheckoutOrder','PaymentOrder','CancelProduct']


  },
  AvocadoOrder: {
    group: "orders",

    code: "AvocadoOrder",
    title: "Avocado Order",
    desc: "Send after change in Avocado orders status.",
    icon:'commit',
    actions:['CheckoutOrder','PaymentOrder','CancelProduct']


  },
  HyperOrder: {
    group: "orders",

    code: "HyperOrder",
    title: "Hyper Order",
    desc: "Send after change in Hyper orders status.",
    icon:'qr_code_scanner',
    actions:['CheckoutOrder','PaymentOrder','CancelProduct']


  },
  FulfillmentOrder: {
    group: "orders",

    code: "FulfillmentOrder",
    title: "Dropshipping Fulfillment",
    desc: "Send after change in dropshipping fulfillment orders status.",
    icon:'join_full',
    actions:['CheckoutOrder','PaymentOrder','CancelProduct']


  },

  Register: {
    group: "users",

    code: "Register",
    title: "User Register",
    desc: "Send after a new user register.",
    icon:'person_add'

  },
  Leave: {
    group: "users",

    code: "Leave",
    title: "User Leave",
    desc: "Send after a user leave your shop.",
    icon:'person_remove'

  },
};
