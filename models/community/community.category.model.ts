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

export interface CommunityCategory {
  /**
   * Primary key of the community category.
   *
   * Backend: `community_categories.id`.
   */
  id: number;

  /**
   * Parent community ID.
   *
   * Backend: required foreign key to `community.id`.
   */
  community_id: number;

  /**
   * Creator user ID.
   *
   * Backend: required foreign key to `users.id`.
   */
  user_id: number;

  /**
   * Category title.
   *
   * Backend: required string, max length 128.
   */
  title: string;

  /**
   * Category description.
   *
   * Backend: required string, max length 256.
   */
  desc: string;

  /**
   * Category image path or URL.
   *
   * Backend column is nullable.
   */
  image: string | null;

  /**
   * Marks links in category content as nofollow.
   */
  nofollow: boolean;

  /**
   * Whether topics in this category can be crossed/forked.
   */
  cross: boolean;

  /**
   * Category sort order.
   */
  order: number;

  /**
   * Restricted mode.
   *
   * `true` means only admins and moderators can create topics in the category;
   * `false` follows the regular community stage rules.
   */
  restrict: boolean;

  /**
   * Cached total topics count.
   */
  total_topics: number;

  /**
   * Cached total posts count.
   */
  total_posts: number;

  /**
   * Cached total comments count.
   */
  total_comments: number;

  /**
   * Soft-delete timestamp.
   *
   * Present only when the backend query includes trashed categories.
   */
  deleted_at?: CommunityCategory.Timestamp | null;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at: CommunityCategory.Timestamp;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at: CommunityCategory.Timestamp;

  /**
   * Loaded parent community relation, when explicitly included by the API.
   */
  community?: Record<string, unknown>;

  /**
   * Loaded daily data relation, when explicitly included by the API.
   */
  data?: Record<string, unknown>[];

  /**
   * Loaded topics relation, when explicitly included by the API.
   */
  topics?: Record<string, unknown>[];
}

export namespace CommunityCategory {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;
}
