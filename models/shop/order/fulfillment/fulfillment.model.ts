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

import {Order} from "../order";
import {Basket} from "../basket";

export interface Fulfillment {
  id: number;
  label: string | null;
  shop_id: number;
  basket_id: number;
  reseller_shop_id: number;
  customer_id: number;
  status: keyof typeof Fulfillment.Status;
  delivery_state: keyof typeof Basket.PhysicalOrderStates;
  /**
   * Original array of {product_id, variant_id, count}
   */
  contents: { product_id: number; variant_id: number | null; count: number }[];
  country: string;
  delivery_info: Order.IDeliveryInfo;
  price: number;
  delivery_price: number;
  discount: number;
  currency: string;
  officer_id: number;
  reserved_at: string | null;
  check_at: string | null;
  payment_at: string | null;
  confirmed_at: string | null;
  send_at: string | null;
  delivery_at: string | null;
  cancel_at: string | null;
  reject_at: string | null;
  cancel_note: string;
  reject_note: string;
  reject: string;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Fulfillment {
  /**
   * Represents the structure of a dropship request status.
   *
   * @property {string} code - The unique identifier for the status.
   * @property {string} name - The localization key or label for the status.
   * @property {string} icon - The icon associated with the status.
   */
  interface IStatus {
    code: StatusKeys;
    name: string;
    icon: string;
  }

  /**
   * Defines the possible keys for dropship request statuses.
   */
  type StatusKeys = "PENDING" | "ACCEPT" | "REJECT";

  /**
   * Enumerates the possible statuses for dropship requests, providing associated metadata.
   *
   * Each status has:
   * - A unique code to represent the status.
   * - A name (typically a localization key) for displaying to users.
   * - An icon to visually represent the status in UIs.
   */
  export const Status: Record<StatusKeys, IStatus> = {
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
}
