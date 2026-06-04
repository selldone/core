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
 * Included-in-the-box content item assignable to products.
 *
 * Backend source: `App\Shop\Products\Includes\ShopInclude`, table `shop_includes`.
 * Controllers: `Shop\Product\Includes\ShopIncludes*Controller`.
 */
export interface ShopInclude {
  /** Unique include identifier. Source: `shop_includes.id`. */
  id: number;

  /** Owning shop id. Source: `shop_includes.shop_id`. */
  shop_id: number;

  /** Last editor user id. Source: nullable `shop_includes.user_id`. */
  user_id?: number | null;

  /** Unique include code per shop. Source: `shop_includes.code`, unique with `shop_id`. */
  code: string;

  /** Optional include image path. Source: nullable `shop_includes.image`. */
  image?: string | null;

  /** Public include title. Source: `shop_includes.title`. */
  title: string;

  /** Public include description. Source: nullable `shop_includes.description`. */
  description?: string | null;

  /** External link for the include profile. Source: nullable `shop_includes.url`. */
  url?: string | null;

  /** Custom URL path for internal include profile pages. Source: nullable `shop_includes.path`. */
  path?: string | null;

  /** Internal page-builder page id. Source: nullable `shop_includes.page_id`. */
  page_id?: number | null;

  /** Custom storefront theme code. Source: nullable `shop_includes.theme`. */
  theme?: string | null;

  /** Page-builder/include augmentation JSON. Source: nullable JSON `shop_includes.augment`. */
  augment?: Record<string, unknown> | null;

  /** Localized include fields keyed by locale. Source: nullable JSON `shop_includes.translations`. */
  translations?: Record<string, Record<string, unknown>> | null;

  /** Creation timestamp serialized by Laravel when included. Source: `shop_includes.created_at`. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel when included. Source: `shop_includes.updated_at`. */
  updated_at?: string | null;

  /** Product relation when eager-loaded. Source: `ShopInclude::products()` serialized as `products`; pivot is hidden. */
  products?: Record<string, unknown>[];

  /** Page relation when eager-loaded. Source: `ShopInclude::page()` via `HasTheme`/page relation, serialized as `page`. */
  page?: Record<string, unknown> | null;

  /** Last editor relation when eager-loaded. Source: `ShopInclude::user()` serialized as `user`. */
  user?: Record<string, unknown> | null;
}

export namespace ShopInclude {}