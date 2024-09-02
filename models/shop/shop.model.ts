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

import {Currency} from "../../enums/payment/Currency";
import {ExchangeRate} from "./payment/exchange_rate.model";
import {WeekDays} from "../../enums/logistic/WeekDays";
import {Domain} from "../../models/shop/domain/domain.model";
import {ShopLicenseLimits} from "../../enums/shop/ShopLicense";

/**
 * Represents the main configuration and details for a shop.
 */
export class Shop {
  /** The unique identifier for the shop. */
  id: number | null = null;

  /** The name of the shop. */
  name: string | null = null;

  /** The unique identifier for the user associated with the shop. */
  user_id?: number;

  /** Represents the shop's homepage configuration. */
  home?: Shop.Home;

  /** The default language for the shop. */
  language?: string;

  /** The title of the shop. */
  title?: string;

  /** The description of the shop. */
  description?: string;

  /** The icon associated with the shop. */
  icon?: string;

  /** The favorite icon for the shop. */
  fav?: string;

  /** Indicates if the shop is official. */
  official?: boolean;

  /** Indicates if the shop is active. */
  active?: boolean;

  /** The shop's access restriction setting. */
  restriction?: string; // should be elaborated based on the ShopRestriction

  /** The licensing code for the shop. */
  license?: keyof typeof ShopLicenseLimits; // should be elaborated based on ShopLicenseCode

  /** The storage capacity of the shop in KB. */
  capacity?: number;

  /** The expiration date of the shop. */
  expire_at?: Date;

  /** Additional info about the shop. */
  info?: {
    location?: string;
    daysOpen?: string[];
    times?: string;
    address?: string;
    email?: string;
    country?: string;
    postalCode?: string;
    countryCode?: string;
    region?: string;
    locality?: string;
    days_open?: (keyof typeof WeekDays)[] | null;
    time_open?: string;
    time_close?: string;
  };

  /** The support mode for the shop. */
  support_mode?: string; // should be elaborated based on ShopSupportMode

  /** Support details. */
  support?: any[]; // specific type can be added

  /** Indicates if the address associated with the shop is verified. */
  address_verified?: boolean;

  /** Indicates if the phone number associated with the shop is verified. */
  phone_verified?: boolean;

  /** Indicates if the shop has a gold status. */
  gold?: boolean;

  /** Indicates if the shop has any penalties. */
  penalty?: boolean;

  /** The date when the shop and its content will be deleted. */
  purge_at?: string;

  /** Configuration options for the shop. */
  options?: Shop.IOption[];

  /** The domain associated with the shop. */
  domain?: string;

  /** Supported currencies for the shop. */
  currencies?: (keyof typeof Currency)[];

  /** Configuration for the footer of the shop. */
  footer?: any[]; // specific type can be added

  /** Theme configuration for the shop. */
  theme?: Shop.ITheme; // specific type can be added

  /** Configuration for Avocado form. */
  avocado?: any[]; // specific type can be added

  /** Configuration for Hyper. */
  hyper?: any[]; // specific type can be added

  /** Configuration for Ribbon. Its the default behaviour of subscription products. */
  ribbon?: Shop.IRibbon; // specific type can be added

  /** Configuration for the marketplace. */
  marketplace?: any[]; // specific type can be added

  /** The business model of the shop. */
  model?: string; // should be elaborated based on BusinessModel

  /** Domain details for local configuration. */
  local?: Domain | null; // specific type can be added

  /** Domain details for sub-domain configuration. */
  sub?: Domain | null; // specific type can be added

  /** Supported countries for the shop. */
  countries: string[] = [];

  /** Information regarding the lottery. */
  lottery?: string[];

  /** Tax information for the shop. */
  tax?: any[]; // specific type can be added

  /** The creation date of the shop. */
  created_at?: string;

  /** The last updated date for the shop. */
  updated_at?: string;

  /** The deletion date for the shop. */
  deleted_at?: string;

  /** Agency client ID associated with the shop. */
  client_id?: number;

  /** Indicates if the shop operates in dropshipping mode. */
  drop_shipping?: boolean;

  /** The number of dropshipping products. */
  dropShipping_products?: number;

  /** The number of dropshipping products sold. */
  dropShipping_sells?: number;

  /** The dropshipping score for the shop. */
  dropShipping_score?: number;

  shop_exchange_rates?: ExchangeRate[] | null;

  constructor(
    data: {
      id: number;
      name: string;
    } & Partial<Shop>,
  ) {
    Object.assign(this, data);
  }
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Shop {
  export interface ITheme {
    color_light: string;
    color_dark: string;
    color_deep_dark: string;
    color_info: string;
    color_buy: string;
    color_bill: string;
    light_checkout: boolean;
    light_header: boolean;
    light_footer: boolean;
    light_filter: boolean;

    // Products listing config:
    mobile: string;
    tablet: string;
    pc: string;

    // Products listing view for categories (folders):
    mobile_f: string;
    tablet_f: string;
    pc_f: string;

    static: any | null;
    hover_actions: any | null;
    only_available: boolean;
    smart_price: boolean;
    order: string[];
    font_family: any | null;
    font_res: any | null;
    reverse_currency: boolean;
    logo: any | null;
    logo_w: any | null;
    logo_h: any | null;
    title: string;
    css: any | null;
  }

  export interface IOption {
    code: string;
    value: any; // This is either an array, boolean, or object. Might need to further sub-divide this type
  }

  export interface IRibbon {
    shipping?: boolean; // Ask for shipping address
    billing?: boolean; // Ask for billing address
    cart?: boolean; // Car mode (add multiple subscription to cart)
    count?: boolean; // User can buy more than one subscription per product.
  }

  export enum Home {
    BLOG = "blog",
    AVOCADO = "avocado",
    HYPER = "hyper",
    COMMUNITY = "community",
    SHOP = "shop",
    MAP = "map",
    LANDING_PAGE = "landing_page",
  }

  export const ShopMarketplaceModes = {
    Collective: {
      code: "Collective",
      title: "ShopMarketplaceModes.Collective.title",
      description:"ShopMarketplaceModes.Collective.description",
    },
    Direct: {
      code: "Direct",
      title: "ShopMarketplaceModes.Direct.title",
      description:"ShopMarketplaceModes.Direct.description",
    },
  };
}
