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
 * Storefront category record.
 *
 * Backend source: `App\Shop\Category\ShopCategory`, table `shop_categories`.
 * Public storefront category endpoints return these records for shop navigation, category filters, and product listing
 * context. Category rows also carry marketplace ownership, connector ownership, cluster grouping, translations, custom
 * page/theme settings, and denormalized counters.
 */
export class Category implements Category.ICategory {
  /** Source: `shop_categories.id`. */
  id: number | null = null;

  /** Source: `shop_categories.shop_id`. */
  shop_id: number | null = null;

  /** Source: nullable `shop_categories.vendor_id`; marketplace vendor owner when present. */
  vendor_id: number | null = null;

  /** Source: nullable `shop_categories.connect_id`; connect/import provider when present. */
  connect_id: number | null = null;

  /** Source: nullable `shop_categories.cluster_id`; shop resource cluster when assigned. */
  cluster_id: number | null = null;

  /** Source: nullable `shop_categories.name`, max 32 chars; unique with `shop_id` when set. */
  name: string | null = null;

  /** Source: `shop_categories.order`; lower values sort first. */
  order: number | null = null;

  /** Source: non-null `shop_categories.title`; display title shown to customers. */
  title: string | null = null;

  /** Source: nullable `shop_categories.description`; public category description. */
  description: string | null = null;

  /** Source: nullable `shop_categories.icon`; raw icon/image path. */
  icon: string | null = null;

  /** Source: `shop_categories.star`; marks featured/starred categories. */
  star: boolean | null = null;

  /** Source: nullable `shop_categories.parent_id`; null for root categories. */
  parent_id: number | null = null;

  /** Source: `shop_categories.visits`; backend-maintained visit counter. */
  visits: number | null = null;

  /** Source: `shop_categories.products`; cached product count, not a product collection. */
  products: number | null = null;

  /** Source: `shop_categories.categories`; cached direct child-category count. */
  categories: number | null = null;

  /** Source: nullable JSON `shop_categories.filters`; category-specific storefront filters. */
  filters: Category.Filter[] | null = null;

  /** Source: nullable JSON `shop_categories.note`; internal team notes, usually omitted from public storefront responses. */
  note: Category.Note[] | null = null;

  /** Source: nullable `shop_categories.theme`; storefront theme code for custom category pages. */
  theme: string | null = null;

  /** Source: nullable JSON `shop_categories.augment`; page-builder/category augmentation payload. */
  augment: Record<string, unknown> | null = null;

  /** Source: nullable `shop_categories.page_id`; internal page-builder page linked to this category. */
  page_id: number | null = null;

  /** Source: nullable JSON `shop_categories.translations`; localized category fields keyed by locale. */
  translations: Category.Translations | null = null;

  /** Source: nullable JSON `shop_categories.engine`; extra loading rules such as `{categories,tags,limit}`. */
  engine: Category.Engine | null = null;

  /** Source: `shop_categories.deleted_at`; present only when backend includes trashed categories. */
  deleted_at?: string | null = null;

  /** Source: `shop_categories.created_at`; timestamp serialized by Laravel when included. */
  created_at?: string | null = null;

  /** Source: `shop_categories.updated_at`; timestamp serialized by Laravel when included. */
  updated_at?: string | null = null;

  /** Owning shop relation when eager-loaded by `ShopCategory::shop()`; includes soft-deleted shops. */
  shop?: Record<string, unknown> | null;

  /** Parent category relation when eager-loaded by backend. */
  parent?: Category | null;

  /** Child category relation when eager-loaded by backend (`ShopCategory::childes`). */
  childes?: Category[];

  /** Product variants through direct category products when `ShopCategory::variants()` is eager-loaded. */
  variants?: Record<string, unknown>[];

  /** Marketplace vendor relation when `ShopCategory::vendor()` is eager-loaded. */
  vendor?: Record<string, unknown> | null;

  /** Attached custom page relation when loaded by category/page endpoints. */
  page?: Record<string, unknown> | null;

  constructor(
    data: {
      id: number;
      name: string;
    } & Partial<Category.ICategory>,
  ) {
    Object.assign(this, data);
  }
}

export namespace Category {
  /** Category filter definition stored in `shop_categories.filters`. Shape is shop-configurable. */
  export interface Filter {
    /** Filter identifier or product-spec key when present. */
    key?: string;

    /** Customer-facing filter title when present. */
    title?: string;

    /** Filter type/bucket, for example one of the variant filter buckets in backend `VariantFilterMap`. */
    type?: string;

    /** Filter values/options generated from product/category metadata. */
    values?: unknown[];

    /** Backend/frontend may add extra shop-specific filter fields. */
    [key: string]: unknown;
  }

  /** Internal note entry stored in `shop_categories.note`. */
  export interface Note {
    /** User id of the note author. */
    user_id: number;
    /** Display name captured for the author. */
    user_name: string;
    /** Note body. */
    body: string;
    /** Note timestamp as returned by Laravel/JSON serialization. */
    date: string | Date;
  }

