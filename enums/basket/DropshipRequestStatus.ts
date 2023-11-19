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
 * Represents the structure of a dropship request status.
 *
 * @property {string} code - The unique identifier for the status.
 * @property {string} name - The localization key or label for the status.
 * @property {string} icon - The icon associated with the status.
 */
interface DropshipRequestStatusDetail {
  code: string;
  name: string;
  icon: string;
}

/**
 * Enumerates the possible statuses for dropship requests, providing associated metadata.
 *
 * Each status has:
 * - A unique code to represent the status.
 * - A name (typically a localization key) for displaying to users.
 * - An icon to visually represent the status in UIs.
 */
export const DropshipRequestStatus: Record<string, DropshipRequestStatusDetail> = {
  PENDING: {
    code: "PENDING",
    name: "dropship_request_status.PENDING",
    icon: 'pending_actions'
  },
  ACCEPT: {
    code: "ACCEPT",
    name: "dropship_request_status.ACCEPT",
    icon: 'task_alt'
  },
  REJECT: {
    code: "REJECT",
    name: "dropship_request_status.REJECT",
    icon: 'highlight_off'
  }
};
