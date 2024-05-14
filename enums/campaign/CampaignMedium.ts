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