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

import type { IOrderState } from "../delivery/DeliveryStateCode";
import { DeliveryStateCode } from "../delivery/DeliveryStateCode";

/**
 * Defines the various states that a service order can be in.
 */
export const ServiceOrderStates: Record<
  | DeliveryStateCode.CheckQueue
  | DeliveryStateCode.OrderConfirm
  | DeliveryStateCode.PreparingOrder
  | DeliveryStateCode.ToCustomer,
  IOrderState
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
