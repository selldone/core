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
import {SetupService} from "../../server/SetupService";
import {TrackConfig} from "../../enums/gtag/TrackConfig";
import {isObject} from "lodash-es";

/**
 * CurrencyHelper provides utilities for managing and retrieving currency information.
 *
 * This helper handles:
 * - User currency preferences (get/set from localStorage)
 * - Currency properties (name, symbol, format, unicode, decimals)
 * - Currency conversions and formatting
 * - Currency flag display logic
 */
export class CurrencyHelper {
  /**
   * Saves the user's selected currency to localStorage.
   *
   * Stores the selected currency code for a specific path/shop and updates the
   * global tracking configuration with the new currency.
   *
   * @param {string} path - The shop/storefront path identifier.
   * @param {keyof typeof Currency} currency - The currency code to save (e.g., "USD", "EUR").
   *
   * @example
   * CurrencyHelper.SetUserSelectedCurrency("/shop", "EUR");
   */
  static SetUserSelectedCurrency(
    path: string,
    currency: keyof typeof Currency,
  ) {
    // Save to localStorage with path-specific key
    localStorage.setItem(
      // @ts-ignore
      StorefrontLocalStorages.GetUserCurrencyPath(path),
      currency,
    );
    // Update global tracking configuration
    TrackConfig.SetCurrency(currency);
  }

  /**
   * Retrieves the user's selected currency from localStorage.
   *
   * Attempts to get the saved currency for the given path. If not found or invalid,
   * returns the default currency from system configuration.
   *
   * @param {string} path - The shop/storefront path identifier.
   * @returns {ICurrency} The currency object for the user's selected or default currency.
   *
   * @example
   * const currency = CurrencyHelper.GetUserSelectedCurrency("/shop");
   * // Returns: { code: "EUR", name: "Euro", ... }
   */
  static GetUserSelectedCurrency(path: string): ICurrency {
    const user_currency = localStorage.getItem(
      // @ts-ignore
      StorefrontLocalStorages.GetUserCurrencyPath(path),
    );
    // Return user's currency if valid
    if (user_currency && Currency[user_currency]) {
      return Currency[user_currency];
    }

    // Fall back to system default or USD
    const _default_code = SetupService.DefaultCurrency();
    if (!_default_code) return Currency.USD;
    return Currency[_default_code];
  }

  /**
   * Gets the multiplication factor for alternative currency display.
   *
   * Some currencies have alternative display names and factors (e.g., Iranian Toman vs Rial).
   * This method returns the multiplication factor needed for the alternative representation.
   *
   * @param {typeof Currency | keyof typeof Currency} current_currency - The current currency object or code.
   * @param {keyof typeof Currency | null} [opt_currency=null] - Optional override currency code.
   * @returns {number} The multiplication factor (default: 1 if no alternative display).
   *
   * @example
   * CurrencyHelper.GetUserSelectedCurrencyFactor("IRR"); // Returns 1000 (for Toman)
   */
  static GetUserSelectedCurrencyFactor(
    current_currency: typeof Currency | keyof typeof Currency,
    opt_currency: keyof typeof Currency | null = null,
  ): number {
    if (opt_currency)
      return Currency[opt_currency].alt_name
        ? Currency[opt_currency].alt_factor!
        : 1;

    const currency_obj = isObject(current_currency)
      ? current_currency
      : Currency[current_currency];

    return currency_obj?.alt_name ? currency_obj.alt_factor! : 1;
  }

