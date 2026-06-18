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
 * Shop transportation/shipping method.
 *
 * Backend source: `App\Storefront\Transportation\Transportation`, table `shop_transportation`.
 * Used by checkout shipping calculation, pickup selection, marketplace direct shipping, courier persons, and external
 * delivery-service integrations.
 */
export interface Transportation {
  /** Transportation id. Source: `shop_transportation.id`. */
  id: number;

  /** Owning shop id. */
  shop_id: number;

  /** Transportation repository/type code, such as pickup or a shipping method key. */
  type: string;

  /** Whether this method is enabled for checkout. */
  enable: boolean;

  /** Maximum supported distance in meters/kilometers according to backend checkout calculation. */
  distance: number;

  /** Maximum package weight supported by this method. */
  max_weight: number;

  /** Maximum package width. */
  max_w: number;

  /** Maximum package length. */
  max_l: number;

  /** Maximum package height. */
  max_h: number;

  /** ETA mode. Backend defaults to `ETA::WEEKDAY_TIMEFRAME` for new rows when omitted. */
  eta: string | null;

  /** Estimated time to delivery/departure in hours. */
  etd: number;

  /** Days of operation. Source: array cast from text/json-style storage. */
  days: Transportation.Day[];

  /** Time spans during which the transportation operates. */
  time_spans: Transportation.TimeSpan[];

  /** Whether this method operates on holidays. */
  holidays: boolean;

  /** Currency used for shipping cost calculation. */
  currency: string;

  /** Constant/fixed amount in shipping cost formula. */
  const: number;

  /** Distance coefficient in shipping cost formula. */
  distance_cof: number;

  /** Weight coefficient in shipping cost formula. */
  weight_cof: number;

  /** Basket price coefficient in shipping cost formula. */
  price_cof: number;

  /** Distance-weight coefficient in shipping cost formula. */
  distance_weight_cof: number;

  /** Whether free shipping can apply. */
  free_shipping: boolean;

  /** Basket amount limit above which free shipping is provided. */
  free_shipping_limit: number;

  /** Whether cash on delivery is accepted for this method. */
  cod: boolean;

  /** Whether shipping-on-delivery/postage due is accepted for this method. */
  sod: boolean;

  /** Digest of courier/service info updated by backend relation changes. */
  info: Transportation.Info | null;

  /** Pickup addresses for customers to select from. */
  pickups: Transportation.Pickup[] | null;

  /** Custom public title for the transportation method. */
  title: string | null;

  /** Custom public logo path. */
  logo: string | null;

  /**
   * Location pricing profiles keyed by ISO alpha-2 country code.
   *
   * Backend normalizes country/state formula numbers in `SetTransportation()`.
   */
  profiles?: Transportation.Profiles | null;

  /** Whether this method is enabled for marketplace direct vendor shipping. */
  marketplace?: boolean;

  /** Soft-delete timestamp when returned. */
  deleted_at?: string | null;

  /** Creation timestamp serialized by Laravel. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. */
  updated_at?: string | null;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown> | null;

  /** Courier-person relation rows when eager-loaded. */
  transportationPersons?: Transportation.Person[];

  /** User rows reached through transportation persons when eager-loaded. */
  persons?: Record<string, unknown>[];

  /** External delivery-service relation rows when eager-loaded. */
  transportationServices?: Transportation.Service[];

  /** Delivery service rows reached through transportation services when eager-loaded. */
  services?: Record<string, unknown>[];

  /** Transportation order rows when eager-loaded. */
  transportationOrders?: Record<string, unknown>[];
}

export namespace Transportation {
  export type JsonPrimitive = string | number | boolean | null;

  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Day code/value accepted by dashboard transportation forms. */
  export type Day = string | number;

  /** Delivery time span. */
  export interface TimeSpan extends JsonObject {
    start?: string | null;
    end?: string | null;
  }

  /** Pickup address payload. */
  export interface Pickup extends JsonObject {
    title?: string | null;
    country?: string | null;
    state?: string | null;
    city?: string | null;
    address?: string | null;
    location?: { lng: number; lat: number } | [number, number] | JsonObject | null;
    no?: string | null;
    unit?: string | null;
    name?: string | null;
    phone?: string | null;
    postal?: string | null;
  }

  /** Cached info digest updated by `onTransportationPersonChange`, `onTransportationServiceChange`, and `onError`. */
  export interface Info extends JsonObject {
    user_ids?: number[];
    service_ids?: number[];
    errors?: string[];
    users?: number;
  }

  /** Formula values used per country or state. */
  export interface PriceFormula extends JsonObject {
    const: number;
    distance_cof: number;
    weight_cof: number;
    distance_weight_cof: number;
    price_cof: number;
  }

  /** Country profile with optional state overrides. */
  export interface Profile extends PriceFormula {
    states?: Record<string, PriceFormula> | null;
  }

  /** Profiles keyed by ISO alpha-2 country code. */
  export type Profiles = Record<string, Profile>;

  /** Courier person assignment row. Backend table: `shop_transportation_persons`. */
  export interface Person {
    id: number;
    transportation_id: number;
    user_id: number;
    vendor_id?: number | null;
    enable: boolean;
    jobs: number;
    process: number;
    success: number;
    fail: number;
    duration: number;
    distance: number;
    reset_at: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    user?: Record<string, unknown> | null;
    vendor?: Record<string, unknown> | null;
  }

  /** External delivery-service assignment row. Backend table: `shop_transportation_services`. */
  export interface Service {
    id: number;
    transportation_id: number;
    service_id: number;
    vendor_id?: number | null;
    enable: boolean;
    jobs: number;
    process: number;
    success: number;
    fail: number;
    duration: number;
    distance: number;
    reset_at: string | null;
    livemode: boolean;
    username?: string | null;
    password?: string | null;
    expire_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    deliveryService?: Record<string, unknown> | null;
    vendor?: Record<string, unknown> | null;
  }
}
