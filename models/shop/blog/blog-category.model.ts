// @ts-nocheck
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

export class BlogCategory implements BlogCategory.IBlogCategory {
  id: number;
  shopId: number;
  category: number;
  description: string;
  star: number;
  visits: number;
  articles: number;
  icon: string;

  constructor(
    data: {
      id: number;
      name: string;
    } & Partial<BlogCategory.IBlogCategory>,
  ) {
    Object.assign(this, data);
  }
}

export namespace BlogCategory {
  /**
   * Interface for BlogCategory model.
   *
   * @property {number} id - Unique identifier for the blog category.
   * @property {number} shopId - Identifier for the shop associated with this category.
   * @property {number} category - Numeric code or identifier for the category.
   * @property {string} description - Description of the blog category.
   * @property {number} star - Rating or star value for the category.
   * @property {number} visits - Number of visits or views for the category.
   * @property {number} articles - Number of articles in the category.
   * @property {string} icon - Icon associated with the category.
   */
  export interface IBlogCategory {
    id: number;
    shopId: number;
    category: number;
    description: string;
    star: number;
    visits: number;
    articles: number;
    icon: string;
  }
}
