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
