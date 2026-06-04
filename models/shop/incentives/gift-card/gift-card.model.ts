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

import type { GiftCardType } from "./gift-card-type.model";

/**
 * Individual issued or unissued shop gift card.
 *
 * Backend source: `App\Shop\GiftCard\GiftCard`, table `shop_gift_cards`.
 * Admin controllers may return full records, while storefront list endpoints select a smaller public subset and
 * include the `gift_type` relation with `id,title,color,bg`.
 */
export interface GiftCard {
  /** Gift card id. Source: `shop_gift_cards.id`. */
  id: number;

  /** Gift card type id. Source: `shop_gift_cards.type_id`. */
  type_id: number;

  /** Owning shop id. Source: `shop_gift_cards.shop_id`. */
  shop_id: number;

  /** Linked virtual item id when this card is represented as a virtual product. Source: nullable `shop_gift_cards.vitem_id`. */
  vitem_id?: number | null;

  /** Owner user id, or `null` for unissued cards. Source: nullable `shop_gift_cards.user_id`. */
  user_id: number | null;

  /** Owner shop-customer id, or `null` for unissued/guest/removed customers. Source: nullable `shop_gift_cards.customer_id`. */
  customer_id?: number | null;

  /** 16-digit card number, unique per shop. Source: `shop_gift_cards.number`. */
  number: string;

  /** 4-character CVV. Source: `shop_gift_cards.cvv`; omitted by some storefront list projections. */
  cvv?: string;

  /** Spendable balance in `currency`. Source: `shop_gift_cards.balance`. */
  balance: number;

  /** Locked balance reserved by pending payments. Source: `shop_gift_cards.lock`. */
  lock?: number;

  /** Amount already paid by this card. Source: `shop_gift_cards.payed`. */
  payed: number;

  /** ISO currency code from backend `Currency::GetCurrenciesList()`. Source: `shop_gift_cards.currency`. */
  currency: string;

  /** Display title, often copied from type/prize. Source: nullable `shop_gift_cards.title`. */
  title: string | null;

  /** Expiration timestamp, or `null` when no expiration is set. Source: nullable `shop_gift_cards.expire_at`. */
  expire_at: string | null;

  /** Whether card can be used/claimed. Source: `shop_gift_cards.enable`. */
  enable: boolean;

  /** Admin note shown to the user. Source: nullable `shop_gift_cards.note`. */
  note: string | null;

  /** Creation timestamp. Source: `shop_gift_cards.created_at`; omitted by storefront list projections. */
  created_at?: string;

  /** Last update timestamp. Source: `shop_gift_cards.updated_at`. */
  updated_at?: string;

  /** Soft-delete timestamp. Source: `shop_gift_cards.deleted_at`. */
  deleted_at?: string | null;

  /** Gift card type relation from `GiftCard::giftType()`, serialized by Laravel as `gift_type`. */
  gift_type?: Pick<GiftCardType, "id" | "title" | "color" | "bg"> | GiftCardType;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown>;

  /** Linked virtual item relation when eager-loaded. */
  vitem?: Record<string, unknown> | null;

  /** Owner user relation when eager-loaded. */
  user?: Record<string, unknown> | null;

  /** Owner shop-customer relation when eager-loaded. */
  customer?: Record<string, unknown> | null;

  /** Payment/order pivot rows from `GiftCard::giftCardOrders()` when eager-loaded. */
  gift_card_orders?: Record<string, unknown>[];

  /** Basket relation when gift-card orders are eager-loaded. */
  baskets?: Record<string, unknown>[];
}
