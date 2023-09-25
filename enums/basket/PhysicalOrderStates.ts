import type { IOrderState } from "../delivery/DeliveryStateCode";
import { DeliveryStateCode } from "../delivery/DeliveryStateCode";

/**
 * Enumerates the possible states of a physical order and their associated metadata.
 *
 * These states provide an overview of the lifecycle of an order, from its initial
 * placement to its delivery to the customer. By using this structure, systems can
 * easily track, display, and manage the progression of an order.
 */
export const PhysicalOrderStates: Record<DeliveryStateCode, IOrderState> = {
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
