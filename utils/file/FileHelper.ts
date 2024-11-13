/*
 * Copyright (c) 2024. Selldone® Business OS™
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

import {FileExtensions} from "../../enums/file/FileExtensions";

export class FileHelper {
  static GetFileName(fullPath: string | null) {
    if (!fullPath) return null;

    return fullPath.replace(/^.*[\\\/]/, "");
  }

  static GetFileExtension(fullPath: string | null) {
    if (!fullPath) return null;
    return fullPath.split(".").pop();
  }

  static GetFileIcon(fullPath: string | null) {
    if (!fullPath) return null;

    const extension = FileHelper.GetFileExtension(fullPath);
    // console.log("extension", extension);
    const found = FileExtensions.find((it) => it.ex.includes(extension));
    return found ? found.src : null;
  }

  static DataURItoBlob(dataURI: string | null) {
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

  //―――――――――――――――――――――― Download Blob File ――――――――――――――――――――
  static DownloadBlobFile(data: any, headers: { [key: string]: string }) {
    // Get the content-disposition header
    const headerLine = headers["content-disposition"];
    if (!headerLine) {
      console.error("Content-Disposition header is missing.");
      return;
    }

    // Extract the filename from the content-disposition header
    const startFileNameIndex = headerLine.lastIndexOf("=") + 1;
    let filename = headerLine.substring(startFileNameIndex);

    // Remove any extra quotes or whitespace
    filename = filename.replace(/["']/g, "").trim();

    // Default filename if extraction fails
    if (!filename) filename = "data.xlsx";

    const downloadUrl = window.URL.createObjectURL(new Blob([data]));

    const link = document.createElement("a");

    link.href = downloadUrl;

    link.setAttribute("download", filename); //any other extension

    document.body.appendChild(link);

    link.click();

    link.remove();
  }

  //―――――――――――――――――――――― 💡 Read txt file to json ――――――――――――――――――――

  static LoadFile(event: Blob) {
    return new Promise(function (resolve, reject) {
      if (!event) {
        reject(new Error("No date!"));
        return;
      }
      const fr = new FileReader();
      fr.onload = (e) => {
        const json = JSON.parse(e.target?.result as string);
        resolve(json);
      };
      fr.readAsText(event);
    });
  }

  //―――――――――――――――――――――― Download file text ――――――――――――――――――――
  /**
   * Initiates a download of a text file with the specified filename and content.
   *
   * @param filename - The name of the file to be downloaded, including the file extension.
   * @param text - The text content to be included in the file.
   * @param data_uri - (Optional) The data URI prefix used to encode the text as a downloadable file.
   *                   Defaults to "data:text/plain;charset=utf-8,".
   */
  static DownloadText(
      filename: string,
      text: string,
      data_uri = "data:text/plain;charset=utf-8,",
  ) {
    const element = document.createElement("a");
    element.setAttribute("href", data_uri + encodeURIComponent(text));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }


  /**
   * Retrieves the image source URL for a file's extension, based on its filename.
   *
   * @param filename - The name of the file from which to extract the extension.
   * @returns The URL of the image representing the file type based on its extension.
   *          If the extension is not found, a default image path is returned.
   */
  static GetFileExtensionImage(filename: string) {
    const extension = filename.split(".").pop();
    const out = FileExtensions.find((item) =>
        item.ex.includes(extension as string),
    );
    return out
        ? out.src
        : require("@selldone/core-js/enums/file/assets/extensions/file.svg");
  }


}
