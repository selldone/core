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
 * Represents a coupon in the shop system.
 */
export interface Coupon {
  /**
   * Coupon's unique identifier.
   */
  id: number;

  /**
   * Shop's unique identifier associated with this coupon.
   */
  shop_id: number;

  /**
   * The code of the coupon.
   */
  code: string;

  /**
   * Indicates if the coupon is enabled.
   */
  enable: boolean;

  /**
   * Maximum count of usage for this coupon.
   */
  max: number;

  /**
   * Count of times this coupon has been used.
   */
  used: number;

  /**
   * Total amount of money saved using this coupon.
   */
  amount_usage: number;

  /**
   * Percentage discount provided by the coupon.
   */
  percent: number;

  /**
   * Maximum discount amount limit.
   */
  limit: number;

  /**
   * Base charge applicable with this coupon.
   */
  charge: number;

  /**
   * Currency type for the discount amount.
   */
  currency: string;

  /**
   * Start date for the validity of the coupon.
   */
  start: Date; // Assuming 'Carbon' maps to a Date object in TypeScript.

  /**
   * End date for the validity of the coupon.
   */
  end: Date;

  /**
   * Title of the coupon.
   */
  title: string;

  /**
   * Detailed description about the coupon.
   */
  description: string;

  /**
   * Background color for the coupon display.
   */
  color: string;

  /**
   * If true, the coupon is available only for the first purchase.
   */
  only_first_buy: boolean;

  /**
   * Minimum purchase amount required to avail this coupon.
   */
  min_purchase: number;

  /**
   * If true, checks qualification limits for the coupon.
   */
  qualify: boolean;

  /**
   * If true, a customer can use this coupon only once.
   */
  qualify_single: boolean;

  /**
   * Maximum counts a customer can use this coupon in a day.
   */
  qualify_daily: number;

  /**
   * Maximum counts a customer can use this coupon in a month.
   */
  qualify_monthly: number;

  /**
   * Maximum counts a customer can use this coupon in a year.
   */
  qualify_yearly: number;

  no_club: boolean;
  bronze_club: boolean;
  silver_club: boolean;
  gold_club: boolean;
  platinum_club: boolean;
  diamond_club: boolean;

  /**
   * Array of products. If a user adds any of these products to the cart, the coupon gets qualified.
   */
  products: {[key:string]:number[]}; // Assuming the products are represented by their names or IDs.

  /**
   * Notes by the team regarding the coupon. Contains user_id, user_name, body, and date.
   */
  note: Array<{ user_id: number; user_name: string; body: string; date: Date }>;
}
