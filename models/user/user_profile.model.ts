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

export class UserProfile {
  /** Profile id. Source: `profiles.id`. */
  id: number;

  /** Owner user id. Source: `profiles.user_id`. */
  user_id: number;

  /** Blue verified badge flag. Source: `profiles.verified` boolean cast. */
  verified: boolean;

  /** Verification source, for example subscription or officer verification. */
  verified_source?: UserProfile.VerifiedSource | null;

  /** User global score. Source: `profiles.score`. */
  score: number;

  /** Critical-action credit used for nominations/community participation. */
  credit: number;

  /** Profile display name. Source: nullable `profiles.name`. */
  name: string | null;

  /** Public telephone. Source: nullable `profiles.tel`. */
  tel?: string | null;

  /** Public email. Source: nullable `profiles.email`. */
  email?: string | null;

  /** Public website. Source: nullable `profiles.web`. */
  web?: string | null;

  /** Avatar path/url. Source: nullable `profiles.avatar`. */
  avatar?: string | null;

  /** Long profile text. Source: nullable `profiles.text`. */
  text?: string | null;

  /** Short profile description. Source: nullable `profiles.description`. */
  description?: string | null;

  /** Public address text. Source: nullable `profiles.address`. */
  address?: string | null;

  /** Social links payload. Source: nullable JSON `profiles.socials`. */
  socials?: UserProfile.Social[] | null;

  /** User id that nominated this profile. Source: nullable `profiles.nominated_id`. */
  nominated_id?: number | null;

  /** Profile type. Source: `profiles.type`. */
  type: UserProfile.ProfileType;

  /** Followers counter. Source: `profiles.followers_count`. */
  followers_count: number;

  /** Followings counter. Source: `profiles.following_count`. */
  following_count: number;

  /** Creation timestamp serialized by Laravel. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. */
  updated_at?: string | null;

  /** Owner user relation when eager-loaded. */
  user?: UserProfile.JsonObject | null;

  /** Nominator user relation when eager-loaded. */
  nominator?: UserProfile.JsonObject | null;

  /** Follower relation rows when eager-loaded. */
  followers?: UserProfile.JsonObject[] | null;

  /** Following relation rows when eager-loaded. */
  followings?: UserProfile.JsonObject[] | null;

  /** Follower profile relation rows when eager-loaded. */
  follower_profiles?: Partial<UserProfile>[] | null;

  /** Following profile relation rows when eager-loaded. */
  following_profiles?: Partial<UserProfile>[] | null;

  /** CamelCase alias for `follower_profiles` used by relation helpers. */
  followerProfiles?: Partial<UserProfile>[] | null;

  /** CamelCase alias for `following_profiles` used by relation helpers. */
  followingProfiles?: Partial<UserProfile>[] | null;

  constructor(data: UserProfile.Input) {
    this.id = data.id;
    this.user_id = data.user_id;
    this.verified = data.verified;
    this.verified_source = data.verified_source;
    this.score = data.score;
    this.credit = data.credit;
    this.name = data.name;
    this.type = data.type;
    this.followers_count = data.followers_count;
    this.following_count = data.following_count;
    this.tel = data.tel;
    this.email = data.email;
    this.web = data.web;
    this.avatar = data.avatar;
    this.text = data.text;
    this.description = data.description;
    this.address = data.address;
    this.socials = data.socials;
    this.nominated_id = data.nominated_id;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
    this.user = data.user;
    this.nominator = data.nominator;
    this.followers = data.followers;
    this.followings = data.followings;
    this.follower_profiles = data.follower_profiles;
    this.following_profiles = data.following_profiles;
    this.followerProfiles = data.followerProfiles;
    this.followingProfiles = data.followingProfiles;
  }
}

export namespace UserProfile {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by backend JSON casts. Uses an interface to avoid recursive alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by backend JSON casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Profile type stored in `profiles.type`. */
  export type ProfileType = "Main" | "Individual" | "Company";

  /** Source of profile verification. */
  export type VerifiedSource = "Subscription" | "Officer" | string;

  /** Single social link item stored inside `profiles.socials`. */
  export interface Social extends JsonObject {
    network?: string | null;
    title?: string | null;
    url?: string | null;
    icon?: string | null;
  }

  /** Raw profile payload accepted by the model constructor. */
  export interface Input {
    id: number;
    user_id: number;
    verified: boolean;
    verified_source?: VerifiedSource | null;
    score: number;
    credit: number;
    name: string | null;
    type: ProfileType;
    followers_count: number;
    following_count: number;
    tel?: string | null;
    email?: string | null;
    web?: string | null;
    avatar?: string | null;
    text?: string | null;
    description?: string | null;
    address?: string | null;
    socials?: Social[] | null;
    nominated_id?: number | null;
    created_at?: string | null;
    updated_at?: string | null;
    user?: JsonObject | null;
    nominator?: JsonObject | null;
    followers?: JsonObject[] | null;
    followings?: JsonObject[] | null;
    follower_profiles?: Partial<UserProfile>[] | null;
    following_profiles?: Partial<UserProfile>[] | null;
    followerProfiles?: Partial<UserProfile>[] | null;
    followingProfiles?: Partial<UserProfile>[] | null;
  }

  /** Payload accepted when editing a user profile. */
  export interface Upsert {
    name?: string | null;
    tel?: string | null;
    email?: string | null;
    web?: string | null;
    avatar?: string | null;
    text?: string | null;
    description?: string | null;
    address?: string | null;
    socials?: Social[] | null;
    type?: ProfileType;
  }
}
