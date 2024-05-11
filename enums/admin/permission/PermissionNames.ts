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
 * Represents the structure of a permission object in Selldone.
 */
interface IPermissionName {
  code: string;
  name: string;
  title: string;
  image: string;
}

/**
 * Contains the predefined permission names and details used in Selldone.
 *
 * Note: These permission names are intended for use in administrative contexts only and should not
 * be used in storefront or backoffice implementations.
 */

export const PermissionNames: Record<string, IPermissionName> = {
  Admin: {
    code: "Admin",
    name: "Administer",
    title: "Full admin of Selldone.",
    image: require("../../../enums/admin/assets/badges/user-admin.svg"),
  },
  Content: {
    code: "Content",
    name: "Content",
    title: "Content management.",
    image: require("../../../enums/admin/assets/badges/user-content.svg"),
  },
  Marketing: {
    code: "Marketing",
    name: "Marketing",
    title: "Marketing, Email and campaign management of Selldone.",
    image: require("../../../enums/admin/assets/badges/user-marketing.svg"),
  },
  SEO: {
    code: "SEO",
    name: "SEO",
    title: "SEO.",
    image: require("../../../enums/admin/assets/badges/user-seo.svg"),
  },
  Financial: {
    code: "Financial",
    name: "Financial",
    title: "Financial, Gateway and transactions.",
    image: require("../../../enums/admin/assets/badges/user-finance.svg"),
  },
  Technical: {
    code: "Technical",
    name: "Technical",
    title: "Technical, Server monitoring.",
    image: require("../../../enums/admin/assets/badges/user-tech.svg"),
  },
  Identify: {
    code: "Identify",
    name: "Identify",
    title: "KYC.",
    image: require("../../../enums/admin/assets/badges/user-verification.svg"),
  },
  Partner: {
    code: "Partner",
    name: "Partner",
    title: "Affiliate and partner management.",
    image: require("../../../enums/admin/assets/badges/user-partner.svg"),
  },
  Badge: {
    code: "Badge",
    name: "Badge",
    title: "Badges.",
    image: require("../../../enums/admin/assets/badges/user-badge.svg"),
  },
  Shop: {
    code: "Shop",
    name: "Shop",
    title: "Shops management.",
    image: require("../../../enums/admin/assets/badges/user-shop.svg"),
  },
  Company: {
    code: "Company",
    name: "Company",
    title: "Company management.",
    image: require("../../../enums/admin/assets/badges/user-company.svg"),
  },
  App: {
    code: "App",
    name: "Application",
    title: "Application management.",
    image: require("../../../enums/admin/assets/badges/user-apps.svg"),
  },

  Support: {
    code: "Support",
    name: "Support",
    title: "Manage and answer support tickets.",
    image: require("../../../enums/admin/assets/badges/user-support.svg"),
  },

  Community: {
    code: "Community",
    name: "Community",
    title: "Manage and moderate communities (Official & Shops).",
    image: require("../../../enums/admin/assets/badges/user-community.svg"),
  },
};
