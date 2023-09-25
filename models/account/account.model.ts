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
     * Unique identifier for the account.
     */
    id: number;

    /**
     * ID of the associated user.
     */
    user_id: number;

    /**
     * Account number string.
     */
    account_number: string;

    /**
     * Name associated with the account.
     */
    account_name: string;

    /**
     * Type of the account, e.g., "Single Share".
     */
    type: string;

    /**
     * Account status. (Refer to the AccountStatus enumeration for possible values)
     */
    status: Account.AccountStatus;

    /**
     * Currency type used in the account. (Refer to the Currency link for details)
     */
    currency: keyof typeof Currency;

    /**
     * Current balance of the account.
     */
    balance: number;

    /**
     * Interest rate applicable to the account.
     */
    interest_rate: number;

    /**
     * Overdraft limit or value.
     */
    overdraft: number;

    /**
     * Amount of funds that are locked or unavailable.
     */
    locked: number;

    /**
     * Extra information provided by the user.
     */
    options: object;

    /**
     * ID of the associated company, if any.
     */
    company_id?: number | null;

    /**
     * Subscription UID as defined in the payment service (e.g., Stripe).
     */
    subscription_uid?: string | null;

    /**
     * The last date and time when usage was synchronized with Stripe.
     */
    usage_sync_at?: Date | null;

    /**
     * The last date and time when charges were synchronized with Stripe.
     */
    charges_sync_at?: Date | null;

    /**
     * Extra metadata or information provided by the service.
     */
    meta?: any[] | null;  // Adjust the type as per the structure of the meta data

}


export namespace Account {
    export enum AccountStatus {
        /** First step checking account state. */
        Checking = 'Checking',

        /** Approved account. */
        Approved = 'Approved',

        /** Rejected account. */
        Rejected = 'Rejected',

        /** Deleted account. */
        Deleted = 'Deleted',

        /** Banned account. */
        Banned = 'Banned',

        /** Waiting for payment fee. */
        Payment = 'Payment',

        /** Selldone sprite account (used for external account mirror, Charge and withdraw requests). */
        SelldoneSprite = 'SelldoneSprite',

        /** Selldone storage account (used for receive fees). */
        SelldoneStorage = 'SelldoneStorage'
    }
}