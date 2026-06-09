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

import {delay} from "lodash-es";

/**
 * FontHelper provides utilities for managing font loading and icon display.
 *
 * Handles font readiness notifications to ensure custom fonts and icons
 * are fully loaded before the UI is fully rendered.
 */
export class FontHelper {
  //――――――――――――――――――――――  Font loader listener ――――――――――――――――――――

  /**
   * Listens for font loading completion and invokes a callback.
   *
   * Uses the DOM's Font Loading API (document.fonts.ready) to detect when all fonts
   * in use by visible text have been loaded. Includes a 20-second fallback timeout
   * to ensure UI is rendered even if fonts fail to load.
   *
   * This is useful for showing icons and styled text that depend on custom fonts.
   *
   * @param {(success: boolean) => void} callback - Callback function invoked when fonts are ready.
   *                                                  Always called with true (success).
   *
   * @example
   * FontHelper.ListenOnFontIconsLoaded(() => {
   *   console.log("Fonts are ready!");
   *   // Show icons or styled text that requires fonts
   * });
   */
  static ListenOnFontIconsLoaded(callback: (success: boolean) => void) {
    // Wait for all fonts in visible text to load
    document.fonts.ready.then(function () {
      console.log("⭐ All fonts in use by visible text have loaded.");

      if (callback) callback(true);
    });

    // Force show icons after 20 seconds if fonts not loaded (prevents indefinite wait)
    delay(() => {
      if (callback) callback(true);
    }, 20000);
  }
}
