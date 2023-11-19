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

/**
 * Type definition for an individual post action.
 */
type PostActionType = {
  code: string;
  name: string;
  icon: string;
};

/**
 * Enumeration of various post actions.
 */
export const PostAction: Record<string, PostActionType> = {
  /**
   * Represents the comments action on a post.
   */
  comments: {
    code: "comments",
    name: "community.post_action.comments",
    icon: 'comment',
  },

  /**
   * Represents the impressions action on a post.
   */
  impressions: {
    code: "impressions",
    name: "community.post_action.impressions",
    icon: 'visibility',
  },

  /**
   * Represents the save action on a post.
   */
  saves: {
    code: "saves",
    name: "community.post_action.saves",
    icon: 'turned_in',
  },

  /**
   * Represents the share action on a post.
   */
  shares: {
    code: "shares",
    name: "community.post_action.shares",
    icon: 'share',
  },

  /**
   * Represents the embed action on a post.
   */
  embeds: {
    code: "embeds",
    name: "community.post_action.embeds",
    icon: 'code',
  },

  /**
   * Represents the report action on a post.
   */
  reports: {
    code: "reports",
    name: "community.post_action.reports",
    icon: 'flag',
  },
};
