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

export class SpecHelper {
  static CONVERT_SPEC_JSON_TO_ARRAY(
    spec_json: Product.ISpec,
    spec_order: string[] | null
  ) {
    //    console.log('CONVERT_SPEC_JSON_TO_ARRAY', spec_json)

    if (Array.isArray(spec_json)) return spec_json; // Old version!

    let spec_list = [];
    for (const key in spec_json) {
      const value = spec_json[key];

      if (Array.isArray(value)) {
        const array = [key];
        spec_list.push(array.concat(value));
      } else {
        if (value === "group") {
          spec_list.push({ group: key });
        }
      }
    }

    // Order the list:
    if (spec_order)
      spec_list = spec_list.sort(function (a, b) {
        const val_a = Array.isArray(a) ? a[0] : a.group;
        const val_b = Array.isArray(b) ? b[0] : b.group;

        return spec_order.indexOf(val_a) - spec_order.indexOf(val_b);
      });

    return spec_list;
  }

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
      } else {
        if (item.group) {
          spec_json[item.group] = "group";
          spec_order.push(item.group);
        }
      }
    });

    return { spec_json, spec_order };
  }
}
