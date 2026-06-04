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

import {Currency} from "../../../enums/payment/Currency";

/**
 * Recurring subscription price attached to a subscription product.
 *
 * Backend source: `App\Shop\Ribbon\SubscriptionPrice`, table `product_subscription_price`.
 * Controllers: `Shop\Ribbon\ShopRibbonProductsController` and subscription purchase controllers.
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

  /** Last status/info returned by third-party subscription provider. Source: nullable JSON `product_subscription_price.info`. */
  info?: Record<string, unknown> | null;

  /** Private provider metadata such as Stripe price id and live mode. Source: nullable JSON `product_subscription_price.meta`. */
  meta?: Record<string, unknown> | null;

  /** Soft-delete timestamp when returned. Source: nullable `product_subscription_price.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp serialized by Laravel when included. Source: `product_subscription_price.created_at`. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel when included. Source: `product_subscription_price.updated_at`. */
  updated_at?: string | null;

  /** Product relation when eager-loaded. Source: `SubscriptionPrice::product()` serialized as `product`. */
  product?: Record<string, unknown>;

  /** User relation when eager-loaded. Source: `SubscriptionPrice::user()` serialized as `user`. */
  user?: Record<string, unknown> | null;
}

export namespace SubscriptionPrice {
  export type BillingPeriod = "Daily" | "Weekly" | "Monthly" | "Every3Months" | "Every6Months" | "Yearly";
}