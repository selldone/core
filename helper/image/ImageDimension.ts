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
 * ImageDimension provides utility methods for calculating and retrieving image dimensions.
 * 
 * Useful for determining image aspect ratios and responsive image handling.
 */
export class ImageDimension {
  /**
   * Calculates the aspect ratio of a DOM element.
   * 
   * Retrieves the bounding client rect of an element and calculates its aspect ratio
   * (width / height). The result is rounded to two decimal places.
   * 
   * @param {Element} el - The DOM element to measure.
   * @returns {number} The aspect ratio (width / height), rounded to two decimals.
   *                    Example: 16:9 aspect ratio returns approximately 1.78
   * 
   * @example
   * const img = document.getElementById("myImage");
   * const ratio = ImageDimension.GetAspect(img); // Returns 1.78 for 16:9 image
   */
  static GetAspect(el: Element) {
    // Get the element's position and size information
    const positionInfo = el.getBoundingClientRect();
    const height = positionInfo.height;
    const width = positionInfo.width;

    // Calculate and round aspect ratio to 2 decimal places
    const aspect = Math.round((100 * width) / height) / 100;
    return aspect;
  }

  /**
   * Asynchronously calculates the aspect ratio of an image from a URL.
   * 
   * Loads an image from the provided URL and calculates its aspect ratio once loaded.
   * The promise resolves with the aspect ratio or rejects if the image fails to load.
   * 
   * @param {string} src - The source URL of the image to load (must be accessible/CORS enabled).
   * @returns {Promise<number>} A promise that resolves with the aspect ratio of the image.
   *                            The aspect ratio is width / height, rounded to two decimal places.
   *                            Rejects if the image fails to load or dimensions are unavailable.
   * 
   * @example
   * ImageDimension.GetAspectByUrl("https://example.com/image.jpg")
   *   .then(ratio => console.log("Aspect ratio:", ratio)) // 1.78
   *   .catch(err => console.error("Failed to load image:", err));
   * 
   * @example
   * // Using async/await
   * try {
   *   const ratio = await ImageDimension.GetAspectByUrl("/images/profile.jpg");
   *   console.log("Image ratio:", ratio); // e.g., 1.0 for square image
   * } catch (err) {
   *   console.error("Image load failed");
   * }
   */
  static GetAspectByUrl(src: string): Promise<number> {
    return new Promise((resolve, reject) => {
      // Create a new Image object for loading
      const img = new Image();

      // Handle successful image load
      img.onload = function () {
        // Inside this function, 'this' refers to the Image object
        // Validate that image dimensions are available
        if (
          !(this as HTMLImageElement).width ||
          !(this as HTMLImageElement).height
        ) {
          reject(new Error("Image dimensions not available."));
        } else {
          // Calculate aspect ratio and round to 2 decimal places
          const aspect: number =
            Math.round(
              (100 * (this as HTMLImageElement).width) /
                (this as HTMLImageElement).height
            ) / 100;
          console.log("aspect", aspect);
          resolve(aspect);
        }
      };

      // Handle image load errors
      img.onerror = function () {
        reject(new Error("Image failed to load."));
      };

      // Trigger the image load by setting src
      img.src = src;
    });
  }
}
