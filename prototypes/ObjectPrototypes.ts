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

declare global {
  interface Object {
    getNestedValue(key: string): any;
  }
}
// This is required because we modified global
export {};

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

export function ApplyAugmentToObject(
  object: { [key: string]: any },
  augment: { key: string; value: string }[],
  bypass: boolean = false
): { [p: string]: any } {
  const _object = JSON.parse(JSON.stringify(object));
  if (bypass) {
    return _object; // Return a shallow copy of the object if bypass is true
  }

  // Iterate over the properties of the object
  return Object.entries(_object).reduce(
    (newObj: { [key: string]: any }, [key, value]) => {
      // Apply the augment if necessary
      if (
        Array.isArray(value) ||
        typeof value === "string" ||
        value instanceof String ||
        typeof value === "number" ||
        value instanceof Number
      ) {
        newObj[key] = value.applyAugment(augment, bypass);
        // console.log("Object ITem", key, "->",value,'out:', newObj[key]);
      } else if (value instanceof Object) {
        newObj[key] = ApplyAugmentToObject(value, augment, bypass);
      } else {
        newObj[key] = value;
      }

      return newObj;
    },
    {}
  );
}
