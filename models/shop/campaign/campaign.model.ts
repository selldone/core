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

import type { Page } from "../page/page.model";
import type { CampaignLink } from "./campaign-link.model";

/**
 * Shop marketing campaign.
 *
 * Backend source: `App\Shop\Marketing\Campaign`, table `shop_campaigns`.
 * Managed by `CampaignController`.
 *
 * Campaign rows store the persisted marketing configuration plus aggregate counters. List endpoints return a selected
 * subset of columns and `api_getShopCampaign` returns the campaign together with `page`, `discount_code`, `links`, and a
 * separate filtered analytics `data` array.
 */
export interface Campaign {
  /** Campaign id. Source: `shop_campaigns.id`. */
  id: number;

  /** Owning shop id. Source: `shop_campaigns.shop_id`. */
  shop_id: number;

  /** Optional shop cluster grouping id. Added by shop cluster migration; nullable `shop_campaigns.cluster_id`. */
  cluster_id?: number | null;

  /** Campaign display name. Source: `shop_campaigns.name`; required by `api_addShopCampaign`. */
  name: string;

  /** Whether the campaign is enabled. Source: `shop_campaigns.enable` cast to boolean. */
  enable: boolean;

  /** Campaign activation start timestamp, or `null` when no start limit is configured. */
  start_at: string | null;

  /** Campaign activation end timestamp, or `null` when no end limit is configured. */
  end_at: string | null;

  /** Whether the backend auto-applies this campaign to the shop. Source: `shop_campaigns.auto`. */
  auto: boolean;

  /** Banner configuration JSON filtered by `CampaignController::api_addShopCampaign` allow-list. */
  banner: Campaign.Banner | null;

  /** Linked discount code id, or `null`. Source: nullable `shop_campaigns.discount_id`. */
  discount_id: number | null;

  /** Linked landing page id, or `null`. Source: nullable `shop_campaigns.page_id`. */
  page_id: number | null;

  /** Notification widget configuration JSON filtered by `CampaignController::api_addShopCampaign` allow-list. */
  notification: Campaign.Notification | null;

  /** Total tracked campaign sessions. Source: `shop_campaigns.sessions`. */
  sessions: number;

  /** Product view count attributed to this campaign. Source: `shop_campaigns.products`. */
  products: number;

  /** Add-to-cart count attributed to this campaign. Source: `shop_campaigns.add_carts`. */
  add_carts: number;

  /** Checkout/buy intent count attributed to this campaign. Source: `shop_campaigns.buys`. */
  buys: number;

  /** Paid/approved order count attributed to this campaign. Source: `shop_campaigns.orders`. */
  orders: number;

  /** Paid amount totals keyed by currency code. Source: nullable JSON `shop_campaigns.payment`. */
  payment: Campaign.AmountByCurrency | null;

  /** Previous/social channel counters keyed by channel/referrer code. Source: nullable JSON `shop_campaigns.social`. */
  social: Campaign.CounterMap | null;

  /** Desktop session count. Source: `shop_campaigns.desktop`. */
  desktop: number;

  /** Mobile session count. Source: `shop_campaigns.mobile`. */
  mobile: number;

  /** Tablet session count. Source: `shop_campaigns.tablet`. */
  tablet: number;

  /** Soft-delete timestamp when included. Source: `shop_campaigns.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `shop_campaigns.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `shop_campaigns.updated_at`. */
  updated_at?: string | null;

  /** Landing page relation when `Campaign::page()` is eager-loaded. */
  page?:
    | Pick<
        Page,
        | "id"
        | "user_id"
        | "published"
        | "title"
        | "updated_at"
        | "visits"
        | "name"
        | "color"
        | "note"
        | "image"
      >
    | Page
    | null;

  /** Discount code relation serialized from backend relation `discountCode()`. */
  discount_code?: Record<string, unknown> | null;

  /** UTM links relation when `Campaign::links()` is eager-loaded. */
  links?: CampaignLink[];

  /** Daily/country analytics relation when `Campaign::data()` is eager-loaded. */
  data?: Campaign.AnalyticsRow[];

  /** Latest analytics row serialized from backend relation `lastData()`. */
  last_data?: Campaign.AnalyticsRow | null;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown>;
}

export namespace Campaign {
  /** Numeric UI dimensions accepted either as numbers or numeric strings by MCP/API callers. */
  export type NumericLike = number | string;

  /** Animation payload accepted by campaign banner schema. */
  export type AnimationPayload =
    | string
    | Record<string, unknown>
    | unknown[]
    | null;

