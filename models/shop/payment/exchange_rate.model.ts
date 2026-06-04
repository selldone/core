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
 * Shop-specific currency exchange rate.
 *
 * Backend source: `App\Shop\Exchanges\ShopExchangeRate`, table `shop_exchange_rates`.
 * The global table `exchange_rates` has the same `from` / `to` / `rate` / `history` structure without `shop_id` and
 * `auto`; this core model is used for shop exchange-rate API payloads.
 */
export class ExchangeRate {
  /** Exchange-rate row id. Source: `shop_exchange_rates.id`. */
  id: number;

  /** Owning shop id. Source: `shop_exchange_rates.shop_id`; absent on global `exchange_rates`. */
  shop_id?: number;

  /** Last editor user id. Source: `shop_exchange_rates.user_id` / `exchange_rates.user_id`. */
  user_id: number;

  /** Source currency code. Source: `from` enum column. */
  from: string;

  /** Target currency code. Source: `to` enum column. */
  to: string;

  /** Conversion rate from `from` to `to`. Source: `rate` double column. */
  rate: number;

  /** Whether shop should use Selldone/system exchange rate. Source: `shop_exchange_rates.auto`. */
  auto?: boolean;

  /** Historical exchange values, or `null`. Source: nullable JSON `history`. */
  history?: number[] | null;

  /** Creation timestamp. Source: `created_at`. */
  created_at?: string;

  /** Last update timestamp. Source: `updated_at`. */
  updated_at?: string;

  constructor(
    id: number,
    user_id: number,
    from: string,
    to: string,
    rate: number,
    history?: number[] | null,
  ) {
    this.id = id;
    this.user_id = user_id;
    this.from = from;
    this.to = to;
    this.rate = rate;
    this.history = history;
  }
}
