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
 * Global payment gateway definition.
 *
 * Backend source: `App\Shop\Gateway\Gateway`, table `gateways`.
 * The backend hides `wallet` by default and casts `public`, `private`, `info`, `network`, `theme`, and `actions` from
 * JSON. Shop-specific merchant credentials live in {@link ShopGateway}.
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

  /** Whether the gateway accepts Selldone service charges. Source: `gateways.charge`. */
  charge!: boolean;

  /** Whether the gateway is available in POS. Source: `gateways.pos`. */
  pos!: boolean;

  /** Whether cash-on-delivery/offline payment is supported. Source: `gateways.cod`. */
  cod!: boolean;

  /** Whether this is a cash/POS gateway. Source: `gateways.cash`. */
  cash!: boolean;

  /** Whether direct bank/card payment with receipt upload is supported. Source: `gateways.dir`. */
  dir!: boolean;

  /** Whether the gateway uses Selldone blockchain wallet flow. Source: `gateways.blockchain`. */
  blockchain!: boolean;

  /** Whether subscription payments are supported. Source: `gateways.subscription`. */
  subscription!: boolean;

  /** Whether debug/test mode is supported. Source: `gateways.debug`. */
  debug!: boolean;

  /** Whether seller manual confirmation is supported. Source: `gateways.manual`. */
  manual!: boolean;

  /** Manual action options such as `refund` and `deliver`, or `null`. Source: nullable JSON `gateways.actions`. */
  actions!: Gateway.ActionCode[] | null;

  /** Unique gateway/plugin code, max 16 chars. Source: `gateways.code`. */
  code!: string;

  /** Gateway display name, max 24 chars. Source: `gateways.name`. */
  name!: string;

  /** Gateway description, or `null`. Source: nullable text `gateways.description`. */
  description!: string | null;

  /** Public credential/config schema. Source: nullable JSON/text `gateways.public`. */
  public!: Gateway.JsonPayload | null;

  /** Private credential/config schema. Source: nullable JSON/text `gateways.private`. */
  private!: Gateway.JsonPayload | null;

  /** Gateway info schema/metadata. Source: nullable JSON/text `gateways.info`. */
  info!: Gateway.JsonPayload | null;

  /** Logo URL/path, or `null`. Source: nullable text `gateways.logo`. */
  logo!: string | null;

  /** Icon URL/path, or `null`. Source: nullable text `gateways.icon`. */
  icon!: string | null;

  /** Video URL, or `null`. Source: nullable text `gateways.video`. */
  video!: string | null;

  /** Gateway public URL/docs URL, or `null`. Source: nullable `gateways.url`. */
  url!: string | null;

  /** Admin/frontend component URL/name, or `null`. Source: nullable text `gateways.component`. */
  component!: string | null;

  /** Payment queue timeout in seconds. Source: `gateways.timeout`. */
  timeout!: number;

  /** Gateway network status payload. Source: nullable JSON `gateways.network` cast by `GatewayNetworkStatus`. */
  network!: Gateway.JsonPayload | null;

  /** Selldone wallet payload. Source: nullable JSON `gateways.wallet`; hidden by default. */
  wallet?: Gateway.JsonPayload | null;

  /** JavaScript file that must be injected into checkout header, or `null`. */
  script!: string | null;

  /** Gateway theme payload used when passed to shop gateways. Source: nullable JSON `gateways.theme` cast. */
  theme?: Gateway.JsonPayload | null;

  /** Soft-delete timestamp when included. Source: `gateways.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `gateways.created_at`. */
  created_at?: string;

  /** Last update timestamp. Source: `gateways.updated_at`. */
  updated_at?: string;

  /** Gateway aggregate data rows when `Gateway::data()` is eager-loaded. */
  data?: Gateway.DataRow[];

  constructor(data: { id: number } & Partial<Gateway.IGateway>) {
    Object.assign(this, data);
  }
}

export namespace Gateway {
  /** Flexible gateway JSON field shape; schemas differ by payment plugin. */
  export type JsonPayload = Record<string, unknown> | unknown[];

  /** Known manual action options stored in `gateways.actions`. */
  export type ActionCode = "refund" | "deliver" | string;

  /** Gateway statistics row from `gateway_data`. */
  export interface DataRow {
    id: number;
    gateway_id: number;
    count: number;
    success: number;
    amount: number;
    wage: number;
    created_at?: string;
    updated_at?: string;
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
    info?: JsonPayload | null;
    logo?: string | null;
    icon?: string | null;
    video?: string | null;
    url?: string | null;
    component?: string | null;
    timeout?: number;
    network?: JsonPayload | null;
    wallet?: JsonPayload | null;
    script?: string | null;
    theme?: JsonPayload | null;
    deleted_at?: string | null;
    created_at?: string;
    updated_at?: string;
    data?: DataRow[];
  }
}
