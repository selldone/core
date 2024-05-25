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

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

import { Map } from "../map";

export namespace Order {
  export interface IOrder {
    id: number;
    shop_id: number;
    label: string | null; // Custom order ID set by seller configuration.
    type:
      | "AVO"
      | "FUL"
      | "POS"
      | "HYP"
      | "BILL"
      | "PHYSICAL"
      | "VIRTUAL"
      | "FILE"
      | "SERVICE"
      | "SUBSCRIPTION";

    vendor_id?: number; // Only in the vendor order! We use this to detect it's a vendor order. The type will be PHYSICAL,VIRTUAL,... same as main basket type.
    basket_id?: number; // Only in the vendor order!



  }

  /**
   * @typedef {Object} IRejectReason
   * Defines the structure for each basket reject reason.
   *
   * @property {string} code - The unique identifier for the reason.
   * @property {string} title - A localization key for the reason's title or description.
   */
  interface IRejectReason {
    code: RejectReasonKeys;
    title: string;
  }

  /**
   * @typedef { "CantAcceptCOD" | "PaymentReturned" | "PaymentFraud" | "LocationOutOfService" | "UserNotResponding" | "ShopOwnerFault" | "LackOfInventory" | "LegalRestriction" | "PricingFault" | "SystemFault" } RejectReasonKeys
   * Defines the keys for the reject reasons.
   */
  type RejectReasonKeys =
    | "CantAcceptCOD"
    | "PaymentReturned"
    | "PaymentFraud"
    | "LocationOutOfService"
    | "UserNotResponding"
    | "ShopOwnerFault"
    | "LackOfInventory"
    | "LegalRestriction"
    | "PricingFault"
    | "SystemFault";

  /**
   * @type {Record<string, IRejectReason>}
   * Enumerates various reasons for which a basket can be rejected.
   *
   * @property {IRejectReason} CantAcceptCOD - Reason indicating that Cash-On-Delivery is not accepted.
   * @property {IRejectReason} PaymentReturned - Reason indicating that the payment was returned.
   * @property {IRejectReason} PaymentFraud - Reason indicating potential payment fraud.
   * @property {IRejectReason} LocationOutOfService - Reason indicating the location is not serviceable.
   * @property {IRejectReason} UserNotResponding - Reason indicating the user did not respond in a timely manner.
   * @property {IRejectReason} ShopOwnerFault - Reason indicating that the rejection was due to an error by the shop owner.
   * @property {IRejectReason} LackOfInventory - Reason indicating insufficient inventory.
   * @property {IRejectReason} LegalRestriction - Reason indicating legal restrictions prevented the sale.
   * @property {IRejectReason} PricingFault - Reason indicating that there was an issue with the pricing.
   * @property {IRejectReason} SystemFault - Reason indicating that there was a system fault.
   */
  export const RejectReasons: Record<RejectReasonKeys, IRejectReason> = {
    CantAcceptCOD: {
      code: "CantAcceptCOD",
      title: "global.order_reject_reasons.cant_accept_cod",
    },
    PaymentReturned: {
      code: "PaymentReturned",
      title: "global.order_reject_reasons.payment_returned",
    },
    PaymentFraud: {
      code: "PaymentFraud",
      title: "global.order_reject_reasons.payment_fraud",
    },
    LocationOutOfService: {
      code: "LocationOutOfService",
      title: "global.order_reject_reasons.location_out_of_service",
    },
    UserNotResponding: {
      code: "UserNotResponding",
      title: "global.order_reject_reasons.user_not_responding",
    },
    ShopOwnerFault: {
      code: "ShopOwnerFault",
      title: "global.order_reject_reasons.shop_owner_fault",
    },
    LackOfInventory: {
      code: "LackOfInventory",
      title: "global.order_reject_reasons.lack_of_inventory",
    },
    LegalRestriction: {
      code: "LegalRestriction",
      title: "global.order_reject_reasons.legal_restriction",
    },
    PricingFault: {
      code: "PricingFault",
      title: "global.order_reject_reasons.pricing_fault",
    },
    SystemFault: {
      code: "SystemFault",
      title: "global.order_reject_reasons.system_fault",
    },
  };

