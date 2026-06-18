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

import type {Agency} from "./agency.model";
import type {AgencyPlan} from "./agency-plan.model";

export interface AgencyClient {
  /**
   * Primary key of the agency client record.
   *
   * Backend: `agency_clients.id`.
   */
  id: number;

  /**
   * Parent agency ID.
   *
   * Backend: required foreign key to `agency.id`.
   */
  agency_id: number;

  /**
   * Affiliate ID that originally introduced this client.
   *
   * Backend assigns this only on first client creation and keeps it nullable.
   */
  affiliate_id?: number | null;

  /**
   * Real Selldone user linked to this partner client.
   *
   * Backend: nullable foreign key to `users.id`.
   */
  user_id?: number | null;

  /**
   * Deprecated single-shop link kept for old records.
   *
   * Backend marks this field as deprecated and newer logic uses the `shops`
   * relation instead.
   *
   * @deprecated Use the loaded `shops` relation or shop `client_id` instead.
   */
  shop_id?: number | null;

  /**
   * Last activated agency plan ID.
   *
   * Backend column is nullable; refunds and ownership transfers may clear it.
   */
  plan_id: number | null;

  /**
   * Expiration timestamp for the purchased plan.
   *
   * `null` means a lifetime deal or no active expiring plan.
   */
  expire_at?: AgencyClient.Timestamp | null;

  /**
   * Partner-issued client UUID.
   *
   * Backend stores it as a binary-collated string and enforces uniqueness per
   * agency.
   */
  uuid: string;

  /**
   * Email used for activation on the partner side.
   *
   * Backend lowercases it when creating/finding agency clients.
   */
  email: string;

  /**
   * Extra free stores added on top of the active plan store limit.
   */
  giveaways: number;

  /**
   * Marks test clients created by an agency before transfer to a real customer.
   *
   * Backend column default is `false`.
   */
  test: boolean;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at: AgencyClient.Timestamp;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at: AgencyClient.Timestamp;

  /**
   * Soft-delete timestamp.
   *
   * Present only when the backend query includes trashed clients.
   */
  deleted_at?: AgencyClient.Timestamp | null;

  /**
   * Loaded parent agency relation, when explicitly included by the API.
   */
  agency?: Agency;

  /**
   * Loaded attached user relation, when explicitly included by the API.
   */
  user?: Record<string, unknown> | null;

  /**
   * Loaded last plan relation, when explicitly included by the API.
   */
  plan?: AgencyPlan | null;

  /**
   * Loaded purchase history relation, when explicitly included by the API.
   */
  purchases?: Record<string, unknown>[];

  /**
   * Loaded shops created for this agency client.
   */
  shops?: Record<string, unknown>[];
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace AgencyClient {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;
}
