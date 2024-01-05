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

export const ResetIDPeriod = {
  none: {
    code: "none",
    title: "No Reset",
    description: "Order IDs will not be reset and will continue to increment indefinitely.",
  },
  daily: {
    code: "daily",
    title: "Daily Reset",
    description: "Order IDs will reset to 1 at the start of each day, allowing for a fresh sequence every day.",
  },
  monthly: {
    code: "monthly",
    title: "Monthly Reset",
    description: "Order IDs will reset to 1 at the start of each month, providing a new sequence on a monthly basis.",
  },
  yearly: {
    code: "yearly",
    title: "Yearly Reset",
    description: "Order IDs will reset to 1 at the start of each year, starting a new sequence annually.",
  },
};
