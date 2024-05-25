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
 * Represents the details of a campaign link.
 *
 * @property {number} id - The unique identifier for the campaign link.
 * @property {number} campaign_id - The identifier for the associated campaign.
 * @property {string} source - The source of the campaign (e.g., search engine, newsletter).
 * @property {string} medium - The medium of the campaign (e.g., email, cost-per-click).
 * @property {string} term - The keywords for the campaign (used for paid search).
 * @property {string} content - The content for A/B testing and content-targeted ads.
 * @property {number} sessions - The count of sessions.
 * @property {number} products - The number of products involved.
 * @property {number} add_carts - The number of items added to carts.
 * @property {number} buys - The number of buys.
 * @property {number} orders - The number of approved buys and payments.
 * @property {Array<any>} payment - The array of payments by currency.
 * @property {Array<string>} social - The array of previous links in social media.
 * @property {number} desktop - The number of desktop sessions.
 * @property {number} mobile - The number of mobile sessions.
 * @property {number} tablet - The number of tablet sessions.
 * @property {Campaign} campaign - The associated campaign details.
 */

export interface CampaignLink {
  id: number; // The unique identifier for the campaign link.
  campaign_id: number; // The unique identifier for the campaign that the link belongs to.
  source: string; // Use utm_source to identify a search engine, newsletter name, or other source.
  medium: (typeof CampaignLink.Medium)[number]; // Use utm_medium to identify a medium such as email or cost-per- click.
  term: string; // Used for paid search. Use utm_term to note the keywords for this ad.
  content: string; // Used for A/B testing and content-targeted ads. Use utm_content to differentiate ads or links that point to the same URL. Examples: logolink or textlink
  sessions: number; // Sessions count.
  products: number; // The number of products associated with the campaign link.
  add_carts: number; // The number of add to cart actions associated with the campaign link.
  buys: number; // The number of buy actions associated with the campaign link.
  orders: number; // The number of approved buys and payments associated with the campaign link.
  payment: any[]; // Array of payments by currency. You might want to define a more specific type for payment items.
  social: any[]; // Array of previous links (in social). You might want to define a more specific type for social items.
  desktop: number; // The number of desktop users associated with the campaign link.
  mobile: number; // The number of mobile users associated with the campaign link.
  tablet: number; // The number of tablet users associated with the campaign link.
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
  /**
   * Represents the structure for each campaign medium.
   */
  interface IMedium {
    /**
     * The name of the campaign medium.
     */
    name: string;

    /**
     * The icon associated with the campaign medium.
     * Icons are dynamically loaded using the require function and the path to the SVG file.
     */
    icon: string;
  }

  /**
   * Enumerates various campaign mediums with associated metadata.
   */
  export const Medium: IMedium[] = [
    {
      name: "Email",
      icon: emailIcon,
    },
    {
      name: "CPC", // Cost Per Click
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
