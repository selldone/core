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
