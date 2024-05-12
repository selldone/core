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

import {DateConverter} from "../../../helper/date/DateConverter";

export const ClusterResourceType = {
  PAGE: {
    group_title: "Pages",

    type: "Page",
    resource_key: "pages", // Key of values in the resources fetch current_cluster[resource_key]
    title: (resource) => resource.name,
    tooltip: (resource) => "Landing Page: " + resource.title,
    color: (resource) => resource.color,
    image: (resource, it) =>
      resource.image && it.getShopImagePath(resource.image, 128),
    icon: "layers",

    to: (resource) => {
      return {
        name: "BPageLandingEditor",
        params: { page_id: resource.id },
      };
    },
  },
  DISCOUNT_CODE: {
    group_title: "Discount Codes",

    type: (resource) => `${resource.percent}% Dis`,
    resource_key: "discount_codes", // Key of values in the resources fetch current_cluster[resource_key]
    title: (resource) => resource.code,
    tooltip: (resource, it) =>
      "Discount Code: " +
      resource.title +
      (resource.dis_start
        ? ` | start in ${it.getFromNowString(resource.dis_start)}`
        : "") +
      (resource.dis_end
        ? ` | end in ${it.getFromNowString(resource.dis_end)}`
        : ""),
    color: null,
    image: require("./assets/discount-code.svg"),
    image_tile: true, // Do not round image!
    icon: "discount",

    to: (resource) => {
      return {
        name: "BPageDiscountCodeDashboard",
        params: { discount_code_id: resource.id },
      };
    },
    start_at: (resource) => resource.dis_start, // Show timespan
    end_at: (resource) => resource.dis_end, // Show timespan
    inactive: (resource, it) =>
      !DateConverter.inBetweenDates(
        new Date(),
        it.convertToLocalTime(resource.dis_start),
        it.convertToLocalTime(resource.dis_end),
      ),
  },

  COUPON: {
    group_title: "Coupons",

    type: (resource) =>
      `${resource.percent}%` + resource.charge
        ? ` +${resource.charge} ${resource.currency}`
        : "",
    resource_key: "coupons", // Key of values in the resources fetch current_cluster[resource_key]
    title: (resource) => resource.title,
    tooltip: (resource, it) =>
      "Coupon: " +
      resource.title +
      ` | ${resource.percent}% Discount + ${resource.charge} ${resource.currency} Initial Charge ` +
      (resource.start
        ? ` | start in ${it.getFromNowString(resource.start)}`
        : "") +
      (resource.end ? ` | end in ${it.getFromNowString(resource.end)}` : ""),
    color: (resource) => resource.color,
    image: require("./assets/coupon.svg"),
    image_tile: true, // Do not round image!
    icon: "confirmation_number",

    to: (resource) => {
      return {
        name: "BPageCouponDashboard",
        params: { coupon_id: resource.id },
      };
    },
    start_at: (resource) => resource.start, // Show timespan
    end_at: (resource) => resource.end, // Show timespan
    inactive: (resource, it) =>
      resource.enable !== false &&
      !DateConverter.inBetweenDates(
        new Date(),
        it.convertToLocalTime(resource.start),
        it.convertToLocalTime(resource.end),
      ),
  },

  OFFER: {
    group_title: "Offers",

    type: (resource) => `${resource.percent}%`,
    resource_key: "offers", // Key of values in the resources fetch current_cluster[resource_key]
    title: (resource) => resource.title,
    tooltip: (resource, it) =>
      "Offer: " +
      resource.title +
      ` | ${resource.percent}% Discount ` +
      (resource.start
        ? ` | start in ${it.getFromNowString(resource.start)}`
        : "") +
      (resource.end ? ` | end in ${it.getFromNowString(resource.end)}` : ""),
    color: (resource) => resource.color,
    image: require("./assets/offer.svg"),
    image_tile: true, // Do not round image!
    icon: "auto_awesome",

    to: (resource) => {
      return {
        name: "BPageOfferDashboard",
        params: { offer_id: resource.id },
      };
    },
    start_at: (resource) => resource.start, // Show timespan
    end_at: (resource) => resource.end, // Show timespan
    inactive: (resource, it) =>
      resource.enable !== false &&
      !DateConverter.inBetweenDates(
        new Date(),
        it.convertToLocalTime(resource.start),
        it.convertToLocalTime(resource.end),
      ),
  },

  GIFT_CARD_TYPE: {
    group_title: "Gift Cards",

    type: (resource) => `${resource.amount} ${resource.currency}`,
    resource_key: "gift_card_types", // Key of values in the resources fetch current_cluster[resource_key]
    title: (resource) => resource.title,
    tooltip: (resource, it) =>
      "Gift Card: " +
      resource.title +
      ` | ${resource.amount} ${resource.currency}` +
      ` | Life ${resource.life} months | Count ${resource.count}x | Used ${resource.used}x`,

    color: (resource) => resource.color,
    image: (resource, it) =>
      resource.bg
        ? it.getShopImagePath(resource.bg)
        : require("./assets/gift-card.svg"),
    image_tile: (resource) => !resource.bg, // Do not round image!
    icon: "card_giftcard",

    to: (resource) => {
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

    type: (resource) => `${resource.visits}x`,
    resource_key: "popups", // Key of values in the resources fetch current_cluster[resource_key]
    title: (resource) => resource.title,
    tooltip: (resource, it) =>
      "Popup: " + resource.title + ` | Views ${resource.visits}`,
    color: null,
    image: (resource, it) =>
      resource.image
        ? it.getShopImagePath(resource.image)
        : require("./assets/popup.svg"),
    image_tile: (resource) => !resource.image, // Do not round image!
    icon: "install_desktop",

    to: (resource) => {
      return {
        name: "BPagePopup",
        params: { popup_id: resource.id },
      };
    },
    start_at: null, // Show timespan
    end_at: null, // Show timespan
    inactive: (resource) => resource.published !== false,
  },

  BLOG: {
    group_title: "Blogs",

    type: "Blog",
    resource_key: "blogs", // Key of values in the resources fetch current_cluster[resource_key]
    title: (resource) => resource.title,
    tooltip: (resource) => "Blog Post: " + resource.title,
    color: null,
    image: (resource, it) =>
      resource.image && it.getShopImagePath(resource.image),
    icon: "newspaper",

    to: (resource) => {
      return {
        name: "BPageShopBlogsEdit",
        params: { blog_id: resource.id },
      };
    },
  },

  CAMPAIGN: {
    group_title: "Campaigns",

    type: (resource) => ``,
    resource_key: "campaigns", // Key of values in the resources fetch current_cluster[resource_key]
    title: (resource) => resource.name,
    tooltip: (resource, it) =>
      "Marketing Campaign: " +
      resource.name +
      (resource.start_at
        ? ` | start in ${it.getFromNowString(resource.start_at)}`
        : "") +
      (resource.end_at
        ? ` | end in ${it.getFromNowString(resource.end_at)}`
        : "") +
      `\nDesktop: ${resource.desktop}x | Mobile: ${resource.mobile}x | Tablet: ${resource.tablet}x` +
      `\nConversion: ${resource.sessions}(sessions) ➜ ${resource.products}(product views) ➜ ${resource.add_carts}(add to cart) ➜ ${resource.buys}(buys) ➜ ${resource.orders}(orders)`,
    color: null,
    image: require("./assets/campaign.svg"),
    image_tile: true, // Do not round image!
    icon: (resource) =>
      "campaign" +
      (resource.page_id ? "layers" : "") +
      (resource.discount_id ? "discount" : ""),

    to: (resource) => {
      return {
        name: "BPageCampaignDashboard",
        params: { campaign_id: resource.id },
      };
    },
    start_at: (resource) => resource.start_at, // Show timespan
    end_at: (resource) => resource.end_at, // Show timespan
    inactive: (resource, it) =>
      resource.enable !== false &&
      !DateConverter.inBetweenDates(
        new Date(),
        it.convertToLocalTime(resource.start_at),
        it.convertToLocalTime(resource.end_at),
      ),
    chart: (resource) => {
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

    type: (resource) => ``,
    resource_key: "emails", // Key of values in the resources fetch current_cluster[resource_key]
    title: (resource) => resource.name,
    tooltip: (resource, it) =>
      "Email Marketing Campaign: " +
      resource.name +
      (resource.schedule_at
        ? ` | Schedule in ${it.getFromNowString(resource.schedule_at)}`
        : "") +
      ("\nApproved " + (resource.approve ? "✅" : "❌")) +
      (" | In Que " + (resource.in_que ? "✅" : "❌")) +
      (" | Sent " + (resource.sent ? "✅" : "❌")) +
      `\nConversion: ${resource.sends}(sends) ➜ ${resource.views}(views) ➜ ${resource.clicks}(clicks) ➜ ${resource.buys}(buys)`,
    color: null,
    image: require("./assets/email-marketing.svg"),
    image_tile: true, // Do not round image!
    icon: (resource) =>
      (resource.sent ? "move_to_inbox" : "") +
      (resource.in_que ? "forward_to_inbox" : "") +
      (resource.approve ? "mark_email_read" : "") +
      (resource.schedule_at ? "schedule_send" : "") +
      "email",

    to: (resource) => {
      return {
        name: "BPageEmailMarketingDashboard",
        params: { email_id: resource.id },
      };
    },
    start_at: null, // Show timespan
    end_at: null, // Show timespan
    inactive: null,
    chart: (resource) => {
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
