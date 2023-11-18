import { ProductType } from "../../enums/product/ProductType";
import { Currency } from "../../enums/payment/Currency";
import { ProductCondition } from "../../enums/product/ProductCondition";

export const ProductsCsvHeaders = [
  "Product ID",

  "Title",
  "Title En",

  "Type",

  "Price",
  "Currency",
  "Commission",
  "Discount",
  "Discount Start Date",
  "Discount End Date",

  "Price Label",

  "Status",

  "Quantity",
  "Limit Min",
  "Limit Max",

  "SKU",
  "MPN",
  "GTIN",
  "GPC",
  "Condition",
  "Brand",
  "Warranty",
  "Spec",
  "Spec Order",
  "Pros",
  "Cons",

  "Image",

  "Outputs",
  "Inputs",

  "Content Title",
  "Content Body (Html)",
  "Content Description",
  "Content Image",
  "Content FAQ",
  "Content Structure Data",

  "Category",

  "Lead Time",
  "Extra",
  "Image Contain",

  "Return Warranty",
  "Original",
  "Slug",

  // --- images ---
  "Images",

  // --- Variant ---
  "V_Color",
  "V_Style",
  "V_Volume",
  "V_Weight",
  "V_Pack",
  "V_Type",

  // --- Pricing ---
  "Unit",
  "Price Input",
  "Valuation ID",

  // ━━━━━━━━━━━━━━━━━━ 🌸 Extra Pricing 🌸 ━━━━━━━━━━━━━━━━━
  "Qty 1",
  "Price 1",

  "Qty 2",
  "Price 2",

  "Qty 3",
  "Price 3",

  "Qty 4",
  "Price 4",

  "Qty 5",
  "Price 5",

  "Qty 6",
  "Price 6",

  "Qty 7",
  "Price 7",

  "Qty 8",
  "Price 8",

  "Qty 9",
  "Price 9",

  "Qty 10",
  "Price 10",
];

/*
export const ProductsCsvHeadersRequired = [
    "Product ID",
  "Title",
  "Type",
  "Price",
  "Currency",
  "Quantity",

]*/

