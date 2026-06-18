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

import { Currency } from "../../enums/payment/Currency";
import { ExchangeRate } from "./payment/exchange_rate.model";
import { WeekDays } from "../../enums/logistic/WeekDays";
import { Domain } from "./domain/domain.model";
import { ShopLicenseLimits } from "../../enums/shop/ShopLicense";

/**
 * Selldone shop tenant and storefront configuration.
 *
 * Backend source: `App\Storefront\Shop`, table `shops`.
 * The backend casts booleans, date fields, and many storefront configuration columns as JSON
 * (`info`, `support`, `options`, `footer`, `theme`, `hyper`, `avocado`, `ribbon`, `marketplace`,
 * `currencies`, `countries`, `tax`, `meta`, `agency_meta`, `translations`, `filters`, and `engine`).
 */
export class Shop {
  /** The unique identifier for the shop. */
  id: number | null = null;

  /** The name of the shop. */
  name: string | null = null;

  /** The unique identifier for the user associated with the shop. */
  user_id?: number | null;

  /** Represents the shop's homepage configuration. */
  home?: Shop.Home;

  /** The default language for the shop. */
  language?: string | null;

  /** The title of the shop. */
  title?: string | null;

  /** The description of the shop. */
  description?: string | null;

  /** The icon associated with the shop. */
  icon?: string | null;

  /** The favorite icon for the shop. */
  fav?: string | null;

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
  expire_at?: string | null;

  /** Additional info about the shop. */
  info?: Shop.Info | null;

  /** The support mode for the shop. */
  support_mode?: string; // should be elaborated based on ShopSupportMode

  /** Support details. */
  support?: Shop.Support | null;

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
  options?: Shop.IOption[] | null;

  /** The domain associated with the shop. */
  domain?: string | null;

  /** Supported currencies for the shop. */
  currencies?: (keyof typeof Currency)[] | null;

  /** Configuration for the footer of the shop. */
  footer?: Shop.Footer | null;

  /** Theme configuration for the shop. */
  theme?: Shop.ITheme; // specific type can be added

  /** Configuration for Avocado form. */
  avocado?: Shop.AvocadoConfig | null;

  /** Configuration for Hyper. */
  hyper?: Shop.HyperConfig | null;

  /** Configuration for Ribbon. Its the default behaviour of subscription products. */
  ribbon?: Shop.IRibbon; // specific type can be added

  /** Configuration for the marketplace. */
  marketplace?: Shop.MarketplaceConfig | null;

  /** The business model of the shop. */
  model?: Shop.BusinessModelCode | null;

  /** Domain details for local configuration. */
  local?: Domain | null; // specific type can be added

  /** Domain details for sub-domain configuration. */
  sub?: Domain | null; // specific type can be added

  /** Supported countries for the shop. */
  countries: string[] = [];

  /** Information regarding the lottery. */
  lottery?: string[] | null;

  /** Tax information for the shop. */
  tax?: Shop.TaxConfig | null;

  /** The creation date of the shop. */
  created_at?: string | null;

  /** The last updated date for the shop. */
  updated_at?: string | null;

  /** The deletion date for the shop. */
  deleted_at?: string | null;

  /** Agency client ID associated with the shop. */
  client_id?: number | null;

  /** Indicates if the shop operates in dropshipping mode. */
  drop_shipping?: boolean;

  /** The number of dropshipping products. */
  dropShipping_products?: number;

  /** Backend snake_case alias for dropshipping products count. */
  drop_shipping_products?: number;

  /** The number of dropshipping products sold. */
  dropShipping_sells?: number;

  /** Backend snake_case alias for dropshipping sales count. */
  drop_shipping_sells?: number;

  /** The dropshipping score for the shop. */
  dropShipping_score?: number;

  /** Backend snake_case alias for dropshipping score. */
  drop_shipping_score?: number;

  shop_exchange_rates?: ExchangeRate[] | null;

  /** Owner user relation when eager-loaded. */
  user?: Shop.JsonObject | null;

  /** Local custom domain relation when eager-loaded. */
  local_domain?: Domain | null;

  /** Subdomain relation when eager-loaded. */
  sub_domain?: Domain | null;

  /** Product/category listing relation used by public shop payloads. */
  listing?: Shop.JsonObject[] | null;

  /** Active storefront applications loaded by public shop info APIs. */
  apps?: Shop.JsonObject[] | null;

  /** Enabled public shop gateways loaded by public shop info APIs. */
  gateways?: Shop.JsonObject[] | null;

  /** Public shop social links relation. */
  socials?: Shop.JsonObject[] | null;

  /** Public menu relation. */
  menus?: Shop.JsonObject[] | null;

  /** Active campaign relation when loaded by public shop info APIs. */
  campaign?: Shop.JsonObject | null;

  /** Community relation when the shop home/community feature is enabled. */
  community?: Shop.JsonObject | null;

  /** Transportation methods relation when loaded for checkout/public info. */
  transportations?: Shop.JsonObject[] | null;

  /** Private shop metadata. Source: nullable JSON `shops.meta`. */
  meta?: Shop.Meta | null;

  /** Agency scoped metadata. Source: nullable JSON `shops.agency_meta`. */
  agency_meta?: Shop.JsonObject | null;

