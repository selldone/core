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

export interface Lottery {
  /** The unique identifier for the coupon. */
  id: number;

  /** The associated shop's identifier. */
  shop_id: number;

  /** Indicates if the coupon is enabled. */
  enable: boolean;

  /** Total quantity of available tickets. */
  quantity: number;

  /** Number of tickets won by users. */
  win: number;

  /** Number of tickets used. */
  used: number;

  /** The title of the lottery ticket. */
  title: string;

  /** Description about the lottery. */
  description: string;

  /** Background color for the lottery ticket. */
  color: string;

  /** Image representing the lottery ticket. */
  image: string;

  /** Probability of winning (expressed as a percentage). */
  chance: number;

  /** Indicates if the lottery is free for first-time customers. */
  free_for_first: boolean;

  /** Club membership conditions for eligibility. */
  no_club: boolean;
  bronze_club: boolean;
  silver_club: boolean;
  gold_club: boolean;
  platinum_club: boolean;
  diamond_club: boolean;

  // Prize Info
  /** Amount of the prize (based on currency). */
  amount: number;

  /** Currency for the prize amount. */
  currency: string;

  /** Discount percentage applicable on the prize. */
  discount: number;

  /** Upper limit for the discount (based on currency). */
  discount_limit: number;

  /** The product associated with the prize. */
  product_id: number;

  /** The specific variant of the product associated with the prize. */
  variant_id: number;

  /** The type of gift card associated with the prize. */
  card_type_id: number;
}
