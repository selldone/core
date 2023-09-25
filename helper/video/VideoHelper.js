export default class VideoHelper {
  static GetMime(filePath) {
    if (!filePath) return "video/mp4";
    // Split the filename by periods and get the last part
    const extension = filePath.split(".").pop();

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
