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

import type { BlogCategory } from "./blog-category.model";

/**
 * Shop blog entry wrapper.
 *
 * Backend source: `App\Shop\Blog\ShopBlog`, table `shop_blogs`.
 * The article body is attached through `HasArticle` morph relations (`article` / `articles`), while this row stores
 * shop/category/SEO-card metadata. `audit` is hidden by the Eloquent model unless explicitly made visible.
 */
export interface ShopBlog {
  /** Blog row id. Source: `shop_blogs.id`. */
  id: number;

  /** Owning shop id. Source: `shop_blogs.shop_id`. */
  shop_id: number;

  /** Blog category id, or `null` for uncategorized blogs. Source: nullable `shop_blogs.category_id`. */
  category_id: number | null;

  /** Optional cluster grouping id. Source: nullable `shop_blogs.cluster_id`. */
  cluster_id?: number | null;

  /** SEO audit payload. Source: nullable JSON `shop_blogs.audit`; hidden by default. */
  audit?: Record<string, unknown> | null;

  /** Last SEO audit timestamp. Source: nullable `shop_blogs.audit_at`. */
  audit_at?: string | null;

  /** Cached public title for lists/cards. Source: nullable `shop_blogs.title`. */
  title: string | null;

  /** Cached image path for lists/cards. Source: nullable `shop_blogs.image`. */
  image: string | null;

  /** Creation timestamp. Source: `shop_blogs.created_at`. */
  created_at?: string;

  /** Last update timestamp. Source: `shop_blogs.updated_at`. */
  updated_at?: string;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown>;

  /** Blog category relation when eager-loaded. */
  category?: BlogCategory | null;

  /** Primary article morph relation from `HasArticle::article()`. */
  article?: Record<string, unknown> | null;

  /** Article morph collection from `HasArticle::articles()`. */
  articles?: Record<string, unknown>[];

  /** Cluster relation when loaded by callers. */
  cluster?: Record<string, unknown> | null;
}

export namespace ShopBlog {}
