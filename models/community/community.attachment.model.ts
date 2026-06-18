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

export interface CommunityAttachment {
  /**
   * Primary key of the community attachment.
   *
   * Backend: `community_attaches.id`.
   */
  id: number;

  /**
   * Parent community ID.
   *
   * Backend: required foreign key to `community.id`.
   */
  community_id: number;

  /**
   * Parent post ID.
   *
   * Backend: required foreign key to `community_posts.id`.
   */
  post_id: number;

  /**
   * Uploader user ID.
   *
   * Backend: required foreign key to `users.id`.
   */
  user_id: number;

  /**
   * File size in bytes.
   *
   * Backend: unsigned bigint.
   */
  size: number;

  /**
   * Original/display file name.
   */
  name: string;

  /**
   * File path on storage.
   *
   * Backend hides this field in serialized responses, so it is present only in
   * privileged/internal payloads.
   */
  path?: string;

  /**
   * Virus/malware flag set by moderation or scanning workflow.
   */
  virus: boolean;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at?: CommunityAttachment.Timestamp;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at?: CommunityAttachment.Timestamp;

  /**
   * Loaded parent community relation, when explicitly included by the API.
   */
  community?: Record<string, unknown>;

  /**
   * Loaded parent post relation, when explicitly included by the API.
   */
  post?: Record<string, unknown>;

  /**
   * Loaded uploader relation, when explicitly included by the API.
   */
  user?: Record<string, unknown>;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace CommunityAttachment {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;
}
