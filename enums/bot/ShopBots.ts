// @ts-nocheck
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

export const ShopBots = [
  {
    driver: "Telegram",
    icon: require("./assets/telegram.svg"),
    name: "Telegram",
    token: "Bot API Key",
    placeholder: "",
    available: true,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/telegram-${secret}`;
    },
  },
  {
    driver: "Slack",
    icon: require("./assets/slack.svg"),
    name: "Slack",
    token: "Token",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/slack-${secret}`;
    },
  },
  {
    driver: "AmazonAlexa",
    icon: require("./assets/alexa.svg"),
    name: "Amazon Alexa",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/amazon-${secret}`;
    },
  },

  {
    driver: "CiscoSpark",
    icon: require("./assets/cisco.svg"),
    name: "Cisco Spark",
    token: "Token",
    token2: "Secret",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/cisco-${secret}`;
    },
  },

  {
    driver: "Facebook",
    icon: require("./assets/facebook-messenger.svg"),
    name: "Facebook Messenger",
    token: "Token",
    token2: "App Secret",
    token3: "Verification",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/facebook-${secret}`;
    },
  },


  {
    driver: "HipChat",
    icon: require("./assets/hipchat.svg"),
    name: "HipChat",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/hipchat-${secret}`;
    },
  },
  {
    driver: "BotFramework",
    icon: require("./assets/microsoft.svg"),
    name: "Microsoft Bot Framework / Skype",
    token: "API ID",
    token2: "API Key",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/microsoft-${secret}`;
    },
  },


  {
    driver: "Twilio",
    icon: require("./assets/twilio.svg"),
    name: "Twilio",
    token: "Token",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/twilio-${secret}`;
    },
  },
  {
    driver: "WeChat",
    icon: require("./assets/wechat.svg"),
    name: "WeChat",
    token: "App ID",
    token2: "App Key",
    token3: "Verification",
    available: false,
    getWebhookURL: (shop_id, secret) => {
      return `https://bots.selldone.com/${shop_id}/wechat-${secret}`;
    },
  },
];
