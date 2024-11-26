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

import {Currency} from "../../enums/payment/Currency";
import {DateConverter} from "../date/DateConverter";
import {Shop} from "../../models/shop/shop.model";
import {Product} from "../../models/shop/product/product.model";
import type {BasketItem} from "../../models/shop/order/basket/basket_item.model";
import type {SubscriptionPrice} from "../../models/shop/product/subscription_price.model";
import type {ProductVariant} from "../../models/shop/product/product_variant.model";
import type {Valuation} from "../../models/shop/accounting/valuation/valuation.model";
import type {ExtraPricing} from "../../models/shop/extra-pricing/extra-pricing.model";
import {StorefrontDebugEvents} from "../../enums/debug/StorefrontDebugEvents";

export class PriceHelper {
  static FixPrecision(val: number, floats: number) {
    const factor = Math.pow(10, floats);
    return Math.round(val * factor) / factor;
  }

  static FixPrecisionForCurrency(val: number, currency: keyof typeof Currency) {
    const currency_obj = Currency[currency];
    if (!currency_obj) return val;
    return this.FixPrecision(val, currency_obj.floats);
  }

  //――――――――――――――――――――――  Exchange Rates ――――――――――――――――――――

  static getExchangeRate(
    shop: Shop,
    from: keyof typeof Currency,
    to: keyof typeof Currency,
  ) {
    if (from === to) return { rate: 1 };
    if (!shop) return null;

    if(shop.currencies?.includes(from) === false || shop.currencies?.includes(to) === false) {
      console.info("Currency not found in the store!", from, to,'Available currencies:',shop.currencies);
      return null;
    }

    return shop.shop_exchange_rates?.find((element) => {
      return from === element.from && to === element.to;
    });
  }

  static getExchangeRateValue(
    shop: Shop,
    from: keyof typeof Currency,
    to: keyof typeof Currency,
    default_rate?: number | null,
  ) {
    let exchangeRate = this.getExchangeRate(shop, from, to);

    // Try reverse rate:
    if (!exchangeRate) {
      exchangeRate = this.getExchangeRate(shop, to, from);
      if (exchangeRate && exchangeRate.rate > 0) return 1 / exchangeRate.rate;
    }
    return exchangeRate ? exchangeRate.rate : default_rate;
  }

  // Used for convert product prices to rial.
  static getBuyRateValue(
    shop: Shop,
    from_currency: keyof typeof Currency,
    to_currency: keyof typeof Currency,
  ) {
    if (from_currency === to_currency) return 1;

    //  console.log("%c Exchange rate: "+from_currency+" --> "+to_currency, 'background: #eee; color: #333');

    let val = this.getExchangeRateValue(shop, from_currency, to_currency);

    if (!val) {
      const reverse_val = this.getExchangeRateValue(
        shop,
        to_currency,
        from_currency,
      );
      if (reverse_val) val = 1 / reverse_val;
    }

    if (!val) {
      console.log(
        "%c No conversion rate found in the store!: " +
          from_currency +
          " --> " +
          to_currency,
        "background: #C2185B; color: #fff;padding 4px 12px",
      );
      return '🚨';
    }
    return val;
  }

  //――――――――――――――――――――――  Price Calculator ――――――――――――――――――――

  static getBasketItemPrice(
    shop: Shop,
    item: BasketItem,
    to_currency: keyof typeof Currency,
  ) {
    const rate = this.getBuyRateValue(shop, item.currency, to_currency);
    if (!rate) {
      return "Error";
    }
    return item.price * rate;
  }

  static getBasketItemDiscount(
    shop: Shop,
    item: BasketItem,
    to_currency: keyof typeof Currency,
  ) {
    const rate = this.getBuyRateValue(shop, item.currency, to_currency);
    if (!rate) {
      return "Error";
    }
    return item.dis * rate;
  }

