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

export default class ScrollHelper {


  static async scrollToTop(top: number = 0, behavior: ScrollBehavior = "instant") {
    const currentScrollY = window.scrollY || window.pageYOffset;

    // Only scroll if the current scroll position is different from the target top
    if (currentScrollY !== top) {
      window.scrollTo({
        top: top, // Scroll to the specified position
        behavior: behavior, // Scroll behavior (e.g., 'instant' or 'smooth')
      });
    }
  }

  /**
   * Scrolls the page to the specified element with an optional offset and behavior.
   * If the center option is true, the element will be centered in the viewport.
   *
   * @param {string | HTMLElement} selector - The selector string or the HTML element to scroll to.
   * @param {number} [offset=0] - The offset in pixels to adjust the scroll position.
   * @param {ScrollBehavior} [behavior="auto"] - The scroll behavior, either "auto" or "smooth".
   * @param {boolean} [center=false] - Whether to center the element in the viewport.
   */
  static async scrollToElement(
      selector: string | HTMLElement,
      offset: number = 0,
      behavior: ScrollBehavior = "auto",
      center: boolean = false,
  ) {
    // Select the element
    const element = selector instanceof HTMLElement ? selector : document.querySelector(selector);

    if (element) {
      // Calculate position with offset
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      let offsetPosition;
      if (center) {
        const viewportHeight = window.innerHeight;
        const elementHeight = element.getBoundingClientRect().height;
        offsetPosition = elementPosition - (viewportHeight / 2) + (elementHeight / 2);
      } else {
        offsetPosition = elementPosition - offset;
      }

      // Scroll to the element with the offset
      window.scrollTo({
        top: offsetPosition,
        behavior: behavior, // Scroll behavior
      });
    } else {
     // console.error(`ScrollHelper: Element ${selector} not found!`);
    }
  }
}
