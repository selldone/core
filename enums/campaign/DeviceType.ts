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
 * Defines the structure for the device type.
 *
 * @property {string} code - A unique identifier for the device type.
 * @property {string} title - The localized key corresponding to the display name of the device type.
 * @property {string} icon - The FontAwesome icon class representing the device type.
 * @property {string} color - The hexadecimal color code associated with the device type.
 */
interface DeviceTypeItem {
  code: string;
  title: string;
  icon: string;
  color: string;
}

/**
 * An array of device types with associated metadata.
 * This constant provides details about common device types
 * like desktop, mobile, and tablet, and includes icons and
 * colors for visual representation.
 *
 * @type {DeviceTypeItem[]}
 */
export const DeviceType: DeviceTypeItem[] = [
  {
    code: "desktop",
    title: "device_types.desktop",
    icon: "fa:fas fa-desktop",
    color: "#FFA000",
  },
  {
    code: "mobile",
    title: "device_types.mobile",
    icon: "fa:fas fa-mobile-alt",
    color: "#E91E63",
  },
  {
    code: "tablet",
    title: "device_types.tablet",
    icon: "fa:fas fa-tablet-alt",
    color: "#9C27B0",
  },
];
