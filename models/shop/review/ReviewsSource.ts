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

import facebookIcon from "../../../assets/trademark/facebook.svg";
import googleIcon from "../../../assets/trademark/google.svg";

/** Backend review source enum. Source: `App\Storefront\Review\enums\ShopReviewSources`. */
export type ReviewsSourceCode = "facebook" | "google";

/** UI metadata for an external review source. */
export interface ReviewsSourceMeta {
  /** Backend enum value stored in `shop_review.source` and `shop_review_tokens.source`. */
  code: ReviewsSourceCode;

  /** Human-readable source title. */
  title: string;

  /** Source trademark icon asset path resolved by the bundler. */
  image: string;

  /** Dashboard note shown before connecting/importing reviews from this source. */
  message: string;
}

/** External review sources supported by shop review import/sync workflows. */
export const ReviewsSource: Record<ReviewsSourceCode, ReviewsSourceMeta> = {
  facebook: {
    code: "facebook",
    title: "Facebook",
    image: facebookIcon,
    message:
      "🚧 Please note that Facebook reviews are not available for all regions. Also Facebook not provide reviewer name and profile picture to us yet.",
  },
  google: {
    code: "google",
    title: "Google",
    image: googleIcon,
    message:
      "🚫 Google provides limited access for authentication of business, we are working on that, so now you will get rate limit error, please try again later.",
  },
} as const;
