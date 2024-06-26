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

import productsViewsImage from "./activity/assets/views.svg";
import addBasketsImage from "./activity/assets/add-basket.svg";
import removeBasketsImage from "./activity/assets/remove-basket.svg";
import buysImage from "./activity/assets/click-buy.svg";

export const UserActivityKeys = [
  {
    code: "products_views",
    name: "user_activities_keys.products_views",
    image: productsViewsImage,
    color: "#FFA000",
    icon: "visibility",
  },
  {
    code: "add_baskets",
    name: "user_activities_keys.add_baskets",
    image: addBasketsImage,
    color: "#0288D1",
    icon: "add_shopping_cart",
  },
  {
    code: "remove_baskets",
    name: "user_activities_keys.remove_baskets",
    image: removeBasketsImage,
    color: "#D32F2F",
    icon: "production_quantity_limits",
  },
  {
    code: "buys",
    name: "user_activities_keys.buys",
    image: buysImage,
    color: "#689F38",
    icon: "credit_score",
  },
];