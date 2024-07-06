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

import chroma from "chroma-js";
import {ILanguage} from "../../enums/language/Language";

let COLORS_NAME_CACHE: { [key: string]: string } = {};
let LAST_LANGUAGE: ILanguage | null = null;
let COLORS_LANGUAGES_LIST: { name: string; hex: string; distance?: number }[];

const ColorNamer = function (color: string) {
  const cacheKey = color + window.$language.code;

  if (COLORS_NAME_CACHE[cacheKey]) {
    // console.log("getNameOfColor FIND IN CACHE", color);
    return COLORS_NAME_CACHE[cacheKey];
  }

  // Check color is valid:
  let color_obj;
  try {
    color_obj = chroma(color);
  } catch (e) {
    console.error("❌ Color Name Generator ● Invalid color", color, e);
    return null;
  }

  const deltaE = true;

  const result = COLORS_LANGUAGES_LIST.map((item) => {
    try {
      const distanceValue = deltaE
        ? chroma.deltaE(color_obj, item.hex)
        : chroma.distance(color_obj, item.hex);

      return {
        ...item,
        distance: distanceValue,
      };
    } catch (e) {
      console.error(e);
      return {
        ...item,
        distance: Infinity,
      };
    }
  })
    .filter((item) => item !== null) // Remove any items that threw an error and returned null
    .sort((a, b) => a.distance - b.distance)[0].name;
  // console.log("results", color, result);

  COLORS_NAME_CACHE[cacheKey] = result;
  return result;
};

export class ColorHelper {
  static getNameOfColor(repository: { [key: string]: string }, color: string) {
    if (!color || !color.startsWith("#") || ![4, 7, 9].includes(color.length))
      return null; // #123 #123456 #123456FF
    //console.log("getNameOfColor", color);

    // Step one: find exact match:
    if (repository[color]) return repository[color];

    if (LAST_LANGUAGE !== window.$language) {
      COLORS_LANGUAGES_LIST = [];
      Object.keys(repository).forEach((k) => {
        COLORS_LANGUAGES_LIST.push({ name: repository[k], hex: k });
      });

      COLORS_NAME_CACHE = {};
      LAST_LANGUAGE = window.$language;
      console.log("🎨 Color Name Generator ● Initialize");
    }

    if (!COLORS_LANGUAGES_LIST.length) return null;

    return ColorNamer(color);
  }

  /**
   * Extracts hex color values from a given string for product variants.
   *
   * @param {string | null} colorString - The input string containing color values. Can be null.
   * @returns {string[] | null} An array of extracted hex color values, or null if the input is null or contains no matches.
   *
   * @example
   * // Returns ['#fff', '#ff5733']
   * ColorExtractor.ExtractColors('Here are some colors: #fff and #ff5733.');
   *
   * @example
   * // Returns ['#123', '#123456']
   * ColorExtractor.ExtractColors('Shades: #123, #123456, #abcd.');
   *
   * @example
   * // Returns null
   * ColorExtractor.ExtractColors(null);
   *
   * @example
   * // Returns []
   * ColorExtractor.ExtractColors('No colors here.');
   */
  static ExtractColors(colorString: string | null) {
    if (!colorString) return null;
    //console.log("ExtractColors", colorString);
    const regex = /#([A-Fa-f0-9]{3}){1,2}([A-Fa-f0-9]{2})?/g;
    return colorString.match(regex);
  }



}
