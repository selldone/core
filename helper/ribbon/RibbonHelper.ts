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

import { SubscriptionMode } from "../../enums/subscription/SubscriptionMode";
import type { Shop } from "../../models/shop/shop.model";
import type { Product } from "../../models/shop/product/product.model";

export class RibbonHelper {
  /**
   * Product needs shipping address.
   *
   * @param shop
   * @param product
   * @returns {boolean|*}
   */
  static hasShipping(shop: Shop, product: Product) {
    const shop_ribbon = shop.ribbon;
    const product_ribbon = product.ribbon;

    const mode = product_ribbon?.mode && SubscriptionMode[product_ribbon.mode];

    // ═════════════ Check exception modes ═════════════
    if (!mode?.support_shipping) {
      return false;
    }

    // ══════════ Check Override by product ══════════
    if (typeof product_ribbon?.shipping === "boolean") {
      return product_ribbon.shipping;
    }
    // ═══════════════════ Default ═══════════════════
    return shop_ribbon?.shipping;
  }

  /**
   * Product needs billing address.
   * @param shop
   * @param product
   * @returns {boolean|*}
   */
  static hasBilling(shop: Shop, product: Product) {
    const shop_ribbon = shop.ribbon;
    const product_ribbon = product.ribbon;

    // ══════════ Check Override by product ══════════
    if (typeof product_ribbon?.billing === "boolean") {
      return product_ribbon.billing;
    }
    // ═══════════════════ Default ═══════════════════
    return shop_ribbon?.billing;
  }

  /**
   * User can purchase more than one item.
   *
   * @param shop
   * @param product
   * @returns {boolean|*}
   */
  static hasCount(shop: Shop, product: Product) {
    const shop_ribbon = shop.ribbon;
    const product_ribbon = product.ribbon;

    const mode = product_ribbon?.mode && SubscriptionMode[product_ribbon.mode];

    // ═════════════ Check exception modes ═════════════
    if (!mode?.support_count) {
      return false;
    }

    // ══════════ Check Override by product ══════════
    if (typeof product_ribbon?.count === "boolean") {
      return product_ribbon.count;
    }
    // ═══════════════════ Default ═══════════════════
    return shop_ribbon?.count;
  }

  static isMembershipSubscribed(
    product: Product & { subscribed: boolean /*True if customer subscribed*/ }
  ) {
    const product_ribbon = product.ribbon;

    return (
      product_ribbon?.mode === SubscriptionMode.Membership.code &&
      product.subscribed
    );
  }
}
