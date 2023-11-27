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
 * Interface representing the structure of an app level.
 * @interface
 * @property {string} title - The title of the app level, typically used for display purposes.
 * @property {number} level - The numeric representation of the app level, useful for comparisons and logic based on the level.
 * @property {string} code - The unique code identifier for the app level.
 */
interface IAppLevel {
  title: string;
  level: number;
  code: string;
}

/**
 * Represents predefined app levels with their associated titles, levels, and codes.
 * This is part of the Selldone open-source library, enabling developers to build custom storefronts and back offices.
 */
export const AppLevel: Record<string, IAppLevel> = {
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
