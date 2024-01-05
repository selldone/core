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

export const LabelingModes = {
  default: {
    code: "default",
    title: "System Ordering (Default)",
    icon: "auto_fix_off",
    description:
      "Order IDs are automatically set by the system to match their unique IDs. While this is straightforward, it may lead to confusion in managing orders due to unpredictable numbering.",
    resetable:false,
  },
  "auto-increment": {
    code: "auto-increment",
    title: "Auto Increment",
    icon: "pin",
    description:
      "Set order IDs to auto-increment. Each order created in your store will receive a unique ID, making it easier to track orders in your store.",
    resetable:true,
  },
  hashed: {
    code: "hashed",
    title: "Hashed ID",
    icon: "tag",
    description:
      "Choose this option to assign a hashed unique ID as the order ID, ideal for obfuscating order IDs from your customers.",
    resetable:false,
  },
};
