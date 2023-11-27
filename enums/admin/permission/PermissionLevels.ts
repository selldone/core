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
 * Defines the official permission levels for Selldone administrators.
 *
 * This enumeration object maps various levels of administrative permissions to their respective
 * characteristics including a unique code, a descriptive title, and an associated image.
 *
 * Note: These permission levels are intended for use in administrative contexts only and should not
 * be used in storefront or backoffice implementations.
 *
 * @enum {Object}
 */
export const PermissionLevels = {
  FULL_ACCESS: {
    code: "FULL_ACCESS",
    title: "Full access to all sections",
    image: require("@core/enums/admin/assets/levels/chevron-1star-2line.svg")
  },
  WRITE_ACCESS: {
    code: "WRITE_ACCESS",
    title: "Write & Edit",
    image: require("@core/enums/admin/assets/levels/chevron-2line.svg")
  },
  READ_ACCESS: {
    code: "READ_ACCESS",
    title: "Read only",
    image: require("@core/enums/admin/assets/levels/chevron-1line.svg")
  },
  DELETE_ACCESS: {
    code: "DELETE_ACCESS",
    title: "Delete access",
    image: require("@core/enums/admin/assets/levels/chevron-3line.svg")
  },
  EDIT_ACCESS: {
    code: "EDIT_ACCESS",
    title: "Edit access",
    image: require("@core/enums/admin/assets/levels/chevron-circle-star.svg")
  },
  CHECK_ACCESS: {
    code: "CHECK_ACCESS",
    title: "Check and confirm",
    image: require("@core/enums/admin/assets/levels/chevron-1star.svg")
  },

};
