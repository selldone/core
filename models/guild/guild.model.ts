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
 * User-owned guild/profile collection used to group and present external links
 * or media members.
 *
 * Backend source: `App\Backoffice\Guild\Guild`, persisted in the `guilds`
 * table. Each user can own one guild.
 */
export interface Guild {
  /**
   * Primary key of the guild.
   *
   * Backend: `guilds.id`.
   */
  id: number;

  /**
   * Owner user ID.
   *
   * Backend: unique foreign key to `users.id`.
   */
  user_id: number;

  /**
   * Unique guild username/slug.
   *
   * Backend: required unique string, max length 64.
   */
  name: string;

  /**
   * Public guild title.
   *
   * Backend: required string, max length 128.
   */
  title: string;

  /**
   * Public guild description.
   *
   * Backend column is nullable, max length 256.
   */
  desc: string | null;

  /**
   * Guild image path or URL.
   *
   * Backend column is nullable.
   */
  image: string | null;

  /**
   * Whether the guild is enabled.
   */
  enable: boolean;

  /**
   * Display options for the guild.
   *
   * Backend stores this as nullable JSONB. Current writer stores `{ flex,
   * bordered }`.
   */
  options: Guild.Options | null;

  /**
   * Selldone administrator penalty flag.
   */
  penalty: boolean;

  /**
   * Soft-delete timestamp.
   *
   * Present only when the backend query includes trashed guilds.
   */
  deleted_at?: Guild.Timestamp | null;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at?: Guild.Timestamp;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at?: Guild.Timestamp;

  /** Loaded owner user relation, when explicitly included by the API. */
  user?: Record<string, unknown>;

  /** Loaded ordered members relation, when explicitly included by the API. */
  members?: Guild.Member[];

  /** Loaded reactions relation, when explicitly included by the API. */
  reactions?: Guild.Reaction[];
}

export namespace Guild {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;

  /**
   * Guild display options stored in `guilds.options`.
   */
  export interface Options {
    /** Flexible layout mode. */
    flex?: boolean;

    /** Bordered visual style. */
    bordered?: boolean;

    [key: string]: unknown;
  }

  /**
   * Guild member type values from backend `GuildMemberType`.
   *
   * Kept open with `string` because the enum file is not represented in
   * core-js yet and provider-specific values may be added.
   */
  export type MemberType = string;

  /**
   * Guild member row persisted in `guild_members`.
   */
  export interface Member {
    /** Primary key of the member row. */
    id: number;

    /** Parent guild ID. */
    guild_id: number;

    /** User ID that added this member. */
    user_id: number;

    /** Member type. */
    type: MemberType;

    /** Optional tags payload. */
    tags: string[] | Record<string, unknown>[] | null;

    /** Unique member URL inside the guild. */
    url: string;

    /** Sort order. */
    order: number;

    /** Member title. */
    title: string;

    /** Member image path or URL. */
    image: string | null;

    /** Favicon path or URL. */
    fav: string | null;

    /** External provider name. */
    provider_name: string | null;

    /** External provider URL. */
    provider_url: string | null;

    /** Optional embedded HTML code. */
    html: string | null;

    /** Likes counter. */
    likes: number;

    /** Clicks counter. */
    clicks: number;

    /** Recommendations counter. */
    recoms: number;

    /** Reports counter. */
    reports: number;

    /** Saves counter. */
    saves: number;

    /** Recent recommender user IDs, max 3 in backend comment. */
    recommenders?: number[] | null;

    /** Soft-delete timestamp. */
    deleted_at?: Timestamp | null;

    /** Creation timestamp. */
    created_at?: Timestamp;

    /** Last update timestamp. */
    updated_at?: Timestamp;
  }

  /**
   * Guild reaction row persisted in `guild_reactions`.
   */
  export interface Reaction {
    /** Primary key of the reaction row. */
    id: number;

    /** Parent guild ID. */
    guild_id: number;

    /** Target guild member ID. */
    member_id: number;

    /** Reacting user ID. */
    user_id: number;

    /** Like flag. */
    like: boolean;

    /** Save flag. */
    save: boolean;

    /** Recommendation flag. */
    recommendation: boolean;

    /** Optional report category. */
    report: string | null;

    /** Creation timestamp. */
    created_at?: Timestamp;

    /** Last update timestamp. */
    updated_at?: Timestamp;
  }
}

export namespace Guild {
  /** JSON primitive accepted by guild metadata and relation payloads. */
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object used for guild settings and eager-loaded relations. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array used for guild settings and eager-loaded relations. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Compact guild projection used by membership and analytics payloads. */
  export interface CompactProjection {
    id: number;
    name?: string | null;
    title?: string | null;
    icon?: string | null;
    enable?: boolean;
  }

  /** Safe partial update payload for guild settings. */
  export interface ApiPatch {
    name?: string | null;
    title?: string | null;
    description?: string | null;
    icon?: string | null;
    enable?: boolean;
    meta?: JsonObject | null;
  }
}
