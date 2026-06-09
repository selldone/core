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

import waterfall from "./assets/images/001-waterfall.svg";
import desert from "./assets/images/002-desert.svg";
import lighthouse from "./assets/images/003-lighthouse.svg";
import bridge from "./assets/images/004-bridge.svg";
import lighthouse2 from "./assets/images/005-lighthouse.svg";
import volcano from "./assets/images/006-volcano.svg";
import lake from "./assets/images/007-lake.svg";
import forest from "./assets/images/008-forest.svg";
import camping from "./assets/images/009-camping.svg";
import beach from "./assets/images/010-beach.svg";
import pineTree from "./assets/images/011-pine tree.svg";
import lake2 from "./assets/images/012-lake.svg";
import park from "./assets/images/013-park.svg";
import buildings from "./assets/images/014-buildings.svg";
import hotAirBalloon from "./assets/images/015-hot air balloon.svg";
import buildings2 from "./assets/images/016-buildings.svg";
import construction from "./assets/images/017-construction.svg";
import flowers from "./assets/images/018-flowers.svg";
import forest2 from "./assets/images/019-forest.svg";
import autumn from "./assets/images/020-autumn.svg";
import windmill from "./assets/images/021-windmill.svg";
import sunrise from "./assets/images/022-sunrise.svg";
import industry from "./assets/images/023-industry.svg";
import wildWest from "./assets/images/024-wild west.svg";
import fountain from "./assets/images/025-fountain.svg";
import sakura from "./assets/images/026-sakura.svg";
import auroraBorealis from "./assets/images/027-aurora borealis.svg";
import igloo from "./assets/images/028-igloo.svg";
import sailboat from "./assets/images/029-sailboat.svg";
import cottage from "./assets/images/030-cottage.svg";

/**
 * Collection of 30 scenic placeholder images for use throughout the application.
 * Includes various landscape and nature themes (waterfalls, deserts, lighthouses, etc.)
 */
const IMAGES = [
  waterfall,
  desert,
  lighthouse,
  bridge,
  lighthouse2,
  volcano,
  lake,
  forest,
  camping,
  beach,
  pineTree,
  lake2,
  park,
  buildings,
  hotAirBalloon,
  buildings2,
  construction,
  flowers,
  forest2,
  autumn,
  windmill,
  sunrise,
  industry,
  wildWest,
  fountain,
  sakura,
  auroraBorealis,
  igloo,
  sailboat,
  cottage,
];

/**
 * PlaceholderImages provides utilities for selecting placeholder/fallback images.
 *
 * Contains a collection of scenic SVG images used as placeholders for missing or
 * default images in the application. Useful for product listings, user profiles, etc.
 */
export class PlaceholderImages {
  /**
   * Returns a random placeholder image from the collection.
   *
   * Selects a random image from the 30-image collection, useful for generating
   * varied default images when no specific image is available.
   *
   * @returns {string} A placeholder image SVG URL.
   *
   * @example
   * const randomImage = PlaceholderImages.GetRamonImage();
   * // Returns one of the 30 scenic SVG images randomly
   */
  static GetRamonImage() {
    return IMAGES[Math.floor(Math.random() * IMAGES.length)];
  }

  /**
   * Returns a specific placeholder image based on an index.
   *
   * Deterministically selects a placeholder image using modulo arithmetic,
   * ensuring the same ID always returns the same image. Useful for generating
   * consistent default images for users/products with the same ID.
   *
   * @param {number} id - A numeric identifier (e.g., product ID, user ID).
   * @returns {string} The placeholder image SVG URL corresponding to the index (id % 30).
   *
   * @example
   * PlaceholderImages.GetIDImage(5); // Always returns the 5th image
   *
   * @example
   * // For products with IDs > 30, wraps around:
   * PlaceholderImages.GetIDImage(35); // Same as GetIDImage(5) - returns 5th image
   *
   * @example
   * // Consistent placeholders for user profiles:
   * const userId = 42;
   * const profileImage = PlaceholderImages.GetIDImage(userId); // Always same image for user 42
   */
  static GetIDImage(id: number) {
    return IMAGES[id % IMAGES.length];
  }
}
