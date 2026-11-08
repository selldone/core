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
 * Global payment gateway: one payment service in one currency.
 *
 * Backend source: `App\Storefront\Gateway\Gateway`, table `gateways`.
 * The table stores only the per-currency operational values (fees, limits, `enable`, images, `wallet`, `network`).
 * Type, capabilities, labels, timeout, script and the credential field structures are fixed in the payment
 * service's `GetDefinition()` and appended to every serialized gateway, so the keys below stay available.
 * The backend hides `wallet` by default. Shop-specific merchant credentials live in {@link ShopGateway}. Data rows
 * aggregate transaction count, success count, processed amount, and wage by gateway.
 */
export class Gateway implements Gateway.IGateway {
  /** Gateway id. Source: `gateways.id`. */
  id!: number;

  /** Gateway settlement/transaction currency. Source: `gateways.currency`. */
  currency!: string;

  /** Gateway wage percent. Source: `gateways.wage_percent`. */
  wage_percent!: number;

  /** Minimum gateway wage amount. Source: `gateways.wage_min`. */
  wage_min!: number;

  /** Maximum gateway wage amount. Source: `gateways.wage_max`. */
  wage_max!: number;

  /** Minimum transaction amount. Source: `gateways.min`. */
  min!: number;

  /** Maximum transaction amount. Source: `gateways.max`. */
  max!: number;

  /** Whether the gateway is globally enabled. Source: `gateways.enable`. */
  enable!: boolean;

  /** How the service collects money. Appended from the service definition. */
  type!: Gateway.Type;

  /** Whether the gateway accepts Selldone service charges. Appended from the service definition. */
  charge!: boolean;

  /** Whether the gateway is available in POS. Appended from the service definition. */
  pos!: boolean;

  /** Whether this is the cash-on-delivery gateway of its currency (`type === "cod"`). */
  cod!: boolean;

  /** Whether this is the cash/POS gateway of its currency (`type === "cash"`). */
  cash!: boolean;

  /** Whether this is the direct bank-transfer gateway with receipt upload (`type === "dir"`). */
  dir!: boolean;

  /** Whether the gateway uses the Selldone blockchain wallet flow (`type === "blockchain"`). */
  blockchain!: boolean;

  /** Whether subscription payments are supported. Appended from the service definition. */
  subscription!: boolean;

  /** Whether debug/test mode is supported. Appended from the service definition. */
  debug!: boolean;

  /** Whether authorize-now / capture-later is supported. Appended from the service definition. */
  manual!: boolean;

  /** Manual action options such as `refund` and `delivery`. Appended from the service definition. */
  actions!: Gateway.ActionCode[];

  /** Unique gateway/plugin code, max 16 chars. Source: `gateways.code`. */
  code!: string;

  /** Translated service name. Appended from `lang/{locale}/gateways.php`. */
  name!: string;

  /** Translated service description. Appended from `lang/{locale}/gateways.php`. */
  description!: string;

  /** Public credential field structure (name, title, type, hint); the shop's own values when selected through a shop relation. */
  public!: Gateway.JsonPayload | null;

  /** Private credential field structure (name, title, type, hint); the shop's own values when selected through a shop relation. */
  private!: Gateway.JsonPayload | null;

  /** Logo URL/path, or `null`. Source: nullable text `gateways.logo`. */
  logo!: string | null;

  /** Icon URL/path, or `null`. Source: nullable text `gateways.icon`. */
  icon!: string | null;

  /** Provider website, or `null`. Appended from the service definition. */
  url!: string | null;

  /** Payment timeout in seconds. Appended from the service definition. */
  timeout!: number;

  /** Gateway network status payload. Source: nullable JSON `gateways.network` cast by `GatewayNetworkStatus`. */
  network!: Gateway.JsonPayload | null;

  /** Selldone wallet payload. Source: nullable JSON `gateways.wallet`; hidden by default. */
  wallet?: Gateway.JsonPayload | null;

  /** JavaScript file that must be injected into checkout header, or `null`. Appended from the service definition. */
  script!: string | null;

  /** Gateway theme payload used when passed to shop gateways. Source: nullable JSON `gateways.theme` cast. */
  theme?: Gateway.JsonPayload | null;

  /** Soft-delete timestamp when included. Source: `gateways.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `gateways.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `gateways.updated_at`. */
  updated_at?: string | null;

  /** Gateway aggregate data rows when `Gateway::data()` is eager-loaded. */
  data?: Gateway.DataRow[];

  /** Gateway transaction rows when dynamic `Gateway::transactions()` relation is eager-loaded. */
  transactions?: Record<string, unknown>[];

  constructor(data: { id: number } & Partial<Gateway.IGateway>) {
    Object.assign(this, data);
  }
}

export namespace Gateway {
  /** Flexible gateway JSON field shape; schemas differ by payment plugin and may be stored in text/json columns. */
  export type JsonPayload =
    | Record<string, unknown>
    | unknown[]
    | string
    | number
    | boolean;

  /** How a payment service collects money (`App\Gateway\enums\GatewayType`). */
  export type Type = "online" | "cod" | "cash" | "dir" | "blockchain";

  /** Known manual action options declared by the service definition. */
  export type ActionCode = "refund" | "delivery" | string;

  /** Gateway statistics row from `gateway_data`. */
  export interface DataRow {
    id: number;
    gateway_id: number;
    count: number;
    success: number;
    amount: number;
    wage: number;
    created_at?: string | null;
    updated_at?: string | null;
  }

  export interface IGateway {
    id: number;
    currency?: string;
    wage_percent?: number;
    wage_min?: number;
    wage_max?: number;
    min?: number;
    max?: number;
    enable?: boolean;
    type?: Type;
    charge?: boolean;
    pos?: boolean;
    cod?: boolean;
    cash?: boolean;
    dir?: boolean;
    blockchain?: boolean;
    subscription?: boolean;
    debug?: boolean;
    manual?: boolean;
    actions?: ActionCode[] | null;
    code?: string;
    name?: string;
    description?: string | null;
    public?: JsonPayload | null;
    private?: JsonPayload | null;
    logo?: string | null;
    icon?: string | null;
    url?: string | null;
    timeout?: number;
    network?: JsonPayload | null;
    wallet?: JsonPayload | null;
    script?: string | null;
    theme?: JsonPayload | null;
    deleted_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    data?: DataRow[];
    transactions?: Record<string, unknown>[];
  }
}
