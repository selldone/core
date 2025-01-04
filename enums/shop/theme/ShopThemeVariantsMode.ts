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
    title: "Smart Mode",
    description:
      "Compact variants in selectable separate options, suitable for most cases.",
    preview: require("@selldone/core-js/enums/shop/theme/assets/variant_mode_smart.png"),
  },
  select: {
    value: "select",
    title: "Select Mode",
    description:
      "Displays all variants in a dropdown, ideal for a large number of variants.",
    preview: require("@selldone/core-js/enums/shop/theme/assets/variants_mode_select.png"),
  },
};
