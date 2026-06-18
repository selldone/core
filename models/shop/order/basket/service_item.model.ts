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

import { Currency } from "../../../../enums/payment/Currency";
import type { Product } from "../../product/product.model";
import type { Basket } from "./basket.model";
import type { BasketItem } from "./basket_item.model";

/**
 * Reserved or delivered service-order item stored in `shop_sitems`.
 *
 * Backend source: `App\Storefront\Product\service\ServiceItem`, table `shop_sitems`.
 * The backend creates/updates this row from basket items for service products and casts `tasks`,
 * `reserved_at`, `start_at`, and `end_at`.
 */
export interface ServiceItem {
  /** Service item id. Source: `shop_sitems.id`. */
  id: number;

  /** Owning shop id. Source: `shop_sitems.shop_id`. */
  shop_id: number;

  /** Service product id. Source: `shop_sitems.product_id`. */
  product_id: number;

  /** Parent basket id. Source: `shop_sitems.basket_id`. */
  basket_id: number;

  /** Basket item id; unique in the service table. Source: `shop_sitems.item_id`. */
  item_id: number;

  /** Shop officer assigned to this service. Source: `shop_sitems.officer_id`. */
  officer_id: number;

  /** Buyer user id, or `null` for guest/service flows without a linked user. */
  user_id: number | null;

  /** Service price. Source: `shop_sitems.price`. */
  price: number;

  /** Service currency. Source: `shop_sitems.currency`. */
  currency: keyof typeof Currency;

  /** Service type enum value, or `null` for custom services. */
  type: ServiceItem.TypeCode | null;

  /** Service task checklist / schedule payload. Source: nullable JSON `shop_sitems.tasks`. */
  tasks: ServiceItem.Task[] | ServiceItem.JsonObject | null;

  /** Reservation timestamp, usually appointment reservation date. */
  reserved_at: string | null;

  /** Service start timestamp. */
  start_at: string | null;

  /** Service end timestamp. */
  end_at: string | null;

  /** Remaining subscription days/units for service subscriptions. */
  subscription: number;

  /** Remaining charge balance for charge-based service products. */
  charge: number;

  /** Soft-delete timestamp. */
  deleted_at?: string | null;

  /** Creation timestamp serialized by Laravel. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. */
  updated_at?: string | null;

  /** Owning shop relation when eager-loaded. */
  shop?: ServiceItem.JsonObject | null;

  /** Service product relation when eager-loaded. */
  product?: Partial<Product> | null;

  /** Parent basket relation when eager-loaded. */
  basket?: Partial<Basket> | null;

  /** Parent basket item relation when eager-loaded. */
  basketItem?: Partial<BasketItem> | null;

  /** Parent basket item relation in Laravel snake_case serialization. */
  basket_item?: Partial<BasketItem> | null;

  /** Assigned officer relation when eager-loaded. */
  officer?: ServiceItem.JsonObject | null;

  /** Buyer user relation when eager-loaded. */
  user?: ServiceItem.JsonObject | null;
}

export namespace ServiceItem {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by Laravel JSON casts. Uses an interface to avoid circular alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by Laravel JSON casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Backend service type code; `null` represents a custom service. */
  export type TypeCode = string;

  /** Single service task item stored inside `shop_sitems.tasks`. */
  export interface Task extends JsonObject {
    title?: string | null;
    description?: string | null;
    done?: boolean;
    at?: string | null;
  }

  /** Payload accepted by service assignment/update flows before backend sets ids/timestamps. */
  export interface Upsert {
    product_id: number;
    basket_id: number;
    item_id: number;
    officer_id?: number | null;
    user_id?: number | null;
    price: number;
    currency: keyof typeof Currency;
    type?: TypeCode | null;
    tasks?: Task[] | JsonObject | null;
    reserved_at?: string | null;
    start_at?: string | null;
    end_at?: string | null;
    subscription?: number;
    charge?: number;
  }
}
