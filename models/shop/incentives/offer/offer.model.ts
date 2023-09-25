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
 * Represents an Offer within the system.
 */

export interface Offer {
  /** The unique identifier for the offer. */
  id: number;

  /** Whether the offer is enabled or not. */
  enable: boolean;

  /** Maximum number of uses for the offer. */
  max: number;

  /** Count of how many times the offer has been used. */
  used: number;

  /** Total amount utilized by this offer. */
  amount_usage: number;

  /** Maximum number of uses per order. Defines how many times this promotion can be applied to an order. */
  per_order: number;

  /** The currency associated with the offer. */
  currency: string;

  /** Start date of the offer. */
  start: Date; // Note: I'm using the native JS Date type. If you're using a library like moment.js or date-fns, adjust accordingly.

  /** End date of the offer. */
  end: Date;

  /** Title of the offer. */
  title: string;

  /** Description related to the offer. */
  description: string;

  /** Minimum quantity of items required. Specifies the number of items that a customer must buy. */
  min_quantity: number;

  /** Minimum purchase amount necessary. Specifies the amount of money a customer must spend to be eligible for the discount. */
  min_purchase: number;

  /**
   * List of source products eligible for the offer.
   * Keyed by product_id, values are arrays of variant_ids.
   */
  buy_products: { [key: string]: number[] };

  /**
   * List of discounted products associated with the offer.
   * Keyed by product_id, values are arrays of variant_ids.
   */
  get_products: { [key: string]: number[] };

  /** Percentage of the discount offered. */
  percent: number;

  /**
   * Notes related to the offer by the team.
   * Contains details such as user_id, user_name, body of the note, and the date.
   */
  note: Array<{ user_id: number; user_name: string; body: string; date: Date }>;
}
