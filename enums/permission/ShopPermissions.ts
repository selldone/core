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

import adminIcon from "./assets/permissions/admin.svg";
import productIcon from "./assets/permissions/product.svg";
import auditingIcon from "./assets/permissions/auditing.svg";
import contentIcon from "./assets/permissions/content.svg";
import officerIcon from "./assets/permissions/officer.svg";
import employeeIcon from "./assets/permissions/employee.svg";
import marketingIcon from "./assets/permissions/marketing.svg";
import viewerIcon from "./assets/permissions/viewer.svg";

export const ShopPermissionRegions = {
  DASHBOARD: {code:'DASHBOARD', name: "admin_shop.menu.dashboard", icon: "dashboard" },
  PRODUCTS: {code:'PRODUCTS', name: "admin_shop.menu.products", icon: "apps" },
  BLOG: {code:'BLOG',  name: "admin_shop.menu.blog", icon: "fa:fas fa-blog" },
  ORDERS: {
    code:'ORDERS',
    name: "admin_shop.menu.process_center",
    icon: "fa:fas fa-cart-arrow-down",
  },
  CHANNELS: {code:'CHANNELS',  name: "admin_shop.menu.channels", icon: "mediation" },
  ACCOUNTING: {
    code:'ACCOUNTING',
    name: "admin_shop.menu.auditing",
    icon: "fa:fas fa-cash-register",
  },
  INCENTIVES: { code:'INCENTIVES', name: "admin_shop.menu.incentives", icon: "local_play" },
  MARKETING: { code:'MARKETING', name: "admin_shop.menu.marketing", icon: "fa:fas fa-bullhorn" },
  LOGISTIC: {
    code:'LOGISTIC',
    name: "admin_shop.menu.logistic",
    icon: "fa:fas fa-boxes-packing",
  },
  CUSTOMERS: {
    code:'CUSTOMERS',
    name: "admin_shop.menu.customers",
    icon: "supervised_user_circle",
  },
  CATEGORIES: {code:'CATEGORIES',  name: "admin_shop.menu.classification", icon: "class" },
  PAGES: {code:'PAGES',  name: "admin_shop.menu.pages", icon: "fa:fas fa-drafting-compass" },
  ACCESS: {code:'ACCESS',  name: "admin_shop.menu.access", icon: "fa:fas fa-id-badge" },
  APPLICATIONS: {
    code:'APPLICATIONS',
    name: "admin_shop.menu.application",
    icon: "fa:fas fa-mobile",
  },
  AUTOMATION: {code:'AUTOMATION',  name: "admin_shop.menu.automation", icon: "offline_bolt" },
  SETTINGS: { code:'SETTINGS', name: "admin_shop.menu.edit", icon: "settings" },
};

export const ShopPermissions = {
  ADMIN: {
    text: "shop_permissions.ADMIN.text",
    code: "ADMIN",
    description: "shop_permissions.ADMIN.description",
    src: adminIcon,
    levels: Object.values(ShopPermissionRegions),
  },
  PRODUCT: {
    text: "shop_permissions.PRODUCT.text",
    code: "PRODUCT",
    description: "shop_permissions.PRODUCT.description",
    src: productIcon,
    levels: [ShopPermissionRegions.PRODUCTS, ShopPermissionRegions.CATEGORIES, ShopPermissionRegions.BLOG, ShopPermissionRegions.LOGISTIC],
  },
  AUDITING: {
    text: "shop_permissions.AUDITING.text",
    code: "AUDITING",
    description: "shop_permissions.AUDITING.description",
    src: auditingIcon,
    levels: [ShopPermissionRegions.ORDERS, ShopPermissionRegions.ACCOUNTING, ShopPermissionRegions.INCENTIVES],
  },
  CONTENT: {
    text: "shop_permissions.CONTENT.text",
    code: "CONTENT",
    description: "shop_permissions.CONTENT.description",
    src: contentIcon,
    levels: [ShopPermissionRegions.BLOG, ShopPermissionRegions.PAGES],
  },
  OFFICER: {
    text: "shop_permissions.OFFICER.text",
    code: "OFFICER",
    description: "shop_permissions.OFFICER.description",
    src: officerIcon,
    levels: [
      ShopPermissionRegions.DASHBOARD,
      ShopPermissionRegions.PRODUCTS,
      ShopPermissionRegions.BLOG,
      ShopPermissionRegions.ORDERS,
      ShopPermissionRegions.ACCOUNTING,
      ShopPermissionRegions.INCENTIVES,
      ShopPermissionRegions.MARKETING,
      ShopPermissionRegions.LOGISTIC,
      ShopPermissionRegions.CUSTOMERS,
      ShopPermissionRegions.CATEGORIES,
      ShopPermissionRegions.PAGES,
      ShopPermissionRegions.AUTOMATION,
    ],
  },
  EMPLOYEE: {
    text: "shop_permissions.EMPLOYEE.text",
    code: "EMPLOYEE",
    description: "shop_permissions.EMPLOYEE.description",
    src: employeeIcon,
    levels: [ShopPermissionRegions.PRODUCTS, ShopPermissionRegions.BLOG, ShopPermissionRegions.ORDERS, ShopPermissionRegions.LOGISTIC],
  },
  MARKETING: {
    text: "shop_permissions.MARKETING.text",
    code: "MARKETING",
    description: "shop_permissions.MARKETING.description",
    src: marketingIcon,
    levels: [ShopPermissionRegions.MARKETING],
  },
  VIEWER: {
    text: "shop_permissions.VIEWER.text",
    code: "VIEWER",
    description: "shop_permissions.VIEWER.description",
    src: viewerIcon,
    levels: [],
  },
};
