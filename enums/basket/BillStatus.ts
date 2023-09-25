/**
 * Describes the structure of a BillStatus item.
 *
 * @property code  - A unique identifier for the status.
 * @property title - A localization key for the status description.
 */
interface BillStatusItem {
  code: string;
  title: string;
}

/**
 * An enumeration of possible bill statuses.
 *
 * @property PENDING  - Represents a bill that is awaiting payment.
 * @property PAYED    - Represents a bill that has been successfully paid.
 * @property CANCELED - Represents a bill that has been canceled.
 */
export const BillStatus: Record<string, BillStatusItem> = {
  PENDING: {
    code: "PENDING",
    title: "global.commons.pending",
  },
  PAYED: {
    code: "PAYED",
    title: "global.commons.paid",
  },
  CANCELED: {
    code: "CANCELED",
    title: "global.commons.canceled",
  },
};
