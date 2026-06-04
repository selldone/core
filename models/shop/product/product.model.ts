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

import {Currency} from "../../../enums/payment/Currency";
import {SubscriptionMode} from "../../../enums/subscription/SubscriptionMode";
import type {Category} from "../category/category.model";
import type {ExtraPricing} from "../extra-pricing/extra-pricing.model";
import type {PropertySet} from "../property-set/property-set.model";
import type {ProductContent} from "./product-content.model";
import type {ProductData} from "./product-data.model";
import type {ProductFile} from "./product-file.model";
import type {ProductImage} from "./product-image.model";
import type {ProductRating} from "./product-rating.model";
import type {ProductVariant} from "./product_variant.model";
import type {SubscriptionPrice} from "./subscription_price.model";

/**
 * Storefront product model backed by `App\Shop\Products\Product` and table `shop_products`.
 *
 * The backend may return a projection of this model. Fields that are database columns are documented with their source
 * column. Eager-loaded Laravel relations are documented with the snake_case keys used in JSON responses.
 */
export class Product implements Product.IProduct {
  /** Product id. Source: `shop_products.id`. */
  id!: number;

  /** Owning shop id. Source: `shop_products.shop_id`. */
  shop_id!: number;

  /** Product buy call-to-action text. Source: nullable `shop_products.action`. */
  action?: string | null;

  /** AR/3D metadata generated or accepted by backend. Source: nullable JSON `shop_products.ar`. */
  ar?: Product.IAR | null;

  /** Badge ids attached to the product. Source: nullable JSON `shop_products.badges`. */
  badges?: number[] | null;

  /** Backend ranking flag for strong product content. Source: `shop_products.best_content`. */
  best_content?: boolean;

  /** Backend ranking flag for bestselling products. Source: `shop_products.best_seller`. */
  best_seller?: boolean;

  /** External blog/resource URL shown on the product page. Source: nullable `shop_products.blog`. */
  blog?: string | null;

  /** Product brand. Source: nullable `shop_products.brand`. */
  brand?: string | null;

  /** Primary category id. Source: nullable `shop_products.category_id`. */
  category_id?: number | null;

  /** Commission amount added during price calculation. Source: `shop_products.commission`, default `0`. */
  commission: number = 0;

  /** Product condition. Source: `shop_products.condition`. */
  condition: Product.ProductCondition = Product.ProductCondition.NEW;

  /** Connect/import provider id. Source: nullable `shop_products.connect_id`. */
  connect_id?: number | null;

  /** Product disadvantages shown in product content. Source: nullable JSON `shop_products.cons`. */
  cons?: Record<string, string> | null;

  /** Product price currency. Source: `shop_products.currency`. */
  currency!: keyof typeof Currency;

  /** Discount end timestamp, or `null` when no end is set. Source: nullable `shop_products.dis_end` cast to datetime. */
  dis_end!: string | null;

  /** Discount start timestamp, or `null` when no start is set. Source: nullable `shop_products.dis_start` cast to datetime. */
  dis_start!: string | null;

  /** Discount amount subtracted during price calculation. Source: `shop_products.discount`, default `0`. */
  discount!: number;

  /** Physical dimensions/weight metadata. Source: nullable JSON/text `shop_products.extra`. */
  extra?: Product.IExtra | null;

  /** Count of users waiting for auction. Source: `shop_products.for_auction`. */
  for_auction?: number;

  /** Count of users waiting for the product to become available. Source: `shop_products.for_available`. */
  for_available?: number;

  /** Google Product Category id. Source: nullable unsigned integer `shop_products.gpc`. */
  gpc?: number | null;

  /** Global Trade Item Number. Source: nullable `shop_products.gtin`. */
  gtin?: string | null;

  /** Assigned guide logistic profile id. Source: nullable `shop_products.guide_id`. */
  guide_id?: number | null;

  /** Harmonized System Nomenclature code. Source: nullable `shop_products.hsn`. */
  hsn?: string | null;

  /** Custom buyer input form structure. Source: nullable JSON/text `shop_products.inputs`. */
  inputs?: unknown[] | null;

  /** Lead time in hours; `-1` means backend/default behavior. Source: `shop_products.lead`. */
  lead?: number;

  /** Assigned map tag id. Source: nullable `shop_products.map_id`. */
  map_id?: number | null;

  /** Message shown to customers after purchase or in basket/product views. Source: nullable `shop_products.message`. */
  message?: string | null;

