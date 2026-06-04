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
 * Extra pricing tier for a product, product variant, or marketplace vendor product.
 *
 * Backend source: `App\Shop\Products\ProductExtraPricing`, table `product_extra_pricings`.
 * Controllers: `Shop\Product\ExtraPricing\ProductExtraPricing*Controller`.
 */
export interface ExtraPricing {
  /** Unique extra-pricing identifier. Source: `product_extra_pricings.id`. */
  id: number;

  /** Owning shop id. Source: `product_extra_pricings.shop_id`. */
  shop_id: number;

  /** Product id this tier applies to. Source: `product_extra_pricings.product_id`. */
  product_id: number;

  /** Variant id when the tier applies to a specific variant. Source: nullable `product_extra_pricings.variant_id`. */
  variant_id?: number | null;

  /** Marketplace vendor id when this tier belongs to a vendor product. Source: nullable `product_extra_pricings.vendor_id`. */
  vendor_id?: number | null;

  /** Marketplace vendor-product row id. Source: nullable `product_extra_pricings.vendor_product_id`. */
  vendor_product_id?: number | null;

  /** Linked marketplace pricing model. Source: nullable `product_extra_pricings.pricing_id`. */
  pricing_id?: number | null;

  /** Minimum ordered quantity required for this tier. Source: `product_extra_pricings.min`, default `1`. */
  min: number;

  /** Final tier price after vendor-pricing calculation if applicable. Source: `product_extra_pricings.price`. */
  price: number;

  /** Raw vendor price before commission conversion. Source: `product_extra_pricings.raw_price`, default `0`. */
  raw_price: number;

  /** Commission amount added to this tier. Source: `product_extra_pricings.commission`, default `0`. */
  commission: number;

  /** Discount amount for this tier. Source: `product_extra_pricings.discount`, default `0`. */
  discount: number;

  /** Discount start timestamp, or `null` when no start is set. Source: nullable `product_extra_pricings.dis_start`. */
  dis_start: string | null;

  /** Discount end timestamp, or `null` when no end is set. Source: nullable `product_extra_pricings.dis_end`. */
  dis_end: string | null;

  /** Creation timestamp serialized by Laravel when included. Source: `product_extra_pricings.created_at`. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel when included. Source: `product_extra_pricings.updated_at`. */
  updated_at?: string | null;

  /** Shop relation when eager-loaded. Source: `ProductExtraPricing::shop()` serialized as `shop`. */
  shop?: Record<string, unknown>;

  /** Product relation when eager-loaded. Source: `ProductExtraPricing::product()` serialized as `product`. */
  product?: Record<string, unknown>;

  /** Variant relation when eager-loaded. Source: `ProductExtraPricing::variant()` serialized as `variant`. */
  variant?: Record<string, unknown> | null;

  /** Vendor relation when eager-loaded. Source: `ProductExtraPricing::vendor()` serialized as `vendor`. */
  vendor?: Record<string, unknown> | null;

  /** Vendor-product relation when eager-loaded. Source: `ProductExtraPricing::vendorProduct()` serialized as `vendor_product`. */
  vendor_product?: Record<string, unknown> | null;

  /** Vendor-pricing relation when eager-loaded. Source: `ProductExtraPricing::pricing()` serialized as `pricing`. */
  pricing?: Record<string, unknown> | null;
}

export namespace ExtraPricing {}