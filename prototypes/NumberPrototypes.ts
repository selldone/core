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
 * Augments the current number instance.
 *
 * @param augment - The value to augment the number with.
 * @param bypass - If set to true, bypasses the augmenting process.
 * @returns Returns the current Number instance.
 */
Number.prototype.applyAugment = function (
  augment: { key: string; value: string }[],
  bypass: boolean = false
): number {
  return this as number;
};

// Extending the Number interface for type awareness
interface Number {
  applyAugment(
    augment: { key: string; value: string }[],
    bypass?: boolean
  ): number;
}
