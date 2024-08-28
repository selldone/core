/*
 * Copyright (c) 2023. Selldone® Business OS™
 *
 * Author: M.Pajuhaan
 * Web: https://selldone.com
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * All rights reserved. In the weave of time, where traditions and innovations intermingle, this content was crafted.
 * From the essence of thought, through the corridors of creativity, each word, and sentiment has been molded.
 * Not just to exist, but to inspire. Like an artist's stroke or a sculptor's chisel, every nuance is deliberate.
 * Our journey is not just about reaching a destination, but about creating a masterpiece.
 * Tread carefully, for you're treading on dreams.
 */

export default {
  Inventory: {
    group: "inventory",

    code: "Inventory",
    title: "Inventory",
    desc: "Send after changing the product quantity.",
    icon:'precision_manufacturing',
    actions:['AddProduct','CloneProduct','EditProduct','AddVariant','EditVariant','DeleteProduct','DeleteVariant'],
    params:['event','action','shop','product','variant']

  },

  OnlineOrder: {
    group: "orders",
    code: "OnlineOrder",
    title: "Online Order",
    desc: "Send after change in online orders status.",
    icon:'shopping_cart',
    actions:['CheckoutOrder','PaymentOrder','CancelProduct','OrderConfirm','PreparingOrder','SentOrder','ToCustomer','ReturnOrder','DeliveryCanceled'],
    params:['event','action','shop','basket','user','customer']

  },
  PosOrder: {
    group: "orders",

    code: "PosOrder",
    title: "POS Order",
    desc: "Send after change in in-person (POS) orders status.",
    icon:'shopping_bag',
    actions:['CheckoutOrder','PaymentOrder','CancelProduct'],
    params:['event','action','shop','basket','user','customer']

  },
  AvocadoOrder: {
    group: "orders",

    code: "AvocadoOrder",
    title: "Avocado Order",
    desc: "Send after change in Avocado orders status.",
    icon:'commit',
    actions:['CheckoutOrder','PaymentOrder','CancelProduct'],
    params:['event','action','shop','basket','user','customer']



  },
  HyperOrder: {
    group: "orders",

    code: "HyperOrder",
    title: "Hyper Order",
    desc: "Send after change in Hyper orders status.",
    icon:'qr_code_scanner',
    actions:['CheckoutOrder','PaymentOrder','CancelProduct'],
    params:['event','action','shop','basket','user','customer']



  },
  FulfillmentOrder: {
    group: "orders",

    code: "FulfillmentOrder",
    title: "Dropshipping Fulfillment",
    desc: "Send after change in dropshipping fulfillment orders status.",
    icon:'join_full',
    actions:['CheckoutOrder','PaymentOrder','CancelProduct'],
    params:['event','action','shop','basket']


  },

  Register: {
    group: "users",

    code: "Register",
    title: "User Register",
    desc: "Send after a new user register.",
    icon:'person_add',
    params:['event','source','shop','customer']

  },
  Leave: {
    group: "users",

    code: "Leave",
    title: "User Leave",
    desc: "Send after a user leave your shop.",
    icon:'person_remove',
    params:['event','shop','customer']


  },
};