  /** Manufacturer Part Number. Source: nullable `shop_products.mpn`. */
  mpn?: string | null;

  /** Internal team notes. Source: nullable JSON `shop_products.note`; usually omitted from public storefront payloads. */
  note?: Product.INote[] | null;

  /** Officer user id that created/manages the product. Source: `shop_products.officer`. */
  officer?: number | null;

  /** Custom sort order. Source: `shop_products.order`, default `0`. */
  order?: number;

  /** Whether product is original/authentic. Source: `shop_products.original`. */
  original?: boolean;

  /** Output form/data structure for virtual/file/service fulfillment. Source: nullable JSON/text `shop_products.outputs`. */
  outputs?: unknown[] | null;

  /** Dropshipping source product id. Source: nullable `shop_products.parent_id`. */
  parent_id?: number | null;

  /** Base product price. Source: `shop_products.price`. */
  price!: number;

  /** Price input mode for variable pricing. Source: `shop_products.price_input`. */
  price_input?: Product.PriceInputType;

  /** Optional public price label such as `$1.5/Fl Oz`. Source: nullable `shop_products.price_label`. */
  price_label?: string | null;

  /** Product pricing strategy. Source: `shop_products.pricing`. */
  pricing?: Product.ProductPricing;

  /** Product advantages shown in product content. Source: nullable JSON `shop_products.pros`. */
  pros?: Record<string, string> | null;

  /** Available stock quantity; supports fractional units. Source: `shop_products.quantity` cast to float. */
  quantity?: number;

  /** Average product rating. Source: `shop_products.rate`, default `0`. */
  rate?: number;

  /** Total number of buyer ratings. Source: `shop_products.rate_count`, default `0`. */
  rate_count?: number;

  /** Repository source product id. Source: nullable `shop_products.repository_id`. */
  repository_id?: number | null;

  /** Whether this product can be resold by middle sellers. Source: `shop_products.reselling`. */
  reselling?: boolean;

  /** Count of reseller sales/products. Source: `shop_products.reselling_count`. */
  reselling_count?: number;

  /** Number of shops reselling this product. Source: `shop_products.reselling_shops`. */
  reselling_shops?: number;

  /** Assigned return policy profile id. Source: nullable `shop_products.return_policy_id`. */
  return_policy_id?: number | null;

  /** Return window value. Source: `shop_products.return_warranty`; backend comments conflict between days and hours. */
  return_warranty?: number;

  /** Subscription ribbon configuration. Source: nullable JSON `shop_products.ribbon`. */
  ribbon?: Product.IRibbon | null;

  /** Total sales counter. Source: `shop_products.sells`. */
  sells?: number;

  /** Custom dropshipping shipping price map by country code. Source: nullable JSON `shop_products.shipping`. */
  shipping?: Record<string, number> | null;

  /** Assigned shipping logistic profile id. Source: nullable `shop_products.shipping_id`. */
  shipping_id?: number | null;

  /** Product SKU. Source: nullable `shop_products.sku`. */
  sku?: string | null;

  /** SEO-friendly product slug. Source: nullable `shop_products.slug`. */
  slug?: string | null;

  /** Product specification key/value map. Source: nullable JSON `shop_products.spec`. */
  spec?: Product.ISpec | null;

  /** Display order for specification keys/groups. Source: nullable JSON `shop_products.spec_order`. */
  spec_order?: Array<string | Record<string, unknown>> | null;

  /** Product status. Source: `shop_products.status`. */
  status?: Product.ProductStatus;

  /** Product display style options. Source: nullable JSON `shop_products.style`. */
  style?: Product.IStyle | null;

  /** Product tags. Source: nullable JSON `shop_products.tags`. */
  tags?: string[] | null;

  /** Assigned tax profile id. Source: nullable `shop_products.tax_id`. */
  tax_id?: number | null;

  /** Public product title. Source: `shop_products.title`. */
  title?: string;

  /** English/secondary product title. Source: nullable `shop_products.title_en`. */
  title_en?: string | null;

  /** Product type. Source: `shop_products.type`. */
  type?: Product.ProductType;

  /** Custom unit label such as `kg`, `cm`, `bottle`. Source: nullable `shop_products.unit`. */
  unit?: string | null;

  /** Whether fractional quantities are allowed. Source: `shop_products.unit_float`. */
  unit_float?: boolean;

