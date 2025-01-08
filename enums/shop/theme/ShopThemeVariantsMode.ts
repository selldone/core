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

interface IShopThemeVariant {
  value: string;
  title: string;
  description: string;
  preview: string;
}

export const ShopThemeVariantsMode: Record<
  "smart" | "select",
  IShopThemeVariant
> = {
  smart: {
    value: "smart",
    title: "shop_theme_variants_mode.smart.title",
    description:"shop_theme_variants_mode.smart.description",
    preview: require("@selldone/core-js/enums/shop/theme/assets/variant_mode_smart.png"),
  },
  select: {
    value: "select",
    title: "shop_theme_variants_mode.select.title",
    description:"shop_theme_variants_mode.select.description",
    preview: require("@selldone/core-js/enums/shop/theme/assets/variants_mode_select.png"),
  },
};
