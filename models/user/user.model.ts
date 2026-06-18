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
 * Authenticated Selldone user.
 *
 * Backend source: `App\User`, table `users`.
 * The backend stores social-login flags, preferences, interests, source, and meta as JSON-like payloads and
 * serializes date fields as Laravel timestamps in API responses.
 */
export class User {
  /** User id. Source: `users.id`. */
  id: number;

  /** User full name. Source: `users.name`. */
  name: string;

  /** User email address. Source: nullable `users.email`. */
  email?: string | null;

  /** User phone number. Source: nullable `users.phone`. */
  phone?: string | null;

  /** Email verification timestamp. Source: nullable `users.email_verified_at`. */
  email_verified_at: string | null;

  /** Social login flags for the user. Source: nullable JSON `users.socials_login`. */
  socials_login?: User.SocialLogin | null;

  /** User preferences settings. Source: nullable JSON `users.preferences`. */
  preferences?: User.Preferences | null;

  /** User interests grouped by categories. Source: nullable JSON `users.interest`. */
  interest?: User.Interest | null;

  /** Whether the user has an active subscription flag. Source: `users.subscribed`. */
  subscribed: boolean;

  /** System block timestamp. Source: nullable `users.block_at`. */
  block_at: string | null;

  /** Last block duration in hours; used to calculate next punishment period. */
  block_hours: number;

  /** Manual/admin ban level. Source: nullable `users.ban`. */
  ban?: User.BanLevels | null;

  /** Private integration metadata. Source: nullable JSON `users.meta`. */
  meta?: User.Meta | null;

  /** Laravel remember token; usually hidden from public payloads. */
  remember_token?: string | null;

  /** Verified-user badge flag appended by backend/account resources. */
  verified?: boolean;

  /** User acquisition source such as joined shop id. */
  source?: User.JsonObject | null;

  /** Referral user id. Source: nullable `users.referral_id`. */
  referral_id?: number | null;

  /** Profile rows relation when eager-loaded. */
  profiles?: User.JsonObject[] | null;

  /** Shops owned by this user when eager-loaded. */
  shops?: User.JsonObject[] | null;

  /** Primary/main profile projection appended by some account/profile APIs. */
  profile?: User.JsonObject | null;

  /** Soft-delete timestamp. Source: nullable `users.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `users.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `users.updated_at`. */
  updated_at?: string | null;

  constructor(data: User.Input) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.email_verified_at = data.email_verified_at ?? null;
    this.socials_login = data.socials_login;
    this.preferences = data.preferences;
    this.interest = data.interest;
    this.subscribed = data.subscribed ?? false;
    this.block_at = data.block_at ?? null;
    this.block_hours = data.block_hours ?? 0;
    this.ban = data.ban;
    this.meta = data.meta;
    this.remember_token = data.remember_token;
    this.verified = data.verified;
    this.source = data.source;
    this.referral_id = data.referral_id;
    this.deleted_at = data.deleted_at;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}

export namespace User {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by backend JSON casts. Uses an interface to avoid recursive alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by backend JSON casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /**
   * Represents the social login flags for a user.
   */
  export interface SocialLogin extends JsonObject {
    google?: boolean;
    linkedin?: boolean;
    github?: boolean;
    stripe?: boolean;
  }

  /**
   * Represents user preferences settings.
   */
  export interface Preferences extends JsonObject {
    level?: User.Preferences.AppLevelKey;
    rating?: number;
    lang?: string;
    dark?: boolean;
    template?: string;
    samples?: boolean;
    currency?: string;
    provider?: boolean;
    calendar?: string;
  }

  export namespace Preferences {
    /**
     * Interface representing the structure of an app level.
     * @interface
     * @property {string} title - The title of the app level, typically used for display purposes.
     * @property {number} level - The numeric representation of the app level, useful for comparisons and logic based on the level.
     * @property {string} code - The unique code identifier for the app level.
     */
    export interface IAppLevel {
      title: string;
      level: number;
      code: AppLevelKey;
    }

    /**
     * Represents the predefined keys for app levels.
     */
    export type AppLevelKey =
      | "NEWBIE"
      | "BEGINNER"
      | "NOVICE"
      | "INTERMEDIATE"
      | "ADVANCED";

    /**
     * Represents predefined app levels with their associated titles, levels, and codes.
     * This is part of the Selldone open-source library, enabling developers to build custom storefronts and back offices.
     */
    export const AppLevel: Record<AppLevelKey, IAppLevel> = {
      /**
       * Represents a newbie user level.
       */
      NEWBIE: {
        title: "app_levels.Newbie",
        level: 1,
        code: "NEWBIE",
      },

      /**
       * Represents a beginner user level.
       */
      BEGINNER: {
        title: "app_levels.Beginner",
        level: 2,
        code: "BEGINNER",
      },

      /**
       * Represents a novice user level.
       */
      NOVICE: {
        title: "app_levels.Novice",
        level: 3,
        code: "NOVICE",
      },

      /**
       * Represents an intermediate user level.
       */
      INTERMEDIATE: {
        title: "app_levels.Intermediate",
        level: 4,
        code: "INTERMEDIATE",
      },

      /**
       * Represents an advanced user level.
       */
      ADVANCED: {
        title: "app_levels.Advanced",
        level: 5,
        code: "ADVANCED",
      },
    };
  }

  /**
   * Represents user's interests grouped by categories.
   */
  export interface Interest extends JsonObject {
    business?: string[];
    topic?: string[];
  }

  /** Private user metadata. Stripe customer ids are stored by currency-specific keys. */
  export interface Meta extends JsonObject {
    stripe_customer_id?: string | null;
  }

  /** Raw user payload accepted by the model constructor. */
  export interface Input {
    id: number;
    name: string;
    email?: string | null;
    phone?: string | null;
    email_verified_at?: string | null;
    socials_login?: SocialLogin | null;
    preferences?: Preferences | null;
    interest?: Interest | null;
    subscribed?: boolean;
    block_at?: string | null;
    block_hours?: number;
    ban?: BanLevels | null;
    meta?: Meta | null;
    remember_token?: string | null;
    verified?: boolean;
    source?: JsonObject | null;
    referral_id?: number | null;
    profiles?: JsonObject[] | null;
    shops?: JsonObject[] | null;
    profile?: JsonObject | null;
    deleted_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
  }

  /** Possible ban levels for a user. */
  export enum BanLevels {
    TRANSACTION_BAN = "TRANSACTION_BAN",
    SHOP_ADMIN_BAN = "SHOP_ADMIN_BAN",
    SHOP_CUSTOMER_BAN = "SHOP_CUSTOMER_BAN",
    FULL_BAN = "FULL_BAN",
  }
}
