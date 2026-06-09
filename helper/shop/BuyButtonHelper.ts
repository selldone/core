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
 * Utilities for parsing configurable buy-button labels.
 */
export class BuyButtonHelper {
  /**
   * Extracts an icon token and plain caption text from a button label.
   *
   * The helper expects icon names to be wrapped in curly braces, for example:
   * `{shopping_cart} Buy now`.
   *
   * @param {string} inputString - Raw configurable button caption.
   * @returns {{ icon: string | null; text: string } | null} Parsed icon/text pair or `null` when input is empty.
   */
  static ExtractIconCaption(inputString: string) {
    if (!inputString) return null;

    const iconRegex = /{(.*?)}/;
    const iconMatch = inputString.match(iconRegex);
    let icon, text;

    if (iconMatch) {
      icon = iconMatch[1];
      text = inputString.replace(iconRegex, "").trim();
    } else {
      icon = null;
      text = inputString;
    }

    return { icon, text };
  }
}
