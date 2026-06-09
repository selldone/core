/*
 * Copyright (c) 2024. Selldone® Business OS™
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
import {BackofficeLocalStorages} from "../../local-storage";

/**
 * Helper for resolving delivery-service icon URLs from the CDN.
 */
export class DeliveryServiceHelper {
  /**
   * Returns the CDN URL for a delivery service icon.
   *
   * @param {string | number} delivery_service_id - Delivery-service identifier.
   * @param {number} [size=BackofficeLocalStorages.IMAGE_SIZE_SMALL] - Requested image size.
   * @returns {string} CDN URL for the delivery-service icon.
   */
  static GetDeliveryServiceIconById(
    delivery_service_id: string | number,
    size = BackofficeLocalStorages.IMAGE_SIZE_SMALL,
  ) {
    return window.CDN.GET_DELIVERY_SERVICE_ICON(delivery_service_id, size);
  }
}
