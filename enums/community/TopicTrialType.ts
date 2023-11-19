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
 * Defines the structure of a trial type.
 *
 * - `code`: The unique code representing the type of trial.
 * - `name`: The i18n key associated with the trial for translations.
 * - `days`: The duration of the trial in days.
 */
interface ITopicTrialType {
  code: string;
  name: string;
  days: number;
}

/**
 * Enum for topic trial types with their properties.
 */
export const TopicTrialType: Record<string, ITopicTrialType> = {
  TRIO: {
    code: "TRIO",
    name: "community.trial_type.TRIO",
    days: 3,
  },
  WEEK: {
    code: "WEEK",
    name: "community.trial_type.WEEK",
    days: 7,
  },
  MONTH: {
    code: "MONTH",
    name: "community.trial_type.MONTH",
    days: 30,
  },
};


