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
 * Coupon incentive model.
 *
 * Backend source: `App\Shop\Coupon\Coupon`, table `shop_coupons`.
 * Admin validation is implemented in `CouponEditController::api_createShopCoupon` and
 * `CouponEditController::api_editCoupon`; storefront eligibility/application logic is in
 * `CouponController`.
 */
export interface Coupon {
  /** Coupon id. Source: `shop_coupons.id`. */
  id: number;

  /** Owning shop id. Source: `shop_coupons.shop_id`. */
  shop_id: number;

  /** Optional cluster grouping id. Source: nullable `shop_coupons.cluster_id`. */
  cluster_id?: number | null;

  /** Optional coupon code. Source: nullable binary-collated `shop_coupons.code`, max 64 chars. */
  code: string | null;

  /** Whether the coupon can be used. Source: `shop_coupons.enable`. */
  enable: boolean;

  /** Maximum total uses; validation requires at least `1`. Source: `shop_coupons.max`. */
  max: number;

  /** Number of already-used coupons. Source: `shop_coupons.used`. */
  used: number;

  /** Total discount/charge amount applied by this coupon. Source: `shop_coupons.amount_usage`. */
  amount_usage: number;

  /** Percentage discount, `0..100`. Source: `shop_coupons.percent`. */
  percent: number;

  /** Maximum discount amount in `currency`; `0` means unlimited. Source: `shop_coupons.limit`. */
  limit: number;

  /** Fixed base discount amount added after percent calculation. Source: `shop_coupons.charge`. */
  charge: number;

  /** ISO currency code from backend `Currency::GetCurrenciesList()`. Source: `shop_coupons.currency`. */
  currency: string;

  /** Start timestamp, or `null` when active immediately. Source: nullable `shop_coupons.start`. */
  start: string | null;

  /** End timestamp, or `null` when no expiry is set. Source: nullable `shop_coupons.end`. */
  end: string | null;

  /** Public coupon title. Source: nullable `shop_coupons.title`; controller requires this on add/edit. */
  title: string | null;

  /** Public coupon description. Source: nullable `shop_coupons.description`. */
  description: string | null;

  /** Background color used by backoffice/storefront UIs. Source: nullable `shop_coupons.color`, max 9 chars. */
  color: string | null;

  /** Restricts usage to first purchase customers. Source: `shop_coupons.only_first_buy`. */
  only_first_buy: boolean;

  /** Minimum order amount required when qualification checks are active. Source: `shop_coupons.min_purchase`. */
  min_purchase: number;

  /** Enables customer/product/date qualification checks. Source: `shop_coupons.qualify`. */
  qualify: boolean;

  /** If true, each customer can use this coupon only once. Source: `shop_coupons.qualify_single`. */
  qualify_single: boolean;

  /** Max uses per customer per day, or `null` for no daily limit. Source: `shop_coupons.qualify_daily`. */
  qualify_daily: number | null;

  /** Max uses per customer per month, or `null` for no monthly limit. Source: `shop_coupons.qualify_monthly`. */
  qualify_monthly: number | null;

  /** Max uses per customer per year, or `null` for no yearly limit. Source: `shop_coupons.qualify_yearly`. */
  qualify_yearly: number | null;

  /** Eligible for customers without a club badge. Source: `shop_coupons.no_club`. */
  no_club: boolean;

  /** Eligible for bronze club customers. Source: `shop_coupons.bronze_club`. */
  bronze_club: boolean;

  /** Eligible for silver club customers. Source: `shop_coupons.silver_club`. */
  silver_club: boolean;

  /** Eligible for gold club customers. Source: `shop_coupons.gold_club`. */
  gold_club: boolean;

  /** Eligible for platinum club customers. Source: `shop_coupons.platinum_club`. */
  platinum_club: boolean;

  /** Eligible for diamond club customers. Source: `shop_coupons.diamond_club`. */
  diamond_club: boolean;

  /**
   * Product/category eligibility map sanitized by `ShopHelper::GetValidProductsCategoriesList`.
   * Keys are product ids or category keys like `c-456`; values are variant id arrays. Empty PHP arrays may serialize as `[]`.
   */
  products: Coupon.ProductSelectionMap | [] | null;

  /** Team notes stored as JSON. Source: nullable `shop_coupons.note`. */
  note: Coupon.Note[] | null;

  /** Localized fields keyed by locale. Source: nullable JSON `shop_coupons.translations`. */
  translations?: Coupon.Translations | null;

  /** Soft-delete timestamp. Present in full Eloquent responses. Source: `shop_coupons.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `shop_coupons.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `shop_coupons.updated_at`. */
  updated_at?: string | null;

  /** Daily aggregate rows from `Coupon::data()` when eager-loaded. */
  data?: Coupon.Data[];

  /** Coupon order rows when `couponOrders()` is eager-loaded. */
  coupon_orders?: Coupon.Order[];

  /** Basket relation when coupon orders are eager-loaded. */
  baskets?: Record<string, unknown>[];

  /** POS basket relation when coupon orders are eager-loaded. Source relation: `Coupon::posBaskets()`. */
  pos_baskets?: Record<string, unknown>[];

  /** Virtual item relation when eager-loaded. */
  virtual_items?: Record<string, unknown>[];

  /** Cluster relation when loaded by callers. */
  cluster?: Record<string, unknown> | null;
}

export namespace Coupon {
  /** Product/category filter map accepted by coupon and offer controllers. */
  export type ProductSelectionMap = Record<string, number[]>;

  /** Customer-club eligibility flags stored directly on incentive rows. */
  export interface ClubEligibility {
    no_club: boolean;
    bronze_club: boolean;
    silver_club: boolean;
    gold_club: boolean;
    platinum_club: boolean;
    diamond_club: boolean;
  }

  /** Team note object stored in nullable JSON `shop_coupons.note`. */
  export interface Note {
    user_id: number;
    user_name: string;
    body: string;
    date: string;
  }

  /** Daily aggregate row from table `coupon_data`. */
  export interface Data {
    id: number;
    coupon_id: number;
    used: number;
    amount_discount: number;
    amount_buy: number;
    created_at?: string | null;
    updated_at?: string | null;
  }

  /** Pivot/order row from table `coupon_orders`. */
  export interface Order {
    id: number;
    coupon_id: number;
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
