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

import type { BasketItem } from "../../models/shop/order/basket/basket_item.model";
import type { Basket } from "../../models/shop/order/basket/basket.model";
import { Product } from "../../models/shop/product/product.model";
import { ProductVariant } from "../../models/shop/product/product_variant.model";
import { PricingTypes } from "../../enums/product/PricingTypes";
import { ProductType } from "../../enums/product/ProductType";

/**
 * Helper utilities for basket calculations and item lookups.
 */
export class BasketHelper {
  // ――――――――――――――― Weight ―――――――――――――――

  /**
   * Calculates the weight of a basket item.
   *
   * Variant weight overrides product weight when available.
   *
   * @param {BasketItem} item - Basket item.
   * @param {boolean} [total=true] - When true, multiplies weight by item count.
   * @returns {number} Item weight.
   */
  static GetBasketItemWeight(item: BasketItem, total: boolean = true) {
    return (
      (total ? item.count : 1) *
      (item.variant
        ? item.variant.extra && item.variant.extra.weight
          ? item.variant.extra.weight
          : 0
        : item.product?.extra && item.product.extra.weight
          ? item.product.extra.weight
          : 0)
    );
  }

  /**
   * Calculates the total basket weight.
   *
   * @param {Basket} basket - Basket model.
   * @returns {number} Sum of all item weights.
   */
  static GetTotalBasketItemsWeight(basket: Basket) {
    let sum = 0;
    basket.items.forEach((item) => {
      sum += this.GetBasketItemWeight(item);
    });
    return sum;
  }

  // ――――――――――――――― Size ―――――――――――――――

  /**
   * Returns the size tuple of a basket item.
   *
   * Width and length come from the selected variant when present; otherwise product
   * extra data is used. Height is multiplied by count when `total` is true.
   *
   * @param {BasketItem} item - Basket item.
   * @param {boolean} [total=true] - Whether height should reflect total item count.
   * @returns {[number, number, number]} Tuple of `[width, length, height]`.
   */
  static GetBasketItemSize(item: BasketItem, total: boolean = true) {
    let width = 0;
    let length = 0;
    let height = 0;
    if (item.variant && item.variant.extra && item.variant.extra.width) {
      width = item.variant.extra.width;
    } else if (item.product && item.product.extra && item.product.extra.width) {
      width = item.product.extra.width;
    }

    if (item.variant && item.variant.extra && item.variant.extra.length) {
      length = item.variant.extra.length;
    } else if (
      item.product &&
      item.product.extra &&
      item.product.extra.length
    ) {
      length = item.product.extra.length;
    }

    if (item.variant && item.variant.extra && item.variant.extra.height) {
      height = item.variant.extra.height;
    } else if (
      item.product &&
      item.product.extra &&
      item.product.extra.height
    ) {
      height = item.product.extra.height;
    }

    return [width, length, height * (total ? item.count : 1)];
  }

  // ――――――――――――――― Find Item ―――――――――――――――

  /**
   * Finds an existing basket item for a product and optional variant.
   *
   * @param {Basket} basket - Basket model.
   * @param {Product} product - Product to match.
   * @param {ProductVariant} currentVariant - Variant to match when applicable.
   * @returns {BasketItem | undefined} Matching item if found.
   */
  static FindItem(
    basket: Basket,
    product: Product,
    currentVariant: ProductVariant,
  ) {
    return basket?.items?.find((item) => {
      return (
        item.product_id === product.id &&
        (currentVariant ? item.variant_id === currentVariant.id : true)
      );
    });
  }

  /**
   * Checks whether a basket contains a service that still needs seller-side pricing.
   *
   * @param {Basket} basket - Basket model.
   * @returns {boolean} True when the basket is a service basket with non-fixed pricing.
   */
  static IsServiceAndNeedPricing(basket: Basket) {
    return (
      basket?.type === ProductType.SERVICE.code &&
      basket.items?.some(
        (item) => item.product?.pricing !== PricingTypes.FIX.code,
      )
    );
  }
}
