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
    icon: "fas fa-desktop",
    color: "#FFA000",
  },
  {
    code: "mobile",
    title: "device_types.mobile",
    icon: "fas fa-mobile-alt",
    color: "#E91E63",
  },
  {
    code: "tablet",
    title: "device_types.tablet",
    icon: "fas fa-tablet-alt",
    color: "#9C27B0",
  },
];
