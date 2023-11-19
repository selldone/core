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
 * Extends the `Object` prototype to add a `getNestedValue` method.
 * This method retrieves the value of a nested key within the object.
 *
 * Example:
 * ```typescript
 * const obj = { finance: { x: 100 } };
 * console.log(obj.getNestedValue("finance.x")); // outputs 100
 * ```
 *
 * @param key - A dot-separated string indicating the path to the nested key.
 * @returns The value of the nested key, or `undefined` if the key does not exist.
 */
Object.defineProperty(Object.prototype, "getNestedValue", {
  value: function (key: string) {
    if (!key) return null;
    const keys = key.split(".");
    let current: any = this;

    for (let i = 0; i < keys.length; i++) {
      if (current[keys[i]] === undefined) {
        return undefined;
      }
      current = current[keys[i]];
    }

    return current;
  },
  enumerable: false,
});
