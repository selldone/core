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
 * Shop blog category.
 *
 * Backend source: `App\Shop\Blog\ShopBlogCategory`, table `shop_blog_categories`.
 * Managed by `ShopBlogCategoryController` and `ShopBlogCategory::NewShopBlogCategory`.
 *
 * Category names are unique per shop. Before recreating a deleted category with the same name, the backend force-deletes
 * the trashed row so the unique index can be reused.
 */
export class BlogCategory implements BlogCategory.IBlogCategory {
  /** Category id. Source: `shop_blog_categories.id`. */
  id!: number;

  /** Owning shop id. Source: `shop_blog_categories.shop_id`. */
  shop_id!: number;

  /** Public category name, max 64 chars and unique per shop. Source: `shop_blog_categories.category`. */
  category!: string;

  /** Short category description. Source: `shop_blog_categories.description`. */
  description!: string;

  /** Featured/starred category flag. Source: `shop_blog_categories.star` cast to boolean, default `false`. */
  star!: boolean;

  /** Aggregated visits of articles in this category. Source: `shop_blog_categories.visits`, default `0`. */
  visits!: number;

  /** Cached number of blogs in this category. Source: `shop_blog_categories.articles`, default `0`. */
  articles!: number;

  /** Category icon image path, or `null`. Source: nullable `shop_blog_categories.icon`. */
  icon!: string | null;

  /** Soft-delete timestamp. Source: `shop_blog_categories.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `shop_blog_categories.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `shop_blog_categories.updated_at`. */
  updated_at?: string | null;

  /** Blog relation when `ShopBlogCategory::blogs()` is eager-loaded. */
  blogs?: Record<string, unknown>[];

  /** Owning shop relation when `ShopBlogCategory::shop()` is eager-loaded. */
  shop?: Record<string, unknown> | null;

  constructor(data: BlogCategory.IBlogCategory & Partial<BlogCategory.Relations>) {
    Object.assign(this, data);
  }
}

export namespace BlogCategory {
  /** Raw Eloquent shape returned for `shop_blog_categories`. */
  export interface IBlogCategory {
    id: number;
    shop_id: number;
    category: string;
    description: string;
    star: boolean;
    visits: number;
    articles: number;
    icon: string | null;
    deleted_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
  }

  /** Optional eager-loaded relation keys. */
  export interface Relations {
    blogs?: Record<string, unknown>[];
    shop?: Record<string, unknown> | null;
  }
}

export namespace BlogCategory {
  /** JSON primitive accepted by blog category translation/meta payloads. */
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object used for translations, metadata, and relation projections. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array used for translations, metadata, and relation projections. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Compact blog category projection used by blog list/card payloads. */
  export interface CompactProjection {
    id: number;
    shop_id?: number;
    title?: string | null;
    slug?: string | null;
    icon?: string | null;
  }

  /** Safe partial update payload for blog categories. */
  export interface ApiPatch {
    title?: string | null;
    description?: string | null;
    slug?: string | null;
    icon?: string | null;
    parent_id?: number | null;
    order?: number;
    translations?: Record<string, JsonObject> | null;
  }
}
