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

import CrossSellActionType from "../../../enums/product/CrossSellActionType";

export interface CrossSelling {
  id: number;
  shopId: number;
  userId?: number; // Last editor
  productId: number; // Source Product
  targetId: number; // Target Product

  discount: number; // Discount percent

  message?: string | null; // Custom message to display to customer.
  action?: typeof CrossSellActionType | null; // Cross-sell action type

  createdAt: string;
  updatedAt: string;
}
