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
  // Define class properties
  id!: number;
  shop_id!: number;

  action?: string;
  ar?: Product.IAR;
  /**
   * Keep badge ids!
   */
  badges?: number[] | null;
  best_content?: boolean;
  best_seller?: boolean;
  blog?: string;
  brand?: string;
  category_id?: number;
  commission: number = 0;
  condition: Product.ProductCondition = Product.ProductCondition.NEW;
  connect_id?: number;
  cons?: Record<string, string>;
  currency!: keyof typeof Currency;
  dis_end!: string | null;
  dis_start!: string | null;
  discount!: number;
  extra?: Product.IExtra;
  for_auction?: number;
  for_available?: number;
  gpc?: string;
  gtin?: string;
  guide_id?: number;
  hsn?: string;
  inputs?: any[];
  lead?: string;
  map_id?: number;
  message?: string;
  mpn?: string;
  note?: any;
  /**
   * Officer user id
   */
  officer?: number;
  order?: number;
  original?: boolean;
  outputs?: any[];
  parent_id?: number;
  price!: number;
  price_input?: Product.PriceInputType;
  price_label?: string;
  pricing?: Product.ProductPricing;
  pros?: Record<string, string>;
  quantity?: number;
  rate?: number;
  rate_count?: number;
  repository_id?: number;
  reselling?: boolean;
  reselling_count?: number;
  reselling_shops?: number;
  return_policy_id?: number;
  return_warranty?: number;
  ribbon?: Product.IRibbon;
  sells?: number;
  /**
   * Custom sipping price (for drop-shipping suppliers only)
   * e.g. {"EE":22,"PS":23,"TL":22,"EH":0,"DK":0,"SE":0,"FR":0,"US":0,"GB":0,"AE":0,"TN":0,"NL":0}
   */
  shipping?: Record<string, number> | null;
  shipping_id?: number;
  sku?: string;
  slug?: string;
  spec?: Product.ISpec;
  spec_order?: object[] | null;
  status?: Product.ProductStatus;
  style?: { contain: boolean };
  tags?: string[];
  tax_id?: number;
  title?: string;
  title_en?: string;
  type?: Product.ProductType;
  unit?: string;
  unit_float?: boolean;
  valuation_id?: number;
  variants?: Product.IVariant[] | null;
  vendor_id?: number;
  /**
   * Youtube video ID.
   * e.g. ZGbxEgSIyWE
   */
  video?: string;
  visits?: number;
  warranty?: string;
  warranty_id?: number;
  locations?: Record<string, Array<string>>;

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
