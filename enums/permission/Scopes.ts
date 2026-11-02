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

import { getScopeIcon } from "./ScopeIcons";

export const ScopeGroup = {
  Backoffice: {
    title: "scope_group.backoffice.title",
    description: "scope_group.backoffice.description",
    icon: "space_dashboard",
  },
  Storefront: {
    title: "scope_group.storefront.title",
    description: "scope_group.storefront.description",
    icon: "storefront",
  },
  Vendor: {
    title: "scope_group.vendor.title",
    description: "scope_group.vendor.description",
    icon: "corporate_fare",
  },

  Profile: {
    title: "scope_group.profile.title",
    description: "scope_group.profile.description",
    icon: "account_circle",
  },

  Connect: {
    title: "scope_group.connect.title",
    description: "scope_group.connect.description",
    icon: "hub",
  },

  Selldone: {
    title: "scope_group.selldone.title",
    description: "scope_group.selldone.description",
    icon: "space_dashboard",
  },

  Agency: {
    title: "scope_group.agency.title",
    description: "scope_group.agency.description",
    icon: "extension",
  },

  Others: {
    title: "scope_group.others.title",
    description: "scope_group.others.description",
    icon: "fence",
  },
};

export const Scopes = {
  /**
   * ━━━━━━━━━━━━━━━ profile (share between shop customer & selldone user) ━━━━━━━━━━━━━━━
   */
  profile: {
    group: ScopeGroup.Profile,
    code: "profile",
    name: "scopes.profile.name",
    icon: getScopeIcon("profile"),
    description: "scopes.profile.description",
  },
  phone: {
    group: ScopeGroup.Profile,
    code: "phone",
    name: "scopes.phone.name",
    icon: getScopeIcon("phone"),
    description: "scopes.phone.description",
  },
  address: {
    group: ScopeGroup.Profile,
    code: "address",
    name: "scopes.address.name",
    icon: getScopeIcon("address"),
    description: "scopes.address.description",
  },

  "user:profile:write": {
    group: ScopeGroup.Profile,
    code: "user:profile:write",
    name: "scopes.user:profile:write.name",
    description: "scopes.user:profile:write.description",
    icon: getScopeIcon("user:profile:write"),
  },

  /**
   * ━━━━━━━━━━━━━━━ vendor (vendor) ━━━━━━━━━━━━━━━
   */
  "vendor-read": {
    group: ScopeGroup.Vendor,
    code: "vendor-read",
    name: "scopes.vendor-read.name",
    description: "scopes.vendor-read.description",
    icon: getScopeIcon("vendor-read"),
  },
  "vendor-write": {
    group: ScopeGroup.Vendor,
    code: "vendor-write",
    name: "scopes.vendor-write.name",
    description: "scopes.vendor-write.description",
    icon: getScopeIcon("vendor-write"),
  },

  /**
   * ━━━━━━━━━━━━━━━ Connect (3rd party services) ━━━━━━━━━━━━━━━
   */
  "connect:provider:write": {
    group: ScopeGroup.Connect,
    code: "connect:provider:write",
    name: "scopes.connect:provider:write.name",
    description: "scopes.connect:provider:write.description",
    icon: getScopeIcon("connect:provider:write"),
  },
  "connect:provider:read": {
    group: ScopeGroup.Connect,
    code: "connect:provider:read",
    name: "scopes.connect:provider:read.name",
    description: "scopes.connect:provider:read.description",
    icon: getScopeIcon("connect:provider:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ storefront (customer) ━━━━━━━━━━━━━━━
   */
  buy: {
    group: ScopeGroup.Storefront,
    code: "buy",
    name: "scopes.buy.name",
    icon: getScopeIcon("buy"),
    description: "scopes.buy.description",
  },
  "order-history": {
    group: ScopeGroup.Storefront,
    code: "order-history",
    name: "scopes.order-history.name",
    icon: getScopeIcon("order-history"),
    description: "scopes.order-history.description",
  },
  "my-gift-cards": {
    group: ScopeGroup.Storefront,
    code: "my-gift-cards",
    name: "scopes.my-gift-cards.name",
    icon: getScopeIcon("my-gift-cards"),
    description: "scopes.my-gift-cards.description",
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:notification ━━━━━━━━━━━━━━━
   */
  "backoffice:notifications": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:notifications",
    name: "scopes.backoffice:notifications.name",
    description: "scopes.backoffice:notifications.description",
    icon: getScopeIcon("backoffice:notifications"),
  },
  /**
   * ━━━━━━━━━━━━━━━ backoffice:shops ━━━━━━━━━━━━━━━
   */
  "backoffice:shop:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:shop:read",
    name: "scopes.backoffice:shop:read.name",
    description: "scopes.backoffice:shop:read.description",
    icon: getScopeIcon("backoffice:shop:read"),
  },

  "backoffice:shop:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:shop:write",
    name: "scopes.backoffice:shop:write.name",
    description: "scopes.backoffice:shop:write.description",
    icon: getScopeIcon("backoffice:shop:write"),
  },

  "backoffice:shop:add": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:shop:add",
    name: "scopes.backoffice:shop:add.name",
    description: "scopes.backoffice:shop:add.description",
    icon: getScopeIcon("backoffice:shop:add"),
  },
  "backoffice:shop:delete": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:shop:delete",
    name: "scopes.backoffice:shop:delete.name",
    description: "scopes.backoffice:shop:delete.description",
    icon: getScopeIcon("backoffice:shop:delete"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:article (Just for shop blog, product) ━━━━━━━━━━━━━━━
   */
  articles: {
    group: ScopeGroup.Backoffice,
    code: "articles",
    name: "scopes.articles.name",
    description: "scopes.articles.description",
    icon: getScopeIcon("articles"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:wallet ━━━━━━━━━━━━━━━
   */
  "backoffice:wallet:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:wallet:write",
    name: "scopes.backoffice:wallet:write.name",
    description: "scopes.backoffice:wallet:write.description",
    icon: getScopeIcon("backoffice:wallet:write"),
  },
  "backoffice:wallet:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:wallet:read",
    name: "scopes.backoffice:wallet:read.name",
    description: "scopes.backoffice:wallet:read.description",
    icon: getScopeIcon("backoffice:wallet:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:backoffice:support-tickets ━━━━━━━━━━━━━━━
   */

  "backoffice:support-tickets": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:support-tickets",
    name: "scopes.backoffice:support-tickets.name",
    description: "scopes.backoffice:support-tickets.description",
    icon: getScopeIcon("backoffice:support-tickets"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:giftcard ━━━━━━━━━━━━━━━
   */
  "backoffice:giftcard:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:giftcard:write",
    name: "scopes.backoffice:giftcard:write.name",
    description: "scopes.backoffice:giftcard:write.description",
    icon: getScopeIcon("backoffice:giftcard:write"),
  },
  "backoffice:giftcard:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:giftcard:read",
    name: "scopes.backoffice:giftcard:read.name",
    description: "scopes.backoffice:giftcard:read.description",
    icon: getScopeIcon("backoffice:giftcard:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:faq ━━━━━━━━━━━━━━━
   */
  "backoffice:faq:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:faq:write",
    name: "scopes.backoffice:faq:write.name",
    description: "scopes.backoffice:faq:write.description",
    icon: getScopeIcon("backoffice:faq:write"),
  },
  "backoffice:faq:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:faq:read",
    name: "scopes.backoffice:faq:read.name",
    description: "scopes.backoffice:faq:read.description",
    icon: getScopeIcon("backoffice:faq:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:category ━━━━━━━━━━━━━━━
   */

  "backoffice:category:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:category:write",
    name: "scopes.backoffice:category:write.name",
    description: "scopes.backoffice:category:write.description",
    icon: getScopeIcon("backoffice:category:write"),
  },
  "backoffice:category:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:category:read",
    name: "scopes.backoffice:category:read.name",
    description: "scopes.backoffice:category:read.description",
    icon: getScopeIcon("backoffice:category:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:product ━━━━━━━━━━━━━━━
   */
  "backoffice:product:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:product:write",
    name: "scopes.backoffice:product:write.name",
    description: "scopes.backoffice:product:write.description",
    icon: getScopeIcon("backoffice:product:write"),
  },
  "backoffice:product:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:product:read",
    name: "scopes.backoffice:product:read.name",
    description: "scopes.backoffice:product:read.description",
    icon: getScopeIcon("backoffice:product:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:report ━━━━━━━━━━━━━━━
   */
  "backoffice:report:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:report:read",
    name: "scopes.backoffice:report:read.name",
    description: "scopes.backoffice:report:read.description",
    icon: getScopeIcon("backoffice:report:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:finance ━━━━━━━━━━━━━━━
   */
  "backoffice:finance:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:finance:write",
    name: "scopes.backoffice:finance:write.name",
    description: "scopes.backoffice:finance:write.description",
    icon: getScopeIcon("backoffice:finance:write"),
  },
  "backoffice:finance:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:finance:read",
    name: "scopes.backoffice:finance:read.name",
    description: "scopes.backoffice:finance:read.description",
    icon: getScopeIcon("backoffice:finance:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:page ━━━━━━━━━━━━━━━
   */
  "backoffice:page:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:page:write",
    name: "scopes.backoffice:page:write.name",
    description: "scopes.backoffice:page:write.description",
    icon: getScopeIcon("backoffice:page:write"),
  },
  "backoffice:page:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:page:read",
    name: "scopes.backoffice:page:read.name",
    description: "scopes.backoffice:page:read.description",
    icon: getScopeIcon("backoffice:page:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:logistic ━━━━━━━━━━━━━━━
   */

  "backoffice:logistic:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:logistic:write",
    name: "scopes.backoffice:logistic:write.name",
    description: "scopes.backoffice:logistic:write.description",
    icon: getScopeIcon("backoffice:logistic:write"),
  },
  "backoffice:logistic:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:logistic:read",
    name: "scopes.backoffice:logistic:read.name",
    description: "scopes.backoffice:logistic:read.description",
    icon: getScopeIcon("backoffice:logistic:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:staff ━━━━━━━━━━━━━━━
   */
  "backoffice:staff:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:staff:write",
    name: "scopes.backoffice:staff:write.name",
    description: "scopes.backoffice:staff:write.description",
    icon: getScopeIcon("backoffice:staff:write"),
  },
  "backoffice:staff:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:staff:read",
    name: "scopes.backoffice:staff:read.name",
    description: "scopes.backoffice:staff:read.description",
    icon: getScopeIcon("backoffice:staff:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:business-profile ━━━━━━━━━━━━━━━
   */
  "backoffice:business-profile:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:business-profile:write",
    name: "scopes.backoffice:business-profile:write.name",
    description: "scopes.backoffice:business-profile:write.description",
    icon: getScopeIcon("backoffice:business-profile:write"),
  },
  "backoffice:business-profile:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:business-profile:read",
    name: "scopes.backoffice:business-profile:read.name",
    description: "scopes.backoffice:business-profile:read.description",
    icon: getScopeIcon("backoffice:business-profile:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:discount-code ━━━━━━━━━━━━━━━
   */

  "backoffice:discount-code:write": {
    code: "backoffice:discount-code:write",
    name: "scopes.backoffice:discount-code:write.name",
    description: "scopes.backoffice:discount-code:write.description",
    icon: getScopeIcon("backoffice:discount-code:write"),
  },
  "backoffice:discount-code:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:discount-code:read",
    name: "scopes.backoffice:discount-code:read.name",
    description: "scopes.backoffice:discount-code:read.description",
    icon: getScopeIcon("backoffice:discount-code:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:order ━━━━━━━━━━━━━━━
   */
  "backoffice:order:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:order:read",
    name: "scopes.backoffice:order:read.name",
    description: "scopes.backoffice:order:read.description",
    icon: getScopeIcon("backoffice:order:read"),
  },
  "backoffice:order:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:order:write",
    name: "scopes.backoffice:order:write.name",
    description: "scopes.backoffice:order:write.description",
    icon: getScopeIcon("backoffice:order:write"),
  },


  /**
   * ━━━━━━━━━━━━━━━ backoffice:coupon ━━━━━━━━━━━━━━━
   */
  "backoffice:coupon:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:coupon:write",
    name: "scopes.backoffice:coupon:write.name",
    description: "scopes.backoffice:coupon:write.description",
    icon: getScopeIcon("backoffice:coupon:write"),
  },
  "backoffice:coupon:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:coupon:read",
    name: "scopes.backoffice:coupon:read.name",
    description: "scopes.backoffice:coupon:read.description",
    icon: getScopeIcon("backoffice:coupon:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:offer ━━━━━━━━━━━━━━━
   */
  "backoffice:offer:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:offer:write",
    name: "scopes.backoffice:offer:write.name",
    description: "scopes.backoffice:offer:write.description",
    icon: getScopeIcon("backoffice:offer:write"),
  },
  "backoffice:offer:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:offer:read",
    name: "scopes.backoffice:offer:read.name",
    description: "scopes.backoffice:offer:read.description",
    icon: getScopeIcon("backoffice:offer:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:cashback ━━━━━━━━━━━━━━━
   */
  "backoffice:cashback:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:cashback:write",
    name: "scopes.backoffice:cashback:write.name",
    description: "scopes.backoffice:cashback:write.description",
    icon: getScopeIcon("backoffice:cashback:write"),
  },
  "backoffice:cashback:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:cashback:read",
    name: "scopes.backoffice:cashback:read.name",
    description: "scopes.backoffice:cashback:read.description",
    icon: getScopeIcon("backoffice:cashback:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:lottery ━━━━━━━━━━━━━━━
   */
  "backoffice:lottery:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:lottery:write",
    name: "scopes.backoffice:lottery:write.name",
    description: "scopes.backoffice:lottery:write.description",
    icon: getScopeIcon("backoffice:lottery:write"),
  },
  "backoffice:lottery:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:lottery:read",
    name: "scopes.backoffice:lottery:read.name",
    description: "scopes.backoffice:lottery:read.description",
    icon: getScopeIcon("backoffice:lottery:read"),
  },
  /**
   * ━━━━━━━━━━━━━━━ backoffice:community ━━━━━━━━━━━━━━━
   */
  "backoffice:community:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:community:write",
    name: "scopes.backoffice:community:write.name",
    description: "scopes.backoffice:community:write.description",
    icon: getScopeIcon("backoffice:community:write"),
  },
  "backoffice:community:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:community:read",
    name: "scopes.backoffice:community:read.name",
    description: "scopes.backoffice:community:read.description",
    icon: getScopeIcon("backoffice:community:read"),
  },
  /**
   * ━━━━━━━━━━━━━━━ backoffice:customer ━━━━━━━━━━━━━━━
   */
  "backoffice:customer:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:customer:write",
    name: "scopes.backoffice:customer:write.name",
    description: "scopes.backoffice:customer:write.description",
    icon: getScopeIcon("backoffice:customer:write"),
  },
  "backoffice:customer:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:customer:read",
    name: "scopes.backoffice:customer:read.name",
    description: "scopes.backoffice:customer:read.description",
    icon: getScopeIcon("backoffice:customer:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:ribbon ━━━━━━━━━━━━━━━
   */
  "backoffice:ribbon:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:ribbon:write",
    name: "scopes.backoffice:ribbon:write.name",
    description: "scopes.backoffice:ribbon:write.description",
    icon: getScopeIcon("backoffice:ribbon:write"),
  },
  "backoffice:ribbon:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:ribbon:read",
    name: "scopes.backoffice:ribbon:read.name",
    description: "scopes.backoffice:ribbon:read.description",
    icon: getScopeIcon("backoffice:ribbon:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:ai ━━━━━━━━━━━━━━━
   */
  "backoffice:ai:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:ai:write",
    name: "scopes.backoffice:ai:write.name",
    description: "scopes.backoffice:ai:write.description",
    icon: getScopeIcon("backoffice:ai:write"),
  },
  "backoffice:ai:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:ai:read",
    name: "scopes.backoffice:ai:read.name",
    description: "scopes.backoffice:ai:read.description",
    icon: getScopeIcon("backoffice:ai:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:vendor-payment ━━━━━━━━━━━━━━━
   */
  "backoffice:vendor-payment:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:vendor-payment:write",
    name: "scopes.backoffice:vendor-payment:write.name",
    description: "scopes.backoffice:vendor-payment:write.description",
    icon: getScopeIcon("backoffice:vendor-payment:write"),
  },
  "backoffice:vendor-payment:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:vendor-payment:read",
    name: "scopes.backoffice:vendor-payment:read.name",
    description: "scopes.backoffice:vendor-payment:read.description",
    icon: getScopeIcon("backoffice:vendor-payment:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:company ━━━━━━━━━━━━━━━
   */
  "backoffice:company:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:company:read",
    name: "scopes.backoffice:company:read.name",
    description: "scopes.backoffice:company:read.description",
    icon: getScopeIcon("backoffice:company:read"),
  },
  "backoffice:company:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:company:write",
    name: "scopes.backoffice:company:write.name",
    description: "scopes.backoffice:company:write.description",
    icon: getScopeIcon("backoffice:company:write"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:note ━━━━━━━━━━━━━━━
   */
  "backoffice:note:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:note:read",
    name: "scopes.backoffice:note:read.name",
    description: "scopes.backoffice:note:read.description",
    icon: getScopeIcon("backoffice:note:read"),
  },
  "backoffice:note:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:note:write",
    name: "scopes.backoffice:note:write.name",
    description: "scopes.backoffice:note:write.description",
    icon: getScopeIcon("backoffice:note:write"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:affiliate ━━━━━━━━━━━━━━━
   */
  "backoffice:affiliate:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:affiliate:write",
    name: "scopes.backoffice:affiliate:write.name",
    description: "scopes.backoffice:affiliate:write.description",
    icon: getScopeIcon("backoffice:affiliate:write"),
  },
  "backoffice:affiliate:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:affiliate:read",
    name: "scopes.backoffice:affiliate:read.name",
    description: "scopes.backoffice:affiliate:read.description",
    icon: getScopeIcon("backoffice:affiliate:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ backoffice:print ━━━━━━━━━━━━━━━
   */
  "backoffice:print:write": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:print:write",
    name: "scopes.backoffice:print:write.name",
    description: "scopes.backoffice:print:write.description",
    icon: getScopeIcon("backoffice:print:write"),
  },
  "backoffice:print:read": {
    group: ScopeGroup.Backoffice,
    code: "backoffice:print:read",
    name: "scopes.backoffice:print:read.name",
    description: "scopes.backoffice:print:read.description",
    icon: getScopeIcon("backoffice:print:read"),
  },

  /**
   * ━━━━━━━━━━━━━━━ selldone:monetization ━━━━━━━━━━━━━━━
   */
  "selldone:monetization:read": {
    group: ScopeGroup.Selldone,
    code: "selldone:monetization:read",
    name: "scopes.selldone:monetization:read.name",
    description: "scopes.selldone:monetization:read.description",
    icon: getScopeIcon("selldone:monetization:read"),
  },
  "selldone:monetization:write": {
    group: ScopeGroup.Selldone,
    code: "selldone:monetization:write",
    name: "scopes.selldone:monetization:write.name",
    description: "scopes.selldone:monetization:write.description",
    icon: getScopeIcon("selldone:monetization:write"),
  },

  /**
   * ━━━━━━━━━━━━━━━ selldone:identification ━━━━━━━━━━━━━━━
   */

  "selldone:identification": {
    group: ScopeGroup.Selldone,
    code: "selldone:identification",
    name: "scopes.selldone:identification.name",
    description: "scopes.selldone:identification.description",
    icon: getScopeIcon("selldone:identification"),
  },

  /**
   * ━━━━━━━━━━━━━━━ selldone:developer ━━━━━━━━━━━━━━━
   */
  "selldone:developer:read": {
    group: ScopeGroup.Selldone,
    code: "selldone:developer:read",
    name: "scopes.selldone:developer:read.name",
    description: "scopes.selldone:developer:read.description",
    icon: getScopeIcon("selldone:developer:read"),
  },
  "selldone:developer:write": {
    group: ScopeGroup.Selldone,
    code: "selldone:developer:write",
    name: "scopes.selldone:developer:write.name",
    description: "scopes.selldone:developer:write.description",
    icon: getScopeIcon("selldone:developer:write"),
  },

  /**
   * ━━━━━━━━━━━━━━━ selldone:token ━━━━━━━━━━━━━━━
   */
  "selldone:token:read": {
    group: ScopeGroup.Selldone,
    code: "selldone:token:read",
    name: "scopes.selldone:token:read.name",
    description: "scopes.selldone:token:read.description",
    icon: getScopeIcon("selldone:token:read"),
  },
  "selldone:token:write": {
    group: ScopeGroup.Selldone,
    code: "selldone:token:write",
    name: "scopes.selldone:token:write.name",
    description: "scopes.selldone:token:write.description",
    icon: getScopeIcon("selldone:token:write"),
  },

  /**
   * ━━━━━━━━━━━━━━━ selldone:security ━━━━━━━━━━━━━━━
   */
  "selldone:security:write": {
    group: ScopeGroup.Selldone,
    code: "selldone:security:write",
    name: "scopes.selldone:security:write.name",
    description: "scopes.selldone:security:write.description",
    icon: getScopeIcon("selldone:security:write"),
  },

  /**
   * ━━━━━━━━━━━━━━━ agency ━━━━━━━━━━━━━━━
   */
  "agency:read": {
    group: ScopeGroup.Agency,
    code: "agency:read",
    name: "scopes.agency:read.name",
    description: "scopes.agency:read.description",
    icon: getScopeIcon("agency:read"),
  },
  "agency:write": {
    group: ScopeGroup.Agency,
    code: "agency:write",
    name: "scopes.agency:write.name",
    description: "scopes.agency:write.description",
    icon: getScopeIcon("agency:write"),
  },
};
