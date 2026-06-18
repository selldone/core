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

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
import mapboxIcon from "./assets/mapbox.svg";

export namespace Map {
  /**
   * Geographical location stored by map/address helpers.
   *
   * Backend map tags store this value in `shop_map_tags.location` as JSONB and duplicate searchable coordinates in
   * numeric `lat` / `lng` columns.
   */
  export interface ILocation {
    /** Longitude in decimal degrees. */
    lng: number;

    /** Latitude in decimal degrees. */
    lat: number;
  }

  /** Tuple form used by some map SDKs: `[lng, lat]`. */
  export type CoordinatesTuple = [number, number];

  /** Accepted coordinate shape for frontend map widgets. */
  export type LocationLike = ILocation | CoordinatesTuple;

  /** Supported map provider code. */
  export type ProviderCode = "Mapbox";

  /** Static metadata used to render provider pickers in the dashboard. */
  export interface ProviderMeta {
    /** Stable provider code used by integrations and settings. */
    code: ProviderCode;

    /** Human-readable provider title. */
    title: string;

    /** Provider icon asset path resolved by the bundler. */
    icon: string;
  }

  /** Available map providers. */
  export const Providers: Record<ProviderCode, ProviderMeta> = {
    Mapbox: {
      code: "Mapbox",
      title: "Mapbox",
      icon: mapboxIcon,
    },
  };

  /** Default provider used when no provider is explicitly selected. */
  export const DefaultProvider: ProviderCode = "Mapbox";
}
