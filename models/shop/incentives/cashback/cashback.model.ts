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
 * Cashback incentive program returned by shop backoffice and storefront cashback APIs.
 *
 * Backend source: `App\Shop\Cashback\Cashback`, table `shop_cashbacks`.
 * Creation/edit validation is in `CashbackAddController::api_addCashback` and
 * `CashbackEditController::api_editCashback`. The model uses soft deletes, cluster assignment,
 * translation JSON, and JSON team notes.
 */
export interface Cashback {
  /** Cashback id. Source: `shop_cashbacks.id`. */
  id: number;

  /** Owning shop id. Source: `shop_cashbacks.shop_id`. */
  shop_id: number;

  /** Optional cluster grouping id. Source: nullable `shop_cashbacks.cluster_id`. */
  cluster_id?: number | null;

  /** Whether the cashback program can be applied. Source: `shop_cashbacks.enable`. */
  enable: boolean;

  /** Total cashback amount already paid through this program. Source: `shop_cashbacks.total_cashback`. */
  total_cashback: number;

  /** Cashback percentage before boost multiplier. Validation: numeric `0..20`. Source: `shop_cashbacks.percent`. */
  percent: number;

  /** Maximum cashback amount in `currency`; `0` means unlimited. Source: `shop_cashbacks.limit`. */
  limit: number;

  /** Whether backend applies the 2x cashback multiplier. Source: `shop_cashbacks.boosted`. */
  boosted: boolean;

  /** ISO currency code from backend `Currency::GetCurrenciesList()`. Source: `shop_cashbacks.currency`. */
  currency: string;

  /** Start timestamp, or `null` when active immediately. Source: nullable `shop_cashbacks.start`. */
  start: string | null;

  /** End timestamp, or `null` when no expiry is set. Source: nullable `shop_cashbacks.end`. */
  end: string | null;

  /** Public title. DB nullable, add/edit controllers require a string. Source: `shop_cashbacks.title`. */
  title: string | null;

  /** Public description. DB nullable, add/edit controllers require a string. Source: `shop_cashbacks.description`. */
  description: string | null;

  /** Enables first-buy/min-purchase eligibility checks. Source: `shop_cashbacks.qualify`. */
  qualify: boolean;

  /** Restricts the program to customers without previous purchases. Source: `shop_cashbacks.only_first_buy`. */
  only_first_buy: boolean;

  /** Minimum order amount required when `qualify` is true. Source: `shop_cashbacks.min_purchase`. */
  min_purchase: number;

  /** Eligible for customers without a club badge. Source: `shop_cashbacks.no_club`. */
  no_club: boolean;

  /** Eligible for bronze club customers. Source: `shop_cashbacks.bronze_club`. */
  bronze_club: boolean;

  /** Eligible for silver club customers. Source: `shop_cashbacks.silver_club`. */
  silver_club: boolean;

  /** Eligible for gold club customers. Source: `shop_cashbacks.gold_club`. */
  gold_club: boolean;

  /** Eligible for platinum club customers. Source: `shop_cashbacks.platinum_club`. */
  platinum_club: boolean;

  /** Eligible for diamond club customers. Source: `shop_cashbacks.diamond_club`. */
  diamond_club: boolean;

  /** Team notes stored as JSON. Source: nullable `shop_cashbacks.note`. */
  note: Cashback.Note[] | null;

  /** Localized fields keyed by locale. Source: nullable JSON `shop_cashbacks.translations`. */
  translations?: Cashback.Translations | null;

  /** Soft-delete timestamp. Present in full Eloquent responses. Source: `shop_cashbacks.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `shop_cashbacks.created_at`. */
  created_at?: string;

  /** Last update timestamp. Source: `shop_cashbacks.updated_at`. */
  updated_at?: string;

  /** Aggregated daily usage rows when `Cashback::data()` is eager-loaded. */
  data?: Cashback.Data[];

  /** Basket relation when cashback orders are eager-loaded. */
  baskets?: Record<string, unknown>[];

  /** POS basket relation when eager-loaded. */
  pos_baskets?: Record<string, unknown>[];

  /** Raw cashback order rows when `cashbackOrders()` is eager-loaded. */
  cashback_orders?: Record<string, unknown>[];

  /** Cluster relation when loaded by callers. */
  cluster?: Record<string, unknown> | null;
}

export namespace Cashback {
  /** Team note object stored in nullable JSON `shop_cashbacks.note`. */
  export interface Note {
    user_id: number;
    user_name: string;
    body: string;
    date: string;
  }

  /** Daily aggregate row from table `cashback_data`. */
  export interface Data {
    id: number;
    cashback_id: number;
    used: number;
    amount_cashback: number;
    amount_buy: number;
    created_at?: string;
    updated_at?: string;
  }

  /** Translation payload applied by `HasTranslationTrait`. */
  export type Translations = Record<string, Record<string, unknown>>;
}
