import chroma from "chroma-js";
import { ILanguage } from "../../enums/language/Language";

let COLORS_NAME_CACHE: { [key: string]: string } = {};
let LAST_LANGUAGE: ILanguage | null = null;
let COLORS_LANGUAGES_LIST: { name: string; hex: string; distance?: number }[];

const ColorNamer = function (color: string) {
  const cacheKey = color + window.$language;
  if (COLORS_NAME_CACHE[cacheKey]) {
    // console.log("getNameOfColor FIND IN CACHE", color);
    return COLORS_NAME_CACHE[cacheKey];
  }

  // Check color is valid:
  try {
    const color_obj = chroma(color);
  } catch (e) {
    console.error("❌ Color Name Generator ● Invalid color", color, e);
    return null;
  }

  const deltaE = true;

  const result = COLORS_LANGUAGES_LIST.map((item) => {
    try {
      const distanceValue = deltaE
        ? chroma.deltaE(color, item.hex)
        : chroma.distance(color, item.hex);

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

  static ExtractColors(colorString: string | null) {
    if (!colorString) return null;
    const regex = /#([A-Fa-f0-9]{3}){1,2}([A-Fa-f0-9]{2})?/g;
    return colorString.match(regex);
  }
}
