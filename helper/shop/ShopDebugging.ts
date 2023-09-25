/**
 * ████████████████ 🩺 Shop Debugging ████████████████
 *
 */

export class ShopDebugging {
  static CheckAll(shop) {
    return [...ShopDebuggingTheme.CheckAll(shop)].filter((i) => !!i);
  }



}

/**
 * ████████████████ 🩺 Debug Theme ████████████████
 *
 */
export class ShopDebuggingTheme {

  static CheckAll(shop) {
    return [
      this.MissedThemeColors(shop),
      this.MissedThemeListView(shop),

    ].filter((i) => !!i);
  }



  static MissedThemeColors(shop) {
    return isUnset(shop.theme?.light_header) ||
    isUnset(shop.theme?.light_footer) ||
    isUnset(shop.theme?.light_checkout)
        ? "Set theme colors."
        : null;
  }

  static MissedThemeListView(shop) {
    return isUnset(shop.theme?.mobile) ||
    isUnset(shop.theme?.tablet) ||
    isUnset(shop.theme?.pc)
        ? "Set shopping list view."
        : null;
  }
  static MissedThemeAnimation(shop) {
    return isUnset(shop.theme?.static)
        ? "Set products listing animation mode."
        : null;
  }
  static MissedThemeHoverActions(shop) {
    return isUnset(shop.theme?.hover_actions)
        ? "Set quick buy action on/off mode."
        : null;
  }





}






function isUnset(obj) {
  return obj === null || obj === undefined;
}
