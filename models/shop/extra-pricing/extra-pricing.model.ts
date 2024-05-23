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
 * 🌸 Extra Pricing 🌸
 */
export interface ExtraPricing {
  /** Unique identifier of the extra pricing */
  id: number;

  /** Identifier of the associated shop */
  shop_id: number;

  /** Identifier of the associated product */
  product_id: number;

  /** Identifier of the associated variant, if any */
  variant_id?: number | null;

  /** Identifier of the associated vendor, if any */
  vendor_id?: number | null;

  /** Identifier of the associated vendor product, if any */
  vendor_product_id?: number | null;

  /** Identifier of the linked pricing model */
  pricing_id: number;

  /** Minimum quantity for which this pricing applies */
  min: number;

  /** Price value */
  price: number;

  /** Raw price without any discounts or commissions */
  raw_price: number;

  /** Commission value for this pricing */
  commission: number;

  /** Discount value for this pricing */
  discount: number;

  /** Start date of the discount, if applicable */
  dis_start: string | null;

  /** End date of the discount, if applicable */
  dis_end: string | null;

  /** Date of creation */
  created_at: string;

  /** Date of last update */
  updated_at: string;
}

export namespace ExtraPricing {}
