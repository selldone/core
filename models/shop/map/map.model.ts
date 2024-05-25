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
   * Represents the geographical location with longitude and latitude.
   *
   * @property {number} lng - The longitude of the location.
   * @property {number} lat - The latitude of the location.
   */
  export interface ILocation {
    lng: number;
    lat: number;
  }

  export const Providers = {
    Mapbox: {
      code: "Mapbox",
      title: "Mapbox",
      icon: mapboxIcon,
    },
  };
}
