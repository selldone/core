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

import { SetupService } from "@core/server/SetupService";

/**
 * Interface representing the structure of a notification channel.
 */
interface INotificationChannel {
  channel: ShopChannelType;
  icon: string; // Assuming icon requires a string path
  name: string;
  available: boolean;
  events: string[];
  default_active: boolean;
  android?: ReturnType<typeof SetupService.AndroidApp>;
  ios?: ReturnType<typeof SetupService.IosApp>;
  connect_button?: boolean;
  star?: boolean;
}

/**
 * Type representing the possible 'channel' values from the NotificationChannel.
 */
export type ShopChannelType =
  | "Application"
  | "Email"
  | "SMS"
  | "Notification"
  | "Telegram"
  | "Flock"
  | "Slack";

/**
 * Array containing different notification channels.
 * Each element represents a specific channel with its properties.
 */
export default [
  {
    channel: "Application",
    icon: require("@components/assets/selldone-logo/logo-box.svg"),
    name: "Application",
    available: true,
    events: [
      "notification_events.new_order",
      "notification_events.payment",
      "notification_events.return",
    ],
    default_active: true,
    android: SetupService.AndroidApp(),
    ios: SetupService.IosApp(),
  },
  {
    channel: "Email",
    icon: require("@components/assets/icons/email.svg"),
    name: "global.commons.email",
    available: true,
    events: [
      "notification_events.payment",
      "notification_events.weekly_report",
    ],
    default_active: true,
  },
  {
    channel: "SMS",
    icon: require("@components/assets/icons/sms.svg"),
    name: "global.commons.sms",
    available: true,
    events: ["notification_events.payment"],
    default_active: true,
  },
  {
    channel: "Notification",
    icon: require("@components/assets/icons/notification-blue.svg"),
    name: "global.commons.notification",
    available: true,
    events: ["notification_events.payment"],
    default_active: true,
  },

  {
    channel: "Telegram",
    icon: require("@components/assets/trademark/telegram.svg"),
    name: "Telegram",
    available: true,
    events: [
      "notification_events.new_order",
      "notification_events.payment",
      "notification_events.return",
    ],
    connect_button: true,
  },
  {
    channel: "Flock",
    icon: require("@components/assets/trademark/flock.svg"),
    name: "Flock",
    available: true,
    events: [
      "notification_events.new_order",
      "notification_events.payment",
      "notification_events.return",
    ],
    connect_button: true,
  },
  {
    channel: "Slack",
    icon: require("@components/assets/trademark/slack.svg"),
    name: "Slack",
    available: true,
    events: [
      "notification_events.new_order",
      "notification_events.payment",
      "notification_events.return",
    ],
    connect_button: true,
    star: true,
  },
] as INotificationChannel[];
