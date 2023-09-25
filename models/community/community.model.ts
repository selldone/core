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

export interface Community {
  /** Unique identifier for the community */
  id: number;

  /** Identifier for the associated shop */
  shop_id: number;

  /** Identifier for the associated user */
  user_id: number;

  /** Name of the community */
  name: string;

  /** Title of the community */
  title: string;

  /** Description of the community */
  desc: string;

  /** Rules of the community */
  rule: string;

  /** Image associated with the community */
  image: string;

  /**
   * Stage access level determining who can post a new topic.
   * {@see CommunityStageLevel}
   */
  stage: string;

  /**
   * Determines who can attach files.
   * {@see CommunityStageLevel}
   */
  attachment: string;

  /** Allowed file types for attachments */
  mims: string[];

  // ⛔ Admin configuration:

  /** Indicates if links should be marked as "nofollow" */
  nofollow: boolean;

  /** Indicates if topics can be forked */
  cross: boolean;

  /** Indicates if the community is enabled or not */
  enable: boolean;

  // Total values:

  /** Total number of categories in the community */
  total_categories: number;

  /** Total number of topics in the community */
  total_topics: number;

  /** Total number of posts in the community */
  total_posts: number;

  /** Total number of comments in the community */
  total_comments: number;

  // Selldone administrator actions:

  /** Indicates if penalties are applied */
  penalty: boolean;

  // Access list: (Use to check fast access)

  /** Indicates if the admins list is accessible */
  admins_list: boolean;

  /** Indicates if the moderators list is accessible */
  moderators_list: boolean;

  // Bot:

  /**
   * Configuration for bots in the community.
   * Example: Publishing on a Telegram channel.
   * Note: Telegram channel names are saved without the '@' prefix.
   */
  bots: {
    Telegram?: {
      enable: boolean;
      channel: string;
      errors: any[];
    };

  };
}

export namespace Community {}
