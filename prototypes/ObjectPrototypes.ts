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
