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
import webIcon from "./assets/web.svg";
import apiIcon from "./assets/code.svg";
import androidIcon from "./assets/android.svg";
import iosIcon from "./assets/apple-b.svg";

/**
 * Describes the structure of a single platform.
 */
interface PlatformType {
  /** The unique code identifier for the platform. */
  code: string;

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
export const Platform: Record<string, PlatformType> = {
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