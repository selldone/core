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

export interface Transportation {
  id: number;
  shop_id: number;
  type: string;
  enable: boolean;
  distance: number;
  max_weight: number;
  max_w: number;
  max_l: number;
  max_h: number;
  eta: string;
  etd: number;
  days: string[];
  time_spans: string[];
  holidays: boolean;
  currency: string;
  const: number;
  distance_cof: number;
  weight_cof: number;
  price_cof: number;
  distance_weight_cof: number;
  free_shipping: boolean;
  free_shipping_limit: number;
  cod: boolean;
  sod: boolean;
  pickups: any | null;
  title: string;
  logo: string;
}
