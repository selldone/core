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
 * Calculates a color point within a range based on interpolation.
 *
 * Helper function for color interpolation that calculates specific color points
 * along a scale. Can interpolate forward or backward through the range.
 *
 * @param {number} i - The index/iteration count (0-based).
 * @param {number} intervalSize - The size of each step in the color range.
 * @param {object} colorRangeInfo - Configuration for the color range.
 * @param {number} colorRangeInfo.colorStart - Starting value of the range.
 * @param {number} colorRangeInfo.colorEnd - Ending value of the range.
 * @param {boolean} [colorRangeInfo.useEndAsStart=false] - If true, interpolate backward from end.
 * @returns {number} The calculated color point value.
 */
function calculatePoint(
  i: number,
  intervalSize: number,
  colorRangeInfo: {
    colorStart: number;
    colorEnd: number;
    useEndAsStart?: boolean;
  },
): number {
  const { colorStart, colorEnd, useEndAsStart } = colorRangeInfo;
  return useEndAsStart
    ? colorEnd - i * intervalSize
    : colorStart + i * intervalSize;
}

/**
 * Interpolates colors across a data range using a color scale function.
 *
 * Generates an array of evenly spaced colors from a color scale by dividing
 * the color range into intervals matching the data length.
 *
 * @param {number} dataLength - The number of colors/data points to generate.
 * @param {(point: number) => string} colorScale - Function that returns a color string for a given scale point.
 * @param {object} colorRangeInfo - Configuration for the color range.
 * @param {number} colorRangeInfo.colorStart - Starting value in the scale.
 * @param {number} colorRangeInfo.colorEnd - Ending value in the scale.
 * @returns {string[]} Array of color strings, one for each data point.
 *
 * @example
 * const scale = (point) => chroma.scale(['white', 'black'])(point);
 * const colors = interpolateColors(5, scale, { colorStart: 0, colorEnd: 1 });
 * // Returns 5 colors from white to black
 */
export function interpolateColors(
  dataLength: number,
  colorScale: (point: number) => string,
  colorRangeInfo: { colorStart: number; colorEnd: number },
): string[] {
  const { colorStart, colorEnd } = colorRangeInfo;
  const colorRange = colorEnd - colorStart;
  const intervalSize = colorRange / dataLength;
  let colorPoint: number;
  const colorArray: string[] = [];

  for (let i = 0; i < dataLength; i++) {
    colorPoint = calculatePoint(i, intervalSize, colorRangeInfo);
    colorArray.push(colorScale(colorPoint));
  }

  return colorArray;
}

/**
 * First color palette (bright, vibrant colors).
 * A set of distinct, easily distinguishable colors suitable for charts and data visualization.
 * @type {string[]}
 */
export const colorSet1: string[] = [
  "#e6194B",
  "#3cb44b",
  "#ffe119",
  "#4363d8",
  "#f58231",
  "#911eb4",
  "#42d4f4",
  "#f032e6",
  "#bfef45",
  "#fabebe",
  "#469990",
  "#e6beff",
  "#9A6324",
  "#fffac8",
  "#800000",
  "#aaffc3",
  "#808000",
  "#ffd8b1",
  "#000075",
  "#a9a9a9",
];

/**
 * Second color palette (darker, muted colors).
 * A set of darker shades suitable for backgrounds or creating contrast with text.
 * @type {string[]}
 */
export const colorSet2: string[] = [
  "#85111d",
  "#1d5a25",
  "#786710",
  "#213470",
  "#7b401a",
  "#4a105e",
  "#195562",
  "#5e1756",
  "#48601a",
  "#5e4646",
  "#2c6058",
  "#62516d",
  "#67411a",
  "#746f58",
  "#580000",
  "#344f3b",
  "#636300",
  "#7a6758",
  "#000057",
  "#4f4f4f",
];

/**
 * Third color palette (Google charting colors).
 * A professional set of colors recommended by Google for data visualization and charting.
 * Provides good contrast and accessibility for analytical dashboards.
 * @type {string[]}
 */
export const colorSet3: string[] = [
  "#3366CC",
  "#DC3912",
  "#FF9900",
  "#109618",
  "#990099",
  "#3B3EAC",
  "#0099C6",
  "#DD4477",
  "#66AA00",
  "#B82E2E",
  "#316395",
  "#994499",
  "#22AA99",
  "#AAAA11",
  "#6633CC",
  "#E67300",
  "#8B0707",
  "#329262",
  "#5574A6",
  "#3B3EAC",
]; // Google charting! ( THE BEST CHOICE!)

