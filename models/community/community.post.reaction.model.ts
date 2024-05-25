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

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
import likeIcon from "./assets/reactions/like.svg";
import smileIcon from "./assets/reactions/smile.svg";
import clapIcon from "./assets/reactions/claps.svg";
import ideaIcon from "./assets/reactions/idea.svg";
import disagreeIcon from "./assets/reactions/disagree.svg";

export interface CommunityPostReaction {
  /** Unique identifier for the community post reaction. */
  id: number;

  /** Identifier for the community this post reaction belongs to. */
  community_id: number;

  /** Identifier for the post this reaction is associated with. */
  post_id: number;

  /** Identifier for the user who reacted to the post. */
  user_id: number;

  /** Reaction to the post. */
  reaction: keyof typeof CommunityPostReaction.Reactions;

  /** Flag indicating whether the post is saved. */
  save: boolean;

  /** Report category for the post. */
  report: CommunityPostReaction.Reports;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace CommunityPostReaction {
  /**
   * Enum representing report categories for community posts.
   */
  export enum Reports {
    Inappropriate = "Inappropriate",
    Fake = "Fake",
    Spam = "Spam",
    Scam = "Scam",
    Hacked = "Hacked",
    Offensive = "Offensive",
    Violent = "Violent",
    Harassment = "Harassment",
    Hate = "Hate",
    Infringe = "Infringe",
  }

  /**
   * Defines the structure of a post reaction.
   *
   * - `code`: The unique code representing the type of reaction.
   * - `name`: The i18n key associated with the reaction for translations.
   * - `image`: The path to the image representing the reaction.
   * - `column`: The database column associated with this type of reaction.
   */
  interface IReaction {
    code: string;
    name: string;
    image: any; // You might want to specify the exact type here based on your use case
    column: string;
  }

  /**
   * Enum for post reactions with their properties.
   */
  export const Reactions: Record<string, IReaction> = {
    LIKE: {
      code: "LIKE",
      name: "community.post_reaction.LIKE",
      image: likeIcon,
      column: "likes",
    },
    SMILE: {
      code: "SMILE",
      name: "community.post_reaction.SMILE",
      image: smileIcon,
      column: "smiles",
    },
    CLAP: {
      code: "CLAP",
      name: "community.post_reaction.CLAP",
      image: clapIcon,
      column: "claps",
    },
    IDEA: {
      code: "IDEA",
      name: "community.post_reaction.IDEA",
      image: ideaIcon,
      column: "ideas",
    },
    DISAGREE: {
      code: "DISAGREE",
      name: "community.post_reaction.DISAGREE",
      image: disagreeIcon,
      column: "disagrees",
    },
  };
}
