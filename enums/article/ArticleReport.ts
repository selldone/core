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
