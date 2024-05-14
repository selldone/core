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
import {Page} from "../../../models/shop/page/page.model";
import {DiscountCode} from "../../../models/shop/incentives/discount-code/discount-code.model";
import {Coupon} from "../../../models/shop/incentives/coupon/coupon.model";
import {Offer} from "../../../models/shop/incentives/offer/offer.model";
import {GiftCardType} from "../../../models/shop/incentives/gift-card/gift-card-type.model";
import {Popup} from "../../../models/shop/popup/popup.model";
import {ShopBlog} from "../../../models/shop/blog/shop-blog.model";
import {Campaign} from "../../../models/shop/campaign/campaign.model";
import {EmailMarketing} from "../../../models/shop/email-marketing/email-marketing.model";

import discount_image from "./assets/discount-code.svg"
import coupon_image from  "./assets/coupon.svg"
import offer_image from  "./assets/offer.svg"
import giftcard_image from  "./assets/gift-card.svg"
import popup_image from  "./assets/popup.svg"
import campaign_image from  "./assets/campaign.svg"
import email_marketing_image from  "./assets/email-marketing.svg"






export const ClusterResourceType = {
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
                params: {page_id: resource.id},
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
                params: {discount_code_id: resource.id},
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
            (resource.end ? ` | end in ${DateConverter.getFromNowString(resource.end)}` : ""),
        color: (resource: Coupon) => resource.color,
        image: coupon_image,
        image_tile: true, // Do not round image!
        icon: "confirmation_number",

        to: (resource: Coupon) => {
            return {
                name: "BPageCouponDashboard",
                params: {coupon_id: resource.id},
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
            (resource.end ? ` | end in ${DateConverter.getFromNowString(resource.end)}` : ""),
        color: (resource: Offer) => resource.color,
        image: offer_image,
        image_tile: true, // Do not round image!
        icon: "auto_awesome",

        to: (resource: Offer) => {
            return {
                name: "BPageOfferDashboard",
                params: {offer_id: resource.id},
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

        type: (resource: GiftCardType) => `${resource.amount} ${resource.currency}`,
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
                params: {gift_card_type_id: resource.id},
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
                params: {popup_id: resource.id},
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
                params: {blog_id: resource.id},
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
                params: {campaign_id: resource.id},
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
                params: {email_id: resource.id},
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
