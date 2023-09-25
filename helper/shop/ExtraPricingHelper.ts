// 🌸 Add extra pricing 🌸
import { BasketHelper } from "./BasketHelper";
import { Product } from "../../models/shop/product/product.model";
import { ProductVariant } from "../../models/shop/product/product_variant.model";
import { Vendor } from "../../models/shop/vendor/vendor.model";
import { ExtraPricing } from "../../models/shop/extra-pricing/extra-pricing.model";

export class ExtraPricingHelper {
  // ――――――――――――――― Weight ―――――――――――――――

  static GetListOfExtraPricings(
    product: Product & {
      product_variants?: ProductVariant[];
      vendors: Vendor[];
      extra_pricings?: ExtraPricing[];
    },
    currentVariant: ProductVariant | null,
    selectedVendorProduct: VendorProduct | null
  ) {
    // Force to select a variant:
    if (product.product_variants?.length && !currentVariant) return [];
    // Force to select a vendor:
    if (product.vendors?.length) {
      if (!selectedVendorProduct) {
        return [];
      }
      // No need to check variant!
      return product.extra_pricings
        ?.filter((x) => x.vendor_product_id === selectedVendorProduct.id)
        .sortByKey("min", true);
    }

    return product.extra_pricings
      ?.filter((x) =>
        currentVariant ? x.variant_id === currentVariant.id : !x.variant_id
      )
      .filter((x) =>
        selectedVendorProduct
          ? x.vendor_product_id === selectedVendorProduct.id
          : !x.vendor_product_id
      )
      .sortByKey("min", true);
  }

  static FindMatchInList(
    extra_pricings: ExtraPricing[] | null,
    quantity: number
  ) {
    if(!extra_pricings)return null;
    let out = null;
    // Find last satisfied pricing (lower price):
    for (let i = 0; i < extra_pricings.length; i++) {
      const extra_pricing = extra_pricings[i];
      if (quantity >= extra_pricing.min) {
        out = extra_pricing;
      }
    }

    return out;
  }
}
