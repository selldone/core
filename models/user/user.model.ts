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
  socials_login?: User.SocialLogin;

  /** User preferences settings. */
  preferences?: User.Preferences;

  /** User's interests grouped by categories. */
  interest: User.Interest;

  /** Indicates if the user is subscribed. */
  subscribed: boolean;

  /** Timestamp indicating when the user was blocked. */
  block_at: Date;

  /** Duration (in hours) the user was last blocked. Used for calculating the next punishment period. */
  block_hours: number;

  /** Ban level for the user. */
  ban?: User.BanLevels;

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

export namespace User {
  /**
   * Represents the social login flags for a user.
   */
  export type SocialLogin = {
    google?: boolean;
    linkedin?: boolean;
    github?: boolean;
    stripe?: boolean;
  };
  /**
   * Represents user preferences settings.
   */
  export type Preferences = {
    level?: string;
    rating?: number;
    lang?: string;
    dark?: boolean;
    template?: string;
    samples?: boolean;
    currency?: string;
    provider?: boolean;
    calendar?: string;
  };

  /**
   * Represents user's interests grouped by categories.
   */
  export type Interest = {
    business?: string[];
    topic?: string[];
  };

  /** Possible ban levels for a user. */
  export enum BanLevels {
    TRANSACTION_BAN = "TRANSACTION_BAN",
    SHOP_ADMIN_BAN = "SHOP_ADMIN_BAN",
    SHOP_CUSTOMER_BAN = "SHOP_CUSTOMER_BAN",
    FULL_BAN = "FULL_BAN",
  }
}
