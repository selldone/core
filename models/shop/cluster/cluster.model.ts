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
 * Shop resource cluster.
 *
 * Backend source: `App\Shop\Cluster\Cluster`, table `shop_clusters`.
 * Clusters group marketing, content, catalog, permission, and incentive resources under a shared `cluster_id` and may
 * form a parent/child hierarchy. Assignment columns are added to related tables by the shop-cluster migration.
 */
export interface Cluster {
  /**
   * Cluster id.
   *
   * Source: `shop_clusters.id`.
   */
  id: number;

  /**
   * Owning shop id.
   *
   * Source: `shop_clusters.shop_id`.
   */
  shop_id: number;

  /**
   * Creator / last editor user id, or `null`.
   *
   * Source: nullable `shop_clusters.user_id`.
   */
  user_id: number | null;

  /**
   * Parent cluster id, or `null` for a root cluster.
   *
   * Source: nullable `shop_clusters.parent_id`.
   */
  parent_id: number | null;

  /**
   * Cluster name, max 128 chars.
   *
   * Source: `shop_clusters.name`.
   */
  name: string;

  /**
   * Cluster description, or `null`.
   *
   * Source: nullable `shop_clusters.description`.
   */
  description: string | null;

  /**
   * Cluster icon image path, or `null`.
   *
   * Source: nullable `shop_clusters.icon`; supported generated sizes are 64, 128, and original.
   */
  icon: string | null;

  /**
   * Hex color code, or `null`.
   *
   * Source: nullable `shop_clusters.color`, max 9 chars.
   */
  color: string | null;

  /**
   * Creation timestamp.
   *
   * Source: `shop_clusters.created_at`.
   */
  created_at: string | null;

  /**
   * Last update timestamp.
   *
   * Source: `shop_clusters.updated_at`.
   */
  updated_at: string | null;

  /** Owning shop relation when `Cluster::shop()` is eager-loaded. */
  shop?: Record<string, unknown> | null;

  /** Creator/editor relation when `Cluster::user()` is eager-loaded. */
  user?: Record<string, unknown> | null;

  /** Parent cluster relation when `Cluster::parent()` is eager-loaded. */
  parent?: Cluster | null;

  /** Page resources under this cluster. Source relation: `Cluster::pages()`. */
  pages?: Page[];

  /** Discount-code resources under this cluster. Source relation: `Cluster::discountCodes()`. */
  discount_codes?: DiscountCode[];

  /** Coupon resources under this cluster. Source relation: `Cluster::coupons()`. */
  coupons?: Coupon[];

  /** Offer resources under this cluster. Source relation: `Cluster::offers()`. */
  offers?: Offer[];

  /** Gift-card-type resources under this cluster. Source relation: `Cluster::giftCardTypes()`. */
  gift_card_types?: GiftCardType[];

  /** Blog resources under this cluster. Source relation: `Cluster::blogs()`. */
  blogs?: ShopBlog[];

  /** Popup resources under this cluster. Source relation: `Cluster::popups()`. */
  popups?: Popup[];

  /** Campaign resources under this cluster. Source relation: `Cluster::campaigns()`. */
  campaigns?: Campaign[];

  /** Email marketing resources under this cluster. Source relation: `Cluster::emails()`. */
  emails?: EmailMarketing[];

  /** Product/category/affiliate/permission/role resources may be eager-loaded by backend resource endpoints. */
  products?: Record<string, unknown>[];
  categories?: Record<string, unknown>[];
  affiliates?: Record<string, unknown>[];
  permissions?: Record<string, unknown>[];
  roles?: Record<string, unknown>[];
}

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████

import { DateConverter } from "../../../helper/date/DateConverter";
import { Page } from "../page/page.model";
import { DiscountCode } from "../incentives/discount-code/discount-code.model";
import { Coupon } from "../incentives/coupon/coupon.model";
import { Offer } from "../incentives/offer/offer.model";
import { GiftCardType } from "../incentives/gift-card/gift-card-type.model";
import { Popup } from "../popup/popup.model";
import { ShopBlog } from "../blog/shop-blog.model";
import { Campaign } from "../campaign/campaign.model";
import { EmailMarketing } from "../email-marketing/email-marketing.model";

