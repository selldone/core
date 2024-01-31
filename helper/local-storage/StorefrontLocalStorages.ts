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

import { ProductType } from "../../enums/product/ProductType";

export class StorefrontLocalStorages {
  static GetUserCurrencyPath($localstorage_base_path: string): string {
    return `${$localstorage_base_path}user-currency`;
  }

  static GetUserShopViewModePath(
    $localstorage_base_path: string,
    device: string
  ): string {
    return `${$localstorage_base_path}view-mode-${device}`;
  }

  static GetUserShopSearchHistory($localstorage_base_path: string): string {
    return `${$localstorage_base_path}search-history`;
  }

  static GetShopCouponsViewMode($localstorage_base_path: string): string {
    return `${$localstorage_base_path}coupons-show`;
  }

  static GetShopCouponsCodes($localstorage_base_path: string): string {
    return `${$localstorage_base_path}coupon-codes`;
  }

  static GetShopNotificationViewed($localstorage_base_path: string): string {
    return `${$localstorage_base_path}camp-notification`;
  }

  static GetSeenPopups($localstorage_base_path: string): string {
    return `${$localstorage_base_path}seen-pops`;
  }


  // ▀▀▀▀▀▀▀▀▀ 🥶 Guest ▀▀▀▀▀▀▀▀▀
  static SetShopGuestCode(code: string): void {
    localStorage.setItem("guest-code", code);
  }

  static GetShopGuestCode(): string | null {
    return localStorage.getItem("guest-code");
  }

  /**
   * Keep guest codes after user click payment button to be able to show history of orders!
   * Only basket supported!
   * @constructor
   */
  static AddCurrentGuestCodeToHistory(
    type: string,
    order_id: number,
    code: string
  ): boolean {
    if (!code || !type || !order_id) return false;
    const ids = this.GetShopHistoryOrderIDs(type);
    if (!ids.includes(order_id)) ids.unshift(order_id);

    localStorage.setItem(
      "guest-orders:" + type,
      JSON.stringify(ids.slice(0, 100))
    );
    localStorage.setItem("guest-basket:" + order_id, code);
    return true;
  }

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

  static GetShopHistoryGuestCodeOfOrder(order_id: number): string | null {
    return localStorage.getItem("guest-basket:" + order_id);
  }

  static GetShopHistoryGuestCodes(type: string): string[] {
    const ids = this.GetShopHistoryOrderIDs(type);
    return ids
      .map((id) => this.GetShopHistoryGuestCodeOfOrder(id))
      .filter((code) => code !== null) as string[];
  }

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
