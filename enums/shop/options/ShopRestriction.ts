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

export const ShopRestriction = {
  PUBLIC: {
    code: "PUBLIC",
    title: "Public Store",
    desc: "Everyone can view and access all areas of your store. Additionally, you can set restrictions at the category level.",
    icon: "public",
  },

  RESTRICTED: {
    code: "RESTRICTED",
    title: "Restricted Purchase",
    desc: "Everyone can view your store, but only verified customers are allowed to make purchases.",
    icon: "vpn_lock",
  },

  PRIVATE: {
    code: "PRIVATE",
    title: "Private Store",
    desc: "Only individuals with a password or those granted verified customer status can access your store. You can also set additional restrictions at the category level.",
    icon: "lock",
  },
};