  /**
   * Represents the structure of an address.
   *
   * @property {string | null} name - The name associated with the address (could be null).
   * @property {string} country - The country of the address.
   * @property {string} state - The state or province of the address.
   * @property {string} state_code - The state or province code.
   * @property {string} address - The full address.
   * @property {boolean} business - Indicator if the address is a business address.
   * @property {boolean} custom - Indicator if the address is custom.
   * @property {string | null} tax_id - The tax ID associated with the address (could be null).
   * @property {string} city - The city of the receiver.
   * @property {string} address - The full address of the receiver.
   * @property {ILocation} location - The geographical location of the receiver.
   * @property {string} no - The number associated with the receiver's address.
   * @property {string} unit - The unit number of the receiver's address.
   * @property {string} name - The name of the receiver.
   * @property {string} phone - The contact phone number of the receiver.
   * @property {string} message - Any message associated with the receiver.
   * @property {string} postal - The postal code of the receiver's address.
   */
  export interface IAddress {
    name: string | null;
    country: string;
    state: string;
    state_code: string;
    address: string;
    business: boolean;
    custom: boolean;
    tax_id: string | null;
    city: string;
    location: Map.ILocation;
    no: string;
    unit: string;
    phone: string;
    message: string;
    postal: string;
  }

  /**
   * Represents the billing information, extending the address structure.
   */
  export interface IBilling extends IAddress {}

  /**
   * Represents the dimensions of the delivery volume.
   *
   * @property {number} width - The width of the volume in centimeters.
   * @property {number} length - The length of the volume in centimeters.
   * @property {number} height - The height of the volume in centimeters.
   */
  interface IVolume {
    width: number;
    length: number;
    height: number;
  }

  /**
   * Represents detailed information about a delivery.
   *
   * @property {number} distance - The distance of the delivery in meters.
   * @property {IVolume} volume - The volume dimensions of the delivery.
   * @property {number} weight - The weight of the delivery in kilograms.
   * @property {string | null} type - The type of delivery (could be null).
   * @property {number} connect_delivery - Indicator if the delivery is connected (0 or 1).
   * @property {number} inbound_delivery - Indicator if the delivery is inbound (0 or 1).
   * @property {number} outbound_delivery - Indicator if the delivery is outbound (0 or 1).
   */
  export interface IDeliveryInfo {
    distance: number;
    volume: IVolume;
    weight: number;
    type: string | null;
    connect_delivery: number;
    inbound_delivery: number;
    outbound_delivery: number;
  }

  /**
   * Represents the detailed information about a receiver.
   *
   * @property {string} country - The country of the receiver.
   * @property {string} state - The state or province of the receiver.
   * @property {string | null} state_code - The state or province code (could be null).
   * @property {string} city - The city of the receiver.
   * @property {string} address - The full address of the receiver.
   * @property {ILocation} location - The geographical location of the receiver.
   * @property {string} no - The number associated with the receiver's address.
   * @property {string} unit - The unit number of the receiver's address.
   * @property {string} name - The name of the receiver.
   * @property {string} phone - The contact phone number of the receiver.
   * @property {string} message - Any message associated with the receiver.
   * @property {string} postal - The postal code of the receiver's address.
   * @property {boolean} pickup - Indicator if the receiver's address is for pickup.
   */
  export interface IReceiverInfo extends IAddress {
    pickup: boolean;
  }


  /**
   * Enum for all possible statuses in the fulfillment process of an order.
   *
   * Usage:
   * This enum is used to represent the various stages of order processing and delivery.
   * Depending on the type of order (online, physical, virtual, file, service, subscription, or Avocado),
   * different states may apply.
   *
   * See also:
   * - {@link Basket.PhysicalOrderStates} for order fulfillment status of physical orders.
   * - {@link Basket.VirtualOrderStates} for order fulfillment status of virtual orders.
   * - {@link Basket.FileOrderStates} for order fulfillment status of file orders.
   * - {@link Basket.ServiceOrderStates} for order fulfillment status of service orders.
   * - {@link Basket.SubscriptionOrderStates} for order fulfillment status of subscription orders.
   * - {@link Avocado.DeliveryStates} for order fulfillment status of Avocado orders.
   */
  export enum DeliveryStateCode {
    CheckQueue = "CheckQueue",
    OrderConfirm = "OrderConfirm",
    PreparingOrder = "PreparingOrder",
    SentOrder = "SentOrder",
    ToCustomer = "ToCustomer",
  }

  export interface IOrderState {
    /**
     * The unique code for the order state.
     *
     * This code serves as a unique identifier for each order state
     * and can be used for logic differentiation or data persistence.
     */
    code: string;

    /**
     * The localization key for the name of the order state.
     *
     * This key should correspond to an entry in the localization file or system,
     * ensuring that the displayed name can be translated into multiple languages.
     */
    name: string;

    /**
     * Font Awesome class for the order state's icon.
     *
     * This represents the visual representation of the order state.
     * It utilizes the Font Awesome library for iconography.
     */
    icon: string;
  }





}
