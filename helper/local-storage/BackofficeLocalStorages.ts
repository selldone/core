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

export class BackofficeLocalStorages {
  static IMAGE_SIZE_SMALL: number = localStorage.getItem("boost-mode")
    ? 64
    : 128; // Can be 64 (low speed networks) or 128;

  /**
   * Set the boost mode
   * @param boost_mode
   * @constructor
   */
  static SetBoostMode(boost_mode: boolean): void {
    if (boost_mode) localStorage.setItem("boost-mode", "true");
    else localStorage.removeItem("boost-mode");

    // Implement the boost mode:
    this.IMAGE_SIZE_SMALL = boost_mode ? 64 : 128;
  }

  // ▀▀▀▀▀▀▀▀▀ Product Cache Tags ▀▀▀▀▀▀▀▀▀

  static GetProductCachedTags(
    $localstorage_base_path: string,
  ): string[] | null {
    const val = localStorage.getItem(`${$localstorage_base_path}product-tags`);
    if (!val) return null;
    return val.split(",");
  }

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
