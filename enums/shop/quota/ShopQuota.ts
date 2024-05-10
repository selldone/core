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

import { Shop } from "@selldone/core-js/models/shop/shop.model";
import { IQuota } from "@selldone/core-js/models/shop/quota/quota.model";

// Define the structure of each quota item
interface IQuotaItem {
  title: string;
  icon: string;
  max: keyof IQuota;
  extra: keyof IQuota;
  usage: keyof IQuota;
}

// Define the structure for the entire ShopQuota object
interface IShopQuota {
  Product: IQuotaItem;
  Category: IQuotaItem;
  Domain: IQuotaItem;
  DiscountCodes: IQuotaItem;
  Coupon: IQuotaItem;
  Offer: IQuotaItem;
  Lottery: IQuotaItem;
  Campaign: IQuotaItem;
  Affiliate: IQuotaItem;
  EmailMarketing: IQuotaItem;
  Courier: IQuotaItem;
  Page: IQuotaItem;
  Popup: IQuotaItem;
  Customer: IQuotaItem;
  CommunityPost: IQuotaItem;
  CommunityComment: IQuotaItem;
  OnlineOrder: IQuotaItem;
  POSOrder: IQuotaItem;
  Blog: IQuotaItem;
  AITokens: IQuotaItem;
  BgRemove: IQuotaItem;
}

const shopQuota: IShopQuota = {
  Product: {
    title: "Product",
    icon: "storefront",
    max: "products_max",
    extra: "products_extra",
    usage: "products_usage",
  },
  Category: {
    title: "Category",
    icon: "category",
    max: "categories_max",
    extra: "categories_extra",
    usage: "categories_usage",
  },
  Domain: {
    title: "Domain",
    icon: "domain",
    max: "domains_max",
    extra: "domains_extra",
    usage: "domains_usage",
  },
  DiscountCodes: {
    title: "Discount Codes",
    icon: "local_offer",
    max: "discount_codes_max",
    extra: "discount_codes_extra",
    usage: "discount_codes_usage",
  },
  Coupon: {
    title: "Coupon",
    icon: "redeem",
    max: "coupons_max",
    extra: "coupons_extra",
    usage: "coupons_usage",
  },
  Offer: {
    title: "Offer",
    icon: "local_offer",
    max: "offers_max",
    extra: "offers_extra",
    usage: "offers_usage",
  },
  Lottery: {
    title: "Lottery",
    icon: "emoji_events",
    max: "lotteries_max",
    extra: "lotteries_extra",
    usage: "lotteries_usage",
  },
  Campaign: {
    title: "Campaign",
    icon: "campaign",
    max: "campaigns_max",
    extra: "campaigns_extra",
    usage: "campaigns_usage",
  },
  Affiliate: {
    title: "Affiliate",
    icon: "group_work",
    max: "affiliates_max",
    extra: "affiliates_extra",
    usage: "affiliates_usage",
  },
  EmailMarketing: {
    title: "Email Marketing",
    icon: "email",
    max: "email_campaigns_max",
    extra: "email_campaigns_extra",
    usage: "email_campaigns_usage",
  },
  Courier: {
    title: "Courier",
    icon: "local_shipping",
    max: "couriers_max",
    extra: "couriers_extra",
    usage: "couriers_usage",
  },
  Page: {
    title: "Page",
    icon: "insert_drive_file",
    max: "pages_max",
    extra: "pages_extra",
    usage: "pages_usage",
  },
  Popup: {
    title: "Popup",
    icon: "web_asset",
    max: "popups_max",
    extra: "popups_extra",
    usage: "popups_usage",
  },
  Customer: {
    title: "Customer",
    icon: "people",
    max: "customers_max",
    extra: "customers_extra",
    usage: "customers_usage",
  },
  CommunityPost: {
    title: "Community Post",
    icon: "post_add",
    max: "community_posts_max",
    extra: "community_posts_extra",
    usage: "community_posts_usage",
  },
  CommunityComment: {
    title: "Community Comment",
    icon: "comment",
    max: "community_comments_max",
    extra: "community_comments_extra",
    usage: "community_comments_usage",
  },
  OnlineOrder: {
    title: "Online Order",
    icon: "shopping_cart",
    max: "online_orders_max",
    extra: "online_orders_extra",
    usage: "online_orders_usage",
  },
  POSOrder: {
    title: "POS Order",
    icon: "point_of_sale",
    max: "pos_orders_max",
    extra: "pos_orders_extra",
    usage: "pos_orders_usage",
  },
  Blog: {
    title: "Blog",
    icon: "article",
    max: "blogs_max",
    extra: "blogs_extra",
    usage: "blogs_usage",
  },
  AITokens: {
    title: "AI Tokens",
    icon: "grain",
    max: "ai_tokens_max",
    extra: "ai_tokens_extra",
    usage: "ai_tokens_usage",
  },
  BgRemove: {
    title: "AI Background Remove",
    icon: "auto_fix_high",
    max: "bg_remove_max",
    extra: "bg_remove_extra",
    usage: "bg_remove_usage",
  },
};
export default shopQuota;

export class ShopQuotaHelper {
  static GetShopQuotaMax(shop: Shop & { quota: IQuota }, target: IQuotaItem) {
    if (!shop.quota) return 0;
    return shop.quota[target.max];
  }
  static GetShopQuotaExtra(shop: Shop & { quota: IQuota }, target: IQuotaItem) {
    if (!shop.quota) return 0;
    return shop.quota[target.extra];
  }
  static GetShopQuotaUsage(shop: Shop & { quota: IQuota }, target: IQuotaItem) {
    if (!shop.quota) return 0;
    return shop.quota[target.usage];
  }
}
