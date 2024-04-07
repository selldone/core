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

export class NumberHelper {
  static toEnglishDigits(str: string) {
    str = "" + str;
    // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
    let e = "۰".charCodeAt(0);
    str = str.replace(/[۰-۹]/g, function (t: string) {
      return t.charCodeAt(0) - e;
    });

    // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
    e = "٠".charCodeAt(0);
    str = str.replace(/[٠-٩]/g, function (t: string) {
      return t.charCodeAt(0) - e;
    });
    return str;
  }

  static toEnglishNumber(val: string) {
    return Number(this.toEnglishDigits(val));
  }
  static toEnglishInt(val: string) {
    return parseInt(this.toEnglishDigits(val));
  }
  static toEnglishFloat(val: string, decimal: number) {
    return parseFloat(parseFloat(this.toEnglishDigits(val)).toFixed(decimal));
  }
}
