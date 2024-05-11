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

export class BasketHelper {
  // ――――――――――――――― Weight ―――――――――――――――

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

  static GetTotalBasketItemsWeight(basket: Basket) {
    let sum = 0;
    basket.items.forEach((item) => {
      sum += this.GetBasketItemWeight(item);
    });
    return sum;
  }

  // ――――――――――――――― Size ―――――――――――――――
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

  static FindItem(
    basket: Basket,
    product: Product,
    currentVariant: ProductVariant
  ) {
    return basket?.items?.find((item) => {
      return (
        item.product_id === product.id &&
        (currentVariant ? item.variant_id === currentVariant.id : true)
      );
    });
  }

  /**
   * It needs pricing by the seller after checkout.
   * @param basket
   * @constructor
   */
  static IsServiceAndNeedPricing(basket: Basket) {
    return (
      basket?.type === ProductType.SERVICE.code &&
      basket.items?.some(
        (item) => item.product?.pricing !== PricingTypes.FIX.code
      )
    );
  }
}
