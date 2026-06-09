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

import printJS from "print-js";

/**
 * Wrapper around `print-js` for printing HTML elements.
 */
export class Print {
  /**
   * Prints a specific DOM element by its id.
   *
   * @param {string} element_id - Id of the HTML element to print.
   * @param {string | null} [header=null] - Optional print header rendered above the content.
   * @param {number} [maxWidth=800] - Maximum print width in pixels.
   * @param {string} [documentTitle='Document'] - Title used by the print dialog / generated document.
   * @returns {void}
   */
  static PrintElement(
    element_id: string,
    header: string | null = null,
    maxWidth: number = 800,
    documentTitle: string = "Document",
  ) {
    printJS({
      printable: element_id,
      type: "html",
      header: header,
      maxWidth: maxWidth,
      documentTitle: documentTitle,
    });
  }
}
