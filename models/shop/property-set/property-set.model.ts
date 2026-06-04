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
 * Product property set used to customize variant dimensions and field ordering for products.
 *
 * Backend source: `App\Shop\PropertySet\PropertySet`, table `shop_property_sets`.
 * Controllers: `Shop\PropertiesSet\PropertiesSetController` and assign-product controllers.
 */
export interface PropertySet {
  /** Unique property-set identifier. Source: `shop_property_sets.id`. */
  id: number;

  /** Owning shop id. Source: `shop_property_sets.shop_id`. */
  shop_id: number;

  /** Last editor/officer user id. Source: nullable `shop_property_sets.user_id`. */
  user_id?: number | null;

  /** Public/admin title. Source: `shop_property_sets.title`. */
  title: string;

  /** Optional admin description. Source: nullable `shop_property_sets.description`. */
  description: string | null;

  /** Customized variant dimension configuration. Source: nullable JSON `shop_property_sets.variants`. */
  variants: PropertySet.Variant[] | null;

  /** Customized product fields. Source: nullable JSON `shop_property_sets.fields`; backend marks this as not implemented yet. */
  fields?: Record<string, unknown>[] | Record<string, unknown> | null;

  /** Internal team notes. Source: nullable JSON `shop_property_sets.note`. */
  note?: PropertySet.Note[] | null;

  /** Localized fields keyed by locale. Source: nullable JSON `shop_property_sets.translations`. */
  translations?: Record<string, Record<string, unknown>> | null;

  /** Optional product cluster id. Source: nullable `shop_property_sets.cluster_id`. */
  cluster_id?: number | null;

  /** Soft-delete timestamp when returned. Source: nullable `shop_property_sets.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp serialized by Laravel when included. Source: `shop_property_sets.created_at`. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel when included. Source: `shop_property_sets.updated_at`. */
  updated_at?: string | null;

  /** Cluster relation when eager-loaded. Source: `PropertySet::cluster()` from `HasClusterTrait`. */
  cluster?: Record<string, unknown> | null;

  /** Products using this property set when eager-loaded. Source: `PropertySet::products()` serialized as `products`. */
  products?: Record<string, unknown>[];
}

export namespace PropertySet {
  /** Supported product variant dimensions in property-set configuration. */
  export type VariantCode = "color" | "style" | "volume" | "weight" | "pack" | "type";

  /** Variant dimension configuration item stored in `shop_property_sets.variants`. */
  export interface Variant {
    /** Variant dimension code. Validated by controller as color/style/volume/weight/pack/type. */
    code: VariantCode;
    /** Display name override for the dimension. */
    name: string | null;
    /** Icon name/path for the dimension. */
    icon: string | null;
    /** Suggested values for this dimension, max 32 chars per value in controller validation. */
    values: string[] | null;
  }

  /** Internal note entry stored in `shop_property_sets.note`. */
  export interface Note {
    /** User id of the note author. */
    user_id: number;
    /** Display name captured for the author. */
    user_name: string;
    /** Note body. */
    body: string;
    /** Note timestamp as returned by Laravel/JSON serialization. */
    date: string | Date;
  }
}