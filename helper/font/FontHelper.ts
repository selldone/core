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

export class FontHelper {
  //――――――――――――――――――――――  Font loader listener ――――――――――――――――――――

  static ListenOnFontIconsLoaded(callback: (success: boolean) => void) {
    document.fonts.ready.then(function () {
      console.log("⭐ All fonts in use by visible text have loaded.");

      if (callback) callback(true);
    });
    // Force show icons after 10 sec if font not loaded!
    delay(() => {
      if (callback) callback(true);
    }, 20000);
  }
}
