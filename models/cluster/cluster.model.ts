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



export interface Cluster {
    /**
     * The unique identifier of the cluster.
     * @type {number}
     */
    id: number;

    /**
     * The identifier of the associated shop.
     * @type {number}
     */
    shop_id: number;

    /**
     * The identifier of the associated user, or null if not assigned.
     * @type {number | null}
     */
    user_id: number | null;

    /**
     * The identifier of the parent cluster, or null if there is no parent.
     * @type {number | null}
     */
    parent_id: number | null;

    /**
     * The name of the cluster.
     * @type {string}
     */
    name: string;

    /**
     * A description of the cluster, or null if not provided.
     * @type {string | null}
     */
    description: string | null;

    /**
     * The path to the cluster's icon image. Supported sizes: 64, 128, original.
     * @type {string | null}
     */
    icon: string | null;

    /**
     * The hex color code associated with the cluster.
     * @type {string | null}
     */
    color: string | null;

    /**
     * The timestamp when the cluster was created.
     * @type {string}
     */
    created_at: string;

    /**
     * The timestamp when the cluster was last updated.
     * @type {string}
     */
    updated_at: string;
}
