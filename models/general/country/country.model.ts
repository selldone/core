/*
 * Copyright (c) 2023-2024. Selldone® Business OS™
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

/**
 * ISO 3166-1 alpha-2 country code.
 *
 * Kept as `string` instead of a generated literal union because the frontend `Countries`
 * array is intentionally mutable through `country-helper.overwrite()`, while backend
 * helpers such as `ISO3166::GetCountryInfo()` also accept arbitrary strings and normalize
 * them internally.
 */
export type ICountryCode = string;

/** ISO 3166-1 alpha-3 country code used by backend `App\Helper\ISO3166::countries`. */
export type ICountryAlpha3Code = string;

/** ISO 3166-1 numeric country code stored as a zero-padded string in backend `ISO3166::countries`. */
export type ICountryNumericCode = string;

/** ISO 4217 currency code stored in backend country records under `currency`. */
export type ICountryCurrencyCode = string;

/**
 * Administrative subdivision/state item when a backend country record exposes a `states` payload.
 *
 * The backend helper returns this data as-is from `ISO3166::countries`; different countries may have
 * different state payload shapes, so the model keeps a safe extensible index signature.
 */
export interface ICountryState {
  /** State/province display name when present. */
  name?: string;

  /** State/province short code when present. */
  code?: string;

  /** Backend-specific subdivision fields preserved for callers. */
  [key: string]: string | number | boolean | null | undefined;
}

/**
 * State/subdivision collection returned by `ISO3166::GetCountryStates()`.
 *
 * Backend records are not guaranteed to use a single normalized shape, so both keyed maps and arrays are accepted.
 */
export type ICountryStates =
  | Record<string, string | ICountryState>
  | ICountryState[];

/**
 * Display country item used by storefront/dashboard country pickers.
 *
 * This frontend list mirrors ISO 3166-1 alpha-2 style country records. Backend helper reference:
 * `App\Helper\ISO3166`.
 */
export type ICountry = {
  /** Two-letter uppercase ISO 3166-1 alpha-2 code used by frontend helpers. */
  code: ICountryCode;

  /** English display name. */
  name: string;

  /** Backend alpha-2 field name when a full `ISO3166::countries` record is passed through. */
  alpha2?: ICountryCode;

  /** Backend alpha-3 field name when a full `ISO3166::countries` record is passed through. */
  alpha3?: ICountryAlpha3Code;

  /** Backend numeric ISO code when a full `ISO3166::countries` record is passed through. */
  numeric?: ICountryNumericCode;

  /** Country currencies from backend `ISO3166::countries[*].currency`. */
  currency?: ICountryCurrencyCode[];

  /** Country subdivisions from backend `ISO3166::GetCountryStates()`, when available. */
  states?: ICountryStates | null;

  /** Whether postal/ZIP code input should be skipped for this country. Source: backend `nozip`. */
  nozip?: boolean;
};

/**
 * Mutable country list used by country helper functions.
 *
 * Do not convert this array to `as const`; `overwrite()` updates entries at
 * runtime for locale/custom display-name overrides.
 */