  /** Localized category fields keyed by locale code. */
  export type Translations = Record<string, Record<string, unknown>>;

  /** Extra product loading rules used by the category/shop engine. */
  export interface Engine {
    /** Category ids to include as extra sources. */
    categories?: number[];
    /** Product tags to include as extra sources. */
    tags?: string[];
    /** Maximum number of extra products to load. */
    limit?: number;
    /** Backend can add shop-specific engine keys. */
    [key: string]: unknown;
  }

  export interface ICategory {
    /** Unique category identifier. Source: `shop_categories.id`. */
    id: number | null;

    /** Owning shop identifier. Source: `shop_categories.shop_id`. */
    shop_id: number | null;

    /** Marketplace vendor owner. Source: nullable `shop_categories.vendor_id`. */
    vendor_id?: number | null;

    /** Connect/import provider. Source: nullable `shop_categories.connect_id`. */
    connect_id?: number | null;

    /** Optional shop resource cluster id. Source: nullable `shop_categories.cluster_id`. */
    cluster_id?: number | null;

    /** Category slug/name, max 32 chars and unique per shop when set. Source: nullable `shop_categories.name`. */
    name: string | null;

    /** Custom sort order. Source: `shop_categories.order`. */
    order?: number | null;

    /** Public category title. Source: non-null `shop_categories.title`. */
    title?: string | null;

    /** Public category description. Source: nullable `shop_categories.description`. */
    description?: string | null;

    /** Raw icon/image path. Source: nullable `shop_categories.icon`. */
    icon?: string | null;

    /** Featured/starred flag. Source: `shop_categories.star`. */
    star?: boolean | null;

    /** Parent category id, or `null` for roots. Source: nullable `shop_categories.parent_id`. */
    parent_id?: number | null;

    /** Visit counter. Source: `shop_categories.visits`. */
    visits?: number | null;

    /** Cached product count. Source: `shop_categories.products`; not a product collection. */
    products?: number | null;

    /** Cached child-category count. Source: `shop_categories.categories`. */
    categories?: number | null;

    /** Category filter configuration. Source: nullable JSON `shop_categories.filters`. */
    filters?: Filter[] | null;

    /** Internal team notes. Source: nullable JSON `shop_categories.note`; usually not public. */
    note?: Note[] | null;

    /** Storefront theme code. Source: nullable `shop_categories.theme`. */
    theme?: string | null;

    /** Page-builder/category augmentation JSON. Source: nullable `shop_categories.augment`. */
    augment?: Record<string, unknown> | null;

    /** Linked page-builder page. Source: nullable `shop_categories.page_id`. */
    page_id?: number | null;

    /** Localized category fields. Source: nullable JSON `shop_categories.translations`. */
    translations?: Translations | null;

    /** Extra category loading rules. Source: nullable JSON `shop_categories.engine`. */
    engine?: Engine | null;

    /** Soft-delete timestamp when returned. Source: nullable `shop_categories.deleted_at`. */
    deleted_at?: string | null;

    /** Creation timestamp when returned. Source: `shop_categories.created_at`. */
    created_at?: string | null;

    /** Last update timestamp when returned. Source: `shop_categories.updated_at`. */
    updated_at?: string | null;

    /** Owning shop relation when eager-loaded by backend. */
    shop?: Record<string, unknown> | null;

    /** Parent relation when eager-loaded by backend. */
    parent?: Category | null;

    /** Child relation when eager-loaded by backend. */
    childes?: Category[];

    /** Variant relation when eager-loaded by backend. */
    variants?: Record<string, unknown>[];

    /** Marketplace vendor relation when eager-loaded by backend. */
    vendor?: Record<string, unknown> | null;

    /** Custom page relation when eager-loaded by backend. */
    page?: Record<string, unknown> | null;
  }
}

export namespace Category {
  /** JSON primitive accepted by category metadata and translation payloads. */
  export type ApiJsonPrimitive = string | number | boolean | null;

  /** JSON object used for category metadata, engine config, and relation projections. */
  export interface ApiJsonObject {
    [key: string]: ApiJsonValue | undefined;
  }

  /** JSON array used for category metadata, engine config, and relation projections. */
  export interface ApiJsonArray extends Array<ApiJsonValue> {}

  export type ApiJsonValue = ApiJsonPrimitive | ApiJsonObject | ApiJsonArray;

  /** Compact category projection used by product cards, breadcrumbs, and menus. */
  export interface CompactProjection {
    id: number;
    shop_id?: number;
    parent_id?: number | null;
    title?: string | null;
    slug?: string | null;
    icon?: string | null;
  }

  /** Safe partial update payload for category tree and SEO settings. */
  export interface ApiPatch {
    parent_id?: number | null;
    title?: string | null;
    description?: string | null;
    slug?: string | null;
    icon?: string | null;
    order?: number;
    enable?: boolean;
    engine?: ApiJsonObject | null;
    meta?: ApiJsonObject | null;
    translations?: Record<string, ApiJsonObject> | null;
  }
}
