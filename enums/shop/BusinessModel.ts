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

/**
 * Enum for different types of business models for a shop.
 *
 * This enum provides a standardized way to represent the various business
 * models a shop might follow. Each model is represented as an object
 * containing a unique code, a name, and a description. The name and description
 * are keys for translation purposes.
 */
export const BusinessModel = {
  /**
   * Represents the normal business model.
   *
   * - `code`: A unique string identifier for this business model.
   * - `name`: The i18n key for the title of the normal business model.
   * - `desc`: The i18n key for the description of the normal business model.
   */
  NORMAL: {
    code: "normal",
    name: "business_model_view.normal.title",
    desc: "business_model_view.normal.desc",
  },

  /**
   * Represents the wholesaler business model.
   *
   * - `code`: A unique string identifier for this business model.
   * - `name`: The i18n key for the title of the wholesaler business model.
   * - `desc`: The i18n key for the description of the wholesaler business model.
   */
  WHOLESALER: {
    code: "wholesaler",
    name: "business_model_view.wholesaler.title",
    desc: "business_model_view.wholesaler.desc",
  },

  /**
   * Represents the marketplace business model.
   *
   * - `code`: A unique string identifier for this business model.
   * - `name`: The i18n key for the title of the marketplace business model.
   * - `desc`: The i18n key for the description of the marketplace business model.
   */
  MARKETPLACE: {
    code: "marketplace",
    name: "business_model_view.marketplace.title",
    desc: "business_model_view.marketplace.desc",
  },

  /**
   * Represents the franchise business model.
   *
   * - `code`: A unique string identifier for this business model.
   * - `name`: The i18n key for the title of the franchise business model.
   * - `desc`: The i18n key for the description of the franchise business model.
   */
  FRANCHISE: {
    code: "franchise",
    name: "business_model_view.franchise.title",
    desc: "business_model_view.franchise.desc",
  },
};
