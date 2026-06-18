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
 * Queued image import row.
 *
 * Backend source: `App\Storefront\Products\import\ImportQueImage`.
 * Table: `import_que_images`.
 *
 * Rows are deduplicated by backend before creation and deleted after a successful download/import. Soft-deleted rows
 * are intentionally kept as download history.
 */
export class ImportQueImage implements ImportQueImage.IImportQueImage {
  id!: number;
  shop_id!: number;
  vendor_id!: number | null;
  type!: ImportQueImage.Type;
  product_id!: number | null;
  variant_id!: number | null;
  category_id!: number | null;
  url!: string;
  alt!: string | null;
  attempt!: number;
  error!: string | null;
  dispatched!: boolean;
  deleted_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  shop?: Record<string, unknown> | null;
  product?: Record<string, unknown> | null;
  variant?: Record<string, unknown> | null;
  category?: Record<string, unknown> | null;
  vendor?: Record<string, unknown> | null;

  constructor(data: Partial<ImportQueImage.IImportQueImage> = {}) {
    Object.assign(this, data);
  }
}

export namespace ImportQueImage {
  /** Backend image import target type. Source: `import_que_images.type` enum and `New*Image` helpers. */
  export type Type = "Product" | "Icon" | "Article" | "Content" | "Category";

  /** Import queue image payload returned by backend APIs. */
  export interface IImportQueImage {
    /** Queue row id. Source: `import_que_images.id`. */
    id: number;

    /** Owning shop id. */
    shop_id: number;

    /** Vendor id when the image belongs to a vendor import, otherwise `null`. */
    vendor_id: number | null;

    /** Image target type. Controls which backend import branch handles the URL. */
    type: Type;

    /** Target product id for product/icon/article images, or `null` for category-only rows. */
    product_id: number | null;

    /** Target product variant id for variant gallery images, or `null`. */
    variant_id: number | null;

    /** Target category id for category image imports, or `null`. */
    category_id: number | null;

    /** External or local image URL submitted to the import queue. */
    url: string;

    /** Alternative text copied to the final product/category image when supported. */
    alt: string | null;

    /** Number of failed download attempts. Backend increments this on caught exceptions. */
    attempt: number;

    /** Last download/import failure message, or `null`. */
    error: string | null;

    /** Dispatch flag indexed by backend for image import jobs. */
    dispatched: boolean;

    /** Soft-delete timestamp after successful processing or manual deletion. */
    deleted_at?: string | null;

    /** Creation timestamp serialized by Laravel. */
    created_at?: string | null;

    /** Last update timestamp serialized by Laravel. */
    updated_at?: string | null;

    /** Owning shop relation when eager-loaded. */
    shop?: Record<string, unknown> | null;

    /** Target product relation when eager-loaded. */
    product?: Record<string, unknown> | null;

    /** Target variant relation when eager-loaded. */
    variant?: Record<string, unknown> | null;

    /** Target category relation when eager-loaded. */
    category?: Record<string, unknown> | null;

    /** Vendor relation when eager-loaded. */
    vendor?: Record<string, unknown> | null;
  }
}
