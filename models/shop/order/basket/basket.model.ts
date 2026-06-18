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
import { Product } from "../../product/product.model";
import type { BasketItem } from "./basket_item.model";
import { Order } from "../order";
import openImage from "./assets/basket-open.svg";
import reserveImage from "./assets/basket-reserve.svg";
import payedImage from "./assets/basket-payed.svg";
import canceledImage from "./assets/basket-canceled.svg";
import codImage from "./assets/basket-cod.svg";
import ProductType = Product.ProductType;
import { IBasketBill } from "./billing/basket.billing.model";

/**
 * Customer order / cart row stored in `shop_basket`.
 *
 * Backend source: `App\Storefront\Order\Basket\Basket`, table `shop_basket`.
 * The backend casts session, receiver/delivery/billing, chat, meta, and form as JSON and serializes date columns
 * as Laravel timestamps. Open guest baskets have `user_id = null`, `customer_id = null`, and a guest `code`.
 */
export interface Basket extends Order.IOrder {
  /** Basket id. Source: `shop_basket.id`. */
  id: number;

  /** Owning shop id. Source: `shop_basket.shop_id`. */
  shop_id: number;

  /** Buyer user id, or `null` for guest baskets. Source: nullable `shop_basket.user_id`. */
  user_id: number | null;

  /** Shop customer id, or `null` until customer row is created. Source: nullable `shop_basket.customer_id`. */
  customer_id: number | null;

  /** Guest basket code. Source: nullable `shop_basket.code`. */
  code: string | null;

  /** Product type of this basket. Source: `shop_basket.type`. */
  type: keyof typeof ProductType;

  /** Basket stack/channel: online store, affiliate POS, or subscription auto order. */
  stack: Basket.StackCode;

  /** Order status. Source: `shop_basket.status`. */
  status: keyof typeof Basket.Status;

  /** Rejection reason code when canceled/rejected. Source: nullable `shop_basket.reject`. */
  reject: keyof typeof Order.RejectReasons | null;

  /** Rejection timestamp. Source: nullable `shop_basket.reject_at`. */
  reject_at: string | null;

  /** Receiver address/contact JSON. Source: nullable JSON `shop_basket.receiver_info`. */
  receiver_info: Order.IReceiverInfo | null;

  /** Delivery/shipping JSON. Source: nullable JSON `shop_basket.delivery_info`. */
  delivery_info: Order.IDeliveryInfo | null;

  /** Billing snapshot JSON. Source: nullable JSON `shop_basket.billing`. */
  billing: Order.IBilling | null;

  /** Reservation timestamp. Source: nullable `shop_basket.reserved_at`. */
  reserved_at: string | null;

  /** Products subtotal before delivery. Source: `shop_basket.price`. */
  price: number;

  /** Basket currency. Source: `shop_basket.currency`. */
  currency: keyof typeof Currency;

  /** Delivery/shipping price. Source: `shop_basket.delivery_price`. */
  delivery_price: number;

  /** Total order discount. Source: `shop_basket.discount`. */
  discount: number;

  /** Products tax amount. Source: `shop_basket.tax`. */
  tax: number;

  /** Shipping tax amount. Source: `shop_basket.tax_shipping`. */
  tax_shipping: number;

  /** Whether tax is included in listed prices. Source: `shop_basket.tax_included` boolean cast. */
  tax_included: boolean;

  /** Delivery lifecycle state. Source: `shop_basket.delivery_state`. */
  delivery_state: Order.DeliveryStateCode;

  /** Delivery timestamp. Source: nullable `shop_basket.delivery_at`. */
  delivery_at: string | null;

  /** Payment driver/type, or `null` before payment. Source: nullable `shop_basket.payment_type`. */
  payment_type: string | null;

  /** Payment record id, or `null` before payment. Source: nullable `shop_basket.payment_id`. */
  payment_id: number | null;

  /** Client/session attribution JSON. Source: nullable JSON `shop_basket.session`. */
  session: Basket.Session | null;

  /** Marketing/social channel attribution. Source: nullable `shop_basket.channel`. */
  channel: string | null;

  /** Applied discount-code id. Source: nullable `shop_basket.discount_id`. */
  discount_id: number | null;

  /** Applied coupon id. Source: nullable `shop_basket.coupon_id`. */
  coupon_id: number | null;

  /** Applied lottery id. Source: nullable `shop_basket.lottery_id`. */
  lottery_id: number | null;

  /** Campaign link id. Source: nullable `shop_basket.link_id`. */
  link_id: number | null;

  /** Affiliate id. Source: nullable `shop_basket.affiliate_id`. */
  affiliate_id: number | null;

