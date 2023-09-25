/**
 * Defines the structure for the application mode.
 */
interface AppModeEntry {
  title: string;
  code: string;
  src: string; // This assumes that require() returns a string path. Adjust if it's different.
}

/**
 * Enumerates various application modes with associated metadata.
 */
export const AppMode: Record<string, AppModeEntry> = {
  TEST: {
    title: "Test",
    code: "TEST",
    src: require("./assets/app-mode/test.svg"),
  },
  ENTERPRISE: {
    title: "Enterprise",
    code: "ENTERPRISE",
    src: require("./assets/app-mode/enterprise.svg"),
  },
  PUBLIC: {
    title: "Public",
    code: "PUBLIC",
    src: require("@/Applications/Selldone/pages/help/assets/public.svg"),
  },
};
