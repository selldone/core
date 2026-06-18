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
 * Downloadable file attached to a product or subscription content item.
 *
 * Backend source: `App\Storefront\File\ProductFile`, table `product_files`.
 * Files are stored on the private disk. `uploading=true` means the file record was created but the backend still needs
 * to confirm the uploaded object exists.
 */
export interface ProductFile {
  /** Unique product file identifier. Source: `product_files.id`. */
  id: number;

  /** Parent product identifier. Source: `product_files.product_id`. */
  product_id: number;

  /** Optional subscription/content identifier. Source: nullable `product_files.content_id`. */
  content_id?: number | null;

  /** Whether this file is a free sample. Source: `product_files.sample`, default `false`. */
  sample: boolean;

  /** Sort position in the product file list. Source: unsigned tiny integer `product_files.order`. */
  order: number;

  /** Public file name. Source: `product_files.name`. */
  name: string;

  /** Stored file path. Source: `product_files.path`. */
  path: string;

  /** File size in kilobytes. Source: `product_files.size`. */
  size: number;

  /** Whether the backend still considers the file upload in progress. Source: `product_files.uploading`. */
  uploading: boolean;

  /** Total successful downloads. Source: `product_files.downloads`. */
  downloads: number;

  /** Last download timestamp, or `null` before the first download. Source: nullable `product_files.download_at`. */
  download_at: string | null;

  /** Product relation when eager-loaded. Source: `ProductFile::product()`. */
  product?: Record<string, unknown> | null;

  /** Subscription/content relation when eager-loaded. Source: `ProductFile::content()`. */
  content?: Record<string, unknown> | null;

  /** Soft-delete timestamp when returned. Source: nullable `product_files.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp serialized by Laravel when included. Source: `product_files.created_at`. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel when included. Source: `product_files.updated_at`. */
  updated_at?: string | null;
}

export namespace ProductFile {
  /** Payload accepted when creating a file record before backend assigns ids/timestamps and counters. */
  export interface Create {
    /** Parent product id. */
    product_id: number;

    /** Optional product content id for subscription-content files. */
    content_id?: number | null;

    /** Whether this file is downloadable as a free sample. */
    sample?: boolean;

    /** Public file name. */
    name: string;

    /** Private-disk storage path. */
    path: string;

    /** File size in kilobytes. */
    size: number;
  }

  /** Payload used by sort APIs. */
  export interface SortItem {
    /** Product file id. */
    id: number;

    /** New list order. */
    order: number;
  }
}
