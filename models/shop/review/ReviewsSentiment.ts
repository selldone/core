/*
 * Copyright (c) 2024. Selldone® Business OS™
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

import negativeIcon from "./assets/Negative.svg";
import neutralIcon from "./assets/Neutral.svg";
import positiveIcon from "./assets/Positive.svg";

/** Backend review sentiment enum. Source: `App\Storefront\Review\enums\ShopReviewSentiment`. */
export type ReviewsSentimentCode = "Positive" | "Negative" | "Neutral";

/** UI metadata for one review sentiment value. */
export interface ReviewsSentimentMeta {
  /** Backend enum value. */
  code: ReviewsSentimentCode;

  /** Human-readable title. */
  title: string;

  /** Sentiment icon asset path resolved by the bundler. */
  image: string;
}

/** Review sentiment values used by imported/external shop reviews. */
export const ReviewsSentiment: Record<ReviewsSentimentCode, ReviewsSentimentMeta> = {
  Positive: {
    code: "Positive",
    title: "Positive",
    image: positiveIcon,
  },
  Negative: {
    code: "Negative",
    title: "Negative",
    image: negativeIcon,
  },
  Neutral: {
    code: "Neutral",
    title: "Neutral",
    image: neutralIcon,
  },
} as const;
