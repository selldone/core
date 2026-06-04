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
 * Shop header/footer menu configuration.
 *
 * Backend source: `App\Shop\Menu\ShopMenu`, table `shop_menu`.
 * `ShopMenuController::api_getMenu` usually returns `{ menu, enable, translations }`; full Eloquent rows include
 * `id`, `shop_id`, `type`, timestamps, and optional relations.
 */
export interface ShopMenu {
  /** Menu row id. Source: `shop_menu.id`; absent when controller returns only the compact payload. */
  id?: number;

  /** Owning shop id. Source: `shop_menu.shop_id`; absent in compact menu responses. */
  shop_id?: number;

  /** Menu type. Backend enum `ShopMenuType`: `HEADER` or `FOOTER`. */
  type?: ShopMenu.TypeCode;

  /** Whether the menu is enabled. Source: `shop_menu.enable` cast to boolean. */
  enable: boolean;

  /** Menu JSON payload. Footer menus are column arrays; header menus are heterogeneous menu item arrays. */
  menu: ShopMenu.MenuPayload | null;

  /** Localized menu payloads keyed by locale. Source: nullable JSON `shop_menu.translations`. */
  translations?: ShopMenu.Translations | null;

  /** Creation timestamp. Source: `shop_menu.created_at`. */
  created_at?: string;

  /** Last update timestamp. Source: `shop_menu.updated_at`. */
  updated_at?: string;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown>;

  /** Notes morph relation when eager-loaded. */
  notes?: Record<string, unknown>[];
}

/** Footer menu item used inside `shop_menu.menu` for `FOOTER` menus. */
export interface MenuItem {
  /** Customer-facing item label. */
  name: string;

  /** Vue/router target or absolute path payload. */
  to: To;

  /** Additional backend/UI fields are preserved because menu JSON is intentionally flexible. */
  [key: string]: unknown;
}

/** Router destination stored in menu JSON. */
export interface To {
  /** Named frontend route. */
  name?: string;

  /** URL/path target. */
  path?: string;

  /** Route params keyed by backend/frontend route param name. */
  params?: Record<string, string | number>;

  /** Query params keyed by query parameter name. */
  query?: Record<string, string | number | boolean | null>;

  /** Extra destination metadata preserved from menu builder JSON. */
  [key: string]: unknown;
}

export namespace ShopMenu {
  /** Backend enum `App\Shop\Menu\enums\ShopMenuType`. */
  export type TypeCode = "HEADER" | "FOOTER";

  /** Header menu item shape is flexible; controller supports `title`, `type`, `cols`, and generated `categories`. */
  export interface HeaderItem {
    title?: string;
    type?: string;
    cols?: MenuItem[][];
    categories?: Record<string, unknown>[];
    [key: string]: unknown;
  }

  /** Footer menus are arrays of columns; header menus are arrays of header items. */
  export type MenuPayload = MenuItem[][] | HeaderItem[];

  /** Translation payload passed to `ShopMenu::SetShopMenu`. */
  export type Translations = Record<string, { menu?: MenuPayload | null; [key: string]: unknown }>;
}
