/**
 * @fileoverview This module provides the definition of support categories.
 */

/**
 * ISupportCategoryItem represents an individual support category.
 * @interface
 *
 * @property {string} code - The unique code identifier for the support category.
 * @property {string} name - The localization key or name of the support category.
 * @property {string} color - A hex color code representing the color associated with this category.
 * @property {string} description - A detailed description about what this category entails.
 */
interface ISupportCategoryItem {
  code: string;
  name: string;
  color: string;
  description: string;
}

/**
 * SupportCategory provides a mapping of support category names to their associated data.
 *
 * @constant
 *
 * @property {ISupportCategoryItem} Advisor - Support category for general advice, suggestions, or questions about Selldone.
 * @property {ISupportCategoryItem} Financial - Support category for financial-related issues, especially concerning wallet charges.
 * @property {ISupportCategoryItem} Technical - Support category for technical issues or bugs.
 */
export const SupportCategory: { [key: string]: ISupportCategoryItem } = {
  Advisor: {
    code: "Advisor",
    name: "global.support.Advisor",
    color: "#9C27B0",
    description:
      "Do you have any ideas or suggestions about selldone, your store, or do you need to ask something or learn how to work with selldone?",
  },
  Financial: {
    code: "Financial",
    name: "global.support.Financial",
    color: "#009688",
    description:
      "A financial support ticket must be about issues with the charge of your wallet.",
  },
  Technical: {
    code: "Technical",
    name: "global.support.Technical",
    color: "#E64A19",
    description:
      "If you find bugs or any other technical issues, it's the right choice.",
  },
};
