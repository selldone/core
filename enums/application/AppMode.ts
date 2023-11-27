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
 * Interface representing the structure of an application mode.
 * @interface IAppMode
 * @property {string} title - The display title of the application mode.
 * @property {string} code - A unique code identifier for the application mode.
 * @property {string} src - The path to the mode's icon or image. This path is typically obtained using a `require` statement.
 */
interface IAppMode {
  title: string;
  code: string;
  src: string; // This assumes that require() returns a string path. Adjust if it's different.
}

/**
 * Enumerates various application modes with associated metadata.
 * This is part of the Selldone open-source library, which enables developers to build custom storefronts and back offices.
 * Each mode is represented as an object conforming to the IAppMode interface.
 */
export const AppMode: Record<string, IAppMode> = {
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
