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

import adminImage from "../../../enums/admin/assets/badges/user-admin.svg";
import contentImage from "../../../enums/admin/assets/badges/user-content.svg";
import marketingImage from "../../../enums/admin/assets/badges/user-marketing.svg";
import seoImage from "../../../enums/admin/assets/badges/user-seo.svg";
import financialImage from "../../../enums/admin/assets/badges/user-finance.svg";
import technicalImage from "../../../enums/admin/assets/badges/user-tech.svg";
import identifyImage from "../../../enums/admin/assets/badges/user-verification.svg";
import partnerImage from "../../../enums/admin/assets/badges/user-partner.svg";
import badgeImage from "../../../enums/admin/assets/badges/user-badge.svg";
import shopImage from "../../../enums/admin/assets/badges/user-shop.svg";
import companyImage from "../../../enums/admin/assets/badges/user-company.svg";
import appImage from "../../../enums/admin/assets/badges/user-apps.svg";
import supportImage from "../../../enums/admin/assets/badges/user-support.svg";
import communityImage from "../../../enums/admin/assets/badges/user-community.svg";


/**
 * Represents the structure of a permission object in Selldone.
 */
interface IPermissionName {
    code: string;
    name: string;
    title: string;
    image: string;
}


/**
 * Contains the predefined permission names and details used in Selldone.
 *
 * Note: These permission names are intended for use in administrative contexts only and should not
 * be used in storefront or backoffice implementations.
 */


export const PermissionNames: Record<string, IPermissionName> = {
    Admin: {
        code: "Admin",
        name: "Administer",
        title: "Full admin of Selldone.",
        image: adminImage,
    },
    Content: {
        code: "Content",
        name: "Content",
        title: "Content management.",
        image: contentImage,
    },
    Marketing: {
        code: "Marketing",
        name: "Marketing",
        title: "Marketing, Email and campaign management of Selldone.",
        image: marketingImage,
    },
    SEO: {
        code: "SEO",
        name: "SEO",
        title: "SEO.",
        image: seoImage,
    },
    Financial: {
        code: "Financial",
        name: "Financial",
        title: "Financial, Gateway and transactions.",
        image: financialImage,
    },
    Technical: {
        code: "Technical",
        name: "Technical",
        title: "Technical, Server monitoring.",
        image: technicalImage,
    },
    Identify: {
        code: "Identify",
        name: "Identify",
        title: "KYC.",
        image: identifyImage,
    },
    Partner: {
        code: "Partner",
        name: "Partner",
        title: "Affiliate and partner management.",
        image: partnerImage,
    },
    Badge: {
        code: "Badge",
        name: "Badge",
        title: "Badges.",
        image: badgeImage,
    },
    Shop: {
        code: "Shop",
        name: "Shop",
        title: "Shops management.",
        image: shopImage,
    },
    Company: {
        code: "Company",
        name: "Company",
        title: "Company management.",
        image: companyImage,
    },
    App: {
        code: "App",
        name: "Application",
        title: "Application management.",
        image: appImage,
    },
    Support: {
        code: "Support",
        name: "Support",
        title: "Manage and answer support tickets.",
        image: supportImage,
    },
    Community: {
        code: "Community",
        name: "Community",
        title: "Manage and moderate communities (Official & Shops).",
        image: communityImage,
    },
};