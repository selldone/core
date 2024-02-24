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

import {ApplyAugmentToObject} from "@core/prototypes/ObjectPrototypes";

declare global {
  interface Array<T> {
    limit(max: number): T[];

    insert(index: number, item: T): void;

    findMax(this: number[]): number;

    findMin(this: number[]): number;

    sortByKey(key: string, ASC?: boolean): T[];

    random(): T[];

    remove(val: T): T[];

    add(val: T): T[];

    toggle(val: T, key?: string): T[];

    move(from: number, to: number): void;

    moveRight(index: number): void;

    moveLeft(index: number): void;

    sumByKey(key: string): number;

    minByKey(key: string): T;

    maxByKey(key: string): T;

    countUnique(key: string): number;

    unique(): T[];

    uniqueByKey(key: string): T[];

    rotateRight(n: number): T[];

    applyAugment(
      augment: { key: string; value: string }[],
      bypass: boolean,
    ): T[];

    removeNulls(clone: boolean): T[];
  }
}
// This is required because we modified global
export {};

Array.prototype.limit = function (max) {
  if (max < 0) return this;
  return this.slice(0, max);
};

/**
 * Array prototype method to insert an item at a specific index.
 *
 * @example
 * let arr = ['A', 'B', 'D', 'E'];
 * arr.insert(2, 'C');  // Resulting array is ['A', 'B', 'C', 'D', 'E']
 *
 * @param {number} index - The position where the item should be inserted.
 * @param {*} item - The item to be inserted into the array.
 * @returns {void}
 */
Array.prototype.insert = function <T>(index: number, item: T) {
  this.splice(index, 0, item);
};

/**
 * Array prototype method to find the maximum value from the array.
 * Assumes the array contains only numbers.
 *
 * @example
 * let arr = [2, 3, 1, 5, 4];
 * console.log(arr.findMax());  // Outputs: 5
 *
 * @returns {number} - The maximum value found in the array.
 */
Array.prototype.findMax = function (): number {
  return Math.max(...this);
};

/**
 * Array prototype method to find the minimum value from the array.
 * Assumes the array contains only numbers.
 *
 * @example
 * let arr = [2, 3, 1, 5, 4];
 * console.log(arr.findMin());  // Outputs: 1
 *
 * @returns {number} - The minimum value found in the array.
 */
Array.prototype.findMin = function (): number {
  return Math.min(...this);
};

/**
 * Extends the Array prototype with a custom `sortByKey` method.
 * This method sorts an array of objects based on a specified key of the object.
 *
 * @template T - A generic type that extends `Record<string, any>`, representing the shape of the objects within the array.
 *
 * @param {keyof T} key - The key of the object to base the sort operation upon.
 *                        The key must be one of the keys within type `T`.
 *
 * @param {boolean} [ASC=false] - A boolean to specify the order of the sort.
 *                                - `true` for Ascending
 *                                - `false` for Descending (default)
 *
 * @returns {T[]} - The sorted array.
 *
 * @example
 *
 * const arr = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 20 }];
 * arr.sortByKey('age'); // Returns array sorted by 'age' in descending order.
 * arr.sortByKey('age', true); // Returns array sorted by 'age' in ascending order.
 *
 */
Array.prototype.sortByKey = function <T extends Record<string, any>>(
  key: keyof T,
  ASC: boolean = false,
) {
  return this.sort((a: T, b: T) => {
    if (ASC) return (a[key] as any) - (b[key] as any);
    return (b[key] as any) - (a[key] as any);
  });
};

/**
 * Randomizes the order of the elements of an array, returning a new array.
 *
 * @returns {Array} A new array with the order of the elements randomized.
 * @example
 * const arr = [1, 2, 3];
 * const randomizedArr = arr.random(); // e.g., [3, 1, 2]
 */
Array.prototype.random = function () {
  return Array(this.length)
    .fill(null)
    .map((_, i) => [Math.random(), i])
    .sort(([a], [b]) => a - b)
    .map(([, i]) => this[i]);
};

