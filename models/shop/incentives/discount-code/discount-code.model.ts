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
 * Discount code model.
 *
 * Backend source: `App\Shop\DiscountCode\DiscountCode`, table `shop_discount_codes`.
 * Admin list/detail lives in `DiscountCodeController`; create/edit/delete validation lives in
 * `DiscountCodeEditController`; storefront basket application is handled by `ShopDiscountCodeController`.
 */
export interface DiscountCode {
  /** Discount code id. Source: `shop_discount_codes.id`. */
  id: number;

  /** Owning shop id. Source: `shop_discount_codes.shop_id`; omitted by compact/storefront projections. */
  shop_id?: number;

  /** Optional cluster grouping id. Source: nullable `shop_discount_codes.cluster_id`. */
  cluster_id?: number | null;

  /** Unique code within the shop. Source: `shop_discount_codes.code`, max 16 chars. */
  code: string;

  /** Discount percentage, validation range `1..100` for add/edit. Source: `shop_discount_codes.percent`. */
  percent: number;

  /** Maximum total uses, validation minimum `1`. Source: `shop_discount_codes.max`. */
  max?: number;

  /** Number of already-used codes. Source: `shop_discount_codes.used`. */
  used?: number;

  /** Maximum discount amount in `currency`; `0` means unlimited. Source: `shop_discount_codes.limit`. */
  limit: number;

  /** ISO currency code from backend `Currency::GetCurrenciesList()`. Source: `shop_discount_codes.currency`. */
  currency: string;

  /** Discount start timestamp, or `null` when active immediately. Source: nullable `shop_discount_codes.dis_start`. */
  dis_start?: string | null;

  /** Discount end timestamp, or `null` when no expiry is set. Source: nullable `shop_discount_codes.dis_end`. */
  dis_end?: string | null;

  /** Public title. Source: nullable `shop_discount_codes.title`; add/edit strips HTML tags. */
  title: string | null;

  /** Public description. Source: nullable `shop_discount_codes.description`; add/edit strips HTML tags. */
  description: string | null;

  /** Total discount amount paid by this code. Source: `shop_discount_codes.amount_discount`. */
  amount_discount?: number;

  /** Team notes stored as JSON. Source: nullable `shop_discount_codes.note`. */
  note?: DiscountCode.Note[] | null;

  /** Localized fields keyed by locale. Source: nullable JSON `shop_discount_codes.translations`. */
  translations?: DiscountCode.Translations | null;

  /** Soft-delete timestamp. Present in full Eloquent responses. Source: `shop_discount_codes.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `shop_discount_codes.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `shop_discount_codes.updated_at`. */
  updated_at?: string | null;

  /** Daily aggregate rows from `DiscountCode::data()` when eager-loaded. */
  data?: DiscountCode.Data[];

  /** Discount order rows when `discountOrders()` is eager-loaded. */
  discount_orders?: DiscountCode.Order[];

  /** Basket relation when discount orders are eager-loaded. */
  baskets?: Record<string, unknown>[];

  /** POS basket relation when eager-loaded. */
  pos_baskets?: Record<string, unknown>[];

  /** Cluster relation when loaded by callers. */
  cluster?: Record<string, unknown> | null;
}

export namespace DiscountCode {
  /** Team note object stored in nullable JSON `shop_discount_codes.note`. */
  export interface Note {
    user_id: number;
    user_name: string;
    body: string;
    date: string;
  }

  /** Daily aggregate row from table `discount_data`. */
  export interface Data {
    id: number;
    discount_id: number;
    used: number;
    amount_discount: number;
    amount_buy: number;
    created_at?: string | null;
    updated_at?: string | null;
  }

  /** Pivot/order row from table `discount_orders`. */
  export interface Order {
    id: number;
    discount_id: number;
    user_id: number | null;
    order_id: number;
    order_type: string;
    amount_discount: number;
    amount_buy: number;
    currency: string;
    payed: boolean;
    created_at?: string | null;
    updated_at?: string | null;
  }

  /** Translation payload applied by `HasTranslationTrait`. */
  export type Translations = Record<string, Record<string, unknown>>;
}
