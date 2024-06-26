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

export class SEO {
  static GetPageTitleScore(value) {
    if (!value) return 0;
    const length = value.length;

    let score = 0;
    if (length < 5) score = length * 20;
    else if (length <= 45) score = 100;
    else if (length > 45) score = 100 - (length - 45) * 3;

    return score;
  }
  static GetPageURLScore(value) {
    if (!value) return 0;
    const length = value.length;

    let score = 0;
    if (length < 3) score = length * 33;
    else if (length <= 16) score = 100;
    else if (length > 16) score = 100 - (length - 16);

    return score;
  }

  static GetPageDescription(value) {
    if (!value) return 0;
    const length = value.length;

    let score = 0;
    if (length < 50) score = length * 2;
    else if (length <= 150) score = 100;
    else if (length > 150) score = 100 - (length - 150) * 2;

    return score;
  }

  static CTRScore(value) {
    if (!value) return 0;
    // Convert to percent:
    value = value * 100;

    const average = 1.91; // As far as what constitutes a good click through rate, the average is around 1.91%

    let score = 0;
    if (score < average) score = (100 * value) / average;
    else if (score >= average) score = 100;

    return score;
  }
}
