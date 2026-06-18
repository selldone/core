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

/**
 * Queued product import row.
 *
 * Backend source: `App\Storefront\Products\import\ImportQueProduct`.
 * Table: `import_que_products`.
 *
 * The backend stores this model as a temporary, retryable product import payload. When the importing job runs,
 * it either updates `product_id` or creates/fetches a product by title/SKU, creates missing categories, applies
 * valuation/custom-price settings, imports article metadata, and then processes queued variants and images.
 */
export class ImportQueProduct implements ImportQueProduct.IImportQueProduct {
  id!: number;
  product_id!: number | null;
  shop_id!: number;
  vendor_id!: number | null;
  type!: ImportQueProduct.ProductType;
  officer!: number;
  price!: number;
  currency!: string;
  commission!: number;
  discount!: number;
  dis_start!: string | null;
  dis_end!: string | null;
  price_label!: string | null;
  unit!: string | null;
  price_input!: ImportQueProduct.PriceInputType;
  valuation_id!: number | null;
  status!: ImportQueProduct.ProductStatus;
  title!: string;
  title_en!: string | null;
  sku!: string | null;
  mpn!: string | null;
  gtin!: string | null;
  gpc!: number | null;
  condition!: ImportQueProduct.ProductCondition;
  brand!: string | null;
  warranty!: string | null;
  spec!: ImportQueProduct.JsonArray | null;
  spec_order!: ImportQueProduct.JsonArray | null;
  pros!: ImportQueProduct.JsonArray | null;
  cons!: ImportQueProduct.JsonArray | null;
  outputs!: ImportQueProduct.JsonArray | null;
  inputs!: ImportQueProduct.JsonArray | null;
  variants!: ImportQueProduct.JsonArray | null;
  quantity!: number;
  limit_min!: number;
  limit_max!: number;
  lead!: number;
  extra!: ImportQueProduct.JsonObject | null;
  style!: ImportQueProduct.JsonObject | null;
  return_warranty!: number;
  original!: boolean;
  slug!: string | null;
  category!: string | null;
  icon!: string | null;
  images!: string[] | null;
  keep_image_urls!: boolean;
  article_body!: string | null;
  article_title!: string | null;
  article_description!: string | null;
  article_image!: string | null;
  article_faq!: ImportQueProduct.ArticleFaq[] | null;
  article_structures!: ImportQueProduct.JsonArray | null;
  error!: string | null;
  extra_pricings!: ImportQueProduct.ExtraPricingDraft[] | null;
  created_at?: string | null;
  updated_at?: string | null;
  productVariants?: Record<string, unknown>[];
  imagesQue?: Record<string, unknown>[];
  shop?: Record<string, unknown> | null;
  vendor?: Record<string, unknown> | null;

  constructor(data: Partial<ImportQueProduct.IImportQueProduct> = {}) {
    Object.assign(this, data);
  }
}

export namespace ImportQueProduct {
  export type BackendEnum<T extends string> = T | (string & {});

  /** Backend product type enum. Source: `ProductType::All`. */
  export type ProductType = BackendEnum<"PHYSICAL" | "VIRTUAL" | "FILE" | "SERVICE" | "SUBSCRIPTION">;

  /** Backend product status enum. Source: `ProductStatus::All`. */
  export type ProductStatus = BackendEnum<"Open" | "Close" | "Pending">;

  /** Backend product condition enum. Source: `ProductCondition::All`. */
  export type ProductCondition = BackendEnum<"NEW" | "USED" | "REFURBISHED">;

