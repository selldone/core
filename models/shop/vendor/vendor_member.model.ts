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
 * Vendor panel member permission record.
 *
 * Backend source: `App\Shop\Vendors\Member\VendorMember`, table `vendor_members`.
 * Access keys are validated in `MyVendorMembersController` from backend enum
 * `App\Shop\Vendors\Member\enums\VendorMemberRegion` plus `-READ` / `-WRITE` suffixes.
 */
export interface VendorMember {
  /** Member row id. Source: `vendor_members.id`. */
  id: number;

  /** Owning shop id. Source: `vendor_members.shop_id`. */
  shop_id: number;

  /** Vendor id. Source: `vendor_members.vendor_id`. */
  vendor_id: number;

  /** User id of the member. Source: `vendor_members.user_id`. */
  user_id: number;

  /** Permission map stored as nullable JSON `vendor_members.access`. */
  access: VendorMemberTypes.AccessMap | null;

  /** Creation timestamp. Source: `vendor_members.created_at`. */
  created_at: string;

  /** Last update timestamp. Source: `vendor_members.updated_at`. */
  updated_at: string;

  /** Joined user display name returned by member list endpoints. */
  name?: string;

  /** Joined user email returned by member list endpoints. */
  email?: string;

  /** Shop relation when eager-loaded. */
  shop?: Record<string, unknown>;

  /** Vendor relation when eager-loaded. */
  vendor?: Record<string, unknown>;

  /** User relation when eager-loaded. */
  user?: Record<string, unknown>;
}

export namespace VendorMemberTypes {
  /** Backend enum `VendorMemberRegion::All`. */
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

  /** JSON access map with keys like `ORDERS-READ` and `PRODUCTS-WRITE`. */
  export type AccessMap = Partial<
    Record<
      `${VendorMemberRegionCode}-READ` | `${VendorMemberRegionCode}-WRITE`,
      boolean
    >
  >;

  /** UI metadata for each backend vendor-member region. */
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
  } as const;
}
