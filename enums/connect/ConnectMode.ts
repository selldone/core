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

import ProviderWebhooks from "@app-selldone/pages/connect-provider/enums/ProviderWebhooks";
import {ConnectScope} from "./ConnectScope";

export const ConnectMode = {
  Migration: {
    code: "Migration",
    title: "Migration",
    desc: "Get products, categories, and customers. After the user deletes this service, the received products, categories, and customers will not be deleted.",
    webhooks: [
      ProviderWebhooks.notify_shop,
      ProviderWebhooks.sync_category,
      ProviderWebhooks.sync_product,
      ProviderWebhooks.sync_customers,
    ],
    access: [
      ConnectScope.read_categories,
      ConnectScope.read_products,
      ConnectScope.read_customers,
    ],
    available: false,
  },
  Dropshipping: {
    code: "Dropshipping",
    title: "Dropshipping",
    desc: "Get products, categories, and orders. The system removes products after the user removes the service.",
    webhooks: [
      ProviderWebhooks.notify_shop,
      ProviderWebhooks.sync_category,
      ProviderWebhooks.sync_product,
      ProviderWebhooks.create_order,
      ProviderWebhooks.confirm_order,
      ProviderWebhooks.get_order,
      ProviderWebhooks.cancel_order,
    ],
    access: [
      ConnectScope.read_categories,
      ConnectScope.read_products,
      ConnectScope.read_orders,
      ConnectScope.write_orders,
    ],
    available: true, // Available for public to select as provider mode
  },
  Marketplace: {
    code: "Marketplace",
    title: "Marketplace",
    desc: "Just sync inventory and receive orders (Products will be linked by SKU).",
    webhooks: [
      ProviderWebhooks.notify_shop,
      ProviderWebhooks.create_order,
      ProviderWebhooks.confirm_order,
      ProviderWebhooks.get_order,
      ProviderWebhooks.cancel_order,
    ],

    access: [ConnectScope.read_orders, ConnectScope.write_orders],
    available: false,
  },
  Accounting: {
    code: "Accounting",
    title: "Accounting",
    desc: "Send orders and financial information.",
    webhooks: [
      ProviderWebhooks.notify_shop,
      ProviderWebhooks.create_order,
      ProviderWebhooks.cancel_order,
    ],
    access: [
      ConnectScope.write_products,
      ConnectScope.write_categories,
      ConnectScope.write_orders,
      ConnectScope.write_customers,
    ],
    available: false,
  },
  Other: {
    code: "Other",
    title: "Other",
    desc: "Other services.",
    webhooks: [
      ProviderWebhooks.notify_shop,
      ProviderWebhooks.sync_category,
      ProviderWebhooks.sync_product,
      ProviderWebhooks.create_order,
      ProviderWebhooks.confirm_order,
      ProviderWebhooks.get_order,
      ProviderWebhooks.cancel_order,
      ProviderWebhooks.sync_customers,
    ],
    access: [
      ConnectScope.read_categories,
      ConnectScope.write_categories,
      ConnectScope.read_products,
      ConnectScope.write_products,
      ConnectScope.read_orders,
      ConnectScope.write_orders,
      ConnectScope.read_customers,
      ConnectScope.write_customers,
    ],
    available: false,
  },
};
