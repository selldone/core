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
 * Basket item return request stored in `shop_basket_item_return`.
 *
 * Backend source: `App\Storefront\Order\Basket\BasketItemReturn`, table `shop_basket_item_return`.
 * `CreateReturnRequest` creates or updates one return request per basket item and resets its state to `Pending`.
 *
 * @property {number} id - The unique identifier for the basket item return.
 * @property {number} user_id - The identifier of the user who is returning the item.
 * @property {number} shop_id - The identifier of the shop where the item was purchased.
 * @property {number} item_id - The identifier of the item being returned.
 * @property {string} reason - The reason for returning the item.
 * @property {number} count - The number of items being returned.
 * @property {string} note - Any additional notes regarding the return.
 * @property {string} state - The state of the return (e.g., "Pending", "Accepted", "Rejected").
 * @property {string} image - A URL to an image of the item being returned.
 * @property {string} video - A URL to a video of the item being returned.
 * @property {string} voice - A URL to a voice recording related to the return.
 */
export interface BasketItemReturn {
  id: number;
  user_id: number;
  shop_id: number;
  item_id: number;
  reason: BasketItemReturn.ReasonValues;
  count: number;
  note: string | null;
  state: BasketItemReturn.StateKeys;
  image?: string | null;
  video?: string | null;
  voice?: string | null;
  vendor_id?: number | null;
  vendor_order_id?: number | null;
  deleted_at?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  user?: Record<string, unknown> | null;
  shop?: Record<string, unknown> | null;
  basketItem?: Record<string, unknown> | null;
  basket_item?: Record<string, unknown> | null;
  vendor?: Record<string, unknown> | null;
  vendorOrder?: Record<string, unknown> | null;
  vendor_order?: Record<string, unknown> | null;
}

export namespace BasketItemReturn {
  /**
   * Represents the structure of a return request state.
   *
   * @property {string} code - The unique identifier for the state.
   * @property {string} name - The localization key or label for the state.
   * @property {string} icon - The icon associated with the state.
   * @property {string} color - The color code associated with the state.
   */
  export interface IState {
    code: StateKeys;
    name: string;
    icon: string;
    color: string;
  }

  /**
   * Defines the possible keys for return request states.
   */
  export type StateKeys = "Pending" | "Accepted" | "Rejected";

  /**
   * Enumerates the possible states for return requests, providing associated metadata.
   *
   * Each state has:
   * - A unique code to represent the state.
   * - A name (typically a localization key) for displaying to users.
   * - An icon to visually represent the state in UIs.
   * - A color code to represent the state visually.
   */
  export const States: Record<StateKeys, IState> = {
    Pending: {
      code: "Pending",
      name: "global.return_request_state.pending",
      icon: "fa:fas fa-hourglass-half",
      color: "#F57C00",
    },
    Accepted: {
      code: "Accepted",
      name: "global.return_request_state.accepted",
      icon: "fa:fas fa-check",
      color: "#388E3C",
    },
    Rejected: {
      code: "Rejected",
      name: "global.return_request_state.rejected",
      icon: "fa:fas fa-times",
      color: "#D32F2F",
    },
  };

  /**
   * Represents the structure of a return reason.
   *
   * @property {string} value - The unique identifier for the return reason.
   * @property {string} title - The localization key or label for the return reason.
   */
  export interface IReason {
    value: ReasonValues;
    title: string;
  }

  /**
   * Defines the possible values for return reasons.
   */
  export type ReasonValues = "U1" | "U2" | "U3" | "U4" | "U5" | "U6" | "U7";

  /**
   * Enumerates the possible return reasons, categorized by type.
   *
   * Each reason has:
   * - A unique value to represent the reason.
   * - A title (typically a localization key) for displaying to users.
   */
  export const Reason: Record<"physical", IReason[]> = {
    physical: [
      { value: "U1", title: "global.return_order_reason.physical.U1" },
      { value: "U2", title: "global.return_order_reason.physical.U2" },
      { value: "U3", title: "global.return_order_reason.physical.U3" },
      { value: "U4", title: "global.return_order_reason.physical.U4" },
      { value: "U5", title: "global.return_order_reason.physical.U5" },
      { value: "U6", title: "global.return_order_reason.physical.U6" },
      { value: "U7", title: "global.return_order_reason.physical.U7" },
    ],
  };

  /** Payload accepted when creating or updating a return request from buyer UI. */
  export interface Upsert {
    item_id: number;
    reason: ReasonValues;
    count: number;
    note?: string | null;
    image?: string | null;
    video?: string | null;
    voice?: string | null;
  }
}
