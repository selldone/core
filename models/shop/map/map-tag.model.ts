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
 * 🛹 Map Tag
 */
export interface MapTag {
    /**
     * ID of the map tag
     */
    id: number;

    /**
     * ID representing the associated shop
     */
    shop_id: number;

    /**
     * ID of the user who added or last modified this tag
     */
    user_id: number;

    /**
     * Tags used for creating filters
     */
    tags: any[];  // Specify a more specific type if possible.

    /**
     * Title of the map tag
     */
    title: string;

    /**
     * Country code
     */
    country: string;

    /**
     * State or province
     */
    state: string;

    /**
     * City name
     */
    city: string;

    /**
     * Address details
     */
    address: string;

    /**
     * Geolocation details. Typically [latitude, longitude]
     */
    location: [number, number];

    /**
     * Building number
     */
    no: number;

    /**
     * Building unit
     */
    unit: number;

    /**
     * Name associated with the map tag
     */
    name: string;

    /**
     * Phone number associated with the map tag
     */
    phone: string;

    /**
     * Message associated with the map tag
     */
    message: string;

    /**
     * Postal code
     */
    postal: string;

    /**
     * Latitude coordinate
     */
    lat: number;

    /**
     * Longitude coordinate
     */
    lng: number;

    /**
     * Range (not clear from context what this represents, so added a generic description)
     */
    range: number;
}
export namespace MapTag {

}