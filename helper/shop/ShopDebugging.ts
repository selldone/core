/**
 * ████████████████ 🩺 Shop Debugging ████████████████
 *
 */
import type { Shop } from "../../models/shop/shop.model";

export class ShopDebugging {
  static CheckAll(shop: Shop) {
    return [...ShopDebuggingTheme.CheckAll(shop)].filter((i) => !!i);
  }
}

/**
 * ████████████████ 🩺 Debug Theme ████████████████
 *
 */
export class ShopDebuggingTheme {
  static CheckAll(shop: Shop) {
    return [
      this.MissedThemeColors(shop),
      this.MissedThemeListView(shop),
    ].filter((i) => !!i);
  }

  static MissedThemeColors(shop: Shop) {
    return isUnset(shop.theme?.light_header) ||
      isUnset(shop.theme?.light_footer) ||
      isUnset(shop.theme?.light_checkout)
      ? "Set theme colors."
      : null;
  }

  static MissedThemeListView(shop: Shop) {
    return isUnset(shop.theme?.mobile) ||
      isUnset(shop.theme?.tablet) ||
      isUnset(shop.theme?.pc)
      ? "Set shopping list view."
      : null;
  }
  static MissedThemeAnimation(shop: Shop) {
    return isUnset(shop.theme?.static)
      ? "Set products listing animation mode."
      : null;
  }
  static MissedThemeHoverActions(shop: Shop) {
    return isUnset(shop.theme?.hover_actions)
      ? "Set quick buy action on/off mode."
      : null;
  }
}

function isUnset(obj: any) {
  return obj === null || obj === undefined;
}
