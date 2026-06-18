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
 * Backend source: `App\Storefront\Rating\ShopRating`, table `shop_ratings`.
 *
 * Each row defines one rating dimension for a product. User scores are stored in `shop_user_rate`; the aggregate
 * `value` is the sum of submitted scores and `count` is the number of user scores.
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

  /** Product relation when eager-loaded. Source: `ShopRating::product()`. */
  product?: Record<string, unknown> | null;

  /** Individual user scores when eager-loaded. Source: `ShopRating::userRates()`. */
  userRates?: ProductRating.UserRate[];

  /** Soft-delete timestamp when returned. Source: nullable `shop_ratings.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp when returned. Source: `shop_ratings.created_at`. */
  created_at?: string | null;

  /** Last update timestamp when returned. Source: `shop_ratings.updated_at`. */
  updated_at?: string | null;
}

export namespace ProductRating {
  /** Valid score submitted by a buyer/user. Backend rejects values outside 1..5. */
  export type Score = 1 | 2 | 3 | 4 | 5;

  /** User rating row. Backend source: `App\Storefront\Rating\ShopUserRating`, table `shop_user_rate`. */
  export interface UserRate {
    /** User-rate row id. */
    id: number;

    /** User id that submitted the score. */
    user_id: number;

    /** Parent `shop_ratings.id`. */
    rate_id: number;

    /** Submitted score. Backend validates this as 1..5. */
    value: Score;

    /** User relation when eager-loaded. */
    user?: Record<string, unknown> | null;

    /** Rating relation when eager-loaded. */
    rate?: ProductRating | null;

    /** Soft-delete timestamp when returned. */
    deleted_at?: string | null;

    /** Creation timestamp serialized by Laravel. */
    created_at?: string | null;

    /** Last update timestamp serialized by Laravel. */
    updated_at?: string | null;
  }

  /** Allowed keys exposed by backend `STRUCTURE` / `CustomStructure()`. */
  export type StructureKey = "id" | "product_id" | "name" | "value" | "count";
}
