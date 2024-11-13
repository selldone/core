/*
 * Copyright (c) 2024. Selldone® Business OS™
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

type IBrowserData = {
  title: string;
  image: string;
  matches: string[];
};

const BrowserData: Record<string, IBrowserData> = {
  Firefox: {
    title: "Mozilla Firefox",
    image: require("@selldone/core-js/assets/trademark/firefox.svg"),
    matches: ["firefox"],
  },
  Chrome: {
    title: "Google Chrome",
    image: require("@selldone/core-js/assets/trademark/chrome.svg"),
    matches: ["chrome", "crios"], // "crios" for Chrome on iOS
  },
  Opera: {
    title: "Opera",
    image: require("@selldone/core-js/assets/trademark/opera.svg"),
    matches: ["opera", "opr"], // "opr" for Opera in some user agents
  },
  InternetExplorer: {
    title: "Internet Explorer",
    image: require("@selldone/core-js/assets/trademark/internet-explorer.svg"),
    matches: ["internet-explorer", "msie", "trident"], // "msie" or "trident" for IE
  },
  Safari: {
    title: "Apple Safari",
    image: require("@selldone/core-js/assets/trademark/safari.svg"),
    matches: ["safari", "applewebkit"], // "applewebkit" for Safari engines
  },

  Default: {
    title: "Unknown Device",
    image: require("@selldone/core-js/assets/trademark/information.svg"),
    matches: [],
  },
};

namespace Browser {
  /**
   * Gets the browser or device information based on a given code or user agent string.
   * @param code - The browser code or user agent string.
   * @returns The browser or device info including title, image, and match list.
   */
  export function getImageByCode(code: string): string | null {
    if (!code) return null;

    // Convert the code to lowercase for case-insensitive matching
    code = code.toLowerCase();

    // Search through each entry's `matches` array to find the best match
    for (const key in BrowserData) {
      const item = BrowserData[key];
      if (item.matches.some((match) => code.includes(match))) {
        return item.image;
      }
    }

    // Return the default image if no match is found
    return BrowserData.Default.image;
  }
}

export default Browser;
