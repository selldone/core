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

import {Shop} from "../shop.model";
import type {ExtraPricing} from "../extra-pricing/extra-pricing.model";
import {VendorProduct} from "./vendor_product.model";

/**
 * Model Definition
 */
export interface VendorPricing {
  /** Unique identifier */
  id: number;

  /** Identifier of the associated shop */
  shop_id: number;

  /** Title of the pricing model */
  title: string;

  /** Detailed description of the pricing model */
  description: string;

  /** Commission percentage for this pricing model */
  commission: number;

  /** Date of creation */
  created_at: string;

  /** Date of last update */
  updated_at: string;

  /** Associated shop details */
  shop: Shop;

  /** List of associated vendor products */
  vendorProducts: VendorProduct[];

  /** List of associated extra pricings */
  extraPricings: ExtraPricing[];
}
