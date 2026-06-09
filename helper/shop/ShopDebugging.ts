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
 * ████████████████ 🩺 Shop Debugging ████████████████
 */
import type { Shop } from "../../models/shop/shop.model";

/**
 * Aggregates lightweight shop diagnostics intended for developer or setup tooling.
 */
export class ShopDebugging {
  /**
   * Runs all registered shop-debug checks.
   *
   * @param {Shop} shop - Shop model to inspect.
   * @returns {string[]} Non-empty diagnostic messages.
   */
  static CheckAll(shop: Shop) {
    return [...ShopDebuggingTheme.CheckAll(shop)].filter((i) => !!i);
  }
}

/**
 * ████████████████ 🩺 Debug Theme ████████████████
 */
export class ShopDebuggingTheme {
  /**
   * Runs all theme-related diagnostics.
   *
   * @param {Shop} shop - Shop model to inspect.
   * @returns {(string | null)[]} Theme diagnostic messages.
   */
  static CheckAll(shop: Shop) {
    return [
      this.MissedThemeColors(shop),
      this.MissedThemeListView(shop),
    ].filter((i) => !!i);
  }

  /**
   * Checks whether required light-theme color flags are configured.
   * @param {Shop} shop - Shop model to inspect.
   * @returns {string | null} Diagnostic message or null.
   */
  static MissedThemeColors(shop: Shop) {
    return isUnset(shop.theme?.light_header) ||
      isUnset(shop.theme?.light_footer) ||
      isUnset(shop.theme?.light_checkout)
      ? "Set theme colors."
      : null;
  }

  /**
   * Checks whether list-view preferences are configured for all device sizes.
   * @param {Shop} shop - Shop model to inspect.
   * @returns {string | null} Diagnostic message or null.
   */
  static MissedThemeListView(shop: Shop) {
    return isUnset(shop.theme?.mobile) ||
      isUnset(shop.theme?.tablet) ||
      isUnset(shop.theme?.pc)
      ? "Set shopping list view."
      : null;
  }

  /**
   * Checks whether product-list animation mode is configured.
   * @param {Shop} shop - Shop model to inspect.
   * @returns {string | null} Diagnostic message or null.
   */
  static MissedThemeAnimation(shop: Shop) {
    return isUnset(shop.theme?.static)
      ? "Set products listing animation mode."
      : null;
  }

  /**
   * Checks whether hover actions are configured.
   * @param {Shop} shop - Shop model to inspect.
   * @returns {string | null} Diagnostic message or null.
   */
  static MissedThemeHoverActions(shop: Shop) {
    return isUnset(shop.theme?.hover_actions)
      ? "Set quick buy action on/off mode."
      : null;
  }
}

/**
 * Returns whether a value is either null or undefined.
 *
 * @param {any} obj - Value to inspect.
 * @returns {boolean} True when the value has not been set.
 */
function isUnset(obj: any) {
  return obj === null || obj === undefined;
}
