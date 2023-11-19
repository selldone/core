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

export const ConnectScope = {
  read_categories: {
    code: "read_categories",
    color: "#F44336",
    title: "Read categories",
    desc: "We read categories from external provider and add them to Selldone stores.",
  },

  write_categories: {
    code: "write_categories",
    color: "#9C27B0",
    title: "Write categories",
    desc: "External provider can read information about connected categories.",
  },

  read_products: {
    code: "read_products",
    color: "#673AB7",
    title: "Read products",
    desc: "We read products from external provider and add them to Selldone stores.",
  },

  write_products: {
    code: "write_products",
    color: "#3F51B5",
    title: "Write products",
    desc: "External provider can read information about connected products.",
  },

  read_orders: {
    code: "read_orders",
    color: "#FFC107",
    title: "Read orders",
    desc: "We read existing orders from external providers. In most case we use this information to update order status, and in some case we add external orders to merchant orders processing center.",
  },
  write_orders: {
    code: "write_orders",
    color: "#009688",
    title: "Write orders",
    desc: "When a related order created, we inform about it to the external provider.",
  },
  read_customers: {
    code: "read_customers",
    color: "#4CAF50",
    title: "Read customers",
    desc: "We read customers from external provider and add them to Selldone stores.",
  },
  write_customers: {
    code: "write_customers",
    color: "#795548",
    title: "Write customers",
    desc: "External provider can read information about customers.",
  },
};
