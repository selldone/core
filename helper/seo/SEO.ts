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
 * Simple heuristics for scoring common SEO fields.
 */
export class SEO {
  /**
   * Scores a page title based on its length.
   *
   * The heuristic favors titles between 5 and 45 characters.
   *
   * @param {string} value - Candidate page title.
   * @returns {number} Score from 0 to roughly 100.
   */
  static GetPageTitleScore(value) {
    if (!value) return 0;
    const length = value.length;

    let score = 0;
    if (length < 5) score = length * 20;
    else if (length <= 45) score = 100;
    else if (length > 45) score = 100 - (length - 45) * 3;

    return score;
  }

  /**
   * Scores a page URL/slUG based on length.
   *
   * The heuristic favors concise URLs between 3 and 16 characters.
   *
   * @param {string} value - URL segment or slug.
   * @returns {number} Score from 0 to roughly 100.
   */
  static GetPageURLScore(value) {
    if (!value) return 0;
    const length = value.length;

    let score = 0;
    if (length < 3) score = length * 33;
    else if (length <= 16) score = 100;
    else if (length > 16) score = 100 - (length - 16);

    return score;
  }

  /**
   * Scores a meta description based on length.
   *
   * The heuristic favors descriptions between 50 and 150 characters.
   *
   * @param {string} value - Meta description text.
   * @returns {number} Score from 0 to roughly 100.
   */
  static GetPageDescription(value) {
    if (!value) return 0;
    const length = value.length;

    let score = 0;
    if (length < 50) score = length * 2;
    else if (length <= 150) score = 100;
    else if (length > 150) score = 100 - (length - 150) * 2;

    return score;
  }

  /**
   * Scores click-through-rate against an average benchmark.
   *
   * Input is expected as a fraction (for example `0.0191` for 1.91%).
   *
   * @param {number} value - CTR as a decimal ratio.
   * @returns {number} Score capped at 100.
   */
  static CTRScore(value) {
    if (!value) return 0;
    value = value * 100;

    const average = 1.91;

    let score = 0;
    if (value < average) score = (100 * value) / average;
    else if (value >= average) score = 100;

    return score;
  }
}
