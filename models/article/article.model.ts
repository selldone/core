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

export interface Article {
  /**
   * Unique identifier of the article.
   */
  id: number;

  /**
   * ID representing the associated shop.
   */
  shop_id: number;

  /**
   * ID of the parent entity.
   */
  parent_id: number;

  /**
   * Type of the parent entity.
   */
  parent_type: Article.TypeValue;

  /**
   * ID of the user associated with the article.
   */
  user_id: number;

  /**
   * Community name or identifier associated with the article.
   */
  community: string;

  /**
   * Title of the article.
   */
  title: string;

  /**
   * Body or main content of the article.
   */
  body: string;

  /**
   * Title to be used for the article's webpage.
   */
  page_title: string;

  /**
   * Description of the article.
   */
  description: string;

  /**
   * Image URL or path associated with the article.
   */
  image: string;

  /**
   * Power rating or score of the article.
   */
  power: number;

  /**
   * Count of likes the article has received.
   */
  like: number;

  /**
   * Indicates if the article is published.
   */
  published: boolean;

  /**
   * Indicates if the article is private.
   */
  private: boolean;

  /**
   * Language of the article.
   */
  lang: string;

  /**
   * Total count of comments on the article.
   */
  comments_count: number;

  /**
   * Count of new comments since the last check.
   */
  new_comments_count: number;

  /**
   * Number of views the article has received.
   */
  views: number;

  /**
   * Date and time when the article is scheduled to be published.
   */
  schedule_at: Date;

  /**
   * URL-friendly version of the article's title.
   */
  slug: string;

  /**
   * FAQs associated with the article.
   */
  faqs: any[]; // You might want to use a more specific type if possible.

  /**
   * Structures or sections of the article.
   */
  structures: any[]; // You might want to use a more specific type if possible.

  /**
   * Last updated date of the article.
   */
  updated_at: Date;

  /**
   * Creation date of the article.
   */
  created_at: Date;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace Article {
  /**
   * Interface representing the structure of each article type.
   */
  interface IType {
    code: string;
    name: string;
    color: string;
  }

  /**
   * Enumerates the keys for different types of articles.
   */
  export type TypeKey =
    | "SelldoneBlog"
    | "SelldoneHelp"
    | "Product"
    | "Blog"
    | "Company";

  /**
   * Object containing different types of articles.
   * Each property of the object represents a specific type of article
   * with its unique code, name, and color.
   */
  export const Type: Record<TypeKey, IType> = {
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
   * Type representing the union of all possible `code` values in `Type`.
   */
  export type TypeValue = typeof Type[TypeKey]['code'];


}
