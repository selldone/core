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

import { NotificationRepositoryType } from "./NotificationRepositoryType";
import { CompileMarkdown } from "../../helper/html/HtmlHelper";
import type { NotificationRepository } from "../../models/notification/notification-repository.model";

export class NotificationHelper {
  constructor() {}

  getIcon(notification: NotificationRepository) {
    const icon = NotificationRepositoryType[notification.type]?.icon;
    return icon ? icon : "notifications";
  }

  getTitle(notification: NotificationRepository) {
    const obj = NotificationRepositoryType[notification.type];
    if (!obj || !obj.title) return CompileMarkdown(notification.message);
    return window.$t(obj.title);
  }

  getDescription(notification: NotificationRepository) {
    const obj = NotificationRepositoryType[notification.type];
    if (!obj || !obj.description) return "";
    let out = window.$t(obj.description) as string;

    const data = notification.data;

    out = this.safeReplace(out, "{count}", notification.count, true);
    out = this.safeReplace(out, "{data.shop.title}", data?.shop?.title, true);
    out = this.safeReplace(out, "{data.user.name}", data?.user?.name, true);
    out = this.safeReplace(out, "{data.basket.id}", data?.basket?.id, true);
    out = this.safeReplace(out, "{data.basket.type}", data?.basket?.type, true);

    return out;
  }

  safeReplace(
    out: string,
    key: string,
    value: string | number | null | undefined,
    bold = false
  ) {
    return out.replace(
      key,
      value ? (bold ? `<b>${value.toString()}</b>` : value.toString()) : ""
    );
  }

  getTo(notification: NotificationRepository) {
    const obj = NotificationRepositoryType[notification.type];
    if (!obj || !obj.to || !this.isFunction(obj.to)) return undefined;
    return obj.to(notification);
  }

  getColor(notification: NotificationRepository) {
    const obj = NotificationRepositoryType[notification.type];
    return obj?.color ? obj.color : "#111";
  }

  isFunction(functionToCheck: any) {
    return (
      functionToCheck &&
      {}.toString.call(functionToCheck) === "[object Function]"
    );
  }
}

// Usage:
// const helper = new NotificationHelper(yourTranslationFunction, NotificationRepositoryType);
// helper.getIcon(notification);
