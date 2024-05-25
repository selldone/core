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

export interface ConnectProvider {
  /** Unique identifier for the connect provider. */
  id: number;

  /** ▃▃▃▃▃▃▃▃▃▃▃▃▃▃ Relations ▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  /** User created this (Owner). */
  user_id: number;
  /** Linked connect (Add after request verified by SD admin). */
  connect_id?: number | null;

  /** ▃▃▃▃▃▃▃▃▃▃▃▃▃▃ Officer zone ▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  /** Officer. */
  officer_id?: number | null;
  /** Approved by officer. */
  approved_at?: string | null;
  /** Rejected by officer. */
  rejected_at?: string | null;
  /** Officer message for provider owner (Reject reason or, ...). */
  officer_message?: string | null;
  /** User request to review to publish. */
  reviewing: boolean;

  /** ▃▃▃▃▃▃▃▃▃▃▃▃▃▃ Configuration ▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  /** Unique code (After first approve it cannot change). */
  code: string;
  /** [Same as connect->name] Name of connect. */
  name: string;
  /** [Same as connect->icon] Icon of connect. */
  icon?: string | null;
  /** [Same as connect->enable] Enable/Disable connect service. */
  enable: boolean;
  /** [Same as connect->mode] {@see ConnectMode}. */
  mode: string;

  /** {name, description, ...} Used to update the linked connect. */
  info: Array<{ name: string; description: string }>;
  /** {confirm, read_categories, write_categories, ...} Used to update the linked connect. */
  config: Array<string>;

  /** ▃▃▃▃▃▃▃▃▃▃▃▃▃▃ Developer ▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  /** Keep Auth config. */
  auth: Array<string>;
  /** Keep API configs. External service calls these endpoints on SD. */
  apis: Array<string>;
  /** Keep webhooks configs. We call these endpoints. */
  webhooks: Array<
    (typeof ConnectProvider.Webhooks)[keyof typeof ConnectProvider.Webhooks]
  >;

  /** ▃▃▃▃▃▃▃▃▃▃▃▃▃▃ Statistics ▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  /** Total errors (Reset by user). */
  errors: number;

  /** Timestamp for when the connect provider was created. */
  created_at: string;
  /** Timestamp for when the connect provider was last updated. */
  updated_at: string;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ConnectProvider {
  type WebhookParamValue =
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
  interface IWebhook {
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
   * Interface representing an authentication method.
   */
  interface IAuthMethod {
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
   * Type representing the keys of the authentication methods object.
   */
  type AuthMethodKey = "OAuth" | "Password";

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
