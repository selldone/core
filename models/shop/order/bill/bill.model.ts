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

import {Currency} from "../../../../enums/payment/Currency";

export interface Bill {
  id: number;
  label: string | null;
  shop_id: number;
  order_id: number;
  type: string;
  order_type: string;
  payment_id: number;
  payment_type: string;
  price: number;
  currency: keyof typeof Currency;
  status: keyof typeof Bill.Status | null;
  /**
   * Basket ID
   * Basket , The basket that auto created by the bill after payment - used in subscription auto create order from linked products | Used to open auto created basket (just first basket if even it's multi!).
   */
  issued_id: number | null;
  created_at: string;
  updated_at: string;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Bill {
  /**
   * Describes the structure of a BillStatus item.
   *
   * @property code  - A unique identifier for the status.
   * @property title - A localization key for the status description.
   */
  interface IBillStatus {
    code: StatusKeys;
    title: string;
  }

  type StatusKeys = "PENDING" | "PAYED" | "CANCELED";

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
}
