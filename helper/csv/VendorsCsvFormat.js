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
