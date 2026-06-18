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

export interface Account {
  /**
   * Primary key of the wallet account.
   *
   * Backend: `accounts.id`, auto-incrementing bigint. Production account IDs
   * start from `1000000`.
   */
  id: number;

  /**
   * Owner user ID.
   *
   * Backend: `accounts.user_id`, required foreign key to `users.id`.
   */
  user_id: number;

  /**
   * Public 16-digit wallet account number.
   *
   * Backend: `accounts.account_number`, unique string generated without
   * separators. Use `Account.IsSelldoneAccount` to detect reserved Selldone
   * storage/sprite accounts.
   */
  account_number: string;

  /**
   * Human-readable account label set by the user or system.
   *
   * Backend: `accounts.account_name`, max length 256.
   */
  account_name: string;

  /**
   * Ownership type of the wallet account.
   *
   * Backend enum: `Single` for a personal wallet account, `Share` for a shared
   * account.
   */
  type: Account.AccountType;

  /**
   * Lifecycle and operational state of the account.
   *
   * Backend enum: `App\Backoffice\Account\Enums\AccountStatus`.
   */
  status: Account.AccountStatus;

  /**
   * Wallet currency code.
   *
   * Backend enum source: `Currency::GetCurrenciesList()`. It must match one of
   * the frontend `Currency` keys.
   */
  currency: keyof typeof Currency;

  /**
   * Total account balance in `currency`.
   *
   * This includes locked funds. The spendable amount is `balance - locked`.
   */
  balance: number;

  /**
   * Interest rate assigned to the account.
   *
   * Backend defaults new user accounts to `0`; accounts with no interest keep
   * this value at zero.
   */
  interest_rate: number;

  /**
   * Overdraft allowance in `currency`.
   *
   * Backend defaults new user accounts to `0`; accounts without overdraft keep
   * this value at zero.
   */
  overdraft: number;

  /**
   * Amount of the balance reserved for pending operations.
   *
   * Backend column default is `0`. Use `balance - locked` for free balance.
   */
  locked: number;

  /**
   * User-controlled JSON options for account notifications and future flags.
   *
   * Backend: nullable JSON string cast with Laravel `json`. Known keys include
   * `email` and `notification`; absent/null options mean default notifications
   * are enabled in backend helpers.
   */
  options: Account.Options | null;

  /**
   * Linked billing company ID.
   *
   * Backend: nullable foreign key to `companies.id`, removed automatically when
   * the company is deleted.
   */
  company_id?: number | null;

  /**
   * Payment-provider subscription UID for automatic wallet charges.
   *
   * Backend: nullable string, currently used for Stripe subscription IDs.
   */
  subscription_uid?: string | null;

  /**
   * Last time account usage was synchronized with the payment provider.
   *
   * Backend casts this Carbon column as `datetime`; API payloads usually
   * serialize it as an ISO datetime string.
   */
  usage_sync_at?: Account.Timestamp | null;

  /**
   * Last time automatic charge state was synchronized with the payment provider.
   *
   * Backend casts this Carbon column as `datetime`; API payloads usually
   * serialize it as an ISO datetime string.
   */
  charges_sync_at?: Account.Timestamp | null;

  /**
   * Service-controlled private metadata.
   *
   * Backend: nullable JSONB managed through `HasMeta`, commonly used to keep
   * provider IDs and internal integration state.
   */
  meta?: Account.Meta | null;

  /**
   * Soft-delete timestamp.
   *
   * Present only when the backend query includes trashed accounts.
   */
  deleted_at?: Account.Timestamp | null;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at?: Account.Timestamp;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at?: Account.Timestamp;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace Account {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;

  /**
   * Backend JSON object used for both user options and service metadata.
   */
  export type JsonObject = Record<string, unknown>;

  /**
   * User-facing account options stored in `accounts.options`.
   */
  export interface Options extends JsonObject {
    /** Email notification preference. Missing/null means backend default. */
    email?: boolean;

    /** In-app notification preference. Missing/null means backend default. */
    notification?: boolean;
  }

  /**
   * Service metadata stored in `accounts.meta`.
   */
  export type Meta = JsonObject;

  /**
   * Account ownership mode persisted in `accounts.type`.
   */
  export type AccountType = "Single" | "Share";

  export enum AccountStatus {
    /** First step checking account state. */
    Checking = "Checking",

    /** Approved account. */
    Approved = "Approved",

    /** Rejected account. */
    Rejected = "Rejected",

    /** Deleted account. */
    Deleted = "Deleted",

    /** Banned account. */
    Banned = "Banned",

    /** Waiting for payment fee. */
    Payment = "Payment",

    /** Selldone sprite account (used for external account mirror, Charge and withdraw requests). */
    SelldoneSprite = "SelldoneSprite",

    /** Selldone storage account (used for receive fees). */
    SelldoneStorage = "SelldoneStorage",
  }

  /**
   * Returns true for reserved Selldone system accounts.
   *
   * Storage accounts start with `10000000000`; sprite accounts start with
   * `20000000000`.
   */
  export function IsSelldoneAccount(account_number: string | null) {
    return (
      account_number?.startsWith("20000000000") ||
      account_number?.startsWith("10000000000")
    );
  }
}
