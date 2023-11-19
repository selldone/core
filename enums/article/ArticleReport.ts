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
 * Defines the structure for each article report category.
 */
interface ArticleReportCategory {
  value: string;
  title: string;
}

/**
 * Enumerates various reasons to report an article with associated metadata.
 */
export const ArticleReport: Record<string, ArticleReportCategory> = {
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
