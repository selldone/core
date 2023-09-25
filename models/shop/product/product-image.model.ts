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

export interface ProductImage {
    /**
     * Unique identifier of the product image.
     */
    id: number;

    /**
     * ID representing the associated product.
     */
    product_id: number;

    /**
     * ID representing the associated product variant.
     */
    variant_id: number;

    /**
     * Path to the image's location.
     */
    path: string;

    /**
     * Order or sequence number of the image in listings.
     */
    order: number;

    /**
     * Size of the image in bytes.
     */
    size: number;

    /**
     * Width of the image in pixels. Nullable.
     */
    width?: number | null;

    /**
     * Height of the image in pixels. Nullable.
     */
    height?: number | null;

    /**
     * Alternative text for the image. Useful for accessibility and SEO. Nullable.
     */
    alt?: string | null;
}