  /** Shop email id. Source: nullable `shop_basket.email_id`. */
  email_id: number | null;

  /** Seller/buyer chat history. Source: nullable JSON `shop_basket.chat`. */
  chat: Basket.JsonArray | Basket.JsonObject | null;

  /** Private integration metadata. Source: nullable JSON `shop_basket.meta`. */
  meta: Basket.Meta | null;

  /** Subscription id for subscription-generated baskets. Source: nullable `shop_basket.subscription_id`. */
  subscription_id: number | null;

  /** Soft-delete timestamp. Source: `shop_basket.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `shop_basket.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `shop_basket.updated_at`. */
  updated_at?: string | null;

  /** Custom checkout form payload. Source: nullable JSON `shop_basket.form`. */
  form?: Basket.JsonObject | null;

  /** Guest email captured for guest checkout. Source: nullable `shop_basket.guest_email`. */
  guest_email?: string | null;

  /** Basket language code. Source: nullable `shop_basket.language`. */
  language?: string | null;

  /** Human/order label generated by backend. */
  label?: string | null;

  /** Basket items relation when `items()` is eager-loaded. */
  items?: BasketItem[];

  /** Discount-code relation when eager-loaded. */
  discount_code?: Basket.JsonObject | null;

  /** Coupon relation when eager-loaded. */
  coupon?: Basket.JsonObject | null;

  /** Lottery relation when eager-loaded. */
  lottery?: Basket.JsonObject | null;

  /** Customer relation when eager-loaded. */
  customer?: Basket.JsonObject | null;

  /** Transportation order relation when eager-loaded. */
  transportation_order?: Basket.JsonObject | null;

