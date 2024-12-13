/**
 * SoundHelper class provides methods to play sound effects asynchronously.
 * The sounds are only loaded when needed, optimizing resource usage.
 */
export class SoundHelper {
  /**
   * Audio element for the "tick" sound.
   * Loaded only when `playTick` is called for the first time.
   */
  private static tick: HTMLAudioElement | null = null;

  /**
   * Audio element for the "win" sound.
   * Loaded only when `playWin` is called for the first time.
   */
  private static win: HTMLAudioElement | null = null;

  private static bubble: HTMLAudioElement | null = null;

    private static double_bubble: HTMLAudioElement | null = null;

  /**
   * Loads a sound asynchronously and returns an HTMLAudioElement.
   * @param filePath - The path to the sound file to be loaded.
   * @returns A promise that resolves to the loaded HTMLAudioElement.
   */
  private static async loadSound(filePath: string): Promise<HTMLAudioElement> {
    const sound = new Audio(filePath);
    await sound.load(); // Preload sound file (automatically handled by `Audio`)
    return sound;
  }

  /**
   * Plays the "tick" sound.
   * If the sound hasn't been loaded yet, it loads asynchronously before playing.
   * The sound is stopped and rewound if it's already playing.
   * @param volume - Optional volume level for the sound (0.0 to 1.0).
   * @returns A promise that resolves when the sound starts playing.
   */
  static async playTick(volume?: number): Promise<void> {
    try {
      // Load `tick` sound only if it hasn't been loaded
      if (!this.tick) {
        this.tick = await this.loadSound('/sound/tick.mp3');
      }

      // Stop and rewind if already playing
      this.tick.pause();
      this.tick.currentTime = 0;
      if (volume !== undefined) this.tick.volume = volume;

      // Play the sound
      await this.tick.play();
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Plays the "win" sound.
   * If the sound hasn't been loaded yet, it loads asynchronously before playing.
   * @returns A promise that resolves when the sound starts playing.
   */
  static async playWin(): Promise<void> {
    try {
      // Load `win` sound only if it hasn't been loaded
      if (!this.win) {
        this.win = await this.loadSound('/sound/win.mp3');
      }

      // Play the sound
      await this.win.play();
    } catch (e) {
      console.error(e);
    }
  }

  static async playBubble(): Promise<void> {
    try {
      // Load `win` sound only if it hasn't been loaded
      if (!this.bubble) {
        this.bubble = await this.loadSound('/sound/bubble.mp4');
        this.bubble.volume=0.1;
      }
      // Play the sound
      await this.bubble.play();
    } catch (e) {
      console.error(e);
    }
  }
  // Double
  static async playDoubleBubble(): Promise<void> {
    try {
      // Load `win` sound only if it hasn't been loaded
      if (!this.double_bubble) {
        this.double_bubble = await this.loadSound('/sound/double_bubble.mp4');
        this.double_bubble.volume=0.1;
      }

      // Play the sound
      await this.double_bubble.play();
    } catch (e) {
      console.error(e);
    }
  }

}
