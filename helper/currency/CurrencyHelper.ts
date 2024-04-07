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

import {StorefrontLocalStorages} from "../local-storage/StorefrontLocalStorages";
import {Currency, type ICurrency} from "../../enums/payment/Currency";
import {SetupService} from "@core/server/SetupService";
import {TrackConfig} from "@core/enums/gtag/TrackConfig";
import CoreMixin from "@components/mixin/CoreMixin";

export class CurrencyHelper {
  static SetUserSelectedCurrency(
    that: InstanceType<typeof CoreMixin>,
    currency: keyof typeof Currency,
  ) {
    localStorage.setItem(
      // @ts-ignore
      StorefrontLocalStorages.GetUserCurrencyPath(
        that.$localstorage_base_path(),
      ),
      currency,
    );
    TrackConfig.SetCurrency(currency);
    //  that.$store.commit("setUserCurrency", currency);
  }

  static GetUserSelectedCurrency(
    that: InstanceType<typeof CoreMixin>,
  ): ICurrency {
    const user_currency = localStorage.getItem(
      // @ts-ignore
      StorefrontLocalStorages.GetUserCurrencyPath(
        that.$localstorage_base_path(),
      ),
    );
    if (user_currency && Currency[user_currency]) {
      return Currency[user_currency];
    }

    const _default_code = SetupService.DefaultCurrency();
    if (!_default_code) return Currency.USD;
    return Currency[_default_code];
  }

  static GetUserSelectedCurrencyFactor(
    that: InstanceType<typeof CoreMixin>,
    opt_currency: keyof typeof Currency | null = null,
  ): number {
    if (opt_currency)
      return Currency[opt_currency].alt_name
        ? Currency[opt_currency].alt_factor!
        : 1;

    return this.GetUserSelectedCurrency(that).alt_name
      ? this.GetUserSelectedCurrency(that).alt_factor!
      : 1;
  }

  static GetUserSelectedCurrencyName(
    that: InstanceType<typeof CoreMixin>,
    opt_currency: keyof typeof Currency | null = null,
    unicode = false,
  ): string {
    if (opt_currency) {
      // If currency not exist anymore:
      if (!Currency[opt_currency]) return `${opt_currency} Not exist 🚨!`;

      return unicode &&
        Currency[opt_currency].unicode &&
        !Currency[opt_currency]
          .alt_name /*Not for alt mode like IRR! Toman/Rial!*/
        ? Currency[opt_currency].unicode
        : Currency[opt_currency].alt_name
          ? Currency[opt_currency].alt_name!
          : Currency[opt_currency].name!;
    }

    // Default currency set by user:
    const default_currency = this.GetUserSelectedCurrency(that);

    return unicode && default_currency.unicode && !default_currency.alt_name
      ? default_currency.unicode
      : default_currency.alt_name
        ? default_currency.alt_name
        : default_currency.name;
  }

  static GetUserSelectedCurrencyFloats(
    that: InstanceType<typeof CoreMixin>,
    opt_currency: keyof typeof Currency | null = null,
  ) {
    if (opt_currency) return Currency[opt_currency].floats;

    return this.GetUserSelectedCurrency(that).floats;
  }

  static GetUserSelectedCurrencyRoundFactor(
    that: InstanceType<typeof CoreMixin>,
    opt_currency: keyof typeof Currency | null = null,
  ) {
    if (opt_currency) return Currency[opt_currency].round_factor;

    return this.GetUserSelectedCurrency(that).round_factor;
  }

  static GetUserSelectedCurrencyFormat(
    that: InstanceType<typeof CoreMixin>,
    opt_currency: keyof typeof Currency | null = null,
  ) {
    if (opt_currency) return Currency[opt_currency].format;

    return this.GetUserSelectedCurrency(that).format;
  }

  static GetUserSelectedCurrencyUnicode(
    that: InstanceType<typeof CoreMixin>,
    opt_currency: keyof typeof Currency | null = null,
  ) {
    if (opt_currency) return Currency[opt_currency].unicode;

    return this.GetUserSelectedCurrency(that).unicode;
  }

  /**
   * Default sign position (Standard can override by merchants)
   * @param that
   * @param opt_currency
   * @returns {boolean}
   * @constructor
   */
  static GetUserSelectedCurrencySignAtEnd(
    that: InstanceType<typeof CoreMixin>,
    opt_currency: keyof typeof Currency | null = null,
  ) {
    if (opt_currency) return !!Currency[opt_currency].at_end;

    return !!this.GetUserSelectedCurrency(that).at_end;
  }

  /**
   *
   * @param amount
   * @param currency
   * @param local
   * @returns {string}  $xx.xx
   * @constructor
   */
  static ConvertToString(
    amount: number,
    currency: keyof typeof Currency,
    local: string = "en-US",
  ) {
    if (!currency) return amount;
    if (!amount) return amount + " " + currency;

    return amount.toLocaleString(local, {
      style: "currency",
      currency: currency,
    });
  }

  static NeedToSHowCurrencyFlag(
    availableCurrencies: (keyof typeof Currency)[],
  ): boolean {
    if (!availableCurrencies?.length) return false;
    const unicodeCount: Record<string, number> = {}; // Define the type explicitly for clarity

    for (const currencyCode of availableCurrencies) {
      const currency = Currency[currencyCode];
      if (currency && currency.unicode) {
        const unicode = currency.unicode;
        unicodeCount[unicode] = (unicodeCount[unicode] || 0) + 1;
        if (unicodeCount[unicode] >= 2) return true;
      }
    }

    return false;
  }

  static GetCountryByCurrencyCode(currencyCode: keyof typeof Currency|null): string | null {
    if(!currencyCode)return null;
    const currency = Currency[currencyCode];
    return currency ? currency.country : null;
  }

}
