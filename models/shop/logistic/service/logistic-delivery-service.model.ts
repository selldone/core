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
 * Delivery service provider definition.
 *
 * Backend source: `App\Shop\Transportation\DeliveryService`, table `delivery_services`.
 * Shop-specific enablement/statistics live in `shop_transportation_services`; this model describes the provider.
 */
export interface DeliveryService {
  /** Delivery service id. Source: `delivery_services.id`. */
  id: number;

  /** Unique service code. Source: `delivery_services.code`. */
  code: string;

  /** Whether the service is globally enabled. Source: `delivery_services.enable` cast to boolean. */
  enable: boolean;

  /** Whether the service uses OAuth. Source: `delivery_services.oauth` cast to boolean. */
  oauth: boolean;

  /** Supported transportation types. Source: nullable JSON `delivery_services.types`. */
  types: string[] | null;

  /** Number of orders this service can accept in one shipping batch. Source: `delivery_services.batch`. */
  batch: number;

  /** Service name. Source: `delivery_services.name`. */
  name: string;

  /** Service description, or `null`. Source: nullable `delivery_services.description`. */
  description: string | null;

  /** Service icon/logo path, or `null`. Source: nullable `delivery_services.icon`. */
  icon: string | null;

  /** Dashboard/provider URL, or `null`. Source: nullable `delivery_services.url`. */
  url: string | null;

  /** Failed API call count. Source: `delivery_services.fail_calls`. */
  fail_calls: number;

  /** Total delivery jobs. Source: `delivery_services.jobs`. */
  jobs: number;

  /** Jobs currently in process. Source: `delivery_services.process`. */
  process: number;

  /** Successful jobs count. Source: `delivery_services.success`. */
  success: number;

  /** Failed jobs count. Source: `delivery_services.fail`. */
  fail: number;

  /** Sum of successful delivery durations, in hours. Source: `delivery_services.duration`. */
  duration: number;

  /** Sum of successful delivery distances, in kilometers. Source: `delivery_services.distance`. */
  distance: number;

  /** Last stats reset timestamp, or `null`. Source: nullable `delivery_services.reset_at`. */
  reset_at: string | null;

  /** Soft-delete timestamp when included. Source: `delivery_services.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `delivery_services.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `delivery_services.updated_at`. */
  updated_at?: string | null;

  /** Shop-specific service rows when `DeliveryService::transportationServices()` is eager-loaded. */
  transportation_services?: DeliveryService.JsonObject[] | null;
}

export namespace DeliveryService {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object used for eager-loaded relation payloads. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array used for eager-loaded relation payloads. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Transportation repository code supported by this provider. */
  export type TransportationType = string;

  /** Provider statistics stored on `delivery_services`. */
  export interface Stats {
    fail_calls?: number;
    jobs?: number;
    process?: number;
    success?: number;
    fail?: number;
    duration?: number;
    distance?: number;
    reset_at?: string | null;
  }

  /** Payload accepted by backend delivery-service registration helpers. */
  export interface Upsert extends Stats {
    code: string;
    enable: boolean;
    oauth: boolean;
    types: TransportationType[];
    batch: number;
    name: string;
    description?: string | null;
    icon?: string | null;
    url?: string | null;
  }
}
