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
 * Social network link attached to a shop.
 *
 * Backend source: `App\Shop\Social\ShopSocial`, table `shop_socials`.
 * Managed by `ShopSocialsController`; rows are unique by `(shop_id, network)`. `AddSocial()` updates the existing
 * row for the same network instead of creating duplicates.
 */
export class ShopSocial implements ShopSocial.IShopSocial {
  /** Social row id. Source: `shop_socials.id`. */
  id!: number;

  /** Owning shop id. Source: `shop_socials.shop_id`. */
  shop_id!: number;

  /** Network code/name, max 12 chars in DB. Source: `shop_socials.network`. */
  network!: string;

  /** Public social profile URL. Source: `shop_socials.url`. */
  url!: string;

  /** Whether this social link is shown in sticky/active UI. Source: `shop_socials.active` cast to boolean. */
  active!: boolean;

  /** Optional URL used for social account validation. Source: nullable `shop_socials.validation_url`. */
  validation_url!: string | null;

  /** Creation timestamp. Source: `shop_socials.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `shop_socials.updated_at`. */
  updated_at?: string | null;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown> | null;

  constructor(data: Partial<ShopSocial.IShopSocial> & { id?: number; shop_id?: number }) {
    Object.assign(this, data);
  }
}

export namespace ShopSocial {
  /** Raw Eloquent shape returned for `shop_socials`. */
  export interface IShopSocial {
    id: number;
    shop_id: number;
    network: string;
    url: string;
    active: boolean;
    validation_url: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    shop?: Record<string, unknown> | null;
  }

  /** Payload accepted by add/update social-link endpoints. */
  export interface WritePayload {
    /** Social network code/name. DB max length is 12 chars. */
    network: string;

    /** Public social profile URL. */
    url: string;

    /** Whether this link is active/sticky in UI. */
    active?: boolean;
  }
}
