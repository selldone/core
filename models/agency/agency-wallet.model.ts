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

export interface AgencyWallet {
  /**
   * Unique identifier for the wallet entry.
   */
  id: number;

  /**
   * ID of the associated agency.
   */
  agency_id: number;

  /**
   * Current balance of the wallet.
   */
  balance: number;

  /**
   * Currency type used in the wallet. This is not changeable after creation.
   */
  currency: keyof typeof Currency;

  /**
   * The date and time when the record was last updated.
   */
  updated_at: Date;

  /**
   * The date and time when the record was created.
   */
  created_at: Date;
}

export namespace AgencyWallet {}
