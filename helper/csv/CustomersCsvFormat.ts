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

import {Currency} from "../../enums/payment/Currency";
import {Club} from "../../models";

/**
 * Canonical header order for customer CSV files.
 */
export const CustomersCsvHeaders = [
  "Name",
  "Email",
  "Phone",
  "Level",
  "Segments",
  "Birthday",
  "Sex",
  "Currency",

  // Address:
  "Country",
  "State",
  "City",
  "Address",
  "No",
  "Unit",
  "Postal",
];

/**
 * Column metadata used by customer CSV import/export tooling.
 */
export const CustomersCsvStyler = {
  Name: {
    type: "text",
    required_product: true,
  },
  Email: {
    type: "text",
  },
  Phone: {
    type: "text",
  },
  Level: {
    type: "enum",
    list: [...Object.values(Club.Levels)],
    nullable: true,
  },
  Segments: {
    type: "text",
  },
  Birthday: {
    type: "date",
  },
  Sex: {
    type: "enum",
    list: [
      { code: "Male", name: "Male" },
      { code: "Female", name: "Female" },
    ],
    nullable: true,
  },
  Currency: {
    type: "currency",
    list: Object.values(Currency),
  },

  // Address:
  Country: {
    type: "text",
  },
  State: {
    type: "text",
  },
  City: {
    type: "text",
  },
  Address: {
    type: "text",
  },
  No: {
    type: "text",
  },
  Unit: {
    type: "text",
  },
  Postal: {
    type: "text",
  },
};

/**
 * Validation helpers for customer CSV files.
 */
export class CustomersCsvFormat {
  /**
   * Checks whether the uploaded CSV contains the minimum required customer fields.
   * @param {string[]} headers - Parsed CSV headers.
   * @returns {boolean} True when the file is acceptable.
   */
  static CheckValidFile(headers:string[]) {
    if (!headers) return false;
    return !["Name", "Email", "Phone", "Level"].some((it) => {
      return !headers.includes(it);
    });
  }
}
