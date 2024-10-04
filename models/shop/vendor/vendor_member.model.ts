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

import barcodeScannerIcon from "../../../enums/permission/assets/regions/barcode-scaner.svg";
import dropshippingIcon from "../../../enums/permission/assets/regions/dropshipping.svg";
import marketplaceIcon from "../../../enums/permission/assets/regions/marketplace.svg";

/**
 * Model Definition
 */
export interface VendorMember {
  /** Unique identifier */
  id: number;

  /** Identifier of the associated shop */
  shop_id: number;

  vendor_id: number;

  user_id: number;

  /** Access permissions with keys being region-specific, like DASHBOARD-READ, DASHBOARD-WRITE, etc. */
  access: Partial<Record<`${VendorMemberTypes.VendorMemberRegionCode}-READ` | `${VendorMemberTypes.VendorMemberRegionCode}-WRITE`, boolean>>;


  /** Date of creation */
  created_at: string;

  /** Date of last update */
  updated_at: string;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace VendorMemberTypes {
  export enum VendorMemberRegionCode {
    DASHBOARD = "DASHBOARD",
    ORDERS = "ORDERS",
    PAYMENT = "PAYMENT",
    PRODUCTS = "PRODUCTS",
    INVENTORY = "INVENTORY",

    SHIPPING = "SHIPPING",
    ACCESS = "ACCESS",

    PROFILE = "PROFILE",
  }

  export const VendorMemberRegion = {
    DASHBOARD: {
      code: "DASHBOARD",
      name: "global.commons.dashboard",
      icon: "dashboard",
    },
    ORDERS: {
      code: "ORDERS",
      name: "global.commons.orders",
      icon: "shopping_bag",
    },

    PAYMENT: {
      code: "PAYMENT",
      name: "global.commons.payment",
      icon: "account_balance",
    },

    INVENTORY: {
      code: "INVENTORY",
      name: "global.commons.inventory",
      icon: "fa:fas fa-boxes-packing",
    },

    PRODUCTS: {
      code: "PRODUCTS",
      name: "global.commons.products",
      icon: "apps",
    },

    SHIPPING: {
      code: "SHIPPING",
      name: "global.commons.shipping",
      icon: "local_shipping",
    },

    ACCESS: {
      code: "ACCESS",
      name: "global.commons.access",
      icon: "groups",
    },

    PROFILE: {
      code: "PROFILE",
      name: "global.commons.profile",
      icon: "badge",
    },


  };

}
