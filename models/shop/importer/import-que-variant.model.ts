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


export class ImportQueVariant implements ImportQueVariant.IImportQueVariant {
  id: number;
  product_id: number;
  variant_id: number | null;
  sku: string;
  mpn: string;
  gtin: string;
  color: string;
  style: object;
  volume: string;
  weight: string;
  pack: string;
  type: string;
  pricing: string;
  price: number;
  currency: string;
  commission: number;
  discount: number;
  dis_start: Date; // Assuming Carbon instances are translated to Date in TypeScript
  dis_end: Date;
  price_label: string;
  quantity: number;
  image: string;
  enable: boolean;
  lead: number;
  extra: object;
  images: string[];
  extra_pricings: any[]; // Define the structure more precisely if possible
  product: any; // Define the type for ImportQueProduct if possible

  constructor(data: Partial<ImportQueVariant.IImportQueVariant>) {
    Object.assign(this, data);
  }
}

export namespace ImportQueVariant {
  export interface IImportQueVariant {
    id: number;
    product_id: number;
    variant_id: number | null;
    sku: string;
    mpn: string;
    gtin: string;
    color: string;
    style: object;
    volume: string;
    weight: string;
    pack: string;
    type: string;
    pricing: string;
    price: number;
    currency: string;
    commission: number;
    discount: number;
    dis_start: Date;
    dis_end: Date;
    price_label: string;
    quantity: number;
    image: string;
    enable: boolean;
    lead: number;
    extra: object;
    images: string[];
    extra_pricings: any[];
    product: any; // Adjust based on the actual type
  }
}
