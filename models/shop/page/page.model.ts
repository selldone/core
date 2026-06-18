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
 * Shop page-builder page.
 *
 * Backend source: `App\Storefront\Pages\Page`, table `pages`.
 * Managed by `PageBuilder*Controller`; public page endpoints often select only `id`, `content`, `css`, `title`,
 * `name`, `direction`, and `background`. `audit` is hidden by the Eloquent model unless explicitly exposed.
 */
export interface Page {
  /** Page id. Source: `pages.id`. */
  id: number;

  /** Creator/editor user id. Source: `pages.user_id`. */
  user_id: number;

  /** Owning shop id, or `null` for global Selldone pages. Source: nullable `pages.shop_id`. */
  shop_id: number | null;

  /** Optional cluster grouping id. Source: nullable `pages.cluster_id`. */
  cluster_id?: number | null;

  /** Whether the page is published and public. Source: `pages.published` cast to boolean. */
  published: boolean;

  /** Page URL slug/name, max 64 chars, unique per shop. Source: `pages.name`. */
  name: string;

  /** Admin label color, or `null`. Source: nullable `pages.color`. */
  color: string | null;

  /** Admin-only note, or `null`. Source: nullable `pages.note`. */
  note: string | null;

  /** Card/cover image path, or `null`. Source: nullable `pages.image`. */
  image: string | null;

  /** SEO/list description, or `null`. Source: nullable `pages.description`. */
  description: string | null;

  /** Text direction. Backend enum: `rtl`, `ltr`, or `auto`. */
  direction: Page.Direction;

  /** Public page title. Source: `pages.title`. */
  title: string;

  /** Page builder JSON content. Source: `pages.content` cast from JSON/longtext by Eloquent. */
  content: Page.IContent | Record<string, unknown> | null;

  /** Background style/image value used by renderer, or `null`. Source: nullable `pages.background`. */
  background: string | null;

  /** Embedded page ids extracted from content. Source: nullable array `pages.embedded_page_ids`. */
  embedded_page_ids?: number[] | null;

  /** Static rendered HTML cache, or `null`. Source: nullable `pages.html`. */
  html: string | null;

  /** Static rendered CSS/cache data. Source: nullable JSON `pages.css`. */
  css: Page.CssPayload | null;

  /** SEO JSON payload, or `null`. Source: nullable `pages.seo`. */
  seo: Page.SeoPayload | null;

  /** Page visits count. Source: `pages.visits`. */
  visits: number;

  /** Mobile user-behavior heatmap/stat payload. Source: nullable JSON `pages.mobile`. */
  mobile: Page.UserBehaviorData | null;

  /** Tablet user-behavior heatmap/stat payload. Source: nullable JSON `pages.tablet`. */
  tablet: Page.UserBehaviorData | null;

  /** Desktop user-behavior heatmap/stat payload. Source: nullable JSON `pages.desktop`. */
  desktop: Page.UserBehaviorData | null;

  /** AI prompt describing the page, or `null`. Source: nullable `pages.prompt`. */
  prompt?: string | null;

  /** SEO audit payload. Source: nullable JSON `pages.audit`; hidden by default. */
  audit?: Record<string, unknown> | null;

  /** Last SEO audit timestamp. Source: nullable `pages.audit_at`. */
  audit_at?: string | null;

  /** Soft-delete timestamp when included. Source: `pages.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp serialized by Laravel. Source: `pages.created_at`. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. Source: `pages.updated_at`. */
  updated_at?: string | null;

  /** Uploaded image relations when `Page::images()` is eager-loaded. */
  images?: Page.Image[];

  /** Uploaded video relations when `Page::videos()` is eager-loaded. */
  videos?: Page.Video[];

  /** Page history relations when `Page::histories()` is eager-loaded. */
  histories?: Page.History[];

  /** Product relations using this page as their product page/template. */
  products?: Record<string, unknown>[];

  /** Notes morph relation when eager-loaded by page-builder controllers. */
  notes?: Record<string, unknown>[];

  /** Creator relation when eager-loaded. */
  user?: Record<string, unknown> | null;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown> | null;