  /**
   * Gets the display name of a currency.
   *
   * Returns the currency's display name, optionally using unicode symbols.
   * Handles alternative currency names (e.g., "Toman" instead of "Rial").
   *
   * @param {typeof Currency | keyof typeof Currency} current_currency - The current currency object or code.
   * @param {keyof typeof Currency | null} [opt_currency=null] - Optional override currency code.
   * @param {boolean} [unicode=false] - If true, returns unicode symbol if available.
   * @returns {string} The currency name or unicode symbol.
   *
   * @example
   * CurrencyHelper.GetUserSelectedCurrencyName("USD", null, true); // Returns "$"
   * CurrencyHelper.GetUserSelectedCurrencyName("EUR"); // Returns "Euro"
   */
  static GetUserSelectedCurrencyName(
    current_currency: typeof Currency | keyof typeof Currency,
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
    const default_currency = current_currency;

    return unicode && default_currency.unicode && !default_currency.alt_name
      ? default_currency.unicode
      : default_currency.alt_name
        ? default_currency.alt_name
        : default_currency.name;
  }

  /**
   * Gets the number of decimal places for a currency.
   *
   * Different currencies use different precision levels:
   * - Most currencies: 2 decimals (e.g., $10.50)
   * - Bitcoin: 8 decimals
   *
   * @param {typeof Currency | keyof typeof Currency} current_currency - The current currency object or code.
   * @param {keyof typeof Currency | null} [opt_currency=null] - Optional override currency code.
   * @returns {number} The number of decimal places.
   *
   * @example
   * CurrencyHelper.GetUserSelectedCurrencyFloats("USD"); // Returns 2
   */
  static GetUserSelectedCurrencyFloats(
    current_currency: typeof Currency | keyof typeof Currency,
    opt_currency: keyof typeof Currency | null = null,
  ) {
    if (opt_currency) return Currency[opt_currency].floats;

    return isObject(current_currency)
      ? current_currency.floats
      : Currency[current_currency]?.floats;
  }

  /**
   * Gets the rounding factor for a currency.
   *
   * Useful for rounding prices to the nearest valid amount for the currency.
   *
   * @param {typeof Currency | keyof typeof Currency} current_currency - The current currency object or code.
   * @param {keyof typeof Currency | null} [opt_currency=null] - Optional override currency code.
   * @returns {number} The rounding factor.
   *
   * @example
   * CurrencyHelper.GetUserSelectedCurrencyRoundFactor("USD"); // Returns 0.01
   */
  static GetUserSelectedCurrencyRoundFactor(
    current_currency: typeof Currency | keyof typeof Currency,
    opt_currency: keyof typeof Currency | null = null,
  ) {
    if (opt_currency) return Currency[opt_currency].round_factor;

    return isObject(current_currency)
      ? current_currency.round_factor
      : Currency[current_currency]?.round_factor;
  }

  /**
   * Gets the format specification for displaying currency amounts.
   *
   * Format specifies how to display currency amounts (position of symbol, spacing, etc.).
   *
   * @param {typeof Currency | keyof typeof Currency} current_currency - The current currency object or code.
   * @param {keyof typeof Currency | null} [opt_currency=null] - Optional override currency code.
   * @returns {*} The currency format specification.
   *
   * @example
   * CurrencyHelper.GetUserSelectedCurrencyFormat("USD"); // Format pattern
   */
  static GetUserSelectedCurrencyFormat(
    current_currency: typeof Currency | keyof typeof Currency,
    opt_currency: keyof typeof Currency | null = null,
  ) {
    if (opt_currency) return Currency[opt_currency].format;

    return isObject(current_currency)
      ? current_currency.format
      : Currency[current_currency]?.format;
  }

  /**
   * Gets the unicode symbol for a currency.
   *
   * Returns the unicode character representing the currency symbol (e.g., "$", "€", "¥").
   *
   * @param {typeof Currency | keyof typeof Currency} current_currency - The current currency object or code.
   * @param {keyof typeof Currency | null} [opt_currency=null] - Optional override currency code.
   * @returns {string} The unicode currency symbol.
   *
   * @example
   * CurrencyHelper.GetUserSelectedCurrencyUnicode("USD"); // Returns "$"
   */
  static GetUserSelectedCurrencyUnicode(
    current_currency: typeof Currency | keyof typeof Currency,
    opt_currency: keyof typeof Currency | null = null,
  ) {
    if (opt_currency) return Currency[opt_currency].unicode;

    return isObject(current_currency)
      ? current_currency.unicode
      : Currency[current_currency]?.unicode;
  }

