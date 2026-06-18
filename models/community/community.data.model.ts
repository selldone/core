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

export interface CommunityData {
  /**
   * Primary key of the daily community statistics row.
   *
   * Backend: `community_data.id`.
   */
  id: number;

  /**
   * Parent community ID.
   *
   * Backend: required foreign key to `community.id`.
   */
  community_id: number;

  /**
   * New categories count for this daily statistics row.
   */
  categories: number;

  /**
   * New topics count for this daily statistics row.
   */
  topics: number;

  /**
   * New posts count for this daily statistics row.
   */
  posts: number;

  /**
   * New comments count for this daily statistics row.
   */
  comments: number;

  /**
   * Total impressions recorded for this daily row.
   */
  impressions: number;

  /**
   * Text posts count for this daily row.
   */
  texts: number;

  /**
   * Video posts count for this daily row.
   */
  videos: number;

  /**
   * Link posts count for this daily row.
   */
  links: number;

  /**
   * Image posts count for this daily row.
   */
  images: number;

  /**
   * Voice posts count for this daily row.
   */
  voices: number;

  /**
   * Product posts count for this daily row.
   */
  products: number;

  /**
   * Sum of all post reaction counters for this daily row.
   */
  reactions: number;

  /**
   * Like reactions count for this daily row.
   */
  likes: number;

  /**
   * Smile reactions count for this daily row.
   */
  smiles: number;

  /**
   * Clap reactions count for this daily row.
   */
  claps: number;

  /**
   * Idea reactions count for this daily row.
   */
  ideas: number;

  /**
   * Disagree reactions count for this daily row.
   */
  disagrees: number;

  /**
   * Deleted posts count for this daily row.
   */
  deletes: number;

  /**
   * Saved posts count for this daily row.
   */
  saves: number;

  /**
   * Shared posts count for this daily row.
   */
  shares: number;

  /**
   * Embedded posts count for this daily row.
   */
  embeds: number;

  /**
   * Reported posts count for this daily row.
   */
  reports: number;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at?: CommunityData.Timestamp;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at?: CommunityData.Timestamp;

  /**
   * Loaded parent community relation, when explicitly included by the API.
   */
  community?: Record<string, unknown>;
}

export namespace CommunityData {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;
}
