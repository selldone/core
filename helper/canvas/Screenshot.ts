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

export class Screenshot {
  static FromVideo(
    video: HTMLVideoElement,
    des_image: HTMLImageElement | null,
    flash: boolean
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
}
