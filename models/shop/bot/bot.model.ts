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

export interface Bot {
  id: number; // The unique identifier for the bot.
  shop_id: number; // The unique identifier for the shop that the bot belongs to.
  driver: Bot.DriverValues; // The driver used by the bot (e.g., 'Telegram').
  secret: string; // A random string used to build a secure path.
  token: string; // The first token used for authentication.
  token2: string; // The second token used for authentication.
  token3: string; // The third token used for authentication.
  enable: boolean; // A flag indicating whether the bot is enabled or not.
  calls: number; // The number of calls made to the bot.
}

import telegramIcon from "./assets/telegram.svg";
import slackIcon from "./assets/slack.svg";
import alexaIcon from "./assets/alexa.svg";
import ciscoIcon from "./assets/cisco.svg";
import facebookIcon from "./assets/facebook-messenger.svg";
import hipchatIcon from "./assets/hipchat.svg";
import microsoftIcon from "./assets/microsoft.svg";
import twilioIcon from "./assets/twilio.svg";
import wechatIcon from "./assets/wechat.svg";

export namespace Bot {
  /**
   * Represents the structure of a shop bot.
   *
   * @property {DriverValues} driver - The identifier for the bot platform.
   * @property {string} icon - The icon associated with the bot platform.
   * @property {string} name - The name of the bot platform.
   * @property {string} [token] - The token required for the bot platform (if applicable).
   * @property {string} [token2] - A secondary token required for the bot platform (if applicable).
   * @property {string} [token3] - A tertiary token required for the bot platform (if applicable).
   * @property {boolean} available - Indicates whether the bot platform is available.
   * @property {function} getWebhookURL - A function to get the webhook URL for the bot platform.
   */
  interface IShopBot {
    driver: DriverValues;
    icon: string;
    name: string;
    token?: string;
    token2?: string;
    token3?: string;
    available: boolean;
    getWebhookURL: (shop_id: string, secret: string) => string;
  }

  export type DriverValues =
    | "Telegram"
    | "Slack"
    | "AmazonAlexa"
    | "CiscoSpark"
    | "Facebook"
    | "HipChat"
    | "BotFramework"
    | "Twilio"
    | "WeChat";

  export const Drivers: IShopBot[] = [
    {
      driver: "Telegram",
      icon: telegramIcon,
      name: "Telegram",
      token: "Bot API Key",
      placeholder: "",
      available: true,
      getWebhookURL: (shop_id: string | number, secret: string) => {
        return `https://bots.selldone.com/${shop_id}/telegram-${secret}`;
      },
    },
    {
      driver: "Slack",
      icon: slackIcon,
      name: "Slack",
      token: "Token",
      available: false,
      getWebhookURL: (shop_id: string | number, secret: string) => {
        return `https://bots.selldone.com/${shop_id}/slack-${secret}`;
      },
    },
    {
      driver: "AmazonAlexa",
      icon: alexaIcon,
      name: "Amazon Alexa",
      available: false,
      getWebhookURL: (shop_id: string | number, secret: string) => {
        return `https://bots.selldone.com/${shop_id}/amazon-${secret}`;
      },
    },
    {
      driver: "CiscoSpark",
      icon: ciscoIcon,
      name: "Cisco Spark",
      token: "Token",
      token2: "Secret",
      available: false,
      getWebhookURL: (shop_id: string | number, secret: string) => {
        return `https://bots.selldone.com/${shop_id}/cisco-${secret}`;
      },
    },
    {
      driver: "Facebook",
      icon: facebookIcon,
      name: "Facebook Messenger",
      token: "Token",
      token2: "App Secret",
      token3: "Verification",
      available: false,
      getWebhookURL: (shop_id: string | number, secret: string) => {
        return `https://bots.selldone.com/${shop_id}/facebook-${secret}`;
      },
    },
    {
      driver: "HipChat",
      icon: hipchatIcon,
      name: "HipChat",
      available: false,
      getWebhookURL: (shop_id: string | number, secret: string) => {
        return `https://bots.selldone.com/${shop_id}/hipchat-${secret}`;
      },
    },
    {
      driver: "BotFramework",
      icon: microsoftIcon,
      name: "Microsoft Bot Framework / Skype",
      token: "API ID",
      token2: "API Key",
      available: false,
      getWebhookURL: (shop_id: string | number, secret: string) => {
        return `https://bots.selldone.com/${shop_id}/microsoft-${secret}`;
      },
    },
    {
      driver: "Twilio",
      icon: twilioIcon,
      name: "Twilio",
      token: "Token",
      available: false,
      getWebhookURL: (shop_id: string | number, secret: string) => {
        return `https://bots.selldone.com/${shop_id}/twilio-${secret}`;
      },
    },
    {
      driver: "WeChat",
      icon: wechatIcon,
      name: "WeChat",
      token: "App ID",
      token2: "App Key",
      token3: "Verification",
      available: false,
      getWebhookURL: (shop_id: string | number, secret: string) => {
        return `https://bots.selldone.com/${shop_id}/wechat-${secret}`;
      },
    },
  ];
}
