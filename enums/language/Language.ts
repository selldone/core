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

import { Calendar } from "./Calendar";

/**
 * Interface representing the structure of a language configuration.
 */
export interface ILanguage {
  /**
   * The ISO language code, typically a 2-letter code (e.g., 'en' for English).
   */
  code: string;

  /**
   * A localized version of the language code.
   * For most languages, this will be the same as `code`.
   */
  locale: string;

  /**
   * The country or region code corresponding to the language (e.g., 'US' for United States).
   */
  flag: string;

  /**
   * The text direction of the language.
   * - 'ltr' stands for left-to-right (like English).
   * - 'rtl' stands for right-to-left (like Arabic).
   */
  dir: "ltr" | "rtl";

  /**
   * The full, human-readable name of the language (e.g., 'English').
   */
  title: string;

  /**
   * The type of calendar used by the language.
   * This is presumed to reference a type within a `Calendar` object.
   */
  calendar: typeof Calendar.gregory;

  /**
   * A fuller, more localized version of the language code combined with a country or region code.
   * This is used for more specific regional settings (e.g., 'en-US' for American English).
   */
  full_locale: string;

  /**
   * A list of country or region codes where this language is primarily spoken or recognized.
   */
  countries: string[];

  /**
   * Optional flag indicating if the language should be prioritized or highlighted
   * in UI elements, e.g., because of being VIP or frequently used.
   */
  vip?: boolean;

  /**
   * Optional flag indicating if the language's translation is done by a human.
   * If `true`, it signifies that the translation is likely of higher quality
   * compared to machine translations.
   */
  human?: boolean;
}