export const Countries: ICountry[] = [
  { code: "AD", name: "Andorra" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "AF", name: "Afghanistan" },
  { code: "AG", name: "Antigua and Barbuda" },
  { code: "AI", name: "Anguilla" },
  { code: "AL", name: "Albania" },
  { code: "AM", name: "Armenia" },
  { code: "AO", name: "Angola" },
  { code: "AQ", name: "Antarctica" },
  { code: "AR", name: "Argentina" },
  { code: "AS", name: "American Samoa" },
  { code: "AT", name: "Austria" },
  { code: "AU", name: "Australia" },
  { code: "AW", name: "Aruba" },
  { code: "AX", name: "Åland Islands" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BB", name: "Barbados" },
  { code: "BD", name: "Bangladesh" },
  { code: "BE", name: "Belgium" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BG", name: "Bulgaria" },
  { code: "BH", name: "Bahrain" },
  { code: "BI", name: "Burundi" },
  { code: "BJ", name: "Benin" },
  { code: "BL", name: "Saint Barthélemy" },
  { code: "BM", name: "Bermuda" },
  { code: "BN", name: "Brunei Darussalam" },
  { code: "BO", name: "Bolivia, Plurinational State of" },
  { code: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
  { code: "BR", name: "Brazil" },
  { code: "BS", name: "Bahamas" },
  { code: "BT", name: "Bhutan" },
  { code: "BV", name: "Bouvet Island" },
  { code: "BW", name: "Botswana" },
  { code: "BY", name: "Belarus" },
  { code: "BZ", name: "Belize" },
  { code: "CA", name: "Canada" },
  { code: "CC", name: "Cocos (Keeling) Islands" },
  { code: "CD", name: "Congo, Democratic Republic of the" },
  { code: "CF", name: "Central African Republic" },
  { code: "CG", name: "Congo" },
  { code: "CH", name: "Switzerland" },
  { code: "CI", name: "Côte d'Ivoire" },
  { code: "CK", name: "Cook Islands" },
  { code: "CL", name: "Chile" },
  { code: "CM", name: "Cameroon" },
  { code: "CN", name: "China" },
  { code: "CO", name: "Colombia" },
  { code: "CR", name: "Costa Rica" },
  { code: "CU", name: "Cuba" },
  { code: "CV", name: "Cabo Verde" },
  { code: "CW", name: "Curaçao" },
  { code: "CX", name: "Christmas Island" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czechia" },
  { code: "DE", name: "Germany" },
  { code: "DJ", name: "Djibouti" },
  { code: "DK", name: "Denmark" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "Dominican Republic" },
  { code: "DZ", name: "Algeria" },
  { code: "EC", name: "Ecuador" },
  { code: "EE", name: "Estonia" },
  { code: "EG", name: "Egypt" },
  { code: "EH", name: "Western Sahara" },
  { code: "ER", name: "Eritrea" },
  { code: "ES", name: "Spain" },
  { code: "ET", name: "Ethiopia" },
  { code: "FI", name: "Finland" },
  { code: "FJ", name: "Fiji" },
  { code: "FK", name: "Falkland Islands (Malvinas)" },
  { code: "FM", name: "Micronesia, Federated States of" },
  { code: "FO", name: "Faroe Islands" },
  { code: "FR", name: "France" },
  { code: "GA", name: "Gabon" },
  { code: "GB", name: "United Kingdom" },
  { code: "GD", name: "Grenada" },
  { code: "GE", name: "Georgia" },
  { code: "GF", name: "French Guiana" },
  { code: "GG", name: "Guernsey" },
  { code: "GH", name: "Ghana" },
  { code: "GI", name: "Gibraltar" },
  { code: "GL", name: "Greenland" },
  { code: "GM", name: "Gambia" },
  { code: "GN", name: "Guinea" },
  { code: "GP", name: "Guadeloupe" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "GR", name: "Greece" },
  { code: "GS", name: "South Georgia and the South Sandwich Islands" },
  { code: "GT", name: "Guatemala" },
  { code: "GU", name: "Guam" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "GY", name: "Guyana" },
  { code: "HK", name: "Hong Kong" },
  { code: "HM", name: "Heard Island and McDonald Islands" },
  { code: "HN", name: "Honduras" },
  { code: "HR", name: "Croatia" },
  { code: "HT", name: "Haiti" },
  { code: "HU", name: "Hungary" },
  { code: "ID", name: "Indonesia" },
  { code: "IE", name: "Ireland" },
  { code: "IL", name: "Israel" },
  { code: "IM", name: "Isle of Man" },
  { code: "IN", name: "India" },
  { code: "IO", name: "British Indian Ocean Territory" },
  { code: "IQ", name: "Iraq" },
  { code: "IR", name: "Iran" },
  { code: "IS", name: "Iceland" },
  { code: "IT", name: "Italy" },
  { code: "JE", name: "Jersey" },
  { code: "JM", name: "Jamaica" },
  { code: "JO", name: "Jordan" },
  { code: "JP", name: "Japan" },
  { code: "KE", name: "Kenya" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "KH", name: "Cambodia" },
  { code: "KI", name: "Kiribati" },
  { code: "KM", name: "Comoros" },
  { code: "KN", name: "Saint Kitts and Nevis" },
  { code: "KP", name: "Korea, Democratic People's Republic of" },
  { code: "KR", name: "Korea, Republic of" },
  { code: "KW", name: "Kuwait" },
  { code: "KY", name: "Cayman Islands" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "LA", name: "Lao People's Democratic Republic" },
  { code: "LB", name: "Lebanon" },
  { code: "LC", name: "Saint Lucia" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LK", name: "Sri Lanka" },
  { code: "LR", name: "Liberia" },
  { code: "LS", name: "Lesotho" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "LV", name: "Latvia" },
  { code: "LY", name: "Libya" },
  { code: "MA", name: "Morocco" },
  { code: "MC", name: "Monaco" },
  { code: "MD", name: "Moldova, Republic of" },
  { code: "ME", name: "Montenegro" },
  { code: "MF", name: "Saint Martin, (French part)" },
  { code: "MG", name: "Madagascar" },
  { code: "MH", name: "Marshall Islands" },
  { code: "MK", name: "North Macedonia" },
  { code: "ML", name: "Mali" },
  { code: "MM", name: "Myanmar" },
  { code: "MN", name: "Mongolia" },
  { code: "MO", name: "Macao" },
  { code: "MP", name: "Northern Mariana Islands" },
  { code: "MQ", name: "Martinique" },
  { code: "MR", name: "Mauritania" },
  { code: "MS", name: "Montserrat" },
  { code: "MT", name: "Malta" },
  { code: "MU", name: "Mauritius" },
  { code: "MV", name: "Maldives" },
  { code: "MW", name: "Malawi" },
  { code: "MX", name: "Mexico" },
  { code: "MY", name: "Malaysia" },
  { code: "MZ", name: "Mozambique" },
  { code: "NA", name: "Namibia" },
  { code: "NC", name: "New Caledonia" },
  { code: "NE", name: "Niger" },
  { code: "NF", name: "Norfolk Island" },
  { code: "NG", name: "Nigeria" },
  { code: "NI", name: "Nicaragua" },
  { code: "NL", name: "Netherlands" },
  { code: "NO", name: "Norway" },
  { code: "NP", name: "Nepal" },
  { code: "NR", name: "Nauru" },
  { code: "NU", name: "Niue" },
  { code: "NZ", name: "New Zealand" },
  { code: "OM", name: "Oman" },
  { code: "PA", name: "Panama" },
  { code: "PE", name: "Peru" },
  { code: "PF", name: "French Polynesia" },
  { code: "PG", name: "Papua New Guinea" },
  { code: "PH", name: "Philippines" },
  { code: "PK", name: "Pakistan" },
  { code: "PL", name: "Poland" },
  { code: "PM", name: "Saint Pierre and Miquelon" },
  { code: "PN", name: "Pitcairn" },
  { code: "PR", name: "Puerto Rico" },
  { code: "PS", name: "Palestine, State of" },
  { code: "PT", name: "Portugal" },
  { code: "PW", name: "Palau" },
  { code: "PY", name: "Paraguay" },
  { code: "QA", name: "Qatar" },
  { code: "RE", name: "Réunion" },
  { code: "RO", name: "Romania" },
  { code: "RS", name: "Serbia" },
  { code: "RU", name: "Russian Federation" },
  { code: "RW", name: "Rwanda" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SB", name: "Solomon Islands" },
  { code: "SC", name: "Seychelles" },
  { code: "SD", name: "Sudan" },
  { code: "SE", name: "Sweden" },
  { code: "SG", name: "Singapore" },
  { code: "SH", name: "Saint Helena, Ascension and Tristan da Cunha" },
  { code: "SI", name: "Slovenia" },
  { code: "SJ", name: "Svalbard and Jan Mayen" },
  { code: "SK", name: "Slovakia" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SM", name: "San Marino" },
  { code: "SN", name: "Senegal" },
  { code: "SO", name: "Somalia" },
  { code: "SR", name: "Suriname" },
  { code: "SS", name: "South Sudan" },
  { code: "ST", name: "Sao Tome and Principe" },
  { code: "SV", name: "El Salvador" },
  { code: "SX", name: "Sint Maarten, (Dutch part)" },
  { code: "SY", name: "Syrian Arab Republic" },
  { code: "SZ", name: "Eswatini" },
  { code: "TC", name: "Turks and Caicos Islands" },
  { code: "TD", name: "Chad" },
  { code: "TF", name: "French Southern Territories" },
  { code: "TG", name: "Togo" },
  { code: "TH", name: "Thailand" },
  { code: "TJ", name: "Tajikistan" },
  { code: "TK", name: "Tokelau" },
  { code: "TL", name: "Timor-Leste" },
  { code: "TM", name: "Turkmenistan" },
  { code: "TN", name: "Tunisia" },
  { code: "TO", name: "Tonga" },
  { code: "TR", name: "Turkey" },
  { code: "TT", name: "Trinidad and Tobago" },
  { code: "TV", name: "Tuvalu" },
  { code: "TW", name: "Taiwan, Province of China" },
  { code: "TZ", name: "Tanzania, United Republic of" },
  { code: "UA", name: "Ukraine" },
  { code: "UG", name: "Uganda" },
  { code: "UM", name: "United States Minor Outlying Islands" },
  { code: "US", name: "United States of America" },
  { code: "UY", name: "Uruguay" },
  { code: "UZ", name: "Uzbekistan" },
  { code: "VA", name: "Holy See" },
  { code: "VC", name: "Saint Vincent and the Grenadines" },
  { code: "VE", name: "Venezuela, Bolivarian Republic of" },
  { code: "VG", name: "Virgin Islands, British" },
  { code: "VI", name: "Virgin Islands, U.S." },
  { code: "VN", name: "Viet Nam" },
  { code: "VU", name: "Vanuatu" },
  { code: "WF", name: "Wallis and Futuna" },
  { code: "WS", name: "Samoa" },
  { code: "YE", name: "Yemen" },
  { code: "YT", name: "Mayotte" },
  { code: "ZA", name: "South Africa" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" },
];

//█████████████████████████████████████████████████████████████
//―――――――――――――――― 🦫 Types ――――――――――――――――
//█████████████████████████████████████████████████████████████
export namespace Country {
  /**
   * Backend-defined Europe/EU alpha-2 country codes used by tax/VAT-related flows.
   *
   * Backend helper equivalent: `ISO3166::EuropeCountriesAlpha2`.
   * This list intentionally mirrors backend values instead of independently normalizing EU membership.
   */
  export const EuropeCountriesAlpha2: ICountryCode[] = [
    "AT",
    "BE",
    "BG",
    "HR",
    "DO",
    "DK",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "HU",
    "IS",
    "IT",
    "LV",
    "LT",
    "LU",
    "MT",
    "NL",
    "PL",
    "PT",
    "RO",
    "SK",
    "SI",
    "ES",
    "SE",
    "CY",
  ];

  /**
   * Full backend country record shape from `App\Helper\ISO3166::countries`.
   *
   * Use this type for API/helper payloads that expose ISO metadata beyond the lightweight frontend picker shape.
   */
  export interface ICountryInfo {
    /** English country name. Source: `ISO3166::countries[*].name`. */
    name: string;

    /** Two-letter ISO 3166-1 alpha-2 code. Source: `alpha2`. */
    alpha2: ICountryCode;

    /** Three-letter ISO 3166-1 alpha-3 code. Source: `alpha3`. */
    alpha3: ICountryAlpha3Code;

    /** Three-digit ISO 3166-1 numeric code, stored as a string to preserve leading zeroes. */
    numeric: ICountryNumericCode;

    /** ISO 4217 currencies accepted for the country. Source: `currency`. */
    currency: ICountryCurrencyCode[];

    /** Optional state/province payload. Returned by `ISO3166::GetCountryStates()`. */
    states?: ICountryStates | null;

    /** Optional backend flag for countries that should not require a postal/ZIP code. */
    nozip?: boolean;

    /** Additional backend-maintained country metadata preserved for forward compatibility. */
    [key: string]: unknown;
  }

  /** Nullable result returned by backend helpers such as `GetCountryInfo()` and `GetCountryByAlpha3()`. */
  export type NullableCountryInfo = ICountryInfo | null;
}
