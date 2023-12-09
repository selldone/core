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

export class ImageDimension {
  /**
   * Calculate aspect ratio of element.
   * @param el
   * @returns number
   */
  static GetAspect(el: Element) {
    const positionInfo = el.getBoundingClientRect();
    const height = positionInfo.height;
    const width = positionInfo.width;

    const aspect = Math.round((100 * width) / height) / 100;
    //console.log("aspect", aspect);
    return aspect;
  }

  /**
   * Calculates the aspect ratio of an image from a given URL.
   *
   * @param {string} src - The source URL of the image.
   * @returns {Promise<number>} A promise that resolves with the aspect ratio of the image.
   *                             The aspect ratio is calculated as (width / height) and
   *                             rounded to two decimal places. If the image fails to load
   *                             or the dimensions are not available, the promise is rejected.
   */
  static GetAspectByUrl(src: string): Promise<number> {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = function () {
        // Inside this function, 'this' refers to 'img', the Image object.
        if (
          !(this as HTMLImageElement).width ||
          !(this as HTMLImageElement).height
        ) {
          reject(new Error("Image dimensions not available."));
        } else {
          const aspect: number =
            Math.round(
              (100 * (this as HTMLImageElement).width) /
                (this as HTMLImageElement).height
            ) / 100;
          console.log("aspect", aspect);
          resolve(aspect);
        }
      };

      img.onerror = function () {
        reject(new Error("Image failed to load."));
      };

      img.src = src;
    });
  }
}
