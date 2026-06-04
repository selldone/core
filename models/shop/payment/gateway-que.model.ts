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

import type { User } from "../../user/user.model";

/**
 * Pending payment queue row.
 *
 * Backend source: `App\Gateway\GatewayQue`, table `gateway_que`.
 * Created when a gateway transaction is issued and deleted after payment/expiration checks. `transaction_*` and
 * `order_*` are Laravel morph columns.
 */
export interface GatewayQue {
  /** Queue id. Source: `gateway_que.id`. */
  id: number;

  /** Gateway code. Source: `gateway_que.code`, FK to `gateways.code`. */
  code: string;

  /** Shop id, or `null` for non-shop payments. Source: nullable `gateway_que.shop_id`. */
  shop_id: number | null;

  /** Paying user id, or `null`. Source: nullable `gateway_que.user_id`. */
  user_id: number | null;

  /** Issue timestamp, or `null`. Source: nullable `gateway_que.issued_at`. */
  issued_at: string | null;

  /** Expiration timestamp, or `null`. Source: nullable `gateway_que.expire_at`. */
  expire_at: string | null;

  /** Morph transaction id. Source: `gateway_que.transaction_id`. */
  transaction_id: number;

  /** Morph transaction class/type. Source: `gateway_que.transaction_type`. */
  transaction_type: string;

  /** Morph order id. Source: `gateway_que.order_id`. */
  order_id: number;

  /** Morph order class/type. Source: `gateway_que.order_type`. */
  order_type: string;

  /** Creation timestamp. Source: `gateway_que.created_at`. */
  created_at?: string;

  /** Last update timestamp. Source: `gateway_que.updated_at`. */
  updated_at?: string;

  /** Paying user relation when eager-loaded. */
  user?: User | Record<string, unknown> | null;

  /** Shop relation when eager-loaded. */
  shop?: Record<string, unknown> | null;

  /** Gateway transaction morph relation when eager-loaded. */
  transaction?: Record<string, unknown>;

  /** Payment order morph relation when eager-loaded. */
  order?: Record<string, unknown>;
}
