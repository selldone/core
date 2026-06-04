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
 * Image record attached to a storefront product.
 *
 * Backend source: `App\Shop\Products\ProductImages`, table `shop_product_images`.
 * Storefront product endpoints return this model through the product `images` relation ordered by `order` ascending.
 */
export interface ProductImage {
  /**
   * Unique product image identifier.
   *
   * Source: `shop_product_images.id`.
   */
  id: number;

  /**
   * Product that owns the image.
   *
   * Source: `shop_product_images.product_id`.
   */
  product_id: number;

  /**
   * Variant-specific image owner, or `null` when the image belongs to the base product.
   *
   * Source: nullable `shop_product_images.variant_id`.
   */
  variant_id: number | null;

  /**
   * Stored CDN/storage path for the image.
   *
   * Source: `shop_product_images.path`. The backend stores the raw path, not a frontend alias.
   */
  path: string;

  /**
   * Sort position inside the product image gallery.
   *
   * Source: unsigned tiny integer `shop_product_images.order`; lower values are displayed first.
   */
  order: number;

  /**
   * Uploaded file size in bytes.
   *
   * Source: `shop_product_images.size`, default `0`.
   */
  size: number;

  /**
   * Image width in pixels.
   *
   * Source: `shop_product_images.width`, default `0`.
   */
  width: number;

  /**
   * Image height in pixels.
   *
   * Source: `shop_product_images.height`, default `0`.
   */
  height: number;

  /**
   * Optional alt text used by storefronts for accessibility and SEO.
   *
   * Source: nullable `shop_product_images.alt`.
   */
  alt: string | null;

  /**
   * Soft-delete timestamp when the backend returns trashed images.
   *
   * Source: nullable `shop_product_images.deleted_at`. Normally absent from public storefront payloads.
   */
  deleted_at?: string | null;

  /**
   * Creation timestamp serialized by Laravel when timestamps are included.
   *
   * Source: `shop_product_images.created_at`.
   */
  created_at?: string | null;

  /**
   * Last update timestamp serialized by Laravel when timestamps are included.
   *
   * Source: `shop_product_images.updated_at`.
   */
  updated_at?: string | null;
}