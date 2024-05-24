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
   * Unique identifier of the article.
   */
  id: number;

  article_id: number;

  /**
   * Reporter user
   */
  user_id: number;

  /**
   * Reason of the report
   */
  category: ArticleReport.CategoryKey;

  /**
   * Delete this article (only by a supervisor or system)
   */
  delete: boolean;

  /**
   * Last updated date of the article.
   */
  updated_at: Date;

  /**
   * Creation date of the article.
   */
  created_at: Date;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace ArticleReport {
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
  export const Category: Record<CategoryKey, ICategory> = {
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
