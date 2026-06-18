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

  /**
   * Source cross-community ID when the post is sent from another community.
   *
   * Backend column is nullable.
   */
  cross_id: number | null;

  /** The main content of the post. */
  body: string;

  /** List of mentioned users or entities. */
  mentions: string[] | null;

  /** List of tags associated with the post. */
  tags: string[] | null;

  /** Aspect ratio for the associated image or video. */
  aspect: number | null;

  /** URL or path to the associated image. */
  image: string | null;

  /** URL or path to the associated video. */
  video: string | null;

  /** URL or path to the associated voice recording. */
  voice: string | null;

  /** URL or path to an associated link. */
  link: string | null;

  /**
   * Preview details for the associated link.
   *
   * Backend stores this as nullable JSON.
   */
  link_preview: CommunityPost.LinkPreview | null;

  /**
   * Linked product ID, when this post embeds a product.
   *
   * Backend column is nullable.
   */
  product_id: number | null;

  /**
   * Linked shop ID, usually derived from the linked product.
   *
   * Backend column is nullable.
   */
  shop_id: number | null;

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
  created_at: CommunityPost.Timestamp;

  /** Timestamp indicating the last update to the post. */
  updated_at: CommunityPost.Timestamp;

  /**
   * Soft-delete timestamp.
   *
   * Present only when the backend query includes trashed posts.
   */
  deleted_at?: CommunityPost.Timestamp | null;

  /** Loaded parent community relation, when explicitly included by the API. */
  community?: Record<string, unknown>;

  /** Loaded topic relation, when explicitly included by the API. */
  topic?: Record<string, unknown>;

  /** Loaded category through topic, when explicitly included by the API. */
  category?: Record<string, unknown> | null;

  /** Loaded creator user relation, when explicitly included by the API. */
  user?: Record<string, unknown>;

  /** Loaded main profile relation, when explicitly included by the API. */
  profile?: Record<string, unknown> | null;

  /** Loaded cross community relation, when explicitly included by the API. */
  cross?: Record<string, unknown> | null;

  /** Loaded linked product relation, when explicitly included by the API. */
  product?: Record<string, unknown> | null;

  /** Loaded comments relation, when explicitly included by the API. */
  comments?: Record<string, unknown>[];

  /** Loaded latest comment relation, when explicitly included by the API. */
  latest_comment?: Record<string, unknown> | null;

  /** Loaded attachments relation, when explicitly included by the API. */
  attachments?: Record<string, unknown>[];

  /** Loaded current-user action relation, when explicitly included by the API. */
  action?: Record<string, unknown> | null;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace CommunityPost {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;

  /**
   * Link preview metadata stored in `community_posts.link_preview`.
   */
  export type LinkPreview =
    | Record<string, unknown>
    | Array<Record<string, unknown>>;

  /**
   * Type definition for an individual post action.
   */
  export type PostActionCode =
    | "comments"
    | "impressions"
    | "saves"
    | "shares"
    | "embeds"
    | "reports";

  export type IActionType = {
    code: PostActionCode;
    name: string;
    icon: string;
  };

  /**
   * Enumeration of various post actions.
   */
  export const PostActions: Record<PostActionCode, IActionType> = {
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
