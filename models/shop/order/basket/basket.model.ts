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

import {Currency} from "../../../../enums/payment/Currency";
import {Product} from "../../product/product.model";
import type {BasketItem} from "./basket_item.model";
import {Order} from "../order";
import {Transportation} from "../../transportation";
import {Customer} from "../../customer";
import openImage from "./assets/basket-open.svg";
import reserveImage from "./assets/basket-reserve.svg";
import payedImage from "./assets/basket-payed.svg";
import canceledImage from "./assets/basket-canceled.svg";
import codImage from "./assets/basket-cod.svg";
import ProductType = Product.ProductType;

export interface Basket extends Order.IOrder {
  id: number;
  shop_id: number;
  user_id: number;
  customer_id: number;
  code: any | null;
  type: keyof typeof ProductType;
  stack: number;
  status: keyof typeof Basket.Status;
  reject: keyof typeof Order.RejectReasons | null;
  reject_at: any | null;
  receiver_info: Order.IReceiverInfo | null;
  delivery_info: Order.IDeliveryInfo | null;
  billing: Order.IBilling | null;
  reserved_at: string | null;
  price: number;
  currency: keyof typeof Currency;
  delivery_price: number;
  discount: number;
  tax: number;
  tax_shipping: number;
  tax_included: boolean;
  delivery_state: Order.DeliveryStateCode;
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
  /**
   * Represents a calculated bill, which is transient and not saved in the database.
   */
  export interface ICalculatedBill {
    /**
     * The order code.
     */
    order_code: string;

    /**
     * The ID of the order.
     */
    order_id: number;

    /**
     * The type of the order (e.g., physical, virtual, service, etc.).
     */
    order_type: string;

    /**
     * The customer information, including level, last login, and loyalty chips (if any).
     */
    customer: Partial<Customer> | null;

    /**
     * The currency of the order.
     */
    currency: string;

    /**
     * The total amount that the customer must pay, including taxes and shipping.
     */
    sum: number;

    /**
     * The base price of the order after all discounts.
     */
    price: number;

    /**
     * The total price of all items before any discounts, offers, or incentives.
     */
    items_price: number;

    /**
     * The total amount discounted from offers applied to the items.
     */
    offer: number;

    /**
     * The total discount applied directly to the items.
     */
    items_discount: number;

    /**
     * The total discount applied to the entire order (including items, offers, etc.).
     */
    discount: number;

    /**
     * The amount discounted by the customer club membership, if applicable.
     */
    club: number;

    /**
     * The amount discounted by applying a discount code, if applicable.
     */
    discount_code: number;

    /**
     * The amount discounted by a coupon, if applicable.
     */
    coupon: number;

    /**
     * The amount discounted by applying a lottery prize, if applicable.
     */
    lottery: number;

    /**
     * The total discount applied from cross-selling.
     */
    cross_selling_discount: number;

    /**
     * The total price for delivery (shipping).
     */
    delivery_price: number;

    /**
     * The method used to calculate the delivery price (Auto or Manual).
     */
    delivery_calculation: string;

    /**
     * The total tax applied to the order.
     */
    tax: number;

    /**
     * A boolean indicating whether tax is included in the item prices.
     */
    tax_included: boolean;

    /**
     * The amount of tax applied to the shipping cost.
     */
    tax_shipping: number;

    /**
     * The distance between the warehouse/vendor and the delivery address.
     */
    distance: number;

    /**
     * The total weight of the items in the order.
     */
    weight: number;

    /**
     * The total volume of the items in the order.
     */
    volume: number;



    /**
     * The list of available transportation methods.
     */
    transportations: Array<Transportation>;

    /**
     * The total additional shipping cost for drop-shipped items.
     */
    extra_shipping: number;

    /**
     * The number of drop-ship shops involved in the order.
     */
    extra_shipping_counts: number;

    /**
     * Indicates if there is custom delivery by the shop owner (direct from warehouse).
     */
    has_custom_delivery: boolean;

    /**
     * Indicates if there is vendor shipping directly from vendors in the marketplace.
     */
    has_vendors_delivery: boolean;

    /**
     * The list of user-facing messages related to the order (e.g., errors, warnings, etc.).
     */
    user_messages: string[];

    /**
     * The available shipping options provided by the shop.
     */
    store_shipping_options: StoreShippingOption[] | null;

    /**
     * The available shipping options provided by third-party connect services.
     */
    connect_shipping_options: ConnectShippingOption[] | null;

    /**
     * The available shipping options provided by vendors.
     */
    vendor_shipping_options: VendorShippingOption[] | null;

    /**
     * The total cost for shipping via third-party connect providers (e.g., Printful).
     */
    total_connect_shipping_cost: number;

    /**
     * A boolean indicating whether the user is allowed to proceed with the payment.
     */
    can_pay: boolean;

    /**
     * Can accept COD payment. It determines delivery and product type support COD or not!
     * (If any item shipped by connect providers then COD is not available!)
     * (If any item shipped by wholesalers then COD is not available!)
     */
    can_cod: boolean;
    /**
     * The required values for the order.
     */
    required_values: string[];
  }

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
