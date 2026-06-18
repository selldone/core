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
import type { ProductVariant } from "../../product/product_variant.model";
import type { Basket } from "./basket.model";
import type { BasketItem } from "./basket_item.model";

/**
 * Individual virtual product inventory item stored in `shop_vitems`.
 *
 * Backend source: `App\Storefront\Product\virtual\VirtualItem`, table `shop_vitems`.
 * The backend keeps secure delivery data in `data`, reserves items by assigning `item_id` and `user_id`,
 * and casts `data` plus `reserved_at`.
 */
export interface VirtualItem {
  /** Virtual item id. Source: `shop_vitems.id`. */
  id: number;

  /** Product id. Source: `shop_vitems.product_id`. */
  product_id: number;

  /** Variant id for variant-specific virtual stock, or `null`. */
  variant_id: number | null;

  /** Basket item id this virtual item is reserved for, or `null` while open stock. */
  item_id: number | null;

  /** Officer/user who created or owns this virtual item. */
  officer_id: number;

  /** Buyer user id after reservation/payment, or `null` while open stock. */
  user_id: number | null;

  /** Virtual item order status. Source: `shop_vitems.status`. */
  status: VirtualItem.StatusCode;

  /** Secure virtual item payload. Source: JSON-cast text column `shop_vitems.data`. */
  data: VirtualItem.Data | VirtualItem.JsonArray | string | null;

  /** Reservation timestamp set when this item is assigned to a basket item. */
  reserved_at: string | null;

  /** Soft-delete timestamp. */
  deleted_at?: string | null;

  /** Creation timestamp serialized by Laravel. */
  created_at?: string | null;

  /** Last update timestamp serialized by Laravel. */
  updated_at?: string | null;

  /** Officer relation when eager-loaded. */
  officer?: VirtualItem.JsonObject | null;

  /** Basket item relation when eager-loaded. */
  basketItem?: Partial<BasketItem> | null;

  /** Basket item relation in Laravel snake_case serialization. */
  basket_item?: Partial<BasketItem> | null;

  /** Basket relation resolved through the basket item. */
  basket?: Partial<Basket> | null;

  /** Buyer user relation when eager-loaded. */
  user?: VirtualItem.JsonObject | null;

  /** Product relation when eager-loaded. */
  product?: Partial<Product> | null;

  /** Optional variant projection supplied by some API resources. */
  variant?: Partial<ProductVariant> | null;

  /** Gateway transaction morph relation when eager-loaded by payment APIs. */
  gateway_transaction?: VirtualItem.JsonObject | null;
}

export namespace VirtualItem {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by Laravel JSON casts. Uses an interface to avoid circular alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by Laravel JSON casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Order status values allowed by the `shop_vitems.status` enum. */
  export type StatusCode = "Open" | "Reserved" | "Payed" | "Canceled" | string;

  /** Secure virtual item data delivered to the buyer after payment/reservation. */
  export interface Data extends JsonObject {
    code?: string | null;
    serial?: string | null;
    license?: string | null;
    username?: string | null;
    password?: string | null;
    url?: string | null;
    note?: string | null;
  }

  /** Payload accepted when creating virtual stock before backend assigns ids/timestamps. */
  export interface Create {
    product_id: number;
    variant_id?: number | null;
    officer_id?: number | null;
    data: Data | JsonArray | string;
  }

  /** Payload accepted when reserving an existing virtual item for a basket item. */
  export interface Reserve {
    item_id: number;
    user_id?: number | null;
    status?: StatusCode;
    reserved_at?: string | null;
  }
}
