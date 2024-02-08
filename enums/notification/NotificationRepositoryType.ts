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

import {ProductType} from "../product/ProductType";

/**
 * Defines the structure for notification type.
 */
interface INotificationType {
  code: string;
  title: string | null;
  description: string;
  icon: string;
  to?: (notification: any) => any | null; // Replace any with appropriate type
  color: string;
}

/**
 * Represents a new product notification.
 */
const NEW_PRODUCT: INotificationType = {
  code: "NEW_PRODUCT",
  title: "Add New Products",
  description: "{count}x new products have been added in {data.shop.title}.",
  icon: "library_add",
  to: (notification) => {
    const date = notification.created_at?.convertToLocalDate();
    const shop = notification.data?.shop;
    if (!shop) return null;

    return {
      name: "BPageShopProductsList",
      params: { shop_id: shop.id },
      query: {
        search: `new~${date.setStart().toISOString()}~${date
          .setEnd()
          .toISOString()}` /*Return for only this day!*/,
      },
    };
  },
  color: "#8BC34A",
};
/**
 * Represents a new category notification.
 */
const NEW_CATEGORY: INotificationType = {
  code: "NEW_CATEGORY",
  title: "Add New Categories",
  description: "{count}x new categories have been added in {data.shop.title}.",
  icon: "create_new_folder",
  color: "#1976D2",
};
/**
 * Represents a mention in a note notification.
 */
const MENTION_NOTE: INotificationType = {
  code: "MENTION_NOTE",
  title: null, // Show original message!
  description: "{data.user.name} Mention you in a note.",
  icon: "sticky_note_2",
  to: (notification) => {
    const shop = notification.data?.shop;
    if (!shop) return null;
    return notification.data?.note?.target_type === "product"
      ? {
          name: "BPageProductDashboard",
          params: {
            shop_id: shop.id,
            product_id: notification.data.note.target_id,
          },
          query: { element_id: notification.data.note.element_id },
        }
      : notification.data?.note?.target_type === "page"
        ? {
            name: "ShopPageBuilderPage",
            params: {
              shop_id: shop.id,
              page_id: notification.data.note.target_id,
            },
            query: { element_id: notification.data.note.element_id },
          }
        : notification.data?.note?.target_type === "popup"
          ? {
              name: "ShopPopupBuilderPage",
              params: {
                shop_id: shop.id,
                popup_id: notification.data.note.target_id,
              },
              query: { element_id: notification.data.note.element_id },
            }
          : null;
  },
  color: "#FFA000",
};
/**
 * Represents a mention in a timeline notification.
 */
const MENTION_TIMELINE: INotificationType = {
  code: "MENTION_TIMELINE",
  title: null, // Show original message!
  description:
    "{data.user.name} Mention you in an order [{data.basket.type}-{data.basket.id}].",
  icon: "shopping_bag",
  to: (notification) => {
    const basket = notification.data?.basket;
    const shop = notification.data?.shop;
    if (!basket || !shop) return null;
    const name =
      basket.type === ProductType.PHYSICAL.code
        ? "BPageOrderPhysicalTimeline"
        : basket.type === ProductType.VIRTUAL.code
          ? "ShopProcessCenterVirtualOrderPage_Timeline"
          : basket.type === ProductType.FILE.code
            ? "ShopProcessCenterFileOrderPage_Timeline"
            : basket.type === ProductType.SERVICE.code
              ? "ShopProcessCenterServiceOrderPage_Timeline"
              : basket.type === ProductType.SUBSCRIPTION.code
                ? "ShopProcessCenterSubscriptionOrderPage_Timeline"
                : basket.type === "AVO"
                  ? "ShopProcessCenterAvocadoOrderPage_Timeline"
                  : basket.type === "HYP"
                    ? "ShopProcessCenterHyperOrderPage_Timeline"
                    : basket.type === "POS"
                      ? "ShopProcessCenterPOSOrderPage_Timeline"
                      : basket.type === "FUL"
                        ? "ShopProcessCenterDropShippingOrderPage_Timeline"
                        : null;
    return { name: name, params: { shop_id: shop.id, basket_id: basket.id } };
  },
  color: "#303F9F",
};

/**
 * Aggregates all notification types into one constant for easy access.
 */
export const NotificationRepositoryType = {
  NEW_PRODUCT,
  NEW_CATEGORY,
  MENTION_NOTE,
  MENTION_TIMELINE,
};
