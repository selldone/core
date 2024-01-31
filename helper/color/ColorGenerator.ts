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
 * Calculate a color point based on the provided parameters.
 * @param i The index of the color in the range.
 * @param intervalSize The size of the interval between color points.
 * @param colorRangeInfo The information about the color range.
 * @returns The calculated color point.
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
 * Interpolate colors based on the data length, color scale, and color range info.
 * @param dataLength The length of the data.
 * @param colorScale The scale of the color.
 * @param colorRangeInfo The information about the color range.
 * @returns An array of interpolated colors.
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
 * Convert a string to a color.
 * @param str The input string.
 * @param shade The shade of the color.
 * @returns The generated color.
 */
export function StringToColour(str: string, shade: number = 0): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;

    colour += ("00" + value.toString(16)).slice(-2);
  }
  return shade ? ShadeColor(colour, shade) : colour;
}

/**
 * Apply a shade to a color.
 * @param color The original color.
 * @param percent The shading percentage.
 * @returns The shaded color.
 */

export function ShadeColor(color: string, percent: number): string {
  color = fix6HexColor(color);

  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = Math.min(255, Math.max(0, Math.round((R * (100 + percent)) / 100)));
  G = Math.min(255, Math.max(0, Math.round((G * (100 + percent)) / 100)));
  B = Math.min(255, Math.max(0, Math.round((B * (100 + percent)) / 100)));

  const RR = R.toString(16).padStart(2, "0");
  const GG = G.toString(16).padStart(2, "0");
  const BB = B.toString(16).padStart(2, "0");

  return `#${RR}${GG}${BB}`;
}

/**
 * Ensure a color is in 6 digit hexadecimal format.
 * @param color The color string.
 * @returns The 6 digit color string.
 */
function fix6HexColor(color: string): string {
  if (color.length === 4) {
    let expandedColor = "#";
    for (let i = 1; i < color.length; i++) {
      expandedColor += color[i] + color[i];
    }
    return expandedColor;
  } else if (color.length === 9) {
    return color.slice(0, 7);
  }
  return color;
}
