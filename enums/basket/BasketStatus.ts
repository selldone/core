/**
 * Interface representing the structure of each Basket Status.
 */
interface BasketStatusItem {
  /** The unique code associated with the status */
  code: string;

  /** The title for the status, typically a localization key */
  title: string;

  /** The Material Design icon name for the status */
  icon: string;

  /** The path to the SVG asset for the status, loaded dynamically */
  src: string;

  /** The color representation for the status, can be a hex code or a string representation like 'red', 'blue' etc. */
  color: string;
}

/**
 * Enumerates various statuses a basket can be in, with associated metadata for each status.
 *
 * - `Open`: The basket is open for adding or removing items.
 * - `Reserved`: Items in the basket are reserved but not yet paid for.
 * - `Payed`: The items in the basket have been paid for.
 * - `Canceled`: The basket was canceled by the user or the system.
 * - `COD`: Represents Cash-On-Delivery, the basket is to be paid for upon delivery.
 */
export const BasketStatus: Record<string, BasketStatusItem> = {
  Open: {
    code: "Open",
    title: "global.basket_status.open",
    icon: "system_update_alt",
    src: require("@/Components/assets/icons/basket-open.svg"),
    color: "#888",
  },
  Reserved: {
    code: "Reserved",
    title: "global.basket_status.reserved",
    icon: "pause_presentation",
    src: require("@/Components/assets/icons/basket-reserve.svg"),
    color: "amber",
  },
  Payed: {
    code: "Payed",
    title: "global.basket_status.paid",
    icon: "payment",
    src: require("@/Components/assets/icons/basket-payed.svg"),
    color: "green",
  },
  Canceled: {
    code: "Canceled",
    title: "global.basket_status.canceled",
    icon: "cancel_presentation",
    src: require("@/Components/assets/icons/basket-canceled.svg"),
    color: "red",
  },
  COD: {
    code: "COD",
    title: "global.basket_status.cod",
    icon: "local_atm",
    src: require("@/Components/assets/icons/basket-cod.svg"),
    color: "blue",
  },
};
