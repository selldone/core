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


export interface Valuation {
  id: number;
  shop_id: number;
  user_id: number;
  structure: Valuation.IDataItem[];
  conditions: Valuation.IConditions;
}

export namespace Valuation {


  export interface IDataItem {
    name: string;
    title: string;
    type: "select" | "switch" | "number"; // You can expand this union type if there are other possible values for "type"
    pricing: boolean;
    sum: boolean;
    factor: number;
    lookup: { [key: string]: number }; // You might want to provide a more specific type for this if you know the structure of "lookup"
    selects?: string[]; // Using optional '?' as it doesn't appear in every item
  }

  export interface IConditions {
    unavailable: string[];
  }
}
