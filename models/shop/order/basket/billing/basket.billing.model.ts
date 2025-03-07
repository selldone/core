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

import {Warehouse} from "../../../warehouse/warehouse.model";
import {Customer} from "../../../customer";
import {Transportation} from "../../../transportation/transportation.model";

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

/**
 * Represents a calculated bill, which is transient and not saved in the database.
 */
export interface IBasketBill {
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
  store_shipping_options: BasketBilling.IStoreShippingOption[] | null;

  /**
   * The available shipping options provided by third-party connect services.
   */
  connect_shipping_options: BasketBilling.IConnectShippingOption[] | null;

  /**
   * The available shipping options provided by vendors.
   */
  vendor_shipping_options: BasketBilling.IVendorShippingOption[] | null;

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

export namespace BasketBilling {
  /**
   * Represents available shipping options provided directly by the shop.
   */
  export interface IStoreShippingOption {
    /** Warehouse ID used for shipping (optional). */
    warehouse_id?: number | null;

    /** Details of the warehouse used for fulfillment. */
    warehouse?: Warehouse | null;

    /** List of transportation methods available from the store's warehouse. */
    transportations: Transportation[];

    /** Total weight of items shipped by the store (optional). */
    weight?: number | null;

    /** Total volume of items shipped by the store (optional). */
    volume?: number | null;

    /** Distance from the warehouse to customer's location (optional). */
    distance?: number | null;

    /** Unit of measurement used for distance (e.g., 'km', 'miles'). */
    distance_unit: string;

    /** Calculated shipping cost for this option (null if unavailable). */
    cost?: number | null;

    /** IDs of basket items associated with this shipping method. */
    item_ids: number[];
  }

  /**
   * Represents available shipping options provided by third-party connect providers (e.g., Printful, Printify).
   */
  export interface IConnectShippingOption {
    /** Unique identifier of the connect provider. */
    connect_id: number;

    /** Human-readable name of the connect provider. */
    connect_name: string;

    /** Available shipping rate options from this connect provider (optional). */
    options?: IConnectShippingRate[] | null;

    /** Error message if shipping options could not be retrieved (optional). */
    error?: string | null;

    /** IDs of basket items that will be shipped by this connect provider. */
    item_ids: number[];
  }

  /**
   * Represents a single shipping rate option provided by a connect provider.
   */
  export interface IConnectShippingRate {
    /** Unique identifier of this shipping option. */
    id: string;

    /** Display title or name of the shipping method (e.g., "Standard Shipping"). */
    title: string;

    /** Cost associated with this shipping option. */
    rate: number;

    /** Currency code of the shipping cost (e.g., "USD"). */
    currency: string;

    /** Estimated number of days for delivery (optional). */
    estimated_days?: number | null;
  }

  /**
   * Represents available shipping options provided directly by marketplace vendors.
   */
  export interface IVendorShippingOption {
    /** Unique identifier of the vendor responsible for shipping. */
    vendor_id: number;

    /** Details of the vendor's warehouse used for fulfillment (optional). */
    warehouse?: Warehouse | null;

    /** List of transportation methods available from the vendor's warehouse. */
    transportations: Transportation[];

    /** Total weight of items shipped by the vendor (optional). */
    weight?: number | null;

    /** Total volume of items shipped by the vendor (optional). */
    volume?: number | null;

    /** Distance from the vendor's warehouse to customer's location (optional). */
    distance?: number | null;

    /** Unit of measurement used for distance (e.g., 'km', 'miles'). */
    distance_unit: string;

    /** Calculated shipping cost for this vendor (null if unavailable). */
    cost?: number | null;

    /** IDs of basket items associated with this vendor's shipping method. */
    item_ids: number[];
  }
}
