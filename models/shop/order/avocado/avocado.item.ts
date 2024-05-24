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

export interface AvocadoItem {
  id: number;
  avocado_id: number;
  title: string;
  message: string;
  image: string;
  link: string;
  status: keyof typeof AvocadoItem.Status;
  count: number;
  price: number; // Final Price
  currency: string; // Currency of user!
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace AvocadoItem {
  /**
   * Enumerates the keys for various Avocado item statuses.
   */
  export type StatusKey = "PENDING" | "ACCEPTED" | "REJECTED";

  /**
   * Describes the structure of each status item.
   */
  interface IStatus {
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
}
