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

import { PriceHelper } from "../price/PriceHelper";
import { Currency } from "../../enums/payment/Currency";
import {Shop} from "../../models/shop/shop.model";
import {Transportation} from "../../models/shop/transportation/transportation.model";

/**
 * Shipping/logistics helper utilities for basket dimension, distance, and delivery-cost calculations.
 */
export class LogisticHelper {
  //―――――――――――――――――――――― Logistic > Basket Helpers ――――――――――――――――――――

  /**
   * Calculates the total basket weight.
   *
   * Variant weight overrides product weight when available.
   *
   * @param {*} basket - Basket payload containing `items`.
   * @returns {number} Total basket weight, or `-1` when basket is missing.
   */
  static calculateWeightBasket(basket) {
    console.log("----->" + basket);
    if (!basket) return -1;

    let out = 0;
    basket.items.forEach(item => {
     const weight =
        item.count *
        (item.variant && item.variant.extra && item.variant.extra.weight > 0
          ? item.variant.extra.weight
          : item.product.extra
          ? item.product.extra.weight
          : 0);

      out+=(weight?weight:0);
    });
    return out;
  }

  /**
   * Calculates the maximum occupied basket dimensions.
   *
   * This helper uses the maximum width/length/height found among items rather than a real
   * packaging algorithm.
   *
   * @param {*} basket - Basket payload containing `items`.
   * @returns {{ width: number; length: number; height: number }} Volume descriptor or `-1` values when basket is missing.
   */
  static calculateVolumeBasket(basket) {
    let out = { width: -1, length: -1, height: -1 };
    if (!basket) return out;
    basket.items.forEach(item => {
      if (item.variant && item.variant.extra && item.variant.extra.width > 0) {
        out.width = Math.max(out.width,item.variant.extra.width);
        out.length = Math.max(out.length,item.variant.extra.length);
        out.height = Math.max(out.height,item.variant.extra.height);
      } else if (item.product.extra) {
        out.width = Math.max(out.width,item.product.extra.width);
        out.length = Math.max(out.length,item.product.extra.length);
        out.height = Math.max(out.height,item.product.extra.height);
      }

      out.width=out.width?out.width:0;
      out.length=out.length?out.length:0;
      out.height=out.height?out.height:0;

    });
    return out;
  }

  /**
   * Calculates the geodesic distance between basket origin and target.
   *
   * @param {*} origin - Origin location with `lat` and `lng`.
   * @param {*} target - Destination location with `lat` and `lng`.
   * @returns {number} Distance in kilometers, or `-1` when either point is missing.
   */
  static calculateDistanceBasket(origin, target) {
    if (!target || !origin) return -1;

    let out = this.GPSCalculateDistance(
      origin.lat,
      origin.lng,
      target.lat,
      target.lng
    );

    console.log('calculateDistanceBasket',out ,'km')
    return out;
  }

  /**
   * Calculates great-circle distance between two geo points using the Haversine formula.
   *
   * @param {number} lat1 - Origin latitude.
   * @param {number} lon1 - Origin longitude.
   * @param {number} lat2 - Destination latitude.
   * @param {number} lon2 - Destination longitude.
   * @returns {number} Distance in kilometers.
   */
  static GPSCalculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  }

  /**
   * Calculates shipping cost for a transportation rule.
   *
   * The result honors free-shipping thresholds, currency conversion, and target-currency
   * rounding factors.
   *
   * @param {Shop} shop - Shop containing exchange rates.
   * @param {keyof typeof Currency} to_currency - Currency in which shipping should be returned.
   * @param {number} distance - Delivery distance in kilometers.
   * @param {number} weight - Basket weight.
   * @param {number} basket_total_price - Basket total in target currency.
   * @param {Transportation} transportation - Transportation pricing rule.
   * @returns {number | string} Final shipping amount, `-1` for invalid inputs, or localized error string on rate issues.
   */
  static calculateShipping(
    shop:Shop,
    to_currency:keyof typeof Currency,
    distance:number,
    weight:number,
    basket_total_price:number,
    transportation:Transportation
  ) {
    if (
      distance < 0 ||
      weight < 0 ||
      basket_total_price <= 0 ||
      !transportation
    )
      return -1;

    if (transportation.sod) return -1;

    const to_currency_object = Currency[to_currency];
    if (!to_currency_object) return "خطا";

    const rate = PriceHelper.getBuyRateValue(
      shop,
      transportation.currency,
      to_currency
    );
    if (!rate) {
      return "خطا";
    }

    console.log(
      "%cdelivery basket_total_price: " +
        basket_total_price +
        " " +
        transportation.currency,
      "background: #0097A7; color: #fff"
    );
    console.log(
      "%cdelivery free_shipping_limit: " +
        transportation.free_shipping_limit * rate +
        " " +
        to_currency,
      "background:#1976D2;color:#fff"
    );

    if (
      transportation.free_shipping &&
      basket_total_price >= transportation.free_shipping_limit * rate
    )
      return 0;

    if (weight < 1) weight = 1;
    if (distance < 1) distance = 1;

    let out =
      transportation.const * rate +
      distance * transportation.distance_cof * rate +
      weight * transportation.weight_cof * rate +
      basket_total_price * transportation.price_cof +
      distance * weight * transportation.distance_weight_cof * rate;

    console.debug(
      "%cdelivery price: " + out + " " + transportation.currency,
      "background:#303F9F;color:#fff"
    );

    const floats = to_currency_object.floats;
    const round_factor = to_currency_object.round_factor;

    let magic_rounded = Math.round(out / round_factor) * round_factor;

    return PriceHelper.FixPrecision(magic_rounded, floats);
  }
}
