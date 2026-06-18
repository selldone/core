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

import {Currency} from "../../enums/payment/Currency";

export interface CommunityTopic {
  /** Unique identifier for the community topic. */
  id: number;

  /** Identifier for the community this topic belongs to. */
  community_id: number;

  /** Identifier for the category this topic belongs to. */
  category_id: number;

  /** Identifier for the user who created the topic. */
  user_id: number;

  /** Title of the topic. */
  title: string;

  /** SEO title of the topic. */
  title_page: string;

  /** Description for SEO and short description to show. */
  desc: string;

  /**
   * Cover image for the topic.
   *
   * Backend column is nullable.
   */
  image: string | null;

  /**
   * First/main post ID for the topic.
   *
   * Backend column is nullable because the topic can be created before the
   * first post is attached or after that post is removed.
   */
  post_id: number | null;

  /** Admin configuration: No follow flag. */
  nofollow: boolean;

  /** Admin configuration: Can fork topic. */
  cross: boolean;

  /** Admin configuration: Private topic. */
  private: boolean;

  /** Admin configuration: Pinned topic. */
  pin: boolean;

  /** Admin configuration: Only admins can send posts. */
  lock_post: boolean;

  /** Admin configuration: No one can send comments. */
  lock_comment: boolean;

  /**
   * Payment subscription type for paid/private topics.
   *
   * Backend enum is nullable.
   */
  subscription: CommunityTopic.SubscriptionCode | null;

  /**
   * Trial period type for paid/private topics.
   *
   * Backend enum is nullable.
   */
  trial: CommunityTopic.TrialCode | null;

  /** Payment: Price for the topic. */
  price: number;

  /** Payment: Currency for the topic price. */
  currency: keyof typeof Currency;

  /** Total values: Number of posts in the topic. */
  total_posts: number;

  /** Total values: Number of comments in the topic. */
  total_comments: number;

  /** Total values: Number of notifications in the topic. */
  total_notifies: number;

  /** Total values: Number of poll answers in the topic. */
  total_polls: number;

  /**
   * Derived/legacy contributors summary, when an endpoint includes it.
   *
   * This is not a persisted column in `community_topics`; persisted recent
   * contributor IDs live in `contributors`.
   */
  total_contributors?: number[] | null;

  /** Total values: Total number of active subscribers. */
  total_subscribers: number;

  /** Total values: Total number of sales. */
  total_sells: number;

  /** Badges: Indicates if the topic is trending. */
  trend: boolean;

  /**
   * Poll answer definitions.
   *
   * Backend stores this as nullable JSON. Poll IDs start from `1`.
   */
  poll: CommunityTopic.Poll[] | null;

  /**
   * Recent contributor user IDs.
   *
   * Backend stores this as nullable JSON and caps assignment to a recent set.
   */
  contributors: number[] | null;

  /** Timestamp for when the topic was deleted, null if not deleted. */
  deleted_at?: CommunityTopic.Timestamp | null;

  /** Timestamp for when the topic was created. */
  created_at: CommunityTopic.Timestamp;

  /** Timestamp for when the topic was last updated. */
  updated_at: CommunityTopic.Timestamp;

  /** Loaded parent community relation, when explicitly included by the API. */
  community?: Record<string, unknown>;

  /** Loaded category relation, when explicitly included by the API. */
  category?: Record<string, unknown>;

  /** Loaded creator user relation, when explicitly included by the API. */
  user?: Record<string, unknown>;

  /** Loaded first/main post relation, when explicitly included by the API. */
  question?: Record<string, unknown> | null;

  /** Loaded non-question posts relation, when explicitly included by the API. */
  posts?: Record<string, unknown>[];

  /** Loaded latest answer relation, when explicitly included by the API. */
  last_answer?: Record<string, unknown> | null;

  /** Loaded current-user topic action relation, when explicitly included. */
  action?: Record<string, unknown> | null;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace CommunityTopic {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;

  /** Persisted topic trial codes. */
  export type TrialCode = "TRIO" | "WEEK" | "MONTH";

  /** Persisted topic subscription codes. */
  export type SubscriptionCode = "MONTHLY" | "SEASONAL" | "YEARLY" | "LIFETIME";

  /** Poll item persisted in `community_topics.poll`. */
  export interface Poll {
    id: number;
    title: string;
    value: number;
  }

  /**
   * Defines the structure of a trial type.
   *
   * - `code`: The unique code representing the type of trial.
   * - `name`: The i18n key associated with the trial for translations.
   * - `days`: The duration of the trial in days.
   */
  export interface ITrialType {
    code: TrialCode;
    name: string;
    days: number;
  }

  /**
   * Enum for topic trial types with their properties.
   */
  export const TrialTypes: Record<TrialCode, ITrialType> = {
    TRIO: {
      code: "TRIO",
      name: "community.trial_type.TRIO",
      days: 3,
    },
    WEEK: {
      code: "WEEK",
      name: "community.trial_type.WEEK",
      days: 7,
    },
    MONTH: {
      code: "MONTH",
      name: "community.trial_type.MONTH",
      days: 30,
    },
  };

  /**
   * A type definition representing a single topic subscription type.
   * Each subscription type has a code and a name.
   */
  export type ISubscriptionType = {
    /** The unique code representing the subscription type. */
    code: SubscriptionCode;
    /** The name (or translation key) representing the subscription type. */
    name: string;
  };

  /**
   * An enumeration representing the different types of topic subscriptions.
   * Each subscription type is associated with a unique code and a name.
   */
  export const SubscriptionTypes: Record<SubscriptionCode, ISubscriptionType> = {
    MONTHLY: {
      /** The unique code for the monthly subscription type. */
      code: "MONTHLY",
      /** The name (or translation key) for the monthly subscription type. */
      name: "community.subscription_type.MONTHLY",
    },
    SEASONAL: {
      /** The unique code for the seasonal subscription type. */
      code: "SEASONAL",
      /** The name (or translation key) for the seasonal subscription type. */
      name: "community.subscription_type.SEASONAL",
    },
    YEARLY: {
      /** The unique code for the yearly subscription type. */
      code: "YEARLY",
      /** The name (or translation key) for the yearly subscription type. */
      name: "community.subscription_type.YEARLY",
    },
    LIFETIME: {
      /** The unique code for the lifetime subscription type. */
      code: "LIFETIME",
      /** The name (or translation key) for the lifetime subscription type. */
      name: "community.subscription_type.LIFETIME",
    },
  };
}
