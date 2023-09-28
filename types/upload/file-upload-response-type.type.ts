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

export interface IFileUploadResponse {
  /**
   * The complete URL where the uploaded file can be accessed.
   *
   * Example:
   * http://cdn.selldone.com/shops_13_categories_motorcyclethatisredblackjpg2a4e53d51053a8771ec2b5cf0bb57f4b512.jpg
   */
  url: string;

  /**
   * The relative path or identifier for the uploaded file, typically used
   * to reference the file in the database or backend storage.
   *
   * Example:
   * shops_13_categories_motorcyclethatisredblackjpg2a4e53d51053a8771ec2b5cf0bb57f4b512
   */
  path: string;

  /**
   * The original name of the uploaded file, without any path or URL information.
   */
  name: string;

  /**
   * The size of the uploaded file, post any optimization or processing,
   * represented in bytes.
   */
  size: number;
}
