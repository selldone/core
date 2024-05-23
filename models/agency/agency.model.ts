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

export interface Agency {
  /**
   * Unique identifier for the agency.
   */
  id: number;

  /**
   * Determines if the agency is enabled or not.
   */
  enable: boolean;

  /**
   * Credential username for the agency.
   */
  username: string;

  /**
   * Credential password for the agency.
   */
  password: string;

  /**
   * Identifier for the officer who last edited the agency.
   */
  officer_id: number;

  /**
   * Identifier for the user attached to the agency (optional).
   */
  user_id?: number;

  /**
   * Name of the agency.
   */
  name: string;

  /**
   * URL of the agency.
   */
  url: string;

  /**
   * Logo of the agency.
   */
  logo: string;

  /**
   * Email associated with the agency.
   */
  email: string;

  /**
   * Phone number of the agency.
   */
  phone: string;

  /**
   * Number of activations where a user has since purchased a product license and is now looking to activate/redeem.
   */
  activations: number;

  /**
   * Number of times a user upgrades their license to a larger plan.
   */
  enhances: number;

  /**
   * Number of times a user downgrades their license to a smaller plan.
   */
  reduces: number;

  /**
   * Number of times a user returns their license for a refund.
   */
  refunds: number;

  /**
   * Start date of available API requests.
   */
  start_at: Date;

  /**
   * End date of available API requests.
   */
  end_at: Date;

  /**
   * Determines if multiple shops per email are permitted. If false, UUID & Email must have a 1:1 relation.
   */
  multi: boolean;

  /**
   * Determines if the system should auto verify user email. Used only by trusted partners.
   */
  express: boolean;

  /**
   * Upgrade external link pattern.
   */
  redemption: string;

  /**
   * Deal page header title.
   */
  header?: string;

  /**
   * Determines if the agency is official for Selldone or a 3rd party partner.
   */
  official: boolean;

  /**
   * Last update date of the agency.
   */
  updated_at: Date;

  /**
   * Creation date of the agency.
   */
  created_at: Date;

  /**
   * Available currencies for affiliate deal purchase.
   */
  currencies?: keyof (typeof Currency)[];

  /**
   * Metadata associated with the agency.
   */
  meta?: Record<string, any>;

  /**
   * Account ID associated with the agency.
   */
  account_id?: number;

  /**
   * Maximum number of test shops that can be created by this agency.
   */
  test_limit: number;
}

export namespace Agency {}
