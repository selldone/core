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
 * Shop popup-builder popup.
 *
 * Backend source: `App\Shop\Popups\Popup`, table `popups`.
 * Managed by `PopupController`; list endpoints may return a compact subset while detail endpoints return the full row
 * and optionally eager-load `notes`.
 */
export interface Popup {
  /** Popup id. Source: `popups.id`. */
  id: number;

  /** Creator/editor user id. Source: `popups.user_id`. */
  user_id: number;

  /** Owning shop id. Source: `popups.shop_id`. */
  shop_id: number;

  /** Optional cluster grouping id. Source: nullable `popups.cluster_id`. */
  cluster_id?: number | null;

  /** Popup title, or `null`. Source: nullable `popups.title`. */
  title: string | null;

  /** Whether the popup is published. Source: `popups.published` cast to boolean. */
  published: boolean;

  /** Admin-only note, or `null`. Source: nullable `popups.note`. */
  note: string | null;

  /** Popup cover/template image path, or `null`. Source: nullable `popups.image`. */
  image: string | null;

  /** Text direction. Backend enum: `rtl`, `ltr`, or `auto`. */
  direction: Popup.Direction;

  /** Popup builder JSON content. Source: `popups.content` cast from JSON/longtext by Eloquent. */
  content: Popup.Content | Record<string, unknown>;

  /** Visit count. Source: `popups.visits`. */
  visits: number;

  /** Transition animation name, or `null`. Source: nullable `popups.transition`. */
  transition: string | null;

  /** Popup position. Backend enum `PopupPositions`. */
  position: Popup.Position;

  /** Custom style JSON, or `null`. Source: nullable JSON `popups.style`. */
  style: Popup.Style | Record<string, unknown> | unknown[] | null;

  /** Registered-user filter. Backend enum: `None`, `Yes`, `No`. */
  registered: Popup.FilterState;

  /** Purchased-before filter. Backend enum: `None`, `Yes`, `No`. */
  purchased: Popup.FilterState;

  /** Gender filter, or `null` for all genders. Backend enum: `Male`, `Female`. */
  sex: Popup.Sex | null;

  /** Minimum customer age. Source: `popups.age`. */
  age: number;

  /** Customer club/badge level filters, or `null` for all levels. Source: nullable JSON `popups.levels`. */
  levels: string[] | null;

  /** ISO-3166 alpha-2 country filters, or `null` for all countries. Source: nullable JSON `popups.countries`. */
  countries: string[] | null;

  /** Delay before showing popup, in seconds. Source: `popups.delay`. */
  delay: number;

  /** Whether popup can be shown repeatedly. Source: `popups.repeat` cast to boolean. */
  repeat: boolean;

  /** Repeat interval in hours. Source: `popups.interval`. */
  interval: number;

  /** Auto-hide delay in seconds, or `null` to keep visible until closed. */
  hide: number | null;

  /** Soft-delete timestamp when included. Source: `popups.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `popups.created_at`. */
  created_at?: string;

  /** Last update timestamp. Source: `popups.updated_at`. */
  updated_at?: string;

  /** Content image relations when `Popup::images()` is eager-loaded. */
  images?: Popup.Image[];

  /** Notes morph relation when eager-loaded by popup controllers. */
  notes?: Record<string, unknown>[];

  /** Creator relation when eager-loaded. */
  user?: Record<string, unknown>;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown>;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Popup {
  /** Backend enum for `popups.direction`. */
  export type Direction = "rtl" | "ltr" | "auto";

  /** Backend enum `App\Shop\Popups\enums\PopupPositions`. */
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

  /** Position union used by backend and DB enum. */
  export type Position = `${IPopupPositions}`;

  /** Backend enum `App\Shop\Popups\enums\PopupFilterStates`. */
  export enum IPopupFilterStates {
    None = "None",
    Yes = "Yes",
    No = "No",
  }

  /** Filter-state union used by backend and DB enum. */
  export type FilterState = `${IPopupFilterStates}`;

  /** Backend enum `App\Samin\Users\PersonalInformation\enums\Sex`. */
  export enum ISex {
    Male = "Male",
    Female = "Female",
  }

  /** Sex union used by backend and DB enum. */
  export type Sex = `${ISex}`;

  /** Popup builder JSON content. */
  export type Content = Record<string, unknown>;

  /** Popup custom style JSON. */
  export type Style = Record<string, unknown>;

  /** Row from `popup_images`. */
  export interface Image {
    id: number;
    popup_id: number;
    path: string;
    deleted_at?: string | null;
    created_at?: string;
    updated_at?: string;
  }
}
