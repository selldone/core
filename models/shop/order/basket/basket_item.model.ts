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

import {Product} from "../../product/product.model";
import {Currency} from "../../../../enums/payment/Currency";
import type {ProductVariant} from "../../product/product_variant.model";
import type {SubscriptionPrice} from "../../product/subscription_price.model";
import type {Offer} from "../../incentives/offer/offer.model";
import type {ExtraPricing} from "../../extra-pricing/extra-pricing.model";
import type {Connect} from "../../../connect/connect.model";
import {BasketItemReturn} from "./basket_item_return.model";
import {VirtualItem} from "./virtual_item.model";
import {ServiceItem} from "./service_item.model";
import {VendorProduct} from "../../vendor/vendor_product.model";
import {Fulfillment} from "../fulfillment";

/**
 * TypeScript model for BasketItem
 */
export interface BasketItem {
  id: number;
  basket_id: number;
  product_id: number;
  variant_id: number;
  message: object;
  preferences: BasketItem.IPreferences | null;
  count: number;
  price: number; // Price per unit after product discount
  currency: keyof typeof Currency;
  dis: number; // Product discount
  offer_id: number;
  offer_count: number;
  offer_amount: number; // Should be deducted from count * price
  cross_dis: number; // Cross-selling discount
  tax: any[];
  fulfillment_id: number;

  // Relations
  product: Partial<Product> | null;
  variant: Partial<ProductVariant> | null;
  returnRequest: Partial<BasketItemReturn> | null;
  offer: Partial<Offer> | null;
  virtualItems: Partial<VirtualItem>[];
  serviceItem: Partial<ServiceItem>;
  fulfillment: Partial<Fulfillment>;

  // Vendor
  vendor_id?: number | null;
  vendor_product_id?: number | null;
  vendor_price: number;
  vendorProduct?: Partial<VendorProduct> | null;

  // Connect
  connect_id?: number | null;
  connect?: Connect | null;

  // Subscription
  subscription_price_id?: number | null;
  subscriptionPrice?: Partial<SubscriptionPrice> | null;

  // Extra pricing
  extra_pricing_id?: number | null;
  extraPricing?: Partial<ExtraPricing> | null;
}

export namespace BasketItem {
  export interface IPreferences {
    dates?: string[];
    // Custom input format (1x, 2x : area, 3x:volume quantity input)
    dim_1?: number;
    dim_2?: number;
    dim_3?: number;

    // Custom pricing with valuation form (input values by user)
    valuation?: Record<string, any>;

    // Service preferences:
    period?: string;

    days?: Record<string, number[]>;

    [key: string]: any; // This line allows for flexibility to include other properties not listed above
  }
}
