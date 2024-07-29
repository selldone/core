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
 * Represents a Page associated with a shop.
 */
export interface PrintTemplate {
  id: number;

  user_id: number;

  shop_id: number;

  /** Title of the template. */
  title: string;

  type: PrintTemplateTypes.IType;

  language: string;

  width: string;
  height: string;

  elements: any[];

  fonts: string[];
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace PrintTemplateTypes {
  export enum IType {
    INVOICE = "INVOICE",
    BOX_LABEL = "BOX_LABEL",
  }

    export const Types = [
        { value: IType.INVOICE, title: "Invoice",icon:"receipt" },
        { value: IType.BOX_LABEL, title: "Box Label",icon: "pallet" },
    ];


}
