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
 * Interface representing the structure of each article type.
 */
interface ArticleType {
  code: string;
  name: string;
  color: string;
}

/**
 * Object containing different types of articles.
 * Each property of the object represents a specific type of article
 * with its unique code, name, and color.
 */
export const ArticleTypes: Record<string, ArticleType> = {
  /**
   * Official blog articles for Selldone.
   * These articles are generally focused on updates, news, and insights about Selldone.
   */
  SelldoneBlog: { code: "blog", name: "", color: "#C2185B" },

  /**
   * Official help articles for Selldone.
   * These articles provide guidance, FAQs, and support information for Selldone users.
   */
  SelldoneHelp: { code: "help", name: "", color: "#FFA000" },

  /**
   * Articles related to shop products.
   * These are typically product descriptions, reviews, or any content related to specific products.
   */
  Product: { code: "product", name: "", color: "#1976D2" },

  /**
   * Blog articles for a shop.
   * This can include a variety of topics relevant to the shop's focus, such as lifestyle, tips, and news.
   */
  Blog: { code: "shop-blog", name: "", color: "#689F38" },

  /**
   * Company profile for a shop.
   * This includes information about the company, its values, history, and other corporate information.
   */
  Company: { code: "company", name: "", color: "#456" },

  // Uncomment the following line to add BusinessProfile
  // BusinessProfile: { code: "BusinessProfile", name: "", color: "#456" }
};

/**
 * Type representing the possible 'code' values from the ArticleTypes.
 */
export type IArticleTypeCode = typeof ArticleTypes[keyof typeof ArticleTypes]['code'];
