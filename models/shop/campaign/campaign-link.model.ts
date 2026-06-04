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

import type { Campaign } from "./campaign.model";

/**
 * UTM link attached to a marketing campaign.
 *
 * Backend source: `App\Shop\Marketing\CampaignLink`, table `shop_campaign_links`.
 * Created by `CampaignLink::NewLink`; counters are updated by campaign/session tracking helpers.
 */
export interface CampaignLink {
  /** Campaign link id. Source: `shop_campaign_links.id`. */
  id: number;

  /** Parent campaign id. Source: `shop_campaign_links.campaign_id`. */
  campaign_id: number;

  /** UTM source (`utm_source`), for example a search engine or newsletter name. */
  source: string;

  /** UTM medium (`utm_medium`) saved as a backend string, not the SDK UI metadata object. */
  medium: CampaignLink.MediumCode | string;

  /** UTM term (`utm_term`) for paid search keywords, or `null`. */
  term: string | null;

  /** UTM content (`utm_content`) for A/B variants, or `null`. */
  content: string | null;

  /** Session count attributed to this link. Source: `shop_campaign_links.sessions`. */
  sessions: number;

  /** Product view count attributed to this link. Source: `shop_campaign_links.products`. */
  products: number;

  /** Add-to-cart count attributed to this link. Source: `shop_campaign_links.add_carts`. */
  add_carts: number;

  /** Checkout/buy intent count attributed to this link. Source: `shop_campaign_links.buys`. */
  buys: number;

  /** Paid/approved order count attributed to this link. Source: `shop_campaign_links.orders`. */
  orders: number;

  /** Paid amount totals keyed by currency code. Source: nullable JSON `shop_campaign_links.payment`. */
  payment: Campaign.AmountByCurrency | null;

  /** Previous/social channel counters keyed by channel/referrer code. Source: nullable JSON `shop_campaign_links.social`. */
  social: Campaign.CounterMap | null;

  /** Desktop session count. Source: `shop_campaign_links.desktop`. */
  desktop: number;

  /** Mobile session count. Source: `shop_campaign_links.mobile`. */
  mobile: number;

  /** Tablet session count. Source: `shop_campaign_links.tablet`. */
  tablet: number;

  /** Creation timestamp. Source: `shop_campaign_links.created_at`. */
  created_at?: string;

  /** Last update timestamp. Source: `shop_campaign_links.updated_at`. */
  updated_at?: string;

  /** Parent campaign relation when `CampaignLink::campaign()` is eager-loaded. */
  campaign?: Campaign;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
import emailIcon from "./assets/mediums/email.svg";
import cpcIcon from "./assets/mediums/cpc.svg";
import socialMediaIcon from "./assets/mediums/social-media.svg";
import affiliateIcon from "./assets/mediums/affiliate.svg";
import qrIcon from "./assets/mediums/qr.svg";
import bannerIcon from "./assets/mediums/banner.svg";
import notificationIcon from "./assets/mediums/notification.svg";
import smsIcon from "./assets/mediums/sms.svg";
import videoIcon from "./assets/mediums/video.svg";
import podcastIcon from "./assets/mediums/podcast.svg";

export namespace CampaignLink {
  /** Backend `medium` values commonly used by the Selldone UI. The database accepts any string. */
  export type MediumCode =
    | "Email"
    | "CPC"
    | "Social-Media"
    | "Affiliate"
    | "QR"
    | "Banner"
    | "Notification"
    | "SMS"
    | "Video"
    | "Podcast";

  /** UI metadata for known UTM mediums. */
  interface IMedium {
    /** Backend medium code stored in `shop_campaign_links.medium`. */
    name: MediumCode;

    /** SVG icon used by dashboard UI. */
    icon: string;
  }

  /** Known campaign medium metadata used by UI; backend persists only `name` as a string. */
  export const Medium: IMedium[] = [
    {
      name: "Email",
      icon: emailIcon,
    },
    {
      name: "CPC",
      icon: cpcIcon,
    },
    {
      name: "Social-Media",
      icon: socialMediaIcon,
    },
    {
      name: "Affiliate",
      icon: affiliateIcon,
    },
    {
      name: "QR",
      icon: qrIcon,
    },
    {
      name: "Banner",
      icon: bannerIcon,
    },
    {
      name: "Notification",
      icon: notificationIcon,
    },
    {
      name: "SMS",
      icon: smsIcon,
    },
    {
      name: "Video",
      icon: videoIcon,
    },
    {
      name: "Podcast",
      icon: podcastIcon,
    },
  ];
}
