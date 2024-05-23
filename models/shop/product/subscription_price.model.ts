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

import {Currency} from "../../../enums/payment/Currency";

export interface SubscriptionPrice {
  id: number;
  shop_id: number;
  product_id: number;
  user_id: number;
  enable: boolean;
  title: string;
  description?: string | null;
  sku?: string | null;
  price: number;
  currency: keyof typeof Currency; // Assuming you might define a separate type for currency, you can use it here instead of string
  period: string; // Assuming you might define a separate type for BillingPeriod, you can use it here instead of string
  gateway_code: string;
  info?: Record<string, any> | null;
  meta?: Record<string, any> | null;
}
