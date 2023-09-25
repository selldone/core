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


