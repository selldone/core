export class BasketHelper {
  // ――――――――――――――― Weight ―――――――――――――――

  static GetBasketItemWeight(item, total = true) {
    return total
      ? item.count
      : 1 *
          (item.variant
            ? item.variant.extra && item.variant.extra.weight
              ? item.variant.extra.weight
              : 0
            : item.product.extra && item.product.extra.weight
            ? item.product.extra.weight
            : 0);
  }

  static GetTotalBasketItemsWeight(basket) {
    let sum = 0;
    basket.items.forEach((item) => {
      sum += this.GetBasketItemWeight(item);
    });
    return sum;
  }

  // ――――――――――――――― Size ―――――――――――――――
  static GetBasketItemSize(item, total = true) {
    let width = 0;
    let length = 0;
    let height = 0;
    if (item.variant && item.variant.extra && item.variant.extra.width) {
      width = item.variant.extra.width;
    } else if (item.product && item.product.extra && item.product.extra.width) {
      width = item.product.extra.width;
    }

    if (item.variant && item.variant.extra && item.variant.extra.length) {
      length = item.variant.extra.length;
    } else if (
      item.product &&
      item.product.extra &&
      item.product.extra.length
    ) {
      length = item.product.extra.length;
    }

    if (item.variant && item.variant.extra && item.variant.extra.height) {
      height = item.variant.extra.height;
    } else if (
      item.product &&
      item.product.extra &&
      item.product.extra.height
    ) {
      height = item.product.extra.height;
    }

    return [width, length, height * (total ? item.count : 1)];
  }

  // ――――――――――――――― Find Item ―――――――――――――――

  static FindItem(basket, product, currentVariant) {
    let found = basket?.items?.find((item) => {
      return (
        item.product_id === product.id &&
        (currentVariant ? item.variant_id === currentVariant.id : true)
      );
    });
    return found;
  }
}
