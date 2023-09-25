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

import { FileExtensions } from "../../enums/file/FileExtensions";

export class FileHelper {
  static GetFileName(fullPath:string|null) {
    if (!fullPath) return null;

    return fullPath.replace(/^.*[\\\/]/, "");
  }
  static GetFileExtension(fullPath:string|null) {
    if (!fullPath) return null;
    return fullPath.split(".").pop();
  }
  static GetFileIcon(fullPath:string|null) {
    if (!fullPath) return null;

    const extension = FileHelper.GetFileExtension(fullPath);
    const found = FileExtensions.find((it) => it.ex.includes(extension));
    return found ? found.src : null;
  }

  static DataURItoBlob(dataURI:string|null) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    const byteString = atob(dataURI.split(",")[1]);

    // separate out the mime component
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    // write the bytes of the string to an ArrayBuffer
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    //New Code
    return new Blob([ab], { type: mimeString });
  }
}
