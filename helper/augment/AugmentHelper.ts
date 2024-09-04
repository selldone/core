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

type AugmentItemI = {
  key: string;
  value: any;
  type: 'text' | 'image';
};


/**
 * Helper class for augmenting arrays.
 */
export class AugmentHelper {
  /**
   * Merges two arrays by updating or adding items from the second array to the first.
   *
   * @param augment The primary array to be augmented. If not provided or invalid, it's initialized as an empty array.
   * @param otherArray The array containing items to update or add to the primary array.
   * @returns The augmented array.
   */
  static MixAugments(
    augment: AugmentItemI[] | null,
    otherArray: { key: string; value: any }[],
  ): { key: string; value: any }[] {
    // Initialize the augment array if not provided or if it's not an array
    if (!augment || !Array.isArray(augment)) augment = [];

    // Remove all items from the augment array with null or empty value
    augment = augment.filter(
      (item) => item.value !== null && item.value !== "",
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

  /**
   * Converts a nested object into a flat array of objects, where each object represents
   * a key-value pair from the original object. The key represents the path to the value in the original object.
   *
   * @param obj - The object to be flattened into an array.
   * @param parentKey - The parent key to be prefixed to the keys in the object. This is used for recursion and should be left empty when called initially.
   * @returns An array of AugmentItemI objects, each containing the key (path), value, and type ('text' or 'image').
   *
   * The function supports detecting if the value is a text or an image based on the file extension (e.g., '.jpg', '.png', '.gif').
   * It also handles nested objects recursively, building the full key path for each value in the object.
   */
  static  ConvertToAugmentArray(obj: any, parentKey: string = ''):AugmentItemI[] {
    const flattened: FlattenedItem[] = [];

    if(!obj)return flattened;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const fullKey = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];
        const type = typeof value === 'string' && (value.endsWith('.jpg') || value.endsWith('.png') || value.endsWith('.gif'))
            ? 'image' : 'text';

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          // Recursively flatten nested objects
          flattened.push(...this.ConvertToAugmentArray(value, fullKey));
        } else {
          // Push the current key-value pair
          flattened.push({ key: fullKey, value: value, type: type });
        }
      }
    }

    return flattened;
  }


}
