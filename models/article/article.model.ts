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

export interface Article {
    /**
     * Unique identifier of the article.
     */
    id: number;

    /**
     * ID representing the associated shop.
     */
    shop_id: number;

    /**
     * ID of the parent entity.
     */
    parent_id: number;

    /**
     * Type of the parent entity.
     */
    parent_type: number;

    /**
     * ID of the user associated with the article.
     */
    user_id: number;

    /**
     * Community name or identifier associated with the article.
     */
    community: string;

    /**
     * Title of the article.
     */
    title: string;

    /**
     * Body or main content of the article.
     */
    body: string;

    /**
     * Title to be used for the article's webpage.
     */
    page_title: string;

    /**
     * Description of the article.
     */
    description: string;

    /**
     * Image URL or path associated with the article.
     */
    image: string;

    /**
     * Power rating or score of the article.
     */
    power: number;

    /**
     * Count of likes the article has received.
     */
    like: number;

    /**
     * Indicates if the article is published.
     */
    published: boolean;

    /**
     * Indicates if the article is private.
     */
    private: boolean;

    /**
     * Language of the article.
     */
    lang: string;

    /**
     * Total count of comments on the article.
     */
    comments_count: number;

    /**
     * Count of new comments since the last check.
     */
    new_comments_count: number;

    /**
     * Number of views the article has received.
     */
    views: number;

    /**
     * Date and time when the article is scheduled to be published.
     */
    schedule_at: Date;

    /**
     * URL-friendly version of the article's title.
     */
    slug: string;

    /**
     * FAQs associated with the article.
     */
    faqs: any[];  // You might want to use a more specific type if possible.

    /**
     * Structures or sections of the article.
     */
    structures: any[];  // You might want to use a more specific type if possible.

    /**
     * Last updated date of the article.
     */
    updated_at: Date;

    /**
     * Creation date of the article.
     */
    created_at: Date;
}