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

export class SoundHelper {
  static tick = new Audio("/sound/tick.mp3");
  static win = new Audio("/sound/win.mp3");

  static playTick(volume?: number) {
    // Stop and rewind the sound if it already happens to be playing.
    this.tick.pause();
    this.tick.currentTime = 0;
    if (volume) this.tick.volume = volume;
    // Play the sound.
    return this.tick.play();
  }

  static playWin() {
    return this.win.play();
  }
}
