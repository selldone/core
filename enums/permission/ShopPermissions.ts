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

export const LEVELS = {
  DASHBOARD: { name: "admin_shop.menu.dashboard", icon: "dashboard" },
  PRODUCTS: { name: "admin_shop.menu.products", icon: "apps" },
  BLOG: { name: "admin_shop.menu.blog", icon: "fa:fas fa-blog" },
  ORDERS: {
    name: "admin_shop.menu.process_center",
    icon: "fa:fas fa-cart-arrow-down",
  },
  CHANNELS: { name: "admin_shop.menu.channels", icon: "mediation" },
  ACCOUNTING: {
    name: "admin_shop.menu.auditing",
    icon: "fa:fas fa-cash-register",
  },
  INCENTIVES: { name: "admin_shop.menu.incentives", icon: "local_play" },
  MARKETING: { name: "admin_shop.menu.marketing", icon: "fa:fas fa-bullhorn" },
  LOGISTIC: {
    name: "admin_shop.menu.logistic",
    icon: "fa:fas fa-boxes-packing",
  },
  CUSTOMERS: {
    name: "admin_shop.menu.customers",
    icon: "supervised_user_circle",
  },
  CATEGORIES: { name: "admin_shop.menu.classification", icon: "class" },
  PAGES: { name: "admin_shop.menu.pages", icon: "fa:fas fa-drafting-compass" },
  ACCESS: { name: "admin_shop.menu.access", icon: "fa:fas fa-id-badge" },
  APPLICATIONS: {
    name: "admin_shop.menu.application",
    icon: "fa:fas fa-mobile",
  },
  AUTOMATION: { name: "admin_shop.menu.automation", icon: "offline_bolt" },
  SETTINGS: { name: "admin_shop.menu.edit", icon: "settings" },
};

export const ShopPermissions = {
  ADMIN: {
    text: "shop_permissions.ADMIN.text",
    code: "ADMIN",
    description: "shop_permissions.ADMIN.description",
    src: adminIcon,
    levels: Object.values(LEVELS),
  },
  PRODUCT: {
    text: "shop_permissions.PRODUCT.text",
    code: "PRODUCT",
    description: "shop_permissions.PRODUCT.description",
    src: productIcon,
    levels: [LEVELS.PRODUCTS, LEVELS.CATEGORIES, LEVELS.BLOG, LEVELS.LOGISTIC],
  },
  AUDITING: {
    text: "shop_permissions.AUDITING.text",
    code: "AUDITING",
    description: "shop_permissions.AUDITING.description",
    src: auditingIcon,
    levels: [LEVELS.ORDERS, LEVELS.ACCOUNTING, LEVELS.INCENTIVES],
  },
  CONTENT: {
    text: "shop_permissions.CONTENT.text",
    code: "CONTENT",
    description: "shop_permissions.CONTENT.description",
    src: contentIcon,
    levels: [LEVELS.BLOG, LEVELS.PAGES],
  },
  OFFICER: {
    text: "shop_permissions.OFFICER.text",
    code: "OFFICER",
    description: "shop_permissions.OFFICER.description",
    src: officerIcon,
    levels: [
      LEVELS.DASHBOARD,
      LEVELS.PRODUCTS,
      LEVELS.BLOG,
      LEVELS.ORDERS,
      LEVELS.ACCOUNTING,
      LEVELS.INCENTIVES,
      LEVELS.MARKETING,
      LEVELS.LOGISTIC,
      LEVELS.CUSTOMERS,
      LEVELS.CATEGORIES,
      LEVELS.PAGES,
      LEVELS.AUTOMATION,
    ],
  },
  EMPLOYEE: {
    text: "shop_permissions.EMPLOYEE.text",
    code: "EMPLOYEE",
    description: "shop_permissions.EMPLOYEE.description",
    src: employeeIcon,
    levels: [LEVELS.PRODUCTS, LEVELS.BLOG, LEVELS.ORDERS, LEVELS.LOGISTIC],
  },
  MARKETING: {
    text: "shop_permissions.MARKETING.text",
    code: "MARKETING",
    description: "shop_permissions.MARKETING.description",
    src: marketingIcon,
    levels: [LEVELS.MARKETING],
  },
  VIEWER: {
    text: "shop_permissions.VIEWER.text",
    code: "VIEWER",
    description: "shop_permissions.VIEWER.description",
    src: viewerIcon,
    levels: [],
  },
};
