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

export const TimeSpans = {
  Morning: {
    value: "Morning",
    min: 8,
    max: 12,
    name: "global.timespan.Morning",
    icon: require("@components/assets/icons/morning.svg")
  },
  Evening: {
    value: "Evening",
    min: 12,
    max: 18,
    name: "global.timespan.Evening",
    icon: require("@components/assets/icons/evening.svg")
  },
  Night: {
    value: "Night",
    min: 18,
    max: 24,
    name: "global.timespan.Night",
    icon: require("@components/assets/icons/night.svg")
  },
  Instant: {
    value: "Instant",
    min: 0,
    max: 24,
    name: "global.timespan.Instant",
    icon: require("@components/assets/icons/daynight.svg")
  }
};
