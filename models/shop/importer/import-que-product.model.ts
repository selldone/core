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

export class ImportQueProduct implements ImportQueProduct.IImportQueProduct {
  id: number;
  shop_id: number;
  vendor_id: number;
  product_id: number;
  type: string;
  officer: number;
  price: number;
  currency: string;
  commission: number;
  discount: number;
  dis_start: Date;
  dis_end: Date;
  price_label: string;
  unit: string;
  price_input: string;
  valuation_id: number | null;
  status: string;
  title: string;
  title_en: string;
  sku: string;
  mpn: string;
  gtin: string;
  gpc: string;
  condition: string;
  brand: string;
  warranty: string;
  spec: any[]; // Specify more precise type if possible
  spec_order: any[];
  pros: any[];
  cons: any[];
  outputs: any[];
  inputs: any[];
  variants: any[];
  quantity: number;
  limit_min: number;
  limit_max: number;
  lead: number;
  extra: object;
  style: object;
  return_warranty: number;
  original: boolean;
  slug: string;
  category: string;
  icon: string;
  images: string[];
  article_body: string;
  article_title: string;
  article_description: string;
  article_image: string;
  article_faq: any[];
  article_structures: any[];
  error: string;
  extra_pricings: any[]; // Specify more precise type if possible

  constructor(
    data: {
      id: number;
      name: string;
    } & Partial<ImportQueProduct.IImportQueProduct>,
  ) {
    Object.assign(this, data);
  }
}

export namespace ImportQueProduct {
  /**
   * Interface representing the structure of an import queue product.
   */
  export interface IImportQueProduct {
    id: number;
    shop_id: number;
    vendor_id: number;
    product_id: number;
    type: string;
    officer: number;
    price: number;
    currency: string;
    commission: number;
    discount: number;
    dis_start: Date;
    dis_end: Date;
    price_label: string;
    unit: string;
    price_input: string;
    valuation_id: number | null;
    status: string;
    title: string;
    title_en: string;
    sku: string;
    mpn: string;
    gtin: string;
    gpc: string;
    condition: string;
    brand: string;
    warranty: string;
    spec: any[]; // Specify more precise type if possible
    spec_order: any[];
    pros: any[];
    cons: any[];
    outputs: any[];
    inputs: any[];
    variants: any[];
    quantity: number;
    limit_min: number;
    limit_max: number;
    lead: number;
    extra: object;
    style: object;
    return_warranty: number;
    original: boolean;
    slug: string;
    category: string;
    icon: string;
    images: string[];
    article_body: string;
    article_title: string;
    article_description: string;
    article_image: string;
    article_faq: any[];
    article_structures: any[];
    error: string;
    extra_pricings: any[]; // Specify more precise type if possible
  }
}
