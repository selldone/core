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

export const UserBanLevel = [
  {
    value: null,
    title: "No ban",
    desc: "",
    icon: "check",
  },
  {
    value: "TRANSACTION_BAN",
    title: "Ban wallet transactions",
    desc: "Can not charge or transfer between accounts.",
    icon: "wallet",
  },
  {
    value: "SHOP_ADMIN_BAN",
    title: "Ban shop admin section",
    desc: "Can not do any change in their shop.",
    icon: "admin_panel_settings",
  },
  {
    value: "SHOP_CUSTOMER_BAN",
    title: "Ban shop customer section",
    desc: "Can not log in to shops or checkout order.",
    icon: "shopping_bag",
  },
  {
    value: "FULL_BAN",
    title: "Full banned",
    desc: "Can not do anything even login to the account.",
    icon: "block",
  },
];
