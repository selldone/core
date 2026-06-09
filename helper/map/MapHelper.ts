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

import {Map} from "../../models/shop/map/map.model";
import {Order} from "../../models";

/**
 * Helper utilities for working with addresses, static map images, and direction links.
 */
export class MapHelper {
  /**
   * Builds a readable full address string from an order address object.
   *
   * @param {Order.IAddress} info_object - Address payload from an order or checkout form.
   * @returns {string | null} Localized address string or `null` when base address is missing.
   */
  static GenerateFullAddressFromMapInfo(info_object: Order.IAddress) {
    if (!info_object || !info_object.address) return null;

    return (
      info_object.address +
      (info_object.no
        ? `, ${window.$i18n_global.t(
            "global.address_info.building_number",
          )}: ${info_object.no}`
        : "") +
      (info_object.unit
        ? `, ${window.$i18n_global.t(
            "global.address_info.building_unit",
          )}: ${info_object.unit}`
        : "") +
      (info_object.city ? `, ${info_object.city}` : "") +
      (info_object.state ? `, ${info_object.state}` : "") +
      (info_object.country ? `, ${info_object.country}` : "")
    );
  }

  /**
   * Creates a Mapbox static-map image URL.
   *
   * @param {number} lng - Longitude.
   * @param {number} lat - Latitude.
   * @param {number} zoom - Map zoom level.
   * @param {string} [size='800x800'] - Static image dimensions in `widthxheight` format.
   * @param {'streets-v11'|'streets-v12'|'dark-v11'|'navigation-day-v1'|'navigation-night-v1'} [style_id='streets-v11'] - Mapbox style identifier.
   * @returns {string | null} Mapbox static image URL or `null` when coordinates are invalid.
   */
  static GetMapImage(
    lng: number,
    lat: number,
    zoom: number,
    size: string = '800x800',
    style_id:
      | 'streets-v11'
      | 'streets-v12'
      | 'dark-v11'
      | 'navigation-day-v1'
      | 'navigation-night-v1' = 'streets-v11',
  ) {
    if (!lng || !lat || !zoom) return null;
    return `https://api.mapbox.com/styles/v1/mapbox/${style_id}/static/${lng},${lat},${zoom},0,0/${size}?access_token=pk.eyJ1IjoicGFqdWhhYW4iLCJhIjoiY2sxaHNtbnU3MDFjcjNta2V0OTZ0d2ExYiJ9.YKRh0EP7NnhbmuSil7AvSw`;
  }

  /**
   * Builds a Google Maps directions URL for a location.
   *
   * @param {Map.ILocation} location - Destination coordinates.
   * @param {boolean} [travelmode=false] - Travel mode value passed to Google Maps.
   * @returns {string | null} Google Maps directions URL or `null` when coordinates are missing.
   */
  static GetMapDirectionUrl(
    location: Map.ILocation,
    travelmode: boolean = false,
  ) {
    if (!location?.lng || !location?.lat) return null;
    return `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}&travelmode=${travelmode}`;
  }
}
