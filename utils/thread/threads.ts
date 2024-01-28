/*
 * Copyright (c) 2024. Selldone® Business OS™
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
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed
 * since the last time the debounced function was invoked. The function is executed immediately if `immediate` is true.
 * Subsequent calls to the debounced function are debounced until the wait duration has passed.
 *
 * @param {(...args: any[]) => void} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @param {boolean} immediate - Whether to trigger the function on the leading edge instead of the trailing edge of the wait interval.
 * @returns {(...args: any[]) => void} A new debounced function.
 */
export function debounceSearch(
  func: (...args: any[]) => void,
  wait: number = 750,
  immediate: boolean = true,
): (...args: any[]) => void {
  let timeout: number | null;
  let executed = false;

  // console.log("🦥 Initial search debounce.");

  return function (this: any, ...args: any[]) {
    const context = this;

    const later = function () {
      timeout = null;
      if (!immediate || executed) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    if (callNow && !executed) {
      func.apply(context, args);
      executed = true;
    }

    clearTimeout(timeout as number);
    timeout = setTimeout(later, wait);
  };
}

// Export the debounceSearch function as part of an object
export default {
  debounceSearch,
};