  static getBasketItemSumPriceDiscount(
    shop: Shop,
    item: BasketItem,
    to_currency: keyof typeof Currency,
  ) {
    const rate = this.getBuyRateValue(shop, item.currency, to_currency);
    if (!rate) {
      return "Error";
    }
    return (item.price + item.dis) * rate;
  }

  /**
   * Get product price (final price)
   * @param shop
   * @param product         Original product : in normal mode | Vendor product : in marketplace mode
   * @param variant
   * @param to_currency
   * @param preferences     Preferences by user (Used in valuation - custom pricing input)
   * @param valuation       Valuation (Pricing forms), Get independently because in marketplace mode we receive vendor product instead of original product.
   * @param subscription_price
   * @param current_extra_pricing
   * @returns number | null
   * @throws {Error}
   */

  static priceProductByCurrency(
    shop: Shop,
    product: Product & { valuation?: Valuation | null },
    variant: ProductVariant | null,
    to_currency: keyof typeof Currency,
    preferences?: BasketItem.IPreferences | null,
    valuation?: Valuation | null,
    subscription_price?: SubscriptionPrice | null, // 🎗️ Subscription
    current_extra_pricing?: ExtraPricing | null, // 🌸 Add extra pricing 🌸
  ): number {
    if (!product || !to_currency) return 0;

    // ▀▀▀▀▀▀▀▀▀ 🎗️ Subscription ▀▀▀▀▀▀▀▀▀
    if (subscription_price) {
      if (subscription_price.currency !== to_currency) {
        console.error(
          "The currency of the subscription price does not match the currency selected by the user!",
          subscription_price.currency,
          to_currency,
        );
        throw new Error(
          `The currency of the subscription price [${subscription_price.currency}] does not match the currency selected by the user [${to_currency}]!`,
        );
      }
      return subscription_price.price;
    }

    // Auto set valuation if not set (By fault):
    if (!valuation && product.valuation) {
      valuation = product.valuation;
      console.error(
        "Valuation exist in the product but not pass as a param in priceProductByCurrency! It can cause error in marketplace!",
      );
    }

    const floats = Currency[to_currency].floats;

    if (variant && variant.pricing) {
      // ━━━━━━━━━━━━ 1. Get exchange rate. ━━━━━━━━━━━━
      const rate = this.getBuyRateValue(shop, variant.currency, to_currency);
      if (!rate) {
        const _error_message = `Exchange rate ${variant.currency}/${to_currency} not found!`;
        // 🪠 Log error to storefront debugger view!
        StorefrontDebugEvents.LogWarning(
          `Exchange ${variant!.currency}/${to_currency}`,
          _error_message,
        );
        throw new Error(_error_message);
      }
      //console.log('------current_extra_pricing',current_extra_pricing)
      const clone_variant = Object.assign({}, variant);
      // ━━━━━━━━━━━━ 🌸 Apply extra pricing 🌸 ━━━━━━━━━━━━
      if (current_extra_pricing) {
        clone_variant.price = current_extra_pricing.price;
        clone_variant.commission = current_extra_pricing.commission;
        clone_variant.discount = current_extra_pricing.discount;
        clone_variant.dis_start = current_extra_pricing.dis_start;
        clone_variant.dis_end = current_extra_pricing.dis_end;
      }

      // ━━━━━━━━━━━━ 2. Calculate price if product. ━━━━━━━━━━━━
      let $out = clone_variant.price;
      if (clone_variant.commission) $out += clone_variant.commission;

      // ━━━━━━━━━━━━ 3. Convert to target currency ━━━━━━━━━━━━
      $out = $out * rate;

      // ━━━━━━━━━━━━ 4. Apply discount: ━━━━━━━━━━━━
      if (clone_variant.discount)
        $out -= this.getProductDiscountAmountByCurrency(
          shop,
          product,
          clone_variant,
          to_currency,
        );

      // ━━━━━━━━━━━━ 5. 🍁 Apply valuation (Pricing form) 🍁 ━━━━━━━━━━━━
      $out = this.ApplyValuation(valuation, preferences, $out);

      // ━━━━━━━━━━━━ 6. Round value: ━━━━━━━━━━━━
      return this.FixPrecision($out, floats);
    } else {
      // ━━━━━━━━━━━━ 1. Get exchange rate. ━━━━━━━━━━━━
      const rate = this.getBuyRateValue(shop, product.currency!, to_currency);
      if (!rate) {
        const _error_message = `Exchange rate ${product.currency}/${to_currency} not found!`;

        // 🪠 Log error to storefront debugger view!
        StorefrontDebugEvents.LogWarning(
          `Exchange ${product.currency}/${to_currency}`,
          _error_message,
        );

        throw new Error(_error_message);
      }

      const clone_product = Object.assign({}, product);
      // ━━━━━━━━━━━━ 🌸 Apply extra pricing 🌸 ━━━━━━━━━━━━
      if (current_extra_pricing) {
        clone_product.price = current_extra_pricing.price;
        clone_product.commission = current_extra_pricing.commission;
        clone_product.discount = current_extra_pricing.discount;
        clone_product.dis_start = current_extra_pricing.dis_start;
        clone_product.dis_end = current_extra_pricing.dis_end;
      }

      // ━━━━━━━━━━━━ 2. Calculate price if product. ━━━━━━━━━━━━

      let $out = clone_product.price!;
      if (clone_product.commission) $out += clone_product.commission;

      // ━━━━━━━━━━━━ 3. Convert to target currency ━━━━━━━━━━━━
      $out = $out * rate;
      //console.log('before discount --->','rate',rate,'$out',$out,this.FixPrecision($out, floats))

      // ━━━━━━━━━━━━ 4. Apply discount: ━━━━━━━━━━━━
      if (clone_product.discount) {
        const _discount = this.getProductDiscountAmountByCurrency(
          shop,
          clone_product,
          null,
          to_currency,
        );
        $out -= _discount;

        //console.log('after discount --->','discount',_discount,'$out',$out,this.FixPrecision($out, floats))
      }

      //console.log('$out',$out,preferences)

      // ━━━━━━━━━━━━ 5. 🍁 Apply valuation (Pricing form) 🍁 ━━━━━━━━━━━━
      $out = this.ApplyValuation(valuation, preferences, $out);

      // console.log('ApplyValuation',$out,preferences)
      // ━━━━━━━━━━━━ 6. Round value: ━━━━━━━━━━━━
      return this.FixPrecision($out, floats);
    }
  }

