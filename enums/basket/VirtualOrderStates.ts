import type { IOrderState } from "../delivery/DeliveryStateCode";
import { DeliveryStateCode } from "../delivery/DeliveryStateCode";

/**
 * Defines the various states that a virtual order can be in.
 */
export const VirtualOrderStates: Record<
  | DeliveryStateCode.CheckQueue
  | DeliveryStateCode.OrderConfirm
  | DeliveryStateCode.PreparingOrder
  | DeliveryStateCode.ToCustomer,
  IOrderState
> = {
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
    icon: "fas fa-laptop",
  },
  ToCustomer: {
    code: "ToCustomer",
    name: "global.delivery_state.to_customer",
    icon: "fas fa-check-double",
  },
};
