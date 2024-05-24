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

/**
 * Enum for all possible statuses in the fulfillment process of an order.
 *
 * Usage:
 * This enum is used to represent the various stages of order processing and delivery.
 * Depending on the type of order (online, physical, virtual, file, service, subscription, or Avocado),
 * different states may apply.
 *
 * See also:
 * - {@link PhysicalOrderStates} for order fulfillment status of physical orders.
 * - {@link VirtualOrderStates} for order fulfillment status of virtual orders.
 * - {@link FileOrderStates} for order fulfillment status of file orders.
 * - {@link ServiceOrderStates} for order fulfillment status of service orders.
 * - {@link SubscriptionOrderStates} for order fulfillment status of subscription orders.
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
