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

import { Product } from "../../product/product.model";
import { Currency } from "../../../../enums/payment/Currency";
import type { ProductVariant } from "../../product/product_variant.model";
import type { SubscriptionPrice } from "../../product/subscription_price.model";
import type { Offer } from "../../incentives/offer/offer.model";
import type { ExtraPricing } from "../../extra-pricing/extra-pricing.model";
import type { Connect } from "../../../connect/connect.model";
import { BasketItemReturn } from "./basket_item_return.model";
import { VirtualItem } from "./virtual_item.model";
import { ServiceItem } from "./service_item.model";
import { VendorProduct } from "../../vendor/vendor_product.model";
import { Fulfillment } from "../fulfillment";

/**
 * Basket line item stored in `shop_basket_items`.
 *
 * Backend source: `App\Storefront\Order\Basket\BasketItem`, table `shop_basket_items`.
 * The backend casts message, preferences, tax, and check; relation names are exposed both in camelCase
 * helper form and Laravel snake_case serialization form.
 */
export interface BasketItem {
  /** Basket item id. Source: `shop_basket_items.id`. */
  id: number;

  /** Parent basket id. Source: `shop_basket_items.basket_id`. */
  basket_id: number;

  /** Ordered product id. Source: `shop_basket_items.product_id`. */
  product_id: number;

  /** Ordered variant id, or `null` for product-level orders. Source: nullable `shop_basket_items.variant_id`. */
  variant_id: number | null;

  /** Customer-filled product input form values. Source: nullable JSON `shop_basket_items.message`. */
  message: BasketItem.Message | null;

  /** Service/unit/valuation preferences. Source: nullable JSON `shop_basket_items.preferences`. */
  preferences: BasketItem.IPreferences | null;

  /** Ordered quantity. Source: `shop_basket_items.count`. */
  count: number;

  /** Unit price before item-level discount but after selected pricing source. */
  price: number;

  /** Item currency. Source: `shop_basket_items.currency`. */
  currency: keyof typeof Currency;

  /** Unit product discount. Source: `shop_basket_items.dis`. */
  dis: number;

  /** Applied offer id, or `null`. Source: nullable `shop_basket_items.offer_id`. */
  offer_id: number | null;

  /** Number of units affected by the smart offer. */
  offer_count: number;

  /** Total smart-offer discount amount; deducted from `count * price`. */
  offer_amount: number;

  /** Cross-selling discount amount. Source: `shop_basket_items.cross_dis`. */
  cross_dis: number;

  /** Calculated item tax payload. Source: nullable JSON `shop_basket_items.tax`. */
  tax: BasketItem.Tax | null;

  /** Drop-shipping fulfillment id, or `null` for local fulfillment. */
  fulfillment_id: number | null;

  /** Item validation/check flag cast by backend. */
  check?: boolean;

  /** Quantity adjustment used by backend reconciliation flows. */
  count_adjustment?: number | null;

  /** Creation timestamp. Source: `shop_basket_items.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `shop_basket_items.updated_at`. */
  updated_at?: string | null;

  // Relations
  basket?: BasketItem.JsonObject | null;
  product?: Partial<Product> | null;
  variant?: Partial<ProductVariant> | null;
  returnRequest?: Partial<BasketItemReturn> | null;
  return_request?: Partial<BasketItemReturn> | null;
  offer?: Partial<Offer> | null;
  virtualItems?: Partial<VirtualItem>[];
  virtual_items?: Partial<VirtualItem>[];
  serviceItem?: Partial<ServiceItem> | null;
  service_item?: Partial<ServiceItem> | null;
  fulfillment?: Partial<Fulfillment> | null;
  files?: BasketItem.JsonObject[] | null;

  // Vendor
  vendor_id?: number | null;
  vendor_product_id?: number | null;
  vendor_price?: number | null;
  vendor?: BasketItem.JsonObject | null;
  vendorProduct?: Partial<VendorProduct> | null;
  vendor_product?: Partial<VendorProduct> | null;

  // Connect
  connect_id?: number | null;
  connect?: Connect | null;

  // Subscription
  subscription_price_id?: number | null;
  subscriptionPrice?: Partial<SubscriptionPrice> | null;
  subscription_price?: Partial<SubscriptionPrice> | null;

  // Extra pricing
  extra_pricing_id?: number | null;
  extraPricing?: Partial<ExtraPricing> | null;
  extra_pricing?: Partial<ExtraPricing> | null;
}

export namespace BasketItem {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by Laravel JSON casts. Uses an interface to avoid circular alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by Laravel JSON casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Customer product input values keyed by input name. */
  export type Message = JsonObject;

  /** Tax payload produced by `TaxableItemTrait`. */
  export interface Tax extends JsonObject {
    amount?: number;
    shipping?: number;
    included?: boolean;
  }

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

    [key: string]: JsonValue | undefined;
  }

  /** Editable item payload used before backend recalculates price, discount, offer, and tax columns. */
  export interface Upsert {
    product_id: number;
    variant_id?: number | null;
    message?: Message | null;
    preferences?: IPreferences | null;
    count: number;
    vendor_id?: number | null;
    vendor_product_id?: number | null;
    connect_id?: number | null;
    subscription_price_id?: number | null;
    extra_pricing_id?: number | null;
  }

  /** Uploaded/customer attachment row returned by basket item file relations. */
  export interface File extends JsonObject {
    id?: number;
    item_id?: number;
    path?: string | null;
    name?: string | null;
    size?: number | null;
    mime?: string | null;
  }
}
