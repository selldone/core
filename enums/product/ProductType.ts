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

import physicalImage from "../../assets/product-types/physical.svg";
import physicalBasket from "../../assets/order-types/basket-physical.svg";

import virtualImage from "../../assets/product-types/virtual.svg";
import virtualBasket from "../../assets/order-types/basket-virtual.svg";

import fileImage from "../../assets/product-types/file.svg";
import fileBasket from "../../assets/order-types/basket-file.svg";

import serviceImage from "../../assets/product-types/service.svg";
import serviceBasket from "../../assets/order-types/basket-service.svg";

import subscriptionImage from "../../assets/product-types/subscription.svg";
import subscriptionBasket from "../../assets/order-types/basket-subscription.svg";
import {Basket} from "../../models";

export interface IProductType {
  /** Code of the product type. */
  code: string;

  /** Code for the basket associated with the product type. */
  basket_code: string;

  /** Name localization key for the product type. */
  name: string;

  /** Path to the product type's icon. */
  image: string;

  /** Path to the product type's basket image. */
  basket: string;

  /** Description localization key for the product type. */
  description: string;

  /** Indicates whether the product type is enabled. */
  enable: boolean;

  /** Name of the process page for the product type. */
  process_page: string;

  /** Name of the order page for the product type. */
  order_page: string;

  vendor_order_page: string;

  /** Primary color associated with the product type. */
  color: string;

  /** Array of colors associated with the product type. */
  colors: string[];

  /** States associated with the delivery of the product type. */
  delivery_states:
    | typeof Basket.PhysicalOrderStates
    | typeof Basket.VirtualOrderStates
    | typeof Basket.FileOrderStates
    | typeof Basket.ServiceOrderStates
    | typeof Basket.SubscriptionOrderStates;
}

export const ProductType: Record<
  "PHYSICAL" | "VIRTUAL" | "FILE" | "SERVICE" | "SUBSCRIPTION",
  IProductType
> = {
  PHYSICAL: {
    code: "PHYSICAL",
    basket_code: "SM",
    name: "global.product_types.physical",
    image: physicalImage,
    basket: physicalBasket,
    description: "global.product_types.physical_description",
    enable: true,
    process_page: "BPageShopOrdersPhysical",
    order_page: "BPageOrderPhysicalDashboard",
    vendor_order_page: "VendorProcessCenterPhysicalOrderPage_Dashboard",

    color: "#689F38",
    colors: ["#689F38", "#AFB42B"],
    delivery_states: Basket.PhysicalOrderStates,
  },
  VIRTUAL: {
    code: "VIRTUAL",
    basket_code: "SV",
    name: "global.product_types.virtual",
    image: virtualImage,
    basket: virtualBasket,
    description: "global.product_types.virtual_description",
    enable: true,
    process_page: "BPageShopOrdersVirtual",
    order_page: "BPageOrderVirtualDashboard",
    vendor_order_page: "VendorProcessCenterVirtualOrderPage_Dashboard",

    color: "#2196F3",
    colors: ["#2196F3", "#0097A7"],
    delivery_states: Basket.VirtualOrderStates,
  },
  FILE: {
    code: "FILE",
    basket_code: "SF",
    name: "global.product_types.file",
    image: fileImage,
    basket: fileBasket,
    description: "global.product_types.file_description",
    enable: true,
    process_page: "BPageShopOrdersFile",
    order_page: "BPageOrderFileDashboard",
    vendor_order_page: "VendorProcessCenterFileOrderPage_Dashboard",

    color: "#F57C00",
    colors: ["#F57C00", "#FBC02D"],
    delivery_states: Basket.FileOrderStates,
  },
  SERVICE: {
    code: "SERVICE",
    basket_code: "SS",
    name: "global.product_types.service",
    image: serviceImage,
    basket: serviceBasket,
    description: "global.product_types.service_description",
    enable: true,
    process_page: "BPageShopOrdersService",
    order_page: "BPageOrderServiceDashboard",
    vendor_order_page: "VendorProcessCenterServiceOrderPage_Dashboard",

    color: "#E91E63",
    colors: ["#E91E63", "#C2185B"],
    delivery_states: Basket.ServiceOrderStates,
  },

  SUBSCRIPTION: {
    code: "SUBSCRIPTION",
    basket_code: "SN",
    name: "global.product_types.subscription",
    image: subscriptionImage,
    basket: subscriptionBasket,
    description: "global.product_types.subscription_description",
    enable: true,
    process_page: "BPageShopOrdersSubscription",
    order_page: "BPageOrderSubscriptionDashboard",
    vendor_order_page: "VendorProcessCenterSubscriptionOrderPage_Dashboard",

    color: "#673AB7",
    colors: ["#673AB7", "#512DA8"],
    delivery_states: Basket.SubscriptionOrderStates,
  },
};
