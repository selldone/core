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

export interface CommunityAttachment {
  /** Unique identifier for the community post file. */
  id: number;

  /** Identifier for the community this post file belongs to. */
  community_id: number;

  /** Identifier for the post this file is associated with. */
  post_id: number;

  /** Identifier for the user who uploaded the file. */
  user_id: number;

  /** Size of the file in bytes. */
  size: string;

  /** Name of the file. */
  name: string;

  /** Path of the file on storage. */
  path: number;

  /** Flag indicating whether the file is a virus. */
  virus: boolean;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace CommunityAttachment {

}