  /** Assigned valuation id for custom price inputs. Source: nullable `shop_products.valuation_id`. */
  valuation_id?: number | null;

  /** Variant dimensions/options configuration JSON, not the variant relation rows. Source: nullable `shop_products.variants`. */
  variants?: Product.IVariant[] | null;

  /** Marketplace vendor owner id. Source: nullable `shop_products.vendor_id`. */
  vendor_id?: number | null;

  /** YouTube video id. Source: nullable `shop_products.video`. */
  video?: string | null;

  /** Product page visits counter. Source: `shop_products.visits`. */
  visits?: number;

  /** Short warranty label/terms. Source: nullable `shop_products.warranty`. */
  warranty?: string | null;

  /** Assigned warranty logistic profile id. Source: nullable `shop_products.warranty_id`. */
  warranty_id?: number | null;

  /** Location restrictions by country code. Source: nullable JSON `shop_products.locations`. */
  locations?: Record<string, string[]> | null;

  /** Raw product icon/image path. Source: nullable `shop_products.icon`. */
  icon?: string | null;

  /** Product inventory/sales threshold configuration. Source: nullable JSON `shop_products.thresholds`. */
  thresholds?: Product.IThresholds | null;

  /** Custom product attributes. Source: nullable JSON `shop_products.attributes`. */
  attributes?: Product.IAttributes | null;

  /** Raw cover image path. Source: nullable `shop_products.cover`. */
  declare cover?: string | null;

  /** External buy URL. Source: nullable `shop_products.external`. */
  declare external?: string | null;

  /** Storefront product theme code. Source: nullable `shop_products.theme`. */
  declare theme?: string | null;

  /** Page-builder/product augmentation JSON. Source: nullable JSON `shop_products.augment`. */
  declare augment?: Record<string, unknown> | null;

  /** Localized product fields keyed by locale. Source: nullable JSON `shop_products.translations`. */
  declare translations?: Product.Translations | null;

  /** Additional category ids for shortcut listing. Source: nullable JSON `shop_products.shortcuts`; validated as max 5 ids. */
  declare shortcuts?: number[] | null;

  /** Private integration metadata. Source: nullable JSON `shop_products.meta`; `audit` is hidden by backend. */
  declare meta?: Record<string, unknown> | null;

  /** Property set profile id for customized variants/fields. Source: nullable `shop_products.property_set_id`. */
  declare property_set_id?: number | null;

  /** Internal page-builder page id. Source: nullable `shop_products.page_id`. */
  declare page_id?: number | null;

  /** Minimum order quantity, `0` for no limit. Source: `shop_products.limit_min`. */
  declare limit_min?: number;

  /** Maximum order quantity, `0` for no limit. Source: `shop_products.limit_max`. */
  declare limit_max?: number;

  /** Soft-delete timestamp when returned. Source: nullable `shop_products.deleted_at`. */
  declare deleted_at?: string | null;

  /** Creation timestamp serialized by Laravel when included. Source: `shop_products.created_at`. */
  declare created_at?: string | null;

  /** Last update timestamp serialized by Laravel when included. Source: `shop_products.updated_at`. */
  declare updated_at?: string | null;

  /** Primary category relation when eager-loaded. Source: `Product::category()` serialized as `category`. */
  declare category?: Category | null;

  /** Product image relation when eager-loaded. Source: `Product::images()` serialized as `images`. */
  declare images?: ProductImage[];

  /** Product variant relation when eager-loaded. Source: `Product::productVariants()` serialized as `product_variants`. */
  declare product_variants?: ProductVariant[];

  /** Product file relation when eager-loaded. Source: `Product::files()` serialized as `files`. */
  declare files?: ProductFile[];

  /** Rating aggregate relation when eager-loaded. Source: `Product::ratings()` serialized as `ratings`. */
  declare ratings?: ProductRating[];

  /** Subscription/content relation when eager-loaded. Source: `Product::contents()` serialized as `contents`. */
  declare contents?: ProductContent[];

  /** Daily analytics relation when eager-loaded. Source: `Product::data()` serialized as `data`. */
  declare data?: ProductData[];

  /** Extra-pricing relation when eager-loaded. Source: `Product::extraPricings()` serialized as `extra_pricings`. */
  declare extra_pricings?: ExtraPricing[];