  /** Localized shop fields keyed by locale. Source: nullable JSON `shops.translations`. */
  translations?: Shop.Translations | null;

  /** Active layout id for storefront page builder. Source: nullable `shops.layout_id`. */
  layout_id?: number | null;

  /** Active layout version string. Source: nullable `shops.layout_version`. */
  layout_version?: string | null;

  /** Storefront listing filters configuration. Source: nullable JSON `shops.filters`. */
  filters?: Shop.JsonObject | null;

  /** Storefront engine/search configuration. Source: nullable JSON `shops.engine`. */
  engine?: Shop.JsonObject | null;

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
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object stored by backend JSON casts. Uses an interface to avoid recursive alias errors. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array stored by backend JSON casts. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Business model code stored in `shops.model`. */
  export type BusinessModelCode = "B2C" | "B2B" | "C2C" | "DROPSHIPPING" | string;

  /** Public business/location info stored in `shops.info`. */
  export interface Info extends JsonObject {
    location?: string | JsonObject | null;
    daysOpen?: string[];
    times?: string | JsonObject | null;
    address?: string | null;
    phone?: string | null;
    email?: string | null;
    country?: string | null;
    postalCode?: string | null;
    postal_code?: string | null;
    countryCode?: string | null;
    country_code?: string | null;
    region?: string | null;
    locality?: string | null;
    days_open?: (keyof typeof WeekDays)[] | null;
    time_open?: string | null;
    time_close?: string | null;
  }

  /** Support widget/channel configuration stored in `shops.support`. */
  export interface Support extends JsonObject {
    popup?: boolean;
    email?: string | null;
    phone?: string | null;
    chat?: boolean;
  }

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

    static: JsonValue | null;
    hover_actions: JsonValue | null;
    only_available: boolean;
    smart_price: boolean;
    order: string[];
    font_family: string | JsonObject | null;
    font_res: string | JsonObject | null;
    reverse_currency: boolean;
    logo: string | null;
    logo_w: string | number | null;
    logo_h: string | number | null;
    title: string;
    css: string | null;
  }

  export interface IOption {
    code: string;
    value: JsonValue;
  }

  export interface IRibbon {
    shipping?: boolean; // Ask for shipping address
    billing?: boolean; // Ask for billing address
    cart?: boolean; // Car mode (add multiple subscription to cart)
    count?: boolean; // User can buy more than one subscription per product.
  }

  /** Footer sections stored in `shops.footer`. */
  export type Footer = JsonObject;

  /** Avocado custom-order configuration stored in `shops.avocado`. */
  export interface AvocadoConfig extends JsonObject {
    delivery?: boolean;
    message?: string | null;
  }

  /** Hyper checkout configuration stored in `shops.hyper`. */
  export interface HyperConfig extends JsonObject {
    enable?: boolean;
  }

  /** Marketplace configuration stored in `shops.marketplace`. */
  export interface MarketplaceConfig extends JsonObject {
    mode?: keyof typeof ShopMarketplaceModes | string;
    product_verification?: boolean;
    hide_user_info?: boolean;
    direct_shipping?: boolean;
    vendors_add_product?: boolean;
    vendors_add_category?: boolean;
    vendors_access_listing?: boolean;
  }

  /** Tax configuration stored in `shops.tax`. */
  export interface TaxConfig extends JsonObject {
    included?: boolean;
    shipping?: boolean;
  }

  /** Private shop metadata. */
  export interface Meta extends JsonObject {
    stripe_account_id?: string | null;
  }

  /** Translation payload applied by `HasTranslationTrait`. */
  export type Translations = Record<string, JsonObject>;

  /** Payload accepted by shop create/update flows before backend assigns ids/timestamps. */
  export interface Upsert {
    name?: string;
    title?: string | null;
    description?: string | null;
    home?: Home | null;
    language?: string | null;
    icon?: string | null;
    fav?: string | null;
    active?: boolean;
    restriction?: string | null;
    license?: keyof typeof ShopLicenseLimits;
    info?: Info | null;
    support_mode?: string | null;
    support?: Support | null;
    options?: IOption[] | null;
    currencies?: (keyof typeof Currency)[] | null;
    footer?: Footer | null;
    theme?: Partial<ITheme> | null;
    avocado?: AvocadoConfig | null;
    hyper?: HyperConfig | null;
    ribbon?: IRibbon | null;
    marketplace?: MarketplaceConfig | null;
    countries?: string[] | null;
    tax?: TaxConfig | null;
    meta?: Meta | null;
    translations?: Translations | null;
  }

  /** Minimal public shop payload commonly returned by storefront discovery APIs. */
  export interface PublicSummary {
    id: number;
    name: string;
    title: string | null;
    description?: string | null;
    icon?: string | null;
    fav?: string | null;
    home?: Home | null;
    language?: string | null;
    currencies?: (keyof typeof Currency)[] | null;
    domain?: string | null;
    local?: Domain | null;
    sub?: Domain | null;
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
      description: "ShopMarketplaceModes.Collective.description",
    },
    Direct: {
      code: "Direct",
      title: "ShopMarketplaceModes.Direct.title",
      description: "ShopMarketplaceModes.Direct.description",
    },
  };
}
