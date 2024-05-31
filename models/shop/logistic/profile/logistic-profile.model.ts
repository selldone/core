// @ts-nocheck
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

import {LogisticProfileType} from "../../../../enums/logistic/LogisticProfileType";

/**
 * Represents a logistic model with detailed properties including identifiers, timestamps, and logistic-specific information.
 *
 * @property {number} id - The unique identifier for the logistic entry.
 * @property {number} shop_id - The identifier for the associated shop.
 * @property {number | null} user_id - The optional identifier for the associated user.
 * @property {LogisticProfileType} type - The type of logistic profile, which determines the logistic's characteristics.
 * @property {string} name - The name of the logistic entry.
 * @property {any} info - Contains additional information like product IDs and languages relevant to the logistic entry.
 * @property {Date} created_at - The timestamp when the logistic entry was created.
 * @property {Date} updated_at - The timestamp when the logistic entry was last updated.
 */

export interface LogisticProfile {
  id: number;
  shop_id: number;
  user_id: number | null;
  type: keyof typeof LogisticProfileType;
  name: string;
  info: any;
  created_at: Date;
  updated_at: Date;
}