  /** Include/accessory relation when eager-loaded. Source: `Product::includes()` serialized as `includes`. */
  declare includes?: Record<string, unknown>[];

  /** Subscription price relation when eager-loaded. Source: `Product::subscriptionPrices()` serialized as `subscription_prices`. */
  declare subscription_prices?: SubscriptionPrice[];

  /** Property set relation when eager-loaded. Source: `Product::propertySet()` serialized as `property_set`. */
  declare property_set?: PropertySet | null;

  /** Parent dropshipping product relation when eager-loaded. Source: `Product::parent()` serialized as `parent`. */
  declare parent?: Product | null;

  /** Child dropshipping products when eager-loaded. Source: `Product::children()` serialized as `children`. */
  declare children?: Product[];

  /** Marketplace vendor relation when eager-loaded. Source: `Product::vendor()` serialized as `vendor`. */
  declare vendor?: Record<string, unknown> | null;

  /** Marketplace vendor-product rows when eager-loaded. Source: `Product::vendorProducts()` serialized as `vendor_products`. */
  declare vendor_products?: Record<string, unknown>[];

  constructor(
    data: {
      id: number;
      name: string;
    } & Partial<Product.IProduct>,
  ) {
    Object.assign(this, data);
  }
}

export namespace Product {
  /** Product fulfillment type. Source enum: `App\Shop\Products\Enums\ProductType`. */
  export enum ProductType {
    PHYSICAL = "PHYSICAL",
    VIRTUAL = "VIRTUAL",
    SERVICE = "SERVICE",
    FILE = "FILE",
    SUBSCRIPTION = "SUBSCRIPTION",
  }

  /** Variable price input mode. Source enum: `App\Shop\Products\Enums\PriceInputType`. */
  export enum PriceInputType {
    DEFAULT = "default",
    AREA = "area",
    VOLUME = "volume",
    CUSTOM = "custom",
  }

  /** Product pricing strategy. Source enum: `App\Shop\Products\Enums\ProductPricing`. */
  export enum ProductPricing {
    /** Fixed price used by physical, virtual, file, and service products. */
    FIX = "FIX",
    /** Seller estimates/sets service price before checkout and may change it later. */
    ESTIMATION = "ESTIMATION",
    /** Seller sets final agreed service price before checkout. */
    AGREEMENT = "AGREEMENT",
    /** Buyer bid flow; kept for backend compatibility. */
    BID = "BID",
  }

  /** Product condition. Source enum: `App\Shop\Products\Enums\ProductCondition`. */
  export enum ProductCondition {
    NEW = "new",
    REFURBISHED = "refurbished",
    USED = "used",
    USED_FAIR = "used_fair",
    USED_GOOD = "used_good",
    USED_LIKE_NEW = "used_like_new",
  }

  /** Product publication/workflow status. Source enum: `App\Shop\Products\Enums\ProductStatus`. */
  export enum ProductStatus {
    Open = "Open",
    Close = "Close",
    Pending = "Pending",
    Rejected = "Rejected",
  }

  /** Product specification JSON from `shop_products.spec`. */
  export interface ISpec {
    [key: string]: string[] | string | number | boolean | null;
  }

  /** Product display style JSON from `shop_products.style`. */
  export interface IStyle {
    /** Whether storefront images should use contain-fit behavior. */
    contain?: boolean;
    /** Backend/storefront themes may add custom style flags. */
    [key: string]: unknown;
  }

  /** Variant dimensions/options configuration stored on `shop_products.variants`. */
  export interface IVariant {
    /** Color option label/code. */
    color?: string | null;
    /** Style option label. */
    style?: string | null;
    /** Volume option label. */
    volume?: string | null;
    /** Weight option label. */
    weight?: string | null;
    /** Pack/count option label. */
    pack?: string | null;
    /** Custom type option label. */
    type?: string | null;
  }

  /** Subscription ribbon configuration stored in `shop_products.ribbon`. */
  export interface IRibbon {
    /** Subscription mode key. */
    mode: keyof typeof SubscriptionMode;
    /** Linked product/variant/count configuration for subscription bundles. */
    items?: {
      product_id: number;
      variant_id?: number | null;
      count: number;
    };
    /** Whether the customer should provide billing address. */
    billing: boolean;
    /** Whether the customer should provide shipping address. */
    shipping: boolean;
    /** Whether the customer can purchase more than one subscription item. */
    count: boolean;
  }

