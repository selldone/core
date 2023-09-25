/**
 * Represents a user entity in the system.
 */
export class User {
  /** The unique identifier for the user. */
  id: number;

  /** The user's full name. */
  name: string;

  /** The user's email address. */
  email?: string;

  /** The user's phone number. */
  phone?: string;

  /** Timestamp when the user verified their email address. */
  email_verified_at: Date;

  /** Social login flags for the user. */
  socials_login?: UserSocialLogin;

  /** User preferences settings. */
  preferences?: UserPreferences;

  /** User's interests grouped by categories. */
  interest: UserInterest;

  /** Indicates if the user is subscribed. */
  subscribed: boolean;

  /** Timestamp indicating when the user was blocked. */
  block_at: Date;

  /** Duration (in hours) the user was last blocked. Used for calculating the next punishment period. */
  block_hours: number;

  /** Ban level for the user. */
  ban?: BanLevels;

  /** Key-value pairs for storing metadata (private). Used for keeping third-party customer IDs and other values. */
  meta: { [key: string]: any };

  /** Timestamp when the user was soft deleted. */
  deleted_at: Date;

  /** Timestamp when the user was created. */
  created_at: Date;

  /** Timestamp when the user was last updated. */
  updated_at: Date;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.phone = data.phone;
    this.email_verified_at = data.email_verified_at;
    this.socials_login = data.socials_login;
    this.preferences = data.preferences;
    this.interest = data.interest;
    this.subscribed = data.subscribed;
    this.block_at = data.block_at;
    this.block_hours = data.block_hours;
    this.ban = data.ban;
    this.meta = data.meta;
    this.deleted_at = data.deleted_at;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}

/**
 * Represents the social login flags for a user.
 */
type UserSocialLogin = {
  google?: boolean;
  linkedin?: boolean;
  github?: boolean;
  stripe?: boolean;
};

/**
 * Represents user preferences settings.
 */
type UserPreferences = {
  level?: string;
  rating?: number;
  lang?: string;
  dark?: boolean;
  template?: string;
  samples?: boolean;
  currency?: string;
  provider?: boolean;
};

/**
 * Represents user's interests grouped by categories.
 */
type UserInterest = {
  business?: string[];
  topic?: string[];
};

/** Possible ban levels for a user. */
enum BanLevels {
  TRANSACTION_BAN = "TRANSACTION_BAN",
  SHOP_ADMIN_BAN = "SHOP_ADMIN_BAN",
  SHOP_CUSTOMER_BAN = "SHOP_CUSTOMER_BAN",
  FULL_BAN = "FULL_BAN",
}
