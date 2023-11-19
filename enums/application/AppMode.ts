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

/**
 * Defines the structure for the application mode.
 */
interface AppModeEntry {
  title: string;
  code: string;
  src: string; // This assumes that require() returns a string path. Adjust if it's different.
}

/**
 * Enumerates various application modes with associated metadata.
 */
export const AppMode: Record<string, AppModeEntry> = {
  TEST: {
    title: "Test",
    code: "TEST",
    src: require("./assets/app-mode/test.svg"),
  },
  ENTERPRISE: {
    title: "Enterprise",
    code: "ENTERPRISE",
    src: require("./assets/app-mode/enterprise.svg"),
  },
  PUBLIC: {
    title: "Public",
    code: "PUBLIC",
    src: require("@app-selldone/pages/help/assets/public.svg"),
  },
};
