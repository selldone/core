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

export interface Vendor {
    /**
     * Unique identifier for the Vendor.
     * @type {number}
     */
    id: number;

    /**
     * Identifier for the shop.
     * @type {number}
     */
    shop_id: number;

    /**
     * Indicates if the vendor is enabled.
     * @type {boolean}
     */
    enable: boolean;

    /**
     * Indicates if the vendor has access.
     * @type {boolean}
     */
    access: boolean;

    /**
     * Identifier for the user associated with the vendor.
     * @type {number}
     */
    user_id: number;

    /**
     * Status of the vendor.
     * @type {Vendor.VendorStatus}
     */
    status: Vendor.VendorStatus;

    /**
     * Public name of the vendor.
     * @type {string}
     */
    name: string;

    /**
     * Public description of the vendor.
     * @type {string}
     */
    description: string;

    /**
     * Vendor's email address.
     * @type {string}
     */
    email: string;

    /**
     * Vendor's physical address.
     * @type {string}
     */
    address: string;

    /**
     * Vendor's website URL.
     * @type {string}
     */
    web: string;

    /**
     * Vendor's telephone number.
     * @type {string}
     */
    tel: string;

    /**
     * Vendor's bank name or identification.
     * @type {string}
     */
    bank: string;

    /**
     * Additional banking information for the vendor.
     * @type {any[]}
     */
    bank_info: any[];

    /**
     * URL or path to the vendor's icon.
     * @type {string}
     */
    icon: string | null

    /**
     * Identifier for the page associated with the vendor (if any).
     * @type {number | null}
     */
    page_id: number | null;

    /**
     * Date of the last payment made to or by the vendor.
     * This uses an external library 'Carbon', so you might need to import it or replace with a Date type.
     * @type {Date | null}
     */
    payment_at: Date | null;

    /**
     * Date when the vendor was created.
     * This uses an external library 'Carbon', so you might need to import it or replace with a Date type.
     * @type {Date | null}
     */
    created_at: Date | null;

    /**
     * Date when the vendor was last updated.
     * This uses an external library 'Carbon', so you might need to import it or replace with a Date type.
     * @type {Date | null}
     */
    updated_at: Date | null;
}


//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Vendor {
    export enum VendorStatus {
        PENDING = 'PENDING',
        ACCEPTED = 'ACCEPTED',
        REJECTED = 'REJECTED'
    }
}