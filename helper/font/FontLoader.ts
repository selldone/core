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
 * FontLoader provides utilities for dynamically loading fonts from external sources.
 *
 * Primarily used for loading Google Fonts at runtime with swap display strategy
 * for optimal performance.
 */
export class FontLoader {
  /**
   * Adds a stylesheet link to the document head dynamically.
   *
   * Creates a <link> element with rel="stylesheet", sets the href, and appends it to
   * the document head. This is a low-level utility for loading stylesheets.
   *
   * @param {string} url - The URL of the stylesheet to load (e.g., CSS from CDN or Google Fonts).
   *
   * @example
   * FontLoader.AddStylesheetURL("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
   */
  static AddStylesheetURL(url) {
    // Create a new link element
    const link = document.createElement("link");
    // Set it as a stylesheet
    link.rel = "stylesheet";
    // Set the URL to the font stylesheet
    link.href = url;
    // Append the link to the document head
    document.getElementsByTagName("head")[0].appendChild(link);

    // console.log("Load: ", link);
  }

  /**
   * Dynamically loads fonts from Google Fonts API.
   *
   * Takes an array of font family names and constructs a Google Fonts API URL with all
   * fonts combined. Loads them with display=swap for optimal text rendering performance.
   *
   * Fonts are loaded from: https://fonts.googleapis.com/css2?family=...&display=swap
   *
   * @param {string[]} fonts - Array of font family names to load.
   *                           Font names with spaces get converted (e.g., "Open Sans" -> "Open+Sans").
   *
   * @example
   * FontLoader.LoadFonts(["Roboto", "Open Sans", "Playfair Display"]);
   * // Loads: https://fonts.googleapis.com/css2?family=Roboto&family=Open+Sans&family=Playfair+Display&display=swap
   */
  static LoadFonts(fonts:string[]) {
    if (!fonts || !fonts.length) return;

    // console.log("Load fonts: ", fonts);

    let missed = "";
    // Build query string with all fonts
    fonts.forEach((font) => {
      // const check= document.fonts.check(`12px ${font}`);
      // Replace spaces with + for Google Fonts API format
      missed += `&family=${font.trim().replace(" ", "+")}`;
    });
    // Construct full Google Fonts URL with swap display
    const url = `https://fonts.googleapis.com/css2?display=swap${missed}`;

    // Load the stylesheet
    this.AddStylesheetURL(url);
  }
}

/**
 * List of available Google Fonts that can be dynamically loaded from Google Fonts API.
 *
 * This list includes popular display, sans-serif, serif, and monospace fonts
 * suitable for various design needs in storefronts and applications.
 *
 * @type {string[]}
 */
export const FONTS = [
  "Roboto",
  "Neonderthaw",
  "Dongle",
  "Open Sans",
  "Rubik Beastly",
  "Mochiy Pop P One",
  "Montserrat",
  "Roboto Condensed",
  "Outfit",
  "Source Sans Pro",
  "Poppins",
  "Oswald",
  "Luxurious Roman",
  "Roboto Mono",
  "Noto Sans",
  "Raleway",
  "Ubuntu",
  "Nunito",
  "PT Sans",
  "Playfair Display",
  "Open Sans Condensed",
  "Rubik",
  "Josefin Sans",
  "Bebas Neue",
  "Cabin",
  "Lobster",
  "Anton",
  "Dancing Script",
  "Cairo",
  "Fjalla One",
  "Kanit",
  "Sedgwick Ave",
  "Pacifico",
  "Architects Daughter",
  "Teko",
  "Abril Fatface",
  "Permanent Marker",
  "Satisfy",
  "Cookie",
  "Righteous",
  "Lobster Two",
  "Creepster",
  "Russo One",
  "Kaushan Script",
  "Press Start 2P",
  "News Cycle",
  "Titan One",
  "Ultra",
  "Handlee",
  "Moo Lah Lah",
  "Bangers",
  "Black Ops One",
];
