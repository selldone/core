export class BuyButtonHelper {
  static ExtractIconCaption(inputString) {
    if (!inputString) return null;

    const iconRegex = /{(.*?)}/;
    const iconMatch = inputString.match(iconRegex);
    let icon, text;

    if (iconMatch) {
      icon = iconMatch[1];
      text = inputString.replace(iconRegex, "").trim();
    } else {
      icon = null;
      text = inputString;
    }

    return { icon, text };
  }
}