/**
 * Removes a specified value from the array (if it exists) and returns the array.
 *
 * @param {T} val - The value to remove.
 * @returns {Array} The modified array.
 * @example
 * const arr = [1, 2, 3];
 * arr.remove(2); // [1, 3]
 */
Array.prototype.remove = function <T>(val: T) {
  const i = this.findIndex((e: T) => e === val);
  if (i >= 0) this.splice(i, 1);
  return this;
};

/**
 * Adds a specified value to the array only if it doesn't already exist in the array.
 *
 * @param value - The value to add.
 * @returns {Array} The modified array.
 * @example
 * const arr = [1, 2, 3];
 * arr.add(2); // [1, 2, 3]
 * arr.add(4); // [1, 2, 3, 4]
 */
Array.prototype.add = function (value) {
  if (!this.includes(value)) this.push(value);
  return this;
};

/**
 * Toggles an item in the array. If the item already exists, it will be removed.
 * If the item doesn't exist, it will be added.
 *
 * @template T - The type of the array elements.
 * @param {T} val - The item to toggle.
 * @param key
 * @returns {T[]} - The modified array.
 */
Array.prototype.toggle = function <T>(val: T, key?: keyof T): T[] {
  if (!this.some((e: T) => e === val || (key && e[key] === val[key]))) {
    this.push(val);
  } else {
    this.splice(this.indexOf(val), 1);
  }
  return this;
};

/**
 * Moves an item from one position to another within the array.
 *
 * @param {number} from - The current index of the item.
 * @param {number} to - The target index to move the item to.
 */
Array.prototype.move = function (from: number, to: number) {
  this.splice(
    to - (from > to ? 0 : 1) /*Fix always add before target!*/,
    0,
    this.splice(from, 1)[0],
  );
};

/**
 * Moves an item one position to the right within the array.
 *
 * @param {number} index - The current index of the item.
 */
Array.prototype.moveRight = function (index: number) {
  const from = index;
  const to = from + 1;
  if (to >= this.length) return;
  this.splice(to, 0, this.splice(from, 1)[0]);
};

/**
 * Moves an item one position to the left within the array.
 *
 * @param {number} index - The current index of the item.
 */
Array.prototype.moveLeft = function (index: number) {
  const from = index;
  const to = from - 1;
  if (to < 0) return;
  this.splice(to, 0, this.splice(from, 1)[0]);
};

/**
 * Sums the values of a specified key in an array of objects.
 * @template T - Object shape
 * @param {keyof T} key - Key of the property to sum
 * @returns {number} Sum of the property values
 */
Array.prototype.sumByKey = function <T extends Record<string, any>>(
  key: keyof T,
) {
  let sum = 0;
  this.forEach((i: T) => (sum += i[key]));
  return sum;
};

/**
 * Finds the object with the minimum value for a specified key in an array of objects.
 * @template T - Object shape
 * @param {keyof T} key - Key of the property to compare
 * @returns {T | null} Object with the minimum value or null if the array is empty
 */
Array.prototype.minByKey = function <T extends Record<string, any>>(
  key: keyof T,
) {
  if (!this.length) return null;
  let min = this[0];
  this.forEach((i: T) => (min = i[key] < min[key] ? i : min));
  return min;
};

/**
 * Finds the object with the maximum value for a specified key in an array of objects.
 * @template T - Object shape
 * @param {keyof T} key - Key of the property to compare
 * @returns {T | null} Object with the maximum value or null if the array is empty
 */
Array.prototype.maxByKey = function <T extends Record<string, any>>(
  key: keyof T,
) {
  if (!this.length) return null;
  let max = this[0];
  this.forEach((i: T) => (max = i[key] > max[key] ? i : max));
  return max;
};

/**
 * Counts the number of unique values for a specified key in an array of objects.
 * @template T - Object shape
 * @param {keyof T} key - Key of the property to check for uniqueness
 * @returns {number} Number of unique values
 */
Array.prototype.countUnique = function <T extends Record<string, any>>(
  key: keyof T,
) {
  if (!this.length) return 0;
  const keep: any[] = [];
  let out = 0;
  this.forEach((i: T) => {
    if (!keep.includes(i[key])) {
      keep.push(i[key]);
      out++;
    }
  });
  return out;
};

