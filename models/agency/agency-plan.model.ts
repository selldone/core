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
import type {Agency} from "./agency.model";

export interface AgencyPlan {
  /**
   * Primary key of the agency plan.
   *
   * Backend: `agency_plans.id`.
   */
  id: number;

  /**
   * Parent agency ID.
   *
   * Backend: required foreign key to `agency.id`.
   */
  agency_id: number;

  /**
   * Partner-facing plan code.
   *
   * Backend stores this as a binary-collated string and enforces uniqueness per
   * agency.
   */
  code: string;

  /**
   * Convenient display name for the plan.
   *
   * Backend column is nullable, although plan creation normally supplies a
   * value.
   */
  name: string | null;

  /**
   * Number of shops that this plan can license for the same agency client.
   *
   * Backend default is `1`.
   */
  stores: number;

  /**
   * Selldone shop license assigned to linked shops by this agency plan.
   */
  license: AgencyPlan.LicenseCode;

  /**
   * Officer approval state.
   *
   * Disabled plans cannot be treated as approved partner offers.
   */
  enable: boolean;

  /**
   * Sold-out state for the public affiliate/deal page.
   *
   * Backend column default is `false`.
   */
  soldout: boolean;

  /**
   * True when the plan has no expiration.
   *
   * When true, backend stores client `expire_at` as `null`.
   */
  lifetime: boolean;

  /**
   * License duration in months for non-lifetime plans.
   *
   * Backend agency pricing currently accepts `1` and `12` month periods.
   */
  months: number;

  /**
   * Officer user ID that last approved or edited the plan.
   *
   * Backend: nullable foreign key to `users.id`.
   */
  officer_id?: number | null;

  /**
   * Optional domain limit override.
   *
   * `null` means use the default limit of the selected shop license.
   */
  domains: number | null;

  /**
   * Optional staff limit override.
   *
   * `null` means use the default limit of the selected shop license.
   */
  staff: number | null;

  /**
   * Optional payment fee override expressed as a percent.
   *
   * Backend comment examples: `2` for 2%, `0.5` for 0.5%. `null` means use the
   * default license/payment configuration.
   */
  fee?: number | null;

  /**
   * Public/partner purchase price for the plan.
   *
   * Backend column is nullable and stored in `currency`.
   */
  price?: number | null;

  /**
   * Price currency code.
   *
   * Backend enum source: `Currency::GetCurrenciesList()`, default `USD`.
   */
  currency: keyof typeof Currency;

  /**
   * Display-only price before discount.
   *
   * Backend column is nullable.
   */
  price_net?: number | null;

  /**
   * Calculated cost charged to the agency by Selldone.
   *
   * Backend column default is `0`; official agencies can also have zero cost.
   */
  agency_price: number;

  /**
   * Controls visibility on the affiliate deal page.
   *
   * `true` means the plan can appear publicly after the agency connects the
   * required payment account. `false` keeps it available only for manual/API
   * license issuing.
   */
  published: boolean;

  /**
   * Optional bonus/gift text shown with the plan.
   */
  gift?: string | null;

  /**
   * Number of activation events attributed to this plan.
   */
  activations: number;

  /**
   * Number of enhance/upgrade events attributed to this plan.
   */
  enhances: number;

  /**
   * Number of reduce/downgrade events attributed to this plan.
   */
  reduces: number;

  /**
   * Number of refund events attributed to this plan.
   */
  refunds: number;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at: AgencyPlan.Timestamp;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at: AgencyPlan.Timestamp;

  /**
   * Soft-delete timestamp.
   *
   * Present only when the backend query includes trashed plans.
   */
  deleted_at?: AgencyPlan.Timestamp | null;

  /**
   * Loaded parent agency relation, when explicitly included by the API.
   */
  agency?: Agency;

  /**
   * Loaded officer user relation, when explicitly included by the API.
   */
  officer?: Record<string, unknown> | null;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace AgencyPlan {
  /**
   * License codes accepted by backend `ShopLicenseCode` for agency plans.
   */
  export type LicenseCode = "FREE" | "STARTUP" | "COMPANY" | "ENTERPRISE";

  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;
}
