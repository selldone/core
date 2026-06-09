// @ts-nocheck
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
 * VideoHelper provides utility methods for handling video files.
 */
export class VideoHelper {
  /**
   * Determines the MIME type of a video file based on its file extension.
   *
   * Maps video file extensions to their corresponding MIME types, which is necessary
   * for proper video player configuration and HTML audio/video element handling.
   *
   * @param {string} filePath - The path or filename of the video file (e.g., "video.mp4", "/path/to/file.webm").
   * @returns {string} The MIME type string for the video format (e.g., "video/mp4", "video/webm"),
   *                    or "application/octet-stream" if the format is not recognized.
   *                    Defaults to "video/mp4" if filePath is null/undefined.
   *
   * @example
   * VideoHelper.GetMime("movie.mp4"); // Returns "video/mp4"
   *
   * @example
   * VideoHelper.GetMime("animation.webm"); // Returns "video/webm"
   *
   * @example
   * VideoHelper.GetMime("music.m4v"); // Returns "video/x-m4v"
   *
   * @example
   * VideoHelper.GetMime(null); // Returns "video/mp4"
   */
  static GetMime(filePath) {
    if (!filePath) return "video/mp4";
    // Split the filename by periods and get the last part (the extension)
    const extension = filePath.split(".").pop();

    // Map extension to MIME type
    switch (extension.toLowerCase()) {
      case "mp4":
        return "video/mp4";
      case "m4v":
        return "video/x-m4v";
      case "webm":
        return "video/webm";
      case "ogg":
        return "video/ogg";
      // Add more cases as needed...
      default:
        return "application/octet-stream";
    }
  }
}
