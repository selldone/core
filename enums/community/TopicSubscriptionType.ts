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
 * An enumeration representing the different types of topic subscriptions.
 * Each subscription type is associated with a unique code and a name.
 */
export const TopicSubscriptionType = {
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

/**
 * A type definition representing a single topic subscription type.
 * Each subscription type has a code and a name.
 */
export type SubscriptionType = {
  /** The unique code representing the subscription type. */
  code: string;
  /** The name (or translation key) representing the subscription type. */
  name: string;
};

/**
 * A type definition representing the TopicSubscriptionType enumeration.
 */
export type TopicSubscriptionTypeMap = {
  [key in keyof typeof TopicSubscriptionType]: SubscriptionType;
};
