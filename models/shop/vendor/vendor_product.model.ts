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
import type { Product } from "../product/product.model";
import type { ProductVariant } from "../product/product_variant.model";
import type { Shop } from "../shop.model";
import type { Vendor } from "./vendor.model";
import type { VendorPricing } from "./vendor_pricing.model";

/**
 * Vendor-specific product offer/pricing row.
 *
 * Backend source: `App\Shop\Vendors\VendorProduct`, table `vendor_products`.
 * Managed by `ProductVendorsController`; list endpoints eager-load `vendor`, `variant`, `pricing`, and a compact `product`.
 */
export interface VendorProduct {
  /** Vendor-product row id. Source: `vendor_products.id`. */
  id: number;

  /** Owning marketplace shop id. Source: `vendor_products.shop_id`. */
  shop_id: number;

  /** Product id. Source: `vendor_products.product_id`. */
  product_id: number;

  /** Variant id for variant-specific vendor rows, or `null` for product-level rows. Source: nullable `vendor_products.variant_id`. */
  variant_id: number | null;

  /** Vendor id. Source: `vendor_products.vendor_id`. */
  vendor_id: number;

  /** Linked pricing plan id, or `null` for manual price. Source: nullable `vendor_products.pricing_id`. */
  pricing_id: number | null;

  /** Whether this vendor row can be shown/used when quantity is positive. Source: `vendor_products.enable`. */
  enable: boolean;

  /** Raw price set by vendor before marketplace pricing. Source: `vendor_products.raw_price`. */
  raw_price: number;

  /** Marketplace-facing price after pricing-plan calculation. Source: `vendor_products.price`. */
  price: number;

  /** ISO currency code from backend `Currency::GetCurrenciesList()`. Source: `vendor_products.currency`. */
  currency: string;

  /** Commission amount stored on vendor product. Source: `vendor_products.commission`. */
  commission: number;

  /** Absolute discount amount in `currency`. Source: `vendor_products.discount`. */
  discount: number;

  /** Discount start timestamp, or `null` when active immediately. Source: nullable `vendor_products.dis_start`. */
  dis_start: string | null;

  /** Discount end timestamp, or `null` when no expiry is set. Source: nullable `vendor_products.dis_end`. */
  dis_end: string | null;

  /** Available quantity; changed from integer to float in migration `2025_01_13_100003`. */
  quantity: number;

  /** Lead time in hours; `-1` is accepted by update validation. Source: `vendor_products.lead`. */
  lead: number;

  /** Creation timestamp. Source: `vendor_products.created_at`. */
  created_at: string;

  /** Last update timestamp. Source: `vendor_products.updated_at`. */
  updated_at: string;

  /** Shop relation when eager-loaded. */
  shop?: Shop;

  /** Product relation when eager-loaded. */
  product?: Product | Record<string, unknown>;

  /** Variant relation when eager-loaded. */
  variant?: ProductVariant | null;

  /** Vendor relation when eager-loaded. */
  vendor?: Pick<Vendor, "id" | "name" | "icon"> | Vendor;

  /** Pricing relation when eager-loaded. */
  pricing?: VendorPricing | null;

  /** Extra pricing relation from `extraPricings()`, serialized as `extra_pricings`. */
  extra_pricings?: ExtraPricing[];

  /** Legacy camelCase relation alias used by older clients; backend JSON uses `extra_pricings`. */
  extraPricings?: ExtraPricing[];
}
