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

import { Order } from "../order";
import { Basket } from "../basket";
import type { BasketItem } from "../basket/basket_item.model";

/**
 * Drop-shipping fulfillment order stored in `fulfillment`.
 *
 * Backend source: `App\Storefront\DropShipping\Fulfillment`, table `fulfillment`.
 * Fulfillments are created after basket payment for reseller/drop-shipping items and store content,
 * delivery, price, status, and lifecycle timestamps independently from the reseller basket.
 */
export interface Fulfillment {
  /** Fulfillment id. Source: `fulfillment.id`. */
  id: number;

  /** Generated order label. */
  label: string | null;

  /** Universe item type. Backend default: `FUL`. */
  type?: Fulfillment.TypeCode;

  /** Original supplier shop id. */
  shop_id: number;

  /** Reseller basket id that generated this fulfillment. */
  basket_id: number;

  /** Reseller shop id. */
  reseller_shop_id: number;

  /** Supplier-side customer id, or `null` when no customer row exists. */
  customer_id: number | null;

  /** Fulfillment payment/order status. */
  status: Fulfillment.StatusCode;

  /** Delivery lifecycle state. */
  delivery_state: Order.DeliveryStateCode;

  /**
   * Original array of {product_id, variant_id, count}
   */
  contents: Fulfillment.ContentItem[] | null;

  /** Shipping destination country code. */
  country: string;

  /** Delivery information copied/calculated from the reseller basket. */
  delivery_info: Order.IDeliveryInfo | Fulfillment.JsonObject | null;

  /** Supplier cost for contained items. */
  price: number;

  /** Supplier shipping cost. */
  delivery_price: number;

  /** Supplier-side discount. */
  discount: number;

  /** Fulfillment currency. */
  currency: string;

  /** Supplier officer assigned to the fulfillment, or `null`. */
  officer_id: number | null;

  /** Reservation timestamp. */
  reserved_at: string | null;

  /** Check/review timestamp. */
  check_at: string | null;

  /** Supplier payment timestamp. */
  payment_at: string | null;

  /** Main seller payment confirmation timestamp. */
  confirmed_at: string | null;

  /** Send/shipped timestamp. */
  send_at: string | null;

  /** Delivered timestamp. */
  delivery_at: string | null;

  /** Cancellation timestamp. */
  cancel_at: string | null;

  /** Rejection timestamp. */
  reject_at: string | null;

  /** Cancellation note. */
  cancel_note: string | null;

  /** Rejection note. */
  reject_note: string | null;

  /** Rejection reason code. */
  reject: string | null;

  /** Soft-delete timestamp. */
  deleted_at?: string | null;

  /** Creation timestamp serialized by Laravel. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. */
  updated_at?: string | null;

  /** Timeline relation when eager-loaded. */
  timelines?: Fulfillment.JsonObject[] | null;

  /** Supplier shop relation when eager-loaded. */
  shop?: Fulfillment.JsonObject | null;

  /** Reseller basket relation when eager-loaded. */
  basket?: Partial<Basket> | null;

  /** Reseller shop relation when eager-loaded. */
  resellerShop?: Fulfillment.JsonObject | null;

  /** Reseller shop relation in Laravel snake_case serialization. */
  reseller_shop?: Fulfillment.JsonObject | null;

  /** Buyer relation resolved through reseller shop when eager-loaded. */
  buyer?: Fulfillment.JsonObject | null;

  /** Customer relation when eager-loaded. */
  customer?: Fulfillment.JsonObject | null;

  /** Officer relation when eager-loaded. */
  officer?: Fulfillment.JsonObject | null;

  /** Basket items assigned to this fulfillment. */
  items?: Partial<BasketItem>[];

  /** Snake-case alias sometimes returned by resource serializers for assigned items. */
  basket_items?: Partial<BasketItem>[] | null;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Fulfillment {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by Laravel JSON casts. Uses an interface to avoid circular alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by Laravel JSON casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Backend fulfillment type code. */
  export type TypeCode = "FUL";

  /** Backend order status values stored in `fulfillment.status`. */
  export type StatusCode = "Reserved" | "Payed" | "Canceled" | string;

  /** Product/variant/count item stored inside `fulfillment.contents`. */
  export interface ContentItem extends JsonObject {
    product_id: number;
    variant_id: number | null;
    count: number;
  }

  /** Volume payload calculated by fulfillment helper methods. */
  export interface Volume extends JsonObject {
    width: number;
    length: number;
    height: number;
  }

  /**
   * Represents the structure of a dropship request status.
   *
   * @property {string} code - The unique identifier for the status.
   * @property {string} name - The localization key or label for the status.
   * @property {string} icon - The icon associated with the status.
   */
  export interface IStatus {
    code: RequestStatusKeys;
    name: string;
    icon: string;
  }

  /**
   * Defines the possible keys for dropship request statuses.
   */
  export type RequestStatusKeys = "PENDING" | "ACCEPT" | "REJECT";

  /**
   * Enumerates the possible statuses for dropship requests, providing associated metadata.
   *
   * Each status has:
   * - A unique code to represent the status.
   * - A name (typically a localization key) for displaying to users.
   * - An icon to visually represent the status in UIs.
   */
  export const Status: Record<RequestStatusKeys, IStatus> = {
    PENDING: {
      code: "PENDING",
      name: "dropship_request_status.PENDING",
      icon: "pending_actions",
    },
    ACCEPT: {
      code: "ACCEPT",
      name: "dropship_request_status.ACCEPT",
      icon: "task_alt",
    },
    REJECT: {
      code: "REJECT",
      name: "dropship_request_status.REJECT",
      icon: "highlight_off",
    },
  };

  /** Payload accepted when manually updating fulfillment delivery/order state. */
  export interface Upsert {
    status?: StatusCode;
    delivery_state?: Order.DeliveryStateCode;
    delivery_info?: Order.IDeliveryInfo | JsonObject | null;
    officer_id?: number | null;
    check_at?: string | null;
    payment_at?: string | null;
    confirmed_at?: string | null;
    send_at?: string | null;
    delivery_at?: string | null;
    cancel_at?: string | null;
    reject_at?: string | null;
    cancel_note?: string | null;
    reject_note?: string | null;
    reject?: string | null;
  }

  /** Payload accepted by prepare/send/delivery action endpoints. */
  export interface DeliveryAction {
    delivery_info?: Order.IDeliveryInfo | JsonObject | null;
    delivery_state?: Order.DeliveryStateCode;
    officer_id?: number | null;
    transportation_person_id?: number | null;
    transportation_service_id?: number | null;
  }
}
