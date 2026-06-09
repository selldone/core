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

/**
 * Resolves effective ribbon options by combining shop defaults and product overrides.
 */
export class RibbonHelper {
  /**
   * Determines whether a product requires a shipping address.
   *
   * Subscription modes may explicitly disable shipping support regardless of shop settings.
   * Product-level ribbon flags override shop defaults.
   *
   * @param {Shop} shop - Shop containing default ribbon settings.
   * @param {Product} product - Product containing optional ribbon overrides.
   * @returns {boolean | undefined} Effective shipping-address requirement.
   */
  static hasShipping(shop: Shop, product: Product) {
    const shop_ribbon = shop.ribbon;
    const product_ribbon = product.ribbon;

    const mode = product_ribbon?.mode && SubscriptionMode[product_ribbon.mode];

    if (!mode?.support_shipping) {
      return false;
    }

    if (typeof product_ribbon?.shipping === "boolean") {
      return product_ribbon.shipping;
    }
    return shop_ribbon?.shipping;
  }

  /**
   * Determines whether a product requires a billing address.
   *
   * @param {Shop} shop - Shop containing default ribbon settings.
   * @param {Product} product - Product containing optional ribbon overrides.
   * @returns {boolean | undefined} Effective billing-address requirement.
   */
  static hasBilling(shop: Shop, product: Product) {
    const shop_ribbon = shop.ribbon;
    const product_ribbon = product.ribbon;

    if (typeof product_ribbon?.billing === "boolean") {
      return product_ribbon.billing;
    }
    return shop_ribbon?.billing;
  }

  /**
   * Determines whether quantity selection is allowed for a product.
   *
   * Subscription modes may disable count support regardless of ribbon defaults.
   *
   * @param {Shop} shop - Shop containing default ribbon settings.
   * @param {Product} product - Product containing optional ribbon overrides.
   * @returns {boolean | undefined} Effective quantity-selection rule.
   */
  static hasCount(shop: Shop, product: Product) {
    const shop_ribbon = shop.ribbon;
    const product_ribbon = product.ribbon;

    const mode = product_ribbon?.mode && SubscriptionMode[product_ribbon.mode];

    if (!mode?.support_count) {
      return false;
    }

    if (typeof product_ribbon?.count === "boolean") {
      return product_ribbon.count;
    }
    return shop_ribbon?.count;
  }

  /**
   * Checks whether a membership product is already subscribed by the customer.
   *
   * @param {Product & { subscribed: boolean }} product - Membership-capable product enriched with customer state.
   * @returns {boolean} True when the product is a membership ribbon and user is subscribed.
   */
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
