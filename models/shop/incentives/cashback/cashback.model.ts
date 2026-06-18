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
  created_at?: string | null;

  /** Last update timestamp. Source: `shop_cashbacks.updated_at`. */
  updated_at?: string | null;

  /** Aggregated daily usage rows when `Cashback::data()` is eager-loaded. */
  data?: Cashback.Data[];

  /** Basket relation when cashback orders are eager-loaded. */
  baskets?: Record<string, unknown>[];

  /** POS basket relation when eager-loaded. */
  pos_baskets?: Record<string, unknown>[];

  /** Raw cashback order rows when `cashbackOrders()` is eager-loaded. */
  cashback_orders?: Cashback.Order[];

  /** Cluster relation when loaded by callers. */
  cluster?: Record<string, unknown> | null;
}

export namespace Cashback {
  /** Team note object stored in nullable JSON `shop_cashbacks.note`. */
  export interface Note {
    /** User id of the note author. */
    user_id: number;

    /** Display name captured for the note author. */
    user_name: string;

    /** Note body. */
    body: string;

    /** Note timestamp serialized in the JSON payload. */
    date: string;
  }

  /** Customer-club eligibility flags stored directly on incentive rows. */
  export interface ClubEligibility {
    /** Eligible for customers without a club badge. */
    no_club: boolean;

    /** Eligible for bronze club customers. */
    bronze_club: boolean;

    /** Eligible for silver club customers. */
    silver_club: boolean;

    /** Eligible for gold club customers. */
    gold_club: boolean;

    /** Eligible for platinum club customers. */
    platinum_club: boolean;

    /** Eligible for diamond club customers. */
    diamond_club: boolean;
  }

  /** Daily aggregate row from table `cashback_data`. */
  export interface Data {
    id: number;
    cashback_id: number;
    used: number;
    amount_cashback: number;
    amount_buy: number;
    created_at?: string | null;
    updated_at?: string | null;
  }

  /** Pivot/order row from table `cashback_orders`. */
  export interface Order {
    /** Cashback order row id. */
    id: number;

    /** Parent cashback id. */
    cashback_id: number;

    /** Buyer user id, or `null` for guest flows. */
    user_id: number | null;

    /** Polymorphic order id. */
    order_id: number;

    /** Polymorphic order type stored by Laravel morphs. */
    order_type: string;

    /** Cashback amount charged to the customer wallet. */
    amount_cashback: number;

    /** Original order amount used for cashback calculation. */
    amount_buy: number;

    /** Currency code for `amount_cashback` and `amount_buy`. */
    currency: string;

    /** Whether the related payment/order completed. */
    paid: boolean;

    /** Creation timestamp. */
    created_at?: string | null;

    /** Last update timestamp. */
    updated_at?: string | null;
  }

  /** Translation payload applied by `HasTranslationTrait`. */
  export type Translations = Record<string, Record<string, unknown>>;
}
