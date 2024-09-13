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

type ImageCache = {
    width: number;
    height: number;
    timestamp: number;
};

export class ImageHelper {
    url: string;
    private static cache: Map<string, ImageCache> = new Map(); // Cache for storing image dimensions
    private static cacheDuration: number = 10000; // Cache duration in milliseconds (10 seconds)

    /**
     * Constructor to initialize the ImageHelper instance with an image URL.
     * @param url - The URL of the image to retrieve dimensions from.
     */
    constructor(url: string) {
        this.url = url;
    }

    /**
     * Retrieves the dimensions (width and height) of the image from the provided URL.
     * This method uses the browser's Image object to load the image and obtain the dimensions.
     *
     * @returns {Promise<{ width: number; height: number }>} - A promise that resolves to an object containing the width and height of the image.
     */
    private getImageDimensions(): Promise<{ width: number, height: number }> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve({ width: img.width, height: img.height });
            };
            img.onerror = (error) => reject(`Failed to load image dimensions: ${error}`);
            img.src = this.url;
        });
    }

    /**
     * Retrieves the dimensions (width and height) of the image, with caching to prevent multiple server requests within the cache duration (10 seconds).
     *
     * @returns {Promise<{ width: number; height: number }>} - A promise that resolves to an object containing the width and height of the image.
     */
    async getImageInfo(): Promise<{ width: number, height: number }> {
        const cachedInfo = ImageHelper.cache.get(this.url);
        const currentTime = Date.now();

        // Check if the image data is cached and valid (within 10 seconds)
        if (cachedInfo && currentTime - cachedInfo.timestamp < ImageHelper.cacheDuration) {
            return { width: cachedInfo.width, height: cachedInfo.height };
        }

        // Fetch new data if no valid cache exists
        try {
            const dimensions = await this.getImageDimensions();
            const imageInfo = { ...dimensions, timestamp: currentTime };

            // Store the new data in the cache
            ImageHelper.cache.set(this.url, imageInfo);

            return { width: imageInfo.width, height: imageInfo.height };
        } catch (error) {
            throw new Error('Error retrieving image dimensions: ' + error);
        }
    }

    /**
     * Clears the cache for a specific URL or for all stored images.
     * @param url - Optional. If provided, clears the cache only for the specified URL. Otherwise, clears the entire cache.
     */
    static clearCache(url?: string): void {
        if (url) {
            ImageHelper.cache.delete(url);
        } else {
            ImageHelper.cache.clear();
        }
    }
}
