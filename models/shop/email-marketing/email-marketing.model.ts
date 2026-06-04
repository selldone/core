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
 * responses via `makeHidden(['html', 'text'])`.
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
  created_at?: string;

  /** Last update timestamp. Source: `shop_emails.updated_at`. */
  updated_at?: string;

  /** Approver relation when `ShopEmail::user()` is eager-loaded. */
  user?: Record<string, unknown> | null;

  /** Tracked action relations returned by `api_getShopEmail`. */
  actions?: EmailMarketing.Action[];

  /** Daily/country analytics relation when `ShopEmail::data()` is eager-loaded. */
  data?: EmailMarketing.AnalyticsRow[];

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown>;
}

export namespace EmailMarketing {
  /** Backend enum `App\Shop\Email\enums\EmailApproveStatus`. */
  export type ApproveStatus = "PENDING" | "ACCEPT" | "REJECT";

  /** Email builder JSON is flexible; known keys are read by `ShopEmail::getActions()`. */
  export interface Structure {
    header?: { action?: ActionPayload; [key: string]: unknown };
    sections?: Array<Record<string, unknown> & { actions?: ActionPayload[]; action?: ActionPayload }>;
    font_title?: string;
    font_text?: string;
    [key: string]: unknown;
  }

  /** Customer filter JSON item; exact keys are interpreted by `ShopCustomersController::ApplyFilter`. */
  export type Filter = Record<string, unknown>;

  /** Trackable action extracted from the email builder structure. */
  export interface ActionPayload {
    href?: string;
    text?: string;
    tracking?: boolean;
    [key: string]: unknown;
  }

  /** Action relation rows from `shop_email_actions`. */
  export interface Action {
    id?: number;
    email_id?: number;
    url: string | null;
    label: string | null;
    clicks: number;
    created_at?: string;
    updated_at?: string;
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
    created_at?: string;
    updated_at?: string;
    [country_or_metric: string]: unknown;
  }
}
