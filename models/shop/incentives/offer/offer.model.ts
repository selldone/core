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
 * Backend source: `App\Shop\Offer\Offer`, table `shop_offers`.
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
  created_at?: string;

  /** Last update timestamp. Source: `shop_offers.updated_at`. */
  updated_at?: string;

  /** Daily aggregate rows from `Offer::data()` when eager-loaded. */
  data?: Offer.Data[];

  /** Offer order rows when `offerOrders()` is eager-loaded. */
  offer_orders?: Record<string, unknown>[];

  /** Basket relation when offer orders are eager-loaded. */
  baskets?: Record<string, unknown>[];

  /** Virtual item relation when eager-loaded. */
  virtual_items?: Record<string, unknown>[];

  /** Cluster relation when loaded by callers. */
  cluster?: Record<string, unknown> | null;
}

export namespace Offer {
  /** Team note object stored in nullable JSON `shop_offers.note`. */
  export interface Note {
    user_id: number;
    user_name: string;
    body: string;
    date: string;
  }

  /** Daily aggregate row from table `offer_data`. */
  export interface Data {
    id: number;
    offer_id: number;
    used: number;
    amount_discount: number;
    amount_buy: number;
    created_at?: string;
    updated_at?: string;
  }

  /** Translation payload applied by `HasTranslationTrait`. */
  export type Translations = Record<string, Record<string, unknown>>;
}
