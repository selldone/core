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

import morningIcon from './time-span/assets/morning.svg';
import eveningIcon from './time-span/assets/evening.svg';
import nightIcon from './time-span/assets/night.svg';
import daynightIcon from './time-span/assets/daynight.svg';

export const TimeSpans = {
  Morning: {
    value: "Morning",
    min: 8,
    max: 12,
    name: "global.timespan.Morning",
    icon: morningIcon,
  },
  Evening: {
    value: "Evening",
    min: 12,
    max: 18,
    name: "global.timespan.Evening",
    icon: eveningIcon,
  },
  Night: {
    value: "Night",
    min: 18,
    max: 24,
    name: "global.timespan.Night",
    icon: nightIcon,
  },
  Instant: {
    value: "Instant",
    min: 0,
    max: 24,
    name: "global.timespan.Instant",
    icon: daynightIcon,
  },
};