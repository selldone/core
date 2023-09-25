/**
 * Helper class for augmenting arrays.
 */
export default class AugmentHelper {
  /**
   * Merges two arrays by updating or adding items from the second array to the first.
   *
   * @param augment The primary array to be augmented. If not provided or invalid, it's initialized as an empty array.
   * @param otherArray The array containing items to update or add to the primary array.
   * @returns The augmented array.
   */
  static MixAugments(
    augment: { key: string; value: any }[] | null,
    otherArray: { key: string; value: any }[]
  ): { key: string; value: any }[] {
    // Initialize the augment array if not provided or if it's not an array
    if (!augment || !Array.isArray(augment)) augment = [];

    // Remove all items from the augment array with null or empty value
    augment = augment.filter(
      (item) => item.value !== null && item.value !== ""
    );

    // Add or update items from otherArray
    otherArray.forEach((newItem) => {
      // Find the index of the item in the augment array by its key
      const index = augment!.findIndex((item) => item.key === newItem.key);

      if (index === -1) {
        // If the item does not exist in the augment array, add it
        augment!.push(newItem);
      }
    });

    return augment;
  }
}