  /** AR/3D model metadata stored in `shop_products.ar` and `shop_product_variant.ar`. */
  export interface IAR {
    /** Original uploaded source file path. */
    src_file?: string;
    /** Converted/public AR asset path. */
    src?: string;
    /** Source file size/path metadata returned by backend converters. */
    size_src?: string;
    /** Original source file name. */
    name_src?: string;
    /** Backend can add converter-specific metadata. */
    [key: string]: unknown;
  }

  /** Physical extra parameters stored in `shop_products.extra` and variant `extra`. */
  export interface IExtra {
    /** Width value in the shop-defined measurement unit. */
    width?: number;
    /** Length value in the shop-defined measurement unit. */
    length?: number;
    /** Height value in the shop-defined measurement unit. */
    height?: number;
    /** Weight value in the shop-defined measurement unit. */
    weight?: number;
    /** Backend can add shipping/provider-specific keys. */
    [key: string]: unknown;
  }

  /** Internal team note stored in `shop_products.note`. */
  export interface INote {
    /** User id of the note author. */
    user_id: number;
    /** Display name captured for the author. */
    user_name: string;
    /** Note body. */
    body: string;
    /** Note timestamp as returned by Laravel/JSON serialization. */
    date: string | Date;
  }

  /** Localized product fields keyed by locale code. */
  export type Translations = Record<string, Record<string, unknown>>;

