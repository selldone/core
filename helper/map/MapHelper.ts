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

import {IAddress} from "../../models/traits/address.model";
import {MapTag} from "../../models/shop/map/map-tag.model.ts";

export class MapHelper {
  static GenerateFullAddressFromMapInfo(info_object: IAddress) {
    if (!info_object || !info_object.address) return null;

    return `${info_object.address},${window.$i18n_global.t(
      "global.address_info.building_number"
    )}: ${info_object.no ? info_object.no : "?"},${window.$i18n_global.t(
      "global.address_info.building_unit"
    )}: ${info_object.unit ? info_object.unit : "?"}`;
  }

  static GetMapImage(lng: number, lat: number, zoom: number) {
    if (!lng || !lat || !zoom) return null;
    return `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${lng},${lat},${zoom},0,0/800x800?access_token=pk.eyJ1IjoicGFqdWhhYW4iLCJhIjoiY2sxaHNtbnU3MDFjcjNta2V0OTZ0d2ExYiJ9.YKRh0EP7NnhbmuSil7AvSw`;
  }

  static GetMapDirectionUrl(location: MapTag.ILocation, travelmode: boolean = false) {
    if (!location?.lng || !location?.lat) return null;
    return `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}&travelmode=${travelmode}`;
  }
}
