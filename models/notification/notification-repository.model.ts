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
import { Product } from "../shop/product/product.model";
import ProductType = Product.ProductType;

export interface NotificationRepository {
  /**
   * Unique identifier for the notification.
   */
  id: number;

  /**
   * Identifier for the notifiable entity.
   */
  notifiable_id: number;

  /**
   * Type of the notifiable entity.
   */
  notifiable_type: string;

  /**
   * Type of the notification.
   */
  type: keyof typeof NotificationRepositoryType;

  /**
   * The message of the notification.
   */
  message: string;

  /**
   * Additional data associated with the notification.
   */
  data?: {
    shop?: { id: number; title: string; name: string };
    user?: { id: number; name: string };
    basket?: { id: number; type: keyof typeof ProductType };
  };

  /**
   * Count of notifications.
   */
  count: number;

  /**
   * Timestamp indicating when the notification was read.
   */
  read_at?: string;

  /**
   * Timestamp indicating when the notification was created.
   */
  created_at: string;

  /**
   * Timestamp indicating the last time the notification was updated.
   */
  updated_at: string;
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

