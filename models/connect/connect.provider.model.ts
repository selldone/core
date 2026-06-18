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
 * Developer/provider request for publishing a Connect integration.
 *
 * Backend source: `App\Http\Controllers\Connect\models\ConnectProvider`,
 * persisted in the `connect_providers` table.
 */
export interface ConnectProvider {
  /**
   * Primary key of the connect provider record.
   *
   * Backend: `connect_providers.id`.
   */
  id: number;

  /**
   * Owner user ID.
   *
   * Backend column is nullable and uses `nullOnDelete`.
   */
  user_id: number | null;

  /**
   * Linked published connect service ID.
   *
   * Backend: nullable foreign key to `connects.id`, set after Selldone approves
   * and creates the public connect service.
   */
  connect_id?: number | null;

  /**
   * Reviewing officer user ID.
   *
   * Backend column is nullable and uses `nullOnDelete`.
   */
  officer_id?: number | null;

  /**
   * Approval timestamp set by the reviewing officer.
   */
  approved_at?: ConnectProvider.Timestamp | null;

  /**
   * Rejection timestamp set by the reviewing officer.
   */
  rejected_at?: ConnectProvider.Timestamp | null;

  /**
   * Officer message for the provider owner.
   *
   * Commonly used for rejection reasons or revision requests.
   */
  officer_message?: string | null;

  /**
   * Whether the provider owner requested review/publish.
   */
  reviewing: boolean;

  /**
   * Unique provider code.
   *
   * Backend column is nullable before generation. After first approval it should
   * remain stable.
   */
  code: string | null;

  /**
   * Provider/connect display name.
   */
  name: string;

  /**
   * Provider/connect icon path or name.
   *
   * Backend column is nullable.
   */
  icon?: string | null;

  /**
   * Whether this provider/connect is enabled.
   */
  enable: boolean;

  /**
   * Provider connect mode.
   *
   * Backend enum source: `ConnectMode::All`.
   */
  mode: ConnectProvider.ConnectModeValue;

  /**
   * Provider profile/configuration used to create/update the linked connect.
   *
   * Backend stores this as nullable JSONB. Common keys include `description`,
   * `confirm`, and scope booleans.
   */
  info: ConnectProvider.ProviderInfo | null;

  /**
   * Additional connect configuration used during review/publish flows.
   *
   * Backend stores this as nullable JSONB.
   */
  config: ConnectProvider.ProviderConfig | null;

  /**
   * Unique secure provider access key.
   *
   * Backend: `connect_providers.secret`, unique string. APIs may hide this in
   * public responses.
   */
  secret?: string;

  /**
   * Authentication configuration.
   *
   * Backend stores this as nullable JSONB. `auth.mode` drives whether the
   * created connect uses OAuth or username/password form fields.
   */
  auth: ConnectProvider.AuthConfig | null;

  /**
   * API configuration. External services call these endpoints on Selldone.
   *
   * Backend stores this as nullable JSONB.
   */
  apis: ConnectProvider.ApiConfig | null;

  /**
   * Webhook endpoint configuration. Selldone calls these provider endpoints.
   *
   * Backend stores this as nullable JSONB.
   */
  webhooks: ConnectProvider.WebhookConfig | null;

  /**
   * Total provider errors.
   *
   * Backend default is `0`; owners can reset this counter.
   */
  errors: number;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at: ConnectProvider.Timestamp;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at: ConnectProvider.Timestamp;

  /**
   * Soft-delete timestamp.
   *
   * Present only when the backend query includes trashed providers.
   */
  deleted_at?: ConnectProvider.Timestamp | null;

  /** Loaded owner user relation, when explicitly included by the API. */
  user?: Record<string, unknown> | null;

  /** Loaded reviewing officer relation, when explicitly included by the API. */
  officer?: Record<string, unknown> | null;

  /** Loaded linked connect relation, when explicitly included by the API. */
  connect?: Record<string, unknown> | null;

  /** Loaded provider logs relation, when explicitly included by the API. */
  logs?: Record<string, unknown>[];

