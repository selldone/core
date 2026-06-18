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
 * Developer application listed in the Selldone app marketplace and installable
 * by shops.
 *
 * Backend source: `App\Storefront\Apps\App`, persisted in the `apps` table.
 */
export interface Application {
  /**
   * Primary key of the app marketplace record.
   */
  id: number;

  /**
   * Developer company that owns and manages the app.
   *
   * Backend: required foreign key to `companies.id`.
   */
  company_id: number;

  /**
   * App visibility mode.
   *
   * `TEST` apps are visible only to the owning developer company user,
   * `ENTERPRISE` apps are visible to assigned shops, and `PUBLIC` apps are
   * visible in the marketplace when published.
   */
  mode: Application.AppModeCode;

  /**
   * Marketplace category and storefront loading area.
   */
  category: Application.ApplicationCategoryCode;

  /**
   * Internal availability switch.
   *
   * Disabled apps should not be used even if they are published.
   */
  enable: boolean;

  /**
   * Marketplace visibility flag.
   *
   * Public and enterprise app discovery checks this flag in backend availability
   * queries.
   */
  publish: boolean;

  /**
   * Optional source/repository URL shown to maintainers or reviewers.
   */
  github: string | null;

  /**
   * Stable unique app code used by APIs, OAuth naming, and install flows.
   *
   * Backend: unique string, max length 32.
   */
  code: string;

  /**
   * Short public app display name.
   *
   * Backend: string, max length 24.
   */
  name: string;

  /**
   * Passport OAuth client ID assigned to the app.
   *
   * Backend: nullable foreign key to `oauth_clients.id`.
   */
  client_id: number | null;

  /**
   * Binary-collated API key used to build app login/install URLs.
   *
   * Backend: unique string, max length 64.
   */
  api: string;

  /**
   * Public marketplace description.
   */
  description: string | null;

  /**
   * Internal or reviewer note for app administration.
   */
  note: string | null;

  /**
   * Cached average review score.
   *
   * Backend default is `0`; user review rows contribute to this value.
   */
  rate: number;

  /**
   * Number of user reviews contributing to `rate`.
   */
  rate_count: number;

  /**
   * Requested app permissions/scopes shown during installation or review.
   *
   * Backend stores this as nullable JSON. Existing payloads may be plain scope
   * strings or richer objects.
   */
  permissions: Application.Permission[] | string[] | null;

  /**
   * Privacy-policy URL.
   */
  privacy: string | null;

  /**
   * Developer or app website URL.
   */
  web: string | null;

  /**
   * Public configuration schema/defaults visible to the shop/admin UI.
   *
   * Backend stores this as nullable JSON. Common payloads are arrays of form
   * field definitions.
   *
   * @example [{ "name": "public1", "title": "public1", "type": null }]
   */
  public: Application.ConfigurationSchema | null;

  /**
   * Private configuration schema/defaults used for server-side app settings.
   *
   * Backend stores this as nullable JSON. Common payloads are arrays of form
   * field definitions.
   *
   * @example [{ "name": "private1", "title": "private1", "type": null }]
   */
  private: Application.ConfigurationSchema | null;

  /**
   * Runtime/application metadata stored as JSON.
   */
  info: Application.JsonValue | null;

  /**
   * Marketplace logo path or URL.
   */
  logo: string | null;

  /**
   * Small app icon path or URL.
   */
  icon: string | null;

  /**
   * Optional marketplace demo/video URL.
   */
  video: string | null;

  /**
   * Total install counter.
   *
   * Real installs are derived by backend logic from `installs - uninstalls`;
   * current active installs are tracked separately in `actives`.
   */
  installs: number;

  /**
   * Total uninstall counter.
   */
  uninstalls: number;

  /**
   * Current active install counter maintained by install/enable flows.
   */
  actives: number;

  /**
   * Alpha release payload.
   *
   * Backend stores this as nullable JSON. It can include generated storefront
   * snippets such as `header` and `body`.
   */
  alpha?: Application.ReleasePayload | null;

  /**
   * Beta release payload.
   *
   * Backend stores this as nullable JSON. It can include generated storefront
   * snippets such as `header` and `body`.
   */
  beta?: Application.ReleasePayload | null;

