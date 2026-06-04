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

import type { VendorPricing } from "./vendor_pricing.model";

/**
 * Marketplace vendor record.
 *
 * Backend source: `App\Shop\Vendors\Vendor`, table `vendors`.
 * Main admin controller: `ShopVendorsController`. The Eloquent model hides `note` by default; some admin
 * endpoints call `makeVisible('note')` before returning vendor rows.
 */
export interface Vendor {
  /** Vendor id. Source: `vendors.id`. */
  id: number;

  /** Owning marketplace shop id. Source: `vendors.shop_id`. */
  shop_id: number;

  /** Whether the vendor is enabled by marketplace owner. Source: `vendors.enable`. */
  enable: boolean;

  /** Whether vendor panel access is enabled. Source: `vendors.access`. */
  access: boolean;

  /** Linked vendor user id, or `null` for invited/unassigned vendors. Source: nullable `vendors.user_id`. */
  user_id: number | null;

  /** Vendor approval status. Source: `vendors.status`. */
  status: Vendor.VendorStatus;

  /** Public vendor name. Source: `vendors.name`. */
  name: string;

  /** Public vendor description. Source: nullable `vendors.description`. */
  description: string | null;

  /** Vendor contact email. Source: nullable `vendors.email`. */
  email: string | null;

  /** Vendor address. Source: nullable `vendors.address`. */
  address: string | null;

  /** Vendor website URL. Source: nullable `vendors.web`. */
  web: string | null;

  /** Vendor telephone. Source: nullable `vendors.tel`. */
  tel: string | null;

  /** Bank label/name. Source: nullable `vendors.bank`. */
  bank: string | null;

  /** Structured bank details filtered by `Vendor::FixBankDetail`. Source: nullable JSON `vendors.bank_info`. */
  bank_info: Vendor.BankInfo | null;

  /** Vendor logo path. Source: nullable `vendors.icon`. */
  icon: string | null;

  /** Landing page id. Source: nullable `vendors.page_id`. */
  page_id: number | null;

  /** Map tag id used for vendor location grouping. Source: nullable `vendors.map_id`. */
  map_id?: number | null;

  /** Default pricing model id for new vendor products. Source: nullable `vendors.pricing_id`. */
  pricing_id?: number | null;

  /** Public augment fields parsed by `AugmentHelper::ParseRawAugment`. Source: nullable JSON `vendors.augment`. */
  augment: Vendor.Augment[] | null;

  /** Public vendor slug, defaulted from `name` when not supplied. Source: nullable `vendors.slug`. */
  slug: string | null;

  /** Last marketplace payment timestamp. Source: nullable `vendors.payment_at`. */
  payment_at: string | null;

  /** Invitation email for vendors without a linked user. Source: nullable `vendors.invite`. */
  invite?: string | null;

  /** ISO-3166 alpha-2 country code. Source: nullable `vendors.country`. */
  country?: string | null;

  /** State/province. Source: nullable `vendors.state`. */
  state?: string | null;

  /** Private marketplace-owner note. Source: nullable `vendors.note`; hidden unless made visible. */
  note?: string | null;

  /** Private chat/history JSON. Source: nullable JSON `vendors.chat`. */
  chat?: Record<string, unknown>[] | Record<string, unknown> | null;

  /** Private integration metadata. Source: nullable JSON `vendors.meta`. */
  meta?: Record<string, unknown> | null;

  /** Whether vendor is registered as a business. Source: `vendors.business`. */
  business?: boolean;

  /** Business name. Source: nullable `vendors.business_name`. */
  business_name?: string | null;

  /** Tax identifier. Source: nullable `vendors.tax_id`. */
  tax_id?: string | null;

  /** Cached static counts such as shipping services/couriers/products. Source: nullable JSON `vendors.static`. */
  static?: Vendor.Static | null;

  /** Localized vendor fields keyed by locale. Source: nullable JSON `vendors.translations`. */
  translations?: Vendor.Translations | null;

  /** Soft-delete timestamp. Source: `vendors.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `vendors.created_at`. */
  created_at?: string;

  /** Last update timestamp. Source: `vendors.updated_at`. */
  updated_at?: string;

  /** Linked user relation when eager-loaded. */
  user?: Record<string, unknown> | null;

  /** Landing page relation when eager-loaded. */
  page?: Record<string, unknown> | null;

  /** Map tag relation when eager-loaded. */
  map?: Record<string, unknown> | null;

  /** Default pricing relation from `defaultPricing()`, serialized as `default_pricing`. */
  default_pricing?: VendorPricing | null;

  /** Vendor warehouse relation when eager-loaded. */
  warehouse?: Record<string, unknown> | null;

  /** Count appended by `ShopVendorsController::list` for products updated in the last day. */
  updated_vendor_products?: number;

  /** Count appended by `ShopVendorsController::list` for products created in the last day. */
  added_products?: number;

  /** Count appended by `ShopVendorsController::list` for categories created in the last day. */
  added_categories?: number;

  /** Vendor product relation when `vendorProducts()` is eager-loaded. */
  vendor_products?: Record<string, unknown>[];

  /** Owned product relation when `ownProducts()` is eager-loaded. */
  own_products?: Record<string, unknown>[];

  /** Owned category relation when `ownCategories()` is eager-loaded. */
  own_categories?: Record<string, unknown>[];
}

export namespace Vendor {
  /** Backend enum `App\Shop\Vendors\enums\VendorStatus`. */
  export enum VendorStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
  }

  /** Structured bank details retained by `Vendor::FixBankDetail`. */
  export interface BankInfo {
    account_name?: string | null;
    account_number?: string | null;
    routing_number?: string | null;
    iban?: string | null;
    swift?: string | null;
    branch_address?: string | null;
  }

  /** Public augment item accepted by `ShopVendorsController` validation. */
  export interface Augment {
    key: string;
    value: string | null;
    type?: "text" | "image" | string | null;
  }

  /** Cached counts generated by `Vendor::updateStatic()`. */
  export interface Static {
    shipping_services?: number;
    shipping_couriers?: number;
    products?: number;
    [key: string]: unknown;
  }

  /** Translation payload applied by `HasTranslationTrait`. */
  export type Translations = Record<string, Record<string, unknown>>;
}
