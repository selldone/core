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
 * Represents the structure for each campaign medium.
 */
interface CampaignMediumType {
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
export const CampaignMedium: CampaignMediumType[] = [
  {
    name: "Email",
    icon: require("./assets/mediums/email.svg"),
  },
  {
    name: "CPC", // Cost Per Click
    icon: require("./assets/mediums/cpc.svg"),
  },
  {
    name: "Social-Media",
    icon: require("./assets/mediums/social-media.svg"),
  },
  {
    name: "Affiliate",
    icon: require("./assets/mediums/affiliate.svg"),
  },
  {
    name: "QR",
    icon: require("./assets/mediums/qr.svg"),
  },
  {
    name: "Banner",
    icon: require("./assets/mediums/banner.svg"),
  },
  {
    name: "Notification",
    icon: require("./assets/mediums/notification.svg"),
  },
  {
    name: "SMS",
    icon: require("./assets/mediums/sms.svg"),
  },
  {
    name: "Video",
    icon: require("./assets/mediums/video.svg"),
  },
  {
    name: "Podcast",
    icon: require("./assets/mediums/podcast.svg"),
  },
];
