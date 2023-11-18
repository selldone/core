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
    icon: require("@components/assets/icons/web.svg"),
  },
  api: {
    code: "api",
    title: "API",
    icon: require("@components/assets/icons/code.svg"),
  },
  android: {
    code: "android",
    title: "Android",
    icon: require("@components/assets/tradmark/android.svg"),
  },
  ios: {
    code: "ios",
    title: "iOS",
    icon: require("@components/assets/tradmark/apple-b.svg"),
  },
};
