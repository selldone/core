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

export default class ImageDimension {
  /**
   * Calculate aspect ratio of element.
   * @param el
   * @returns number
   */
  static GetAspect(el) {
    const positionInfo = el.getBoundingClientRect();
    const height = positionInfo.height;
    const width = positionInfo.width;

    const aspect = Math.round((100 * width) / height) / 100;
    //console.log("aspect", aspect);
    return aspect;
  }

  /**
   *
   * @param src
   * @returns {Promise<unknown>}
   * @constructor
   */
  static GetAspectByUrl(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = function () {
        if (!this.width || !this.height) {
          reject();
        } else {
          const aspect = Math.round((100 * this.width) / this.height) / 100;
          console.log("aspect", aspect);
          resolve(aspect);
        }
      };
      img.onerror = function () {
        reject();
      };
      img.src = src;
    });
  }
}
