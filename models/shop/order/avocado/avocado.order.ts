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

import type {User} from "../../../user/user.model";
import {AvocadoOrderStates} from "../../../../enums/avocado/AvocadoOrderStates";
import {OrderTypeCode} from "../../../../enums/order/OrderTypeCode";

export interface Avocado {
  /** Unique identifier of the order. */
  id: number;

  /** Hash address. */
  hash: string;

  /** Type of the order, e.g., AVO. */
  type: OrderTypeCode.Avocado;

  /** Identifier of the shop associated with the order. */
  shop_id: number;

  /** Identifier of the seller associated with the order. */
  seller_id: number;

  /** Identifier of the buyer associated with the order. */
  buyer_id: number;

  /** Identifier of the customer associated with the order. */
  customer_id: number;

  /** Status of the order. It can be Open, Payed, or Canceled. */
  status: Avocado.Status;

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
  receiver_info: Record<string, any>; // Expand this as needed

  /** Price of the delivery. */
  delivery_price: number;

  /** State of the delivery. */
  delivery_state:keyof typeof AvocadoOrderStates;

  /** Progress percentage of the order completion. */
  progress: number;

  /** Identifier of the payment associated with the order. */
  payment_id: number;

  /** Type of the payment associated with the order. */
  payment_type: number;

  /** Session details associated with the order. */
  session: Record<string, any>; // Expand this as needed

  /** User who made the purchase. Can be nullable. */
  buyer?: User;

  /** This refers to the buyer. */
  user: User;

  /** Timestamp indicating when the order was reserved. */
  reserved_at: string;

  /** Timestamp indicating when the order was paid. */
  pay_at: string;

  /** Timestamp indicating when the order was delivered. */
  delivery_at: string;

  /** Timestamp indicating when the order was last updated. */
  updated_at: string;

  /** Timestamp indicating when the order was created. */
  created_at: string;

  /** Reason for order rejection. Can be nullable. */
  reject?: string;

  /** Timestamp indicating when the order was rejected. Can be nullable. */
  reject_at?: string;

  /** Indicates the acquisition channel of the order. */
  channel: string;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Avocado {
  export enum Status {
    Open = "Open",
    Payed = "Payed",
    Canceled = "Canceled",
  }
}
