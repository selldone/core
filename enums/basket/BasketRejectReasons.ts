/**
 * @typedef BasketRejectReason
 * Defines the structure for each basket reject reason.
 *
 * @property {string} code - The unique identifier for the reason.
 * @property {string} title - A localization key for the reason's title or description.
 */
interface BasketRejectReason {
  code: string;
  title: string;
}

/**
 * @const BasketRejectReasons
 * Enumerates various reasons for which a basket can be rejected.
 *
 * @property {BasketRejectReason} CantAcceptCOD - Reason indicating that Cash-On-Delivery is not accepted.
 * @property {BasketRejectReason} PaymentReturned - Reason indicating that the payment was returned.
 * @property {BasketRejectReason} PaymentFraud - Reason indicating potential payment fraud.
 * @property {BasketRejectReason} LocationOutOfService - Reason indicating the location is not serviceable.
 * @property {BasketRejectReason} UserNotResponding - Reason indicating the user did not respond in a timely manner.
 * @property {BasketRejectReason} ShopOwnerFault - Reason indicating that the rejection was due to an error by the shop owner.
 * @property {BasketRejectReason} LackOfInventory - Reason indicating insufficient inventory.
 * @property {BasketRejectReason} LegalRestriction - Reason indicating legal restrictions prevented the sale.
 * @property {BasketRejectReason} PricingFault - Reason indicating that there was an issue with the pricing.
 * @property {BasketRejectReason} SystemFault - Reason indicating that there was a system fault.
 */
export const BasketRejectReasons: Record<string, BasketRejectReason> = {
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
