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
import openImage from "./assets/basket-open.svg";
import reserveImage from "./assets/basket-reserve.svg";
import payedImage from "./assets/basket-payed.svg";
import canceledImage from "./assets/basket-canceled.svg";
import codImage from "./assets/basket-cod.svg";
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
export const BasketStatus: Record<
    "Open" | "Reserved" | "Payed" | "Canceled" | "COD",
    BasketStatusItem
> = {
  Open: {
    code: "Open",
    title: "global.basket_status.open",
    icon: "system_update_alt",
    src: openImage,
    color: "#888",
  },
  Reserved: {
    code: "Reserved",
    title: "global.basket_status.reserved",
    icon: "pause_presentation",
    src: reserveImage,
    color: "amber",
  },
  Payed: {
    code: "Payed",
    title: "global.basket_status.paid",
    icon: "payment",
    src: payedImage,
    color: "green",
  },
  Canceled: {
    code: "Canceled",
    title: "global.basket_status.canceled",
    icon: "cancel_presentation",
    src: canceledImage,
    color: "red",
  },
  COD: {
    code: "COD",
    title: "global.basket_status.cod",
    icon: "local_atm",
    src: codImage,
    color: "blue",
  },
};