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
 * Per-shop quota/usage counters.
 *
 * Backend source: `App\Storefront\Quota\ShopQuota`, table `shop_quota`.
 * Created by `CreateShopQuotaTable` and extended by product/background-removal/vendor
 * quota migrations. Every `*_max`, `*_extra`, and `*_usage` field is an integer counter with DB default `0` unless
 * documented otherwise in the migration.
 */
export interface IQuota {
  /** Quota row id. Source: `shop_quota.id`. */
  id: number;

  /** Owning shop id. Source: unique `shop_quota.shop_id`. */
  shop_id: number;

  /** Maximum products included by plan. */
  products_max: number;
  /** Extra products granted by Selldone/admin. */
  products_extra: number; // Added extra quota by selldone admin
  /** Current products usage. */
  products_usage: number;

  categories_max: number;
  categories_extra: number; // Added extra quota by selldone admin
  categories_usage: number;

  domains_max: number;
  domains_extra: number;
  domains_usage: number;

  discount_codes_max: number;
  discount_codes_extra: number;
  discount_codes_usage: number;

  coupons_max: number;
  coupons_extra: number;
  coupons_usage: number;

  offers_max: number;
  offers_extra: number;
  offers_usage: number;

  lotteries_max: number;
  lotteries_extra: number;
  lotteries_usage: number;

  campaigns_max: number;
  campaigns_extra: number;
  campaigns_usage: number;

  affiliates_max: number;
  affiliates_extra: number;
  affiliates_usage: number;

  email_campaigns_max: number;
  email_campaigns_extra: number;
  email_campaigns_usage: number;

  couriers_max: number;
  couriers_extra: number;
  couriers_usage: number;

  pages_max: number;
  pages_extra: number;
  pages_usage: number;

  popups_max: number;
  popups_extra: number;
  popups_usage: number;

  customers_max: number;
  customers_extra: number;
  customers_usage: number;

  community_posts_max: number;
  community_posts_extra: number;
  community_posts_usage: number;

  community_comments_max: number;
  community_comments_extra: number;
  community_comments_usage: number;

  online_orders_max: number;
  online_orders_extra: number;
  online_orders_usage: number;

  pos_orders_max: number;
  pos_orders_extra: number;
  pos_orders_usage: number;

  blogs_max: number;
  blogs_extra: number;
  blogs_usage: number;

  ai_tokens_max: number;
  ai_tokens_extra: number;
  ai_tokens_usage: number;

  bg_remove_max: number;
  bg_remove_extra: number;
  bg_remove_usage: number;

  vendors_max: number; // Maximum number of vendors allowed to add per day
  vendors_extra: number;
  vendors_usage: number;

  /** Owning shop relation when eager-loaded. Source: `ShopQuota::shop()`. */
  shop?: Record<string, unknown> | null;

  /** Quota reset timestamp, or `null`. Source: nullable `shop_quota.reset_date`. */
  reset_date: string | null;

  /** Creation timestamp serialized by Laravel. Source: `shop_quota.created_at`. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. Source: `shop_quota.updated_at`. */
  updated_at?: string | null;
}

export namespace Quota {
  /** Quota resource names that follow the `{resource}_max`, `{resource}_extra`, `{resource}_usage` pattern. */
  export type Resource =
    | "products"
    | "categories"
    | "domains"
    | "discount_codes"
    | "coupons"
    | "offers"
    | "lotteries"
    | "campaigns"
    | "affiliates"
    | "email_campaigns"
    | "couriers"
    | "pages"
    | "popups"
    | "customers"
    | "community_posts"
    | "community_comments"
    | "online_orders"
    | "pos_orders"
    | "blogs"
    | "ai_tokens"
    | "bg_remove"
    | "vendors";

  /** Quota counter suffix. */
  export type Counter = "max" | "extra" | "usage";

  /** Strongly typed quota counter column name. */
  export type CounterColumn = `${Resource}_${Counter}`;

  /** Runtime-safe quota counter triplet. */
  export interface CounterSet {
    /** Included maximum quota from the current shop license/plan. */
    max: number;

    /** Extra quota granted by Selldone/admin. */
    extra: number;

    /** Current usage for the active quota period. */
    usage: number;
  }
}
