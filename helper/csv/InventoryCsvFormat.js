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

import { ProductType } from "../../enums/product/ProductType";
import { Currency } from "../../enums/payment/Currency";

export const InventoryCsvHeaders = [
  "Product ID",

  "Title",

  "Type",

  "Price",
  "Currency",
  "Commission",
  "Discount",
  "Discount Start Date",
  "Discount End Date",

  "Quantity",

  "SKU",
  "MPN",

  // --- Variant ---
  "V_Color",
  "V_Style",
  "V_Volume",
  "V_Weight",
  "V_Pack",
  "V_Type",
];

export const InventoryCsvStyler = {
  Title: {
    type: "text",
    required_product: true,
  },

  Type: {
    type: "enum",
    list: [
      ...Object.values(ProductType),
      {
        code: "VARIANT",
        image: require("@components/assets/icons/package.svg"),
      },
    ],
  },
  Price: {
    type: "price",
    required_product: true,
  },

  Currency: {
    type: "currency",
    list: Object.values(Currency),
    required_product: true, //  Variant null (Or price 0): pricing in false
  },
  Commission: {
    type: "price",
  },
  Discount: {
    type: "price",
  },

  "Discount Start Date": {
    type: "date",
  },
  "Discount End Date": {
    type: "date",
  },

  Quantity: {
    type: "number",
  },

  V_Color: {
    type: "color",
    onlyVariant: true,
  },
  V_Style: {
    type: "text",
    onlyVariant: true,
  },
  V_Volume: {
    type: "text",
    onlyVariant: true,
  },
  V_Weight: {
    type: "text",
    onlyVariant: true,
  },
  V_Pack: {
    type: "text",
    onlyVariant: true,
  },
  V_Type: {
    type: "text",
    onlyVariant: true,
  },

  "Create Date": {
    type: "date",
  },
};

export class InventoryCsvFormat {
  static CheckValidFile(headers) {
    if (!headers) return false;
    return !InventoryCsvHeaders.some((it) => {
      return !headers.includes(it);
    });
  }
}
