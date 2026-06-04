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
import type {Product} from "./product.model";
import type {ProductImage} from "./product-image.model";
import type {ExtraPricing} from "../extra-pricing/extra-pricing.model";
import type {VirtualItem} from "../order/basket/virtual_item.model";

/**
 * Physical product variant stored in `shop_product_variant`.
 *
 * Backend source: `App\Shop\Products\ProductVariant`. Storefront product endpoints can return these through the
 * `productVariants` relation. Variant dimension fields are nullable because a shop can define only the dimensions it uses.
 */
export interface ProductVariant {
  /**
   * Unique variant identifier.
   *
   * Source: `shop_product_variant.id`.
   */
  id: number;

  /**
   * Shop that owns the variant.
   *
   * Source: `shop_product_variant.shop_id`, added after initial schema and backfilled from the parent product.
   */
  shop_id?: number;

  /**
   * Parent product identifier.
   *
   * Source: `shop_product_variant.product_id`.
   */
  product_id: number;

  /**
   * Variant stock keeping unit.
   *
   * Source: nullable `shop_product_variant.sku`.
   */
  sku: string | null;

  /**
   * Manufacturer Part Number for this variant.
   *
   * Source: nullable `shop_product_variant.mpn`.
   */
  mpn: string | null;

  /**
   * Global Trade Item Number for this variant.
   *
   * Source: nullable `shop_product_variant.gtin`. Backend docs mention UPC/EAN/JAN/ISBN-compatible values.
   */
  gtin: string | null;

  /**
   * Color dimension value, often a color code or label.
   *
   * Source: nullable `shop_product_variant.color`.
   */
  color: string | null;

  /**
   * Style dimension value.
   *
   * Source: nullable `shop_product_variant.style`.
   */
  style: string | null;

  /**
   * Volume dimension value.
   *
   * Source: nullable `shop_product_variant.volume`.
   */
  volume: string | null;

  /**
   * Weight dimension value.
   *
   * Source: nullable `shop_product_variant.weight`.
   */
  weight: string | null;

  /**
   * Pack/count dimension value.
   *
   * Source: nullable `shop_product_variant.pack`.
   */
  pack: string | null;

  /**
   * Custom variant type dimension value.
   *
   * Source: nullable `shop_product_variant.type`.
   */
  type: string | null;

  /**
   * Whether this variant has independent pricing.
   *
   * Source: `shop_product_variant.pricing`. When `false`, price is inherited from the parent product.
   */
  pricing: boolean;

  /**
   * Variant-specific price when `pricing` is enabled.
   *
   * Source: nullable `shop_product_variant.price`.
   */
  price: number | null;

  /**
   * Currency code for variant-specific price.
   *
   * Source: `shop_product_variant.currency` enum, same currency list as product prices.
   */
  currency: keyof typeof Currency;

  /**
   * Variant commission amount used in final-price calculation.
   *
   * Source: nullable `shop_product_variant.commission`, default `0`.
   */
  commission: number | null;

  /**
   * Variant discount amount used in final-price calculation.
   *
   * Source: nullable `shop_product_variant.discount`, default `0`.
   */
  discount: number | null;

  /**
   * Discount start timestamp serialized by Laravel, or `null` when no start is set.
   *
   * Source: nullable `shop_product_variant.dis_start` cast to datetime.
   */
  dis_start?: string | null;

  /**
   * Discount end timestamp serialized by Laravel, or `null` when no end is set.
   *
   * Source: nullable `shop_product_variant.dis_end` cast to datetime.
   */
  dis_end?: string | null;

  /**
   * Optional display label for unit pricing such as `$1.5/Fl Oz`.
   *
   * Source: nullable `shop_product_variant.price_label`.
   */
  price_label?: string | null;

  /**
   * Available variant stock quantity.
   *
   * Source: `shop_product_variant.quantity`, changed to float for fractional inventory support.
   */
  quantity: number;

  /**
   * Legacy/main image path for the variant.
   *
   * Source: nullable `shop_product_variant.image`; image galleries are usually returned through `images`.
   */
  image: string | null;

  /**
   * Whether the variant can be selected by customers.
   *
   * Source: `shop_product_variant.enable`, default `true`.
   */
  enable: boolean;

  /**
   * Variant lead time in hours.
   *
   * Source: `shop_product_variant.lead`, default `-1` when the variant inherits shop/product behavior.
   */
  lead: number;

  /**
   * Shipping/physical extra parameters for the variant.
   *
   * Source: nullable JSON `shop_product_variant.extra` fixed by backend `ProductExtraParam::Fix`.
   */
  extra: Product.IExtra | null;

  /**
   * AR/3D metadata for the variant.
   *
   * Source: nullable JSON `shop_product_variant.ar`.
   */
  ar: Product.IAR | Record<string, unknown> | null;

  /**
   * Parent product relation when eager-loaded.
   *
   * Source: `ProductVariant::product()`.
   */
  product?: Product;

  /**
   * Variant image relation when eager-loaded.
   *
   * Source: `ProductVariant::images()` from `shop_product_images.variant_id`.
   */
  images?: ProductImage[];

  /**
   * Virtual stock items for virtual/file-like product variants when eager-loaded.
   *
   * Source: `ProductVariant::virtualItems()`. Laravel serializes this relation as `virtual_items`.
   */
  virtualItems?: VirtualItem[];

  /**
   * Virtual stock items for virtual/file-like product variants when returned by Laravel JSON serialization.
   *
   * Source: `ProductVariant::virtualItems()` serialized as `virtual_items`.
   */
  virtual_items?: VirtualItem[];

  /**
   * Creation timestamp serialized by Laravel when timestamps are included.
   *
   * Source: `shop_product_variant.created_at`.
   */
  created_at?: string | null;

  /**
   * Last update timestamp serialized by Laravel when timestamps are included.
   *
   * Source: `shop_product_variant.updated_at`.
   */
  updated_at?: string | null;

  /**
   * Soft-delete timestamp when the backend returns trashed variants.
   *
   * Source: nullable `shop_product_variant.deleted_at`.
   */
  deleted_at?: string | null;

  /**
   * Original supplier variant in drop-shipping flows.
   *
   * Source: nullable `shop_product_variant.parent_id`.
   */
  parent_id?: number | null;

  /**
   * Parent variant relation when eager-loaded.
   *
   * Source: `ProductVariant::parent()`.
   */
  parent?: ProductVariant | null;

  /**
   * Child reseller variants when eager-loaded.
   *
   * Source: `ProductVariant::children()`.
   */
  children?: ProductVariant[];

  /**
   * Private/integration metadata map.
   *
   * Source: nullable JSON `shop_product_variant.meta`.
   */
  meta?: Record<string, unknown> | null;

  /**
   * Extra-pricing rules attached to this variant when eager-loaded.
   *
   * Source: `ProductVariant::extraPricings()`. Laravel serializes this relation as `extra_pricings`.
   */
  extraPricings?: ExtraPricing[];

  /**
   * Extra-pricing rules attached to this variant when returned by Laravel JSON serialization.
   *
   * Source: `ProductVariant::extraPricings()` serialized as `extra_pricings`.
   */
  extra_pricings?: ExtraPricing[];

  /**
   * Vendor-product rows for marketplace variants when eager-loaded.
   *
   * Source: `ProductVariant::vendorProducts()` serialized as `vendor_products`.
   */
  vendor_products?: Record<string, unknown>[];
}
