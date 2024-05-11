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

import { Currency } from "../../../enums/payment/Currency";
import { SubscriptionMode } from "../../../enums/subscription/SubscriptionMode";

export class Product implements Product.IProduct {
  /** @property {number} id - The unique identifier for the product. */
  id!: number;

  /** @property {number} shop_id - The identifier for the shop that owns the product. */
  shop_id!: number;

  /** @property {string} [action] - Product buy call to action. */
  action?: string;

  /** @property {Product.IAR} [ar] - AR 3D model. Created by the system. */
  ar?: Product.IAR;
  /**
   * @property {number[] | null} [badges] - Keep badge ids.
   * An array of badge identifiers associated with the product.
   */
  badges?: number[] | null;
  /** @property {boolean} [best_content] - System Flag. Indicates if this product has great ranked content. */
  best_content?: boolean;
  /** @property {boolean} [best_seller] - System Flag. Indicates if this is the bestseller product. */
  best_seller?: boolean;
  /** @property {string} [blog] - A link to external resources. This link will be shown on the product page. */
  blog?: string;
  /** @property {string} [brand] - The brand name of the product. */
  brand?: string;
  /** @property {number} [category_id] - The identifier for the product's category. */
  category_id?: number;
  /** @property {number} commission - The commission on the product, defaults to 0. */
  commission: number = 0;
  /**
   * @property {Product.ProductCondition} condition - The condition of the product, defaults to NEW.
   * Can be 'NEW', 'USED', 'REFURBISHED', etc.
   */
  condition: Product.ProductCondition = Product.ProductCondition.NEW;
  /** @property {number} [connect_id] - This product was created by this connect provider. */
  connect_id?: number;
  /** @property {Record<string, string>} [cons] - The list of disadvantages. */
  cons?: Record<string, string>;
  /** @property {keyof typeof Currency} currency - The currency code, e.g., 'USD', 'EUR'. */
  currency!: keyof typeof Currency;
  /** @property {string | null} [dis_end] - The end date for the product discount. */
  dis_end!: string | null;
  /** @property {string | null} [dis_start] - The start date for the product discount. */
  dis_start!: string | null;
  /** @property {number} discount - The discount amount on the product. */
  discount!: number;
  /** @property {Product.IExtra} [extra] - Additional details about the product. */
  extra?: Product.IExtra;
  /** @property {number} [for_auction] - Total users who wait for auction. */
  for_auction?: number;
  /** @property {number} [for_available] - Total users who wait to available. */
  for_available?: number;

  /** @property {string} [gpc] - The Global Product Classification code for the product. */
  gpc?: string;
  /** @property {string} [gtin] - The Global Trade Item Number for the product. */
  gtin?: string;
  /** @property {number} [guide_id] - Assigned guide profile ID. This guide will be shown on the product page. */
  guide_id?: number;
  /** @property {string} [hsn] - Harmonized System Nomenclature code for international trade. */
  hsn?: string;
  /** @property {any[]} [inputs] - The structure of input form for extra information about purchased product. */
  inputs?: any[];
  /** @property {string} [lead] - Lead time required for the product. */
  lead?: string;
  /** @property {number} [map_id] - Assigned location tag on the map. */
  map_id?: number;
  /** @property {string} [message] - This note will be shown to the customer in the product and basket page. */
  message?: string;
  /** @property {string} [mpn] - The Manufacturer Part Number for the product. */
  mpn?: string;
  /** @property {any} [note] - General note or additional information about the product. */
  note?: any;
  /** @property {number} [officer] - Officer user id. The user who creates this product. */
  officer?: number;
  /** @property {number} [order] - The order index to custom sort products. */
  order?: number;
  /** @property {boolean} [original] - Indicates if the product is original. */
  original?: boolean;
  /** @property {any[]} [outputs] - The structure of output form for virtual items purchase. */
  outputs?: any[];
  /** @property {number} [parent_id] - For middle sellers, the main product in drop-shipping supplier store. */
  parent_id?: number;
  /** @property {number} price - The price of the product. */
  price!: number;
  /** @property {Product.PriceInputType} [price_input] - The type of input used for the product price. */
  price_input?: Product.PriceInputType;
  /** @property {string} [price_label] - Add extra info about price like ($1.5/Fl Oz). */
  price_label?: string;
  /** @property {Product.ProductPricing} [pricing] - The pricing strategy for the product. */
  pricing?: Product.ProductPricing;
  /** @property {Record<string, string>} [pros] - The list of advantages or positive aspects. */
  pros?: Record<string, string>;
  /** @property {number} [quantity] - The available quantity of the product. */
  quantity?: number;
  /** @property {number} rate - The average rating of the product. */
  rate?: number;
  /** @property {number} rate_count - The total number of buyers who rated this product. */
  rate_count?: number;
  /** @property {number} [repository_id] - This product was created from products repository. */
  repository_id?: number;
  /** @property {boolean} [reselling] - Indicates if the product is available for drop-shipping. */
  reselling?: boolean;
  /** @property {number} [reselling_count] - Total number of products sold by resellers. */
  reselling_count?: number;
  /** @property {number} [reselling_shops] - Total number of shops reselling this product. */
  reselling_shops?: number;
  /** @property {number} [return_policy_id] - Assigned return policy profile ID. */
  return_policy_id?: number;
  /** @property {number} [return_warranty] - The duration in hours to return goods after receiving order by buyer. */
  return_warranty?: number;
  /** @property {Product.IRibbon} [ribbon] - Keep ribbon configurations. */
  ribbon?: Product.IRibbon;
  /** @property {number} [sells] - Total sales of this product. */
  sells?: number;

