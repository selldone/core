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

import type { Coupon } from "../coupon/coupon.model";

/**
 * Buy/get offer incentive model.
 *
 * Backend source: `App\Storefront\Offer\Offer`, table `shop_offers`.
 * Admin list/detail is implemented in `OfferController`; create/edit/delete validation is in `OfferEditController`;
 * storefront eligible-offer responses select a public subset of these fields.
 */
export interface Offer {
  /** Offer id. Source: `shop_offers.id`. */
  id: number;

  /** Owning shop id. Source: `shop_offers.shop_id`; omitted by some public projections. */
  shop_id?: number;

  /** Optional cluster grouping id. Source: nullable `shop_offers.cluster_id`. */
  cluster_id?: number | null;

  /** Whether the offer can be applied. Source: `shop_offers.enable`. */
  enable: boolean;

  /** Maximum total uses, validation minimum `1`. Source: `shop_offers.max`. */
  max?: number;

  /** Number of already-used offers. Source: `shop_offers.used`. */
  used?: number;

  /** Total discount amount applied by this offer. Source: `shop_offers.amount_usage`. */
  amount_usage?: number;

  /** Maximum number of discounted items per order, or `null` for backend default behavior. */
  per_order: number | null;

  /** ISO currency code from backend `Currency::GetCurrenciesList()`. Source: `shop_offers.currency`. */
  currency: string;

  /** Start timestamp, or `null` when active immediately. Source: nullable `shop_offers.start`. */
  start: string | null;

  /** End timestamp, or `null` when no expiry is set. Source: nullable `shop_offers.end`. */
  end: string | null;

  /** Public offer title. Source: nullable `shop_offers.title`; controller requires this on add/edit. */
  title: string | null;

  /** Public offer description. Source: nullable `shop_offers.description`. */
  description: string | null;

  /** Minimum quantity of source items required. Source: `shop_offers.min_quantity`; controller can pass `null`. */
  min_quantity: number | null;

  /** Minimum source-purchase amount required. Source: `shop_offers.min_purchase`; controller can pass `null`. */
  min_purchase: number | null;

  /** Source product/category map sanitized by `ShopHelper::GetValidProductsCategoriesList`. */
  buy_products: Coupon.ProductSelectionMap | [] | null;

  /** Discounted product/category map sanitized by `ShopHelper::GetValidProductsCategoriesList`. */
  get_products: Coupon.ProductSelectionMap | [] | null;

  /** Discount percentage applied to `get_products`, validation range `1..100`. Source: `shop_offers.percent`. */
  percent: number;

  /** Optional UI color used by legacy clients; not a current `shop_offers` DB column. */
  color?: string | null;

  /** Team notes stored as JSON. Source: nullable `shop_offers.note`. */
  note?: Offer.Note[] | null;

  /** Localized fields keyed by locale. Source: nullable JSON `shop_offers.translations`. */
  translations?: Offer.Translations | null;

  /** Soft-delete timestamp. Present in full Eloquent responses. Source: `shop_offers.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `shop_offers.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `shop_offers.updated_at`. */
  updated_at?: string | null;

  /** Daily aggregate rows from `Offer::data()` when eager-loaded. */
  data?: Offer.Data[] | null;

  /** Offer order rows when `offerOrders()` is eager-loaded. */
  offer_orders?: Offer.JsonObject[] | null;

  /** Basket relation when offer orders are eager-loaded. */
  baskets?: Offer.JsonObject[] | null;

  /** Virtual item relation when eager-loaded. */
  virtual_items?: Offer.JsonObject[] | null;

  /** Cluster relation when loaded by callers. */
  cluster?: Offer.JsonObject | null;
}

export namespace Offer {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by Laravel JSON casts. Uses an interface to avoid circular alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by Laravel JSON casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Team note object stored in nullable JSON `shop_offers.note`. */
  export interface Note {
    user_id?: number | null;
    user_name?: string | null;
    body: string;
    date: string;
    [key: string]: JsonValue | undefined;
  }

  /** Daily aggregate row from table `offer_data`. */
  export interface Data {
    id: number;
    offer_id: number;
    used: number;
    amount_discount: number;
    amount_buy: number;
    created_at?: string | null;
    updated_at?: string | null;
  }

  /** Translation payload applied by `HasTranslationTrait`. */
  export type Translations = Record<string, JsonObject>;

  /** Payload accepted by offer create/update endpoints before backend assigns counters and timestamps. */
  export interface Upsert {
    enable: boolean;
    max: number;
    per_order?: number | null;
    currency: string;
    start?: string | null;
    end?: string | null;
    title: string;
    description?: string | null;
    min_quantity?: number | null;
    min_purchase?: number | null;
    buy_products?: Coupon.ProductSelectionMap | [] | null;
    get_products?: Coupon.ProductSelectionMap | [] | null;
    percent: number;
    cluster_id?: number | null;
    note?: Note[] | null;
    translations?: Translations | null;
  }
}
