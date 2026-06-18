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
  /** Bot id. Source: `bots.id`. */
  id: number;

  /** Owning shop id. Source: `bots.shop_id`. */
  shop_id: number;

  /** Bot platform driver. Backend enum `AvailableBots::AllBots`. */
  driver: Bot.DriverValues;

  /** Random webhook path secret, 64 chars. Source: unique `bots.secret`. */
  secret: string;

  /** Primary platform token, or `null`. Source: nullable text `bots.token`. */
  token: string | null;

  /** Secondary platform token/secret, or `null`. Source: nullable text `bots.token2`. */
  token2: string | null;

  /** Third platform token/verification value, or `null`. Source: nullable text `bots.token3`. */
  token3: string | null;

  /** Whether the bot integration is enabled. Source: `bots.enable` cast to boolean. */
  enable: boolean;

  /** Persisted bot call counter. Source: `bots.calls`; runtime totals may also be cached by driver. */
  calls: number;

  /** Creation timestamp. Source: `bots.created_at`. */
  created_at?: string;

  /** Last update timestamp. Source: `bots.updated_at`. */
  updated_at?: string;

  /** Owning shop relation when eager-loaded. */
  shop?: Record<string, unknown>;
import telegramIcon from "./assets/telegram.svg";
import slackIcon from "./assets/slack.svg";
import alexaIcon from "./assets/alexa.svg";
import ciscoIcon from "./assets/cisco.svg";
import facebookIcon from "./assets/facebook-messenger.svg";
import hipchatIcon from "./assets/hipchat.svg";
import microsoftIcon from "./assets/microsoft.svg";
import twilioIcon from "./assets/twilio.svg";
import wechatIcon from "./assets/wechat.svg";

}

export namespace Bot {
  /**
   * UI metadata for a dashboard-configurable shop bot platform.
   *
   * Backend source: `App\Http\Controllers\Shop\Bots\enums\AvailableBots` and `bots.driver`.
   * `DriverValues` includes every backend enum value; `Drivers` lists drivers that currently have bundled dashboard
   * metadata/assets in this package.
   */
  export interface IShopBot {
    /** Backend enum value stored in `bots.driver`. */
    driver: DriverValues;

    /** Bundled SVG icon path used by dashboard UI. */
    icon: string;

    /** Human-readable platform name. */
    name: string;

    /** Label for primary credential field stored in `bots.token`. */
    token?: string;

    /** Label for secondary credential field stored in `bots.token2`. */
    token2?: string;

    /** Label for third credential/verification field stored in `bots.token3`. */
    token3?: string;

    /** Optional credential input placeholder. */
    placeholder?: string;

    /** Whether this bot driver is exposed as an available dashboard integration. */
    available: boolean;

    /** Build the public bot webhook URL from shop id and persisted secret. */
    getWebhookURL: (shop_id: string | number, secret: string) => string;
  }

  /** Exact backend enum values from `AvailableBots::AllBots`. */
  export type DriverValues =
    | "AmazonAlexa"
    | "CiscoSpark"
    | "Facebook"
    | "Hangouts"
    | "HipChat"
    | "BotFramework"
    | "Slack"
    | "Telegram"
    | "TwilioVoice"
    | "WeChat"
    | "Flock";

  /** Dashboard metadata for bundled bot integrations. Backend can still contain other `DriverValues`. */
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
      driver: "TwilioVoice",
      icon: twilioIcon,
      name: "Twilio Voice",
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
