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

/**
 * Centralized localStorage keys and history helpers for storefront flows.
 */
export class StorefrontLocalStorages {
  /** Returns the localStorage key used for the selected storefront currency. */
  static GetUserCurrencyPath($localstorage_base_path: string): string {
    return `${$localstorage_base_path}user-currency`;
  }

  /** Returns the localStorage key for persisted grid/list view mode per device. */
  static GetUserShopViewModePath(
    $localstorage_base_path: string,
    device: string,
  ): string {
    return `${$localstorage_base_path}view-mode-${device}`;
  }

  /** Returns the localStorage key used to store search history. */
  static GetUserShopSearchHistory($localstorage_base_path: string): string {
    return `${$localstorage_base_path}search-history`;
  }

  /** Returns the localStorage key controlling coupon visibility state. */
  static GetShopCouponsViewMode($localstorage_base_path: string): string {
    return `${$localstorage_base_path}coupons-show`;
  }

  /** Returns the localStorage key for saved coupon codes. */
  static GetShopCouponsCodes($localstorage_base_path: string): string {
    return `${$localstorage_base_path}coupon-codes`;
  }

  /** Returns the localStorage key that tracks viewed campaign notifications. */
  static GetShopNotificationViewed($localstorage_base_path: string): string {
    return `${$localstorage_base_path}camp-notification`;
  }

  /** Returns the localStorage key that tracks dismissed popup identifiers. */
  static GetSeenPopups($localstorage_base_path: string): string {
    return `${$localstorage_base_path}seen-pops`;
  }

  // ▀▀▀▀▀▀▀▀▀ 🥶 Guest ▀▀▀▀▀▀▀▀▀

  /** Persists the active guest checkout code. */
  static SetShopGuestCode(code: string): void {
    localStorage.setItem("guest-code", code);
  }

  /** Reads the active guest checkout code. */
  static GetShopGuestCode(): string | null {
    return localStorage.getItem("guest-code");
  }

  /**
   * Adds the current guest code to the order history cache.
   *
   * This makes it possible to retrieve guest orders later after redirect/payment flows.
   * The helper stores the latest 100 order ids per product type.
   *
   * @param {string} type - Basket/order product type code.
   * @param {number} order_id - Order id.
   * @param {string} code - Guest access code.
   * @returns {boolean} True when the data was stored successfully.
   */
  static AddCurrentGuestCodeToHistory(
    type: string,
    order_id: number,
    code: string,
  ): boolean {
    if (!code || !type || !order_id) return false;
    const ids = this.GetShopHistoryOrderIDs(type);
    if (!ids.includes(order_id)) ids.unshift(order_id);

    localStorage.setItem(
      "guest-orders:" + type,
      JSON.stringify(ids.slice(0, 100)),
    );
    localStorage.setItem("guest-basket:" + order_id, code);
    return true;
  }

  /**
   * Returns stored order ids for guest purchases of a specific basket type.
   *
   * @param {string} type - Basket/order product type code.
   * @returns {number[]} Guest order ids.
   */
  static GetShopHistoryOrderIDs(type: string): number[] {
    const raw = localStorage.getItem("guest-orders:" + type);
    let ids: number[] = [];
    try {
      ids = JSON.parse(raw || "[]");
    } catch (e) {
      console.error("Error parsing JSON", e);
    }
    return ids;
  }

  /**
   * Returns the stored guest code for a specific order.
   *
   * @param {number} order_id - Order id.
   * @returns {string | null} Guest access code.
   */
  static GetShopHistoryGuestCodeOfOrder(order_id: number): string | null {
    return localStorage.getItem("guest-basket:" + order_id);
  }

  /**
   * Returns all guest codes stored for one order type.
   *
   * @param {string} type - Basket/order product type code.
   * @returns {string[]} Guest codes for the given type.
   */
  static GetShopHistoryGuestCodes(type: string): string[] {
    const ids = this.GetShopHistoryOrderIDs(type);
    return ids
      .map((id) => this.GetShopHistoryGuestCodeOfOrder(id))
      .filter((code) => code !== null) as string[];
  }

  /**
   * Returns guest codes across all supported basket types.
   *
   * @returns {string[]} All stored guest codes.
   */
  static GetShopHistoryGuestAllCodes(): string[] {
    const types: string[] = [
      ProductType.PHYSICAL.code,
      ProductType.VIRTUAL.code,
      ProductType.FILE.code,
      ProductType.SERVICE.code,
      ProductType.SUBSCRIPTION.code,
    ];

    return types.flatMap((type) => this.GetShopHistoryGuestCodes(type));
  }

  /**
   * Clears all persisted guest checkout data.
   *
   * @returns {boolean} Always returns true once the cleanup completes.
   */
  static RemoveShopHistoryGuestAllCodes(): boolean {
    const ids: number[] = [];
    const types = [
      ProductType.PHYSICAL.code,
      ProductType.VIRTUAL.code,
      ProductType.FILE.code,
      ProductType.SERVICE.code,
      ProductType.SUBSCRIPTION.code,
    ];

    types.forEach((type) => {
      const typeIds = this.GetShopHistoryOrderIDs(type);
      ids.push(...typeIds);
      localStorage.removeItem("guest-orders:" + type);
    });

    ids.forEach((id) => {
      localStorage.removeItem("guest-basket:" + id);
    });

    localStorage.removeItem("guest-code");
    return true;
  }
}