  /**
   * Determines if the currency symbol should be displayed at the end of the amount.
   *
   * Default position for currency symbols is at the start (e.g., "$100"), but some
   * currencies display the symbol at the end (e.g., "100€"). This can be overridden
   * by merchant configuration.
   *
   * @param {typeof Currency | keyof typeof Currency} current_currency - The current currency object or code.
   * @param {keyof typeof Currency | null} [opt_currency=null] - Optional override currency code.
   * @returns {boolean} True if the symbol should be at the end, false for at the start.
   *
   * @example
   * CurrencyHelper.GetUserSelectedCurrencySignAtEnd("EUR"); // Returns true
   * CurrencyHelper.GetUserSelectedCurrencySignAtEnd("USD"); // Returns false
   */
  static GetUserSelectedCurrencySignAtEnd(
    current_currency: typeof Currency | keyof typeof Currency,
    opt_currency: keyof typeof Currency | null = null,
  ) {
    if (opt_currency) return !!Currency[opt_currency].at_end;

    return !!(isObject(current_currency)
      ? current_currency.at_end
      : Currency[current_currency]?.at_end);
  }

  /**
   * Converts a number to a locale-specific currency formatted string.
   *
   * Uses JavaScript's built-in Intl.NumberFormat for locale-aware currency formatting.
   *
   * @param {number} amount - The amount to format.
   * @param {keyof typeof Currency} currency - The currency code.
   * @param {string} [local="en-US"] - The locale string (e.g., "en-US", "de-DE").
   * @returns {string} Formatted currency string (e.g., "$100.00", "100,00 €").
   *
   * @example
   * CurrencyHelper.ConvertToString(100.50, "USD"); // Returns "$100.50"
   * CurrencyHelper.ConvertToString(100.50, "EUR", "de-DE"); // Returns "100,50 €"
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

  /**
   * Determines if a currency flag/icon should be displayed.
   *
   * Returns true if multiple currencies in the available list share the same unicode symbol,
   * which would require displaying flags/icons for disambiguation.
   *
   * @param {(keyof typeof Currency)[]} availableCurrencies - Array of available currency codes.
   * @returns {boolean} True if currency flags should be shown, false otherwise.
   *
   * @example
   * CurrencyHelper.NeedToSHowCurrencyFlag(["USD", "EUR", "GBP"]); // Returns false (all different symbols)
   * CurrencyHelper.NeedToSHowCurrencyFlag(["AUD", "USD"]); // Returns true ($ symbol collision)
   */
  static NeedToSHowCurrencyFlag(
    availableCurrencies: (keyof typeof Currency)[],
  ): boolean {
    if (!availableCurrencies?.length) return false;
    const unicodeCount: Record<string, number> = {}; // Define the type explicitly for clarity

    // Count occurrences of each unicode symbol
    for (const currencyCode of availableCurrencies) {
      const currency = Currency[currencyCode];
      if (currency && currency.unicode) {
        const unicode = currency.unicode;
        unicodeCount[unicode] = (unicodeCount[unicode] || 0) + 1;
        // If any symbol appears more than once, we need flags
        if (unicodeCount[unicode] >= 2) return true;
      }
    }

    return false;
  }

  /**
   * Gets the country name/code of a currency.
   *
   * Maps a currency code to its primary country of origin (e.g., "USD" -> "United States").
   *
   * @param {keyof typeof Currency | null} currencyCode - The currency code to look up.
   * @returns {string | null} The country name/code, or null if not found or input is null.
   *
   * @example
   * CurrencyHelper.GetCountryByCurrencyCode("JPY"); // Returns "Japan"
   * CurrencyHelper.GetCountryByCurrencyCode(null); // Returns null
   */
  static GetCountryByCurrencyCode(
    currencyCode: keyof typeof Currency | null,
  ): string | null {
    if (!currencyCode) return null;
    const currency = Currency[currencyCode];
    return currency ? currency.country : null;
  }
}