  /**
   * 🍁 Apply price auto calculation by custom pricing input 🍁
   *
   * @param valuation     Valuation (Pricing forms), Get independently because in marketplace mode we receive vendor product instead of original product.
   * @param preferences
   * @param base_price
   * @returns {*}
   * @constructor
   */
  static ApplyValuation(
    valuation: Valuation | null | undefined,
    preferences: BasketItem.IPreferences | null | undefined,
    base_price: number,
  ): number {
    //console.log("applyValuation > ...");

    const structure = valuation && valuation.structure;

    if (
      !structure ||
      !structure.some((i) => i.pricing) ||
      !preferences ||
      !preferences.valuation
    )
      return base_price;

    let out = base_price;

    //console.log("applyValuation > preferences", preferences);
    //console.log("applyValuation > structure", structure);

    // ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆ Apply select inputs ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆
    structure
      .filter((i) => i.pricing && i.type === "select")
      .forEach((row) => {
        const lookup = row.lookup;

        const users_selected_value = preferences.valuation![row.name];

        const lookup_val = lookup[users_selected_value];
        if (!lookup_val || isNaN(lookup_val)) return;

        if (row.sum) {
          // Sum
          out += lookup_val;
        } else {
          // Multiply
          out = out * lookup_val;
        }
      });

    // ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆ Apply number inputs ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆
    structure
      .filter((i) => i.pricing && i.type === "number")
      .forEach((row) => {
        const factor = row.factor;
        if (!factor) return;

        const users_selected_value = preferences.valuation![row.name];
        if (!users_selected_value || isNaN(users_selected_value)) return;

        out += factor * users_selected_value;
      });

    // ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆ Apply switch inputs ▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆▆
    structure
      .filter((i) => i.pricing && i.type === "switch")
      .forEach((row) => {
        const lookup = row.lookup;

        const users_selected_value = preferences.valuation![row.name];

        const lookup_val = lookup[users_selected_value ? "true" : "false"];
        if (!lookup_val || isNaN(lookup_val)) return;

        if (row.sum) {
          // Sum
          out += lookup_val;
        } else {
          // Multiply
          out = out * lookup_val;
        }
      });

    return out;
  }

