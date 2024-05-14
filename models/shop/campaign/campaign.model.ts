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

export interface Campaign {
  id: number;
  shop_id: number;
  name: string;
  enable: boolean;
  start_at: string;
  end_at: string;
  auto: boolean; // Auto apply to shop
  banner: any[]; // You might want to define a more specific type for banner items
  discount_id: number;
  page_id: number;
  notification: any[]; // You might want to define a more specific type for notifications
  sessions: number; // Sessions count
  products: number;
  add_carts: number;
  buys: number;
  orders: number; // Approved buys and payment
  payment: any[]; // You might want to define a more specific type for payment items
  social: Record<string, number>; // Array of previous links (in social)
  desktop: number;
  mobile: number;
  tablet: number;
}

export namespace Campaign {

}