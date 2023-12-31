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

export interface IOrder {
  id: number;
  shop_id: number;
  label: string | null; // Custom order ID set by seller configuration.
  type:
    | "AVO"
    | "FUL"
    | "POS"
    | "HYP"
    | "BILL"
    | "PHYSICAL"
    | "VIRTUAL"
    | "FILE"
    | "SERVICE"
    | "SUBSCRIPTION";

  vendor_id?: number; // Only in the vendor order! We use this to detect it's a vendor order. The type will be PHYSICAL,VIRTUAL,... same as main basket type.
  basket_id?: number; // Only in the vendor order!
}
