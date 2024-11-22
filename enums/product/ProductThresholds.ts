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
import {Product} from "../../models";

/**
 * Interface for individual threshold conditions
 */
interface IThresholdCondition {
  key: string; // The severity level (e.g., critical, high, moderate, low)
  minSells?: number; // Minimum number of sales required for the condition
  minQuantity?: number; // Minimum available quantity for the condition
  maxQuantity?: number; // Maximum available quantity for the condition
  message: string; // Message key for localization
}

interface IProductThresholdLevel {
  color: string; // Color for the condition [Use in editor]
  name: string; // Name for the condition [Use in editor]
}

export const ProductThresholdLevel: Record<
  "critical" | "high" | "moderate" | "low",
  IProductThresholdLevel
> = {
  critical: {
    color: "red",
    name: "Critical",
  },
  high: {
    color: "orange",
    name: "High",
  },
  moderate: {
    color: "blue",
    name: "Moderate",
  },
  low: {
    color: "green",
    name: "Low",
  },
};

/**
 * Interface for product threshold settings
 */
interface IProductThresholdSettings {
  progress?: number; // Proportion to show progress: this.sells / (this.quantity + this.sells) > progress
  carts?: number; // Proportion of stock in cart: this.in_carts >= this.quantity * carts
  conditions?: IThresholdCondition[]; // List of conditions for the product thresholds
}

/**
 * Configuration for thresholds by product type.
 * Variables will be saved in `product.threshold` with this format:
 * {
 *   variables: {
 *     critical: { minSells, minQuantity, maxQuantity },
 *     high: { minSells, minQuantity, maxQuantity },
 *     moderate: { minSells, minQuantity, maxQuantity },
 *     low: { minSells, minQuantity, maxQuantity }
 *   }
 * }
 */
const productThresholds: Record<string, IProductThresholdSettings> = {
  PHYSICAL: {
    progress: 0.1, // Progress threshold for showing progress bar
    carts: 0.1, // Threshold for items in cart compared to stock
    conditions: [
      {
        key: "critical",
        minSells: 50,
        maxQuantity: 100,
        message:
          "global.product_section_incentivise.physical.popular_selling_with_low_quantity",
      },
      {
        key: "high",
        minSells: 5,
        message:
          "global.product_section_incentivise.physical.has_sell_has_quantity",
      },
      {
        key: "moderate",
        minQuantity: 20,
        maxQuantity: 200,
        message:
          "global.product_section_incentivise.physical.just_has_low_quantity",
        color: "blue",
        name: "Moderate",
      },
      {
        key: "low",
        minQuantity: 1,
        maxQuantity: 20,
        message:
          "global.product_section_incentivise.physical.just_has_very_low_quantity",
      },
    ],
  },
  VIRTUAL: {
    progress: 0.1,
    carts: 0.1,
    conditions: [
      {
        key: "critical",
        minSells: 50,
        maxQuantity: 100,
        message:
          "global.product_section_incentivise.physical.popular_selling_with_low_quantity",
      },
      {
        key: "high",
        minSells: 5,
        message:
          "global.product_section_incentivise.physical.has_sell_has_quantity",
      },
      {
        key: "moderate",
        minQuantity: 20,
        maxQuantity: 200,
        message:
          "global.product_section_incentivise.physical.just_has_low_quantity",
      },
      {
        key: "low",
        minQuantity: 1,
        maxQuantity: 20,
        message:
          "global.product_section_incentivise.physical.just_has_very_low_quantity",
      },
    ],
  },
  FILE: {
    conditions: [
      {
        key: "critical",
        minSells: 100,
        message: "global.product_section_incentivise.file.very_popular_selling",
      },
      {
        key: "high",
        minSells: 50,
        message: "global.product_section_incentivise.file.popular_selling",
      },
      {
        key: "moderate",
        minSells: 10,
        message: "global.product_section_incentivise.file.has_normal_selling",
      },
      {
        key: "low",
        minSells: 1,
        message:
          "global.product_section_incentivise.file.just_release_has_some_sales",
      },
    ],
  },
  SERVICE: {}, // Service type configuration (currently empty)
  SUBSCRIPTION: {}, // Subscription type configuration (currently empty)
};

export default productThresholds;

/**
 * Generates threshold conditions for a product based on its type and thresholds.
 *
 * @param product - The product object containing the type and thresholds.
 * @returns An array of threshold conditions (`IThresholdCondition[]`) or `null` if no thresholds exist for the product type.
 */
export function GenerateProductThresholdsConditions(
  product: Product,
): IThresholdCondition[] | null {
  // Fetch predefined conditions for the product type
  const pt = productThresholds[product.type];
  if (!pt) return null;

  // Deep copy the conditions to avoid mutating the original structure
  const conditions = JSON.parse(JSON.stringify(pt.conditions));

  // Apply custom thresholds to the conditions if they exist
  const thresholds = product.thresholds;
  if (thresholds?.custom) {
    const variables = thresholds.variables;
    for (const condition of conditions) {
      const _variable = variables[condition.key];
      if (_variable) {
        // Override condition values with the corresponding variables
        condition.minSells = _variable.minSells;
        condition.minQuantity = _variable.minQuantity;
        condition.maxQuantity = _variable.maxQuantity;
      }
    }
  }

  return conditions;
}
