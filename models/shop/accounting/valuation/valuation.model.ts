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

import type { Product } from "../../product/product.model";

/**
 * Custom product valuation/pricing form.
 *
 * Backend source: `App\Shop\Products\Valuation`, table `valuations`.
 * Controller: `Shop\Valuation\ShopValuationsController`.
 *
 * Valuations store the configurable input schema used by products with dynamic pricing. The backend persists the
 * canonical `structure` and a normalized `conditions.unavailable` list after validating referenced select/switch keys.
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

  /** Product count appended by valuation list/edit controllers via `loadCount('products AS products_count')`. */
  products_count?: number;

  /** Last editor relation when eager-loaded. Source: `Valuation::user()` serialized as `user`. */
  user?: Record<string, unknown> | null;

  /** Owning shop relation when `Valuation::shop()` is eager-loaded. */
  shop?: Record<string, unknown> | null;

  /** Products relation when eager-loaded. Source: `Valuation::products()` serialized as `products`. */
  products?: Array<Product | Record<string, unknown>>;
}

export namespace Valuation {
  /** Supported valuation input row types accepted by `ShopValuationsController`. */
  export type InputType = "select" | "switch" | "number" | "file";

  /** User-selected value for one valuation input. */
  export type PreferenceValue = string | number | boolean | null;

  /**
   * Product preference payload shape consumed by `Valuation::validatePreferences()` and `Valuation::CalculatePrice()`.
   *
   * The actual selected inputs are stored under the `valuation` key and indexed by each structure row `name`.
   */
  export interface Preferences {
    valuation?: Record<string, PreferenceValue>;
    [key: string]: unknown;
  }

  /** Pricing lookup table used by select and switch rows. Switch rows use string keys `true` and `false`. */
  export type PricingLookup = Record<string, number>;

  /** One input row inside `valuations.structure`. */
  export interface IDataItem {
    /** Machine-readable field name. Controller requires string. */
    name: string;

    /** Human-readable field title. Controller requires string. */
    title: string;

    /** Input type. Controller accepts `switch`, `select`, `number`, and `file`. */
    type?: InputType | null;

    /** Whether this row affects pricing. Only pricing rows are used by `Valuation::CalculatePrice()`. */
    pricing?: boolean;

    /** For pricing rows, `true` means add lookup/factor value; `false` means multiply where supported. */
    sum?: boolean;

    /** Numeric factor used by `number` pricing rows. */
    factor?: number;

    /** Pricing lookup map. For switch rows backend reads `true` and `false` string keys when used for pricing. */
    lookup?: PricingLookup;

    /** Selectable values for `select` rows. Used by backend condition and preference validation. */
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

    /** Optional default value selected by clients before customer input. */
    default?: PreferenceValue;

    /** Backend/frontend may add presentation keys for valuation inputs. */
    [key: string]: unknown;
  }

  /** Availability condition configuration stored in `valuations.conditions`. */
  export interface IConditions {
    /**
     * Pairs of unavailable choices encoded as `left:right`.
     *
     * `Valuation::ValidateConditions()` verifies both sides against select values and switch `name-TRUE/FALSE` values,
     * then stores only valid pairs.
     */
    unavailable?: string[];
  }
}
