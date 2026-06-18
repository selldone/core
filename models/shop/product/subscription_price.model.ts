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

import { Currency } from "../../../enums/payment/Currency";

/**
 * Recurring subscription price attached to a subscription product.
 *
 * Backend source: `App\Storefront\Ribbon\SubscriptionPrice`, table `product_subscription_price`.
 * Controllers: `Shop\Ribbon\ShopRibbonProductsController` and subscription purchase controllers.
 *
 * Stripe-backed plans store third-party price metadata in `meta`. Basket items reference this row through
 * `shop_basket_items.subscription_price_id`.
 */
export interface SubscriptionPrice {
  /** Unique subscription price identifier. Source: `product_subscription_price.id`. */
  id: number;

  /** Owning shop id. Source: `product_subscription_price.shop_id`. */
  shop_id: number;

  /** Parent subscription product id. Source: `product_subscription_price.product_id`. */
  product_id: number;

  /** Last editor user id. Source: nullable `product_subscription_price.user_id`. */
  user_id: number | null;

  /** Whether this price can be selected by customers. Source: `product_subscription_price.enable`, default `false`. */
  enable: boolean;

  /** Public price title. Source: `product_subscription_price.title`, max 128 in controller validation. */
  title: string;

  /** Admin/internal description. Source: nullable `product_subscription_price.description`. */
  description?: string | null;

  /** Optional SKU for the subscription price. Source: nullable `product_subscription_price.sku`, max 64. */
  sku?: string | null;

  /** Recurring amount. Source: nullable `product_subscription_price.price`; controllers require a non-negative number on write. */
  price: number | null;

  /** Currency code. Source: `product_subscription_price.currency`. */
  currency: keyof typeof Currency;

  /** Billing period. Source enum: `App\Shop\Ribbon\enums\BillingPeriod`. */
  period: SubscriptionPrice.BillingPeriod;

  /** Gateway code for a gateway that supports subscription payments. Source: `product_subscription_price.gateway_code`. */
  gateway_code: string;

  /** Last status/info returned by third-party subscription provider. Source: nullable JSONB `product_subscription_price.info`. */
  info?: SubscriptionPrice.JsonObject | null;

  /** Private provider metadata such as Stripe price id and live mode. Source: nullable JSONB `product_subscription_price.meta`. */
  meta?: SubscriptionPrice.Meta | null;

  /** Soft-delete timestamp when returned. Source: nullable `product_subscription_price.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp serialized by Laravel when included. Source: `product_subscription_price.created_at`. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel when included. Source: `product_subscription_price.updated_at`. */
  updated_at?: string | null;

  /** Shop relation when eager-loaded. Source: `SubscriptionPrice::shop()` serialized as `shop`. */
  shop?: Record<string, unknown> | null;

  /** Product relation when eager-loaded. Source: `SubscriptionPrice::product()` serialized as `product`. */
  product?: Record<string, unknown> | null;

  /** User relation when eager-loaded. Source: `SubscriptionPrice::user()` serialized as `user`. */
  user?: Record<string, unknown> | null;
}

export namespace SubscriptionPrice {
  export type BillingPeriod = "Daily" | "Weekly" | "Monthly" | "Every3Months" | "Every6Months" | "Yearly";

  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by Laravel JSONB casts. Uses an interface to avoid circular alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by Laravel JSONB casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Provider metadata stored in `meta`. */
  export interface Meta extends JsonObject {
    /** Third-party price id. Backend constant: `META_ID = "id"`. */
    id?: string | null;

    /** Third-party live-mode flag. Backend constant: `META_LIVE_MODE = "livemode"`. */
    livemode?: boolean | null;
  }

  /** Payload accepted when creating a subscription price before backend assigns ids/timestamps/provider metadata. */
  export interface Create {
    /** Parent subscription product id. */
    product_id: number;

    /** Whether this price is selectable by customers. */
    enable: boolean;

    /** Public price title. */
    title: string;

    /** Optional admin/internal description. */
    description?: string | null;

    /** Optional SKU for this subscription price. */
    sku?: string | null;

    /** Recurring amount. */
    price: number;

    /** Currency code accepted by backend currency enum. */
    currency: keyof typeof Currency;

    /** Billing period accepted by backend `BillingPeriod::All`. */
    period: BillingPeriod;

    /** Gateway code for a gateway that supports subscription payments. */
    gateway_code: string;
  }
}
