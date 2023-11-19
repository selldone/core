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

export interface ProductFile {
  /**
   * Unique identifier of the product file.
   */
  id: number;

  /**
   * ID representing the associated product.
   */
  product_id: number;

  /**
   * ID representing the associated content. Nullable.
   */
  content_id?: number | null;

  /**
   * Indicates if the file is a sample and can be downloaded for free.
   */
  sample: boolean;

  /**
   * Order or sequence number of the file in listings.
   */
  order: number;

  /**
   * Name of the file.
   */
  name: string;

  /**
   * Path to the file's location.
   */
  path: string;

  /**
   * Size of the file in kilobytes.
   */
  size: number;

  /**
   * Indicates if the file is currently being uploaded.
   */
  uploading: boolean;

  /**
   * Number of times the file has been downloaded.
   */
  downloads: number;

  /**
   * Date and time of the last download.
   */
  download_at: Date;

  created_at: string | null;
  updated_at: string | null;
}