  /**
   * Custom sipping price (for drop-shipping suppliers only)
   * e.g. {"EE":22,"PS":23,"TL":22,"EH":0,"DK":0,"SE":0,"FR":0,"US":0,"GB":0,"AE":0,"TN":0,"NL":0}
   */
  shipping?: Record<string, number> | null;
  /** @property {number} [shipping_id] - Assigned shipping profile ID. */
  shipping_id?: number;
  /** @property {string} [sku] - Stock Keeping Unit identifier for the product. */
  sku?: string;
  /** @property {string} [slug] - The slug to create SEO friendly URL. */
  slug?: string;
  /** @property {Product.ISpec} [spec] - A JSON of key/value pairs representing the product specifications. */
  spec?: Product.ISpec;
  /** @property {object[] | null} [spec_order] - The list of keys in spec to define the order of items in the table. */
  spec_order?: object[] | null;
  /** @property {Product.ProductStatus} [status] - Can be 'Open', or 'Close'. Indicates the availability of the product. */
  status?: Product.ProductStatus;
  /** @property {{ contain: boolean }} [style] - Style of the product. */
  style?: { contain: boolean };
  /** @property {string[]} [tags] - List of product tags. */
  tags?: string[];
  /** @property {number} [tax_id] - Assigned tax profile ID. */
  tax_id?: number;
  /** @property {string} [title] - Title of the product. */
  title?: string;
  /** @property {string} [title_en] - Subtitle of the product, preferably in English. */
  title_en?: string;
  /** @property {Product.ProductType} [type] - The type of product. */
  type?: Product.ProductType;
  /** @property {string} [unit] - Custom product unit (e.g., cm, litre, bottle). */
  unit?: string;
  /** @property {boolean} ["unit_float"] - Indicates if a fractional unit can be ordered (e.g., 3.5 kg of fruit). */
  unit_float?: boolean;
  /** @property {number} [valuation_id] - Identifier for the valuation method used. */
  valuation_id?: number;
  /** @property {Product.IVariant[] | null} [variants] - A list of variants of the product. */
  variants?: Product.IVariant[] | null;
  /** @property {number} [vendor_id] - The identifier for the vendor of the product. */
  vendor_id?: number;

  /** @property {string} [video] - Youtube video ID for the product. e.g. ZGbxEgSIyWE */
  video?: string;
  /** @property {number} [visits] - Total number of visits to the product page. */
  visits?: number;
  /** @property {string} [warranty] - A short warranty condition and name. */
  warranty?: string;
  /** @property {number} [warranty_id] - Assigned warranty profile ID. */
  warranty_id?: number;
  /** @property {Record<string, Array<string>>} [locations] - Specific locations associated with the product. */
  locations?: Record<string, Array<string>>;

  /** @property {string | null} [icon] - Optional icon for the product. */
  icon?: string | null;

  constructor(
    data: {
      id: number;
      name: string;
    } & Partial<Product.IProduct>
  ) {
    Object.assign(this, data);
  }
}

