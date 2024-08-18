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
import {toPng} from "html-to-image";

export class Screenshot {
  static FromVideo(
    video: HTMLVideoElement,
    des_image: HTMLImageElement | null,
    flash: boolean,
  ) {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURI = canvas.toDataURL("image/jpeg"); // can also use 'image/png'

    if (des_image) des_image.src = dataURI;

    // Animate flash:
    if (flash) {
      video.classList.add("fadeIn");
      setTimeout(() => {
        video.classList.remove("fadeIn");
      }, 300);
    }

    return dataURI;
  }

  static async FromElement(
    element: HTMLElement,
    des_image: HTMLImageElement | null = null,
    flash: boolean = false,
    depth: number = 10,
    ignore_imgs :boolean,
  ) {
    try {
      const rect = element.getBoundingClientRect();
      const width = Math.min(400, rect.width);
      const scaleFactor = width / rect.width;

      const height = rect.height * scaleFactor;

      const dataURI = await toPng(element, {
        cacheBust: true,
        width: rect.width,
        height: rect.height,
        backgroundColor: "#ffffff",
        canvasWidth: width,
        canvasHeight: height,
        skipFonts: true,
        style: {
          transform: `scale(${scaleFactor})`,
          transformOrigin: "top left",
        },
        filter: (node) => {
          if (node instanceof HTMLStyleElement) {
            try {
              node.sheet && node.sheet.cssRules;
            } catch (e) {
              if (e instanceof DOMException) {
                console.warn("Ignoring cross-origin stylesheet", node);
                return false;
              }
            }
          }
          // Skip video elements
          if (node instanceof HTMLVideoElement) {
            return false;
          }
          // Ignore elements with the 'temporary' class
          if (node.classList && node.classList.contains("temporary")) {
            return false;
          }

          // Skip images without src
          if (
            node instanceof HTMLImageElement &&
            (!node.src || node.src.includes("data:image/"))
          ) {
            return false;
          }

          if (ignore_imgs) {
            // Ignore images with the class 'v-img__img'
            if (node instanceof HTMLImageElement) {
              return false;
            }
          }

          // Skip very nested children
          let depth = 0;
          let parent = node;
          while (parent !== element && parent !== null) {
            depth++;
            parent = parent.parentNode as HTMLElement;
          }
          return depth <= depth; // Skip nodes deeper than {depth} levels
        },
      });

      if (des_image) {
        des_image.src = dataURI;
        des_image.width = width;
        des_image.height = height;
      }

      // Animate flash:
      if (flash) {
        element.classList.add("fadeIn");
        setTimeout(() => {
          element.classList.remove("fadeIn");
        }, 300);
      }

      return dataURI;
    } catch (error) {
      console.error("Error capturing the element:", error);
      throw error;
    }
  }
}
