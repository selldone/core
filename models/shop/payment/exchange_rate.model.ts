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
 * Represents an exchange rate in the system.
 */
export class ExchangeRate {
  /**
   * The unique identifier for the exchange rate.
   */
  id: number;

  /**
   * The user's unique identifier associated with the exchange rate.
   */
  user_id: number;

  /**
   * The source currency for the exchange.
   */
  from: string;

  /**
   * The destination currency for the exchange.
   */
  to: string;

  /**
   * The conversion rate from the source currency to the destination currency.
   */
  rate: number;

  /**
   * Historical rates for this exchange rate, if available.
   */
  history?: Array<number>;

  /**
   * Constructs a new instance of ExchangeRate.
   *
   * @param id - The unique identifier for the exchange rate.
   * @param user_id - The user's unique identifier associated with the exchange rate.
   * @param from - The source currency for the exchange.
   * @param to - The destination currency for the exchange.
   * @param rate - The conversion rate from the source currency to the destination currency.
   * @param history - Historical rates for this exchange rate.
   */
  constructor(
    id: number,
    user_id: number,
    from: string,
    to: string,
    rate: number,
    history?: Array<number>,
  ) {
    this.id = id;
    this.user_id = user_id;
    this.from = from;
    this.to = to;
    this.rate = rate;
    this.history = history;
  }
}
