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
import type { IAddress } from "../../../traits/address.model";
import type { IOrder } from "../../../traits/order.model";
import { Product } from "../../product/product.model";
import ProductType = Product.ProductType;
import { DeliveryStateCode } from "../../../../enums/delivery/DeliveryStateCode";
import type {BasketItem} from "./basket_item.model";

export interface Basket extends IOrder {
  id: number;
  shop_id: number;
  user_id: number;
  customer_id: number;
  code: any | null;
  type: keyof typeof ProductType;
  stack: number;
  status: string;
  reject: any | null;
  reject_at: any | null;
  receiver_info: Basket.IReceiverInfo | null;
  delivery_info: Basket.IDeliveryInfo | null;
  billing: Basket.IBilling | null;
  reserved_at: string | null;
  price: number;
  currency: keyof typeof Currency;
  delivery_price: number;
  discount: number;
  tax: number;
  tax_shipping: number;
  tax_included: boolean;
  delivery_state: DeliveryStateCode;
  delivery_at: any | null;
  payment_type: string;
  payment_id: any | null;
  session: any | null;
  channel: any | null;
  discount_id: any | null;
  coupon_id: any | null;
  lottery_id: any | null;
  link_id: any | null;
  affiliate_id: any | null;
  email_id: any | null;
  chat: any | null;
  meta: any | null;
  subscription_id: any | null;
  deleted_at: any | null;
  created_at: string;
  updated_at: string;
  items: BasketItem[]; // Could not deduce a type from the example
  discount_code: any | null;
  coupon: any | null;
  lottery: any | null;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Basket {
  export interface IBill {}
  export interface IReceiverInfo extends IAddress {}

  export interface IBilling extends IAddress {}

  export interface IDeliveryInfo {}
}
