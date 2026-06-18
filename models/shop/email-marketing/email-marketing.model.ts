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
 * Shop email marketing campaign.
 *
 * Backend source: `App\Shop\Email\ShopEmail`, table `shop_emails`.
 * Managed by `EmailMarketingController`; list/detail endpoints intentionally omit or hide `html` and `text` in some
 * responses via `makeHidden(['html', 'text'])`. Campaign analytics are stored both on the email row and in daily
 * `shop_email_data` rows with dynamic country-code columns.
 */
export interface EmailMarketing {
  /** Email id. Source: `shop_emails.id`. */
  id: number;

  /** Owning shop id. Source: `shop_emails.shop_id`. */
  shop_id: number;

  /** Optional cluster grouping id. Source: nullable `shop_emails.cluster_id`. */
  cluster_id?: number | null;

  /** Internal campaign name. Source: nullable `shop_emails.name`; required by create/update controller. */
  name: string | null;

  /** Whether the email is queued for sending. Source: `shop_emails.in_que` cast to boolean. */
  in_que: boolean;

  /** Approver user id, or `null`. Source: nullable `shop_emails.user_id`. */
  user_id: number | null;

  /** Review status. Backend enum: `PENDING`, `ACCEPT`, `REJECT`, or `null` before review. */
  approve: EmailMarketing.ApproveStatus | null;

  /** Whether the email has been sent. Source: `shop_emails.sent` cast to boolean. */
  sent: boolean;

  /** Scheduled send timestamp, or `null` for unscheduled/draft emails. */
  schedule_at: string | null;

  /** Builder JSON structure used to render the email. Source: nullable JSON `shop_emails.structure`. */
  structure?: EmailMarketing.Structure | null;

  /** Rendered HTML. Hidden by several controller responses. Source: nullable text `shop_emails.html`. */
  html?: string | null;

  /** Plain text generated from HTML. Hidden by several controller responses. Source: nullable text `shop_emails.text`. */
  text?: string | null;

  /** Customer filter array consumed by `ShopCustomersController::ApplyFilter`. */
  filter: EmailMarketing.Filter[] | null;

  /** Email subject. Source: nullable text `shop_emails.subject`. */
  subject: string | null;

  /** Local sender name, not a full email address. Source: nullable text `shop_emails.from`. */
  from: string | null;

  /** Number of attempted sends. Source: `shop_emails.sends`. */
  sends: number;

  /** Number of delivered emails. Source: `shop_emails.delivers`. */
  delivers: number;

  /** Number of tracked views/opens. Source: `shop_emails.views`. */
  views: number;

  /** Number of tracked link clicks. Source: `shop_emails.clicks`. */
  clicks: number;

  /** Number of purchases attributed to this email. Source: `shop_emails.buys`. */
  buys: number;

  /** Attributed purchase amount in `currency`, or `null`. Source: nullable `shop_emails.amount_buy`. */
  amount_buy: number | null;

  /** Currency code for billing/attribution. Source: `shop_emails.currency`. */
  currency: string;

  /** Last send/render error message, or `null`. Source: nullable text `shop_emails.error`. */
  error: string | null;

  /** Soft-delete timestamp when included. Source: `shop_emails.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `shop_emails.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `shop_emails.updated_at`. */
  updated_at?: string | null;

  /** Approver relation when `ShopEmail::user()` is eager-loaded. */
  user?: Record<string, unknown> | null;

  /** Tracked action relations returned by `api_getShopEmail`. */
  actions?: EmailMarketing.Action[];

  /** Daily/country analytics relation when `ShopEmail::data()` is eager-loaded. */
  data?: EmailMarketing.AnalyticsRow[];

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown> | null;
}

export namespace EmailMarketing {
  /** Backend enum `App\Shop\Email\enums\EmailApproveStatus`. */
  export type ApproveStatus = "PENDING" | "ACCEPT" | "REJECT";

  /** Email builder JSON is flexible; known keys are read by `ShopEmail::getActions()` and the email Blade template. */
  export interface Structure {
    /** Maximum email body width. */
    max_width?: string;

    /** Email page background color. */
    page_color?: string;

    /** Default section background color. */
    sections_color?: string;

    /** Primary brand color used by builder templates. */
    color_1?: string;

    /** Secondary brand color used by builder templates. */
    color_2?: string;

