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

import { SetupService } from "../../server/SetupService";
import { User } from "../../models/user/user.model";

/**
 * URL helper for Selldone-owned public pages.
 */
export class SelldoneURLs {
  /**
   * Builds the public profile URL for a Selldoner user.
   *
   * @param {User} user - User model containing id and username.
   * @returns {string} Absolute URL to the user's public profile page.
   */
  static UserProfilePageUrl(user: User) {
    return `${SetupService.MainServiceUrl()}/selldoners/${user.id}/@${
      user.name
    }`;
  }
}
