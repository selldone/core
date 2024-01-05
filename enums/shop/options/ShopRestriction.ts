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
    desc: "All people can see and access all sides of your store. Also, you can add restrictions on the category level.",
    icon: "public",
  },

  RESTRICTED: {
    code: "RESTRICTED",
    title: "Restricted Purchase",
    desc: "People can see your store but just verifies people can purchase.",
    icon: "vpn_lock",
  },

  PRIVATE: {
    code: "PRIVATE",
    title: "Private Store",
    desc: "The only person who has a password or is granted as a verified customer can access your website. Also, you can add additional restrictions on the category level.",
    icon: "lock",
  },
};
