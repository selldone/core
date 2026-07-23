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
import type { ILanguage } from "../../enums/language/Language";
import { isString } from "lodash-es";

let COLORS_NAME_CACHE: { [key: string]: string } = {};
let LAST_LANGUAGE: ILanguage | null = null;
let COLORS_LANGUAGES_LIST: { name: string; hex: string; distance?: number }[];

const HEX_COLOR_PATTERN = /^#(?:[A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
const HEX_COLOR_EXTRACT_PATTERN =
  /#(?:[A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})(?![A-Fa-f0-9])/g;

function isValidHexColor(color: string): boolean {
  return HEX_COLOR_PATTERN.test(color);
}

/**
 * Retrieves the name of a given color by processing its format and mapping it
 * to a name using available color resources.
 *
 * @param color - A string containing one or more hex colors.
 * @returns The color names, `"-"` when no valid hex color is found, or `null` for an empty input.
 *
 * @example
 * ```typescript
 * GetNameOfColor("#FF5733"); // Returns "Persimmon" or similar color name
 * ```
 */
export function GetNameOfColor(color: string | null) {
  if (!color || !isString(color)) return null;

  const colors = ColorHelper.ExtractColors(color);
  if (!colors?.length) return "-";

  const names = colors
    .map((color) =>
      ColorHelper.getNameOfColor(window.$tm("global.colors") as {}, color),
    )
    .filter((name): name is string => Boolean(name));

  return names.length ? names.join(" / ") : "-";
}

/**
 * Converts a color into a human-readable name in the user's language.
 * It checks a cache for previously computed results to avoid redundant calculations.
 *
 * @param color - A 3, 6, or 8-digit hex color.
 * @returns The color name if identified; otherwise, `null`.
 *
 * @remarks
 * - Uses chroma.js for color validation and distance calculations.
 * - Utilizes a cache for performance optimization.
 *
 * @example
 * ```typescript
 * ColorNamer("#3498db"); // Returns "Sky Blue" or similar name
 * ```
 */
/**
 * Finds the nearest localized color name for a given hex color.
 *
 * @param {string} color - A 3, 6, or 8-digit hex color.
 * @returns {string | null} Best matching localized color name.
 */
const ColorNamer = function (color: string) {
  if (!isValidHexColor(color)) return null;

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

  const _delta_e = true;

  const result = COLORS_LANGUAGES_LIST.map((item) => {
    try {
      const distanceValue = _delta_e
        ? chroma.deltaE(color_obj, item.hex)
        : chroma.distance(color_obj, item.hex);

      return {
        ...item,
        distance: distanceValue,
      };
    } catch {
      return {
        ...item,
        distance: Infinity,
      };
    }
  }).sort((a, b) => a.distance - b.distance)[0]?.name;
  // console.log("results", color, result);

  if (!result) return null;

  COLORS_NAME_CACHE[cacheKey] = result;
  return result;
};

/**
 * Helper utilities for extracting and naming colors.
 */
export class ColorHelper {
  /**
   * Resolves a localized color name from a repository of `{ hex: label }` pairs.
   *
   * Exact matches are returned immediately; otherwise the helper computes the nearest
   * color using chroma distance and caches results per active language.
   *
   * @param {{ [key: string]: string }} repository - Localized color-name repository.
   * @param {string} color - Hex color string.
   * @returns {string | null} Matching or nearest color name.
   */
  static getNameOfColor(repository: { [key: string]: string }, color: string) {
    if (!color || !isValidHexColor(color)) return null;
    //console.log("getNameOfColor", color);

    // Step one: find exact match:
    if (repository[color]) return repository[color];

    if (LAST_LANGUAGE !== window.$language) {
      COLORS_LANGUAGES_LIST = [];
      Object.keys(repository).forEach((k) => {
        if (isValidHexColor(k)) {
          COLORS_LANGUAGES_LIST.push({ name: repository[k], hex: k });
        }
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
   * @returns {string[] | null} An array of extracted standard hex color values, or null if the input is empty or contains no matches.
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
   * // Returns null
   * ColorExtractor.ExtractColors('No colors here.');
   */
  static ExtractColors(colorString: string | null) {
    if (!colorString) return null;
    //console.log("ExtractColors", colorString);
    return colorString.match(HEX_COLOR_EXTRACT_PATTERN);
  }
}
