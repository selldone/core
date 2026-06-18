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

export interface ArticleReport {
  /**
   * Primary key of the article report record.
   *
   * Backend: `article_reports.id`.
   */
  id: number;

  /**
   * Reported article ID.
   *
   * Backend: required foreign key to `articles.id`.
   */
  article_id: number;

  /**
   * Reporter user ID.
   *
   * Backend: required foreign key to `users.id`.
   */
  user_id: number;

  /**
   * Reason selected by the reporter.
   *
   * Backend enum source: `App\Social\Enums\ReportCategory`.
   */
  category: ArticleReport.CategoryKey;

  /**
   * Supervisor/system deletion decision flag.
   *
   * Backend column default is `false`; when true the reported article should be
   * deleted by moderation workflow.
   */
  delete: boolean;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at: ArticleReport.Timestamp;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at: ArticleReport.Timestamp;

  /**
   * Loaded reporter relation, when explicitly included by the API.
   */
  user?: Record<string, unknown>;

  /**
   * Loaded reported article relation, when explicitly included by the API.
   */
  article?: Record<string, unknown>;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ArticleReport {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;

  /**
   * Defines the structure for each article report category.
   */
  export interface ICategory {
    value: CategoryKey;
    title: string;
  }

  /**
   * Enumerates the keys for various reasons to report an article.
   */
  export type CategoryKey =
    | "Inappropriate"
    | "Fake"
    | "Spam"
    | "Scam"
    | "Hacked"
    | "Offensive"
    | "Violent"
    | "Harassment"
    | "Hate"
    | "Infringe";

  /**
   * Enumerates various reasons to report an article with associated metadata.
   */
  export const Categories: Record<CategoryKey, ICategory> = {
    Inappropriate: {
      value: "Inappropriate",
      title: "global.article_report.inappropriate",
    },
    Fake: {
      value: "Fake",
      title: "global.article_report.fake",
    },
    Spam: {
      value: "Spam",
      title: "global.article_report.spam",
    },
    Scam: {
      value: "Scam",
      title: "global.article_report.scam",
    },
    Hacked: {
      value: "Hacked",
      title: "global.article_report.hacked",
    },
    Offensive: {
      value: "Offensive",
      title: "global.article_report.offensive",
    },
    Violent: {
      value: "Violent",
      title: "global.article_report.violent",
    },
    Harassment: {
      value: "Harassment",
      title: "global.article_report.harassment",
    },
    Hate: {
      value: "Hate",
      title: "global.article_report.hate",
    },
    Infringe: {
      value: "Infringe",
      title: "global.article_report.infringe",
    },
  };
}
