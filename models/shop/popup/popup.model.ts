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
 * Represents a Page associated with a shop.
 */
export interface Popup {
  /** Unique identifier for the page. */
  id: number;

  /** User identifier associated with the page. */
  user_id: number;

  /** Shop identifier associated with the page. */
  shop_id: number;

  /** Title of the page. */
  title: string;

  /** Indicates if the page is published or not. */
  published: boolean;

  /** A note only for admin purposes, to be shown as a popup. */
  note: string;

  /** An image to be shown as a popup. */
  image: string;

  /** Direction for the popup. */
  direction: string;

  /** Content of the page. Can be any structured object. */
  content: object;

  /** Count of visits to the page. */
  visits: number;

  /** Transition effect to be used when showing the page. */
  transition: string;

  /** Position of the popup on the page. */
  position: Popup.IPopupPositions;

  /** Styling details for the page. */
  style: any[];

  /** Filters */

  /** State of registered filter for the popup. */
  registered: Popup.IPopupFilterStates;

  /** State of purchased filter for the popup.
   *  - yes: User purchased before.
   *  - no: User hasn't made a purchase.
   *  - none: No filter applied.
   */
  purchased: Popup.IPopupFilterStates;

  /** Gender filter for the popup. If null, all genders are considered. */
  sex?: Popup.ISex;

  /** Minimum age filter for the popup. */
  age: number;

  /** Levels based on ShopCustomerBadgeEnums for the popup. */
  levels: any[];

  /** Countries filter for the popup.
   * The popup is only shown if the user's country matches one in this array.
   * If null, it's shown for all countries.
   */
  countries?: any[] | null;

  /** Appearance */

  /** Delay in seconds before the popup should appear. */
  delay: number;

  /** Determines if the popup should be shown repeatedly. */
  repeat: boolean;

  /** Interval in hours for the popup to be shown. */
  interval: number;

  /** Number of seconds before the popup auto-hides.
   * If null, the popup persists until the user closes it.
   */
  hide?: number | null;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Popup {
  export enum IPopupPositions {
    Center = "center",
    Top_Center = "top-center",
    Top_Right = "top-right",
    Top_Left = "top-left",
    Bottom_Center = "bottom-center",
    Bottom_Right = "bottom-right",
    Bottom_Left = "bottom-left",
    Right_Center = "right-center",
    Left_Center = "left-center",
  }

  export enum IPopupFilterStates {
    None = "None",
    Yes = "Yes",
    No = "No",
  }


  export enum ISex {
    Male = "Male",
    Female = "Female",
  }



}
