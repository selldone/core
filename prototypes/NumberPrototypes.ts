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
