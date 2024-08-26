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

/**
 * A helper class for managing theme-related functionalities, such as setting the theme color in the meta tag.
 */
export class ThemeHelper {
  /**
   * Sets the meta theme color in the document's head. If the meta tag does not exist, it creates one.
   * This function can handle direct color values (e.g., hex, RGB, named colors) or CSS variables.
   * If a CSS variable is provided (e.g., 'var(--background)'), the method will resolve the actual color value
   * from the specified element in the DOM.
   *
   * @param color - The color to set for the theme, typically a string representing a hex code, RGB value, named color, or a CSS variable.
   *                If a CSS variable is used, it should be in the format 'var(--variable-name)'.
   * @param calculator_element - A CSS selector string that identifies the element from which the CSS variable's value should be computed.
   *                             This defaults to '#app .v-application'. If your CSS variable is defined in a different element,
   *                             provide the appropriate selector.
   */
  static SetMetaThemeColor(
    color: any,
    calculator_element: string = "#app .v-application",
  ) {
    if (!color) return;

    try {
      if (color.includes("var")) {
        // Extract the variable name from the 'var(--background)' syntax
        const variableName = color.match(/var\((--[^)]+)\)/)[1];

        // Get the nested element within #app where the CSS variable is defined
        const element = document.querySelector(calculator_element); // Replace '.nested-element' with your actual selector

        // Get the computed styles for the element
        const computedStyle = getComputedStyle(element);

        // Retrieve the value of the CSS variable
        color = computedStyle.getPropertyValue(variableName).trim();
      }
    } catch (e) {
      console.error("SetMetaThemeColor error:", e);
    }

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", color);
    } else {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = color;
      document.getElementsByTagName("head")[0].appendChild(meta);
    }
  }
}
