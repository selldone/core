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

import type { GiftCardType } from "../gift-card/gift-card-type.model";
import type { Product } from "../../product/product.model";
import type { ProductVariant } from "../../product/product_variant.model";

/**
 * Lottery prize definition used by shop lottery/admin and XAPI lottery endpoints.
 *
 * Backend source: `App\Shop\Lottery\Lottery`, table `shop_lotteries`.
 * Admin controller `LotteryController` returns full rows with optional `product`, `variant`, and `card_type` relations;
 * XAPI lottery endpoints hide internal counters and club flags from public customer responses.
 */
export interface Lottery {
  /** Lottery id. Source: `shop_lotteries.id`. */
  id: number;

  /** Owning shop id. Source: `shop_lotteries.shop_id`. */
  shop_id: number;

  /** Whether this prize is active. Source: `shop_lotteries.enable`. */
  enable: boolean;

  /** Remaining ticket inventory. Source: `shop_lotteries.quantity`; hidden in public XAPI responses. */
  quantity?: number;

  /** Number of winning tickets already issued. Source: `shop_lotteries.win`; hidden in public XAPI responses. */
  win?: number;

  /** Number of prizes used/redeemed. Source: `shop_lotteries.used`; hidden in public XAPI responses. */
  used?: number;

  /** Prize title. Source: `shop_lotteries.title`, max 64 chars. */
  title: string;

  /** Prize description. Source: `shop_lotteries.description`, max 256 chars; edit controller accepts nullable. */
  description: string | null;

  /** Ticket/prize color. Source: `shop_lotteries.color`, usually a hex color. */
  color: string;

  /** Image path uploaded to `shops/{shop_id}/lottery`, or `null`. Source: nullable `shop_lotteries.image`. */
  image: string | null;

  /** Win chance as an integer percent-like weight `0..100`. Source: `shop_lotteries.chance`. */
  chance: number;

  /** Whether first-time players can play this prize without chips. Source: `shop_lotteries.free_for_first`. */
  free_for_first: boolean;

  /** Eligible for customers without a club badge; hidden in public XAPI responses. */
  no_club?: boolean;

  /** Eligible for bronze club customers; hidden in public XAPI responses. */
  bronze_club?: boolean;

  /** Eligible for silver club customers; hidden in public XAPI responses. */
  silver_club?: boolean;

  /** Eligible for gold club customers; hidden in public XAPI responses. */
  gold_club?: boolean;

  /** Eligible for platinum club customers; hidden in public XAPI responses. */
  platinum_club?: boolean;

  /** Eligible for diamond club customers; hidden in public XAPI responses. */
  diamond_club?: boolean;

  /** Fixed prize amount in `currency`; set to `0` when prize mode is discount/product/gift card. */
  amount: number;

  /** ISO currency code from backend `Currency::GetCurrenciesList()`. Source: `shop_lotteries.currency`. */
  currency: string;

  /** Prize discount percentage; set to `0` unless prize mode is discount. Source: `shop_lotteries.discount`. */
  discount: number;

  /** Maximum discount amount in `currency`; `0` means unlimited/no discount cap. Source: `shop_lotteries.discount_limit`. */
  discount_limit: number;

  /** Prize product id, or `null` unless prize mode is product. Source: nullable `shop_lotteries.product_id`. */
  product_id: number | null;

  /** Prize product variant id, or `null` for product-level prizes. Source: nullable `shop_lotteries.variant_id`. */
  variant_id: number | null;

  /** Prize gift card type id, or `null` unless prize mode is gift card. Source: nullable `shop_lotteries.card_type_id`. */
  card_type_id: number | null;

  /** Localized fields keyed by locale. Source: nullable JSON `shop_lotteries.translations`. */
  translations?: Lottery.Translations | null;

  /** Soft-delete timestamp. Present in admin/full responses. Source: `shop_lotteries.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Hidden in some XAPI prize responses. Source: `shop_lotteries.created_at`. */
  created_at?: string;

  /** Last update timestamp. Hidden in some XAPI prize responses. Source: `shop_lotteries.updated_at`. */
  updated_at?: string;

  /** Product relation when `Lottery::product()` is eager-loaded. */
  product?: Product | Pick<Product, "id" | "title" | "icon" | "type" | "quantity" | "variants"> | null;

  /** Variant relation when `Lottery::variant()` is eager-loaded. */
  variant?: ProductVariant | null;

  /** Gift card type relation from `Lottery::cardType()`, serialized as `card_type`. */
  card_type?: GiftCardType | Pick<GiftCardType, "id" | "color" | "bg" | "amount" | "currency" | "title" | "life"> | null;

  /** Lottery order rows when `Lottery::lotteryOrders()` is eager-loaded. */
  lottery_orders?: Record<string, unknown>[];

  /** Basket relation when lottery orders are eager-loaded. */
  baskets?: Record<string, unknown>[];
}

export namespace Lottery {
  /** Translation payload applied by `HasTranslationTrait`. */
  export type Translations = Record<string, Record<string, unknown>>;
}
