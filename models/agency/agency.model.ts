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

import {Currency} from "../../enums/payment/Currency";
import type {Account} from "../account/account.model";
import type {AgencyClient} from "./agency-client.model";
import type {AgencyPlan} from "./agency-plan.model";
import type {AgencyWallet} from "./agency-wallet.model";

export interface Agency {
  /**
   * Primary key of the agency partner record.
   *
   * Backend: `agency.id`.
   */
  id: number;

  /**
   * Whether the partner integration is enabled.
   *
   * Disabled agencies should not be allowed to issue or redeem partner deals.
   */
  enable: boolean;

  /**
   * Unique API/login username assigned to the agency.
   *
   * Backend: `agency.username`, unique string.
   */
  username: string;

  /**
   * API/login password for the agency.
   *
   * Backend hides this field in serialized Eloquent responses, so it is present
   * only in create/update payloads or privileged internal responses.
   */
  password?: string;

  /**
   * Officer user ID that last created or edited the agency.
   *
   * Backend: required foreign key to `users.id`.
   */
  officer_id: number;

  /**
   * Optional Selldone user attached to the agency owner account.
   *
   * Backend: nullable foreign key to `users.id`.
   */
  user_id?: number | null;

  /**
   * Public agency or partner name.
   */
  name: string;

  /**
   * Public website URL of the agency.
   *
   * Backend column is nullable.
   */
  url: string | null;

  /**
   * Public logo path or URL.
   *
   * Backend column is nullable.
   */
  logo: string | null;

  /**
   * Contact email used for the agency.
   *
   * Backend column is nullable and limited to 100 characters.
   */
  email: string | null;

  /**
   * Contact phone number used for the agency.
   *
   * Backend column is nullable and limited to 15 characters.
   */
  phone: string | null;

  /**
   * Number of successful activation events handled for this agency.
   */
  activations: number;

  /**
   * Number of successful plan-enhance events handled for this agency.
   */
  enhances: number;

  /**
   * Number of successful plan-reduce events handled for this agency.
   */
  reduces: number;

  /**
   * Number of refund events handled for this agency.
   */
  refunds: number;

  /**
   * Start of the valid API request window.
   *
   * Backend casts this nullable Carbon column as `datetime`.
   */
  start_at: Agency.Timestamp | null;

  /**
   * End of the valid API request window.
   *
   * Backend casts this nullable Carbon column as `datetime`.
   */
  end_at: Agency.Timestamp | null;

  /**
   * Allows multiple partner clients/shops to use the same email.
   *
   * When false, backend enforces a 1:1 relation between partner UUID and email.
   */
  multi: boolean;

  /**
   * Auto-verifies user email during agency flows.
   *
   * Intended only for trusted partners.
   */
  express: boolean;

  /**
   * External upgrade/change-plan URL pattern.
   *
   * Example backend comment: `https://text.com/redemptions/{invoice_uuid}`.
   */
  redemption: string | null;

  /**
   * Optional custom header title for the agency deal page.
   */
  header?: string | null;

  /**
   * Distinguishes official Selldone agencies from third-party partners.
   */
  official: boolean;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at: Agency.Timestamp;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at: Agency.Timestamp;

  /**
   * Currency allow-list for affiliate deal purchases.
   *
   * Backend stores this nullable JSON field as an array of currency codes.
   */
  currencies?: (keyof typeof Currency)[] | null;

  /**
   * Private service metadata for agency integrations.
   *
   * Backend: nullable JSONB managed through `HasMeta`. Known metadata includes
   * `stripe_user_id` for connected Stripe accounts.
   */
  meta?: Agency.Meta | null;

  /**
   * Linked Selldone wallet account used for partner payments.
   *
   * Backend: nullable foreign key to `accounts.id`.
   */
  account_id?: number | null;

  /**
   * Maximum number of test shops that the agency can create.
   *
   * Backend column default is `10`.
   */
  test_limit: number;

  /**
   * Soft-delete timestamp.
   *
   * Present only when the backend query includes trashed agencies.
   */
  deleted_at?: Agency.Timestamp | null;

  /**
   * Loaded wallet relation, when explicitly included by the API.
   */
  wallet?: AgencyWallet | null;

  /**
   * Loaded partner plans relation, when explicitly included by the API.
   */
  plans?: AgencyPlan[];

  /**
   * Loaded partner clients relation, when explicitly included by the API.
   */
  clients?: AgencyClient[];

  /**
   * Loaded linked account relation, when explicitly included by the API.
   */
  account?: Account | null;

  /**
   * Loaded officer user relation, when explicitly included by the API.
   */
  officer?: Record<string, unknown>;

  /**
   * Loaded attached user relation, when explicitly included by the API.
   */
  user?: Record<string, unknown> | null;
}

export namespace Agency {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;

  /**
   * Service metadata stored in `agency.meta`.
   */
  export type Meta = Record<string, unknown> & {
    /**
     * Stripe connected-account ID granted to the Selldone platform.
     *
     * Backend constant: `Agency::META_STRIPE_USER_ID`.
     */
    stripe_user_id?: string;
  };
}
