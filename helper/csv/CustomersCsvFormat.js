import { CustomerClubLevels } from "../../enums/customer/CustomerClubLevels";
import { Currency } from "../../enums/payment/Currency";

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
    list: [...Object.values(CustomerClubLevels)],
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

export class CustomersCsvFormat {
  static CheckValidFile(headers) {
    if (!headers) return false;
    return !["Name", "Email", "Phone", "Level"].some((it) => {
      return !headers.includes(it);
    });
  }
}
