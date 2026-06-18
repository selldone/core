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
 * ┏━━━━━━━━━━━━━━━━━ 🔔 Notification Repository 🔔 ━━━━━━━━━━━━━━━━━┓
 *  Notifications to show to the user in a web app.
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */
import {NotificationRepositoryType} from "../../enums/notification/NotificationRepositoryType";
import {Product} from "../shop/product/product.model";
import ProductType = Product.ProductType;

/**
 * Notification item shown to a user or shop in web applications.
 *
 * Backend source: `App\Backoffice\Notification\NotificationRepository`,
 * persisted in the `notifications_repository` table.
 */
export interface NotificationRepository {
  /**
   * Primary key of the notification repository row.
   */
  id: number;

  /**
   * Related notifiable owner ID.
   *
   * Backend uses Laravel morphs; common owners are user and shop records.
   */
  notifiable_id: number;

  /**
   * Related notifiable owner type.
   *
   * This is an implementation-level Laravel morph type and may be redacted by
   * some API/MCP outputs.
   */
  notifiable_type: string;

  /**
   * Notification type.
   *
   * Frontend enum source: `NotificationRepositoryType`; backend enum source:
   * `NotificationType`.
   */
  type: keyof typeof NotificationRepositoryType;

  /**
   * Notification message.
   *
   * Backend column is nullable text; some notifications rely mostly on `data`.
   */
  message: string | null;

  /**
   * Additional notification payload.
   *
   * Backend stores this as nullable JSONB. Known keys below are used by product,
   * category, note, and timeline mention notifications.
   */
  data?: NotificationRepository.Data | null;

  /**
   * Aggregated notification count for the same type/day.
   *
   * Backend default is `1`; repeated same-day notifications increment this row.
   */
  count: number;

  /**
   * Timestamp indicating when the notification was read.
   */
  read_at?: NotificationRepository.Timestamp | null;

  /**
   * Creation timestamp from Laravel `timestamps`.
   */
  created_at: NotificationRepository.Timestamp;

  /**
   * Last update timestamp from Laravel `timestamps`.
   */
  updated_at: NotificationRepository.Timestamp;

  /**
   * Loaded polymorphic notifiable relation, when explicitly included by the API.
   */
  notifiable?: Record<string, unknown>;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

export namespace NotificationRepository {
  /**
   * Laravel datetime fields are Carbon instances in PHP and ISO strings in JSON
   * responses. Some frontend callers hydrate them into `Date` objects.
   */
  export type Timestamp = string | Date;

  /**
   * Common notification JSON payload shape.
   */
  export interface Data extends Record<string, unknown> {
    /** Compact shop payload. */
    shop?: { id: number; title: string; name: string };

    /** Compact writer/user payload. */
    user?: { id: number; name: string };

    /** Compact basket payload used by timeline mention notifications. */
    basket?: { id: number; type: keyof typeof ProductType };

    /** Compact note payload used by note mention notifications. */
    note?: {
      id: number;
      element_id?: number | string | null;
      target_id?: number | string | null;
      target_type?: string | null;
    };

    /** Recent product IDs merged by backend for product notifications. */
    product_ids?: number[];

    /** Recent category IDs merged by backend for category notifications. */
    category_ids?: number[];
  }
}


export namespace NotificationRepository {
  /** JSON primitive accepted by notification payload metadata. */
  export type JsonPrimitive = string | number | boolean | null;

  /** JSON object used for repository payloads and relation projections. */
  export interface JsonObject {
    [key: string]: JsonValue | undefined;
  }

  /** JSON array used for repository payloads and relation projections. */
  export interface JsonArray extends Array<JsonValue> {}

  export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

  /** Compact notification repository projection used in list responses. */
  export interface CompactProjection {
    id: number;
    type?: string | null;
    title?: string | null;
    code?: string | null;
    enable?: boolean;
  }

  /** Safe payload for toggling or editing a notification repository row. */
  export interface ApiPatch {
    title?: string | null;
    description?: string | null;
    enable?: boolean;
    channels?: string[] | null;
    config?: JsonObject | null;
    meta?: JsonObject | null;
  }
}