  export interface IProduct {
    /** Product id. Source: `shop_products.id`. */
    id: number | null;
    /** Owning shop id. Source: `shop_products.shop_id`. */
    shop_id: number | null;
    /** Marketplace vendor owner id. Source: nullable `shop_products.vendor_id`. */
    vendor_id?: number | null;
    /** Product type. Source: `shop_products.type`. */
    type?: ProductType;
    /** Custom sort order. Source: `shop_products.order`. */
    order?: number;
    /** Custom unit label. Source: nullable `shop_products.unit`. */
    unit?: string | null;
    /** Whether fractional quantities are allowed. Source: `shop_products.unit_float`. */
    unit_float?: boolean;
    /** Price input mode. Source: `shop_products.price_input`. */
    price_input?: PriceInputType;
    /** Officer user id. Source: `shop_products.officer`. */
    officer?: number | null;
    /** Assigned valuation id. Source: nullable `shop_products.valuation_id`. */
    valuation_id?: number | null;
    /** Product pricing strategy. Source: `shop_products.pricing`. */
    pricing?: ProductPricing;
    /** Base price. Source: `shop_products.price`. */
    price: number;
    /** Price currency code. Source: `shop_products.currency`. */
    currency: keyof typeof Currency;
    /** Commission amount. Source: `shop_products.commission`. */
    commission: number;
    /** Discount amount. Source: `shop_products.discount`. */
    discount: number;
    /** Discount start timestamp. Source: nullable `shop_products.dis_start`. */
    dis_start: string | null;
    /** Discount end timestamp. Source: nullable `shop_products.dis_end`. */
    dis_end: string | null;
    /** Public price label. Source: nullable `shop_products.price_label`. */
    price_label?: string | null;
    /** Product status. Source: `shop_products.status`. */
    status?: ProductStatus;
    /** Public title. Source: `shop_products.title`. */
    title?: string;
    /** English/secondary title. Source: nullable `shop_products.title_en`. */
    title_en?: string | null;
    /** SKU. Source: nullable `shop_products.sku`. */
    sku?: string | null;
    /** Manufacturer Part Number. Source: nullable `shop_products.mpn`. */
    mpn?: string | null;
    /** Global Trade Item Number. Source: nullable `shop_products.gtin`. */
    gtin?: string | null;
    /** Google Product Category id. Source: nullable `shop_products.gpc`. */
    gpc?: number | null;
    /** Harmonized System Nomenclature code. Source: nullable `shop_products.hsn`. */
    hsn?: string | null;
    /** Product condition. Source: `shop_products.condition`. */
    condition?: ProductCondition;
    /** Brand. Source: nullable `shop_products.brand`. */
    brand?: string | null;
    /** Warranty terms. Source: nullable `shop_products.warranty`. */
    warranty?: string | null;
    /** Product specification JSON. Source: nullable `shop_products.spec`. */
    spec?: ISpec | null;
    /** Specification display order. Source: nullable `shop_products.spec_order`. */
    spec_order?: Array<string | Record<string, unknown>> | null;
    /** Pros map. Source: nullable `shop_products.pros`. */
    pros?: Record<string, string> | null;
    /** Cons map. Source: nullable `shop_products.cons`. */
    cons?: Record<string, string> | null;
    /** Product message. Source: nullable `shop_products.message`. */
    message?: string | null;
    /** Output form/data structure. Source: nullable `shop_products.outputs`. */
    outputs?: unknown[] | null;
    /** Buyer input form structure. Source: nullable `shop_products.inputs`. */
    inputs?: unknown[] | null;
    /** Variant dimension configuration JSON. Source: nullable `shop_products.variants`. */
    variants?: IVariant[] | null;
    /** Blog/resource URL. Source: nullable `shop_products.blog`. */
    blog?: string | null;
    /** Primary category id. Source: nullable `shop_products.category_id`. */
    category_id?: number | null;
    /** Shortcut category ids. Source: nullable `shop_products.shortcuts`. */
    shortcuts?: number[] | null;
    /** Available quantity. Source: `shop_products.quantity`. */
    quantity?: number;
    /** Minimum order quantity. Source: `shop_products.limit_min`. */
    limit_min?: number;
    /** Maximum order quantity. Source: `shop_products.limit_max`. */
    limit_max?: number;
    /** Lead time in hours. Source: `shop_products.lead`. */
    lead?: number;
    /** Physical extra metadata. Source: nullable `shop_products.extra`. */
    extra?: IExtra | null;
    /** Display style JSON. Source: nullable `shop_products.style`. */
    style?: IStyle | null;
    /** Visit counter. Source: `shop_products.visits`. */
    visits?: number;
    /** Average rating. Source: `shop_products.rate`. */
    rate?: number;
    /** Rating count. Source: `shop_products.rate_count`. */
    rate_count?: number;
    /** Wait-for-available count. Source: `shop_products.for_available`. */
    for_available?: number;
    /** Wait-for-auction count. Source: `shop_products.for_auction`. */
    for_auction?: number;
    /** Sales count. Source: `shop_products.sells`. */
    sells?: number;
    /** Return window value; backend comments conflict on days/hours. Source: `shop_products.return_warranty`. */
    return_warranty?: number;
    /** Original/authentic flag. Source: `shop_products.original`. */
    original?: boolean;
    /** Bestseller flag. Source: `shop_products.best_seller`. */
    best_seller?: boolean;
    /** Best-content flag. Source: `shop_products.best_content`. */
    best_content?: boolean;
    /** SEO slug. Source: nullable `shop_products.slug`. */
    slug?: string | null;
    /** AR/3D metadata. Source: nullable JSON `shop_products.ar`. */
    ar?: IAR | null;
    /** Team notes. Source: nullable JSON `shop_products.note`. */
    note?: INote[] | null;
    /** YouTube video id. Source: nullable `shop_products.video`. */
    video?: string | null;
    /** Badge ids. Source: nullable JSON `shop_products.badges`. */
    badges?: number[] | null;
    /** Dropshipping enabled flag. Source: `shop_products.reselling`. */
    reselling?: boolean;
    /** Dropshipping shipping costs by country code. Source: nullable JSON `shop_products.shipping`. */
    shipping?: Record<string, number> | null;
    /** Number of reseller shops. Source: `shop_products.reselling_shops`. */
    reselling_shops?: number;
    /** Reseller sales/product count. Source: `shop_products.reselling_count`. */
    reselling_count?: number;
    /** Dropshipping source product id. Source: nullable `shop_products.parent_id`. */
    parent_id?: number | null;
    /** Repository source id. Source: nullable `shop_products.repository_id`. */
    repository_id?: number | null;
    /** Connect provider id. Source: nullable `shop_products.connect_id`. */
    connect_id?: number | null;
    /** Warranty profile id. Source: nullable `shop_products.warranty_id`. */
    warranty_id?: number | null;
    /** Return policy profile id. Source: nullable `shop_products.return_policy_id`. */
    return_policy_id?: number | null;
    /** Guide profile id. Source: nullable `shop_products.guide_id`. */
    guide_id?: number | null;
    /** Shipping profile id. Source: nullable `shop_products.shipping_id`. */
    shipping_id?: number | null;
    /** Tax profile id. Source: nullable `shop_products.tax_id`. */
    tax_id?: number | null;
    /** Map tag id. Source: nullable `shop_products.map_id`. */
    map_id?: number | null;
    /** Product tags. Source: nullable JSON `shop_products.tags`. */
    tags?: string[] | null;
    /** Ribbon config. Source: nullable JSON `shop_products.ribbon`. */
    ribbon?: IRibbon | null;
    /** Buy call-to-action text. Source: nullable `shop_products.action`. */
    action?: string | null;
    /** External buy URL. Source: nullable `shop_products.external`. */
    external?: string | null;
    /** Location restrictions. Source: nullable JSON `shop_products.locations`. */
    locations?: Record<string, string[]> | null;
    /** Raw icon path. Source: nullable `shop_products.icon`. */
    icon?: string | null;
    /** Raw cover path. Source: nullable `shop_products.cover`. */
    cover?: string | null;
    /** Theme code. Source: nullable `shop_products.theme`. */
    theme?: string | null;
    /** Product augmentation JSON. Source: nullable JSON `shop_products.augment`. */
    augment?: Record<string, unknown> | null;
    /** Localized fields. Source: nullable JSON `shop_products.translations`. */
    translations?: Translations | null;
    /** Threshold config. Source: nullable JSON `shop_products.thresholds`. */
    thresholds?: IThresholds | null;
    /** Custom attributes. Source: nullable JSON `shop_products.attributes`. */
    attributes?: IAttributes | null;
    /** Property set id. Source: nullable `shop_products.property_set_id`. */
    property_set_id?: number | null;
    /** Page-builder page id. Source: nullable `shop_products.page_id`. */
    page_id?: number | null;
    /** Private metadata. Source: nullable JSON `shop_products.meta`. */
    meta?: Record<string, unknown> | null;
    /** Soft-delete timestamp when returned. Source: `shop_products.deleted_at`. */
    deleted_at?: string | null;
    /** Creation timestamp when returned. Source: `shop_products.created_at`. */
    created_at?: string | null;
    /** Last update timestamp when returned. Source: `shop_products.updated_at`. */
    updated_at?: string | null;
    /** Category relation when returned. */
    category?: Category | null;
    /** Images relation when returned. */
    images?: ProductImage[];
    /** Variants relation when returned under Laravel's snake_case relation key. */
    product_variants?: ProductVariant[];
    /** Files relation when returned. */
    files?: ProductFile[];
    /** Rating aggregate relation when returned. */
    ratings?: ProductRating[];
    /** Subscription/content relation when returned. */
    contents?: ProductContent[];
    /** Daily analytics relation when returned. */
    data?: ProductData[];
    /** Extra-pricing relation when returned. */
    extra_pricings?: ExtraPricing[];
    /** Include/accessory relation when returned. */
    includes?: Record<string, unknown>[];
    /** Subscription price relation when returned. */
    subscription_prices?: SubscriptionPrice[];
    /** Property set relation when returned. */
    property_set?: PropertySet | null;
    /** Parent dropshipping product relation when returned. */
    parent?: Product | null;
    /** Child dropshipping products relation when returned. */
    children?: Product[];
    /** Vendor relation when returned. */
    vendor?: Record<string, unknown> | null;
    /** Vendor-product rows when returned. */
    vendor_products?: Record<string, unknown>[];
  }

  type IThresholdValue = number | null;

  type IThreshold = {
    /** Minimum sales required for this threshold. */
    minSales?: IThresholdValue;
    /** Maximum quantity boundary for this threshold. */
    maxQuantity?: IThresholdValue;
    /** Minimum quantity boundary for this threshold. */
    minQuantity?: IThresholdValue;
  };

  export type IVariables = {
    /** Critical stock/sales threshold. */
    critical?: IThreshold;
    /** High stock/sales threshold. */
    high?: IThreshold;
    /** Moderate stock/sales threshold. */
    moderate?: IThreshold;
    /** Low stock/sales threshold. */
    low?: IThreshold;
  };

  /** Product threshold configuration stored in `shop_products.thresholds`. */
  export type IThresholds = {
    /** Whether product-specific thresholds override shop defaults. */
    custom?: boolean;
    /** Proportion of stock in cart that triggers threshold state. */
    carts?: number;
    /** Progress ratio used by storefront stock/progress display. */
    progress?: number;
    /** Per-level threshold variables. */
    variables?: IVariables;
  };

  /** Custom product attributes stored in `shop_products.attributes`. */
  export type IAttributes = Record<string, unknown>;
}