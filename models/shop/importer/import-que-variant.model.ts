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

import type { ImportQueProduct } from "./import-que-product.model";

/**
 * Queued product variant import row.
 *
 * Backend source: `App\Storefront\Products\import\ImportQueVariant`.
 * Table: `import_que_variants`.
 *
 * Rows belong to an `ImportQueProduct` row and are copied to `shop_product_variant` when the product import job runs.
 */
export class ImportQueVariant implements ImportQueVariant.IImportQueVariant {
  id!: number;
  product_id!: number;
  variant_id!: number | null;
  sku!: string | null;
  mpn!: string | null;
  gtin!: string | null;
  color!: string | null;
  style!: string | null;
  volume!: string | null;
  weight!: string | null;
  pack!: string | null;
  type!: string | null;
  pricing!: boolean;
  price!: number | null;
  currency!: string;
  commission!: number | null;
  discount!: number | null;
  dis_start!: string | null;
  dis_end!: string | null;
  price_label!: string | null;
  quantity!: number;
  image?: string | null;
  enable!: boolean;
  lead!: number;
  extra!: ImportQueProduct.JsonObject | null;
  images!: string[] | null;
  extra_pricings!: ImportQueProduct.ExtraPricingDraft[] | null;
  created_at?: string | null;
  updated_at?: string | null;
  product?: ImportQueProduct.IImportQueProduct | null;

  constructor(data: Partial<ImportQueVariant.IImportQueVariant> = {}) {
    Object.assign(this, data);
  }
}

export namespace ImportQueVariant {
  /**
   * Import queue variant payload returned by backend APIs.
   *
   * Nullable fields match the migration definitions. Date/time values are serialized by Laravel as strings, not
   * JavaScript `Date` instances.
   */
  export interface IImportQueVariant {
    /** Queue row id. Source: `import_que_variants.id`. */
    id: number;

    /** Parent import queue product id. Source: `import_que_variants.product_id`. */
    product_id: number;

    /** Existing product variant id for update imports, or `null` for create imports. */
    variant_id: number | null;

    /** Variant SKU, or `null`. */
    sku: string | null;

    /** Variant manufacturer part number, or `null`. */
    mpn: string | null;

    /** Variant global trade item number, or `null`. */
    gtin: string | null;

    /** Variant color code/name. Max length: 32. */
    color: string | null;

    /** Variant style option. Max length: 21. */
    style: string | null;

    /** Variant volume option. Max length: 21. */
    volume: string | null;

    /** Variant weight option. Max length: 21. */
    weight: string | null;

    /** Variant pack/count option. Max length: 21. */
    pack: string | null;

    /** Variant type option. Max length: 21. */
    type: string | null;

    /** Whether the variant has separate pricing from its parent product. Source column is boolean. */
    pricing: boolean;

    /** Variant-specific price when `pricing` is true, otherwise `null`. */
    price: number | null;

    /** ISO/backend currency code. Source enum: `Currency::GetCurrenciesList()`. */
    currency: string;

    /** Variant-specific commission amount, or `null`. */
    commission: number | null;

    /** Variant-specific discount amount, or `null`. */
    discount: number | null;

    /** Variant discount start timestamp, or `null`. */
    dis_start: string | null;

    /** Variant discount end timestamp, or `null`. */
    dis_end: string | null;

    /** Optional variant price label. Max length: 32. */
    price_label: string | null;

    /** Variant quantity. */
    quantity: number;

    /** Legacy single-image helper kept for compatibility; backend persists `images` JSON instead. */
    image?: string | null;

    /** Whether the imported variant should be enabled. */
    enable: boolean;

    /** Variant lead time in hours. Backend default is `-1`. */
    lead: number;

    /** Extra transport/physical metadata such as size and weight. Stored through a JSON cast. */
    extra: ImportQueProduct.JsonObject | null;

    /** Variant image URL candidates. */
    images: string[] | null;

    /** Extra-pricing drafts copied to variant/product pricing during import. */
    extra_pricings: ImportQueProduct.ExtraPricingDraft[] | null;

    /** Creation timestamp serialized by Laravel. */
    created_at?: string | null;

    /** Last update timestamp serialized by Laravel. */
    updated_at?: string | null;

    /** Parent import product relation when eager-loaded. */
    product?: ImportQueProduct.IImportQueProduct | null;
  }
}
