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

export interface VendorProduct {
  /** Unique identifier for the product pricing */
  id: number;

  /** Shop's unique identifier */
  shop_id: number;

  /** Product's unique identifier */
  product_id: number;

  /** Optional variant identifier if applicable */
  variant_id?: number | null;

  /** Vendor's unique identifier */
  vendor_id: number;

  /** Linked pricing model identifier */
  pricing_id: number;

  /** Flag indicating whether the product pricing is enabled. Products are shown to customers if quantity is greater than 0 */
  enable: boolean;

  /** Vendor set raw price */
  raw_price: number;

  /** Automatically calculated price based on commission. price = raw_price * commission */
  price: number;

  /** Currency code, e.g., USD, EUR, etc. */
  currency: string;

  /** Commission rate applied to the raw price */
  commission: number;

  /** Applicable discount amount */
  discount: number;

  /** Discount start date */
  dis_start: string;

  /** Discount end date */
  dis_end: string;

  /** Quantity of the product available */
  quantity: number;

  /** Lead time for the product in hours */
  lead: number;

  /** Timestamp when the product pricing was created */
  created_at: string;

  /** Timestamp when the product pricing was last updated */
  updated_at: string;
}
