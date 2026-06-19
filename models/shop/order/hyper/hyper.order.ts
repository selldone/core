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

import type { User } from "../../../user/user.model";
import { OrderTypeCode } from "../../../../enums/order/OrderTypeCode";
import { Order } from "../order";

/**
 * Hyper checkout order stored in `hyper`.
 *
 * Backend source: `App\Storefront\Order\Hyper\Hyper`, table `hyper`.
 * Hyper orders are lightweight physical checkout carts with their own item table (`hyper_items`), payment morph,
 * gateway queue/processing morphs, and timeline relation.
 */
export interface Hyper extends Order.IOrder {
  /** Unique identifier of the order. */
  id: number;

  /** Type of the order, e.g., HYP. */
  type: OrderTypeCode.Hyper;

  /** Owning shop id. Source: `hyper.shop_id`. */
  shop_id: number;

  /** Seller user id, or `null`. Source: nullable `hyper.seller_id`. */
  seller_id: number | null;

  /** Buyer user id, or `null`. Source: nullable `hyper.buyer_id`. */
  buyer_id: number | null;

  /** Shop customer id, or `null`. Source: nullable `hyper.customer_id`. */
  customer_id?: number | null;

  /** Order status. Source: `hyper.status`. */
  status: Hyper.StatusCode;

  /** Total price before tax inclusion adjustment. Source: `hyper.price`. */
  price: number;

  /** Customer currency code. Source: `hyper.currency`. */
  currency: string;

  /** Total item discount. Source: `hyper.discount`. */
  discount: number;

  /** Calculated tax amount. Source: `hyper.tax`. */
  tax: number;

  /** Whether tax is included in item prices. Source: `hyper.tax_included`. */
  tax_included: boolean;

  /** Payment morph type. Source: nullable `hyper.payment_type`. */
  payment_type: string | null;

  /** Payment morph id. Source: nullable `hyper.payment_id`. */
  payment_id: number | null;

  /** Client/session attribution. Source: nullable JSON `hyper.session`. */
  session: Hyper.Session | null;

  /** Marketing/social channel. Source: nullable `hyper.channel`. */
  channel: string | null;

  /** Reservation timestamp. Source: nullable `hyper.reserved_at`. */
  reserved_at: string | null;

  /** Payment timestamp. Source: nullable `hyper.pay_at`. */
  pay_at: string | null;

  /** Rejection timestamp. Source: nullable `hyper.reject_at`. */
  reject_at: string | null;

  /** Soft-delete timestamp. */
  deleted_at?: string | null;

  /** Creation timestamp serialized by Laravel. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. */
  updated_at?: string | null;

  /** Generated order label. */
  label: string | null;

  /** Owning shop relation when eager-loaded. */
  shop?: Hyper.JsonObject | null;

  /** Seller relation when eager-loaded. */
  seller?: User | null;

  /** Buyer relation when eager-loaded. */
  buyer?: User | null;

  /** Alias of buyer relation when eager-loaded. */
  user?: User | null;

  /** Customer relation when eager-loaded. */
  customer?: Hyper.JsonObject | null;

  /** Hyper item rows when eager-loaded. */
  items?: Hyper.Item[] | null;

  /** Gateway queue morph relation when eager-loaded. */
  que?: Hyper.JsonObject | null;

  /** Gateway processing morph relation when eager-loaded. */
  gateway_processing?: Hyper.JsonObject | null;

  /** Payment morph relation when eager-loaded. */
  payment?: Hyper.JsonObject | null;

  /** Gateway transaction morph relation when eager-loaded. */
  gateway_transaction?: Hyper.JsonObject | null;

  /** Timeline rows when eager-loaded. */
  timelines?: Hyper.JsonObject[] | null;
}

export namespace Hyper {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by backend JSON casts. Uses an interface to avoid recursive alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by backend JSON casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Order status values stored in `hyper.status`. */
  export type StatusCode = "Open" | "Reserved" | "Payed" | "Canceled" | "COD";

  /** Client/session attribution stored in nullable JSON `hyper.session`. */
  export interface Session extends JsonObject {
    ip?: string | null;
    country?: string | null;
    country_code?: string | null;
    os?: string | null;
    browser?: string | null;
    device?: string | null;
  }

  /** Hyper item row stored in `hyper_items`. */
  export interface Item extends JsonObject {
    id: number;
    hyper_id: number;
    product_id: number;
    variant_id: number | null;
    count: number;
    price: number;
    currency: string;
    dis: number;
    tax?: JsonObject | null;
    created_at?: string | null;
    updated_at?: string | null;
    product?: JsonObject | null;
    variant?: JsonObject | null;
  }

  /** Payload accepted when adding/updating a hyper checkout item. */
  export interface ItemUpsert {
    product_id: number;
    variant_id?: number | null;
    count: number;
    currency: string;
  }

  /** Calculated bill payload returned by `Hyper::calculateBill()`. */
  export interface CalculatedBill extends JsonObject {
    order_code: string;
    order_id: number;
    order_type: OrderTypeCode.Hyper;
    currency: string;
    sum: number;
    price: number;
    items_price: number;
    items_discount: number;
    discount: number;
    delivery_price: number;
    tax: number;
    tax_included: boolean;
    tax_shipping: number;
  }

  /** Report shape returned by backend hyper maintenance jobs. */
  export interface JobReport extends JsonObject {
    total: number;
    confirmed?: number;
    "has-payment-que"?: number;
    errors?: number;
    "trace ms"?: number;
  }
}
