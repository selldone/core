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

export interface GatewayQue {
  /** Unique identifier for the record. */
  id: number;

  /** A unique code associated with the transaction. */
  code: string;

  /** Shop identifier associated with the user's transaction. */
  shop_id: number;

  /** User identifier associated with the transaction. */
  user_id: number;

  /** The timestamp when the transaction was issued. */
  issued_at: Date;

  /** The timestamp indicating when the transaction will expire. */
  expire_at: Date;

  /** The ID of the associated gateway transaction. */
  transaction_id: number;

  /** Type of the gateway transaction. */
  transaction_type: string;

  /** The ID of the associated order. */
  order_id: number;

  /** The type of order. It can be 'Charge', 'BuyableModel', 'Avocado', 'Hyper' or any other specific string. */
  order_type: string;

  /** Associated user who is making the transaction. */
  user: User;
}
