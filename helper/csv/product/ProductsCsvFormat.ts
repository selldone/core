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

import { ProductType } from "../../../enums/product/ProductType";
import { Currency } from "../../../enums/payment/Currency";
import { ProductCondition } from "../../../enums/product/ProductCondition";

export const ProductsCsvHeaders = [
  "Product ID",
  "Variant ID",

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
    tooltip: {
      title: "Unique Product ID On Selldone",
      message:
        "This is the unique product ID on Selldone. If you want to update the product, you can enter the product ID here. If you want to create a new product, leave this field blank.",
    },
  },
  "Variant ID": {
    type: "id", // Show ID badge in cell
    value_exist: {
      // Show this message if the value exists!
      title: "Update",
      message:
        "We try to find the variant by the variant ID. If the variant exists, we update it, otherwise we create a new variant.",
      color: "#1976D2",
      dark: true,
    },
    value_empty: {
      // Show this message if the value is empty!
      title: "Create",
      message:
        "We try to find the variant by the color,weight,style,... and SKU. If the variant exists, we update it. If not, we create a new variant.",
      color: "#388E3C",
      dark: true,
    },

    tooltip: {
      title: "Unique Variant ID On Selldone",
      message:
        "This is the unique variant ID on Selldone. If you want to update the variant, you can enter the variant ID here. If you want to create a new variant, leave this field blank. When this value be empty Selldone check to find variant based on color,volume and etc and if find variant update it.",
    },
  },

  Title: {
    type: "text",
    required_product: true,
    ifNullCol: "Title", // Same as product if is null!
    ifNullMessage: "🗘 Optional", // Message if col is null!
    onlyProduct: true,
    tooltip: {
      title: "Product Title",
      message: "It's the name of the product. It should be short and clear.<br>e.g: <code>iPhone 15 Pro Max</code>",
    },
  },
  "Title En": {
    type: "text",
    ifNullCol: "Title En", // Same as product if is null!
    ifNullMessage: "🗘 Optional", // Message if col is null!
    onlyProduct: true,
    tooltip: {
      title: "Technical or Latin Product Name",
      message: "It's the technical or Latin name of the product. Also it can be the model name of the product.<br>e.g: <code>Apple Iphone 15 Pro Max DR5-XDR</code>",
    },
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
    tooltip: {
      title: "Product Type",
      message: "Selldone supports all product and services type including Physical, Virtual, File,Service, Subscription.Each type has its own fulfillment method and pricing method.<br>e.g: <code>PHYSICAL</code>",
    },
  },
  Price: {
    type: "price",
    required_product: true,
    ifNullCol: "Price", // Same as product if is null!
    ifNullMessage: "♺ Like product", // Message if col is null!
    default: 0, // Auto correction
    tooltip: {
      title: "Net Price",
      message: "This is the price of the product.<br>e.g: <code>100</code><br><b>Selling Price = <span style='color: #80ea69'>Price</span> + Commission - Discount </b>",
    },
  },

  Currency: {
    type: "currency",
    list: Object.values(Currency),
    required_product: true, //  Variant null (Or price 0): pricing in false
    ifNullCol: "Price", // Same as product if is null!
    ifNullMessage: "♺ Like product", // Message if col is null!
    default: Currency.USD.code, // Auto correction
    tooltip: {
      title: "Currency",
      message: "The price, discount and commission of the product are in this currency.<br>e.g: <code>USD</code>",
    },
  },
  Commission: {
    type: "price",
    ifNullCol: "Price", // Same as product if is null!
    ifNullMessage: "♺ Like product", // Message if col is null!
    default: 0, // Auto correction
    tooltip: {
      title: "Commission",
      message: "There is various use case for commission. This value will be added to price for customer, and can use for dynamic commission to affiliate or reseller in wholesale.<br>e.g: <code>10</code><br><b>Selling Price = Price + <span style='color: #80ea69'>Commission</span> - Discount </b>",
    },
  },
  Discount: {
    type: "price",
    ifNullCol: "Price", // Same as product if is null!
    ifNullMessage: "♺ Like product", // Message if col is null!
    default: 0, // Auto correction
    tooltip: {
      title: "Discount",
      message: "This is the discount of the product.<br>e.g: <code>10</code><br><b>Selling Price = Price + Commission - <span style='color: #80ea69'>Discount</span> </b>",
    },

  },

  "Discount Start Date": {
    type: "date",
    ifNullCol: "Price", // Same as product if is null!
    ifNullMessage: "♺ Like product", // Message if col is null!
    tooltip: {
      title: "Discount Start Date",
      message: "This is the start date of the discount. Format is YYYY-mm-dd h:m:s <br>e.g: <code>2022-08-10 00:00:00</code>",
    },
  },
  "Discount End Date": {
    type: "date",
    ifNullCol: "Price", // Same as product if is null!
    ifNullMessage: "♺ Like product", // Message if col is null!
    tooltip: {
      title: "Discount End Date",
      message: "This is the end date of the discount. Format is YYYY-mm-dd h:m:s <br>e.g: <code>2022-08-20 00:00:00</code>",
    },
  },

  Status: {
    type: "enum",
    list: [{ code: "Open" }, { code: "Close" }],
    required_product: true,
    required_variant: true,
    default: "Open", // Autocorrection
    onlyProduct: true,
    tooltip: {
      title: "Product Status",
      message: "You can set the status of the product. If the product is closed, it will not be displayed in the online product list and product page.<br>e.g: <code>Open</code>",
    },
  },

  Quantity: {
    type: "number",
    default: 0, // Autocorrection
    tooltip: {
      title: "Inventory Quantity",
      message: "This is the quantity of the product. If the product is out of stock, you can set the quantity to zero.<br>e.g: <code>100</code>",
    },
  },

  "Limit Min": {
    type: "number",
    default: 0,
    onlyProduct: true,
    tooltip: {
      title: "Minimum Order Quantity",
      message: "You can set the minimum order quantity of the product. If the minimum order quantity is zero, there is no limit.<br>e.g: <code>10</code>",
    },
  },
  "Limit Max": {
    type: "number",
    default: 0,
    onlyProduct: true,
    tooltip: {
      title: "Maximum Order Quantity",
      message: "You can set the maximum order quantity of the product. If the maximum order quantity is zero, there is no limit.<br>e.g: <code>100</code>",
    },
  },

  Condition: {
    type: "enum",
    list: Object.values(ProductCondition),
    onlyProduct: true,
    required_product: true,
    default: ProductCondition.NEW.code, // Autocorrection
    tooltip: {
      title: "Product Condition",
      message: "You can set the condition of the product. If the product is new, you can set the condition to new.<br>e.g: <code>NEW</code>",
    },
  },

  Brand: {
    type: "text",
    onlyProduct: true,
    tooltip: {
      title: "Product Brand",
      message: "You can set the brand of the product. If the product is Apple, you can set the brand to Apple.<br>e.g: <code>Apple</code>",
    },
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
    tooltip: {
      title: "Main Product Image",
      message:
        "You can set the main image of the product. This image will be shown in the product list and product page. The structure of the image is as follows: <code>image-url</code>",
      image: require("./assets/col-image.jpg"),
    },
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
    tooltip: {
      title: "Product Article Title",
      message: "You can set the title of the product article. This title will be shown in the product page.",
    },
  },
  "Content Body (Html)": {
    type: "html",
    onlyProduct: true,
    tooltip: {
      title: "Product Article Body",
      message: "You can set the body of the product article. It can be HTML code. This body will be shown in the product page.",
    },
  },
  "Content Description": {
    type: "text",
    onlyProduct: true,
    tooltip: {
      title: "Product Article Description (SEO)",
      message: "It's the description of the product article. It should be short and clear.",
    },
  },
  "Content Image": {
    type: "image",
    onlyProduct: true,
    tooltip: {
      title: "Product Article Image (SEO)",
      message: "It's the image url of the product article.",
    },
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
    tooltip: {
      title: "Product Category",
      message: "You can enter the name of category of the product. System will try to find the category and assign it to the product. If the category doesn't exist, it will be created.<br>e.g: <code>Electronics</code>",
    },
  },
  "Lead Time": {
    type: "number",
    tooltip: {
      title: "Lead Time",
      message: "It's the lead time of the product. It's the time between the order and the shipment of the product. If you don't know the lead time enter -1.<br>e.g: <code>3</code>",
    },
  },
  Extra: {
    type: "extra",
  },
  "Image Contain": {
    type: "boolean",
    onlyProduct: true,
    default: false, // Autocorrection
    tooltip: {
      title: "Product Image Contain",
      message: "Images can be contain or cover.",
    },
  },
  "Return Warranty": {
    type: "number",
    onlyProduct: true,
    tooltip: {
      title: "Return Warranty",
      message: "It's the hours that customer can return the product after delivery. <br>e.g for 1 day: <code>24</code>",
    },
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
    tooltip: {
      title: "Gallery Images",
      message:
        "You can add multiple images to the product gallery. The structure of the images is as follows: <code>image1-url.jpg</code>,<code>image2-url.jpg</code>,<code>image3-url.jpg</code>,...",
      image: require("./assets/col-images.png"),
    },
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
  static LastError = null;

  static CheckValidFile(headers) {
    this.LastError = null;
    if (!headers) return false;

    const _not_available_headers = ProductsCsvHeaders.filter((it) => {
      return !headers.includes(it);
    });
    if (_not_available_headers.length > 0) {
      this.LastError = `${_not_available_headers.join(", ")} headers not found`;
    }

    return _not_available_headers.length === 0;
  }
}
