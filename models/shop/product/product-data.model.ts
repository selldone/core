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
 * Daily product analytics/statistics record.
 *
 * Backend source: `App\Storefront\Statistic\ProductData`, table `product_data`.
 * Each row is a daily snapshot/counter bucket. `TodayRecord()` creates a row for the current date and copies the
 * product's current price and quantity into `price` and `count`.
 */
export interface ProductData {
  /** Unique analytics record identifier. Source: `product_data.id`. */
  id: number;

  /** Product identifier. Source: `product_data.product_id`. */
  product_id: number;

  /** Product price snapshot in Rial/base accounting currency. Source: `product_data.price`. */
  price: number;

  /** Product quantity snapshot for the day. Source: `product_data.count`, changed to float for fractional units. */
  count: number;

  /** Total sold count for the day. Source: `product_data.sell`. */
  sell: number;

  /** Total sent/shipped count for the day. Source: `product_data.send`. */
  send: number;

  /** Total product page views for the day. Source: `product_data.views`. */
  views: number;

  /** Total likes for the day. Source: `product_data.likes`. */
  likes: number;

  /** Backend power metric counter. Source: `product_data.powers`. */
  powers: number;

  /** Total favorites for the day. Source: `product_data.favorites`. */
  favorites: number;

  /** Total wishlist additions for the day. Source: `product_data.wishlist`. */
  wishlist: number;

  /** Total comments for the day. Source: `product_data.comments`. */
  comments: number;

  /** Total approved comments for the day. Source: `product_data.comments_approved`. */
  comments_approved: number;

  /** Total rating count for the day. Source: `product_data.ratings`. */
  ratings: number;

  /** Average rating for the day, normally 1 to 5 when ratings exist. Source: `product_data.rating_star`. */
  rating_star: number;

  /** Number of shops reselling the product in the daily snapshot. Source: `product_data.reselling_shops`. */
  reselling_shops: number;

  /** Count of reseller sales/products in the daily snapshot. Source: `product_data.reselling_count`. */
  reselling_count: number;

  /** Finance rows grouped by currency when the backend eager-loads `ProductData::finances()`. */
  finances?: ProductData.Finance[];

  /**
   * Product relation when eager-loaded.
   *
   * Backend method name is `shop()` but it belongs to `Product` through `product_id`.
   */
  shop?: Record<string, unknown> | null;

  /** Creation timestamp for the analytics row. Source: `product_data.created_at`. */
  created_at: string | null;

  /** Last update timestamp for the analytics row. Source: `product_data.updated_at`. */
  updated_at: string | null;
}

export namespace ProductData {
  /** Product financial analytics row. Backend table: `product_data_finance`. */
  export interface Finance {
    /** Finance row id. */
    id: number;

    /** Parent product_data id. */
    data_id: number;

    /** Currency code for this finance bucket. */
    currency: string;

    /** Total sold amount in this currency bucket. */
    sell: number;

    /** Total paid amount in this currency bucket. */
    pay: number;

    /** Total discount amount in this currency bucket. */
    discount: number;

    /** Creation timestamp serialized by Laravel. */
    created_at?: string | null;

    /** Last update timestamp serialized by Laravel. */
    updated_at?: string | null;
  }

  /** Allowed metric keys exposed by backend `STRUCTURE` / `CustomStructure()`. */
  export type StructureKey =
    | "id"
    | "count"
    | "sell"
    | "send"
    | "views"
    | "likes"
    | "powers"
    | "favorites"
    | "comments"
    | "comments_approved"
    | "ratings"
    | "rating_star"
    | "wishlist";
}
