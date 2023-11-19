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

class UserProfile {
  id: number;
  user_id: number;
  verified: boolean;
  score: number;
  credit: number;
  name: string;
  tel?: string | null;
  email?: string | null;
  web?: string | null;
  avatar?: string | null;
  text?: string | null;
  description?: string | null;
  address?: string | null;
  socials?: any[] | null; // This can be further refined based on the structure of individual social items
  nominated_id?: number | null;
  type: string;
  followers_count: string;
  following_count: string;

  constructor(data: UserProfileInput) {
    this.id = data.id;
    this.user_id = data.user_id;
    this.verified = data.verified;
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
  }
}

type UserProfileInput = {
  id: number;
  user_id: number;
  verified: boolean;
  score: number;
  credit: number;
  name: string;
  type: string;
  followers_count: string;
  following_count: string;
  tel?: string | null;
  email?: string | null;
  web?: string | null;
  avatar?: string | null;
  text?: string | null;
  description?: string | null;
  address?: string | null;
  socials?: any[] | null;
  nominated_id?: number | null;
};
