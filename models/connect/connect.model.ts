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

import { ConnectProvider } from "./connect.provider.model";

export interface Connect {
  id: number;
  user_id: number;
  code: string;
  mode: keyof typeof Connect.Modes;
  name: string;
  description: string;
  icon: string;
  enable: boolean;
  form?: any[] | null; // Define a stricter type for the form elements if possible.
  confirm: boolean;
  read_categories: boolean;
  write_categories: boolean;
  read_products: boolean;
  write_products: boolean;
  read_orders: boolean;
  write_orders: boolean;
  read_customers: boolean;
  write_customers: boolean;
  shipping: boolean;
  created_at: Date;
  updated_at: Date;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace Connect {




  /**
   * Enum representing connect scopes.
   */
  type ScopeValue =
      | "read_categories"
      | "write_categories"
      | "read_products"
      | "write_products"
      | "read_orders"
      | "write_orders"
      | "read_customers"
      | "write_customers";

  /**
   * Interface representing a scope.
   */
  interface IScope {
    /** Code representing the scope. */
    code: ScopeValue;

    /** Color associated with the scope. */
    color: string;

    /** Title of the scope. */
    title: string;

    /** Description of the scope. */
    desc: string;
  }

  export const Scopes: Record<ScopeValue, IScope> = {
    read_categories: {
      code: "read_categories",
      color: "#F44336",
      title: "Read categories",
      desc: "We read categories from external provider and add them to Selldone stores.",
    },

    write_categories: {
      code: "write_categories",
      color: "#9C27B0",
      title: "Write categories",
      desc: "External provider can read information about connected categories.",
    },

    read_products: {
      code: "read_products",
      color: "#673AB7",
      title: "Read products",
      desc: "We read products from external provider and add them to Selldone stores.",
    },

    write_products: {
      code: "write_products",
      color: "#3F51B5",
      title: "Write products",
      desc: "External provider can read information about connected products.",
    },

    read_orders: {
      code: "read_orders",
      color: "#FFC107",
      title: "Read orders",
      desc: "We read existing orders from external providers. In most case we use this information to update order status, and in some case we add external orders to merchant orders processing center.",
    },
    write_orders: {
      code: "write_orders",
      color: "#009688",
      title: "Write orders",
      desc: "When a related order created, we inform about it to the external provider.",
    },
    read_customers: {
      code: "read_customers",
      color: "#4CAF50",
      title: "Read customers",
      desc: "We read customers from external provider and add them to Selldone stores.",
    },
    write_customers: {
      code: "write_customers",
      color: "#795548",
      title: "Write customers",
      desc: "External provider can read information about customers.",
    },
  };











  type ConnectModeValue =
    | "Migration"
    | "Dropshipping"
    | "Marketplace"
    | "Accounting"
    | "Other";

  /**
   * Interface representing a connect mode.
   */
  interface IConnectMode {
    /** Code representing the connect mode. */
    code: ConnectModeValue;

    /** Title of the connect mode. */
    title: string;

    /** Description of the connect mode. */
    desc: string;

    /** Array of webhooks associated with the connect mode. */
    webhooks: Array<
      (typeof ConnectProvider.Webhooks)[keyof typeof ConnectProvider.Webhooks]
    >;

    /** Array of access scopes associated with the connect mode. */
    access: IScope[];

    /** Availability of the connect mode for public selection. */
    available: boolean;
  }

  export const Modes: Record<ConnectModeValue, IConnectMode> = {
    Migration: {
      code: "Migration",
      title: "connect_mode.Migration.title",
      desc: "connect_mode.Migration.desc",
      webhooks: [
        ConnectProvider.Webhooks.notify_shop,
        ConnectProvider.Webhooks.sync_category,
        ConnectProvider.Webhooks.sync_product,
        ConnectProvider.Webhooks.sync_customers,
      ],
      access: [
        Scopes.read_categories,
        Scopes.read_products,
        Scopes.read_customers,
      ],
      available: false,
    },
    Dropshipping: {
      code: "Dropshipping",
      title: "connect_mode.Dropshipping.title",
      desc: "connect_mode.Dropshipping.desc",
      webhooks: [
        ConnectProvider.Webhooks.notify_shop,
        ConnectProvider.Webhooks.sync_category,
        ConnectProvider.Webhooks.sync_product,
        ConnectProvider.Webhooks.create_order,
        ConnectProvider.Webhooks.confirm_order,
        ConnectProvider.Webhooks.get_order,
        ConnectProvider.Webhooks.cancel_order,
      ],
      access: [
        Scopes.read_categories,
        Scopes.read_products,
        Scopes.read_orders,
        Scopes.write_orders,
      ],
      available: true, // Available for public to select as provider mode
    },
    Marketplace: {
      code: "Marketplace",
      title: "connect_mode.Marketplace.title",
      desc: "connect_mode.Marketplace.desc",
      webhooks: [
        ConnectProvider.Webhooks.notify_shop,
        ConnectProvider.Webhooks.create_order,
        ConnectProvider.Webhooks.confirm_order,
        ConnectProvider.Webhooks.get_order,
        ConnectProvider.Webhooks.cancel_order,
      ],

      access: [Scopes.read_orders, Scopes.write_orders],
      available: false,
    },
    Accounting: {
      code: "Accounting",
      title: "connect_mode.Accounting.title",
      desc: "connect_mode.Accounting.desc",
      webhooks: [
        ConnectProvider.Webhooks.notify_shop,
        ConnectProvider.Webhooks.create_order,
        ConnectProvider.Webhooks.cancel_order,
      ],
      access: [
        Scopes.write_products,
        Scopes.write_categories,
        Scopes.write_orders,
        Scopes.write_customers,
      ],
      available: false,
    },
    Other: {
      code: "Other",
      title: "connect_mode.Other.title",
      desc: "connect_mode.Other.desc",
      webhooks: [
        ConnectProvider.Webhooks.notify_shop,
        ConnectProvider.Webhooks.sync_category,
        ConnectProvider.Webhooks.sync_product,
        ConnectProvider.Webhooks.create_order,
        ConnectProvider.Webhooks.confirm_order,
        ConnectProvider.Webhooks.get_order,
        ConnectProvider.Webhooks.cancel_order,
        ConnectProvider.Webhooks.sync_customers,
      ],
      access: [
        Scopes.read_categories,
        Scopes.write_categories,
        Scopes.read_products,
        Scopes.write_products,
        Scopes.read_orders,
        Scopes.write_orders,
        Scopes.read_customers,
        Scopes.write_customers,
      ],
      available: false,
    },
  };

}
