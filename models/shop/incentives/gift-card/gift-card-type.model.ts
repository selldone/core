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

import type { Product } from "../../product/product.model";

/**
 * Gift card product/type definition.
 *
 * Backend source: `App\Shop\GiftCard\GiftCardType`, table `shop_gift_card_types`.
 * `GiftCardTypesController` manages create/edit/list/info, background uploads, and optional virtual-product linking.
 */
export interface GiftCardType {
  /** Gift card type id. Source: `shop_gift_card_types.id`. */
  id: number;

  /** Owning shop id. Source: `shop_gift_card_types.shop_id`. */
  shop_id: number;

  /** Linked virtual product id, or `null` when this card type is not sold as a virtual product. */
  product_id?: number | null;

  /** Optional cluster grouping id. Source: nullable `shop_gift_card_types.cluster_id`. */
  cluster_id?: number | null;

  /** Card accent color. Source: `shop_gift_card_types.color`, usually a hex color. */
  color: string;

  /** Background image path uploaded to `shops/{shop_id}/gift`, or `null`. Source: nullable `shop_gift_card_types.bg`. */
  bg: string | null;

  /** Initial card balance in `currency`. Source: `shop_gift_card_types.amount`. */
  amount: number;

  /** ISO currency code from backend `Currency::GetCurrenciesList()`. Source: `shop_gift_card_types.currency`. */
  currency: string;

  /** Display title. Source: nullable `shop_gift_card_types.title`; create/edit controllers require a title. */
  title: string | null;

  /** Initial lifetime in months. Source: nullable `shop_gift_card_types.life`; controllers require a positive integer. */
  life: number | null;

  /** Total number of cards generated for this type. Source: `shop_gift_card_types.count`. */
  count: number;

  /** Number of cards issued/used from this type. Source: `shop_gift_card_types.used`. */
  used: number;

  /** Total amount paid by cards of this type. Source: `shop_gift_card_types.amount_payed`. */
  amount_payed: number;

  /** Team notes stored as JSON. Source: nullable `shop_gift_card_types.note`. */
  note: GiftCardType.Note[] | null;

  /** Localized fields keyed by locale. Source: nullable JSON `shop_gift_card_types.translations`. */
  translations?: GiftCardType.Translations | null;

  /** Soft-delete timestamp. Present in full Eloquent responses. Source: `shop_gift_card_types.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `shop_gift_card_types.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `shop_gift_card_types.updated_at`. */
  updated_at?: string | null;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown> | null;

  /** Linked virtual product relation when `GiftCardType::product()` is eager-loaded. */
  product?: Pick<Product, "id" | "title" | "icon" | "type" | "quantity"> | Product | null;

  /** Generated cards relation when `GiftCardType::giftCards()` is eager-loaded. */
  gift_cards?: Record<string, unknown>[];

  /** Gift-card order relation when eager-loaded through `GiftCardType::giftCardOrders()`. */
  gift_card_orders?: GiftCardType.Order[];

  /** Daily aggregate rows from `GiftCardType::data()` when eager-loaded. */
  data?: GiftCardType.Data[];

  /** Cluster relation when loaded by callers. */
  cluster?: Record<string, unknown> | null;
}

export namespace GiftCardType {
  /** Team note object stored in nullable JSON `shop_gift_card_types.note`. */
  export interface Note {
    user_id: number;
    user_name: string;
    body: string;
    date: string;
  }

  /** Daily aggregate row from table `gift_card_data`. */
  export interface Data {
    id: number;
    type_id: number;
    added: number;
    used: number;
    amount_payed: number;
    buys: number;
    created_at?: string | null;
    updated_at?: string | null;
  }

  /** Payment/order row from table `gift_cards_orders`. */
  export interface Order {
    id: number;
    gift_id: number;
    order_id: number;
    order_type: string;
    amount: number;
    wage: number;
    created_at?: string | null;
    updated_at?: string | null;
  }

  /** Translation payload applied by `HasTranslationTrait`. */
  export type Translations = Record<string, Record<string, unknown>>;
}
