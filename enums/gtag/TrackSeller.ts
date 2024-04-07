// @ts-nocheck
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
export class TrackSeller {
  static EVENT_CATEGORY_SELLER = "SELLER";

  static EVENT_ACTION_ADD_SHOP = "SD Add Shop";
  static EVENT_ACTION_ADD_PRODUCT = "SD Add Product";
  static EVENT_ACTION_ADD_SHOP_GATEWAY = "SD Add Shop Gateway";

  static onAddShop(shop) {
    if (typeof gtag !== "function") {
      return;
    }

    gtag("event", this.EVENT_ACTION_ADD_SHOP, {
      event_category: this.EVENT_CATEGORY_SELLER, // 📁 Category
      event_label: "Create Shop", // 🏷️ Label
      value: 1, // 🔢 Value (should be a number)
      // Extra custom parameters:
      shop_id: shop?.id, // 🏪 Store
      currency: shop?.currency, // 🏪 Store
    });
  }

  static onAddProduct(product) {
    if (typeof gtag !== "function") {
      return;
    }

    gtag("event", this.EVENT_ACTION_ADD_PRODUCT, {
      event_category: this.EVENT_CATEGORY_SELLER, // 📁 Category
      event_label: "Add Product", // 🏷️ Label
      value: 1, // 🔢 Value (should be a number)
      // Extra custom parameters:
      shop_id: product?.shop_id, // 🏪 Store
      type: product?.type,
    });
  }

  // Event for adding shop payment
  static onAddGateway(gateway, shop_gateway) {
    if (typeof gtag !== "function") {
      return;
    }

    gtag("event", this.EVENT_ACTION_ADD_SHOP_GATEWAY, {
      event_category: this.EVENT_CATEGORY_SELLER, // 📁 Category
      event_label: "Add Shop Gateway", // 🏷️ Label
      value: 1, // 🔢 Value (should be a number)
      // Extra custom parameters:
      shop_id: shop_gateway?.shop_id, // 🏪 Store
      currency: gateway?.currency,
      cod: gateway?.cod,
      code: gateway?.code,
      name: gateway?.name,
      livemode: shop_gateway?.livemode,
    });
  }
}
