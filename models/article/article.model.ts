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

export interface Article {
  /**
   * Primary key of the article record.
   *
   * Backend: `articles.id`.
   */
  id: number;

  /**
   * Owning shop ID when the article belongs to a shop-scoped parent.
   *
   * Backend: nullable foreign key to `shops.id`. Official Selldone blog/help
   * articles can have no shop.
   */
  shop_id: number | null;

  /**
   * Polymorphic parent model ID.
   *
   * Examples: product ID for `product`, shop blog ID for `shop-blog`, Samin
   * blog/help ID for official content, company ID for company profiles, or
   * logistic profile ID for reusable product-detail profile articles.
   */
  parent_id: number;

  /**
   * Polymorphic parent type stored by Laravel morph map.
   *
   * Backend morph map source: `AppServiceProvider`.
   */
  parent_type: Article.TypeValue;

  /**
   * Author user ID.
   *
   * Backend: required foreign key to `users.id`.
   */
  user_id: number;

  /**
   * Legacy or API-injected community label.
   *
   * This is not a persisted column on `articles`; use only when an endpoint
   * explicitly includes it.
   */
  community?: string | null;

  /**
   * Article title.
   *
   * Backend: required string, max length 128.
   */
  title: string;

  /**
   * Main article body.
   *
   * Backend: `mediumText` HTML/content field.
   */
  body: string;

  /**
   * SEO/browser page title.
   *
   * Backend: nullable string, max length 128. When omitted, backend normally
   * falls back to `title` during add/update flows.
   */
  page_title: string | null;

  /**
   * Short list/search description.
   *
   * Backend: required text field, truncated to 256 characters during normal
   * add/update flows.
   */
  description: string;

  /**
   * Main image URL or storage path.
   *
   * Backend column is nullable. Thumbnail variants may be generated separately
   * by backend image helpers.
   */
  image: string | null;

  /**
   * Total power/clap counter.
   *
   * Backend default is `0`.
   */
  power: number;

  /**
   * Total like counter.
   *
   * Backend default is `0`.
   */
  like: number;

  /**
   * Whether the article is published.
   *
   * Scheduled future articles can be stored with `published = false` until
   * `schedule_at` is reached.
   */
  published: boolean;

  /**
   * Whether the article is private.
   *
   * Private articles are not publicly listed and may be limited to publication
   * or admin contexts.
   */
  private: boolean;

  /**
   * Article language code.
   *
   * Backend enum source: `Languages::AllLanguages` keys.
   */
  lang: string;

  /**
   * Cached total comments counter.
   *
   * Backend default is `0`.
   */
  comments_count: number;

  /**
   * Cached count of unreviewed/new comments for admin workflows.
   *
   * Backend default is `0`.
   */
  new_comments_count: number;

  /**
   * Article view counter.
   *
   * Incremented by backend without touching `updated_at`.
   */
  views: number;

  /**
   * Scheduled publish timestamp.
   *
   * Backend casts this nullable Carbon column as `datetime`; API payloads
   * usually serialize it as an ISO datetime string.
   */
  schedule_at: Article.Timestamp | null;

  /**
   * URL-friendly slug.
   *
   * Backend column is nullable; backend can regenerate it from `title` when
   * missing.
   */
  slug: string | null;

  /**
   * FAQ entries used to generate FAQ JSON-LD.
   *
   * Backend stores this as nullable JSON and casts it to array. Normal
   * add/update flows sanitize `question` and `answer` fields.
   */
  faqs: Article.Faq[] | null;

  /**
   * Structured data payload for article sections or SEO helpers.
   *
   * Backend stores this as nullable JSON and casts it to array.
   */
  structures: Article.StructurePayload | null;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at: Article.Timestamp;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at: Article.Timestamp;

  /**
   * Soft-delete timestamp.
   *
   * Present only when the backend query includes trashed articles.
   */
  deleted_at?: Article.Timestamp | null;

  /**
   * Loaded author relation, when explicitly included by the API.
   */
  user?: Record<string, unknown>;

  /**
   * Loaded shop relation, when explicitly included by the API.
   */
  shop?: Record<string, unknown> | null;

  /**
   * Loaded polymorphic parent relation, when explicitly included by the API.
   */
  parent?: Record<string, unknown> | null;

  /**
   * Loaded tags relation, when explicitly included by the API.
   */
  tags?: Record<string, unknown>[];

  /**
   * Loaded comments relation, when explicitly included by the API.
   */
  comments?: Record<string, unknown>[];

  /**
   * Loaded report rows relation, when explicitly included by the API.
   */
  reports?: Record<string, unknown>[];

  /**
   * Loaded star rows relation, when explicitly included by the API.
   */
  article_stars?: Record<string, unknown>[];

  /**
   * Loaded AI cached article relation, when explicitly included by the API.
   */
  ai_cache_article?: Record<string, unknown> | null;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace Article {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;

  /**
   * FAQ item persisted in `articles.faqs`.
   */
  export interface Faq {
    /** Sanitized FAQ question text. */
    question: string;

    /** Sanitized FAQ answer HTML/text. */
    answer: string;
  }

  /**
   * Structure data payload persisted in `articles.structures`.
   */
  export type StructurePayload =
    | Record<string, unknown>[]
    | Record<string, unknown>;

  /**
   * Interface representing the structure of each article type.
   */
  export interface IType {
    code: TypeValue;
    name: string;
    color: string;
  }

  /**
   * Enumerates the keys for different types of articles.
   */
  export type TypeKey =
    | "SelldoneBlog"
    | "SelldoneHelp"
    | "Product"
    | "Blog"
    | "Company"
    | "LogisticProfile";

  /**
   * Persisted Laravel morph-map values accepted by `articles.parent_type`.
   */
  export type TypeValue =
    | "blog"
    | "help"
    | "product"
    | "shop-blog"
    | "company"
    | "logistic-profile";

  /**
   * Object containing different types of articles.
   * Each property of the object represents a specific type of article
   * with its unique code, name, and color.
   */
  export const Types: Record<TypeKey, IType> = {
    /**
     * Official blog articles for Selldone.
     * These articles are generally focused on updates, news, and insights about Selldone.
     */
    SelldoneBlog: { code: "blog", name: "", color: "#C2185B" },

    /**
     * Official help articles for Selldone.
     * These articles provide guidance, FAQs, and support information for Selldone users.
     */
    SelldoneHelp: { code: "help", name: "", color: "#FFA000" },

    /**
     * Articles related to shop products.
     * These are typically product descriptions, reviews, or any content related to specific products.
     */
    Product: { code: "product", name: "", color: "#1976D2" },

    /**
     * Blog articles for a shop.
     * This can include a variety of topics relevant to the shop's focus, such as lifestyle, tips, and news.
     */
    Blog: { code: "shop-blog", name: "", color: "#689F38" },

    /**
     * Company profile for a shop.
     * This includes information about the company, its values, history, and other corporate information.
     */
    Company: { code: "company", name: "", color: "#456" },

    /**
     * Reusable product-detail profile articles, such as warranty, return
     * policy, guide, or shipping profile content.
     */
    LogisticProfile: { code: "logistic-profile", name: "", color: "#607D8B" },
  };
}
