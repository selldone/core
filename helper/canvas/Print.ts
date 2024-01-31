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
 * Print element.
 *
 */
export class Print {
  static PrintElement(
    element_id: string,
    header: string | null = null,
    maxWidth: number = 800,
    documentTitle: string = "Document",
  ) {
    // Print a specific HTML element
    printJS({
      // Document source: pdf or image url, html element id or json data object.
      printable: element_id,
      // Document type.
      type: "html",

      // Optional header to be used with HTML, Image or JSON printing.
      // It will be placed on the top of the page.
      header: header,

      // Max document width in pixels.
      maxWidth: maxWidth,

      // Document title
      documentTitle: documentTitle,
    });
  }
}
