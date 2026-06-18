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


//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
import webIcon from "./assets/platforms/web.svg";
import apiIcon from "./assets/platforms/code.svg";
import androidIcon from "./assets/platforms/android.svg";
import iosIcon from "./assets/platforms/apple-b.svg";

export namespace Analytics {
  /**
   * Supported analytics platform identifiers.
   *
   * These are frontend analytics/source labels, not persisted Eloquent model
   * fields. No matching backend `analytics` model/table exists in the current
   * backend tree.
   */
  export type PlatformCode = "web" | "api" | "android" | "ios";

  /**
   * Describes the structure of a single platform.
   */
  export interface IPlatform {
    /** The unique code identifier for the platform. */
    code: PlatformCode;

    /** The human-readable title for the platform. */
    title: string;

    /** The path to the platform's icon asset. */
    icon: string;
  }

  /**
   * Enumerates various platforms with associated metadata.
   *
   * - `web`: Represents the web platform.
   * - `api`: Represents the API platform.
   * - `android`: Represents the Android mobile platform.
   * - `ios`: Represents the iOS mobile platform.
   */
  export const Platform: Record<PlatformCode, IPlatform> = {
    web: {
      code: "web",
      title: "Web",
      icon: webIcon,
    },
    api: {
      code: "api",
      title: "API",
      icon: apiIcon,
    },
    android: {
      code: "android",
      title: "Android",
      icon: androidIcon,
    },
    ios: {
      code: "ios",
      title: "iOS",
      icon: iosIcon,
    },
  };

  /**
   * Supported analytics device type identifiers.
   */
  export type DeviceTypeCode = "desktop" | "mobile" | "tablet";

  /**
   * Defines the structure for an analytics device type display item.
   */
  export interface IDeviceType {
    /** Unique identifier for the device type. */
    code: DeviceTypeCode;

    /** Localized key for the display name. */
    title: string;

    /** FontAwesome icon class for the device type. */
    icon: string;

    /** Hexadecimal color associated with the device type. */
    color: string;
  }

  /**
   * An array of device types with associated metadata.
   * This constant provides details about common device types
   * like desktop, mobile, and tablet, and includes icons and
   * colors for visual representation.
   *
   */
  export const DeviceType: IDeviceType[] = [
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
}
