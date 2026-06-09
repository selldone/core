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

// 🌸 Add extra pricing 🌸
import {Product} from "../../models/shop/product/product.model";
import {ProductVariant} from "../../models/shop/product/product_variant.model";
import {Vendor} from "../../models/shop/vendor/vendor.model";
import {ExtraPricing} from "../../models/shop/extra-pricing/extra-pricing.model";
import {VendorProduct} from "../../models";

/**
 * Helper for resolving quantity-based extra pricing rows.
 */
export class ExtraPricingHelper {
  /**
   * Returns the applicable list of extra-pricing rules for the current product context.
   *
   * Rules can depend on selected variant and/or selected vendor product.
   * Sorting relies on project-wide array prototype helpers.
   *
   * @param {Product & { product_variants?: ProductVariant[]; vendors: Vendor[]; extra_pricings?: ExtraPricing[] }} product - Product with related pricing metadata.
   * @param {ProductVariant | null} currentVariant - Currently selected variant.
   * @param {VendorProduct | null} selectedVendorProduct - Currently selected marketplace vendor product.
   * @returns {ExtraPricing[] | undefined} Matching extra-pricing rules ordered by minimum quantity.
   */
  static GetListOfExtraPricings(
    product: Product & {
      product_variants?: ProductVariant[];
      vendors: Vendor[];
      extra_pricings?: ExtraPricing[];
    },
    currentVariant: ProductVariant | null,
    selectedVendorProduct: VendorProduct | null,
  ) {
    if (product.product_variants?.length && !currentVariant) return [];

    if (product.vendors?.length) {
      if (!selectedVendorProduct) {
        return [];
      }
      return product.extra_pricings
        ?.filter((x) => x.vendor_product_id === selectedVendorProduct.id)
        .sortByKey("min", true);
    }

    return product.extra_pricings
      ?.filter((x) =>
        currentVariant && currentVariant.pricing
          ? x.variant_id === currentVariant.id
          : !x.variant_id,
      )
      .filter((x) =>
        selectedVendorProduct
          ? x.vendor_product_id === selectedVendorProduct.id
          : !x.vendor_product_id,
      )
      .sortByKey("min", true);
  }

  /**
   * Finds the last pricing tier whose minimum quantity is satisfied.
   *
   * @param {ExtraPricing[] | null} extra_pricings - Ordered extra-pricing rules.
   * @param {number} quantity - Requested quantity.
   * @returns {ExtraPricing | null} Best matching pricing tier or `null` when nothing matches.
   */
  static FindMatchInList(
    extra_pricings: ExtraPricing[] | null,
    quantity: number,
  ) {
    if (!extra_pricings) return null;
    let out = null;
    for (let i = 0; i < extra_pricings.length; i++) {
      const extra_pricing = extra_pricings[i];
      if (quantity >= extra_pricing.min) {
        out = extra_pricing;
      }
    }

    return out;
  }
}
