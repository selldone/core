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

export const VendorsCsvHeaders = [
  "Name",
  "Description",
  "Enable",
  "Access",
  "Email",
  "Address",
  "Web",
  "Tel",
  "Bank",
  "Bank Account Name",
  "Bank Account Number",
  "Bank Routing Number",
  "IBAN",
  "Swift",
  "Bank Address",

  "Icon",

  "Country",
  "State",

  "Business",
  "Business Name",
  "Tax ID",
];

export const VendorsCsvStyler = {
  Name: {
    type: "text",
    required_product: true,
  },
  Description: {
    type: "text",
  },
  Enable: {
    type: "boolean",
    default: true, // Autocorrection
  },
  Access: {
    type: "boolean",
    default: true, // Autocorrection
  },

  Email: {
    type: "text",
  },
  Address: {
    type: "text",
  },

  Web: {
    type: "text",
  },
  Tel: {
    type: "text",
  },
  Bank: {
    type: "text",
  },

  "Bank Account Name": {
    type: "text",
  },
  "Bank Account Number": {
    type: "text",
  },
  "Bank Routing Number": {
    type: "text",
  },
  IBAN: {
    type: "text",
  },
  Swift: {
    type: "text",
  },
  "Bank Address": {
    type: "text",
  },

  Icon: {
    type: "text",
  },

  Country: {
    type: "text",
  },
  State: {
    type: "text",
  },

  Business: {
    type: "boolean",
  },
  "Business Name": {
    type: "text",
  },
  "Tax ID": {
    type: "text",
  },
};

export class VendorsCsvFormat {
  static CheckValidFile(headers) {
    if (!headers) return false;
    return !["Name"].some((it) => {
      return !headers.includes(it);
    });
  }
}
