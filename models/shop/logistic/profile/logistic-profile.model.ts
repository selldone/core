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

import { LogisticProfileType } from "../../../../enums/logistic/LogisticProfileType";

/**
 * Logistic profile attached to products for warranty, return policy, guide, or shipping content.
 *
 * Backend source: `App\Shop\LogisticProfiles\LogisticProfile`, table `logistic_profiles`.
 * The profile owns article content through `HasArticle`; products reference it through `warranty_id`,
 * `return_policy_id`, `guide_id`, or `shipping_id`.
 */
export interface LogisticProfile {
  /** Profile id. Source: `logistic_profiles.id`. */
  id: number;

  /** Owning shop id. Source: `logistic_profiles.shop_id`. */
  shop_id: number;

  /** Creator / last editor user id, or `null`. Source: nullable `logistic_profiles.user_id`. */
  user_id: number | null;

  /** Profile type. Backend enum `LogisticProfileType::All`. */
  type: LogisticProfile.TypeCode;

  /** Profile internal/public name, max 64 chars. Source: `logistic_profiles.name`. */
  name: string;

  /** Profile metadata such as sample `product_ids` and available `languages`. */
  info: LogisticProfile.Info | null;

  /** Creation timestamp. Source: `logistic_profiles.created_at`. */
  created_at: string;

  /** Last update timestamp. Source: `logistic_profiles.updated_at`. */
  updated_at: string;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown>;

  /** Editor relation when eager-loaded. */
  user?: Record<string, unknown> | null;

  /** Article relation(s) from `HasArticle` when eager-loaded. */
  article?: Record<string, unknown> | null;
  articles?: Record<string, unknown>[];

  /** Product relations for the active profile type when loaded by backend. */
  products?: Record<string, unknown>[];
}

export namespace LogisticProfile {
  /** Backend enum values for `logistic_profiles.type`. */
  export type TypeCode = (typeof LogisticProfileType)[keyof typeof LogisticProfileType]["value"];

  /** JSON payload stored in `logistic_profiles.info`. */
  export interface Info {
    product_ids?: number[];
    languages?: string[];
    [key: string]: unknown;
  }
}