export const ProductsCsvStyler = {
  "Product ID": {
    type: "id", // Show ID badge in cell
    value_exist: {
      // Show this message if the value exists!
      title: "Update",
      message:
        "If the product ID exists, we attempt to find and update the matching product. If it doesn't, we search by product title and SKU. If there's still no match, we create a new product.",
      color: "#1976D2",
      dark: true,
    },
    value_empty: {
      // Show this message if the value is empty!
      title: "Create",
      message:
        "We try to find the product by the title and SKU. If the product exists, we update it. If not, we create a new product.",
      color: "#388E3C",
      dark: true,
    },
  },

  Title: {
    type: "text",
    required_product: true,
    ifNullCol: "Title", // Same as product if is null!
    ifNullMessage: "🗘 Optional", // Message if col is null!
    onlyProduct: true,
  },
  "Title En": {
    type: "text",
    ifNullCol: "Title En", // Same as product if is null!
    ifNullMessage: "🗘 Optional", // Message if col is null!
    onlyProduct: true,
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
    default: ProductType.PHYSICAL.code, // Auto correction
  },
  Price: {
    type: "price",
    required_product: true,
    ifNullCol: "Price", // Same as product if is null!
    ifNullMessage: "♺ Like product", // Message if col is null!
    default: 0, // Auto correction
  },

  Currency: {
    type: "currency",
    list: Object.values(Currency),
    required_product: true, //  Variant null (Or price 0): pricing in false
    ifNullCol: "Price", // Same as product if is null!
    ifNullMessage: "♺ Like product", // Message if col is null!
    default: Currency.USD.code, // Auto correction
  },
  Commission: {
    type: "price",
    ifNullCol: "Price", // Same as product if is null!
    ifNullMessage: "♺ Like product", // Message if col is null!
    default: 0, // Auto correction
  },
  Discount: {
    type: "price",
    ifNullCol: "Price", // Same as product if is null!
    ifNullMessage: "♺ Like product", // Message if col is null!
    default: 0, // Auto correction
  },

  "Discount Start Date": {
    type: "date",
    ifNullCol: "Price", // Same as product if is null!
    ifNullMessage: "♺ Like product", // Message if col is null!
  },
  "Discount End Date": {
    type: "date",
    ifNullCol: "Price", // Same as product if is null!
    ifNullMessage: "♺ Like product", // Message if col is null!
  },

  Status: {
    type: "enum",
    list: [{ code: "Open" }, { code: "Close" }],
    required_product: true,
    required_variant: true,
    default: "Open", // Autocorrection
    onlyProduct: true,
  },

  Quantity: {
    type: "number",
    default: 0, // Autocorrection
  },

  "Limit Min": {
    type: "number",
    default: 0,
    onlyProduct: true,
  },
  "Limit Max": {
    type: "number",
    default: 0,
    onlyProduct: true,
  },

  Condition: {
    type: "enum",
    list: Object.values(ProductCondition),
    onlyProduct: true,
    required_product: true,
    default: ProductCondition.NEW.code, // Autocorrection
  },

  Brand: {
    type: "text",
    onlyProduct: true,
  },
  Warranty: {
    type: "text",
    onlyProduct: true,
  },
  Spec: {
    type: "json",
    onlyProduct: true,
  },
  "Spec Order": {
    type: "json",
    onlyProduct: true,
  },
  Pros: {
    type: "json",
    onlyProduct: true,
  },
  Cons: {
    type: "json",
    onlyProduct: true,
  },

  Image: {
    type: "image",
    onlyProduct: true,
  },
  Outputs: {
    type: "json",
    onlyProduct: true,
  },
  Inputs: {
    type: "json",
    onlyProduct: true,
  },
  "Content Title": {
    type: "text",
    onlyProduct: true,
  },
  "Content Body (Html)": {
    type: "html",
    onlyProduct: true,
  },
  "Content Description": {
    type: "text",
    onlyProduct: true,
  },
  "Content Image": {
    type: "image",
    onlyProduct: true,
  },
  "Content FAQ": {
    type: "faqs",
    onlyProduct: true,
  },
  "Content Structure Data": {
    type: "jsonld",
    onlyProduct: true,
  },
  Category: {
    type: "text",
    onlyProduct: true,
  },
  "Lead Time": {
    type: "number",
  },
  Extra: {
    type: "extra",
  },
  "Image Contain": {
    type: "boolean",
    onlyProduct: true,
    default: false, // Autocorrection
  },
  "Return Warranty": {
    type: "number",
    onlyProduct: true,
  },
  Original: {
    type: "boolean",
    onlyProduct: true,
    default: true, // Autocorrection
  },

  Slug: {
    type: "text",
    onlyProduct: true,
  },
  Images: {
    type: "images",
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

  Unit: {
    type: "text",
    onlyProduct: true,
  },
  "Price Input": {
    type: "enum",
    list: [
      { code: "default" },
      { code: "area" },
      { code: "volume" },
      { code: "custom" },
    ],
    default: "default",
    onlyProduct: true,
  },
  "Valuation Id": {
    type: "text",
    onlyProduct: true,
  },

  // ━━━━━━━━━━━━━━━━━━ 🌸 Extra Pricing 🌸 ━━━━━━━━━━━━━━━━━
  "Qty 1": { type: "number" },
  "Price 1": { type: "price", nullable: true },

  "Qty 2": { type: "number" },
  "Price 2": { type: "price", nullable: true },

  "Qty 3": { type: "number" },
  "Price 3": { type: "price", nullable: true },

  "Qty 4": { type: "number" },
  "Price 4": { type: "price", nullable: true },

  "Qty 5": { type: "number" },
  "Price 5": { type: "price", nullable: true },

  "Qty 6": { type: "number" },
  "Price 6": { type: "price", nullable: true },

  "Qty 7": { type: "number" },
  "Price 7": { type: "price", nullable: true },

  "Qty 8": { type: "number" },
  "Price 8": { type: "price", nullable: true },

  "Qty 9": { type: "number" },
  "Price 9": { type: "price", nullable: true },

  "Qty 10": { type: "number" },
  "Price 10": { type: "price", nullable: true },
};

export class ProductsCsvFormat {
  static CheckValidFile(headers) {
    if (!headers) return false;
    return !ProductsCsvHeaders.some((it) => {
      return !headers.includes(it);
    });
  }
}