/**
 * Standard material design color palette.
 * Material Design colors commonly used in modern UI design for consistency across applications.
 * Includes primary colors, neutrals, and common accent colors.
 * @type {string[]}
 */
export const standardDesignColor: string[] = [
  "#D32F2F",
  "#C2185B",
  "#7B1FA2",
  "#512DA8",
  "#303F9F",
  "#1976D2",
  "#0097A7",
  "#00796B",
  "#689F38",
  "#FBC02D",
  "#FFA000",
  "#F57C00",
  "#5D4037",
  "#616161",
  "#455A64",
  "#000",
  "#fff",
];

/**
 * Converts a string into a consistent color.
 *
 * Uses a hash function to generate a unique color for any input string.
 * Same string always produces the same color. Optional shading parameter
 * can lighten or darken the result.
 *
 * Useful for assigning consistent colors to user names, categories, or other identifiers.
 *
 * @param {string} str - The input string to convert to a color.
 * @param {number} [shade=0] - Optional shade adjustment (-100 to 100).
 *                            Negative values darken, positive values lighten.
 * @returns {string} A hex color string (e.g., "#ff5733").
 *
 * @example
 * StringToColour("John Doe"); // Returns specific color, always same for this name
 * StringToColour("Jane Doe"); // Returns different color
 * StringToColour("John Doe", -20); // Returns darker version of John's color
 */
export function StringToColour(str: string, shade: number = 0): string {
  // Generate hash from string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash; // Convert to 32-bit integer
  }

  // Convert hash to hex color
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    // Extract RGB components from hash
    const value = (hash >> (i * 8)) & 0xff;
    // Convert to hex and pad with zeros
    colour += ("00" + value.toString(16)).slice(-2);
  }

  // Apply shade if requested
  return shade ? ShadeColor(colour, shade) : colour;
}

/**
 * Applies shading to a color (lighten or darken it).
 *
 * Adjusts the brightness of a color by a percentage. Positive percentages lighten,
 * negative percentages darken. Automatically handles 3-digit and 8-digit hex colors.
 *
 * @param {string} color - The original color in hex format (#RGB, #RRGGBB, or #RRGGBBAA).
 * @param {number} percent - The shading percentage (-100 to lighten/darken to extremes).
 * @returns {string} The shaded color as a 6-digit hex string.
 *
 * @example
 * ShadeColor("#FF5733", 20); // Returns a lighter version (20% brighter)
 * ShadeColor("#FF5733", -20); // Returns a darker version (20% darker)
 */
export function ShadeColor(color: string, percent: number): string {
  // Normalize color to 6-digit format
  color = fix6HexColor(color);

  // Extract RGB components
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  // Apply shading percentage to each component
  R = Math.min(255, Math.max(0, Math.round((R * (100 + percent)) / 100)));
  G = Math.min(255, Math.max(0, Math.round((G * (100 + percent)) / 100)));
  B = Math.min(255, Math.max(0, Math.round((B * (100 + percent)) / 100)));

  // Convert back to hex
  const RR = R.toString(16).padStart(2, "0");
  const GG = G.toString(16).padStart(2, "0");
  const BB = B.toString(16).padStart(2, "0");

  return `#${RR}${GG}${BB}`;
}

/**
 * Ensures a color string is in 6-digit hex format.
 *
 * Normalizes colors from various formats:
 * - #RGB (3-digit) → #RRGGBB (6-digit) by duplicating each character
 * - #RRGGBBAA (8-digit) → #RRGGBB (6-digit) by removing alpha channel
 * - #RRGGBB (6-digit) → unchanged
 *
 * @param {string} color - The color string to normalize.
 * @returns {string} The normalized 6-digit hex color (#RRGGBB).
 *
 * @example
 * fix6HexColor("#FFF"); // Returns "#FFFFFF"
 * fix6HexColor("#FF5733AA"); // Returns "#FF5733"
 */
function fix6HexColor(color: string): string {
  if (color.length === 4) {
    // Expand 3-digit hex to 6-digit by doubling each character
    let expandedColor = "#";
    for (let i = 1; i < color.length; i++) {
      expandedColor += color[i] + color[i];
    }
    return expandedColor;
  } else if (color.length === 9) {
    // Remove alpha channel from 8-digit hex
    return color.slice(0, 7);
  }
  return color;
}
