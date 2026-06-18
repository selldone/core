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

import {Currency} from "../../enums/payment/Currency";
import type {Agency} from "./agency.model";

export interface AgencyWallet {
  /**
   * Primary key of the agency wallet record.
   *
   * Backend: `agency_wallet.id`.
   */
  id: number;

  /**
   * Parent agency ID.
   *
   * Backend: unique foreign key to `agency.id`; each agency has at most one
   * wallet.
   */
  agency_id: number;

  /**
   * Current agency wallet balance in `currency`.
   *
   * Backend increments this on agency charges and decrements it when Selldone
   * applies agency costs.
   */
  balance: number;

  /**
   * Wallet currency code.
   *
   * Backend enum source: `Currency::GetCurrenciesList()`. The currency is not
   * changeable after wallet creation.
   */
  currency: keyof typeof Currency;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at: AgencyWallet.Timestamp;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at: AgencyWallet.Timestamp;

  /**
   * Soft-delete timestamp.
   *
   * Present only when the backend query includes trashed wallets.
   */
  deleted_at?: AgencyWallet.Timestamp | null;

  /**
   * Loaded parent agency relation, when explicitly included by the API.
   */
  agency?: Agency;
}

export namespace AgencyWallet {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;
}