  /** Cluster relation when eager-loaded through `HasClusterTrait`. */
  cluster?: Record<string, unknown> | null;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Page {
  /** Backend enum for `pages.direction`. */
  export type Direction = "rtl" | "ltr" | "auto";

  /** Page-builder content root. The backend stores this as JSON and preserves extra keys. */
  export interface IContent {
    /** Optional document title inside builder JSON. */
    title?: string;

    /** Page-builder sections. */
    sections?: ISection[];

    /** Global page style. */
    style?: Partial<IStyle>;

    /** Additional builder keys preserved by the renderer. */
    [key: string]: unknown;
  }

  export interface ISection {
    /** Legacy section name. @deprecated */
    name?: string;

    /** Stable section id used by newer page-builder content. */
    uid?: string;

    /** Legacy v1 section data. @deprecated */
    data?: unknown;

    /** Human-readable builder label. */
    label?: string;

    /** Component object tree used by v2 renderer. */
    object?: Array<{
      component?: string;
      background?: unknown;
      style?: Record<string, unknown>;
      classes?: string[];
      data?: unknown;
      children?: unknown;
      props?: Record<string, unknown>;
      [key: string]: unknown;
    }>;

    /** Extra section keys preserved by the backend. */
    [key: string]: unknown;
  }

  export interface IStyle {
    /** Responsive root font sizes. */
    font_size?: number;
    font_size_sm?: number;
    font_size_md?: number;
    font_size_lg?: number;
    font_size_xl?: number;
    font_size_xxl?: number;
    h1_size?: number;
    h1_size_sm?: number;
    h1_size_md?: number;
    h1_size_lg?: number;
    h1_size_xl?: number;
    h1_size_xxl?: number;
    h2_size?: number;
    h2_size_sm?: number;
    h2_size_md?: number;
    h2_size_lg?: number;
    h2_size_xl?: number;
    h2_size_xxl?: number;
    h3_size?: number;
    h3_size_sm?: number;
    h3_size_md?: number;
    h3_size_lg?: number;
    h3_size_xl?: number;
    h3_size_xxl?: number;
    h4_size?: number;
    h4_size_sm?: number;
    h4_size_md?: number;
    h4_size_lg?: number;
    h4_size_xl?: number;
    h4_size_xxl?: number;
    h5_size?: number;
    h5_size_sm?: number;
    h5_size_md?: number;
    h5_size_lg?: number;
    h5_size_xl?: number;
    h5_size_xxl?: number;
    h6_size?: number;
    h6_size_sm?: number;
    h6_size_md?: number;
    h6_size_lg?: number;
    h6_size_xl?: number;
    h6_size_xxl?: number;
    p_size?: number;
    p_size_sm?: number;
    p_size_md?: number;
    p_size_lg?: number;
    p_size_xl?: number;
    p_size_xxl?: number;

    /** Background and font settings. */
    bg_color?: string | null;
    fonts?: string[];
    bg_gradient?: unknown[];
    bg_size?: string;
    bg_custom?: string | null;
    bg_repeat?: string | null;

    /** Palette colors generated/stored by the page builder. */
    plate_light_1?: string;
    plate_dark_1?: string;
    plate_light_2?: string;
    plate_dark_2?: string;
    plate_light_3?: string;
    plate_dark_3?: string;
    plate_light_4?: string;
    plate_dark_4?: string;
    plate_light_5?: string;
    plate_dark_5?: string;
    plate_light_6?: string;
    plate_dark_6?: string;
    plate_light_7?: string;
    plate_dark_7?: string;
    plate_light_8?: string;
    plate_dark_8?: string;
    plate_light_9?: string;
    plate_dark_9?: string;
    plate_light_10?: string;
    plate_dark_10?: string;
    plate_light_11?: string;
    plate_dark_11?: string;

    /** Extra style tokens preserved by builder versions. */
    [key: string]: unknown;
  }

  /** Static CSS cache can be object-like or array-like depending on renderer version. */
  export type CssPayload = Record<string, unknown> | unknown[];

  /** SEO payload saved by the page builder. */
  export type SeoPayload = Record<string, unknown>;

  /** Per-device behavior payload written by `PageBuilderUserBehaviorController`. */
  export interface UserBehaviorData {
    move?: unknown;
    click?: unknown;
    scroll?: unknown;
    count?: number;
    [key: string]: unknown;
  }

  /** Row from `page_images`. */
  export interface Image {
    id: number;
    page_id: number;
    path: string;
    size?: number;
    width?: number;
    height?: number;
    alt?: string | null;
    page?: Page | null;
    deleted_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
  }

  /** Row from `page_videos`. */
  export interface Video {
    id: number;
    page_id: number;
    path: string;
    size?: number;
    page?: Page | null;
    deleted_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    [key: string]: unknown;
  }

  /** Row from `pages_history`. */
  export interface History {
    id: number;
    page_id?: number;
    content?: IContent | Record<string, unknown> | null;
    persistent: boolean;
    user_id?: number | null;
    page?: Page | null;
    created_at?: string | null;
    updated_at?: string | null;
  }
}
