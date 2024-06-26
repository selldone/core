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

import SVGs from "./SVGs";
import {Country} from "../../../models/general/country/country.model";

export default {
  card: {
    title: "Cards payments",
    desc: "Cards are a popular way for consumers and businesses to pay online or in person. Stripe supports global and local card networks.",
    icon: SVGs.card,

    mandatory: true, // Always enable!
    code: "card",
    countries: null /*All mode*/,
    currencies: null /*All mode*/,
    subscription: true,
  },
  apple_pay: {
    title: "Apple Pay",
    desc: "Apple Pay is available to cardholders at participating banks in supported countries. Refer to Apple’s participating banks documentation to learn which banks and countries are supported.",
    icon: SVGs.apple_pay,
    mandatory: true, // Always enable!
    code: "card",
    countries: null /*All mode*/,
    currencies: null /*All mode*/,
    subscription: true,
    verification_method: "stripe-apple", // Domain verification
  },
  google_pay: {
    title: "Google Pay",
    desc: "Google Pay allows customers to make payments in your app or website using any credit or debit card saved to their Google Account, including those from Google Play, YouTube, Chrome, or an Android device. Use the Google Pay API to request any credit or debit card stored in your customer’s Google account.",
    icon: SVGs.google_pay,

    mandatory: true, // Always enable!
    code: "card",
    countries: null /*All mode*/,
    currencies: null /*All mode*/,
    subscription: true,
  },

  afterpay_clearpay: {
    title: "Afterpay and Clearpay payments",
    desc: "Afterpay gives your customers in Australia, Canada, New Zealand, the United Kingdom, and the United States a way to split purchases over four installments. Your customer only pays the first installment at purchase time.",
    icon: SVGs.afterpay_clearpay,

    code: "afterpay_clearpay",
    countries: ["AU", "CA", "IE", "NZ", "UK", "US"],
    currencies: ["AUD", "CAD", "NZD", "GBP", "USD"],
    subscription: false,
  },
  alipay: {
    title: "Alipay payments",
    desc: "Alipay is a digital wallet in China that has more than a billion active users worldwide. Alipay users can pay on the web or on a mobile device using login credentials or their Alipay app. ",
    icon: SVGs.alipay,

    code: "alipay",
    countries: [
      "AU",
      "CA",
      "HK",
      "JP",
      "NZ",
      "SG",
      "US",
      ...Country.EuropeCountriesAlpha2,
    ],
    currencies: [
      "AUD",
      "CAD",
      "CNY",
      "EUR",
      "GBP",
      "HKD",
      "JPY",
      "MYR",
      "NZD",
      "SGD",
      "USD",
    ],
    subscription: true,
  },
  bancontact: {
    title: "Bancontact payments",
    desc: "Bancontact is the most popular online payment method in Belgium, with over 15 million cards in circulation. ",
    icon: SVGs.bancontact,

    code: "bancontact",
    countries: [
      "AU",
      "CA",
      "HK",
      "JP",
      "MX",
      "NZ",
      "SG",
      "US",
      ...Country.EuropeCountriesAlpha2,
    ],
    currencies: ["EUR"],
    subscription: false,
  },
  au_becs_debit: {
    code: "BECS Direct Debit payments in Australia",
    desc: "As part of the payment process, businesses must collect a mandate that includes the customer’s bank account details (account holder’s name, the Bank-State-Branch or BSB number, and the bank account number) and must also accept the mandate Service Agreement. This gives the business an authorization to debit the account.",
    icon: SVGs.au_becs_debit,

    countries: ["AU"],
    currencies: ["AUD"],
    subscription: true,
  },
  boleto: {
    title: "Boleto payments",
    desc: "Stripe users in Brazil can accept Boleto payments from customers in Brazil by using the Payment Intents and Payment Methods APIs.",
    icon: SVGs.boleto,

    code: "boleto",
    countries: ["BR"],
    currencies: ["BRL"],
    subscription: false,
  },

  eps: {
    title: "EPS payments",
    desc: "EPS is an Austria-based payment method that allows customers to complete transactions online using their bank credentials. EPS is supported by all Austrian banks and is accepted by over 80% of Austrian online retailers.",
    icon: SVGs.eps,

    code: "eps",
    countries: [
      "AU",
      "CA",
      "HK",
      "JP",
      "MX",
      "NZ",
      "SG",
      "US",
      ...Country.EuropeCountriesAlpha2,
    ],
    currencies: ["EUR"],
    subscription: false,
  },
  ideal: {
    title: "iDEAL payments",
    desc: "iDEAL is a Netherlands-based payment method that allows customers to complete transactions online using their bank credentials. ",
    icon: SVGs.ideal,

    code: "ideal",
    countries: [
      "AU",
      "CA",
      "HK",
      "JP",
      "MX",
      "NZ",
      "SG",
      "US",
      ...Country.EuropeCountriesAlpha2,
    ],
    currencies: ["EUR"],
    subscription: false,
  },
  giropay: {
    title: "giropay payments",
    desc: "giropay is a German payment method based on online banking, introduced in 2006. It allows customers to complete transactions online using their online banking environment, with funds debited from their bank account.",
    icon: SVGs.giropay,

    code: "giropay",
    countries: [
      "AU",
      "CA",
      "HK",
      "JP",
      "MX",
      "NZ",
      "SG",
      "US",
      ...Country.EuropeCountriesAlpha2,
    ],
    currencies: ["EUR"],
    subscription: false,
  },
  klarna: {
    title: "Klarna payments",
    desc: "Klarna gives customers a range of payment options during checkout. Available payment options vary depending on the customer’s billing address and the transaction amount. These payment options make it convenient for customers to purchase items in all price ranges.",
    icon: SVGs.klarna,

    code: "klarna",
    countries: [
      "AT",
      "BE",
      "DK",
      "FI",
      "FR",
      "DE",
      "IT",
      "NL",
      "NO",
      "ES",
      "SE",
      "GB",
      "US",
    ],
    currencies: ["DKK", "EUR", "GBP", "NOK", "SEK", "USD"],
    subscription: false,
  },
  oxxo: {
    title: "OXXO payments",
    desc: "OXXO is a Mexican chain of convenience stores with thousands of locations across Latin America and represents nearly 20% of online transactions in Mexico. OXXO allows customers to pay bills and online purchases in-store with cash.",
    icon: SVGs.oxxo,

    code: "oxxo",
    countries: ["MX"],
    currencies: ["MXN"],
    subscription: false,
  },
  p24: {
    title: "Przelewy24 payments",
    desc: "Przelewy24 is a Poland-based payment method aggregator that allows customers to complete transactions online using bank transfers and other methods. Bank transfers account for 30% of online payments in Poland and Przelewy24 provides a way for customers to pay with over 165 banks.",
    icon: SVGs.p24,
    code: "p24",
    countries: [
      "AU",
      "CA",
      "HK",
      "JP",
      "MX",
      "NZ",
      "SG",
      "US",
      ...Country.EuropeCountriesAlpha2,
    ],
    currencies: ["EUR", "PLN"],
    subscription: false,
  },
  sepa_debit: {
    title: "SEPA Direct Debit payments",
    desc: "The Single Euro Payments Area (SEPA) is an initiative of the European Union to simplify payments within and across member countries. They established and enforced banking standards to allow for the direct debiting of every EUR-denominated bank account within the SEPA region.",
    icon: SVGs.sepa_debit,

    code: "sepa_debit",
    countries: [
      "AU",
      "CA",
      "HK",
      "JP",
      "MX",
      "NZ",
      "SG",
      "US",
      ...Country.EuropeCountriesAlpha2,
    ],
    currencies: ["EUR"],
    subscription: true,
  },
  sofort: {
    title: "Sofort payments",
    desc: "Stripe users in Europe and the United States can use the Payment Intents API—a single integration path for creating payments using any supported method—to accept Sofort payments from customers.",
    icon: SVGs.sofort,

    code: "sofort",
    countries: [
      "AU",
      "CA",
      "HK",
      "JP",
      "MX",
      "NZ",
      "SG",
      "US",
      ...Country.EuropeCountriesAlpha2,
    ],
    currencies: ["EUR"],
    subscription: false,
  },

  // Wallets:
  grabpay: {
    title: "GrabPay payments",
    desc: "GrabPay is a payment method developed by Grab. GrabPay is a digital wallet - customers maintain a balance in their wallets that they pay out with.",
    icon: SVGs.grabpay,

    code: "grabpay",
    countries: ["SG", "MY"],
    currencies: ["SGD", "MYR"],
  },
  wechat: {
    title: "WeChat Pay payments",
    desc: "As China’s largest internet company, Tencent offers a number of web and mobile products across social networking, communications, media, games, finance, and more. WeChat, owned by Tencent, is China’s leading mobile app with over 1 billion monthly active users.",
    icon: SVGs.wechat,

    code: "wechat",
    countries: ["CN", "HK", "SG", "JP"],
    currencies: [
      "CNY",
      "AUD",
      "CAD",
      "EUR",
      "GBP",
      "HKD",
      "JPY",
      "SGD",
      "USD",
      "DKK",
      "NOK",
      "SEK",
      "CHF",
    ],
    subscription: false,
  },

  ach_credit_transfer: {
    title: "ACH Credit Transfer payments",
    desc: "Stripe users in the United States can receive ACH Credit Transfers directly from customers using Sources—a single integration path for creating payments using any supported method.",
    icon: SVGs.bank,

    code: "ach_credit_transfer",
    countries: ["US"],
    currencies: ["USD"],
    subscription: false,
  },
  multibanco: {
    title: "Multibanco payments",
    desc: "Stripe users in Europe and the United States can accept Multibanco payments from customers in Portugal using Sources—a single integration path for creating payments using any supported method.",
    icon: SVGs.multibanco,

    code: "multibanco",
    countries: ["PT"],
    currencies: ["EUR"],
    subscription: false,
  },

  bacs_debit: {
    title: "Bacs Direct Debit payments in the UK",
    desc: "Stripe users in the UK can accept Bacs Direct Debit payments from customers with a UK bank account.",
    icon: SVGs.bacs_debit,

    code: "bacs_debit",
    countries: ["GB"],
    currencies: ["GBP"],
    subscription: false,
  },
};
