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

import { Shop } from "../../../models/shop/shop.model";
import { IQuota } from "../../../models/shop/quota/quota.model";

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
  ListingItem: IQuotaItem;
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
  Vendor: IQuotaItem;
}

// Native quota: icon references resolve to this one same-origin SVG symbol sprite.
export const SHOP_QUOTA_ICON_SPRITE = "/assets/icons/shop-quota.svg";
export const ShopQuotaGroupIcons = {
  quota: "quota:quota",
  all: "quota:all",
  catalog: "quota:catalog",
  storefront: "quota:storefront",
  promotions: "quota:promotions",
  operations: "quota:operations",
  orders_community: "quota:orders_community",
  ai: "quota:ai",
  other: "quota:other",
} as const;

const shopQuota: IShopQuota = {
  Product: {
    title: "Product",
    icon: "quota:products",
    max: "products_max",
    extra: "products_extra",
    usage: "products_usage",
  },
  ListingItem: {
    title: "Listing Item",
    icon: "quota:listing_items",
    max: "listing_items_max",
    extra: "listing_items_extra",
    usage: "listing_items_usage",
  },
  Category: {
    title: "Category",
    icon: "quota:categories",
    max: "categories_max",
    extra: "categories_extra",
    usage: "categories_usage",
  },
  Domain: {
    title: "Domain",
    icon: "quota:domains",
    max: "domains_max",
    extra: "domains_extra",
    usage: "domains_usage",
  },
  DiscountCodes: {
    title: "Discount Codes",
    icon: "quota:discount_codes",
    max: "discount_codes_max",
    extra: "discount_codes_extra",
    usage: "discount_codes_usage",
  },
  Coupon: {
    title: "Coupon",
    icon: "quota:coupons",
    max: "coupons_max",
    extra: "coupons_extra",
    usage: "coupons_usage",
  },
  Offer: {
    title: "Offer",
    icon: "quota:offers",
    max: "offers_max",
    extra: "offers_extra",
    usage: "offers_usage",
  },
  Lottery: {
    title: "Lottery",
    icon: "quota:lotteries",
    max: "lotteries_max",
    extra: "lotteries_extra",
    usage: "lotteries_usage",
  },
  Campaign: {
    title: "Campaign",
    icon: "quota:campaigns",
    max: "campaigns_max",
    extra: "campaigns_extra",
    usage: "campaigns_usage",
  },
  Affiliate: {
    title: "Affiliate",
    icon: "quota:affiliates",
    max: "affiliates_max",
    extra: "affiliates_extra",
    usage: "affiliates_usage",
  },
  EmailMarketing: {
    title: "Email Marketing",
    icon: "quota:email_campaigns",
    max: "email_campaigns_max",
    extra: "email_campaigns_extra",
    usage: "email_campaigns_usage",
  },
  Courier: {
    title: "Courier",
    icon: "quota:couriers",
    max: "couriers_max",
    extra: "couriers_extra",
    usage: "couriers_usage",
  },
  Page: {
    title: "Page",
    icon: "quota:pages",
    max: "pages_max",
    extra: "pages_extra",
    usage: "pages_usage",
  },
  Popup: {
    title: "Popup",
    icon: "quota:popups",
    max: "popups_max",
    extra: "popups_extra",
    usage: "popups_usage",
  },
  Customer: {
    title: "Customer",
    icon: "quota:customers",
    max: "customers_max",
    extra: "customers_extra",
    usage: "customers_usage",
  },
  CommunityPost: {
    title: "Community Post",
    icon: "quota:community_posts",
    max: "community_posts_max",
    extra: "community_posts_extra",
    usage: "community_posts_usage",
  },
  CommunityComment: {
    title: "Community Comment",
    icon: "quota:community_comments",
    max: "community_comments_max",
    extra: "community_comments_extra",
    usage: "community_comments_usage",
  },
  OnlineOrder: {
    title: "Online Order",
    icon: "quota:online_orders",
    max: "online_orders_max",
    extra: "online_orders_extra",
    usage: "online_orders_usage",
  },
  POSOrder: {
    title: "POS Order",
    icon: "quota:pos_orders",
    max: "pos_orders_max",
    extra: "pos_orders_extra",
    usage: "pos_orders_usage",
  },
  Blog: {
    title: "Blog",
    icon: "quota:blogs",
    max: "blogs_max",
    extra: "blogs_extra",
    usage: "blogs_usage",
  },
  AITokens: {
    title: "AI Tokens",
    icon: "quota:ai_tokens",
    max: "ai_tokens_max",
    extra: "ai_tokens_extra",
    usage: "ai_tokens_usage",
  },
  BgRemove: {
    title: "AI Background Remove",
    icon: "quota:bg_remove",
    max: "bg_remove_max",
    extra: "bg_remove_extra",
    usage: "bg_remove_usage",
  },
  Vendor: {
    title: "Vendor",
    icon: "quota:vendors",
    max: "vendors_max",
    extra: "vendors_extra",
    usage: "vendors_usage",
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