  /** Loaded shop connections relation, when explicitly included by the API. */
  shop_connects?: Record<string, unknown>[];
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ConnectProvider {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;

  /**
   * Persisted connect mode values shared with the published `Connect` model.
   */
  export type ConnectModeValue =
    | "Migration"
    | "Dropshipping"
    | "Marketplace"
    | "Accounting"
    | "Other";

  /**
   * Webhook endpoint keys supported by Connect providers.
   */
  export type WebhookParamValue =
    | "notify_shop"
    | "sync_category"
    | "sync_product"
    | "create_order"
    | "confirm_order"
    | "get_order"
    | "cancel_order"
    | "sync_customers";

  /**
   * Interface representing a webhook.
   */
  export interface IWebhook {
    /** Parameter representing the webhook. */
    param: WebhookParamValue;

    /** Icon associated with the webhook. */
    icon: string;

    /** Title of the webhook. */
    title: string;

    /** Description of the webhook. */
    description: string;
  }

  export const Webhooks: Record<WebhookParamValue, IWebhook> = {
    notify_shop: {
      param: "notify_shop",
      icon: "notifications_active",
      title: "Notify Shop",
      description:
        "We call this endpoint when a shop connect to your provider or remove your provider from it's connect os.",
    },

    sync_category: {
      param: "sync_category",
      icon: "cloud_sync",
      title: "Fetch categories",
      description:
        "We use this webhook to fetch categories from your service and update linked categories on Selldone. Each time a new shop connected or sync request trigger, we use this webhook to sync all categories information.",
    },

    sync_product: {
      param: "sync_product",
      icon: "cloud_sync",
      title: "Fetch products",
      description:
        "We use this webhook to fetch products from your service and update linked products on Selldone. Each time a new shop connected or sync request trigger, we use this webhook to sync all products information.",
    },

    create_order: {
      param: "create_order",
      icon: "flash_on",
      title: "Create order",
      description:
        "When a new order is created or merchant manually request to sync an order with external connect service provider, we will call this endpoint and send order information to your server.",
    },

    confirm_order: {
      param: "confirm_order",
      icon: "flash_on",
      title: "Confirm order manually",
      description:
        "When merchant request to confirm an order manually, we will call this endpoint to inform you about the user action.",
    },

    get_order: {
      param: "get_order",
      icon: "cloud_sync",
      title: "Get order status",
      description: "Get the last status of the order.",
    },

    cancel_order: {
      param: "cancel_order",
      icon: "flash_on",
      title: "Cancel order",
      description:
        "A call will be made when the order is canceled. Cancel webhook only call if the order was confirmed previously!",
    },

    sync_customers: {
      param: "sync_customers",
      icon: "cloud_sync",
      title: "Fetch customers",
      description:
        "We use this webhook to fetch customers from your service and update linked customers on Selldone. Each time a new shop connected or sync request trigger, we use this webhook to sync all customers information.",
    },
  };

  /**
   * Provider `info` JSON payload.
   */
  export interface ProviderInfo {
    name?: string;
    description?: string | null;
    confirm?: boolean;
    read_categories?: boolean;
    write_categories?: boolean;
    read_products?: boolean;
    write_products?: boolean;
    read_orders?: boolean;
    write_orders?: boolean;
    read_customers?: boolean;
    write_customers?: boolean;
    [key: string]: unknown;
  }

  /**
   * Provider `config` JSON payload.
   */
  export interface ProviderConfig {
    [key: string]: unknown;
  }

  /**
   * Provider authentication JSON payload.
   */
  export interface AuthConfig {
    mode?: AuthMethodKey;
    [key: string]: unknown;
  }

  /**
   * Provider API endpoint JSON payload.
   */
  export interface ApiConfig {
    [key: string]: unknown;
  }

  /**
   * Provider webhook endpoint JSON payload.
   */
  export type WebhookConfig = Partial<
    Record<WebhookParamValue | "secret", string>
  >;

  /**
   * Type representing the keys of the authentication methods object.
   */
  export type AuthMethodKey = "OAuth" | "Password";

  /**
   * Interface representing an authentication method.
   */
  export interface IAuthMethod {
    /** Value representing the authentication method. */
    value: AuthMethodKey;

    /** Title of the authentication method. */
    title: string;

    /** Description of the authentication method. */
    description: string;

    /** Icon associated with the authentication method. */
    icon: string;
  }

  /**
   * Constant object containing details for each authentication method.
   */
  export const AuthMethods: Record<AuthMethodKey, IAuthMethod> = {
    OAuth: {
      value: "OAuth",
      title: "OAuth 2.0 (Recommended)",
      description:
        "The OAuth 2.0 authorization framework is a protocol that allows a user to grant a third-party web site or application access to the user's protected resources, without necessarily revealing their long-term credentials or even their identity.",
      icon: "sync_lock",
    },
    Password: {
      value: "Password",
      title: "Username / Password",
      description:
        "The basic access authentication is a method for an HTTP user agent to provide a user name and password when making a request. In basic HTTP authentication, a request contains a header field in the form of Authorization: Basic < credentials >, where credentials is the Base64 encoding of ID and password joined by a single colon.",
      icon: "password",
    },
  };
}
