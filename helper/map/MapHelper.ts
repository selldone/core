import { XapiShop } from "../../../SDKs/storefront/shop/XapiShop";
import ILocation = XapiShop.ILocation;
import {IAddress} from "../../models/traits/address.model";

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

  static GetMapDirectionUrl(location: ILocation, travelmode: boolean = false) {
    if (!location?.lng || !location?.lat) return null;
    return `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}&travelmode=${travelmode}`;
  }
}
