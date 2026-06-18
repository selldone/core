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
  /**
   * Primary key of the community record.
   *
   * Backend: `community.id`.
   */
  id: number;

  /**
   * Owning shop ID.
   *
   * Backend column is nullable and unique. `null` is used for the official
   * Selldone/global community.
   */
  shop_id: number | null;

  /**
   * Creator/owner user ID.
   *
   * Backend: required foreign key to `users.id`.
   */
  user_id: number;

  /**
   * Unique community username/subdomain-friendly name.
   *
   * Backend: required unique string, max length 64.
   */
  name: string;

  /**
   * Public community title.
   *
   * Backend: required string, max length 128.
   */
  title: string;

  /**
   * Public community description.
   *
   * Backend column is nullable, max length 256.
   */
  desc: string | null;

  /**
   * Community rules shown to members.
   *
   * Backend column is nullable text.
   */
  rule: string | null;

  /**
   * Community image path or URL.
   *
   * Backend column is nullable.
   */
  image: string | null;

  /**
   * Stage access level determining who can create new topics.
   *
   * Backend enum source: `CommunityStageLevel::All`.
   */
  stage: Community.StageLevelCode;

  /**
   * Attachment access level determining who can attach files.
   *
   * Backend enum source: `CommunityAttachmentAccess::All`.
   */
  attachment: Community.AttachmentAccessValues;

  /**
   * Allowed MIME types/extensions for attachments.
   *
   * Backend stores this as nullable JSON.
   */
  mims: string[] | null;

  // ⛔ Admin configuration:

  /** Whether links should be marked as `nofollow`. */
  nofollow: boolean;

  /** Whether topics can be forked/cross-posted. */
  cross: boolean;

  /** Whether the community is enabled. */
  enable: boolean;

  // Total values:

  /** Cached total number of categories in the community. */
  total_categories: number;

  /** Cached total number of topics in the community. */
  total_topics: number;

  /** Cached total number of posts in the community. */
  total_posts: number;

  /** Cached total number of comments in the community. */
  total_comments: number;

  // Selldone administrator actions:

  /** Whether Selldone administrator penalties are applied. */
  penalty: boolean;

  // Access list: (Use to check fast access)

  /**
   * Cached admin user IDs for fast access checks.
   *
   * Backend stores this as nullable JSON.
   */
  admins_list: number[] | null;

  /**
   * Cached moderator user IDs for fast access checks.
   *
   * Backend stores this as nullable JSON.
   */
  moderators_list: number[] | null;

  // Bot:

  /**
   * Community bot configuration.
   *
   * Backend stores this as nullable JSON. Telegram channel names are stored
   * without the leading `@`.
   */
  bots: Community.Bots | null;

  /**
   * Soft-delete timestamp.
   *
   * Present only when the backend query includes trashed communities.
   */
  deleted_at?: Community.Timestamp | null;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at?: Community.Timestamp;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at?: Community.Timestamp;

  /** Loaded owner user relation, when explicitly included by the API. */
  user?: Record<string, unknown>;

  /** Loaded shop relation, when explicitly included by the API. */
  shop?: Record<string, unknown> | null;

  /** Loaded daily data relation, when explicitly included by the API. */
  data?: Record<string, unknown>[];

  /** Loaded categories relation, when explicitly included by the API. */
  categories?: Record<string, unknown>[];

  /** Loaded topics relation, when explicitly included by the API. */
  topics?: Record<string, unknown>[];

  /** Loaded posts relation, when explicitly included by the API. */
  posts?: Record<string, unknown>[];

  /** Loaded moderators relation, when explicitly included by the API. */
  moderators?: Record<string, unknown>[];

  /** Loaded bans relation, when explicitly included by the API. */
  bans?: Record<string, unknown>[];

  /** Loaded comments relation, when explicitly included by the API. */
  comments?: Record<string, unknown>[];
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace Community {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;

  /**
   * Persisted community stage values.
   */
  export type StageLevelCode = "PUBLIC" | "PRIVATE" | "VERIFIED";

  /**
   * Community bot configuration stored in `community.bots`.
   */
  export interface Bots {
    Telegram?: {
      enable: boolean;
      channel: string;
      errors?: Array<string | Record<string, unknown>>;
    };

    [bot: string]: unknown;
  }

  /**
   * CommunityAttachmentAccess Enum
   *
   * Represents the different access levels for attaching files within a community.
   */
  export enum AttachmentAccessValues {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",
    VERIFIED = "VERIFIED",
  }

  export interface IAttachmentAccess {
    code: AttachmentAccessValues;
    name: string;
    icon: string;
    description: string;
  }

  /**
   * community.stage_level.PUBLIC: All registered users, irrespective of their roles or verification status, have the ability to attach files.
   * community.stage_level.PRIVATE: Only those users with administrative or moderating roles can attach files. Regular users or members without any elevated permissions cannot.
   * community.stage_level.VERIFIED: In addition to admins and moderators, users who have undergone a verification process or have been nominated for the same can attach files. This can be useful in communities where certain privileges are reserved for trusted or recognized members.
   */
  export const AttachmentAccesses: Record<
    AttachmentAccessValues,
    IAttachmentAccess
  > = {
    [AttachmentAccessValues.PUBLIC]: {
      code: AttachmentAccessValues.PUBLIC,
      name: "community.stage_level.PUBLIC",
      icon: "public",
      description: "All registered users can attach files.",
    },
    [AttachmentAccessValues.PRIVATE]: {
      code: AttachmentAccessValues.PRIVATE,
      name: "community.stage_level.PRIVATE",
      icon: "admin_panel_settings",
      description: "Only admins and moderators can attach files.",
    },
    [AttachmentAccessValues.VERIFIED]: {
      code: AttachmentAccessValues.VERIFIED,
      name: "community.stage_level.VERIFIED",
      icon: "verified",
      description:
        "Admins, moderators, and all verified or nominated users can attach files.",
    },
  };

  /**
   * Represents the various stage levels of a community.
   *
   * - **PUBLIC**: All logged-in users have the ability to create topics and send posts to the community.
   * - **PRIVATE**: Only administrators and moderators are granted the privilege to create topics, while other users can only send posts within these created topics.
   * - **VERIFIED**: Administrators, moderators, and users who have been verified or nominated possess the right to create topics. All other members are limited to sending posts within these established topics.
   */
  export interface IStageLevel {
    code: StageLevelCode;
    name: string;
    icon: string;
    description: string;
  }

  export const StageLevels: Record<StageLevelCode, IStageLevel> = {
    PUBLIC: {
      code: "PUBLIC",
      name: "community.stage_level.PUBLIC",
      icon: "public",
      description:
        "This level provides an open platform where every logged-in user can freely create topics and send posts. Ideal for promoting extensive community interaction and engagement.",
    },
    PRIVATE: {
      code: "PRIVATE",
      name: "community.stage_level.PRIVATE",
      icon: "admin_panel_settings",
      description:
        "This level restricts topic creation to only administrators and moderators. However, all other members can contribute by sending posts in the topics created by these privileged users. Suited for controlled and moderated community environments.",
    },
    VERIFIED: {
      code: "VERIFIED",
      name: "community.stage_level.VERIFIED",
      icon: "verified",
      description:
        "Topic creation at this level is reserved for administrators, moderators, and users who've been either verified or nominated. However, every other user retains the right to send posts within these topics. Best for communities that seek a balance between openness and controlled topic generation.",
    },
  };
}
