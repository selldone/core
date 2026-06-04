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
 * Product rating aggregate field.
 *
 * Backend source: `App\Shop\Rating\ShopRating`, table `shop_ratings`.
 */
export interface ProductRating {
  /** Unique rating field identifier. Source: `shop_ratings.id`. */
  id: number;

  /** Product identifier. Source: `shop_ratings.product_id`. */
  product_id: number;

  /** Rating dimension name, unique per product. Source: `shop_ratings.name`, max 32 characters. */
  name: string;

  /** Sum/aggregate rating value maintained by backend. Source: `shop_ratings.value`. */
  value: number;

  /** Number of user ratings included in `value`. Source: `shop_ratings.count`. */
  count: number;

  /** Soft-delete timestamp when returned. Source: nullable `shop_ratings.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp when returned. Source: `shop_ratings.created_at`. */
  created_at?: string | null;

  /** Last update timestamp when returned. Source: `shop_ratings.updated_at`. */
  updated_at?: string | null;
}