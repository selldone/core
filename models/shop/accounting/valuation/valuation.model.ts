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
 * Custom product valuation/pricing form.
 *
 * Backend source: `App\Shop\Products\Valuation`, table `valuations`.
 * Controller: `Shop\Valuation\ShopValuationsController`.
 */
export interface Valuation {
  /** Unique valuation identifier. Source: `valuations.id`. */
  id: number;

  /** Owning shop id. Source: `valuations.shop_id`. */
  shop_id: number;

  /** Last editor/user id. Source: nullable `valuations.user_id`. */
  user_id: number | null;

  /** Valuation title. Source: `valuations.title`; controller requires string. */
  title: string;

  /** Input rows for the pricing/customization form. Source: JSON `valuations.structure`. */
  structure: Valuation.IDataItem[];

  /** Availability conditions between input choices. Source: nullable JSON `valuations.conditions`. */
  conditions: Valuation.IConditions | null;

  /** Creation timestamp serialized by Laravel when included. Source: `valuations.created_at`. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel when included. Source: `valuations.updated_at`. */
  updated_at?: string | null;

  /** Product count appended by list/edit controllers via `loadCount('products AS products_count')`. */
  products_count?: number;

  /** Last editor relation when eager-loaded. Source: `Valuation::user()` serialized as `user`. */
  user?: Record<string, unknown> | null;

  /** Products relation when eager-loaded. Source: `Valuation::products()` serialized as `products`. */
  products?: Record<string, unknown>[];
}

export namespace Valuation {
  /** Supported valuation input row types accepted by `ShopValuationsController`. */
  export type InputType = "select" | "switch" | "number" | "file";

  /** One input row inside `valuations.structure`. */
  export interface IDataItem {
    /** Machine-readable field name. Controller requires string. */
    name: string;

    /** Human-readable field title. Controller requires string. */
    title: string;

    /** Input type. Controller accepts `switch`, `select`, `number`, and `file`. */
    type?: InputType | null;

    /** Whether this row affects pricing. */
    pricing?: boolean;

    /** For pricing rows, `true` means add lookup/factor value; `false` means multiply where supported. */
    sum?: boolean;

    /** Numeric factor used by `number` pricing rows. */
    factor?: number;

    /** Pricing lookup map. For switch rows backend expects `true` and `false` keys when used for pricing. */
    lookup?: Record<string, number>;

    /** Selectable values for `select` rows. Used by backend condition validation. */
    selects?: string[];

    /** Optional placeholder shown by clients. */
    placeholder?: string | null;

    /** Optional switch true-state title. */
    true_title?: string | null;

    /** Optional switch true-state description. */
    true_desc?: string | null;

    /** Optional switch false-state title. */
    false_title?: string | null;

    /** Optional switch false-state description. */
    false_desc?: string | null;

    /** Optional default value. */
    default?: string | number | boolean | null;

    /** Backend/frontend may add presentation keys for valuation inputs. */
    [key: string]: unknown;
  }

  /** Availability condition configuration stored in `valuations.conditions`. */
  export interface IConditions {
    /**
     * Pairs of unavailable choices encoded as `left:right`.
     *
     * `Valuation::ValidateConditions()` verifies both sides against select values and switch `name-TRUE/FALSE` values.
     */
    unavailable?: string[];
  }
}