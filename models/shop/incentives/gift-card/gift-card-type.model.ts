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

export interface GiftCardType {
  id: number;
  shop_id: number;
  color: string;
  bg: string;
  amount: number;
  currency: string;
  title: string;
  life: number; // Initial lifetime by month
  count: number;
  used: number;
  amount_payed: number; // Total paid by these cards
  note: Array<{
    user_id: number;
    user_name: string;
    body: string;
    date: string;
  }>; // Team notes
}
