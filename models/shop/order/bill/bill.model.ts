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

import { Currency } from "../../../../enums/payment/Currency";

/**
 * Payable bill row stored in `shop_bills`.
 *
 * Backend source: `App\Storefront\Order\Bill\ShopBill`, table `shop_bills`.
 * Bills are morph-linked to an order (`order_type` / `order_id`) and optionally to a payment
 * (`payment_type` / `payment_id`). Subscription flows may also link `issued_id` to the auto-created basket.
 */
export interface Bill {
  /** Bill id. Source: `shop_bills.id`. */
  id: number;

  /** Human-readable/generated bill label. Added by label migration. */
  label: string | null;

  /** Owning shop id. */
  shop_id: number;

  /** Morph target order id, or `null` before association. */
  order_id: number | null;

  /** Universe item type. Backend default: `BILL`. */
  type: string;

  /** Morph target order class/type, or `null`. */
  order_type: string | null;

  /** Morph target payment id, or `null` until payment is attached. */
  payment_id: number | null;

  /** Morph target payment class/type, or `null`. */
  payment_type: string | null;

  /** Bill amount. */
  price: number;

  /** Bill currency. */
  currency: keyof typeof Currency;

  /** Bill payment status. */
  status: Bill.StatusKeys | null;

  /**
   * Basket ID
   * Basket , The basket that auto created by the bill after payment - used in subscription auto create order from linked products | Used to open auto created basket (just first basket if even it's multi!).
   */
  issued_id: number | null;

  /** Soft-delete timestamp. */
  deleted_at?: string | null;

  /** Creation timestamp serialized by Laravel. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. */
  updated_at?: string | null;

  /** Owning shop relation when eager-loaded. */
  shop?: Bill.JsonObject | null;

  /** Issued basket relation when eager-loaded. */
  issued?: Bill.JsonObject | null;

  /** Morph order relation when eager-loaded. */
  order?: Bill.JsonObject | null;

  /** Morph payment relation when eager-loaded. */
  payment?: Bill.JsonObject | null;

  /** Cash transaction morph relation when eager-loaded. */
  cash?: Bill.JsonObject | null;

  /** Gift cards used to pay this bill. */
  gift_cards?: Bill.JsonObject[] | null;

  /** CamelCase alias for `gift_cards` used by relation helpers. */
  giftCards?: Bill.JsonObject[] | null;

  /** Gateway queue rows attached to this bill. */
  gateway_ques?: Bill.JsonObject[] | null;

  /** CamelCase alias for `gateway_ques` used by relation helpers. */
  gatewayQues?: Bill.JsonObject[] | null;

  /** Gateway transaction morph relation when eager-loaded. */
  gateway_transaction?: Bill.JsonObject | null;

  /** CamelCase alias for `gateway_transaction` used by relation helpers. */
  gatewayTransaction?: Bill.JsonObject | null;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Bill {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object used for eager-loaded morph relation payloads. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array used for eager-loaded morph relation payloads. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /**
   * Describes the structure of a BillStatus item.
   *
   * @property code  - A unique identifier for the status.
   * @property title - A localization key for the status description.
   */
  export interface IBillStatus {
    code: StatusKeys;
    title: string;
  }

  export type StatusKeys = "PENDING" | "PAYED" | "CANCELED";

  /**
   * An enumeration of possible bill statuses.
   *
   * @property PENDING  - Represents a bill that is awaiting payment.
   * @property PAYED    - Represents a bill that has been successfully paid.
   * @property CANCELED - Represents a bill that has been canceled.
   */
  export const Status: Record<StatusKeys, IBillStatus> = {
    PENDING: {
      code: "PENDING",
      title: "global.commons.pending",
    },
    PAYED: {
      code: "PAYED",
      title: "global.commons.paid",
    },
    CANCELED: {
      code: "CANCELED",
      title: "global.commons.canceled",
    },
  };

  /** Payload accepted when creating a bill before backend associates payment and generated labels. */
  export interface Create {
    shop_id: number;
    order_id?: number | null;
    order_type?: string | null;
    price: number;
    currency: keyof typeof Currency;
    status?: StatusKeys;
    issued_id?: number | null;
  }

  /** Editable bill fields exposed by process-center bill actions. */
  export interface Upsert {
    price?: number;
    currency?: keyof typeof Currency;
    status?: StatusKeys;
    payment_id?: number | null;
    payment_type?: string | null;
    issued_id?: number | null;
  }

  /** Payload used by cash/manual payment confirmation actions. */
  export interface ConfirmPayment {
    gateway_code?: string | null;
    payment_id?: number | null;
    payment_type?: string | null;
    status?: Extract<StatusKeys, "PAYED" | "CANCELED">;
  }
}
