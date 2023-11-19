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

import {ShopLicense} from "./ShopLicense";

export const Vouchers = {
  ONE_MONTH_STARTUP: {
    title: "One month startup",
    code: "ONE_MONTH_STARTUP",
    image: "/images/email/vouchers/one-month-startup.png",
    balance: 9.99,
    currency: "USD",
    subscription: "STARTUP",
    months:1,
    license:ShopLicense.STARTUP
  },
  THREE_MONTHS_STARTUP: {
    title: "Three months startup",
    code: "THREE_MONTHS_STARTUP",
    image: "/images/email/vouchers/three-months-startup.png",
    balance: 30,
    currency: "USD",
    subscription: "STARTUP",
    months:3,
    license:ShopLicense.STARTUP
  },
  SIX_MONTHS_STARTUP: {
    title: "Six months startup",
    code: "SIX_MONTHS_STARTUP",
    image: "/images/email/vouchers/six-months-startup.png",
    balance: 60,
    currency: "USD",
    subscription: "STARTUP",
    months:6,
    license:ShopLicense.STARTUP
  },
  TWELVE_MONTHS_STARTUP: {
    title: "Twelve months startup",
    code: "TWELVE_MONTHS_STARTUP",
    image: "/images/email/vouchers/twelve-months-startup.png",
    balance: 120,
    currency: "USD",
    subscription: "STARTUP",
    months:12,
    license:ShopLicense.STARTUP
  },

  ONE_MONTH_COMPANY: {
    title: "One month company",
    code: "ONE_MONTH_COMPANY",
    image: "/images/email/vouchers/one-month-company.png",
    balance: 69,
    currency: "USD",
    subscription: "COMPANY",
    months:1,
    license:ShopLicense.COMPANY
  },
  THREE_MONTHS_COMPANY: {
    title: "Three months company",
    code: "THREE_MONTHS_COMPANY",
    image: "/images/email/vouchers/three-months-company.png",
    balance: 207,
    currency: "USD",
    subscription: "COMPANY",
    months:3,
    license:ShopLicense.COMPANY

  },
  SIX_MONTHS_COMPANY: {
    title: "Six months company",
    code: "SIX_MONTHS_COMPANY",
    image: "/images/email/vouchers/six-months-company.png",
    balance: 414,
    currency: "USD",
    subscription: "COMPANY",
    months:6,
    license:ShopLicense.COMPANY

  },
  TWELVE_MONTHS_COMPANY: {
    title: "Twelve months company",
    code: "TWELVE_MONTHS_COMPANY",
    image: "/images/email/vouchers/twelve-months-company.png",
    balance: 828,
    currency: "USD",
    subscription: "COMPANY",
    months:12,
    license:ShopLicense.COMPANY

  },

  ONE_MONTH_ENTERPRISE: {
    title: "One month enterprise",
    code: "ONE_MONTH_ENTERPRISE",
    image: "/images/email/vouchers/one-month-enterprise.png",
    balance: 299,
    currency: "USD",
    subscription: "ENTERPRISE",
    months:1,
    license:ShopLicense.ENTERPRISE

  },
  THREE_MONTHS_ENTERPRISE: {
    title: "Three months enterprise",
    code: "THREE_MONTHS_ENTERPRISE",
    image: "/images/email/vouchers/three-months-enterprise.png",
    balance: 897,
    currency: "USD",
    subscription: "ENTERPRISE",
    months:3,
    license:ShopLicense.ENTERPRISE

  },
  SIX_MONTHS_ENTERPRISE: {
    title: "Six months enterprise",
    code: "SIX_MONTHS_ENTERPRISE",
    image: "/images/email/vouchers/six-months-enterprise.png",
    balance: 1794,
    currency: "USD",
    subscription: "ENTERPRISE",
    months:6,
    license:ShopLicense.ENTERPRISE

  },
  TWELVE_MONTHS_ENTERPRISE: {
    title: "Twelve months enterprise",
    code: "TWELVE_MONTHS_ENTERPRISE",
    image: "/images/email/vouchers/twelve-months-enterprise.png",
    balance: 3588,
    currency: "USD",
    subscription: "ENTERPRISE",
    months:12,
    license:ShopLicense.ENTERPRISE

  },
};
