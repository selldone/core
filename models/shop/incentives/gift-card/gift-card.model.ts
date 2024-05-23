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

export interface GiftCard {
  id: number;
  type_id: number;
  shop_id: number;
  vitem_id: number | null;

  user_id: number; // Owner (Use this card)
  customer_id: number;
  number: string;
  cvv: string;
  balance: number;
  lock: number;
  payed: number;
  currency: string;
  title: string;
  expire_at: string; // Using Date to represent Carbon type
  enable: boolean; // Enable card
  note: string; // Note by admin (Show to user!)

  created_at: string; // Using Date to represent Carbon type
  updated_at: string; // Using Date to represent Carbon type
  deleted_at: string; // Using Date to represent Carbon type
}
