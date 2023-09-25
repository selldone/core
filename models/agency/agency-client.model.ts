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


export interface AgencyClient{
    /**
     * Unique identifier for the client.
     */
    id: number;

    /**
     * Identifier for the associated agency.
     */
    agency_id: number;

    /**
     * Identifier for the affiliate. This is assigned only when a client is created for the first time.
     * It indicates who originally introduced this client.
     */
    affiliate_id?: number | null;

    /**
     * Identifier for the associated user.
     */
    user_id?: number | null;

    /**
     * The last assigned plan identifier for the client.
     */
    plan_id: number;

    /**
     * The expiration date for the purchased plan. A value of `null` indicates a lifetime deal.
     */
    expire_at?: string | null;

    /**
     * UUID provided by our partners.
     */
    uuid: string;

    /**
     * Email used for activation on the partner’s side.
     */
    email: string;

    /**
     * Count of added free stores.
     */
    giveaways: number;

    /**
     * Indicates if the entity is in test mode.
     * For instances created by an agency before transferring to a real client.
     */
    test: boolean;

    /**
     * Timestamp indicating when the entity was last updated.
     */
    updated_at: string;

    /**
     * Timestamp indicating when the entity was created.
     */
    created_at: string;
}


export namespace AgencyClient {

}