  /**
   * Production release payload used by storefront snippet generation.
   *
   * Backend reads `production.header` and `production.body` when rendering app
   * snippets for installed shops.
   */
  production?: Application.ReleasePayload | null;

  /**
   * Soft-delete timestamp.
   *
   * Present only when the backend query includes trashed apps.
   */
  deleted_at?: Application.Timestamp | null;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at?: Application.Timestamp;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at?: Application.Timestamp;

  /**
   * Loaded developer company relation, when explicitly included by the API.
   */
  company?: Record<string, unknown> | null;

  /**
   * Loaded Passport OAuth client relation, when explicitly included by the API.
   */
  client?: Record<string, unknown> | null;

  /**
   * Loaded ordered marketplace/gallery images relation.
   */
  images?: Record<string, unknown>[];

  /**
   * Loaded enterprise shop credentials/allow-list relation.
   */
  enterprises?: Record<string, unknown>[];

  /**
   * Loaded paid app items/plans relation.
   */
  items?: Record<string, unknown>[];

  /**
   * Loaded purchase history relation.
   */
  purchases?: Record<string, unknown>[];

  /**
   * Loaded user reviews relation.
   */
  reviews?: Record<string, unknown>[];

  /**
   * Loaded customer-level opt-out/block rows for this app.
   */
  shop_app_customer_blocks?: Record<string, unknown>[];
}

import testImage from "./assets/app-mode/test.svg";
import enterpriseImage from "./assets/app-mode/enterprise.svg";
import publicImage from "./assets/app-mode/public.svg";

export namespace Application {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;

  /**
   * Generic JSON value accepted by Laravel JSON casts.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | null
    | JsonObject
    | JsonValue[];

  /**
   * Generic JSON object accepted by Laravel JSON casts.
   *
   * Defined as an interface instead of `Record<string, JsonValue>` because
   * recursive JSON aliases through `Record` can trigger TS2456.
   */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /**
   * Persisted visibility mode values from backend `AppMode`.
   */
  export type AppModeCode = "TEST" | "ENTERPRISE" | "PUBLIC";

  /**
   * Persisted marketplace category values from backend `AppCategory`.
   */
  export type ApplicationCategoryCode =
    | "TRACKING"
    | "PAYMENT"
    | "SEO"
    | "CRM"
    | "TRANSPORTATION"
    | "AUTOMATION"
    | "INVENTORY"
    | "ACCOUNTING"
    | "MARKETING"
    | "ADVERTISING"
    | "STAFF"
    | "INCENTIVE"
    | "SHOP";

  /**
   * Permission payload stored in `apps.permissions`.
   *
   * Some API payloads use only scope strings; richer review/install payloads can
   * use objects with display metadata.
   */
  export interface Permission extends JsonObject {
    code?: string;
    title?: string;
    description?: string;
  }

  /**
   * App public/private configuration field definition.
   */
  export interface ConfigurationField extends JsonObject {
    name: string;
    title?: string;
    type?: string | null;
  }

  /**
   * App public/private configuration schema.
   */
  export type ConfigurationSchema =
    | ConfigurationField[]
    | JsonObject
    | JsonValue[];

  /**
   * Release-channel payload stored in `alpha`, `beta`, and `production`.
   */
  export interface ReleasePayload extends JsonObject {
    /** Storefront header snippet template. */
    header?: string | null;

    /** Storefront body snippet template. */
    body?: string | null;
  }

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
  export interface IAppMode {
    title: string;
    code: AppModeCode;
    src: string;
  }

  /**
   * Enumerates various application modes with associated metadata.
   * This is part of the Selldone open-source library, which enables developers to build custom storefronts and back offices.
   * Each mode is represented as an object conforming to the IAppMode interface.
   */
  export const AppMode: Record<AppModeCode, IAppMode> = {
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
  export interface IApplicationCategory {
    code: ApplicationCategoryCode;
    name: string;
    icon: string;
  }

  /**
   * Enumerates various application categories with associated metadata. This is part of the Selldone open-source library,
   * enabling developers to build custom storefronts and back offices.
   * Each category is defined with a unique code, a name for display, and an icon for visual representation.
   */
  export const ApplicationCategories: Record<
    ApplicationCategoryCode,
    IApplicationCategory
  > = {
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
