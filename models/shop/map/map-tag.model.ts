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
 * Shop map/address tag used by products and vendors.
 *
 * Backend source: `App\Shop\Map\MapTag`, table `shop_map_tags`.
 * Products and vendors reference this row through nullable `map_id` foreign keys.
 */
export interface MapTag {
  /** Map tag id. Source: `shop_map_tags.id`. */
  id: number;

  /** Owning shop id. Source: `shop_map_tags.shop_id`. */
  shop_id: number;

  /** Creator / last editor user id, or `null`. Source: nullable `shop_map_tags.user_id`. */
  user_id: number | null;

  /** Filter tags. Source: nullable JSON `shop_map_tags.tags`. */
  tags: string[] | null;

  /** Address title. Source: `shop_map_tags.title`. */
  title: string;

  /** Country code, or `null`. Source: nullable `shop_map_tags.country` (2 chars). */
  country: string | null;

  /** State/province, or `null`. Source: nullable `shop_map_tags.state`. */
  state: string | null;

  /** City, or `null`. Source: nullable `shop_map_tags.city`. */
  city: string | null;

  /** Address text. Source: `shop_map_tags.address`. */
  address: string;

  /** Geolocation JSON payload. Source: `shop_map_tags.location`. */
  location: MapTag.Location;

  /** Building number, or `null`. Source: nullable `shop_map_tags.no`. */
  no: string | null;

  /** Building unit, or `null`. Source: nullable `shop_map_tags.unit`. */
  unit: string | null;

  /** Contact/receiver name, or `null`. Source: nullable `shop_map_tags.name`. */
  name: string | null;

  /** Contact phone, or `null`. Source: nullable `shop_map_tags.phone`. */
  phone: string | null;

  /** Delivery/address message, or `null`. Source: nullable `shop_map_tags.message`. */
  message: string | null;

  /** Postal code, or `null`. Source: nullable `shop_map_tags.postal`. */
  postal: string | null;

  /** Latitude. Source: `shop_map_tags.lat`. */
  lat: number;

  /** Longitude. Source: `shop_map_tags.lng`. */
  lng: number;

  /** Search/delivery range, or `null`. Source: nullable `shop_map_tags.range`. */
  range: number | null;

  /** Creation timestamp. Source: `shop_map_tags.created_at`. */
  created_at?: string;

  /** Last update timestamp. Source: `shop_map_tags.updated_at`. */
  updated_at?: string;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown>;

  /** Editor relation when eager-loaded. */
  user?: Record<string, unknown> | null;

  /** Product relations when `MapTag::products()` is eager-loaded. */
  products?: Record<string, unknown>[];

  /** Vendor relations when `MapTag::vendors()` is eager-loaded. */
  vendors?: Record<string, unknown>[];
}

export namespace MapTag {
  /** Backend geolocation JSON. Backend accepts an array/object; SDK helpers commonly use lng/lat objects. */
  export type Location = { lng: number; lat: number } | [number, number] | Record<string, unknown>;
}
