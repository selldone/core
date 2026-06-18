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
 * Backend source: `shop_map_tags` migration.
 * Products and vendors reference this row through nullable `map_id` foreign keys.
 */
export interface MapTag {
  /** Map tag id. Source: `shop_map_tags.id`. */
  id: number;

  /** Owning shop id. Source: `shop_map_tags.shop_id`. */
  shop_id: number;

  /** Creator / last editor user id, or `null`. Source: nullable `shop_map_tags.user_id`. */
  user_id: number | null;

  /** Filter tags used to build location filters. Source: nullable JSONB `shop_map_tags.tags`. */
  tags: MapTag.Tags;

  /** Address title. Source: required string `shop_map_tags.title`. */
  title: string;

  /** ISO 3166-1 alpha-2 country code, or `null`. Source: nullable `shop_map_tags.country` length 2. */
  country: string | null;

  /** State/province, or `null`. Source: nullable `shop_map_tags.state` length 32. */
  state: string | null;

  /** City name, or `null`. Source: nullable `shop_map_tags.city` length 128. */
  city: string | null;

  /** Full address text. Source: required text `shop_map_tags.address`. */
  address: string;

  /** Geolocation JSON payload. Source: required JSONB `shop_map_tags.location`. */
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

  /** Latitude in decimal degrees. Source: required double `shop_map_tags.lat`. */
  lat: number;

  /** Longitude in decimal degrees. Source: required double `shop_map_tags.lng`. */
  lng: number;

  /** Search/delivery range, or `null`. Source: nullable double `shop_map_tags.range`. */
  range: number | null;

  /** Creation timestamp serialized by Laravel. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. */
  updated_at?: string | null;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown> | null;

  /** Editor relation when eager-loaded. */
  user?: Record<string, unknown> | null;

  /** Product relations when the backend includes products using this map tag. */
  products?: Record<string, unknown>[];

  /** Vendor relations when the backend includes vendors using this map tag. */
  vendors?: Record<string, unknown>[];
}

export namespace MapTag {
  /** Filter tags JSONB payload. */
  export type Tags = string[] | null;

  /** Coordinate object used by Selldone frontend map helpers. */
  export interface LocationObject {
    /** Longitude in decimal degrees. */
    lng: number;

    /** Latitude in decimal degrees. */
    lat: number;

    /** Additional provider-specific location metadata preserved by JSONB storage. */
    [key: string]: unknown;
  }

  /** Backend geolocation JSON. Backend stores JSONB; SDK helpers commonly use lng/lat objects. */
  export type Location = LocationObject | [number, number] | Record<string, unknown>;

  /** Payload used when creating or updating a map tag before backend assigns ids/timestamps. */
  export type Upsert = Omit<MapTag, "id" | "created_at" | "updated_at" | "shop" | "user" | "products" | "vendors">;
}
