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

export interface CommunityComment {
  /** Unique identifier for the comment. */
  id: number;

  /** Identifier for the associated community. */
  community_id: number;

  /** Identifier for the associated post. */
  post_id: number;

  /** Identifier for the user who created the comment. */
  user_id: number;

  /** The main content of the comment. */
  body: string;

  /** URL or path to the associated image. */
  image: string;

  /** Identifier for the parent comment, if this is a reply. */
  parent_id: number;

  /** Count of replies to this comment. */
  replies: number;

  /** Count of agrees on the comment. */
  agrees: number;

  /** Count of disagreements on the comment. */
  disagrees: number;

  /** Count of reports on the comment. */
  reports: number;

  /** Flag indicating if the comment is marked as offensive. */
  offensive: boolean;

  /** Timestamp indicating when the post was created. */
  created_at: string; // Assuming Carbon translates to a JavaScript Date object.

  /** Timestamp indicating the last update to the post. */
  updated_at: string; // Same assumption as above.
}
