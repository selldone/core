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

import { Product } from "../../models/shop/product/product.model";

/**
 * Helper for converting product specification structures between legacy array and JSON formats.
 */
export class SpecHelper {
  /**
   * Converts the JSON representation of product specs to an ordered array form.
   *
   * Group rows are represented as `{ group: string }`, while normal rows become arrays
   * in the shape of `[specName, ...values]`.
   *
   * @param {Product.ISpec} spec_json - Product spec JSON payload.
   * @param {string[] | null} spec_order - Optional desired order of rows/groups.
   * @returns {any[]} Specification rows suitable for old editors and drag-sort UIs.
   */
  static CONVERT_SPEC_JSON_TO_ARRAY(
    spec_json: Product.ISpec,
    spec_order: string[] | null
  ) {
    if (Array.isArray(spec_json)) return spec_json; // Old version!

    let spec_list = [];
    for (const key in spec_json) {
      const value = spec_json[key];

      if (Array.isArray(value)) {
        const array = [key];
        spec_list.push(array.concat(value));
      } else if (value === "group") {
        spec_list.push({ group: key });
      }
    }

    if (spec_order)
      spec_list = spec_list.sort(function (a, b) {
        const val_a = Array.isArray(a) ? a[0] : a.group;
        const val_b = Array.isArray(b) ? b[0] : b.group;

        return spec_order.indexOf(val_a) - spec_order.indexOf(val_b);
      });

    return spec_list;
  }

  /**
   * Converts an array representation of product specs back to JSON + order lists.
   *
   * @param {any[]} spec_list - Mixed list of spec rows and group rows.
   * @returns {{ spec_json: Record<string, any>; spec_order: string[] }} JSON payload and sort order list.
   */
  static CONVERT_SPEC_ARRAY_TO_JSON(spec_list: any[]) {
    const spec_json: Record<string, any> = {};
    const spec_order: string[] = [];

    spec_list.forEach((item) => {
      if (Array.isArray(item)) {
        if (item.length > 0) {
          const list = [];
          for (let i = 1; i < item.length; i++) {
            list.push(item[i]);
          }
          spec_json[item[0]] = list;
          spec_order.push(item[0]);
        }
      } else if (item.group) {
        spec_json[item.group] = "group";
        spec_order.push(item.group);
      }
    });

    return { spec_json, spec_order };
  }
}