/**
 * Returns a new array with duplicate values removed.
 * @returns {any[]} Array of unique values
 */
Array.prototype.unique = function () {
  return Array.from(new Set(this));
};

/**
 * Returns a new array with objects having unique values for a specified key.
 * @param {string} key - Key of the property to check for uniqueness
 * @returns {Object[]} Array of objects with unique values for the specified key
 */
Array.prototype.uniqueByKey = function (key) {
  const uniqueItems = new Map();

  for (const item of this) {
    if (!uniqueItems.has(item[key])) {
      uniqueItems.set(item[key], item);
    }
  }

  return Array.from(uniqueItems.values());
};

/**
 * Rotates the array to the right by a specified number of positions.
 * @template T - Type of the elements in the array
 * @param {number} n - Number of positions to rotate the array
 * @returns {T[]} Rotated array
 */
Array.prototype.rotateRight = function <T>(this: T[], n: number): T[] {
  this.unshift(...this.splice(n, this.length));
  return this;
};

/**
 * Applies augmentations to each element of the array. This method is typically
 * used in dynamic page content scenarios within a page builder.
 *
 * The function iterates over each element of the array. If the element is of
 * type Array, Object, String, or Number, and if it has an `applyAugment` method,
 * the method is recursively called on that element with the same augmentations.
 *
 * If the `bypass` parameter is set to true, a shallow copy of the array is returned
 * without applying any augmentations.
 *
 * @template T - The type of elements in the array.
 * @param {Array<{ key: string; value: string }>} augment - An array of objects
 *        specifying the augmentations to apply. Each object in the array should
 *        have a 'key' and a 'value' property.
 * @param {boolean} [bypass=false] - If true, the function returns a shallow copy
 *        of the array without applying any augmentations.
 * @returns {T[]} A new array with the augmentations applied to each element. If
 *          bypass is true, returns a shallow copy of the original array.
 *
 * @example
 * // Assume there's an applyAugment method on Array, Object, String, Number
 * const myArray = [{ name: 'John' }, { name: 'Jane' }];
 * const augments = [{ key: 'name', value: 'Doe' }];
 * const augmentedArray = myArray.applyAugment(augments);
 * // augmentedArray will be [{ name: 'Doe' }, { name: 'Doe' }]
 */
Array.prototype.applyAugment = function <T>(
  augment: { key: string; value: string }[],
  bypass: boolean = false,
): T[] {
  const _array = JSON.parse(JSON.stringify(this));
  if (bypass) {
    return _array; // Return a shallow copy of the array if bypass is true
  }
  // console.log("ARRAY", _array);

  return _array.map((element: T) => {
    if (
      Array.isArray(element) ||
      typeof element === "string" ||
      element instanceof String ||
      typeof element === "number" ||
      element instanceof Number
    ) {
      // console.log("Array Item", element, "->", element.applyAugment(augment, bypass),'bypass',bypass);
      return element.applyAugment(augment, bypass);
    } else if (element instanceof Object) {
      return ApplyAugmentToObject(element, augment, bypass);
    }

    return element;
  });
};

/**
 * Removes all null values from the array.
 *
 * This method extends the Array prototype to provide functionality for removing all null values from the array.
 * It takes a boolean parameter `clone` which determines whether the operation should be performed on a clone of the array or modify the original array.
 *
 * @param {boolean} clone - If true, the operation is performed on a clone of the array and the original array is not modified. If false, the original array is modified to remove all null values.
 *
 * @returns {Array} If `clone` is true, returns a new array with all null values removed. If `clone` is false, the original array is modified to remove all null values and then returned.
 *
 * @example
 * let arr = [1, null, 2, null, 3];
 * arr.removeNulls(true);  // Returns a new array: [1, 2, 3], original array remains unchanged
 * arr.removeNulls(false); // Original array is modified: [1, 2, 3]
 */
Array.prototype.removeNulls = function (clone: Boolean = true) {
  if (clone) {
    return this.filter((item) => item !== null);
  }
  const nonNulls = this.filter((item) => item !== null);
  this.length = 0; // clear the original array
  this.push(...nonNulls); // push the non-null values back into the array
};
