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

import {ShopOptionsHelper} from "../../helper/shop/ShopOptionsHelper";
import {Product} from "../../models";
import {PropertySet} from "../../models/shop/property-set/property-set.model";

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
  variants: any[] | null,
  key: string,
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

/**
 * Fetches the name of a variant by its code, considering overrides defined in [product.property_set].
 * If no override is defined, it defaults to the name in the ProductVariants object.
 *
 * @param code - The code of the variant to fetch the name for.
 * @param product - The product object, potentially including a property_set for overrides.
 * @returns The name of the variant, either from the override or the default.
 */
export function GetVariantNameByCode(
  code: keyof typeof ProductVariants,
  product: (Product & { property_set?: PropertySet }) | null,
): string {
  if (product?.property_set?.variants?.length > 0) {
    const found = product?.property_set?.variants.find((v) => v.code === code);
    if (found?.name) {
      return found.name;
    }
  }
  return ProductVariants[code]?.name;
}

/**
 * Fetches the icon of a variant by its code, considering overrides defined in [product.property_set].
 * If no override is defined, it defaults to the icon in the ProductVariants object.
 *
 * @param code - The code of the variant to fetch the icon for.
 * @param product - The product object, potentially including a property_set for overrides.
 * @returns The icon of the variant, either from the override or the default.
 */
export function GetVariantIconByCode(
  code: keyof typeof ProductVariants,
  product: (Product & { property_set?: PropertySet }) | null,
): string {
  if (product?.property_set?.variants?.length > 0) {
    const found = product?.property_set?.variants.find((v) => v.code === code);
    if (found?.icon) {
      return found.icon;
    }
  }
  return ProductVariants[code]?.icon;
}

/**
 * Fetches the order index of a variant by its code, considering overrides defined in [product.property_set].
 * The order index reflects the position of the variant within the overridden variant list.
 *
 * @param code - The code of the variant to fetch the order index for.
 * @param product - The product object, potentially including a property_set for overrides.
 * @returns The order index of the variant, or null if not found.
 */
export function GetVariantOrderIndexByCode(
  code: keyof typeof ProductVariants,
  product: (Product & { property_set?: PropertySet }) | null,
): string {
  if (product?.property_set?.variants?.length > 0) {
    const attr_index = product?.property_set?.variants.findIndex(
      (v) => v.code === code,
    );
    if (attr_index > -1) return attr_index;
  }
  return null;
}

/**
 * Fetches the default values for a variant by its code, considering overrides defined in [product.property_set].
 * If no override is defined, it returns null.
 *
 * @param code - The code of the variant to fetch default values for.
 * @param product - The product object, potentially including a property_set for overrides.
 * @returns The list of default values for the variant, or null if not found.
 */
export function GetVariantDefaultValuesByCode(
  code: keyof typeof ProductVariants,
  product: (Product & { property_set?: PropertySet }) | null,
) {
  if (product?.property_set?.variants?.length > 0) {
    const found = product?.property_set?.variants.find((v) => v.code === code);
    if (found?.values?.length) {
      return found.values;
    }
  }
  return null;
}

/**
 * Determines the position (index) of a specific value for a variant by its code,
 * considering overrides defined in [product.property_set].
 * For example in dress sized :XS, S, M, L, XL
 *
 * @param code - The code of the variant to fetch the value index for.
 * @param product - The product object, potentially including a property_set for overrides.
 * @param value - The specific value whose position is to be determined.
 * @returns The index of the variant value, or null if not found.
 */
export function GetVariantValueIndexCode(
  code: keyof typeof ProductVariants,
  product: (Product & { property_set?: PropertySet }) | null,
  value: string | null,
): number {
  if (product?.property_set?.variants?.length > 0) {
    const found = product?.property_set?.variants.find((v) => v.code === code);
    if (found?.values?.length) {
      console.log("🏳 found.values", found.values, value);
      const out = found.values.findIndex((v) => v === value); // Correct usage of findIndex
      return out >= 0 ? out : 999; // Push not found to the end!
    }
  }
  return null; // Just simply based of order of added variants
}
