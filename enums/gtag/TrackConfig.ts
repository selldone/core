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

import { Currency } from "@core/enums/payment/Currency";

export class TrackConfig {
  static SetLanguage(language: string) {
    if (typeof gtag !== "function") return;
    gtag("set", {
      language: language,
    });
  }
  static SetCurrency(currency: keyof typeof Currency) {
    if (typeof gtag !== "function") return;
    gtag("set", {
      currency: currency,
    });
  }
}
