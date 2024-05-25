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

export interface CommunityPost {
  /** Unique identifier for the post. */
  id: number;

  /** Identifier for the associated community. */
  community_id: number;

  /** Identifier for the associated topic. */
  topic_id: number;

  /** Identifier for the user who created the post. */
  user_id: number;

  /** Identifier for cross-referencing. */
  cross_id: number;

  /** The main content of the post. */
  body: string;

  /** List of mentioned users or entities. */
  mentions: string[];

  /** List of tags associated with the post. */
  tags: string[];

  /** Aspect ratio for the associated image or video. */
  aspect: string;

  /** URL or path to the associated image. */
  image: string;

  /** URL or path to the associated video. */
  video: string;

  /** URL or path to the associated voice recording. */
  voice: string;

  /** URL or path to an associated link. */
  link: string;

  /** Preview details for the associated link. */
  link_preview: any[]; // Consider defining a more specific type if possible.

  /** Identifier for the associated product. */
  product_id: number;

  /** Identifier for the associated shop. */
  shop_id: number;

  /** Flag indicating if the post is marked as offensive. */
  offensive: boolean;

  /** Total number of comments on the post. */
  total_comments: number;

  /** Count of impressions for the post. */
  impressions: number;

  /** Count of media views (e.g., video plays, voice plays). */
  views: number;

  /** Count of likes on the post. */
  likes: number;

  /** Count of smiles on the post. */
  smiles: number;

  /** Count of claps on the post. */
  claps: number;

  /** Count of ideas on the post. */
  ideas: number;

  /** Count of disagreements on the post. */
  disagrees: number;

  /** Count of saves of the post. */
  saves: number;

  /** Count of shares of the post. */
  shares: number;

  /** Count of embeds of the post. */
  embeds: number;

  /** Count of reports on the post. */
  reports: number;

  /** Flag indicating if the post is an approved answer. */
  approved: boolean;

  /** Timestamp indicating when the post was created. */
  created_at: string; // Assuming Carbon translates to a JavaScript Date object.

  /** Timestamp indicating the last update to the post. */
  updated_at: string; // Same assumption as above.
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace CommunityPost {
  /**
   * Type definition for an individual post action.
   */
  type IActionType = {
    code: string;
    name: string;
    icon: string;
  };

  /**
   * Enumeration of various post actions.
   */
  export const PostActions: Record<string, IActionType> = {
    /**
     * Represents the comments action on a post.
     */
    comments: {
      code: "comments",
      name: "community.post_action.comments",
      icon: "comment",
    },

    /**
     * Represents the impressions action on a post.
     */
    impressions: {
      code: "impressions",
      name: "community.post_action.impressions",
      icon: "visibility",
    },

    /**
     * Represents the save action on a post.
     */
    saves: {
      code: "saves",
      name: "community.post_action.saves",
      icon: "turned_in",
    },

    /**
     * Represents the share action on a post.
     */
    shares: {
      code: "shares",
      name: "community.post_action.shares",
      icon: "share",
    },

    /**
     * Represents the embed action on a post.
     */
    embeds: {
      code: "embeds",
      name: "community.post_action.embeds",
      icon: "code",
    },

    /**
     * Represents the report action on a post.
     */
    reports: {
      code: "reports",
      name: "community.post_action.reports",
      icon: "flag",
    },
  };
}
