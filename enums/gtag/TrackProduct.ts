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

/**
 * 🫐 Analytics 🫐
 */
export class TrackProduct {
  static EVENT_CATEGORY_PRODUCT = "PRODUCT";

  static EVENT_ACTION_VIEW_PRODUCT = "VIEW_PRODUCT";

  static onViewProduct(product) {
    if (typeof gtag !== "function") {
      return;
    }

    gtag("event", this.EVENT_ACTION_VIEW_PRODUCT, {
      event_category: this.EVENT_CATEGORY_PRODUCT, // 📁 Category
      shop_id: product?.shop_id, // 🏪 Store
      type: product?.type,
    });
  }
}
