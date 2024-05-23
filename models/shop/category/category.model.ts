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

export class Category implements Category.ICategory {
  // Define class properties
  id: number | null = null;
  shop_id: number | null = null;
  vendor_id: number | null = null;
  connect_id: number | null = null;
  name: string | null = null;
  order: number | null = null;
  title: string | null = null;
  description: string | null = null;
  icon: string | null = null;
  star: boolean | null = null;
  parent_id: number | null = null;
  visits: number | null = null;
  products: number | null = null;
  categories: number | null = null;
  filters: any[] | null = null; // Adjust the type if possible.
  note:
    | {
        user_id: number;
        user_name: string;
        body: string;
        date: Date;
      }[]
    | null = null;

  constructor(
    data: {
      id: number;
      name: string;
    } & Partial<Category.ICategory>,
  ) {
    Object.assign(this, data);
  }
}

export namespace Category {
  export interface ICategory {
    /**
     * Unique identifier of the shop category.
     */
    id: number;

    /**
     * ID representing the associated shop.
     */
    shop_id: number;

    /**
     * ID of the vendor who owns the category.
     */
    vendor_id: number;

    /**
     * ID representing the connect service associated with the category.
     */
    connect_id: number;

    /**
     * Name of the category. Combined with `shop_id`, it must be unique (a constraint in the database).
     */
    name: string;

    /**
     * Order or sequence number of the category in listings.
     */
    order: number;

    /**
     * Title of the shop category.
     */
    title: string;

    /**
     * Description of the shop category.
     */
    description: string;

    /**
     * Icon or symbol representing the shop category.
     */
    icon: string;

    /**
     * Indicates if the category is marked as starred or featured.
     */
    star: boolean;

    /**
     * ID of the parent category, if it exists.
     */
    parent_id: number;

    /**
     * Number of visits or views the category has received.
     */
    visits: number;

    /**
     * Count of products under this category.
     * Note: This shouldn't be used to fetch a subset collection of products.
     */
    products: number;

    /**
     * Count of subcategories under this category.
     */
    categories: number;

    /**
     * Filters or criteria associated with the category.
     */
    filters: any[]; // Adjust the type based on the specific structure of filters if possible.

    /**
     * Notes from the team regarding the category.
     */
    note: {
      user_id: number;
      user_name: string;
      body: string;
      date: Date;
    }[];
  }
}
