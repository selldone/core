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
   * {@see Community.StageLevel}
   */
  stage: keyof typeof Community.StageLevels;

  /**
   * Determines who can attach files.
   * {@see Community.AttachmentAccess}
   */
  attachment: keyof typeof Community.AttachmentAccesses;

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

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace Community {
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

  interface IAttachmentAccess {
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
  export const StageLevels = {
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
