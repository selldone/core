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
  static scrollToTop(top: number = 0, behavior: ScrollBehavior = "instant") {
    window.scrollTo({
      top: top, // Scroll to the top of the page
      behavior: "instant", // Remove animation in change page!
    });
  }
  static scrollToElement(
    selector: string,
    offset: number = 0,
    behavior: ScrollBehavior = "instant",
  ) {
    // Select the element
    const element = document.querySelector(selector);

    if (element) {
      // Calculate position with offset
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset; // Adjust 100px offset as needed

      // Scroll to the element with the offset
      window.scrollTo({
        top: offsetPosition,
        behavior: behavior, // Smooth scroll
      });
    } else {
      console.error(`ScrollHelper: Element ${selector} not found!`);
    }
  }
}