    /** Google-font title family name. */
    font_title?: string;

    /** Google-font body family name. */
    font_text?: string;

    /** Header block payload. */
    header?: HeaderStructure | null;

    /** Footer block payload. */
    footer?: { description?: string | null; [key: string]: unknown } | null;

    /** Ordered content sections. */
    sections?: EmailSection[];

    [key: string]: unknown;
  }

  /** Header block payload from backend phpstan `EmailHeaderStructure`. */
  export interface HeaderStructure {
    bg_image?: string | null;
    image?: string | null;
    image_width?: string | null;
    image_max_width?: string | null;
    align?: string;
    title?: string | null;
    sub_title?: string | null;
    action?: ActionPayload | null;
    [key: string]: unknown;
  }

  /** Customer filter JSON item interpreted by `ShopCustomersController::ApplyFilter`. */
  export type Filter =
    | { type: "REGISTER_DATE"; start?: string | null; end?: string | null }
    | { type: "LAST_BUY_DATE"; start?: string | null; end?: string | null }
    | { type: "LOGIN_DATE"; start?: string | null; end?: string | null }
    | { type: "LEVEL"; levels: string[] }
    | { type: "SUBSCRIBED"; subscribed: boolean }
    | { type: "NOT_PURCHASED" }
    | { type: "SEX"; sex: string[] }
    | { type: "LOCATION"; countries: string[] }
    | { type: "LIMIT"; limit: number }
    | { type: "SEGMENTS"; segments: string[]; or?: boolean }
    | (Record<string, unknown> & { type?: string });

  /** Trackable action extracted from the email builder structure. */
  export interface ActionPayload {
    href?: string;
    text?: string;
    tracking?: boolean;
    dark?: boolean;
    outline?: boolean;
    rounded?: boolean;
    large?: boolean;
    xlarge?: boolean;
    depressed?: boolean;
    color?: string;
    [key: string]: unknown;
  }

  /** Shared known fields for email content sections. */
  export interface SectionBase {
    type: string;
    class?: string;
    bg_color?: string;
    bg_image?: string | null;
    dark?: boolean;
    align?: string;
    span?: string | null;
    title?: string | null;
    message?: string | null;
    action?: ActionPayload | null;
    actions?: ActionPayload[];
    [key: string]: unknown;
  }

  /** Text section payload. */
  export interface TextSection extends SectionBase {
    type: "text";
    text?: string | null;
  }

  /** Image section payload. */
  export interface ImageSection extends SectionBase {
    type: "image";
    image?: string | null;
    image_max_width?: string | null;
    image_max_height?: string | null;
    url?: string | null;
  }

  /** Product section payload. Product action URLs can be derived by backend `ShopEmail::getActions()`. */
  export interface ProductSection extends SectionBase {
    type: "product";
    product?: number | string | null;
    reverse?: boolean;
  }

  /** One column inside a `two-columns` section. */
  export interface ColumnPayload {
    title?: string | null;
    image?: string | null;
    html?: string | null;
    align?: string;
    action?: ActionPayload | null;
    [key: string]: unknown;
  }

  /** Two-column section payload. */
  export interface TwoColumnsSection extends SectionBase {
    type: "two-columns";
    s1: ColumnPayload;
    s2: ColumnPayload;
  }

  /** Known email section union with an escape hatch for legacy section types. */
  export type EmailSection =
    | TextSection
    | ImageSection
    | ProductSection
    | TwoColumnsSection
    | SectionBase;

  /** Action relation rows from `shop_email_actions`. */
  export interface Action {
    id?: number;
    email_id?: number;
    url: string | null;
    label: string | null;
    clicks: number;
    created_at?: string | null;
    updated_at?: string | null;
  }

  /** Analytics rows returned by `ShopEmail::data()`; country columns are dynamic ISO-3166 alpha-2 keys. */
  export interface AnalyticsRow {
    uid?: number;
    email_id?: number;
    sends?: number;
    delivers?: number;
    views?: number;
    clicks?: number;
    buys?: number;
    amount_buy?: number | null;
    desktop?: number;
    mobile?: number;
    tablet?: number;
    created_at?: string | null;
    updated_at?: string | null;
    email?: EmailMarketing | Record<string, unknown> | null;
    [country_or_metric: string]: unknown;
  }
}
