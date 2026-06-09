/*
 * Copyright (c) 2024. Selldone® Business OS™
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
import {BackofficeLocalStorages} from "../local-storage";

/**
 * ShopCategoryHelper provides utilities for managing shop category images and icons.
 *
 * Handles retrieval of category icons from CDN with configurable sizing options.
 */
export class ShopCategoryHelper {
    /**
     * Retrieves the CDN URL for a category icon.
     *
     * Fetches the URL for a category's icon/image from the CDN based on the category ID
     * and desired size. Icon sizes are predefined constants to optimize caching and performance.
     *
     * @param {string | number} category_id - The unique identifier of the category (product category, etc.).
     * @param {number} [size=BackofficeLocalStorages.IMAGE_SIZE_SMALL] - The desired icon size.
     *                                                                    Defaults to small size defined in configuration.
     * @returns {string} The CDN URL for the category icon at the specified size.
     *
     * @example
     * ShopCategoryHelper.GetCategoryIconById(5); // Returns CDN URL for category 5's small icon
     *
     * @example
     * // With custom size
     * ShopCategoryHelper.GetCategoryIconById(5, BackofficeLocalStorages.IMAGE_SIZE_LARGE);
     * // Returns CDN URL for category 5's large icon
     */
    static GetCategoryIconById(
         category_id: string | number,
         size = BackofficeLocalStorages.IMAGE_SIZE_SMALL,
     ) {
         return window.CDN.GET_CATEGORY_ICON(category_id, size);
     }

}
