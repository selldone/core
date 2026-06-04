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

import type { Product } from "../product/product.model";

/**
 * Product cross-sell rule.
 *
 * Backend source: `App\Shop\Products\CrossSelling\CrossSelling`, table `shop_cross_selling`.
 * Managed by `ProductCrossSelling*Controller` and translated by `CrossSellTranslationController`/vendor equivalent.
 */
export interface CrossSelling {
  /** Cross-sell id. Source: `shop_cross_selling.id`. */
  id: number;

  /** Owning shop id. Source: `shop_cross_selling.shop_id`. */
  shop_id: number;

  /** Last editor user id, or `null`. Source: nullable `shop_cross_selling.user_id`. */
  user_id: number | null;

  /** Source product id. Source: `shop_cross_selling.product_id`. */
  product_id: number;

  /** Target product id shown as cross-sell. Source: `shop_cross_selling.target_id`. */
  target_id: number;

  /** Discount percent shown/applied for the cross-sell target. Source: `shop_cross_selling.discount`. */
  discount: number;

  /** Custom customer-facing message. Source: nullable `shop_cross_selling.message`. */
  message: string | null;

  /** Customer action code. Source enum: `AddToCart` or `ViewProduct`. */
  action: CrossSelling.ActionCode;

  /** Localized fields keyed by locale. Source: nullable JSON `shop_cross_selling.translations`. */
  translations?: CrossSelling.Translations | null;

  /** Creation timestamp. Source: `shop_cross_selling.created_at`. */
  created_at: string;

  /** Last update timestamp. Source: `shop_cross_selling.updated_at`. */
  updated_at: string;

  /** Source product relation when eager-loaded. */
  product?: Product | Record<string, unknown>;

  /** Target product relation when eager-loaded. */
  target?: Product | Record<string, unknown>;

  /** Last editor relation when eager-loaded. */
  user?: Record<string, unknown> | null;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown>;
}

export namespace CrossSelling {
  /** Backend enum `App\Shop\Products\CrossSelling\enums\CrossSellActionType`. */
  export type ActionCode = "AddToCart" | "ViewProduct";


  /** Translation payload applied by `HasTranslationTrait`. */
  export type Translations = Record<string, Record<string, unknown>>;
}
