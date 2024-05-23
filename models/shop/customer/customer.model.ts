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
 * Represents a Shop's Customer.
 */
export interface Customer {
  /**
   * The unique identifier for the customer.
   * @type {number}
   */
  id: number;

  /**
   * The unique identifier for the shop.
   * @type {number}
   */
  shop_id: number;

  /**
   * The unique identifier for the user.
   * This can be null.
   * @type {number | null}
   */
  user_id: number | null;

  /**
   * The name of the customer.
   * This can be null.
   * @type {string | null}
   */
  name: string | null;

  /**
   * The email of the customer.
   * This can be null.
   * @type {string | null}
   */
  email: string | null;

  /**
   * The phone number of the customer.
   * This can be null.
   * @type {string | null}
   */
  phone: string | null;

  /**
   * The segments of the customer.
   * This can be null.
   * @type {Array<any> | null}
   */
  segments: Array<any> | null;

  /**
   * The address of the customer.
   * This can be null.
   * @type {Array<any> | null}
   */
  address: Array<any> | null;

  /**
   * The billing information of the customer.
   * This can be null.
   * @type {Array<any> | null}
   */
  billing: Array<any> | null;

  /**
   * The last country of user activity (Auto set by system when user refreshes shop) ISO alpha-2 (US, UK, ...).
   * This can be null.
   * @type {string | null}
   * @see OnShopViewJob
   */
  country: string | null;

  /**
   * The level of the customer.
   * This can be null.
   * @type {string | null}
   * @see ShopCustomerBadgeEnums
   */
  level: string | null;

  /**
   * Whether the customer is subscribed.
   * @type {boolean}
   */
  subscribed: boolean;

  /**
   * The currency of the customer's transactions.
   * @type {string}
   */
  currency: string;

  /**
   * The number of chips used by the customer for shop lotteries (chance by each 10x chips).
   * @type {number}
   */
  chips: number;

  /**
   * The last login time of the customer.
   * @type {Date}
   */
  login_at: string;

  /**
   * The last purchase time of the customer.
   * @type {Date}
   */
  purchase_at: string|null;

  /**
   * The birthday of the customer.
   * @type {Date}
   */
  birthday: string;

  /**
   * The sex of the customer.
   * @type {string}
   * @see Sex
   */
  sex: string;

  /**
   * Whether the customer has exclusive access to the shop.
   * @type {boolean}
   */
  access: boolean;

  /**
   * Whether the customer is banned (cannot post on community and order).
   * @type {boolean}
   */
  banned: boolean;

  /**
   * The seller notes (private).
   * This can be null.
   * @type {string | null}
   */
  notes: string | null;

  /**
   * Key-value pairs / Meta info (private) / Used to keep 3rd party customer ids and other values (e.g., customer id in Stripe).
   * This can be null.
   * @type {Array<any> | null}
   */
  meta: Array<any> | null;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Customer {
  export enum Source {
    CUSTOMER = "customer",
    VENDOR = "vendor",
  }
}