  /**
   * Calculate discount (final & check date of discount)
   * @param shop
   * @param product
   * @param variant
   * @param to_currency
   * @returns {*}
   */

  static getProductDiscountAmountByCurrency(
    shop: Shop,
    product: Product,
    variant: ProductVariant | null,
    to_currency: keyof typeof Currency,
  ): number {
    if (!product) return 0;

    const floats = Currency[to_currency].floats;

    if (variant && variant.pricing) {
      if (
        DateConverter.inBetweenDates(
          new Date(),
          DateConverter.convertToLocalTime(variant.dis_start),
          DateConverter.convertToLocalTime(variant.dis_end),
        )
      ) {
        // 1. Get exchange rate.
        const rate = this.getBuyRateValue(shop, variant.currency, to_currency);
        if (!rate) {
          throw new Error(
            `Exchange rate ${variant.currency}/${to_currency} not found!`,
          );
        }

        let discount = variant.discount * rate;
        discount = this.FixPrecision(discount, floats);

        return discount;
      }
      return 0;
    }
    if (
      DateConverter.inBetweenDates(
        new Date(),
        DateConverter.convertToLocalTime(product.dis_start),
        DateConverter.convertToLocalTime(product.dis_end),
      )
    ) {
      // 1. Get exchange rate.
      const rate = this.getBuyRateValue(shop, product.currency!, to_currency);
      if (!rate) {
        throw new Error(
          `Exchange rate ${product.currency}/${to_currency} not found!`,
        );
      }

      const discount = product.discount! * rate;

      return this.FixPrecision(discount, floats);
    }
    return 0;
  }

  static discountProductPercent(
    shop: Shop,
    product: Product,
    variant: ProductVariant | null,
    to_currency?: keyof typeof Currency,
  ) {
    if (!to_currency) to_currency = product.currency;

    const price_final = this.priceProductByCurrency(
      shop,
      product,
      variant,
      to_currency,
    );
    const discount = this.getProductDiscountAmountByCurrency(
      shop,
      product,
      variant,
      to_currency,
    );

    try {
      const percent = (100 * discount) / (price_final + discount);
      if (percent > 1) return Math.round(percent);
      else return this.FixPrecision(percent, 1);
    } catch (e) {
      //
    }
    return 0;
  }

  static HasDiscountCountDownMode(
    product: Product,
    variant: ProductVariant | null = null,
  ) {
    if (!product) return false;

    if (variant && variant.pricing) {
      if (/*!variant.dis_start &&*/ !variant.dis_end) return false;
      return DateConverter.inBetweenDates(
        new Date(),
        DateConverter.convertToLocalTime(variant.dis_start),
        DateConverter.convertToLocalTime(variant.dis_end),
      );
    }

    if (/*!product.dis_start &&*/ !product.dis_end) return false;
    return DateConverter.inBetweenDates(
      new Date(),
      DateConverter.convertToLocalTime(product.dis_start),
      DateConverter.convertToLocalTime(product.dis_end),
    );
  }

  static GetEndOfDiscountDate(
    product: Product,
    variant: ProductVariant | null = null,
  ) {
    if (!product) return null;

    if (variant && variant.pricing) {
      if (!variant.dis_end) return null;
      return DateConverter.convertToLocalTime(variant.dis_end);
    }

    if (!product.dis_end) return null;
    return DateConverter.convertToLocalTime(product.dis_end);
  }
}
