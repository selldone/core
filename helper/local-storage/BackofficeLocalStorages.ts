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
 * Centralized keys and helpers for backoffice-related localStorage values.
 */
export class BackofficeLocalStorages {
  /**
   * Default image size used for CDN icon/image helpers in backoffice pages.
   * The size is reduced when boost mode is enabled to save bandwidth.
   */
  static IMAGE_SIZE_SMALL: number = localStorage.getItem("boost-mode")
    ? 64
    : 128;

  /**
   * Enables or disables boost mode.
   *
   * Boost mode persists in localStorage and immediately updates the shared
   * `IMAGE_SIZE_SMALL` constant used by image helpers.
   *
   * @param {boolean} boost_mode - Whether boost mode should be enabled.
   * @returns {void}
   */
  static SetBoostMode(boost_mode: boolean): void {
    if (boost_mode) localStorage.setItem("boost-mode", "true");
    else localStorage.removeItem("boost-mode");

    this.IMAGE_SIZE_SMALL = boost_mode ? 64 : 128;
  }

  // ▀▀▀▀▀▀▀▀▀ Product Cache Tags ▀▀▀▀▀▀▀▀▀

  /**
   * Reads cached product tags from localStorage.
   *
   * @param {string} $localstorage_base_path - Namespace prefix for the current shop/context.
   * @returns {string[] | null} Cached tags or `null` when nothing is stored.
   */
  static GetProductCachedTags(
    $localstorage_base_path: string,
  ): string[] | null {
    const val = localStorage.getItem(`${$localstorage_base_path}product-tags`);
    if (!val) return null;
    return val.split(",");
  }

  /**
   * Adds product tags to the recent cached-tag list.
   *
   * The helper keeps the newest values first, deduplicates them, and limits the list
   * to the latest 20 entries.
   *
   * @param {string} $localstorage_base_path - Namespace prefix for the current shop/context.
   * @param {string[]} tags - Tags to prepend to the cache.
   * @returns {void}
   */
  static SetProductCachedTags(
    $localstorage_base_path: string,
    tags: string[],
  ): void {
    if (!tags || !Array.isArray(tags)) return;
    const val = this.GetProductCachedTags($localstorage_base_path) || [];
    val.unshift(...tags);
    const uniqueTags = Array.from(new Set(val)).slice(0, 20);
    localStorage.setItem(
      `${$localstorage_base_path}product-tags`,
      uniqueTags.join(","),
    );
  }
}
