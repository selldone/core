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

"use strict";

import { Countries, Country } from "./CountriesListEnum"; // Assuming you have a types.ts file which contains the `Country` interface

/** Precompute name and code lookups. */
const nameMap: { [key: string]: string } = {};
const codeMap: { [key: string]: string } = {};

Countries.forEach(mapCodeAndName);

/**
 * Maps country name to its code and vice versa.
 * @param country - The country object containing name and code.
 */
function mapCodeAndName(country: Country) {
  nameMap[country.name.toLowerCase()] = country.code;
  codeMap[country.code.toLowerCase()] = country.name;
}

/**
 * Overwrite the default countries with provided ones.
 * @param countries - An array of country objects to overwrite.
 */
export function overwrite(countries: Country[]) {
  if (!countries || !countries.length) return;
  countries.forEach(function (country) {
    const foundIndex = Countries.findIndex(function (item) {
      return item.code === country.code;
    });
    Countries[foundIndex] = country;
    mapCodeAndName(country);
  });
}

/**
 * Get the country code by its name.
 * @param name - The country name.
 * @returns - The country code.
 */
export function getCode(name: string): string | undefined {
  return name && nameMap[name.toLowerCase()];
}

/**
 * Get the country name by its code.
 * @param code - The country code.
 * @returns - The country name or null if not found.
 */
export function getCountryName(code: string|null): string | null {
  if (!code) return null;
  return codeMap[code.toLowerCase()] || null;
}

/**
 * Get the list of all country names.
 * @returns - An array of country names.
 */
export function getNames(): string[] {
  return Countries.map((country) => country.name);
}

/**
 * Get the list of all country codes.
 * @returns - An array of country codes.
 */
export function getCodes(): string[] {
  return Countries.map((country) => country.code);
}

/**
 * Get the complete list of country codes.
 * @returns - A map of country codes.
 */
export function getCodeList(): { [key: string]: string } {
  return codeMap;
}

/**
 * Get the complete list of country names.
 * @returns - A map of country names.
 */
export function getNameList(): { [key: string]: string } {
  return nameMap;
}

/**
 * Get the complete country data.
 * @returns - An array of country objects.
 */
export function getData(): Country[] {
  return Countries;
}
