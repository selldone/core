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
 * Represents an application with various properties and settings.
 */
export interface Application {
  /**
   * The unique identifier of the application.
   * @type {number}
   */
  id: number;

  /**
   * The unique identifier of the company associated with the application.
   * @type {number}
   */
  company_id: number;

  /**
   * The mode of the application.
   * @type {string}
   * @see Application.AppMode
   */
  mode: string;

  /**
   * The category of the application.
   * @type {string}
   * @see Application.ApplicationCategories
   */
  category: string;

  /**
   * Indicates whether the application is enabled.
   * @type {boolean}
   */
  enable: boolean;

  /**
   * Indicates whether the application is published.
   * @type {boolean}
   */
  publish: boolean;

  /**
   * The GitHub repository URL for the application.
   * @type {string}
   */
  github: string;

  /**
   * The source code of the application.
   * @type {string}
   */
  code: string;

  /**
   * The name of the application.
   * @type {string}
   */
  name: string;

  /**
   * The unique identifier of the client associated with the application.
   * @type {number}
   */
  client_id: number;

  /**
   * The API endpoint for the application.
   * @type {string}
   */
  api: string;

  /**
   * The short public description of the application.
   * @type {string}
   */
  description: string;

  /**
   * The detailed public description of the application.
   * @type {string}
   */
  note: string;

  /**
   * The rate value of the application, from 1 to 5.
   * @type {number}
   */
  rate: number;

  /**
   * The total count of rates received by the application.
   * @type {number}
   */
  rate_count: number;

  /**
   * The list of required permissions for the application.
   * @type {string[]}
   */
  permissions: string[];

  /**
   * The URL to the privacy policy of the application.
   * @type {string}
   */
  privacy: string;

  /**
   * The URL to the web page of the application.
   * @type {string}
   */
  web: string;

  /**
   * The public data form of the application. This information is available to the public in the storefront.
   * @type {object}
   * @example [{ "name": "public1", "title": "public1", "type": null }, { "name": "public2", "title": "public2", "type": null }]
   */
  public: object;

  /**
   * The private data form of the application. This information is available only to the admin in the dashboard.
   * @type {object}
   * @example [{ "name": "private1", "title": "private1", "type": null }, { "name": "private2", "title": "private2", "type": null }]
   */
  private: object;

  /**
   * Additional information about the application.
   * @type {object}
   */
  info: object;

  /**
   * The logo of the application.
   * @type {string}
   */
  logo: string;

  /**
   * The icon of the application.
   * @type {string}
   */
  icon: string;

  /**
   * The URL to the application's video.
   * @type {string}
   */
  video: string;

  /**
   * The number of installs of the application.
   * @type {number}
   */
  installs: number;

  /**
   * The number of uninstalls of the application.
   * @type {number}
   */
  uninstalls: number;

  /**
   * The number of active installations of the application.
   * @type {number}
   */
  actives: number;
}

import testImage from "./assets/app-mode/test.svg";
import enterpriseImage from "./assets/app-mode/enterprise.svg";
import publicImage from "./assets/app-mode/public.svg";

export namespace Application {
  export enum AppVersionType {
    PRODUCTION = "production",
    BETA = "beta",
    ALPHA = "alpha",
  }

  /**
   * Interface representing the structure of an application mode.
   * @interface IAppMode
   * @property {string} title - The display title of the application mode.
   * @property {string} code - A unique code identifier for the application mode.
   * @property {string} src - The path to the mode's icon or image. This path is typically obtained using a `require` statement.
   */
  interface IAppMode {
    title: string;
    code: string;
    src: string; // This assumes that require() returns a string path. Adjust if it's different.
  }

  /**
   * Enumerates various application modes with associated metadata.
   * This is part of the Selldone open-source library, which enables developers to build custom storefronts and back offices.
   * Each mode is represented as an object conforming to the IAppMode interface.
   */
  export const AppMode: Record<string, IAppMode> = {
    TEST: {
      title: "Test",
      code: "TEST",
      src: testImage,
    },
    ENTERPRISE: {
      title: "Enterprise",
      code: "ENTERPRISE",
      src: enterpriseImage,
    },
    PUBLIC: {
      title: "Public",
      code: "PUBLIC",
      src: publicImage,
    },
  };

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
      icon: "fa:fas fa-chart-line",
    },
    PAYMENT: {
      code: "PAYMENT",
      name: "global.application_categories.payment",
      icon: "fa:fas fa-wallet",
    },
    SEO: {
      code: "SEO",
      name: "global.application_categories.seo",
      icon: "fa:fas fa-trophy",
    },
    CRM: {
      code: "CRM",
      name: "global.application_categories.crm",
      icon: "fa:fas fa-users",
    },
    TRANSPORTATION: {
      code: "TRANSPORTATION",
      name: "global.application_categories.transportation",
      icon: "fa:fas fa-shipping-fast",
    },
    AUTOMATION: {
      code: "AUTOMATION",
      name: "global.application_categories.automation",
      icon: "fa:fas fa-magic",
    },
    INVENTORY: {
      code: "INVENTORY",
      name: "global.application_categories.inventory",
      icon: "fa:fas fa-boxes",
    },
    ACCOUNTING: {
      code: "ACCOUNTING",
      name: "global.application_categories.accounting",
      icon: "fa:fas fa-cash-register",
    },
    MARKETING: {
      code: "MARKETING",
      name: "global.application_categories.marketing",
      icon: "fa:fas fa-funnel-dollar",
    },
    ADVERTISING: {
      code: "ADVERTISING",
      name: "global.application_categories.advertising",
      icon: "fa:fas fa-ad",
    },
    STAFF: {
      code: "STAFF",
      name: "global.application_categories.staff",
      icon: "fa:fas fa-id-card-alt",
    },
    INCENTIVE: {
      code: "INCENTIVE",
      name: "global.application_categories.incentive",
      icon: "fa:fas fa-mug-hot",
    },
    SHOP: {
      code: "SHOP",
      name: "global.application_categories.shop",
      icon: "fa:fas fa-store",
    },
  };
}
