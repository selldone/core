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
 * Avocado order line item stored in `avocado_items`.
 *
 * Backend source: `App\Storefront\Order\Avocado\AvocadoItem`, table `avocado_items`.
 */
export interface AvocadoItem {
  /** Item id. Source: `avocado_items.id`. */
  id: number;

  /** Parent avocado order id. Source: `avocado_items.avocado_id`. */
  avocado_id: number;

  /** Item title. Source: nullable `avocado_items.title`. */
  title: string | null;

  /** Seller/customer message. Source: nullable `avocado_items.message`. */
  message: string | null;

  /** Image path. Source: nullable `avocado_items.image`. */
  image: string | null;

  /** External/details link. Source: nullable `avocado_items.link`. */
  link: string | null;

  /** Item review status. Source: `avocado_items.status`. */
  status: AvocadoItem.StatusKey;

  /** Requested quantity. Source: `avocado_items.count`. */
  count: number;

  /** Final item price in order currency. Source: `avocado_items.price`. */
  price: number;

  /** Customer currency code. Source: `avocado_items.currency`. */
  currency: string;

  /** Creation timestamp serialized by Laravel. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. */
  updated_at?: string | null;

  /** Parent avocado relation when eager-loaded. */
  avocado?: AvocadoItem.JsonObject | null;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace AvocadoItem {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object used for eager-loaded relation payloads. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array used for eager-loaded relation payloads. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /**
   * Enumerates the keys for various Avocado item statuses.
   */
  export type StatusKey = "PENDING" | "ACCEPTED" | "REJECTED";

  /**
   * Describes the structure of each status item.
   */
  export interface IStatus {
    /** The unique code representing the status. */
    code: StatusKey;

    /** The internationalization key for displaying the status' name in different languages. */
    name: string;

    /** The CSS class used for styling elements associated with this status. */
    class: string;
  }

  /**
   * The AvocadoItemStatus provides the possible statuses an Avocado item can be in,
   * along with their associated codes, display names, and CSS classes for styling.
   *
   * - **PENDING**: Indicates the item is still under consideration and hasn't been processed.
   * - **ACCEPTED**: Indicates the item has been reviewed and accepted.
   * - **REJECTED**: Indicates the item has been reviewed and denied.
   */
  export const Status: Record<StatusKey, IStatus> = {
    PENDING: {
      code: "PENDING",
      name: "global.status.pending",
      class: "blue-flat",
    },
    ACCEPTED: {
      code: "ACCEPTED",
      name: "global.status.accepted",
      class: "green-flat",
    },
    REJECTED: {
      code: "REJECTED",
      name: "global.status.rejected",
      class: "red-flat",
    },
  };

  /** Payload accepted when seller creates/updates an avocado order item. */
  export interface Upsert {
    title?: string | null;
    message?: string | null;
    image?: string | null;
    link?: string | null;
    count?: number;
    price?: number;
    status?: StatusKey;
  }
}
