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

export interface ShopBlog {
  /**
   * The unique identifier of the blog post.
   */
  id: number;

  /**
   * The unique identifier of the shop.
   */
  shop_id: number;

  /**
   * The unique identifier of the category.
   */
  category_id: number;

  /**
   * SEO fetched data, can be null.
   */
  audit: object | null;

  /**
   * The title of the blog post, can be null.
   */
  title: string | null;

  /**
   * The image URL of the blog post, can be null.
   */
  image: string | null;
}
