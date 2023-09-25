import type { IOrderState } from "../delivery/DeliveryStateCode";
import { DeliveryStateCode } from "../delivery/DeliveryStateCode";



/**
 * Enumerates the various Avocado order states with associated metadata.
 *
 * Each state provides details about its code, the localization key for its name,
 * and a Font Awesome icon class for visual representation.
 *
 * @const {Record<string, AvocadoOrderState>} AvocadoOrderStates
 */
export const AvocadoOrderStates: Record<DeliveryStateCode, IOrderState> = {
  CheckQueue: {
    code: "CheckQueue",
    name: "global.delivery_state.check_queue",
    icon: "fas fa-shopping-basket",
  },
  OrderConfirm: {
    code: "OrderConfirm",
    name: "global.delivery_state.order_confirm",
    icon: "fas fa-check",
  },
  PreparingOrder: {
    code: "PreparingOrder",
    name: "global.delivery_state.preparing_order",
    icon: "fas fa-box-open",
  },
  SentOrder: {
    code: "SentOrder",
    name: "global.delivery_state.sent_order",
    icon: "fas fa-shipping-fast",
  },
  ToCustomer: {
    code: "ToCustomer",
    name: "global.delivery_state.to_customer",
    icon: "fas fa-check-double",
  },
};
