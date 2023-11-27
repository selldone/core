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
 * Interface representing the structure of an application category.
 * @interface
 * @property {string} code - The unique code identifier for the application category.
 * @property {string} name - The name of the application category, typically used for display purposes.
 * @property {string} icon - The icon representing the application category, usually a class name for a font icon.
 */
interface IApplicationCategory {
  code: string;
  name: string;
  icon: string;
}

/**
 * Enumerates various application categories with associated metadata. This is part of the Selldone open-source library,
 * enabling developers to build custom storefronts and back offices.
 * Each category is defined with a unique code, a name for display, and an icon for visual representation.
 */
export const ApplicationCategories: Record<string, IApplicationCategory> = {
  TRACKING: {
    code: "TRACKING",
    name: "global.application_categories.tracking",
    icon: "fas fa-chart-line",
  },
  PAYMENT: {
    code: "PAYMENT",
    name: "global.application_categories.payment",
    icon: "fas fa-wallet",
  },
  SEO: {
    code: "SEO",
    name: "global.application_categories.seo",
    icon: "fas fa-trophy",
  },
  CRM: {
    code: "CRM",
    name: "global.application_categories.crm",
    icon: "fas fa-users",
  },
  TRANSPORTATION: {
    code: "TRANSPORTATION",
    name: "global.application_categories.transportation",
    icon: "fas fa-shipping-fast",
  },
  AUTOMATION: {
    code: "AUTOMATION",
    name: "global.application_categories.automation",
    icon: "fas fa-magic",
  },
  INVENTORY: {
    code: "INVENTORY",
    name: "global.application_categories.inventory",
    icon: "fas fa-boxes",
  },
  ACCOUNTING: {
    code: "ACCOUNTING",
    name: "global.application_categories.accounting",
    icon: "fas fa-cash-register",
  },
  MARKETING: {
    code: "MARKETING",
    name: "global.application_categories.marketing",
    icon: "fas fa-funnel-dollar",
  },
  ADVERTISING: {
    code: "ADVERTISING",
    name: "global.application_categories.advertising",
    icon: "fas fa-ad",
  },
  STAFF: {
    code: "STAFF",
    name: "global.application_categories.staff",
    icon: "fas fa-id-card-alt",
  },
  INCENTIVE: {
    code: "INCENTIVE",
    name: "global.application_categories.incentive",
    icon: "fas fa-mug-hot",
  },
  SHOP: {
    code: "SHOP",
    name: "global.application_categories.shop",
    icon: "fas fa-store",
  },
};
