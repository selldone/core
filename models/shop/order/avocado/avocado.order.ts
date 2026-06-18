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
import type { AvocadoItem } from "./avocado.item";
//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

/**
 * Avocado custom order stored in `avocado`.
 *
 * Backend source: `App\Storefront\Order\Avocado\Avocado`, table `avocado`.
 * Avocado orders can be started by seller or buyer and may optionally include delivery, receiver info,
 * morph payment relation, and manually curated `avocado_items`.
 */
export interface Avocado extends Order.IOrder {
  /** Unique identifier of the order. */
  id: number;

  /** Hash address. */
  hash: string;

  /** Type of the order, e.g., AVO. */
  type: OrderTypeCode.Avocado;

  /** Identifier of the shop associated with the order. */
  shop_id: number;

  /** Identifier of the seller associated with the order. */
  seller_id: number | null;

  /** Identifier of the buyer associated with the order. */
  buyer_id: number | null;

  /** Identifier of the customer associated with the order. */
  customer_id: number | null;

  /** Status of the order. It can be Open, Payed, or Canceled. */
  status: Avocado.StatusCode;

  /** Rejection reason code. Source: nullable `avocado.reject`. */
  reject?: keyof typeof Order.RejectReasons | null;

  /** Rejection timestamp. Source: nullable `avocado.reject_at`. */
  reject_at?: string | null;

  /** Seller-defined order title. Source: nullable `avocado.title`. */
  title?: string | null;

  /** Seller-defined order message. Source: nullable `avocado.message`. */
  message?: string | null;

  /** Final price of the order, including shipping costs. */
  price: number;

  /** Currency used for the order, such as USD, EUR. */
  currency: string;

  /** Discount applied to the order. */
  discount: number;

  /** Tax applied to the order. */
  tax: number;

  /** Flag indicating if tax is included in the price. */
  tax_included: boolean;

  /** Flag indicating if the order has delivery. */
  delivery: boolean;

  /** Information about the receiver. */
  receiver_info: Order.IReceiverInfo | Avocado.JsonObject | null;

  /** Price of the delivery. */
  delivery_price: number;

  /** State of the delivery. */
  delivery_state: Avocado.StateKey;

  /** Progress percentage of the order completion. */
  progress: number;

  /** Identifier of the payment associated with the order. */
  payment_id: number | null;

  /** Type of the payment associated with the order. */
  payment_type: string | null;

  /** Session details associated with the order. */
  session: Avocado.Session | null;

  /** User who made the purchase. Can be nullable. */
  buyer?: User | null;

  /** This refers to the buyer. */
  user?: User | null;

  /** Seller relation when eager-loaded. */
  seller?: User | null;

  /** Shop relation when eager-loaded. */
  shop?: Avocado.JsonObject | null;

  /** Customer relation when eager-loaded. */
  customer?: Avocado.JsonObject | null;

  /** Avocado line items relation when eager-loaded. */
  items?: AvocadoItem[];

  /** Morph payment relation when eager-loaded. */
  payment?: Avocado.JsonObject | null;

  /** Gateway transaction morph relation when eager-loaded. */
  gateway_transaction?: Avocado.JsonObject | null;

  /** Timeline rows when eager-loaded. */
  timelines?: Avocado.JsonObject[] | null;

  /** Timestamp indicating when the order was reserved. */
  reserved_at: string | null;

  /** Timestamp indicating when the order was paid. */
  pay_at: string | null;

  /** Timestamp indicating when the order was delivered. */
  delivery_at: string | null;

  /** Timestamp indicating when the order was last updated. */
  updated_at?: string | null;

  /** Timestamp indicating when the order was created. */
  created_at?: string | null;

  /** Soft-delete timestamp. */
  deleted_at?: string | null;

  /** Indicates the acquisition channel of the order. */
  channel: string | null;

  /** Generated order label. */
  label?: string | null;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace Avocado {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by backend JSON casts. Uses an interface to avoid recursive alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by backend JSON casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Client/session attribution stored in nullable JSON `avocado.session`. */
  export interface Session extends JsonObject {
    ip?: string | null;
    country?: string | null;
    country_code?: string | null;
    os?: string | null;
    browser?: string | null;
    device?: string | null;
  }

  export enum Status {
    Open = "Open",
    Reserved = "Reserved",
    Payed = "Payed",
    Canceled = "Canceled",
  }

  export type StatusCode = `${Status}`;

  /**
   * Interface representing the structure of each delivery state.
   */
  export interface IOrderState {
    code: StateKey;
    name: string;
    icon: string;
  }

  /**
   * Enumerates the keys for various delivery states.
   */
  export type StateKey =
    | "CheckQueue"
    | "OrderConfirm"
    | "PreparingOrder"
    | "SentOrder"
    | "ToCustomer";

  /**
   * Enumerates the various delivery states with associated metadata.
   *
   * Each state provides details about its code, the localization key for its name,
   * and a Font Awesome icon class for visual representation.
   */
  export const DeliveryStates: Record<StateKey, IOrderState> = {
    CheckQueue: {
      code: "CheckQueue",
      name: "global.delivery_state.check_queue",
      icon: "fa:fas fa-shopping-basket",
    },
    OrderConfirm: {
      code: "OrderConfirm",
      name: "global.delivery_state.order_confirm",
      icon: "fa:fas fa-check",
    },
    PreparingOrder: {
      code: "PreparingOrder",
      name: "global.delivery_state.preparing_order",
      icon: "fa:fas fa-box-open",
    },
    SentOrder: {
      code: "SentOrder",
      name: "global.delivery_state.sent_order",
      icon: "fa:fas fa-shipping-fast",
    },
    ToCustomer: {
      code: "ToCustomer",
      name: "global.delivery_state.to_customer",
      icon: "fa:fas fa-check-double",
    },
  };

  /** Payload accepted when seller creates a manual avocado order. */
  export interface SellerCreate {
    title: string;
    message?: string | null;
    raw_price: number;
    currency: string;
    delivery: boolean;
    delivery_price?: number;
    tax?: number;
    tax_included?: boolean;
  }

  /** Payload used when buyer opens or resumes an avocado order. */
  export interface BuyerOpen {
    currency: string;
  }

  /** Editable avocado order fields. */
  export interface Upsert {
    title?: string | null;
    message?: string | null;
    status?: StatusCode;
    reject?: string | null;
    receiver_info?: Order.IReceiverInfo | JsonObject | null;
    delivery?: boolean;
    delivery_price?: number;
    delivery_state?: StateKey;
    progress?: number;
    channel?: string | null;
  }

  /** Report shape returned by backend avocado maintenance jobs. */
  export interface JobReport extends JsonObject {
    total: number;
    confirmed?: number;
    reject?: number;
    errors?: number;
    "trace ms"?: number;
  }
}
