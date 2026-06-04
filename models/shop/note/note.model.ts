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

import type { Shop } from "../shop.model";
import type { User } from "../../user/user.model";

/**
 * Morphable shop note attached to pages, products, incentives, categories, and other shop resources.
 *
 * Backend source: `App\Shop\Note\Note`, table `notes`.
 * Managed by `ShopNoteController` and resource-specific note controllers. `target_id` / `target_type` come from
 * Laravel `nullableMorphs('target')`.
 */
export namespace Note {
  export interface INote {
    /** Note id. Source: `notes.id`. */
    id: number;

    /** Owning shop id, or `null`. Source: nullable `notes.shop_id`. */
    shop_id: number | null;

    /** Author user id, or `null`. Source: nullable `notes.user_id`. */
    user_id: number | null;

    /** Page-builder/resource element id, or `null`. Source: nullable string `notes.element_id`. */
    element_id?: string | null;

    /** Morph target id, or `null`. Source: nullable `notes.target_id`. */
    target_id?: number | null;

    /** Morph target class/type, or `null`. Source: nullable `notes.target_type`. */
    target_type?: string | null;

    /** Note body JSON. Source: required JSON `notes.data`. */
    data: IData[];

    /** Mentioned user ids or mention payloads, or `null`. Source: nullable JSON `notes.mention`. */
    mention?: Array<number | string | Record<string, unknown>> | null;

    /** Whether the note should surface in agency notifications. Source: `notes.agency` cast to boolean. */
    agency: boolean;

    /** Whether the note is pinned. Source: `notes.pin` cast to boolean. */
    pin: boolean;

    /** Soft-delete timestamp when included. Source: `notes.deleted_at`. */
    deleted_at?: string | null;

    /** Creation timestamp. Source: `notes.created_at`. */
    created_at?: string;

    /** Last update timestamp. Source: `notes.updated_at`. */
    updated_at?: string;

    /** Associated user relation when eager-loaded. */
    user?: User | Record<string, unknown> | null;

    /** Associated shop relation when eager-loaded. */
    shop?: Shop | Record<string, unknown> | null;

    /** Morph target model when eager-loaded. */
    target?: Record<string, unknown> | null;
  }

  /** Rich text note payload stored in `notes.data`. */
  export interface IData {
    /**
     * HTML/rich-text message content.
     *
     * The editor may embed mentions, suggestions, images, and other structured HTML fragments.
     */
    message: string;

    /** Additional editor-specific payload preserved by backend JSON casts. */
    [key: string]: unknown;
  }
}
