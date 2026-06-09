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

import {PriceHelper} from "../price/PriceHelper";
import type {Shop} from "../../models/shop/shop.model";
import {Currency} from "../../enums/payment/Currency";
import type {Campaign} from "../../models/shop/campaign/campaign.model";

/**
 * Helper utilities for campaign analytics, traffic attribution, and payment summaries.
 */
export class CampaignHelper {
  /**
   * Checks whether a traffic source should be treated as an organic search engine.
   *
   * @param {string} net - Traffic source key such as `google` or `direct`.
   * @returns {boolean} True when the source belongs to known search engines.
   */
  static isSearch(net: string) {
    return ["google"].includes(net);
  }

  /**
   * Checks whether a traffic source should be treated as a social network.
   *
   * Any source that is neither `direct` nor recognized as search traffic is treated
   * as a social/referral source in the campaign summary UI.
   *
   * @param {string} net - Traffic source key.
   * @returns {boolean} True when the source is categorized as social traffic.
   */
  static isSocialNetwork(net: string) {
    return net !== "direct" && !this.isSearch(net);
  }

  /**
   * Sums payment amounts from multiple currencies into one target currency.
   *
   * @param {Shop} shop - Shop containing exchange rates.
   * @param {keyof typeof Currency} to_currency - Destination currency code.
   * @param {Record<string, number>} payment - Map of currency code to paid amount.
   * @returns {number} Total normalized amount in the requested currency.
   */
  static GetTotalAmount(
    shop: Shop,
    to_currency: keyof typeof Currency,
    payment: Record<string, number>,
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

  /**
   * Calculates the total amount of visits attributed to social sources.
   *
   * @param {Campaign} campaign - Campaign analytics payload.
   * @returns {number} Sum of all social source counters.
   */
  static GetTotalSocials(campaign: Campaign) {
    let out = 0;
    const social = campaign.social;
    if (social) {
      Object.keys(social).forEach((key) => {
        if (!this.isSocialNetwork(key)) return;
        out += social[key];
      });
    }
    return out;
  }

  /**
   * Returns only social-source counters, optionally limited to the top items.
   *
   * The output preserves the shape expected by charting/analytics widgets.
   * Sorting depends on array prototype helpers registered elsewhere in the project.
   *
   * @param {Campaign} campaign - Campaign analytics payload.
   * @param {number} [limit=0] - Maximum number of sources to keep. `0` means unlimited.
   * @returns {Record<string, number>} Social-source counters keyed by source name.
   */
  static GetSocialsOnly(campaign: Campaign, limit: number = 0) {
    const out: Record<string, number> = {};
    const social = campaign.social;
    if (social) {
      let sorted: { key: string; value: number }[] = [];
      Object.keys(social).forEach((key) => {
        if (!this.isSocialNetwork(key)) return;
        sorted.push({ key: key, value: social[key] });
      });
      sorted.sortByKey("value");

      if (limit) {
        sorted = sorted.limit(limit);
      }

      sorted.forEach(({ key, value }) => {
        out[key] = value;
      });
    }
    return out;
  }

  /**
   * Returns the number of direct visits.
   *
   * @param {Campaign} campaign - Campaign analytics payload.
   * @returns {number} Direct traffic count.
   */
  static GetTotalDirects(campaign: Campaign) {
    return campaign.social && campaign.social.direct
      ? campaign.social.direct
      : 0;
  }

  /**
   * Returns the number of organic-search visits.
   *
   * @param {Campaign} campaign - Campaign analytics payload.
   * @returns {number} Search traffic count.
   */
  static GetTotalOrganicSearch(campaign: Campaign) {
    let out = 0;
    const social = campaign.social;
    if (social) {
      Object.keys(social).forEach((key) => {
        if (!this.isSearch(key)) return;
        out += social[key];
      });
    }
    return out;
  }

  /**
   * Calculates uncategorized traffic by subtracting known buckets from total sessions.
   *
   * @param {Campaign} campaign - Campaign analytics payload.
   * @returns {number} Remaining traffic count, never below zero.
   */
  static GetTotalOther(campaign: Campaign) {
    const out =
      campaign.sessions -
      (this.GetTotalSocials(campaign) +
        this.GetTotalOrganicSearch(campaign) +
        this.GetTotalDirects(campaign));

    return out > 0 ? out : 0;
  }
}