  /** Vendor order relations for marketplace baskets when eager-loaded. */
  vendor_orders?: Basket.JsonObject[] | null;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace Basket {
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by Laravel JSON casts. Uses an interface to avoid circular alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by Laravel JSON casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Basket stack values used by `Basket::GetOpenBasket`. */
  export type StackCode = 0 | 1 | 2 | number;

  /** Client/session attribution payload stored in `shop_basket.session`. */
  export interface Session extends JsonObject {
    ip?: string | null;
    lat?: number | null;
    lon?: number | null;
    country?: string | null;
    country_code?: string | null;
    os?: string | null;
    browser?: string | null;
    device?: string | null;
  }

  /** Private basket metadata. */
  export interface Meta extends JsonObject {
    stripe_subscription_id?: string | null;
    subscription_period?: string | null;
    subscription_payment_at?: string | null;
  }

  /**
   * Represents a calculated bill, which is transient and not saved in the database.
   */
  export type ICalculatedBill = IBasketBill;


  /**
   * Interface representing the structure of each Basket Status.
   */
  interface IStatus {
    /** The unique code associated with the status */
    code: string;

    /** The title for the status, typically a localization key */
    title: string;

    /** The Material Design icon name for the status */
    icon: string;

    /** The path to the SVG asset for the status, loaded dynamically */
    src: string;

    /** The color representation for the status, can be a hex code or a string representation like 'red', 'blue' etc. */
    color: string;
  }

  /**
   * Enumerates various statuses a basket can be in, with associated metadata for each status.
   *
   * - `Open`: The basket is open for adding or removing items.
   * - `Reserved`: Items in the basket are reserved but not yet paid for.
   * - `Payed`: The items in the basket have been paid for.
   * - `Canceled`: The basket was canceled by the user or the system.
   * - `COD`: Represents Cash-On-Delivery, the basket is to be paid for upon delivery.
   */
  export const Status: Record<
    "Open" | "Reserved" | "Payed" | "Canceled" | "COD",
    IStatus
  > = {
    Open: {
      code: "Open",
      title: "global.basket_status.open",
      icon: "system_update_alt",
      src: openImage,
      color: "#888",
    },
    Reserved: {
      code: "Reserved",
      title: "global.basket_status.reserved",
      icon: "pause_presentation",
      src: reserveImage,
      color: "amber",
    },
    Payed: {
      code: "Payed",
      title: "global.basket_status.paid",
      icon: "payment",
      src: payedImage,
      color: "green",
    },
    Canceled: {
      code: "Canceled",
      title: "global.basket_status.canceled",
      icon: "cancel_presentation",
      src: canceledImage,
      color: "red",
    },
    COD: {
      code: "COD",
      title: "global.basket_status.cod",
      icon: "local_atm",
      src: codImage,
      color: "blue",
    },
  };

  /**
   * Enumerates the possible states of a physical order and their associated metadata.
   *
   * These states provide an overview of the lifecycle of an order, from its initial
   * placement to its delivery to the customer. By using this structure, systems can
   * easily track, display, and manage the progression of an order.
   */
  export const PhysicalOrderStates: Record<
    Order.DeliveryStateCode,
    Order.IOrderState
  > = {
    CheckQueue: {
      code: "CheckQueue",
      name: "global.delivery_state.check_queue",
      icon: "fa:fas fa-shopping-basket",
    },
    OrderConfirm: {
      code: "OrderConfirm",
      name: "global.delivery_state.order_confirm",
      icon: "fa:fas fa-check",
    },
    PreparingOrder: {
      code: "PreparingOrder",
      name: "global.delivery_state.preparing_order",
      icon: "fa:fas fa-box-open",
    },
    SentOrder: {
      code: "SentOrder",
      name: "global.delivery_state.sent_order",
      icon: "fa:fas fa-shipping-fast",
    },
    ToCustomer: {
      code: "ToCustomer",
      name: "global.delivery_state.to_customer",
      icon: "fa:fas fa-check-double",
    },
  };

  /**
   * Defines the various states that a file order can be in.
   */
  export const FileOrderStates: Record<
    Order.DeliveryStateCode.PreparingOrder | Order.DeliveryStateCode.ToCustomer,
    Order.IOrderState
  > = {
    PreparingOrder: {
      code: "PreparingOrder",
      name: "global.delivery_state.preparing_order",
      icon: "link",
    },
    ToCustomer: {
      code: "ToCustomer",
      name: "global.delivery_state.to_customer",
      icon: "cloud_download",
    },
  };


  /**
   * Defines the various states that a service order can be in.
   */
  export const ServiceOrderStates: Record<
      | Order.DeliveryStateCode.CheckQueue
      | Order.DeliveryStateCode.OrderConfirm
      | Order.DeliveryStateCode.PreparingOrder
      | Order.DeliveryStateCode.ToCustomer,
      Order.IOrderState
  > = {
    CheckQueue: {
      code: "CheckQueue",
      name: "global.delivery_state.check_queue",
      icon: "fa:fas fa-shopping-basket", // must be font awesome! use as class!
    },
    OrderConfirm: {
      code: "OrderConfirm",
      name: "global.delivery_state.order_confirm",
      icon: "fa:fas fa-check",
    },
    PreparingOrder: {
      code: "PreparingOrder",
      name: "global.delivery_state.preparing_order",
      icon: "fa:fas fa-tasks",
    },
    ToCustomer: {
      code: "ToCustomer",
      name: "global.delivery_state.to_customer",
      icon: "fa:fas fa-check-double",
    },
  };



  /**
   * Defines the various states that a subscription order can be in.
   */
  export const SubscriptionOrderStates: Record<
      Order.DeliveryStateCode,
      Order.IOrderState
  > = {
    CheckQueue: {
      code: "CheckQueue",
      name: "global.delivery_state.check_queue",
      icon: "fa:fas fa-shopping-basket",
    },
    OrderConfirm: {
      code: "OrderConfirm",
      name: "global.delivery_state.order_confirm",
      icon: "fa:fas fa-check",
    },
    PreparingOrder: {
      code: "PreparingOrder",
      name: "global.delivery_state.preparing_order",
      icon: "fa:fas fa-box-open",
    },
    SentOrder: {
      code: "SentOrder",
      name: "global.delivery_state.sent_order",
      icon: "fa:fas fa-shipping-fast",
    },
    ToCustomer: {
      code: "ToCustomer",
      name: "global.delivery_state.to_customer",
      icon: "fa:fas fa-check-double",
    },
  };

  /**
   * Defines the various states that a virtual order can be in.
   */
  export const VirtualOrderStates: Record<
      | Order.DeliveryStateCode.CheckQueue
      | Order.DeliveryStateCode.OrderConfirm
      | Order.DeliveryStateCode.PreparingOrder
      | Order.DeliveryStateCode.ToCustomer,
      Order.IOrderState
  > = {
    CheckQueue: {
      code: "CheckQueue",
      name: "global.delivery_state.check_queue",
      icon: "fa:fas fa-shopping-basket",
    },
    OrderConfirm: {
      code: "OrderConfirm",
      name: "global.delivery_state.order_confirm",
      icon: "fa:fas fa-check",
    },
    PreparingOrder: {
      code: "PreparingOrder",
      name: "global.delivery_state.preparing_order",
      icon: "fa:fas fa-laptop",
    },
    ToCustomer: {
      code: "ToCustomer",
      name: "global.delivery_state.to_customer",
      icon: "fa:fas fa-check-double",
    },
  };





}
