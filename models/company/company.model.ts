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

export interface Company {}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Company {
  /**
   * Interface representing a document type.
   */
  interface IDocumentType {
    /** Code representing the document type. */
    code: string;

    /** Title of the document type. */
    title: string;
  }

  /**
   * Constant array of document types.
   */
  export const DocumentTypes: IDocumentType[] = [
    { code: "REGISTRATION", title: "Registration documents" },
    { code: "VAT", title: "VAT documents" },
    { code: "TAX", title: "Tax documents" },
    { code: "IP", title: "Intellectual Property documents" },
  ];
}