import discount_image from "./assets/discount-code.svg";
import coupon_image from "./assets/coupon.svg";
import offer_image from "./assets/offer.svg";
import giftcard_image from "./assets/gift-card.svg";
import popup_image from "./assets/popup.svg";
import campaign_image from "./assets/campaign.svg";
import email_marketing_image from "./assets/email-marketing.svg";

export namespace Cluster {
  /** Resource collection keys returned by cluster resource endpoints. */
  export type ResourceKey =
    | "pages"
    | "discount_codes"
    | "coupons"
    | "offers"
    | "gift_card_types"
    | "popups"
    | "blogs"
    | "campaigns"
    | "emails";

  /** Minimal router destination object returned by resource metadata builders. */
  export interface ResourceRoute {
    name: string;
    params?: Record<string, string | number | null>;
  }

  /**
   * Dashboard metadata used to render clustered resources.
   *
   * This is UI-only metadata; persisted cluster data is defined by the `Cluster` interface above.
   */
  export const ResourceTypes = {
    PAGE: {
      group_title: "Pages",

      type: "Page",
      resource_key: "pages", // Key of values in the resources fetch current_cluster[resource_key]
      title: (resource: Page) => resource.name,
      tooltip: (resource: Page) => "Landing Page: " + resource.title,
      color: (resource: Page) => resource.color,
      image: (resource: Page) =>
        resource.image && window.CDN.GET_SHOP_IMAGE_PATH(resource.image, 128),
      icon: "layers",

      to: (resource: Page) => {
        return {
          name: "BPageLandingEditor",
          params: { page_id: resource.id },
        };
      },
    },
    DISCOUNT_CODE: {
      group_title: "Discount Codes",

      type: (resource: DiscountCode) => `${resource.percent}% Dis`,
      resource_key: "discount_codes", // Key of values in the resources fetch current_cluster[resource_key]
      title: (resource: DiscountCode) => resource.code,
      tooltip: (resource: DiscountCode) =>
        "Discount Code: " +
        resource.title +
        (resource.dis_start
          ? ` | start in ${DateConverter.getFromNowString(resource.dis_start)}`
          : "") +
        (resource.dis_end
          ? ` | end in ${DateConverter.getFromNowString(resource.dis_end)}`
          : ""),
      color: null,
      image: discount_image,
      image_tile: true, // Do not round image!
      icon: "discount",

      to: (resource: DiscountCode) => {
        return {
          name: "BPageDiscountCodeDashboard",
          params: { discount_code_id: resource.id },
        };
      },
      start_at: (resource: DiscountCode) => resource.dis_start, // Show timespan
      end_at: (resource: DiscountCode) => resource.dis_end, // Show timespan
      inactive: (resource: DiscountCode) =>
        !DateConverter.inBetweenDates(
          new Date(),
          DateConverter.convertToLocalTime(resource.dis_start),
          DateConverter.convertToLocalTime(resource.dis_end),
        ),
    },

    COUPON: {
      group_title: "Coupons",

      type: (resource: Coupon) =>
        `${resource.percent}%` + resource.charge
          ? ` +${resource.charge} ${resource.currency}`
          : "",
      resource_key: "coupons", // Key of values in the resources fetch current_cluster[resource_key]
      title: (resource: Coupon) => resource.title,
      tooltip: (resource: Coupon) =>
        "Coupon: " +
        resource.title +
        ` | ${resource.percent}% Discount + ${resource.charge} ${resource.currency} Initial Charge ` +
        (resource.start
          ? ` | start in ${DateConverter.getFromNowString(resource.start)}`
          : "") +
        (resource.end
          ? ` | end in ${DateConverter.getFromNowString(resource.end)}`
          : ""),
      color: (resource: Coupon) => resource.color,
      image: coupon_image,
      image_tile: true, // Do not round image!
      icon: "confirmation_number",

      to: (resource: Coupon) => {
        return {
          name: "BPageCouponDashboard",
          params: { coupon_id: resource.id },
        };
      },
      start_at: (resource: Coupon) => resource.start, // Show timespan
      end_at: (resource: Coupon) => resource.end, // Show timespan
      inactive: (resource: Coupon) =>
        resource.enable !== false &&
        !DateConverter.inBetweenDates(
          new Date(),
          DateConverter.convertToLocalTime(resource.start),
          DateConverter.convertToLocalTime(resource.end),
        ),
    },

    OFFER: {
      group_title: "Offers",

      type: (resource: Offer) => `${resource.percent}%`,
      resource_key: "offers", // Key of values in the resources fetch current_cluster[resource_key]
      title: (resource: Offer) => resource.title,
      tooltip: (resource: Offer) =>
        "Offer: " +
        resource.title +
        ` | ${resource.percent}% Discount ` +
        (resource.start
          ? ` | start in ${DateConverter.getFromNowString(resource.start)}`
          : "") +
        (resource.end
          ? ` | end in ${DateConverter.getFromNowString(resource.end)}`
          : ""),
      color: (resource: Offer) => resource.color,
      image: offer_image,
      image_tile: true, // Do not round image!
      icon: "auto_awesome",

      to: (resource: Offer) => {
        return {
          name: "BPageOfferDashboard",
          params: { offer_id: resource.id },
        };
      },
      start_at: (resource: Offer) => resource.start, // Show timespan
      end_at: (resource: Offer) => resource.end, // Show timespan
      inactive: (resource: Offer) =>
        resource.enable !== false &&
        !DateConverter.inBetweenDates(
          new Date(),
          DateConverter.convertToLocalTime(resource.start),
          DateConverter.convertToLocalTime(resource.end),
        ),
    },

    GIFT_CARD_TYPE: {
      group_title: "Gift Cards",

      type: (resource: GiftCardType) =>
        `${resource.amount} ${resource.currency}`,
      resource_key: "gift_card_types", // Key of values in the resources fetch current_cluster[resource_key]
      title: (resource: GiftCardType) => resource.title,
      tooltip: (resource: GiftCardType) =>
        "Gift Card: " +
        resource.title +
        ` | ${resource.amount} ${resource.currency}` +
        ` | Life ${resource.life} months | Count ${resource.count}x | Used ${resource.used}x`,

      color: (resource: GiftCardType) => resource.color,
      image: (resource: GiftCardType) =>
        resource.bg
          ? window.CDN.GET_SHOP_IMAGE_PATH(resource.bg)
          : giftcard_image,
      image_tile: (resource: GiftCardType) => !resource.bg, // Do not round image!
      icon: "card_giftcard",

      to: (resource: GiftCardType) => {
        return {
          name: "AdminGiftCardDashboardPage",
          params: { gift_card_type_id: resource.id },
        };
      },
      start_at: null, // Show timespan
      end_at: null, // Show timespan
      inactive: false,
    },

    POPUP: {
      group_title: "Popups",

      type: (resource: Popup) => `${resource.visits}x`,
      resource_key: "popups", // Key of values in the resources fetch current_cluster[resource_key]
      title: (resource: Popup) => resource.title,
      tooltip: (resource: Popup) =>
        "Popup: " + resource.title + ` | Views ${resource.visits}`,
      color: null,
      image: (resource: Popup) =>
        resource.image
          ? window.CDN.GET_SHOP_IMAGE_PATH(resource.image)
          : popup_image,
      image_tile: (resource: Popup) => !resource.image, // Do not round image!
      icon: "install_desktop",

      to: (resource: Popup) => {
        return {
          name: "BPagePopup",
          params: { popup_id: resource.id },
        };
      },
      start_at: null, // Show timespan
      end_at: null, // Show timespan
      inactive: (resource: Popup) => resource.published !== false,
    },

    BLOG: {
      group_title: "Blogs",

      type: "Blog",
      resource_key: "blogs", // Key of values in the resources fetch current_cluster[resource_key]
      title: (resource: ShopBlog) => resource.title,
      tooltip: (resource: ShopBlog) => "Blog Post: " + resource.title,
      color: null,
      image: (resource: ShopBlog) =>
        resource.image && window.CDN.GET_SHOP_IMAGE_PATH(resource.image),
      icon: "newspaper",

      to: (resource: ShopBlog) => {
        return {
          name: "BPageShopBlogsEdit",
          params: { blog_id: resource.id },
        };
      },
    },

    CAMPAIGN: {
      group_title: "Campaigns",

      type: (resource: Campaign) => ``,
      resource_key: "campaigns", // Key of values in the resources fetch current_cluster[resource_key]
      title: (resource: Campaign) => resource.name,
      tooltip: (resource: Campaign) =>
        "Marketing Campaign: " +
        resource.name +
        (resource.start_at
          ? ` | start in ${DateConverter.getFromNowString(resource.start_at)}`
          : "") +
        (resource.end_at
          ? ` | end in ${DateConverter.getFromNowString(resource.end_at)}`
          : "") +
        `\nDesktop: ${resource.desktop}x | Mobile: ${resource.mobile}x | Tablet: ${resource.tablet}x` +
        `\nConversion: ${resource.sessions}(sessions) ➜ ${resource.products}(product views) ➜ ${resource.add_carts}(add to cart) ➜ ${resource.buys}(buys) ➜ ${resource.orders}(orders)`,
      color: null,
      image: campaign_image,
      image_tile: true, // Do not round image!
      icon: (resource: Campaign) =>
        "campaign" +
        (resource.page_id ? "layers" : "") +
        (resource.discount_id ? "discount" : ""),

      to: (resource: Campaign) => {
        return {
          name: "BPageCampaignDashboard",
          params: { campaign_id: resource.id },
        };
      },
      start_at: (resource: Campaign) => resource.start_at, // Show timespan
      end_at: (resource: Campaign) => resource.end_at, // Show timespan
      inactive: (resource: Campaign) =>
        resource.enable !== false &&
        !DateConverter.inBetweenDates(
          new Date(),
          DateConverter.convertToLocalTime(resource.start_at),
          DateConverter.convertToLocalTime(resource.end_at),
        ),
      chart: (resource: Campaign) => {
        return {
          data: [
            [resource.sessions],
            [resource.products],
            [resource.add_carts],
            [resource.buys],
            [resource.orders],
          ],
          color: ["#111"],
        };
      },
    },

    EMAIL: {
      group_title: "Emails",

      type: (resource: EmailMarketing) => ``,
      resource_key: "emails", // Key of values in the resources fetch current_cluster[resource_key]
      title: (resource: EmailMarketing) => resource.name,
      tooltip: (resource: EmailMarketing) =>
        "Email Marketing Campaign: " +
        resource.name +
        (resource.schedule_at
          ? ` | Schedule in ${DateConverter.getFromNowString(resource.schedule_at)}`
          : "") +
        ("\nApproved " + (resource.approve ? "✅" : "❌")) +
        (" | In Que " + (resource.in_que ? "✅" : "❌")) +
        (" | Sent " + (resource.sent ? "✅" : "❌")) +
        `\nConversion: ${resource.sends}(sends) ➜ ${resource.views}(views) ➜ ${resource.clicks}(clicks) ➜ ${resource.buys}(buys)`,
      color: null,
      image: email_marketing_image,
      image_tile: true, // Do not round image!
      icon: (resource: EmailMarketing) =>
        (resource.sent ? "move_to_inbox" : "") +
        (resource.in_que ? "forward_to_inbox" : "") +
        (resource.approve ? "mark_email_read" : "") +
        (resource.schedule_at ? "schedule_send" : "") +
        "email",

      to: (resource: EmailMarketing) => {
        return {
          name: "BPageEmailMarketingDashboard",
          params: { email_id: resource.id },
        };
      },
      start_at: null, // Show timespan
      end_at: null, // Show timespan
      inactive: null,
      chart: (resource: EmailMarketing) => {
        return {
          data: [
            [resource.sends],
            [resource.delivers],
            [resource.views],
            [resource.clicks],
            [resource.buys],
          ],
          color: ["#111"],
        };
      },
    },
  };
}

export namespace Cluster {
  /** JSON primitive accepted by cluster configuration and relation payloads. */
  export type ApiJsonPrimitive = string | number | boolean | null;

  /** JSON object used for cluster metadata, targeting, and relation projections. */
  export interface ApiJsonObject {
    [key: string]: ApiJsonValue | undefined;
  }

  /** JSON array used for cluster metadata, targeting, and relation projections. */
  export interface ApiJsonArray extends Array<ApiJsonValue> {}

  export type ApiJsonValue = ApiJsonPrimitive | ApiJsonObject | ApiJsonArray;

  /** Compact cluster projection embedded in products, campaigns, and incentives. */
  export interface CompactProjection {
    id: number;
    shop_id?: number;
    title?: string | null;
    code?: string | null;
    enable?: boolean;
  }

  /** Safe partial update payload for cluster grouping and targeting settings. */
  export interface ApiPatch {
    title?: string | null;
    description?: string | null;
    code?: string | null;
    enable?: boolean;
    color?: string | null;
    icon?: string | null;
    rules?: ApiJsonObject | null;
    meta?: ApiJsonObject | null;
    translations?: Record<string, ApiJsonObject> | null;
  }
}
