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

import {Product} from "./product.model";
import type {ProductImage} from "./product-image.model";
import type {ExtraPricing} from "../extra-pricing/extra-pricing.model";
import {VirtualItem} from "../order/basket/virtual_item.model";

export interface ProductVariant {
  id: number;
  product_id: number;
  sku: string;
  mpn: string;
  gtin: string; // You can further constrain this with a union type if the format is strictly one of the mentioned formats.

  color: string;
  style: object; // Define a more detailed structure if needed.
  volume: string;
  weight: string;
  pack: string;
  type: string;

  pricing: boolean;
  price: number;
  currency: string;
  commission: number;
  discount: number;
  dis_start?: string | null;
  dis_end?: string | null;
  price_label?: string | null;

  quantity: number;
  image: string;
  enable: boolean;
  lead: number;
  extra: Product.IExtra | null; // Assuming it's an array of key-value objects
  ar: Record<string, any>[]; // Similarly for 'ar'

  // Nested models:
  product: Product;
  images: ProductImage[];
  virtualItems: VirtualItem[];
  created_at: string;
  updated_at: string;

  // Drop shipping properties
  parent_id?: number;
  parent?: ProductVariant;
  children?: ProductVariant[];

  meta?: Record<string, any>[]; // Assuming it's an array of key-value objects

  extraPricings: ExtraPricing[];
}
