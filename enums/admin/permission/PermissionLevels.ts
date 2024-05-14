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
import fullAccessImage from "../assets/levels/chevron-1star-2line.svg";
import writeAccessImage from "../assets/levels/chevron-2line.svg";
import readAccessImage from "../assets/levels/chevron-1line.svg";
import deleteAccessImage from "../assets/levels/chevron-3line.svg";
import editAccessImage from "../assets/levels/chevron-circle-star.svg";
import checkAccessImage from "../assets/levels/chevron-1star.svg";

export const PermissionLevels = {
  FULL_ACCESS: {
    code: "FULL_ACCESS",
    title: "Full access to all sections",
    image: fullAccessImage
  },
  WRITE_ACCESS: {
    code: "WRITE_ACCESS",
    title: "Write & Edit",
    image: writeAccessImage
  },
  READ_ACCESS: {
    code: "READ_ACCESS",
    title: "Read only",
    image: readAccessImage
  },
  DELETE_ACCESS: {
    code: "DELETE_ACCESS",
    title: "Delete access",
    image: deleteAccessImage
  },
  EDIT_ACCESS: {
    code: "EDIT_ACCESS",
    title: "Edit access",
    image: editAccessImage
  },
  CHECK_ACCESS: {
    code: "CHECK_ACCESS",
    title: "Check and confirm",
    image: checkAccessImage
  },
};