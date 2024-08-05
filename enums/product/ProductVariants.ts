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

import { ShopOptionsHelper } from "../../helper/shop/ShopOptionsHelper";

/**
 * Predefined set of product variants with associated metadata.
 */
export const ProductVariants = {
  color: { code: "color", name: "global.variants.color", icon: "palette" },
  style: { code: "style", name: "global.variants.style", icon: "style" },
  volume: { code: "volume", name: "global.variants.volume", icon: "equalizer" },
  weight: {
    code: "weight",
    name: "global.variants.weight",
    icon: "scale",
  },
  pack: {
    code: "pack",
    name: "global.variants.count_in_pack",
    icon: "all_inbox",
  },
  type: { code: "type", name: "global.variants.type", icon: "hive" },
};
/**
 * Fetches an array of unique values for a given key across a list of variants.
 * @param {Array} variants - List of product variants.
 * @param {string} key - The key for which unique values need to be fetched.
 * @returns {Array} Array of unique values for the given key.
 */
export function GetArrayOfValuesInVariants(
  variants: any[]|null,
  key: string
): any[] {
  const out: any[] = [];
  variants?.forEach((item) => {
    if (item[key] && !out.includes(item[key])) out.push(item[key]);
  });
  return out;
}

/**
 * Overrides the default variant names and icons with custom ones provided by the shop.
 * @param {Object} shop - Shop object containing custom variant names and icons.
 */
export function OverrideCustomVariantsName(shop: any): void {
  const variants = shop && ShopOptionsHelper.GetCustomVariants(shop);
  if (variants) console.log("🏳 Apply custom variants name.");

  ProductVariants.color.name = variants?.color ?? "global.variants.color";
  ProductVariants.style.name = variants?.style ?? "global.variants.style";
  ProductVariants.volume.name = variants?.volume ?? "global.variants.volume";
  ProductVariants.weight.name = variants?.weight ?? "global.variants.weight";
  ProductVariants.pack.name = variants?.pack ?? "global.variants.count_in_pack";
  ProductVariants.type.name = variants?.type ?? "global.variants.type";

  ProductVariants.color.icon = variants?.color_icon ?? "palette";
  ProductVariants.style.icon = variants?.style_icon ?? "style";
  ProductVariants.volume.icon = variants?.volume_icon ?? "equalizer";
  ProductVariants.weight.icon = variants?.weight_icon ?? "scale";
  ProductVariants.pack.icon = variants?.pack_icon ?? "all_inbox";
  ProductVariants.type.icon = variants?.type_icon ?? "hive";
}