export namespace Product {
  export enum ProductType {
    PHYSICAL = "PHYSICAL",
    VIRTUAL = "VIRTUAL",
    SERVICE = "SERVICE",
    FILE = "FILE",
    SUBSCRIPTION = "SUBSCRIPTION",
  }

  export enum PriceInputType {
    DEFAULT = "default",
    AREA = "area",
    VOLUME = "volume",
    CUSTOM = "custom",
  }

  export enum ProductPricing {
    FIX = "FIX", // Fix price    (Physical, Virtual, File, Service)
    ESTIMATION = "ESTIMATION", // Set price in pre-checkout by seller and can be change in future (Service only)
    AGREEMENT = "AGREEMENT", // Set final price in pre-checkout by seller (Service only)
    BID = "BID", // Bid on product by buyer (Higher win) -> Disable now
  }

  export enum ProductCondition {
    NEW = "new",
    REFURBISHED = "refurbished",
    USED = "used",
    USED_FAIR = "used_fair",
    USED_GOOD = "used_good",
    USED_LIKE_NEW = "used_like_new",
  }

  export enum ProductStatus {
    Open = "Open",
    Close = "Close",

    // Only in Marketplace
    Pending = "Pending", // Added by vendor and pending to accept by marketplace owner (If marketplace set to have verify process)
    Rejected = "Rejected", // Rejected by marketplace owner
  }

  export interface ISpec {
    [key: string]: string[] | "group";
  }

  export interface IVariant {
    color: string;
    style: string | null;
    volume: string | null;
    weight: string;
    pack: string | null;
    type: string;
  }

  export interface IRibbon {
    mode: keyof typeof SubscriptionMode;
    items?: {
      product_id: number;
      variant_id?: number | null;
      count: number;
    };
    billing: boolean; // Ask user about billing address.
    shipping: boolean; // Ask user about shipping address.
    count: boolean; // User can set more than one for purchasing this subscription item.
  }

  export interface IAR {
    src_file?: string;
    src?: string;
    size_src?: string;
    name_src?: string;
  }

  export interface IExtra {
    width?: number;
    length?: number;
    height?: number;
    weight?: number;
  }

  export interface IProduct {
    id: number | null;
    shop_id: number | null;
    vendor_id?: number | null;
    type?: ProductType;
    order?: number;
    unit?: string;
    unit_float?: boolean;
    price_input?: PriceInputType;
    officer?: number | null; // Officer user id
    valuation_id?: number | null;
    pricing?: ProductPricing;
    price: number; // Assuming price is numeric.
    currency: keyof typeof Currency;
    commission: number;
    discount: number;
    dis_start: string | null; // Using Date for datetime types.
    dis_end: string | null;
    price_label?: string;
    status?: ProductStatus;
    title?: string;
    title_en?: string;
    sku?: string | null;
    mpn?: string | null;
    gtin?: string | null;
    gpc?: string | null;
    hsn?: string | null;
    condition?: ProductCondition;
    brand?: string | null;
    warranty?: string | null;
    spec?: object | null;
    spec_order?: object[] | null;
    pros?: Record<string, string>;
    cons?: Record<string, string>;
    message?: string;
    outputs?: any[]; // Need more details on the structure.
    inputs?: any[]; // Need more details on the structure.
    variants?: IVariant[] | null;
    blog?: string;
    category_id?: number;
    quantity?: number;
    lead?: string;
    extra?: IExtra; // Assuming generic object, need more details.
    style?: { contain: boolean };
    visits?: number;
    rate?: number;
    rate_count?: number;
    for_available?: number;
    for_auction?: number;
    sells?: number;
    return_warranty?: number;
    original?: boolean;
    best_seller?: boolean;
    best_content?: boolean;
    slug?: string;
    ar?: IAR;
    note?: any; // Need more details.
    video?: string;
    badges?: number[] | null; // Need more details.
    reselling?: boolean;
    shipping?: Record<string, number> | null;
    reselling_shops?: number;
    reselling_count?: number;
    parent_id?: number;
    repository_id?: number;
    connect_id?: number;
    warranty_id?: number;
    return_policy_id?: number;
    guide_id?: number;
    shipping_id?: number;
    tax_id?: number;
    map_id?: number;
    tags?: string[];
    ribbon?: IRibbon;
    action?: string;
    locations?: Record<string, Array<string>>;
    icon?: string | null;
  }
}
