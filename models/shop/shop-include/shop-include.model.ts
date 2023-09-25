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

export interface ShopInclude {
  /**
   * Unique identifier of the content item.
   */
  id: number;

  /**
   * ID representing the associated shop.
   */
  shop_id: number;

  /**
   * ID of the user who last edited this content item, if applicable.
   */
  user_id?: number | null;

  /**
   * Unique code associated with the content item.
   */
  code: string;

  /**
   * Image URL or path associated with the content item, if applicable.
   */
  image?: string | null;

  /**
   * Title of the content item.
   */
  title: string;

  /**
   * Description associated with the content item, if available.
   */
  description?: string | null;

  /**
   * External link associated with the content item, if available.
   */
  url?: string | null;

  /**
   * Custom URL path. For example: shop-sample.com/in/{path}-{id}
   */
  path?: string | null;

  /**
   * ID of the page to load dynamically, if applicable.
   */
  page_id?: number | null;

  /**
   * Name or identifier of the custom layout theme. This allows having multiple themes within a single web application.
   */
  theme?: string | null;

  /**
   * Extra information to help render or populate the dynamic page.
   */
  augment?: any[] | null; // You might want to use a more specific type if possible.

  /**
   * Creation date of the content item.
   */
  created_at: Date;

  /**
   * Last updated date of the content item.
   */
  updated_at: Date;
}
export namespace ShopInclude {}
