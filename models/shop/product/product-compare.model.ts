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

import type { Product } from "./product.model";
import type { ProductVariant } from "./product_variant.model";

/**
 * Storefront product comparison view model.
 *
 * This is not a standalone database table. It is a product payload enriched for compare UIs with the selected variant,
 * a stable frontend key, and a refresh flag used when a compared item was changed or should be reloaded.
 */
export interface ProductCompare extends Product {
  /** Selected variant for comparison, or `null` when the base product is compared. */
  variant: ProductVariant | null;

  /** Frontend/backend hint that the compared item should be refreshed from the product endpoint. */
  need_update: boolean;

  /** Stable compare-list key. Usually product id or a product/variant composite key. */
  key: string | number;
}

export namespace ProductCompare {
  /** Serializable compare-list item key. */
  export type Key = string | number;

  /** Minimal persisted compare reference before full product hydration. */
  export interface Reference {
    /** Product id. */
    product_id: number;

    /** Optional variant id when the buyer compares a specific variant. */
    variant_id?: number | null;

    /** Stable compare-list key. */
    key?: Key;
  }
}
