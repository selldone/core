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

import type { Gateway } from "./gateway.model";

/**
 * Shop-specific payment gateway configuration.
 *
 * Backend source: `App\Shop\Gateway\ShopGateway`, table `shop_gateways`.
 * This row stores merchant credentials/config for a global {@link Gateway}. Sensitive fields may be omitted or
 * redacted by backend endpoints. `SetShopGateway()` restores soft-deleted rows and disables `manual` when the global
 * gateway does not support seller-side manual confirmation.
 */
export class ShopGateway implements ShopGateway.IShopGateway {
  /** Shop gateway id. Source: `shop_gateways.id`. */
  id!: number;

  /** Owning shop id. Source: `shop_gateways.shop_id`. */
  shop_id!: number;

  /** Global gateway id. Source: `shop_gateways.gateway_id`. */
  gateway_id!: number;

  /** Whether merchant gateway is in live mode. Source: `shop_gateways.livemode`. */
  livemode!: boolean;

  /** Public merchant credential/config values. Source: nullable JSON/text `shop_gateways.public`. */
  public!: ShopGateway.JsonPayload | null;

  /** Private merchant credential/config values. Source: nullable JSON/text `shop_gateways.private`. */
  private!: ShopGateway.JsonPayload | null;

  /** Gateway-specific info payload. Source: nullable JSON/text `shop_gateways.info`. */
  info!: ShopGateway.JsonPayload | null;

  /** Access token, or `null`. Source: nullable text `shop_gateways.token`. */
  token!: string | null;

  /** Whether this gateway is enabled for the shop. Source: `shop_gateways.enable`. */
  enable!: boolean;

  /** Whether seller manual confirmation is enabled. Source: `shop_gateways.manual`. */
  manual!: boolean;

  /**
   * Custom pay button caption.
   *
   * Backend model documents this as string, but the original migration created a nullable boolean column. Existing
   * API key is preserved and the type accepts both known storage forms.
   */
  caption!: string | boolean | null;

  /** Gateway runtime config, for example Stripe payment methods. Source: nullable JSON `shop_gateways.config`. */
  config!: ShopGateway.JsonPayload | null;

  /** Gateway theme config. Source: nullable JSON `shop_gateways.theme`. */
  theme!: ShopGateway.JsonPayload | null;

  /** Private key-value metadata, for example third-party customer/portal ids. Source: nullable JSON `shop_gateways.meta`. */
  meta!: Record<string, unknown> | null;

  /** Minimum order amount required to use this gateway. Source: `shop_gateways.limit`. */
  limit?: number;

  /** Soft-delete timestamp when included. Source: `shop_gateways.deleted_at`. */
  deleted_at?: string | null;

  /** Creation timestamp. Source: `shop_gateways.created_at`. */
  created_at?: string | null;

  /** Last update timestamp. Source: `shop_gateways.updated_at`. */
  updated_at?: string | null;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown> | null;

  /** Global gateway relation when eager-loaded. */
  gateway?: Gateway;

  /** Shop gateway aggregate data rows when `ShopGateway::data()` is eager-loaded. */
  data?: ShopGateway.DataRow[];

  constructor(data: { id: number; gateway_id: number } & Partial<ShopGateway.IShopGateway>) {
    Object.assign(this, data);
  }
}

export namespace ShopGateway {
  /** Flexible gateway JSON field shape; schemas differ by payment plugin and may be stored in text/json columns. */
  export type JsonPayload =
    | Record<string, unknown>
    | unknown[]
    | string
    | number
    | boolean;

  /** Shop gateway statistics row from `shop_gateway_data`. */
  export interface DataRow {
    id: number;
    shop_gateway_id: number;
    count: number;
    success: number;
    amount: number;
    wage: number;
    created_at?: string | null;
    updated_at?: string | null;
  }

  export interface IShopGateway {
    id: number;
    shop_id: number;
    gateway_id: number;
    livemode: boolean;
    public: JsonPayload | null;
    private: JsonPayload | null;
    info: JsonPayload | null;
    token: string | null;
    enable: boolean;
    manual: boolean;
    caption: string | boolean | null;
    config: JsonPayload | null;
    theme: JsonPayload | null;
    meta: Record<string, unknown> | null;
    limit?: number;
    deleted_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    shop?: Record<string, unknown> | null;
    gateway?: Gateway;
    data?: DataRow[];
  }
}
