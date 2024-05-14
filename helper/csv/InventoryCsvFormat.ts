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

import {ProductType} from "../../enums/product/ProductType";
import {Currency} from "../../enums/payment/Currency";
import packageImage from "./assets/package.svg";

export const InventoryCsvHeaders = [
  "Product ID",
  "Variant ID",

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
        image: packageImage,
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

// Define a type for the structure of each import type
type InventoryImportTypeStructure = {
  code: string;
  description: string;
  title: string;
  permanent_headers: string[];
  optional_header: string[];
  sample?: string;
};

export const InventoryImportType: Record<string, InventoryImportTypeStructure> =
  {
    SKU_PRICE: {
      code: "SKU_PRICE",
      title: "SKU & Price",
      description:
        "Use this format if you want to only update the price of products",
      permanent_headers: ["SKU", "Price"],
      optional_header: [
        "Currency",
        "Commission",
        "Discount",
        "Discount Start Date",
        "Discount End Date",
      ],
      sample: "/app/excel/inventory/SKU_PRICE.xlsx",
    },
    SKU_QUANTITY: {
      code: "SKU_QUANTITY",
      title: "SKU & Quantity",
      description:
        "Use this format if you want to only update the quantity of products",
      permanent_headers: ["SKU", "Quantity"],
      optional_header: [],
      sample: "/app/excel/inventory/SKU_QUANTITY.xlsx",
    },
    SKU_QUANTITY_PRICE: {
      code: "SKU_QUANTITY_PRICE",
      title: "SKU, Quantity & Price",
      description:
        "Use this format if you want to update the quantity and price of products",
      permanent_headers: ["SKU", "Quantity", "Price"],
      optional_header: [
        "Currency",
        "Commission",
        "Discount",
        "Discount Start Date",
        "Discount End Date",
      ],
      sample: "/app/excel/inventory/SKU_QUANTITY_PRICE.xlsx",
    },

    FULL: {
      code: "FULL",
      title: "Full",
      description:
        "Use this format if you want to update all product information including price, quantity, and variants.",
      permanent_headers: InventoryCsvHeaders,
      optional_header: [],
      sample: "/app/excel/inventory/FULL.xlsx",
    },
  };

function checkHasAll(headers: string[], permanentHeaders: string[]): boolean {
  return permanentHeaders.every((header) => headers.includes(header));
}

function checkJustContains(
  headers: string[],
  permanentHeaders: string[],
  optionalHeaders: string[],
): boolean {
  return headers.every(
    (header) =>
      permanentHeaders.includes(header) || optionalHeaders.includes(header),
  );
}

export class InventoryCsvFormat {
  static GetInventoryImportType(headers: string[]) {
    const found = Object.values(InventoryImportType).find(
      (it) =>
        checkHasAll(headers, it.permanent_headers) &&
        checkJustContains(headers, it.permanent_headers, it.optional_header),
    );

    return found ? found : InventoryImportType.FULL;
  }

  static LastError: string | null = null;

  static CheckValidFile(
    headers: string[],
    inventory_import_type: InventoryImportTypeStructure,
  ) {
    this.LastError = null;

    if (!headers) return false;

    const _not_available_headers =
      inventory_import_type.permanent_headers.filter((it) => {
        return !headers.includes(it);
      });
    if (_not_available_headers.length > 0) {
      this.LastError = `${_not_available_headers.join(", ")} headers not found`;
    }

    return _not_available_headers.length === 0;
  }
}
