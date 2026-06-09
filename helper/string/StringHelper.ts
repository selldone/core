// @ts-nocheck
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
 * Converts an object into a URL query string format.
 *
 * This function takes an object and transforms it into a query string representation
 * suitable for use in URLs (although it doesn't URL-encode the values).
 *
 * @param {Object} obj - The object to convert into a query string. Each key-value pair becomes a query parameter.
 * @returns {string} A query string in the format "key1=value1&key2=value2", or an empty string if the object is null/undefined.
 *
 * @example
 * // Returns "name=John&age=30"
 * ToQueryString({ name: "John", age: 30 });
 *
 * @example
 * // Returns ""
 * ToQueryString(null);
 */
export function ToQueryString(obj) {
  if (!obj) return "";
  // Convert object to array of key=value pairs and join them with "&"
  return Object.keys(obj)
    .map((key) => {
      return key + "=" + obj[key];
    })
    .join("&");
}

/**
 * Generates a random string of a specified length.
 *
 * Creates a random string composed of alphanumeric characters (a-z, A-Z, 0-9).
 * Useful for generating unique identifiers, tokens, or random codes.
 *
 * @param {number} length - The desired length of the random string to generate.
 * @returns {string} A random string of the specified length containing alphanumeric characters.
 *
 * @example
 * // Returns a 10-character random string like "aB3xK9mL2Q"
 * RandomString(10);
 *
 * @example
 * // Returns a 32-character random token
 * RandomString(32);
 */
export function RandomString(length) {
  let result = "";
  // Available characters for random selection: lowercase, uppercase, and digits
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  // Build the random string by selecting random characters
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
