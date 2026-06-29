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


  /**
   * Returns the shipping restriction option.
   * @param {Shop} shop - Shop configuration.
   * @returns {*} Shipping restriction configuration or `false` when unset.
   */
  static GetShippingRestriction(shop: Shop) {
    const shipping_option =
      shop.options &&
      shop.options.find((e) => e.code === "shipping_restriction");
    return shipping_option ? shipping_option.value : false;
  }

  /**
   * Returns whether AMP pages are enabled.
   * @param {Shop} shop - Shop configuration.
   * @returns {*} AMP option value or `false` when unset.
   */
  static GetAmp(shop: Shop) {
    const amp_option =
      shop.options && shop.options.find((e) => e.code === "amp");
    return amp_option ? amp_option.value : false;
  }

  /**
   * Returns boost-mode configuration for category/product pages.
   * @param {Shop} shop - Shop configuration.
   * @returns {{ product: any; category: any } | *} Boost configuration.
   */
  static GetBoost(shop: Shop) {
    const boost_option =
      shop.options && shop.options.find((e) => e.code === "boost");
    return boost_option
      ? boost_option.value
      : { product: null, category: null }; // Default: Smart mode
  }

  /**
   * Returns configured login methods.
   * @param {Shop} shop - Shop configuration.
   * @returns {*} Login-method configuration or `null`.
   */
  static GetLoginMethods(shop: Shop) {
    const login_option =
      shop.options && shop.options.find((e) => e.code === "login");
    return login_option ? login_option.value : null;
  }

  // █████████████████████████ Checkout █████████████████████████

  /**
   * Returns checkout configuration with sensible defaults.
   * @param {Shop} shop - Shop configuration.
   * @returns {{ map: boolean; mode: string } | *} Checkout configuration object.
   */
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
   * Returns the refund/withdrawal policy configured in shop options.
   *
   * This policy is used by storefront order pages to decide whether customers
   * can request an order withdrawal/refund and to display merchant-provided
   * refund-policy text.
   *
   * Default behavior keeps withdrawal disabled and uses the EU-standard
   * 14-day withdrawal window when no custom period is configured.
   *
   * @param {Shop} shop - Shop configuration.
   * @returns {{ enable: boolean; days: number; text: string | null }} Refund policy configuration.
   */
  static GetRefundPolicy(shop: Shop): {
    enable: boolean;
    days: number;
    text: string | null;
  } {
    const refund_policy_option =
      shop.options && shop.options.find((e) => e.code === "refund_policy");
    const refund_policy = refund_policy_option?.value;

    return {
      enable: !!refund_policy?.enable,
      days: Math.max(1, Number(refund_policy?.days || 14)),
      text:
        typeof refund_policy?.text === "string" && refund_policy.text.trim()
          ? refund_policy.text
          : null,
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

  /**
   * Determines whether guest payment is enabled without mandatory login.
   * @param {Shop} shop - Shop configuration.
   * @returns {boolean} True when fully login-free payment is allowed.
   */
  static HasGuestPayment(shop: Shop) {
    if (!shop) return false;
    const checkout_option = this.GetCheckout(shop);
    return checkout_option && ["login-free"].includes(checkout_option.mode);
  }

  /**
   * Determines whether the checkout map should be shown.
   * @param {Shop} shop - Shop configuration.
   * @returns {boolean} True when map UI is enabled.
   */
  static HasMap(shop: Shop) {
    if (!shop) return true;
    const checkout_option = this.GetCheckout(shop);
    return !checkout_option || checkout_option.map === true;
  }

  /**
   * Determines whether a shipping address must be collected for a product type.
   * @param {Shop} shop - Shop configuration.
   * @param {string} type - Product type code.
   * @returns {boolean | undefined} Effective shipping-address rule.
   */
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
  /**
   * Returns the configured shop-map feature settings.
   * @param {Shop} shop - Shop configuration.
   * @returns {{ enable: boolean } | *} Shop-map configuration.
   */
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
  /**
   * Returns custom labeling overrides for order/billing flows.
   * @param {Shop} shop - Shop configuration.
   * @returns {{ mode?: keyof typeof LabelingModes; SM?: string; SV?: string; SF?: string; SS?: string; SN?: string; POS?: string; AVO?: string; HYP?: string; BILL?: string; FUL?: string; VND?: string; }} Labeling configuration.
   */
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
    const labeling_option: undefined | Shop.IOption = shop.options?.find(
      (e) => e.code === "labeling",
    );
    return labeling_option?.value
      ? labeling_option.value
      : {
          mode: LabelingModes.default.code,
        };
  }
}
