// @ts-nocheck
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

/**
 * URLHelper provides utility methods for handling URLs and window navigation.
 */
export class URLHelper{
    /**
     * Opens a URL in a new browser window/tab.
     *
     * Creates a temporary anchor element, sets its href to the provided URL,
     * sets the target to "_blank", and programmatically clicks it to open the URL.
     * This approach ensures the new page opens in a new tab/window based on browser settings.
     *
     * @param {string} url - The URL to open (absolute or relative path).
     *
     * @example
     * URLHelper.OpenInNewWindow("https://example.com");
     *
     * @example
     * URLHelper.OpenInNewWindow("/product/123");
     */
    static OpenInNewWindow(url){
        // Create a temporary anchor element
        const link = document.createElement("a");
        // Set the URL to open
        link.href = url
        // Target the new window/tab
        link.target = "_blank"
        // Programmatically click the link to trigger navigation
        link.click()
    }
}