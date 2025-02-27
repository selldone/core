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

import {ProductType} from "../../enums/product/ProductType";
import type {Shop} from "../../models/shop/shop.model";
import {LabelingModes} from "../../enums/shop/options/LabelingOptions";

/**
 * Helper class for retrieving various shop-related configuration options.
 */
export class ShopOptionsHelper {
  /**
   * Returns the size unit configured for the shop.
   * @param shop The shop object containing configuration options.
   * @returns Size unit (e.g. "cm").
   */
  static GetSizeUnit(shop: Shop): string {
    const size_unit_option = shop.options?.find((e) => e.code === "size_unit");
    return size_unit_option ? size_unit_option.value : "cm";
  }

  /**
   * Returns the mass unit configured for the shop.
   * @param shop The shop object containing configuration options.
   * @returns Mass unit (e.g. "kg").
   */
  static GetMassUnit(shop: Shop): string {
    const mass_unit_option = shop.options?.find((e) => e.code === "mass_unit");
    return mass_unit_option ? mass_unit_option.value : "kg";
  }

  static GetDistanceUnit(shop: Shop): string {
    const distance_unit_option = shop.options?.find((e) => e.code === "distance_unit");
    return distance_unit_option ? distance_unit_option.value : "km";
  }


  static GetShippingRestriction(shop: Shop) {
    const shipping_option =
      shop.options &&
      shop.options.find((e) => e.code === "shipping_restriction");
    return shipping_option ? shipping_option.value : false;
  }

  static GetAmp(shop: Shop) {
    const amp_option =
      shop.options && shop.options.find((e) => e.code === "amp");
    return amp_option ? amp_option.value : false;
  }

  static GetBoost(shop: Shop) {
    const boost_option =
      shop.options && shop.options.find((e) => e.code === "boost");
    return boost_option
      ? boost_option.value
      : { product: null, category: null }; // Default: Smart mode
  }

  static GetLoginMethods(shop: Shop) {
    const login_option =
      shop.options && shop.options.find((e) => e.code === "login");
    return login_option ? login_option.value : null;
  }

  // █████████████████████████ Checkout █████████████████████████

  static GetCheckout(shop: Shop) {
    const checkout_option =
      shop.options && shop.options.find((e) => e.code === "checkout");
    return checkout_option
      ? checkout_option.value
      : {
          map: true,
          mode: "default" /* mode: default , on-checkout , login-free*/,
        };
  }

  /**
   * Determines if guest checkout is enabled.
   * @param shop The shop object containing configuration options.
   * @returns Boolean indicating if guest checkout is enabled.
   */
  static HasGuestCheckout(shop: Shop): boolean {
    if (!shop) return false;
    const checkout_option = this.GetCheckout(shop);
    return (
      checkout_option &&
      ["on-checkout", "login-free"].includes(checkout_option.mode)
    );
  }

  static HasGuestPayment(shop: Shop) {
    if (!shop) return false;
    const checkout_option = this.GetCheckout(shop);
    return checkout_option && ["login-free"].includes(checkout_option.mode);
  }

  static HasMap(shop: Shop) {
    if (!shop) return true;
    const checkout_option = this.GetCheckout(shop);
    return !checkout_option || checkout_option.map === true;
  }

  static AskShippingAddress(shop: Shop, type: string) {
    // 🎗️ Subscription:
    if (type === ProductType.SUBSCRIPTION.code) {
      return shop.ribbon?.shipping;
    }

    if (![ProductType.PHYSICAL.code, ProductType.SERVICE.code].includes(type)) {
      return false;
    }

    const checkout_option = this.GetCheckout(shop);
    if (!checkout_option || !checkout_option.shipping) return true;

    if (type === ProductType.PHYSICAL.code)
      return ["default", "physical"].includes(checkout_option.shipping);
    else if (type === ProductType.SERVICE.code)
      return ["default"].includes(checkout_option.shipping);
  }

  // █████████████████████████ Active Product Types █████████████████████████

  /**
   * Returns the active product types for the shop.
   * @param shop The shop object containing configuration options.
   * @returns Array of active product types.
   */
  static GetActiveTypes(shop: Shop): string[] {
    const types = shop.options?.find((e) => e.code === "types");
    return types
      ? types.value
      : [
          ProductType.PHYSICAL.code,
          ProductType.VIRTUAL.code,
          ProductType.FILE.code,
          ProductType.SERVICE.code,
          "POS",
          "AVOCADO",
          "HYPER",
          ProductType.SUBSCRIPTION.code,
        ];
  }

  // █████████████████████████ Languages █████████████████████████

  /**
   * Returns the languages configured for the shop.
   * @param shop The shop object containing configuration options.
   * @returns Array of configured languages.
   */
  static GetLanguages(shop: Shop): string[] {
    const languages_option = shop.options?.find((e) => e.code === "languages");
    let languages =
        languages_option?.value && Array.isArray(languages_option.value)
        ? languages_option.value
        : [];
    languages = [...languages]; // Cloning
    if (languages.includes(shop.language)) languages.unshift(shop.language);
    return Array.from(new Set(languages)); // Ensuring uniqueness
  }

  // █████████████████████████ Shop Map View █████████████████████████
  static GetShopMap(shop: Shop) {
    const checkout_option =
      shop.options && shop.options.find((e) => e.code === "shop_map");
    return checkout_option ? checkout_option.value : { enable: false };
  }

  /**
   * Checks if the shop map feature is enabled.
   * @param shop The shop object containing configuration options.
   * @returns Boolean indicating if the shop map feature is enabled.
   */
  static IsEnableShopMap(shop: Shop): boolean {
    if (!shop) return false;
    const shop_map_option = this.GetShopMap(shop);
    return shop_map_option.enable;
  }

  // █████████████████████████ Custom Variants █████████████████████████

  /**
   * Returns any custom variants configured for the shop.
   * @param shop The shop object containing configuration options.
   * @returns Object containing custom variants.
   */
  static GetCustomVariants(shop: Shop): object {
    const variants = shop.options?.find((e) => e.code === "variants");
    return variants?.value && !Array.isArray(variants.value)
      ? variants.value
      : {};
  }

  // █████████████████████████ Custom Orders Labeling █████████████████████████
  static GetLabeling(shop: Shop): {
    mode?: keyof typeof LabelingModes;
    SM?: string;
    SV?: string;
    SF?: string;
    SS?: string;
    SN?: string;
    POS?: string;
    AVO?: string;
    HYP?: string;
    BILL?: string;
    FUL?: string;
    VND?: string;
  } {
    const labeling_option: undefined | Shop.IOption =
      shop.options && shop.options.find((e) => e.code === "labeling");
    return labeling_option?.value
      ? labeling_option.value
      : {
          mode: LabelingModes.default.code,
        };
  }
}