export const Language: Record<string, ILanguage> = {
  // English
  en: {
    code: "en",
    locale: "en",
    flag: "US",
    dir: "ltr",
    title: "English",
    calendar: Calendar.gregory,
    full_locale: "en-US", // Used for calendar
    countries: [
      "AU",
      "BZ",
      "CA",
      "cb",
      "GB",
      "IE",
      "IN",
      "JM",
      "MT",
      "MY",
      "NZ",
      "PH",
      "SG",
      "TT",
      "US",
      "ZA",
      "ZW",
    ],
    vip: true, // Show on local services
    human: true, // Translated by human
  },

  // German
  de: {
    code: "de",
    locale: "de",
    flag: "DE",
    dir: "ltr",
    title: "Deutsch",
    calendar: Calendar.gregory,
    full_locale: "de-DE", // Used for calendar
    countries: ["AT", "CH", "DE", "LI", "LU"],
    vip: true, // Show on local services
  },

  // Danish
  da: {
    code: "da",
    locale: "da",
    flag: "DK",
    dir: "ltr",
    title: "Dansk",
    calendar: Calendar.gregory,
    full_locale: "da-DK", // Used for calendar
    countries: ["DK"],
    vip: true, // Show on local services
  },

  // Swedish
  sv: {
    code: "sv",
    locale: "sv",
    flag: "SE",
    dir: "ltr",
    title: "Svenska",
    calendar: Calendar.gregory,
    full_locale: "sv-SE", // Used for calendar
    countries: ["FI", "SE"],
    vip: true, // Show on local services
  },

  // Persian
  fa: {
    code: "fa",
    locale: "fa",
    flag: "IR",
    dir: "rtl",
    title: "فارسی",
    calendar: Calendar.persian,
    full_locale: "fa-IR", // Used for calendar
    countries: ["IR", "AF"],
    vip: true, // Show on local services
    human: true, // Translated by human
  },

  zh: {
    code: "zh",
    locale: "zh",
    flag: "CN",
    dir: "ltr",
    title: "中文",
    calendar: Calendar.gregory,
    full_locale: "zh-CN", // Used for calendar
    countries: ["CN", "HK", "MO", "SG", "TW"],
    vip: true, // Show on local services
  },

  "zh-tw": {
    code: "zh-tw",
    locale: "zh",
    flag: "TW",
    dir: "ltr",
    title: "中文(台灣)",
    calendar: Calendar.gregory,
    full_locale: "zh-tw", // Used for calendar
    countries: ["TW", "CN", "HK", "MO", "SG"],
  },

  // Spanish
  es: {
    code: "es",
    locale: "es",
    flag: "ES",
    dir: "ltr",
    title: "Español",
    calendar: Calendar.gregory,
    full_locale: "es-ES", // Used for calendar
    countries: [
      "AR",
      "BO",
      "CL",
      "CO",
      "CR",
      "DO",
      "EC",
      "ES",
      "GT",
      "HN",
      "MX",
      "NI",
      "PA",
      "PE",
      "PR",
      "PY",
      "SV",
      "US",
      "UY",
      "VE",
    ],
    vip: true, // Show on local services
  },

  hi: {
    code: "hi",
    locale: "hi",
    flag: "IN",
    dir: "ltr",
    title: "हिंदी",
    calendar: Calendar.gregory,
    full_locale: "hi-IN", // Used for calendar
    countries: ["IN"],
    vip: true, // Show on local services
  },

  // Arabic
  ar: {
    code: "ar",
    locale: "ar",
    flag: "SA",
    dir: "rtl",
    title: "عربي",
    calendar: Calendar.gregory,
    full_locale: "ar-AE", // Used for calendar
    countries: [
      "AE",
      "BH",
      "DZ",
      "EG",
      "IQ",
      "JO",
      "KW",
      "LB",
      "LY",
      "MA",
      "OM",
      "QA",
      "SA",
      "SD",
      "SY",
      "TN",
      "YE",
    ],
    vip: true, // Show on local services
  },

  // French
  fr: {
    code: "fr",
    locale: "fr",
    flag: "FR",
    dir: "ltr",
    title: "français",
    calendar: Calendar.gregory,
    full_locale: "fr-FR", // Used for calendar
    countries: ["BE", "CA", "CH", "FR", "LU", "MC"],
    vip: true, // Show on local services
  },

  // Turkish
  tr: {
    code: "tr",
    locale: "tr",
    flag: "TR",
    dir: "ltr",
    title: "Türk",
    calendar: Calendar.gregory,
    full_locale: "tr-TR", // Used for calendar
    countries: ["TR"],
    vip: true, // Show on local services
  },

  // Portuguese
  pt: {
    code: "pt",
    locale: "pt",
    flag: "PT",
    dir: "ltr",
    title: "português",
    calendar: Calendar.gregory,
    full_locale: "pt-PT", // Used for calendar
    countries: ["BR", "PT"],
    vip: true, // Show on local services
  },

  // Indonesian
  id: {
    code: "id",
    locale: "id",
    flag: "ID",
    dir: "ltr",
    title: "Indonesian",
    calendar: Calendar.gregory,
    full_locale: "id-ID", // Used for calendar
    countries: ["ID"],
    vip: true, // Show on local services
  },
  // Urdu
  ur: {
    code: "ur",
    locale: "ur",
    flag: "PK",
    dir: "rtl",
    title: "اردو",
    calendar: Calendar.gregory,
    full_locale: "ur-PK", // Used for calendar
    countries: ["PK"],
    vip: true, // Show on local services
  },

  // Punjabi
  pa: {
    code: "pa",
    locale: "pa",
    flag: "IN",
    dir: "ltr",
    title: "ਪੰਜਾਬੀਆਂ",
    calendar: Calendar.gregory,
    full_locale: "pa-IN", // Used for calendar
    countries: ["IN"],
    vip: true, // Show on local services
  },

  // Japanese
  ja: {
    code: "ja",
    locale: "ja",
    flag: "JP",
    dir: "ltr",
    title: "日本",
    calendar: Calendar.gregory,
    full_locale: "ja-JP", // Used for calendar
    countries: ["JP"],
    vip: true, // Show on local services
  },

  // Russian
  ru: {
    code: "ru",
    locale: "ru",
    flag: "RU",
    dir: "ltr",
    title: "Pусский",
    calendar: Calendar.gregory,
    full_locale: "ru-RU", // Used for calendar
    countries: ["RU"],
    vip: true, // Show on local services
  },

  // Bengali
  bn: {
    code: "bn",
    locale: "bn",
    flag: "BD",
    dir: "ltr",
    title: "বাংলা",
    calendar: Calendar.gregory,
    full_locale: "bn-BD", // Used for calendar
    countries: ["BD", "IN"],
    vip: true, // Show on local services
  },

  //--------------------------------------------------------

  // Afrikaans
  af: {
    code: "af",
    locale: "af",
    flag: "ZA",
    dir: "ltr",
    title: "Afrikaans",
    calendar: Calendar.gregory,
    full_locale: "af-ZA", // Used for calendar
    countries: ["ZA"],
  },

  // Albanian
  sq: {
    code: "sq",
    locale: "sq",
    flag: "AL",
    dir: "ltr",
    title: "Shqip",
    calendar: Calendar.gregory,
    full_locale: "sq-AL", // Used for calendar
    countries: ["AL"],
  },

  // Azerbaijani
  az: {
    code: "az",
    locale: "az",
    flag: "AZ",
    dir: "rtl",
    title: "Azərbaycanca",
    calendar: Calendar.gregory,
    full_locale: "az-AZ", // Used for calendar
    countries: ["AZ"],
  },

  // Amharic
  am: {
    code: "am",
    locale: "am",
    flag: "ET",
    dir: "ltr",
    title: "አማርኛ ",
    calendar: Calendar.gregory,
    full_locale: "am-ET", // Used for calendar
    countries: ["ET"],
  },

  // Armenian
  hy: {
    code: "hy",
    locale: "hy",
    flag: "AM",
    dir: "ltr",
    title: "Հայերեն",
    calendar: Calendar.gregory,
    full_locale: "hy-AM", // Used for calendar
    countries: ["AM"],
  },

  // Belarusian
  be: {
    code: "be",
    locale: "be",
    flag: "BY",
    dir: "ltr",
    title: "Беларуская",
    calendar: Calendar.gregory,
    full_locale: "be-BY", // Used for calendar
    countries: ["BY"],
  },

  // Basque
  eu: {
    code: "eu",
    locale: "eu",
    flag: "ES",
    dir: "ltr",
    title: "Euskara",
    calendar: Calendar.gregory,
    full_locale: "eu-ES", // Used for calendar
    countries: ["ES"],
  },

  // Bulgarian
  bg: {
    code: "bg",
    locale: "bg",
    flag: "BG",
    dir: "ltr",
    title: "Български",
    calendar: Calendar.gregory,
    full_locale: "bg-BG", // Used for calendar
    countries: ["BG"],
  },

  // Bosnian
  bs: {
    code: "bs",
    locale: "bs",
    flag: "BA",
    dir: "ltr",
    title: "Bosanski",
    calendar: Calendar.gregory,
    full_locale: "bs-BA", // Used for calendar
    countries: ["BA"],
  },

  // Corsican
  co: {
    code: "co",
    locale: "co",
    flag: "FR",
    dir: "ltr",
    title: "Corsu",
    calendar: Calendar.gregory,
    full_locale: "co-FR", // Used for calendar
    countries: ["FR"],
  },

  // Catalan
  ca: {
    code: "ca",
    locale: "ca",
    flag: "AD",
    dir: "ltr",
    title: "Català",
    calendar: Calendar.gregory,
    full_locale: "ca-AD", // Used for calendar
    countries: ["AD", "ES"],
  },

  // Croatian
  hr: {
    code: "hr",
    locale: "hr",
    flag: "HR",
    dir: "ltr",
    title: "Hrvatski",
    calendar: Calendar.gregory,
    full_locale: "hr-HR", // Used for calendar
    countries: ["HR", "BA"],
  },

  // Czech
  cs: {
    code: "cs",
    locale: "cs",
    flag: "CZ",
    dir: "ltr",
    title: "Česky",
    calendar: Calendar.gregory,
    full_locale: "cs-CZ", // Used for calendar
    countries: ["CZ"],
  },

  // Dutch
  nl: {
    code: "nl",
    locale: "nl",
    flag: "BE",
    dir: "ltr",
    title: "Nederlands",
    calendar: Calendar.gregory,
    full_locale: "nl-BE", // Used for calendar
    countries: ["BE", "NL"],
  },

  // Estonian
  et: {
    code: "et",
    locale: "et",
    flag: "EE",
    dir: "ltr",
    title: "Eesti",
    calendar: Calendar.gregory,
    full_locale: "et-EE", // Used for calendar
    countries: ["EE"],
  },

  // Finnish
  fi: {
    code: "fi",
    locale: "fi",
    flag: "FI",
    dir: "ltr",
    title: "Finnish",
    calendar: Calendar.gregory,
    full_locale: "fi-FI", // Used for calendar
    countries: ["FI"],
  },

  // Frisian
  fy: {
    code: "fy",
    locale: "fy",
    flag: "NL",
    dir: "ltr",
    title: "Frysk",
    calendar: Calendar.gregory,
    full_locale: "fy-NL", // Used for calendar
    countries: ["NL"],
  },

  // Galician
  gl: {
    code: "gl",
    locale: "gl",
    flag: "ES",
    dir: "ltr",
    title: "Galego",
    calendar: Calendar.gregory,
    full_locale: "gl-ES", // Used for calendar
    countries: ["ES"],
  },

  // Georgian
  ka: {
    code: "ka",
    locale: "ka",
    flag: "GE",
    dir: "ltr",
    title: "ქართული",
    calendar: Calendar.gregory,
    full_locale: "ka-GE", // Used for calendar
    countries: ["GE"],
  },
  // Greek
  el: {
    code: "el",
    locale: "el",
    flag: "CY",
    dir: "ltr",
    title: "Ελληνικά",
    calendar: Calendar.gregory,
    full_locale: "el-CY", // Used for calendar
    countries: ["CY", "GR"],
  },
  // Gujarati
  gu: {
    code: "gu",
    locale: "gu",
    flag: "IN",
    dir: "ltr",
    title: "ગુજરાતી",
    calendar: Calendar.gregory,
    full_locale: "gu-IN", // Used for calendar
    countries: ["IN"],
  },
  // Haitian Creole
  ht: {
    code: "ht",
    locale: "ht",
    flag: "HT",
    dir: "ltr",
    title: "Krèyol ayisyen",
    calendar: Calendar.gregory,
    full_locale: "ht-HT", // Used for calendar
    countries: ["HT"],
  },

  // Hausa
  ha: {
    code: "ha",
    locale: "ha",
    flag: "NG",
    dir: "rtl",
    title: "هَوُسَ",
    calendar: Calendar.gregory,
    full_locale: "ha-NG", // Used for calendar
    countries: ["NG"],
  },

  // Hebrew
  he: {
    code: "he",
    locale: "he",
    flag: "IL",
    dir: "rtl",
    title: "עברית",
    calendar: Calendar.gregory,
    full_locale: "he-IL", // Used for calendar
    countries: ["IL"],
  },

  // Hungarian
  hu: {
    code: "hu",
    locale: "hu",
    flag: "HU",
    dir: "ltr",
    title: "Magyar",
    calendar: Calendar.gregory,
    full_locale: "hu-HU", // Used for calendar
    countries: ["HU"],
  },

  // Icelandic
  is: {
    code: "is",
    locale: "is",
    flag: "IS",
    dir: "ltr",
    title: "Íslenska",
    calendar: Calendar.gregory,
    full_locale: "is-IS", // Used for calendar
    countries: ["IS"],
  },

  // Igbo
  ig: {
    code: "ig",
    locale: "ig",
    flag: "NG",
    dir: "ltr",
    title: "Igbo",
    calendar: Calendar.gregory,
    full_locale: "ig-NG", // Used for calendar
    countries: ["NG"],
  },

  // Irish
  ga: {
    code: "ga",
    locale: "ga",
    flag: "IE",
    dir: "ltr",
    title: "Gaeilge",
    calendar: Calendar.gregory,
    full_locale: "ga-IE", // Used for calendar
    countries: ["IE"],
  },

  // Italian
  it: {
    code: "it",
    locale: "it",
    flag: "IT",
    dir: "ltr",
    title: "Italiano",
    calendar: Calendar.gregory,
    full_locale: "it-IT", // Used for calendar
    countries: ["IT", "CH"],
  },
  // Javanese
  jv: {
    code: "jv",
    locale: "jv",
    flag: "ID",
    dir: "ltr",
    title: "Basa Jawa",
    calendar: Calendar.gregory,
    full_locale: "jv-ID", // Used for calendar
    countries: ["ID"],
  },

  // Kannada
  kn: {
    code: "kn",
    locale: "kn",
    flag: "IN",
    dir: "ltr",
    title: "ಕನ್ನಡ",
    calendar: Calendar.gregory,
    full_locale: "kn-IN", // Used for calendar
    countries: ["IN"],
  },

  // Kazakh
  kk: {
    code: "kk",
    locale: "kk",
    flag: "KZ",
    dir: "ltr",
    title: "Қазақша",
    calendar: Calendar.gregory,
    full_locale: "kk-KZ", // Used for calendar
    countries: ["KZ"],
  },

  // Khmer
  km: {
    code: "km",
    locale: "km",
    flag: "KH",
    dir: "ltr",
    title: "ភាសាខ្មែរ ",
    calendar: Calendar.gregory,
    full_locale: "km-KH", // Used for calendar
    countries: ["KH"],
  },

  // Kinyarwanda
  rw: {
    code: "rw",
    locale: "rw",
    flag: "RW",
    dir: "ltr",
    title: "Kinyarwandi",
    calendar: Calendar.gregory,
    full_locale: "rw-RW", // Used for calendar
    countries: ["RW"],
  },

  // Korean
  ko: {
    code: "ko",
    locale: "ko",
    flag: "KR",
    dir: "ltr",
    title: "한국어",
    calendar: Calendar.gregory,
    full_locale: "ko-KR", // Used for calendar
    countries: ["KR"],
  },

  // Kurdish
  ku: {
    code: "ku",
    locale: "ku",
    flag: "IQ",
    dir: "rtl",
    title: "Kurdî",
    calendar: Calendar.gregory,
    full_locale: "ku-IQ", // Used for calendar
    countries: ["IQ"],
  },

  // Kyrgyz
  ky: {
    code: "ky",
    locale: "ky",
    flag: "KG",
    dir: "ltr",
    title: "Кыргызча",
    calendar: Calendar.gregory,
    full_locale: "ky-KG", // Used for calendar
    countries: ["KG"],
  },

  // Lao
  lo: {
    code: "lo",
    locale: "lo",
    flag: "LA",
    dir: "ltr",
    title: "ລາວ / Pha xa lao",
    calendar: Calendar.gregory,
    full_locale: "lo-LA", // Used for calendar
    countries: ["LA"],
  },

  // Latvian
  lv: {
    code: "lv",
    locale: "lv",
    flag: "LV",
    dir: "ltr",
    title: "Latviešu",
    calendar: Calendar.gregory,
    full_locale: "lv-LV", // Used for calendar
    countries: ["LV"],
  },
  // Lithuanian
  lt: {
    code: "lt",
    locale: "lt",
    flag: "LT",
    dir: "ltr",
    title: "Lietuvių",
    calendar: Calendar.gregory,
    full_locale: "lt-LT", // Used for calendar
    countries: ["LT"],
  },
  // Luxembourgish
  lb: {
    code: "lb",
    locale: "lb",
    flag: "LU",
    dir: "ltr",
    title: "Lëtzebuergesch",
    calendar: Calendar.gregory,
    full_locale: "lb-LU", // Used for calendar
    countries: ["LU"],
  },
  // Macedonian
  mk: {
    code: "mk",
    locale: "mk",
    flag: "MK",
    dir: "ltr",
    title: "Македонски",
    calendar: Calendar.gregory,
    full_locale: "mk-MK", // Used for calendar
    countries: ["MK"],
  },
  // Malagasy
  mg: {
    code: "mg",
    locale: "mg",
    flag: "MG",
    dir: "ltr",
    title: "Malagasy",
    calendar: Calendar.gregory,
    full_locale: "mg-MG", // Used for calendar
    countries: ["MG"],
  },
  // Malay
  ms: {
    code: "ms",
    locale: "ms",
    flag: "MY",
    dir: "ltr",
    title: "Bahasa Melayu",
    calendar: Calendar.gregory,
    full_locale: "ms-MY", // Used for calendar
    countries: ["MY", "BN"],
  },

  // Malayalam
  ml: {
    code: "ml",
    locale: "ml",
    flag: "IN",
    dir: "ltr",
    title: "മലയാളം",
    calendar: Calendar.gregory,
    full_locale: "ml-IN", // Used for calendar
    countries: ["IN"],
  },

  // Maltese
  mt: {
    code: "mt",
    locale: "mt",
    flag: "MT",
    dir: "ltr",
    title: "bil-Malti",
    calendar: Calendar.gregory,
    full_locale: "mt-MT", // Used for calendar
    countries: ["MT"],
  },

  // Maori
  mi: {
    code: "mi",
    locale: "mi",
    flag: "NZ",
    dir: "ltr",
    title: "Māori",
    calendar: Calendar.gregory,
    full_locale: "mi-NZ", // Used for calendar
    countries: ["NZ"],
  },

  // Marathi
  mr: {
    code: "mr",
    locale: "mr",
    flag: "IN",
    dir: "ltr",
    title: "मराठी",
    calendar: Calendar.gregory,
    full_locale: "mr-IN", // Used for calendar
    countries: ["IN"],
  },

  // Mongolian
  mn: {
    code: "mn",
    locale: "mn",
    flag: "MN",
    dir: "ltr",
    title: "Монгол",
    calendar: Calendar.gregory,
    full_locale: "mn-MN", // Used for calendar
    countries: ["MN"],
  },
  // Myanmar
  my: {
    code: "my",
    locale: "my",
    flag: "MM",
    dir: "ltr",
    title: "Myanmasa",
    calendar: Calendar.gregory,
    full_locale: "my-MM", // Used for calendar
    countries: ["MM"],
  },

  // Nepali
  ne: {
    code: "ne",
    locale: "ne",
    flag: "NP",
    dir: "ltr",
    title: "नेपाली",
    calendar: Calendar.gregory,
    full_locale: "ne-NP", // Used for calendar
    countries: ["NP"],
  },
  // Norwegian
  no: {
    code: "no",
    locale: "no",
    flag: "NO",
    dir: "ltr",
    title: "Norsk",
    calendar: Calendar.gregory,
    full_locale: "no-NO", // Used for calendar
    countries: ["NO"],
  },
  // Nyanja
  ny: {
    code: "ny",
    locale: "ny",
    flag: "MW",
    dir: "ltr",
    title: "Chi-Chewa",
    calendar: Calendar.gregory,
    full_locale: "ny-MW", // Used for calendar
    countries: ["MW", "ZM"],
  },
  // Odia / Oriya
  or: {
    code: "or",
    locale: "or",
    flag: "IN",
    dir: "ltr",
    title: "ଓଡ଼ିଆ",
    calendar: Calendar.gregory,
    full_locale: "or-IN", // Used for calendar
    countries: ["IN"],
  },

  // Pashto
  ps: {
    code: "ps",
    locale: "ps",
    flag: "AF",
    dir: "rtl",
    title: "پښتو",
    calendar: Calendar.gregory,
    full_locale: "ps-AF", // Used for calendar
    countries: ["AF"],
  },

  // Polish
  pl: {
    code: "pl",
    locale: "pl",
    flag: "PL",
    dir: "ltr",
    title: "Polski",
    calendar: Calendar.gregory,
    full_locale: "pl-PL", // Used for calendar
    countries: ["PL"],
  },
  // Romanian
  ro: {
    code: "ro",
    locale: "ro",
    flag: "RO",
    dir: "ltr",
    title: "Română",
    calendar: Calendar.gregory,
    full_locale: "ro-RO", // Used for calendar
    countries: ["RO", "MO"],
  },
  // Serbian
  sr: {
    code: "sr",
    locale: "sr",
    flag: "RS",
    dir: "ltr",
    title: "Српски",
    calendar: Calendar.gregory,
    full_locale: "sr-RS", // Used for calendar
    countries: ["BA", "CS", "ME", "RS"],
  },

  // Sesotho
  st: {
    code: "st",
    locale: "st",
    flag: "LS",
    dir: "ltr",
    title: "Sesotho",
    calendar: Calendar.gregory,
    full_locale: "st-LS", // Used for calendar
    countries: ["ZA", "LS", "ZW"],
  },
  // Shona
  sn: {
    code: "sn",
    locale: "sn",
    flag: "ZW",
    dir: "ltr",
    title: "chiShona",
    calendar: Calendar.gregory,
    full_locale: "sn-ZW", // Used for calendar
    countries: ["ZW", "MZ"],
  },
  // Sinhala / Sinhalese
  si: {
    code: "si",
    locale: "si",
    flag: "LK",
    dir: "ltr",
    title: "සිංහල",
    calendar: Calendar.gregory,
    full_locale: "si-LK", // Used for calendar
    countries: ["LK"],
  },
  // Slovak
  sk: {
    code: "sk",
    locale: "sk",
    flag: "SK",
    dir: "ltr",
    title: "Slovenčina",
    calendar: Calendar.gregory,
    full_locale: "sk-SK", // Used for calendar
    countries: ["SK"],
  },
  // Slovenian
  sl: {
    code: "sl",
    locale: "sl",
    flag: "SI",
    dir: "ltr",
    title: "Slovenščina",
    calendar: Calendar.gregory,
    full_locale: "sl-SI", // Used for calendar
    countries: ["SI"],
  },
  // Somali
  so: {
    code: "so",
    locale: "so",
    flag: "SO",
    dir: "ltr",
    title: "Soomaaliga",
    calendar: Calendar.gregory,
    full_locale: "so-SO", // Used for calendar
    countries: ["SO", "ET", "KE"],
  },

  // Sundanese
  su: {
    code: "su",
    locale: "su",
    flag: "IN",
    dir: "ltr",
    title: "Basa Sunda",
    calendar: Calendar.gregory,
    full_locale: "su-IN", // Used for calendar
    countries: ["IN"],
  },

  // Swahili
  sw: {
    code: "sw",
    locale: "sw",
    flag: "KE",
    dir: "ltr",
    title: "Kiswahili",
    calendar: Calendar.gregory,
    full_locale: "sw-KE", // Used for calendar
    countries: ["KE"],
  },
  // Tajik
  tg: {
    code: "tg",
    locale: "tg",
    flag: "TJ",
    dir: "ltr",
    title: "Тоҷикӣ",
    calendar: Calendar.gregory,
    full_locale: "tg-TJ", // Used for calendar
    countries: ["TJ"],
  },
  // Tamil
  ta: {
    code: "ta",
    locale: "ta",
    flag: "IN",
    dir: "ltr",
    title: "தமிழ்",
    calendar: Calendar.gregory,
    full_locale: "ta-IN", // Used for calendar
    countries: ["IN"],
  },
  // Tatar
  tt: {
    code: "tt",
    locale: "tt",
    flag: "RU",
    dir: "ltr",
    title: "Tatarça",
    calendar: Calendar.gregory,
    full_locale: "tt-RU", // Used for calendar
    countries: ["RU"],
  },
  // Telugu
  te: {
    code: "te",
    locale: "te",
    flag: "IN",
    dir: "ltr",
    title: "తెలుగు",
    calendar: Calendar.gregory,
    full_locale: "te-IN", // Used for calendar
    countries: ["IN"],
  },

  // Thai
  th: {
    code: "th",
    locale: "th",
    flag: "TH",
    dir: "ltr",
    title: "ไทย",
    calendar: Calendar.gregory,
    full_locale: "th-TH", // Used for calendar
    countries: ["TH"],
  },
  // Turkmen
  tk: {
    code: "tk",
    locale: "tk",
    flag: "TM",
    dir: "ltr",
    title: "Туркмен",
    calendar: Calendar.gregory,
    full_locale: "tk-TM", // Used for calendar
    countries: ["TM"],
  },
  // Ukrainian
  uk: {
    code: "uk",
    locale: "uk",
    flag: "UA",
    dir: "ltr",
    title: "Українська",
    calendar: Calendar.gregory,
    full_locale: "uk-UA", // Used for calendar
    countries: ["UA"],
  },

  // Uyghur
  ug: {
    code: "ug",
    locale: "ug",
    flag: "CN",
    dir: "ltr",
    title: "Uyƣurqə",
    calendar: Calendar.gregory,
    full_locale: "ug-CN", // Used for calendar
    countries: ["CN"],
  },
  // Uzbek
  uz: {
    code: "uz",
    locale: "uz",
    flag: "UZ",
    dir: "ltr",
    title: "Ўзбек",
    calendar: Calendar.gregory,
    full_locale: "uz-UZ", // Used for calendar
    countries: ["BO", "EC", "PE", "UZ"],
  },
  // Vietnamese
  vi: {
    code: "vi",
    locale: "vi",
    flag: "VN",
    dir: "ltr",
    title: "Tiếng Việt",
    calendar: Calendar.gregory,
    full_locale: "vi-VN", // Used for calendar
    countries: ["VN"],
  },
  // Welsh
  cy: {
    code: "cy",
    locale: "cy",
    flag: "GB",
    dir: "ltr",
    title: "Cymraeg",
    calendar: Calendar.gregory,
    full_locale: "cy-GB", // Used for calendar
    countries: ["GB"],
  },
  // Xhosa
  xh: {
    code: "xh",
    locale: "xh",
    flag: "ZA",
    dir: "ltr",
    title: "isiXhosa",
    calendar: Calendar.gregory,
    full_locale: "xh-ZA", // Used for calendar
    countries: ["ZA"],
  },

  // Yiddish
  yi: {
    code: "yi",
    locale: "yi",
    flag: "RU",
    dir: "rtl",
    title: "ייִדיש ",
    calendar: Calendar.gregory,
    full_locale: "yi-RU", // Used for calendar
    countries: ["RU"],
  },
  // Yoruba
  yo: {
    code: "yo",
    locale: "yo",
    flag: "NG",
    dir: "ltr",
    title: "Yorùbá",
    calendar: Calendar.gregory,
    full_locale: "yo-NG", // Used for calendar
    countries: ["NG"],
  },
  // Zulu
  zu: {
    code: "zu",
    locale: "zu",
    flag: "ZA",
    dir: "ltr",
    title: "isiZulu",
    calendar: Calendar.gregory,
    full_locale: "zu-ZA", // Used for calendar
    countries: ["ZA"],
  },
};
