import type { IOrderState } from "../delivery/DeliveryStateCode";
import { DeliveryStateCode } from "../delivery/DeliveryStateCode";

/**
 * Defines the various states that a file order can be in.
 */
export const FileOrderStates: Record<
  DeliveryStateCode.PreparingOrder | DeliveryStateCode.ToCustomer,
  IOrderState
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
