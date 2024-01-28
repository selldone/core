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

export class ImportQueImage implements ImportQueImage.IImportQueImage {
  id: number;
  shop_id: number;
  vendor_id: number;
  type: string;
  product_id: number;
  variant_id: number;
  category_id: number;
  url: string;
  alt: string | null;
  attempt: number;
  error: string;
  dispatched: boolean;
  created_at: Date; // Assuming Carbon instances translate to Date in TypeScript
  updated_at: Date;

  constructor(
    data: {
      id: number;
      name: string;
    } & Partial<ImportQueImage.IImportQueImage>,
  ) {
    Object.assign(this, data);
  }
}

export namespace ImportQueImage {
  export interface IImportQueImage {
    id: number;
    shop_id: number;
    vendor_id: number;
    type: string;
    product_id: number;
    variant_id: number;
    category_id: number;
    url: string;
    alt: string | null;
    attempt: number;
    error: string;
    dispatched: boolean;
    created_at: Date;
    updated_at: Date;
  }
}
