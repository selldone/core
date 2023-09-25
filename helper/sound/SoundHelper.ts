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
