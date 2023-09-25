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