  /** Campaign banner JSON saved in `shop_campaigns.banner`; unknown keys are stripped by the backend controller. */
  export interface Banner {
    /** Banner text message. */
    message?: string | null;

    /** Banner background color or style token. */
    bg?: string | null;

    /** Whether clients should render the banner in dark mode. */
    dark?: boolean;

    /** Icon background color. */
    icon_bg?: string | null;

    /** Icon name/path used by the campaign banner. */
    icon?: string | null;

    /** Animation height. Backend accepts integer, number, or numeric string. */
    anim_height?: NumericLike | null;

    /** Animation width. Backend accepts integer, number, or numeric string. */
    anim_width?: NumericLike | null;

    /** Lottie/object/string animation payload. */
    anim?: AnimationPayload;

    /** Optional attached landing page name/slug shown by clients. */
    page_name?: string | null;

    /** Banner background image path. */
    bg_image?: string | null;

    /** Whether the background image should repeat. */
    repeat?: boolean;
  }

  /** Campaign notification popup JSON saved in `shop_campaigns.notification`; unknown keys are stripped by the backend. */
  export interface Notification {
    /** Notification foreground image path; upload endpoint can replace this slot. */
    image?: string | null;

    /** Notification background color/path; upload endpoint can replace this slot when `type=bg`. */
    bg?: string | null;

    /** Target URL opened by the notification action. */
    url?: string | null;

    /** Main text color/accent token. */
    color?: string | null;

    /** Body text color. */
    text_color?: string | null;

    /** Notification body message. */
    message?: string | null;

    /** Popup corner radius. Backend accepts integer, number, or numeric string. */
    radius?: NumericLike | null;

    /** Notification title. */
    title?: string | null;

    /** Action button label. */
    action?: string | null;

    /** Popup width. Backend accepts integer, number, or numeric string. */
    width?: NumericLike | null;

    /** Popup height. Backend accepts integer, number, or numeric string. */
    height?: NumericLike | null;

    /** Action button background color. */
    btn_color?: string | null;

    /** Action button text color. */
    btn_text_color?: string | null;

    /** Display delay in milliseconds/seconds as interpreted by clients. */
    delay?: NumericLike | null;

    /** Whether the notification popup is enabled. */
    enable?: boolean;

    /** Whether clients should persist dismissal state. */
    persist?: boolean;
  }

  /** Numeric totals keyed by ISO currency code. */
  export type AmountByCurrency = Record<string, number>;

  /** Generic numeric counter map used by campaign tracking JSON fields. */
  export type CounterMap = Record<string, number>;

  /** Analytics rows returned by `Campaign::data()` / `lastData()`; country columns are dynamic ISO-3166 alpha-2 keys. */
  export interface AnalyticsRow {
    uid?: number;
    campaign_id?: number;
    sessions?: number;
    products?: number;
    add_carts?: number;
    buys?: number;
    orders?: number;
    payment?: AmountByCurrency | null;
    social?: CounterMap | null;
    desktop?: number;
    mobile?: number;
    tablet?: number;
    created_at?: string | null;
    updated_at?: string | null;
    campaign?: Campaign | Record<string, unknown> | null;
    [country_or_metric: string]: unknown;
  }
}

export namespace Campaign {
  /** JSON primitive accepted by campaign metadata and translation payloads. */
  export type ApiJsonPrimitive = string | number | boolean | null;

  /** JSON object used for campaign targeting, metadata, and relation projections. */
  export interface ApiJsonObject {
    [key: string]: ApiJsonValue | undefined;
  }

  /** JSON array used for campaign targeting, metadata, and relation projections. */
  export interface ApiJsonArray extends Array<ApiJsonValue> {}

  export type ApiJsonValue = ApiJsonPrimitive | ApiJsonObject | ApiJsonArray;

  /** Compact campaign projection embedded in shop public-info and analytics payloads. */
  export interface CompactProjection {
    id: number;
    shop_id?: number;
    title?: string | null;
    name?: string | null;
    code?: string | null;
    enable?: boolean;
    start?: string | null;
    end?: string | null;
  }

  /** Safe partial update payload for campaign setup and scheduling endpoints. */
  export interface ApiPatch {
    title?: string | null;
    name?: string | null;
    description?: string | null;
    code?: string | null;
    enable?: boolean;
    start?: string | null;
    end?: string | null;
    budget?: number | null;
    target?: ApiJsonObject | null;
    meta?: ApiJsonObject | null;
    translations?: Record<string, ApiJsonObject> | null;
  }
}
