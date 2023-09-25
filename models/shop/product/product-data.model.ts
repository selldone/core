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

export interface ProductData {
    /**
     * Unique identifier for the data entry.
     */
    id: number;

    /**
     * ID of the associated product.
     */
    product_id: number;

    /**
     * Price of the product in Rial.
     */
    price: number;

    /**
     * Total quantity of items.
     */
    count: number;

    /**
     * Total number of products sold.
     */
    sell: number;

    /**
     * Total number of products sent.
     */
    send: number;

    /**
     * Total number of product views.
     */
    views: number;

    /**
     * Total number of likes for the product.
     */
    likes: number;

    /**
     * Some property related to the power metric of the product.
     */
    powers: number;

    /**
     * Total number of times the product has been favorited.
     */
    favorites: number;

    /**
     * Total number of times the product has been added to wishlists.
     */
    wishlist: number;

    /**
     * Total number of comments on the product.
     */
    comments: number;

    /**
     * Total number of approved comments on the product.
     */
    comments_approved: number;

    /**
     * Total number of ratings for the product.
     */
    ratings: number;

    /**
     * Average star rating of the product (ranges from 1 to 5).
     */
    rating_star: number;

    /**
     * Number of shops reselling the product.
     */
    reselling_shops: number;

    /**
     * Count related to reselling of the product.
     */
    reselling_count: number;

    /**
     * The date and time when the record was created.
     */
    created_at: Date;

    /**
     * The date and time when the record was last updated.
     */
    updated_at: Date;
}