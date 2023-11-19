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

import { PriceHelper } from "../price/PriceHelper";
import type { Shop } from "../../models/shop/shop.model";
import { Currency } from "../../enums/payment/Currency";
import type { Campaign } from "../../models/shop/campaign/campaign.model";

export class CampaignHelper {
  static isSearch(net: string) {
    return ["google"].includes(net);
  }
  static isSocialNetwork(net: string) {
    return net !== "direct" && !this.isSearch(net);
  }

  static GetTotalAmount(
    shop: Shop,
    to_currency: keyof typeof Currency,
    payment: Record<string, number>
  ) {
    let out = 0;
    if (payment) {
      Object.keys(payment).forEach((currency) => {
        const _rate = PriceHelper.getBuyRateValue(shop, currency, to_currency);
        if (_rate) out += _rate * payment[currency];
      });
    }
    return out;
  }
  static GetTotalSocials(campaign: Campaign) {
    let out = 0;
    if (campaign.social) {
      Object.keys(campaign.social).forEach((key) => {
        if (!this.isSocialNetwork(key)) return;
        out += campaign.social[key];
      });
    }
    return out;
  }
  static GetSocialsOnly(campaign: Campaign, limit: number = 0) {
    const out: Record<string, number> = {};
    if (campaign.social) {
      // 1. Sort values:
      let sorted: { key: string; value: number }[] = [];
      Object.keys(campaign.social).forEach((key) => {
        // 2. Filter only social:
        if (!this.isSocialNetwork(key)) return;

        sorted.push({ key: key, value: campaign.social[key] });
      });
      sorted.sortByKey("value");

      // 3. Apply limit:
      if (limit) {
        sorted = sorted.limit(limit);
      }
      // 4. Convert to object:
      sorted.forEach(({ key, value }) => {
        out[key] = value;
      });
    }
    return out;
  }
  static GetTotalDirects(campaign: Campaign) {
    return campaign.social && campaign.social.direct
      ? campaign.social.direct
      : 0;
  }

  static GetTotalOrganicSearch(campaign: Campaign) {
    let out = 0;
    if (campaign.social) {
      Object.keys(campaign.social).forEach((key) => {
        if (!this.isSearch(key)) return;
        out += campaign.social[key];
      });
    }
    return out;
  }

  static GetTotalOther(campaign: Campaign) {
    const out =
      campaign.sessions -
      (this.GetTotalSocials(campaign) +
        this.GetTotalOrganicSearch(campaign) +
        this.GetTotalDirects(campaign));

    return out > 0 ? out : 0;
  }
}
