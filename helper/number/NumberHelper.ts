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

/**
 * NumberHelper provides utility methods for converting digit formats between different numbering systems.
 *
 * Supports conversion of Persian (۰-۹) and Arabic Indic (٠-٩) numerals to standard English digits (0-9).
 * This is particularly useful when dealing with user input from Middle Eastern regions.
 */
export class NumberHelper {
  /**
   * Converts Persian and Arabic Indic digits to English digits.
   *
   * This method replaces:
   * - Persian digits: ۰۱۲۳۴۵۶۷۸۹
   * - Arabic Indic digits: ٠١٢٣٤٥٦٧٨٩
   * with their English equivalents (0-9).
   *
   * @param {string} str - The string containing digits to convert. Can include mixed digit systems.
   * @returns {string} A new string with all Persian and Arabic digits converted to English digits.
   *
   * @example
   * // Convert Persian digits
   * NumberHelper.toEnglishDigits("۱۲۳"); // Returns "123"
   *
   * @example
   * // Convert Arabic Indic digits
   * NumberHelper.toEnglishDigits("١٢٣"); // Returns "123"
   *
   * @example
   * // Mixed digits
   * NumberHelper.toEnglishDigits("قیمت: ۵۰۰"); // Returns "قیمت: 500"
   */
  static toEnglishDigits(str: string) {
    str = "" + str;

    // Convert Persian digits [۰۱۲۳۴۵۶۷۸۹] to English
    let e = "۰".charCodeAt(0);
    str = str.replace(/[۰-۹]/g, function (t: string) {
      return t.charCodeAt(0) - e;
    });

    // Convert Arabic Indic digits [٠١٢٣٤٥٦٧٨٩] to English
    e = "٠".charCodeAt(0);
    str = str.replace(/[٠-٩]/g, function (t: string) {
      return t.charCodeAt(0) - e;
    });
    return str;
  }

  /**
   * Converts a string with Persian/Arabic digits to an English number.
   *
   * This method first converts all Persian and Arabic digits to English,
   * then parses the result as a JavaScript number.
   *
   * @param {string} val - The input string containing digits to convert.
   * @returns {number} A JavaScript number with normalized digits.
   *
   * @example
   * NumberHelper.toEnglishNumber("۲۵.۵"); // Returns 25.5
   */
  static toEnglishNumber(val: string) {
    return Number(this.toEnglishDigits(val));
  }

  /**
   * Converts a string with Persian/Arabic digits to an integer.
   *
   * Converts non-English digits to English, then parses as an integer,
   * effectively removing any decimal portion.
   *
   * @param {string} val - The input string containing digits to convert.
   * @returns {number} An integer value with normalized digits and no decimal part.
   *
   * @example
   * NumberHelper.toEnglishInt("۲۵.۹"); // Returns 25
   */
  static toEnglishInt(val: string) {
    return parseInt(this.toEnglishDigits(val));
  }

  /**
   * Converts a string with Persian/Arabic digits to a float with specific decimal precision.
   *
   * Converts non-English digits to English, then parses as a float,
   * and rounds to the specified number of decimal places.
   *
   * @param {string} val - The input string containing digits to convert.
   * @param {number} decimal - The number of decimal places to retain in the result.
   * @returns {number} A float value with specified decimal precision.
   *
   * @example
   * NumberHelper.toEnglishFloat("۲۵.۹۹۹", 2); // Returns 25.99 (rounded to 2 decimal places)
   */
  static toEnglishFloat(val: string, decimal: number) {
    return parseFloat(parseFloat(this.toEnglishDigits(val)).toFixed(decimal));
  }
}
