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
 * Backend source: `App\Storefront\Vendors\Vendor`, table `vendors`.
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
  chat?: Vendor.JsonArray | Vendor.JsonObject | null;

  /** Private integration metadata. Source: nullable JSON `vendors.meta`. */
  meta?: Vendor.Meta | null;

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

  /** Creation timestamp serialized by Laravel. Source: `vendors.created_at`. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. Source: `vendors.updated_at`. */
  updated_at?: string | null;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown> | null;

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

  /** Vendor account relations when `accounts()` is eager-loaded. */
  accounts?: Record<string, unknown>[];

  /** Vendor payment relations when `payments()` is eager-loaded. */
  payments?: Record<string, unknown>[];

  /** Vendor order relations when `vendorOrders()` is eager-loaded. */
  vendor_orders?: Record<string, unknown>[];

  /** Vendor document relations when `documents()` is eager-loaded. */
  documents?: Record<string, unknown>[];

  /** Vendor analytics rows when `data()` is eager-loaded. */
  data?: Record<string, unknown>[];

  /** Queued product imports for this vendor when eager-loaded. */
  import_que_products?: Record<string, unknown>[];

  /** Queued image imports for this vendor when eager-loaded. */
  import_que_images?: Record<string, unknown>[];

  /** Vendor notification email rows when eager-loaded. */
  vendor_emails?: Record<string, unknown>[];

  /** Shipping-service assignments owned by this vendor when eager-loaded. */
  transportation_services?: Record<string, unknown>[];

  /** Courier-person assignments owned by this vendor when eager-loaded. */
  transportation_persons?: Record<string, unknown>[];

  /** Transportation order rows for this vendor when eager-loaded. */
  transportation_orders?: Record<string, unknown>[];

  /** Pending member invitations when `memberInvites()` is eager-loaded. */
  member_invites?: Record<string, unknown>[];

  /** Vendor panel members when `members()` is eager-loaded. */
  members?: Record<string, unknown>[];

  /** Marketplace shipping boxes owned by this vendor when eager-loaded. */
  boxes?: Record<string, unknown>[];

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

  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by Laravel JSON casts. Uses an interface to avoid circular alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by Laravel JSON casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

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
    [key: string]: JsonValue | undefined;
  }

  /** Private vendor integration metadata. */
  export interface Meta extends JsonObject {
    /** Connected Stripe account id. Backend constant: `META_STRIPE_USER_ID = "stripe_user_id"`. */
    stripe_user_id?: string | null;
  }

  /** Translation payload applied by `HasTranslationTrait`. */
  export type Translations = Record<string, JsonObject>;

  /** Payload accepted when creating/updating a marketplace vendor before backend assigns ids/timestamps. */
  export interface Upsert {
    invite?: string | null;
    enable: boolean;
    access: boolean;
    user_id?: number | null;
    name: string;
    description?: string | null;
    email?: string | null;
    address?: string | null;
    web?: string | null;
    tel?: string | null;
    bank?: string | null;
    bank_info?: BankInfo | null;
    page_id?: number | null;
    map_id?: number | null;
    icon?: string | null;
    status?: VendorStatus;
    country?: string | null;
    state?: string | null;
    business?: boolean;
    business_name?: string | null;
    tax_id?: string | null;
    pricing_id?: number | null;
    augment?: Augment[] | null;
    slug?: string | null;
  }
}
