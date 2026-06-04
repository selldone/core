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
 * Backend source: `App\Shop\Warehouse\Warehouse`, table `shop_warehouse`.
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

  /** Geolocation JSON/string decoded by Eloquent cast, or `null`. Source: nullable `shop_warehouse.location`. */
  location: Warehouse.IGeoLocation | [number, number] | Record<string, unknown> | null;

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
  info?: Record<string, unknown> | null;

  /** Soft-delete timestamp when included. Source: `shop_warehouse.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `shop_warehouse.created_at`. */
  created_at?: string;

  /** Last update timestamp. Source: `shop_warehouse.updated_at`. */
  updated_at?: string;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown>;

  /** Vendor relation when eager-loaded. */
  vendor?: Record<string, unknown> | null;
}

export namespace Warehouse {
  /** Geographic coordinates used by warehouse address JSON. */
  export interface IGeoLocation {
    lat?: number;
    lng?: number;
    latitude?: number;
    longitude?: number;
    [key: string]: unknown;
  }
}
