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

import bronze from "./assets/customer-levels/bronze.svg";
import bronzeOutline from "./assets/customer-levels/bronze-outline.svg";
import silver from "./assets/customer-levels/silver.svg";
import silverOutline from "./assets/customer-levels/silver-outline.svg";
import gold from "./assets/customer-levels/gold.svg";
import goldOutline from "./assets/customer-levels/gold-outline.svg";
import platinum from "./assets/customer-levels/platinum.svg";
import platinumOutline from "./assets/customer-levels/platinum-outline.svg";
import diamond from "./assets/customer-levels/diamond.svg";
import diamondOutline from "./assets/customer-levels/diamond-outline.svg";

/**
 * Shop customer-club level configuration.
 *
 * Backend source: `App\Shop\Club\ShopClub`, table `shop_club`.
 * Rows are unique by `(shop_id, level)` and are soft-deleted when disabled/removed. Club rows define threshold-based
 * loyalty benefits and discount limits for customer badge levels.
 */
export interface Club {
  /** Club row id. Source: `shop_club.id`. */
  id: number;

  /** Owning shop id. Source: `shop_club.shop_id`. */
  shop_id: number;

  /** Customer badge level. Backend enum `ShopCustomerBadgeEnums::ALL`. */
  level: Club.LevelCode;

  /** Club level description, or `null`. Source: nullable text `shop_club.description`. */
  description: string | null;

  /** Currency code used for monthly/annual thresholds and discount limit. */
  currency: string;

  /** Monthly purchase threshold/amount. Source: double `shop_club.monthly`, default `0`. */
  monthly: number;

  /** Annual purchase threshold/amount. Source: double `shop_club.annually`, default `0`. */
  annually: number;

  /** Discount percent offered to customers in this club. Source: tiny integer `shop_club.percent`, default `0`. */
  percent: number;

  /** Discount limit in `currency`; `0` means unlimited. Source: `shop_club.limit`. */
  limit: number;

  /** Whether this club grants free shipping. Source: `shop_club.free_shipping` boolean. */
  free_shipping: boolean;

  /** Number of times this club discount has been used. Source: `shop_club.used`. */
  used: number;

  /** Current customer count in this club level. Source: `shop_club.count`. */
  count: number;

  /** Soft-delete timestamp when included. Source: `shop_club.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `shop_club.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `shop_club.updated_at`. */
  updated_at?: string | null;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown> | null;

  /** Order history relations when eager-loaded. */
  baskets?: Record<string, unknown>[];
  pos_baskets?: Record<string, unknown>[];
  virtual_items?: Record<string, unknown>[];
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Club {
  /** Backend enum values for `shop_club.level`. */
  export type LevelCode = "BRONZE" | "SILVER" | "GOLD" | "PLATINUM" | "DIAMOND";

  /** UI metadata for one customer-club level. */
  export interface LevelMeta {
    /** Backend level code stored in `shop_club.level` and `shop_customers.level`. */
    code: LevelCode;

    /** Translation key used by dashboards. */
    name: string;

    /** Filled SVG badge icon. */
    icon: string;

    /** Outline SVG badge icon. */
    icon_outline: string;
  }

  /** Customer-club level metadata keyed by backend level code. */
  export const Levels: Record<LevelCode, LevelMeta> = {
    BRONZE: {
      code: "BRONZE",
      name: "global.customer_club.bronze",
      icon: bronze,
      icon_outline: bronzeOutline,
    },
    SILVER: {
      code: "SILVER",
      name: "global.customer_club.silver",
      icon: silver,
      icon_outline: silverOutline,
    },
    GOLD: {
      code: "GOLD",
      name: "global.customer_club.gold",
      icon: gold,
      icon_outline: goldOutline,
    },
    PLATINUM: {
      code: "PLATINUM",
      name: "global.customer_club.platinum",
      icon: platinum,
      icon_outline: platinumOutline,
    },
    DIAMOND: {
      code: "DIAMOND",
      name: "global.customer_club.diamond",
      icon: diamond,
      icon_outline: diamondOutline,
    },
  };
}
