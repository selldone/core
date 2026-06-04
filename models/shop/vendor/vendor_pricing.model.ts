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

import type { ExtraPricing } from "../extra-pricing/extra-pricing.model";
import type { Shop } from "../shop.model";
import type { VendorProduct } from "./vendor_product.model";

/**
 * Marketplace pricing model used to calculate vendor product marketplace price from raw vendor price.
 *
 * Backend source: `App\Shop\Vendors\VendorPricing`, table `vendor_pricing`.
 * Managed by `ShopVendorPricingController`; add validation allows `commission` from `0..1000` and requires `title`.
 */
export interface VendorPricing {
  /** Pricing id. Source: `vendor_pricing.id`. */
  id: number;

  /** Owning marketplace shop id. Source: `vendor_pricing.shop_id`. */
  shop_id: number;

  /** Pricing plan title. Source: `vendor_pricing.title`. */
  title: string;

  /** Optional pricing plan description. Source: nullable `vendor_pricing.description`. */
  description: string | null;

  /** Commission percent applied as `raw_price * (1 + commission / 100)`. Source: `vendor_pricing.commission`. */
  commission: number;

  /** Localized fields keyed by locale. Source: nullable JSON `vendor_pricing.translations`. */
  translations?: VendorPricing.Translations | null;

  /** Creation timestamp. Source: `vendor_pricing.created_at`. */
  created_at: string;

  /** Last update timestamp. Source: `vendor_pricing.updated_at`. */
  updated_at: string;

  /** Shop relation when `VendorPricing::shop()` is eager-loaded. */
  shop?: Shop;

  /** Vendor product relation from `vendorProducts()`, serialized as `vendor_products`. */
  vendor_products?: VendorProduct[];

  /** Extra pricing relation from `extraPricings()`, serialized as `extra_pricings`. */
  extra_pricings?: ExtraPricing[];

  /** Legacy camelCase relation alias used by older clients; backend JSON uses `vendor_products`. */
  vendorProducts?: VendorProduct[];

  /** Legacy camelCase relation alias used by older clients; backend JSON uses `extra_pricings`. */
  extraPricings?: ExtraPricing[];
}

export namespace VendorPricing {
  /** Translation payload applied by `HasTranslationTrait`. */
  export type Translations = Record<string, Record<string, unknown>>;
}
