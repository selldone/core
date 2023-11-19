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
 * Describes the structure of a BillStatus item.
 *
 * @property code  - A unique identifier for the status.
 * @property title - A localization key for the status description.
 */
interface BillStatusItem {
  code: string;
  title: string;
}

/**
 * An enumeration of possible bill statuses.
 *
 * @property PENDING  - Represents a bill that is awaiting payment.
 * @property PAYED    - Represents a bill that has been successfully paid.
 * @property CANCELED - Represents a bill that has been canceled.
 */
export const BillStatus: Record<string, BillStatusItem> = {
  PENDING: {
    code: "PENDING",
    title: "global.commons.pending",
  },
  PAYED: {
    code: "PAYED",
    title: "global.commons.paid",
  },
  CANCELED: {
    code: "CANCELED",
    title: "global.commons.canceled",
  },
};
