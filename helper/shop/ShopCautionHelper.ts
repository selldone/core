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

import {i18n} from "@app-backoffice/lang/i18n_backoffice";
import type {Shop} from "../../models/shop/shop.model";
import {Domain} from "@core/models/shop/domain/domain.model";
import {Club} from "@core/models/shop/club/club.model";
import {ShopGateway} from "@core/models/shop/gateway/shop-gateway.model";
import {ShopSocial} from "@core/models/shop/social/shop-social.model";
import {Account} from "@core/models/account/account.model";

export class ShopCautionHelper {
  static Generate(
    shop: Shop & {
      domains?: Domain[];
      clubs?: Club[];
      shop_gateways?: (ShopGateway & { gateway?: Gateway })[];
      socials?: ShopSocial[];
      accounts?: Account[];
    },
  ) {
    const cautions = [];

    // --------------------------------------------- Shop Info ---------------------------------------------
    let score = 10;
    const message = [];
    const info = shop.info;
    if (info?.location) {
      score += 10;
    } else {
      message.push(i18n.global.t("cautions.shop_complete.location_msg"));
    }
    if (info?.days_open) {
      score += 10;
    } else {
      message.push(i18n.global.t("cautions.shop_complete.days_open_msg"));
    }
    if (info?.time_open || info?.time_close) {
      score += 10;
    } else {
      message.push(i18n.global.t("cautions.shop_complete.time_open_msg"));
    }
    if (shop.description) {
      score += 10;
    } else {
      message.push(i18n.global.t("cautions.shop_complete.description_msg"));
    }
    if (shop.icon) {
      score += 10;
    } else {
      message.push(i18n.global.t("cautions.shop_complete.icon_msg"));
    }
    if (shop.shop_gateways && shop.shop_gateways.length) {
      score += 10;
    } else {
      message.push(i18n.global.t("cautions.shop_complete.shop_gateways_msg"));
    }
    if (shop.socials && shop.socials.length) {
      score += 10;
    } else {
      message.push(i18n.global.t("cautions.shop_complete.socials_msg"));
    }
    if (shop.clubs && shop.clubs.length) {
      score += 10;
    } else {
      message.push(i18n.global.t("cautions.shop_complete.clubs_msg"));
    }
    if (shop.domains && shop.domains.length) {
      score += 10;
    } else {
      message.push(i18n.global.t("cautions.shop_complete.domains_msg"));
    }
    if (
      (shop.domains && shop.domains.length) ||
      (shop.sub && shop.sub.primary)
    ) {
      score += 10;
    } else {
      message.push(i18n.global.t("cautions.shop_complete.primary_msg"));
    }

    if (score < 100) {
      cautions.push(
        this.Caution(
          "warning",
          i18n.global.t("cautions.shop_complete.title"),
          message,
          { name: "BPageShopSettingInfo" },
          i18n.global.t("cautions.shop_complete.action"),
          score,
        ),
      );
    }

    // --------------------------------------------- Payment Methods ---------------------------------------------
    if (!shop.shop_gateways || !shop.shop_gateways.length) {
      // Need add payment method:
      cautions.push(
        this.Caution(
          "error",
          i18n.global.t("cautions.no_payment_method.title"),
          i18n.global.t("cautions.no_payment_method.message"),
          { name: "BPageShopFinanceGateways" },
          i18n.global.t("cautions.no_payment_method.action"),
        ),
      );
    } else {
      const gateways_currencies: string[] = []; // Prevent duplicate error for linked accounts:
      shop.shop_gateways.forEach((shop_gateway) => {
        if (
          shop_gateway.gateway?.currency &&
          !gateways_currencies.includes(shop_gateway.gateway?.currency)
        )
          gateways_currencies.push(shop_gateway.gateway?.currency);
      });

      gateways_currencies.forEach((currency) => {
        // Check Shop linked account exist for gateways:
        if (!shop.accounts?.some((account) => account.currency === currency)) {
          cautions.push(
            this.Caution(
              "error",
              i18n.global.t("cautions.link_account.title"),
              i18n.global.t("cautions.link_account.message", {
                currency: currency,
              }),
              { name: "BPageShopFinanceBill" },
              i18n.global.t("cautions.link_account.action"),
            ),
          );
        }
      });
    }

    // --------------------------------------------- Currencies ---------------------------------------------
    if (!shop.currencies || !shop.currencies.length) {
      // Need add payment method:
      cautions.push(
        this.Caution(
          "error",
          i18n.global.t("cautions.no_currency.title"),
          i18n.global.t("cautions.no_currency.message"),
          { name: "BPageShopFinanceExchange" },
          i18n.global.t("cautions.no_currency.action"),
        ),
      );
    }

    // --------------------------------------------- Domains ---------------------------------------------

    if (!shop.domains || !shop.domains.length) {
      // User dont add custom domain:
      cautions.push(
        this.Caution(
          "info",
          i18n.global.t("cautions.no_domain.title"),
          i18n.global.t("cautions.no_domain.message"),
          null,
          null,
        ),
      );
    } else {
      // Some domains not verified:
      shop.domains.forEach((domain) => {
        if (!domain.approved)
          cautions.push(
            this.Caution(
              "warning",
              i18n.global.t("cautions.domain_not_approved.title"),
              i18n.global.t("cautions.domain_not_approved.message", {
                domain: domain.domain,
              }),
              null,
              null,
            ),
          );
      });
    }

    // --------------------------------------------- Domains > Primary ---------------------------------------------

    if (
      (!shop.sub || !shop.sub.primary) &&
      !shop.domains?.some((dom) => dom.primary)
    ) {
      cautions.push(
        this.Caution(
          "error",
          i18n.global.t("cautions.no_primary_domain.title"),
          i18n.global.t("cautions.no_primary_domain.message"),
          null,
          null,
        ),
      );
    }

    return cautions.sort((a, b) => {
      const priority = ["error", "warning", "info"];

      return priority.indexOf(a.type) - priority.indexOf(b.type);
    });
  }

  /**
   *
   * @param type
   * @param title
   * @param message can be string or array!
   * @param to
   * @param action
   * @param score    message must be arrayed!
   * @returns {{score: *, action: *, to: *, type: *, title: *, message: *}}
   * @constructor
   */
  static Caution(
    type: "error" | "warning" | "info",
    title: string,
    message: string | string[],
    to: {
      name: string;
      params?: Record<string, any>;
      query?: Record<string, any>;
    } | null,
    action: String | null,
    score: number | null = null,
  ) {
    return {
      type: type,
      title: title,
      message: message,
      to: to,
      action: action,
      score: score,
    };
  }
}
