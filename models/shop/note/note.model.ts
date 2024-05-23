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

import {Shop} from "../shop.model";
import type {User} from "../../user/user.model";

export namespace Note {
  export interface INote {
    /** Unique identifier for the notification. */
    id: number;

    /** Identifier of the associated shop. */
    shop_id: number;

    /** Identifier of the associated user. */
    user_id: number;

    /** Identifier of the associated element. Optional. */
    element_id?: number | null;

    /** Identifier of the target element. Optional. */
    target_id?: number | null;

    /** Type of the target, representing the nature of the target element. Optional. */
    target_type?: string | null;

    /** Contains the message details. */
    data: IData[];

    /** Contains the list of mentioned user ids. Optional. */
    mention?: any[] | null; // You might want to provide a more specific type if known

    /** Indicates if the notification is specific to an agency. */
    agency: boolean;

    /** Indicates if the notification is pinned to the top. */
    pin: boolean;

    /** Associated user details. */
    user?: User;

    /** Associated shop details. */
    shop?: Shop;

    /** Represents the target model (e.g., a page for a page builder). The type can be further refined. */
    target: any; // You might want to provide a more specific type or interface
  }

  /**
   * Contains the message details with potential HTML content.
   */
  export interface IData {
    /**
     * HTML message content.
     *
     * The message may contain suggestions, mentions, and other rich text elements.
     * Mentions can introduce users, represented by special span elements with attributes like 'value', 'type', etc.
     * Images, like avatars, can also be embedded directly in the message.
     */
    message: string;
  }
}
