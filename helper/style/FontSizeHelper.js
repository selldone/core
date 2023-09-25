export class FontSizeHelper {
  /**
   * AutoSizeText automatically calculates the optimal font size for a given text
   * within a specified width and height constraint. The function takes into account
   * a correction factor to fix some edge cases, particularly for specific font families.
   *
   * @param {string} text - The text for which the font size should be calculated.
   * @param {number} width - The width constraint for the text.
   * @param {number} maxHeight - The maximum height constraint for the text.
   * @param {number} [correct_factor=0.7] - An optional correction factor to adjust the calculated font size.
   *                                      This helps to fix some edge cases, particularly for specific font families.
   * @returns {string} - The calculated optimal font size (in pixels) for the given text and constraints.
   *
   * @example
   * const optimalFontSize = AutoSizeText("Sample text", 300, 50);
   * console.log(optimalFontSize); // Output: "20px" (example value)
   */
  static AutoSizeText(text, width, maxHeight, correct_factor = 0.7) {
    const tempElement = document.createElement("div");
    tempElement.style.width = `${width}px`;
    tempElement.style.position = "absolute";
    tempElement.style.visibility = "hidden";
    tempElement.style.lineHeight = "1";
    document.body.appendChild(tempElement);

    let minFontSize = 1;
    let maxFontSize = 200;
    let fontSize;

    while (minFontSize <= maxFontSize) {
      fontSize = Math.floor((minFontSize + maxFontSize) / 2);
      tempElement.style.fontSize = `${fontSize}px`;
      tempElement.textContent = text;
      const textHeight = tempElement.clientHeight;

      if (textHeight <= maxHeight) {
        minFontSize = fontSize + 1;
      } else {
        maxFontSize = fontSize - 1;
      }
    }
    fontSize = Math.floor(fontSize * correct_factor); // Fix some outbound issues! (specially for font family!)
    document.body.removeChild(tempElement);
    return fontSize + "px";
  }
}
