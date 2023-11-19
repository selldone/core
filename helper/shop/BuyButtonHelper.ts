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

export class BuyButtonHelper {
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
