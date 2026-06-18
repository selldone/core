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
 * Shop or vendor warehouse / sender address.
 *
 * Backend source: `App\Storefront\Warehouse\Warehouse`, table `shop_warehouse`.
 * `Warehouse::GetWarehouse` creates either a shop-level warehouse (`vendor_id = null`) or a vendor-level warehouse.
 */
export interface Warehouse {
  /** Warehouse id. Source: `shop_warehouse.id`. */
  id: number;

  /** Owning shop id. Source: `shop_warehouse.shop_id`. */
  shop_id: number;

  /** Vendor id for vendor warehouse, or `null` for shop warehouse. Source: nullable `shop_warehouse.vendor_id`. */
  vendor_id?: number | null;

  /** Warehouse title, or `null`. Source: nullable `shop_warehouse.title`. */
  title: string | null;

  /** Country code, or `null`. Source: nullable `shop_warehouse.country`. */
  country: string | null;

  /** State/province, or `null`. Source: nullable `shop_warehouse.state`. */
  state: string | null;

  /** State code, or `null`. Source: nullable `shop_warehouse.state_code`. */
  state_code?: string | null;

  /** City, or `null`. Source: nullable `shop_warehouse.city`. */
  city: string | null;

  /** Address text, or `null`. Source: nullable `shop_warehouse.address`. */
  address: string | null;

  /** Geolocation JSON decoded by Eloquent cast, or `null`. Source: nullable JSON `shop_warehouse.location`. */
  location: Warehouse.Location | null;

  /** Building number, or `null`. Source: nullable `shop_warehouse.no`. */
  no: string | null;

  /** Building unit, or `null`. Source: nullable `shop_warehouse.unit`. */
  unit: string | null;

  /** Contact/receiver name, or `null`. Source: nullable `shop_warehouse.name`. */
  name: string | null;

  /** Contact phone, or `null`. Source: nullable `shop_warehouse.phone`. */
  phone: string | null;

  /** Delivery message, or `null`. Source: nullable `shop_warehouse.message`. */
  message: string | null;

  /** Postal code, or `null`. Source: nullable `shop_warehouse.postal`. */
  postal: string | null;

  /** Additional warehouse info. Source: nullable JSON `shop_warehouse.info`. */
  info?: Warehouse.JsonObject | null;

  /** Soft-delete timestamp when included. Source: `shop_warehouse.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp serialized by Laravel. Source: `shop_warehouse.created_at`. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. Source: `shop_warehouse.updated_at`. */
  updated_at?: string | null;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown> | null;

  /** Vendor relation when eager-loaded. */
  vendor?: Record<string, unknown> | null;
}

export namespace Warehouse {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by Laravel JSON casts. Uses an interface to avoid circular alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by Laravel JSON casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Geographic coordinates used by warehouse address JSON. */
  export interface IGeoLocation {
    lat?: number;
    lng?: number;
    latitude?: number;
    longitude?: number;
    [key: string]: JsonValue | undefined;
  }

  /** Stored geolocation shape accepted by legacy clients and map providers. */
  export type Location = IGeoLocation | [number, number] | JsonObject;

  /** Receiver-info payload produced by `Warehouse::getReceiverInfoForVendor()`. */
  export interface ReceiverInfo {
    id: number;
    title: string | null;
    country: string | null;
    state: string | null;
    city: string | null;
    address: string | null;
    location: Location | null;
    no: string | null;
    unit: string | null;
    name: string;
    phone: string | null;
    message: string | null;
    postal: string | null;
  }

  /** Payload accepted when editing warehouse address/contact fields. */
  export interface Upsert {
    vendor_id?: number | null;
    title?: string | null;
    country?: string | null;
    state?: string | null;
    state_code?: string | null;
    city?: string | null;
    address?: string | null;
    location?: Location | null;
    no?: string | null;
    unit?: string | null;
    name?: string | null;
    phone?: string | null;
    message?: string | null;
    postal?: string | null;
    info?: JsonObject | null;
  }
}