  /** Backend price input enum. `CUSTOM` uses `valuation_id`; otherwise backend falls back to default pricing. */
  export type PriceInputType = BackendEnum<"default" | "custom" | "DEFAULT" | "CUSTOM">;

  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by Laravel JSON/text casts. Uses an interface to avoid TS2456 circular alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue;
  }

  /** JSON array stored by Laravel JSON/text casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** FAQ item stored in `article_faq`. */
  export interface ArticleFaq {
    [key: string]: JsonValue | undefined;

    /** Question text shown in the generated product article. */
    question?: string | null;

    /** Answer text shown in the generated product article. */
    answer?: string | null;
  }

  /** Draft extra-pricing payload copied to product extra pricing during import. */
  export interface ExtraPricingDraft {
    [key: string]: JsonValue | undefined;

    /** Extra pricing title/name when supplied by the import file. */
    title?: string | null;

    /** Additional fixed price amount when supplied. */
    price?: number | null;

    /** Additional commission amount when supplied. */
    commission?: number | null;

    /** Currency code for the draft pricing row. */
    currency?: string | null;
  }

  /**
   * Import queue product payload returned by backend APIs.
   *
   * Nullable fields match the migration definitions. Date/time values are serialized by Laravel as strings, not
   * JavaScript `Date` instances.
   */
  export interface IImportQueProduct {
    /** Queue row id. Source: `import_que_products.id`. */
    id: number;

    /** Existing product id for update imports, or `null` for create/find-by-title imports. */
    product_id: number | null;

    /** Owning shop id. */
    shop_id: number;

    /** Vendor id when the import is created from a vendor panel, otherwise `null`. */
    vendor_id: number | null;

    /** Product type accepted by the backend product type enum. */
    type: ProductType;

    /** User id of the officer that submitted the import. */
    officer: number;

    /** Base product price. */
    price: number;

    /** ISO/backend currency code. Source enum: `Currency::GetCurrenciesList()`. */
    currency: string;

    /** Commission amount. Backend comments describe Rial-normalized commission. */
    commission: number;

    /** Discount amount. */
    discount: number;

    /** Discount start timestamp, or `null`. */
    dis_start: string | null;

    /** Discount end timestamp, or `null`. */
    dis_end: string | null;

    /** Optional price label shown beside product price. Max length: 32. */
    price_label: string | null;

    /** Optional unit label. Max length: 16. */
    unit: string | null;

    /** Price input mode. Custom mode reads `valuation_id`. */
    price_input: PriceInputType;

    /** Linked valuation id for custom price input, or `null`. */
    valuation_id: number | null;

    /** Target product status after import. Vendor imports may be forced to pending by backend rules. */
    status: ProductStatus;

    /** Product title. Backend trims and limits this to 255 characters. */
    title: string;

    /** Optional English title. */
    title_en: string | null;

    /** Stock keeping unit, or `null`. Backend trims and limits this to 255 characters. */
    sku: string | null;

    /** Manufacturer part number, or `null`. Backend trims and limits this to 255 characters. */
    mpn: string | null;

    /** Global trade item number, or `null`. Backend trims and limits this to 255 characters. */
    gtin: string | null;

    /** Google product category id, or `null`. */
    gpc: number | null;

    /** Product condition. Invalid imports are normalized to backend NEW/default. */
    condition: ProductCondition;

    /** Product brand, or `null`. Backend trims and limits this to 255 characters. */
    brand: string | null;

    /** Product warranty label, or `null`. Backend trims and limits this to 255 characters. */
    warranty: string | null;

    /** Product specification rows. Stored through a JSON cast. */
    spec: JsonArray | null;

    /** Display order for product specification rows. Stored through an array cast. */
    spec_order: JsonArray | null;

    /** Product pros. Stored through a JSON cast. */
    pros: JsonArray | null;

    /** Product cons. Stored through a JSON cast. */
    cons: JsonArray | null;

    /** After-purchase output form/schema. Stored through a JSON cast. */
    outputs: JsonArray | null;

    /** After-purchase input form/schema. Stored through a JSON cast. */
    inputs: JsonArray | null;

    /** Variant drafts embedded in the product import row. Dedicated rows may also exist in `import_que_variants`. */
    variants: JsonArray | null;

    /** Product quantity. Backend casts this to float while the original migration used an integer column. */
    quantity: number;

    /** Minimum order quantity limit. Added by extra-pricing/order-limit migration. */
    limit_min: number;

    /** Maximum order quantity limit. Added by extra-pricing/order-limit migration. */
    limit_max: number;

    /** Lead time in hours. Backend default is `-1` for unspecified lead time. */
    lead: number;

    /** Extra transport/physical metadata such as size and weight. Stored through a JSON cast. */
    extra: JsonObject | null;

    /** Product style metadata. Stored through a JSON cast. */
    style: JsonObject | null;

    /** Return warranty duration in days. Backend default is `0`. */
    return_warranty: number;

    /** Whether the product is original/authentic. */
    original: boolean;

    /** Optional product slug. Backend sanitizes and slugifies this value. */
    slug: string | null;

    /** Category id/name/title lookup value. Backend creates a missing category when needed. */
    category: string | null;

    /** Product main image URL/path candidate. */
    icon: string | null;

    /** Product gallery image URL candidates. */
    images: string[] | null;

    /** Keep imported product image URLs as external URLs instead of downloading them to Selldone CDN/storage. */
    keep_image_urls: boolean;

    /** Generated/attached product article body. */
    article_body: string | null;

    /** Generated/attached product article title. Backend cleans and limits this to 128 characters. */
    article_title: string | null;

    /** Generated/attached product article description. */
    article_description: string | null;

    /** Generated/attached product article main image URL. */
    article_image: string | null;

    /** Generated/attached product article FAQ rows. */
    article_faq: ArticleFaq[] | null;

    /** Generated/attached product article structured data blocks. */
    article_structures: JsonArray | null;

    /** Import failure message. Rows with non-null errors are skipped and later purged by backend jobs. */
    error: string | null;

    /** Extra-pricing drafts copied to product extra pricing during import. */
    extra_pricings: ExtraPricingDraft[] | null;

    /** Creation timestamp serialized by Laravel. */
    created_at?: string | null;

    /** Last update timestamp serialized by Laravel. */
    updated_at?: string | null;

    /** Queued variant relation when `productVariants` is eager-loaded. */
    productVariants?: Record<string, unknown>[];

    /** Queued image relation when `imagesQue` is eager-loaded. */
    imagesQue?: Record<string, unknown>[];

    /** Owning shop relation when eager-loaded. */
    shop?: Record<string, unknown> | null;

    /** Vendor relation when eager-loaded. */
    vendor?: Record<string, unknown> | null;
  }
}
