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
 * Represents the types of PDF exports available for orders.
 * This enum is used to specify the kind of PDF document to be generated
 * in the context of order processing.
 *
 * @enum {string}
 */
export enum OrderExportPdfType {
  /**
   * The receipt type for an order.
   * This type represents a customer's order receipt, detailing
   * the purchase information.
   *
   * @type {string}
   */
  RECEIPT = "receipt",

  /**
   * The label type for a box.
   * This type represents a label for a box, typically used
   * in the packaging and shipping process.
   *
   * @type {string}
   */
  LABEL = "label",
}
