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
 * Product badge definition owned by a shop.
 *
 * Backend source: `App\Storefront\Product\ProductBadge`, table `product_badges`.
 * API: `/shops/{shop_id}/badges` and `/shops/{shop_id}/products/{product_id}/badges`.
 *
 * Product rows keep selected badge ids in `shop_products.badges` JSONB. The badge itself is reusable per shop and can
 * be matched to product specs by `pattern`.
 */
export interface ProductBadge {
  /** Unique product badge identifier. Source: `product_badges.id`. */
  id: number;

  /** Owning shop id. Source: `product_badges.shop_id`. */
  shop_id: number;

  /** Badge title; at least `title` or `image` is required by backend creation logic. Source: nullable `product_badges.title`. */
  title: string | null;

  /** Badge image path uploaded under `shops/{shop_id}/badges`. Source: nullable `product_badges.image`. */
  image: string | null;

  /** Pattern used to assign badges by checking product spec. Source: nullable `product_badges.pattern`. */
  pattern: string | null;

  /** Optional external/internal link URL. Source: nullable `product_badges.link`; controller validates URL on write. */
  link: string | null;

  /** Creation timestamp serialized by Laravel when included. Source: `product_badges.created_at`. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel when included. Source: `product_badges.updated_at`. */
  updated_at?: string | null;

  /** Shop relation when eager-loaded. Source: `ProductBadge::shop()` serialized as `shop`. */
  shop?: Record<string, unknown> | null;
}

export namespace ProductBadge {
  /** Badge id stored in `shop_products.badges`. */
  export type Id = number;

  /** Payload accepted when creating a badge before backend assigns ids/timestamps. */
  export interface Create {
    /** Owning shop id. */
    shop_id: number;

    /** Badge title. Backend requires at least `title` or `image`. */
    title?: string | null;

    /** Uploaded badge image path or image value after upload normalization. Backend requires at least `title` or `image`. */
    image?: string | null;

    /** Optional product spec pattern used for automatic badge assignment. */
    pattern?: string | null;

    /** Optional external/internal badge link. Backend validates URL on write paths. */
    link?: string | null;
  }

  /** Payload accepted when updating a badge. */
  export type Update = Partial<Omit<Create, "shop_id">>;

  /** Product-level badge selection payload. Passing `null` clears badges in the backend API. */
  export type ProductBadges = Id[] | null;
}
