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
 * Managed by `CampaignController`; list endpoints return a selected subset and `api_getShopCampaign` may include
 * `page`, `discount_code`, `links`, and filtered analytics `data` outside the model object.
 */
export interface Campaign {
  /** Campaign id. Source: `shop_campaigns.id`. */
  id: number;

  /** Owning shop id. Source: `shop_campaigns.shop_id`. */
  shop_id: number;

  /** Optional cluster grouping id. Source: nullable `shop_campaigns.cluster_id`. */
  cluster_id?: number | null;

  /** Campaign display/name key. Source: `shop_campaigns.name`; required by `api_addShopCampaign`. */
  name: string;

  /** Whether the campaign is enabled. Source: `shop_campaigns.enable` cast to boolean. */
  enable: boolean;

  /** Campaign activation start timestamp, or `null` when no start limit is configured. */
  start_at: string | null;

  /** Campaign activation end timestamp, or `null` when no end limit is configured. */
  end_at: string | null;

  /** Whether the backend auto-applies this campaign to the shop. Source: `shop_campaigns.auto`. */
  auto: boolean;

  /** Banner configuration JSON filtered by `CampaignController::api_addShopCampaign`. */
  banner: Campaign.Banner | null;

  /** Linked discount code id, or `null`. Source: nullable `shop_campaigns.discount_id`. */
  discount_id: number | null;

  /** Linked landing page id, or `null`. Source: nullable `shop_campaigns.page_id`. */
  page_id: number | null;

  /** Notification widget configuration JSON filtered by `CampaignController::api_addShopCampaign`. */
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
  created_at?: string;

  /** Last update timestamp. Source: `shop_campaigns.updated_at`. */
  updated_at?: string;

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
  /** Flexible JSON object saved in `shop_campaigns.banner`. */
  export interface Banner {
    message?: string;
    bg?: string;
    dark?: boolean;
    icon_bg?: string;
    icon?: string;
    anim_height?: number;
    anim_width?: number;
    anim?: string;
    page_name?: string;
    bg_image?: string;
    repeat?: boolean;
    [key: string]: unknown;
  }

  /** Flexible notification JSON saved in `shop_campaigns.notification`. */
  export interface Notification {
    image?: string;
    bg?: string;
    url?: string;
    color?: string;
    text_color?: string;
    message?: string;
    radius?: number;
    title?: string;
    action?: string;
    width?: number;
    height?: number;
    btn_color?: string;
    btn_text_color?: string;
    delay?: number;
    enable?: boolean;
    persist?: boolean;
    [key: string]: unknown;
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
    created_at?: string;
    updated_at?: string;
    [country_or_metric: string]: unknown;
  }
}
