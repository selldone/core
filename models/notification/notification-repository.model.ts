/**
 * ┏━━━━━━━━━━━━━━━━━ 🔔 Notification Repository 🔔 ━━━━━━━━━━━━━━━━━┓
 *  Notifications to show to the user in a web app.
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 */
import {NotificationRepositoryType} from "../../enums/notification/NotificationRepositoryType";
import {Product} from "../shop/product/product.model";
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
    shop?:{id:number,title:string,name:string};
    user?:{id:number,name:string};
    basket?:{id:number,type:keyof typeof ProductType};
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

