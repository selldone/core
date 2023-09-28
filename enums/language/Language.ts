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
  local: string;

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
  calendar: typeof Calendar.georgian;

  /**
   * A fuller, more localized version of the language code combined with a country or region code.
   * This is used for more specific regional settings (e.g., 'en-US' for American English).
   */
  full_local: string;

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
    local: "en",
    flag: "US",
    dir: "ltr",
    title: "English",
    calendar: Calendar.georgian,
    full_local: "en-US", // Used for calendar
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
    local: "de",
    flag: "DE",
    dir: "ltr",
    title: "Deutsch",
    calendar: Calendar.georgian,
    full_local: "de-DE", // Used for calendar
    countries: ["AT", "CH", "DE", "LI", "LU"],
    vip: true, // Show on local services
  },

  // Danish
  da: {
    code: "da",
    local: "da",
    flag: "DK",
    dir: "ltr",
    title: "Dansk",
    calendar: Calendar.georgian,
    full_local: "da-DK", // Used for calendar
    countries: ["DK"],
    vip: true, // Show on local services
  },

  // Swedish
  sv: {
    code: "sv",
    local: "sv",
    flag: "SE",
    dir: "ltr",
    title: "Svenska",
    calendar: Calendar.georgian,
    full_local: "sv-SE", // Used for calendar
    countries: ["FI", "SE"],
    vip: true, // Show on local services
  },

  // Persian
  fa: {
    code: "fa",
    local: "fa",
    flag: "IR",
    dir: "rtl",
    title: "فارسی",
    calendar: Calendar.jalali,
    full_local: "fa-IR", // Used for calendar
    countries: ["IR", "AF"],
    vip: true, // Show on local services
    human: true, // Translated by human
  },

  zh: {
    code: "zh",
    local: "zh",
    flag: "CN",
    dir: "ltr",
    title: "中文",
    calendar: Calendar.georgian,
    full_local: "zh-CN", // Used for calendar
    countries: ["CN", "HK", "MO", "SG", "TW"],
    vip: true, // Show on local services
  },

  "zh-tw": {
    code: "zh-tw",
    local: "zh",
    flag: "TW",
    dir: "ltr",
    title: "中文(台灣)",
    calendar: Calendar.georgian,
    full_local: "zh-tw", // Used for calendar
    countries: ["TW", "CN", "HK", "MO", "SG"],
  },

  // Spanish
  es: {
    code: "es",
    local: "es",
    flag: "ES",
    dir: "ltr",
    title: "Español",
    calendar: Calendar.georgian,
    full_local: "es-ES", // Used for calendar
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
    local: "hi",
    flag: "IN",
    dir: "ltr",
    title: "हिंदी",
    calendar: Calendar.georgian,
    full_local: "hi-IN", // Used for calendar
    countries: ["IN"],
    vip: true, // Show on local services
  },

  // Arabic
  ar: {
    code: "ar",
    local: "ar",
    flag: "SA",
    dir: "rtl",
    title: "عربي",
    calendar: Calendar.georgian,
    full_local: "ar-AE", // Used for calendar
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
    local: "fr",
    flag: "FR",
    dir: "ltr",
    title: "français",
    calendar: Calendar.georgian,
    full_local: "fr-FR", // Used for calendar
    countries: ["BE", "CA", "CH", "FR", "LU", "MC"],
    vip: true, // Show on local services
  },

  // Turkish
  tr: {
    code: "tr",
    local: "tr",
    flag: "TR",
    dir: "ltr",
    title: "Türk",
    calendar: Calendar.georgian,
    full_local: "tr-TR", // Used for calendar
    countries: ["TR"],
    vip: true, // Show on local services
  },

  // Portuguese
  pt: {
    code: "pt",
    local: "pt",
    flag: "PT",
    dir: "ltr",
    title: "português",
    calendar: Calendar.georgian,
    full_local: "pt-PT", // Used for calendar
    countries: ["BR", "PT"],
    vip: true, // Show on local services
  },

  // Indonesian
  id: {
    code: "id",
    local: "id",
    flag: "ID",
    dir: "ltr",
    title: "Indonesian",
    calendar: Calendar.georgian,
    full_local: "id-ID", // Used for calendar
    countries: ["ID"],
    vip: true, // Show on local services
  },
  // Urdu
  ur: {
    code: "ur",
    local: "ur",
    flag: "PK",
    dir: "rtl",
    title: "اردو",
    calendar: Calendar.georgian,
    full_local: "ur-PK", // Used for calendar
    countries: ["PK"],
    vip: true, // Show on local services
  },

  // Punjabi
  pa: {
    code: "pa",
    local: "pa",
    flag: "IN",
    dir: "ltr",
    title: "ਪੰਜਾਬੀਆਂ",
    calendar: Calendar.georgian,
    full_local: "pa-IN", // Used for calendar
    countries: ["IN"],
    vip: true, // Show on local services
  },

  // Japanese
  ja: {
    code: "ja",
    local: "ja",
    flag: "JP",
    dir: "ltr",
    title: "日本",
    calendar: Calendar.georgian,
    full_local: "ja-JP", // Used for calendar
    countries: ["JP"],
    vip: true, // Show on local services
  },

  // Russian
  ru: {
    code: "ru",
    local: "ru",
    flag: "RU",
    dir: "ltr",
    title: "Pусский",
    calendar: Calendar.georgian,
    full_local: "ru-RU", // Used for calendar
    countries: ["RU"],
    vip: true, // Show on local services
  },

  // Bengali
  bn: {
    code: "bn",
    local: "bn",
    flag: "BD",
    dir: "ltr",
    title: "বাংলা",
    calendar: Calendar.georgian,
    full_local: "bn-BD", // Used for calendar
    countries: ["BD", "IN"],
    vip: true, // Show on local services
  },

  //--------------------------------------------------------

  // Afrikaans
  af: {
    code: "af",
    local: "af",
    flag: "ZA",
    dir: "ltr",
    title: "Afrikaans",
    calendar: Calendar.georgian,
    full_local: "af-ZA", // Used for calendar
    countries: ["ZA"],
  },

  // Albanian
  sq: {
    code: "sq",
    local: "sq",
    flag: "AL",
    dir: "ltr",
    title: "Shqip",
    calendar: Calendar.georgian,
    full_local: "sq-AL", // Used for calendar
    countries: ["AL"],
  },

  // Azerbaijani
  az: {
    code: "az",
    local: "az",
    flag: "AZ",
    dir: "rtl",
    title: "Azərbaycanca",
    calendar: Calendar.georgian,
    full_local: "az-AZ", // Used for calendar
    countries: ["AZ"],
  },

  // Amharic
  am: {
    code: "am",
    local: "am",
    flag: "ET",
    dir: "ltr",
    title: "አማርኛ ",
    calendar: Calendar.georgian,
    full_local: "am-ET", // Used for calendar
    countries: ["ET"],
  },

  // Armenian
  hy: {
    code: "hy",
    local: "hy",
    flag: "AM",
    dir: "ltr",
    title: "Հայերեն",
    calendar: Calendar.georgian,
    full_local: "hy-AM", // Used for calendar
    countries: ["AM"],
  },

  // Belarusian
  be: {
    code: "be",
    local: "be",
    flag: "BY",
    dir: "ltr",
    title: "Беларуская",
    calendar: Calendar.georgian,
    full_local: "be-BY", // Used for calendar
    countries: ["BY"],
  },

  // Basque
  eu: {
    code: "eu",
    local: "eu",
    flag: "ES",
    dir: "ltr",
    title: "Euskara",
    calendar: Calendar.georgian,
    full_local: "eu-ES", // Used for calendar
    countries: ["ES"],
  },

  // Bulgarian
  bg: {
    code: "bg",
    local: "bg",
    flag: "BG",
    dir: "ltr",
    title: "Български",
    calendar: Calendar.georgian,
    full_local: "bg-BG", // Used for calendar
    countries: ["BG"],
  },

  // Bosnian
  bs: {
    code: "bs",
    local: "bs",
    flag: "BA",
    dir: "ltr",
    title: "Bosanski",
    calendar: Calendar.georgian,
    full_local: "bs-BA", // Used for calendar
    countries: ["BA"],
  },

  // Corsican
  co: {
    code: "co",
    local: "co",
    flag: "FR",
    dir: "ltr",
    title: "Corsu",
    calendar: Calendar.georgian,
    full_local: "co-FR", // Used for calendar
    countries: ["FR"],
  },

  // Catalan
  ca: {
    code: "ca",
    local: "ca",
    flag: "AD",
    dir: "ltr",
    title: "Català",
    calendar: Calendar.georgian,
    full_local: "ca-AD", // Used for calendar
    countries: ["AD", "ES"],
  },

  // Croatian
  hr: {
    code: "hr",
    local: "hr",
    flag: "HR",
    dir: "ltr",
    title: "Hrvatski",
    calendar: Calendar.georgian,
    full_local: "hr-HR", // Used for calendar
    countries: ["HR", "BA"],
  },

  // Czech
  cs: {
    code: "cs",
    local: "cs",
    flag: "CZ",
    dir: "ltr",
    title: "Česky",
    calendar: Calendar.georgian,
    full_local: "cs-CZ", // Used for calendar
    countries: ["CZ"],
  },

  // Dutch
  nl: {
    code: "nl",
    local: "nl",
    flag: "BE",
    dir: "ltr",
    title: "Nederlands",
    calendar: Calendar.georgian,
    full_local: "nl-BE", // Used for calendar
    countries: ["BE", "NL"],
  },

  // Estonian
  et: {
    code: "et",
    local: "et",
    flag: "EE",
    dir: "ltr",
    title: "Eesti",
    calendar: Calendar.georgian,
    full_local: "et-EE", // Used for calendar
    countries: ["EE"],
  },

  // Finnish
  fi: {
    code: "fi",
    local: "fi",
    flag: "FI",
    dir: "ltr",
    title: "Finnish",
    calendar: Calendar.georgian,
    full_local: "fi-FI", // Used for calendar
    countries: ["FI"],
  },

  // Frisian
  fy: {
    code: "fy",
    local: "fy",
    flag: "NL",
    dir: "ltr",
    title: "Frysk",
    calendar: Calendar.georgian,
    full_local: "fy-NL", // Used for calendar
    countries: ["NL"],
  },

  // Galician
  gl: {
    code: "gl",
    local: "gl",
    flag: "ES",
    dir: "ltr",
    title: "Galego",
    calendar: Calendar.georgian,
    full_local: "gl-ES", // Used for calendar
    countries: ["ES"],
  },

  // Georgian
  ka: {
    code: "ka",
    local: "ka",
    flag: "GE",
    dir: "ltr",
    title: "ქართული",
    calendar: Calendar.georgian,
    full_local: "ka-GE", // Used for calendar
    countries: ["GE"],
  },
  // Greek
  el: {
    code: "el",
    local: "el",
    flag: "CY",
    dir: "ltr",
    title: "Ελληνικά",
    calendar: Calendar.georgian,
    full_local: "el-CY", // Used for calendar
    countries: ["CY", "GR"],
  },
  // Gujarati
  gu: {
    code: "gu",
    local: "gu",
    flag: "IN",
    dir: "ltr",
    title: "ગુજરાતી",
    calendar: Calendar.georgian,
    full_local: "gu-IN", // Used for calendar
    countries: ["IN"],
  },
  // Haitian Creole
  ht: {
    code: "ht",
    local: "ht",
    flag: "HT",
    dir: "ltr",
    title: "Krèyol ayisyen",
    calendar: Calendar.georgian,
    full_local: "ht-HT", // Used for calendar
    countries: ["HT"],
  },

  // Hausa
  ha: {
    code: "ha",
    local: "ha",
    flag: "NG",
    dir: "rtl",
    title: "هَوُسَ",
    calendar: Calendar.georgian,
    full_local: "ha-NG", // Used for calendar
    countries: ["NG"],
  },

  // Hebrew
  he: {
    code: "he",
    local: "he",
    flag: "IL",
    dir: "rtl",
    title: "עברית",
    calendar: Calendar.georgian,
    full_local: "he-IL", // Used for calendar
    countries: ["IL"],
  },

  // Hungarian
  hu: {
    code: "hu",
    local: "hu",
    flag: "HU",
    dir: "ltr",
    title: "Magyar",
    calendar: Calendar.georgian,
    full_local: "hu-HU", // Used for calendar
    countries: ["HU"],
  },

  // Icelandic
  is: {
    code: "is",
    local: "is",
    flag: "IS",
    dir: "ltr",
    title: "Íslenska",
    calendar: Calendar.georgian,
    full_local: "is-IS", // Used for calendar
    countries: ["IS"],
  },

  // Igbo
  ig: {
    code: "ig",
    local: "ig",
    flag: "NG",
    dir: "ltr",
    title: "Igbo",
    calendar: Calendar.georgian,
    full_local: "ig-NG", // Used for calendar
    countries: ["NG"],
  },

  // Irish
  ga: {
    code: "ga",
    local: "ga",
    flag: "IE",
    dir: "ltr",
    title: "Gaeilge",
    calendar: Calendar.georgian,
    full_local: "ga-IE", // Used for calendar
    countries: ["IE"],
  },

  // Italian
  it: {
    code: "it",
    local: "it",
    flag: "IT",
    dir: "ltr",
    title: "Italiano",
    calendar: Calendar.georgian,
    full_local: "it-IT", // Used for calendar
    countries: ["IT", "CH"],
  },
  // Javanese
  jv: {
    code: "jv",
    local: "jv",
    flag: "ID",
    dir: "ltr",
    title: "Basa Jawa",
    calendar: Calendar.georgian,
    full_local: "jv-ID", // Used for calendar
    countries: ["ID"],
  },

  // Kannada
  kn: {
    code: "kn",
    local: "kn",
    flag: "IN",
    dir: "ltr",
    title: "ಕನ್ನಡ",
    calendar: Calendar.georgian,
    full_local: "kn-IN", // Used for calendar
    countries: ["IN"],
  },

  // Kazakh
  kk: {
    code: "kk",
    local: "kk",
    flag: "KZ",
    dir: "ltr",
    title: "Қазақша",
    calendar: Calendar.georgian,
    full_local: "kk-KZ", // Used for calendar
    countries: ["KZ"],
  },

  // Khmer
  km: {
    code: "km",
    local: "km",
    flag: "KH",
    dir: "ltr",
    title: "ភាសាខ្មែរ ",
    calendar: Calendar.georgian,
    full_local: "km-KH", // Used for calendar
    countries: ["KH"],
  },

  // Kinyarwanda
  rw: {
    code: "rw",
    local: "rw",
    flag: "RW",
    dir: "ltr",
    title: "Kinyarwandi",
    calendar: Calendar.georgian,
    full_local: "rw-RW", // Used for calendar
    countries: ["RW"],
  },

  // Korean
  ko: {
    code: "ko",
    local: "ko",
    flag: "KR",
    dir: "ltr",
    title: "한국어",
    calendar: Calendar.georgian,
    full_local: "ko-KR", // Used for calendar
    countries: ["KR"],
  },

  // Kurdish
  ku: {
    code: "ku",
    local: "ku",
    flag: "IQ",
    dir: "rtl",
    title: "Kurdî",
    calendar: Calendar.georgian,
    full_local: "ku-IQ", // Used for calendar
    countries: ["IQ"],
  },

  // Kyrgyz
  ky: {
    code: "ky",
    local: "ky",
    flag: "KG",
    dir: "ltr",
    title: "Кыргызча",
    calendar: Calendar.georgian,
    full_local: "ky-KG", // Used for calendar
    countries: ["KG"],
  },

  // Lao
  lo: {
    code: "lo",
    local: "lo",
    flag: "LA",
    dir: "ltr",
    title: "ລາວ / Pha xa lao",
    calendar: Calendar.georgian,
    full_local: "lo-LA", // Used for calendar
    countries: ["LA"],
  },

  // Latvian
  lv: {
    code: "lv",
    local: "lv",
    flag: "LV",
    dir: "ltr",
    title: "Latviešu",
    calendar: Calendar.georgian,
    full_local: "lv-LV", // Used for calendar
    countries: ["LV"],
  },
  // Lithuanian
  lt: {
    code: "lt",
    local: "lt",
    flag: "LT",
    dir: "ltr",
    title: "Lietuvių",
    calendar: Calendar.georgian,
    full_local: "lt-LT", // Used for calendar
    countries: ["LT"],
  },
  // Luxembourgish
  lb: {
    code: "lb",
    local: "lb",
    flag: "LU",
    dir: "ltr",
    title: "Lëtzebuergesch",
    calendar: Calendar.georgian,
    full_local: "lb-LU", // Used for calendar
    countries: ["LU"],
  },
  // Macedonian
  mk: {
    code: "mk",
    local: "mk",
    flag: "MK",
    dir: "ltr",
    title: "Македонски",
    calendar: Calendar.georgian,
    full_local: "mk-MK", // Used for calendar
    countries: ["MK"],
  },
  // Malagasy
  mg: {
    code: "mg",
    local: "mg",
    flag: "MG",
    dir: "ltr",
    title: "Malagasy",
    calendar: Calendar.georgian,
    full_local: "mg-MG", // Used for calendar
    countries: ["MG"],
  },
  // Malay
  ms: {
    code: "ms",
    local: "ms",
    flag: "MY",
    dir: "ltr",
    title: "Bahasa Melayu",
    calendar: Calendar.georgian,
    full_local: "ms-MY", // Used for calendar
    countries: ["MY", "BN"],
  },

  // Malayalam
  ml: {
    code: "ml",
    local: "ml",
    flag: "IN",
    dir: "ltr",
    title: "മലയാളം",
    calendar: Calendar.georgian,
    full_local: "ml-IN", // Used for calendar
    countries: ["IN"],
  },

  // Maltese
  mt: {
    code: "mt",
    local: "mt",
    flag: "MT",
    dir: "ltr",
    title: "bil-Malti",
    calendar: Calendar.georgian,
    full_local: "mt-MT", // Used for calendar
    countries: ["MT"],
  },

  // Maori
  mi: {
    code: "mi",
    local: "mi",
    flag: "NZ",
    dir: "ltr",
    title: "Māori",
    calendar: Calendar.georgian,
    full_local: "mi-NZ", // Used for calendar
    countries: ["NZ"],
  },

  // Marathi
  mr: {
    code: "mr",
    local: "mr",
    flag: "IN",
    dir: "ltr",
    title: "मराठी",
    calendar: Calendar.georgian,
    full_local: "mr-IN", // Used for calendar
    countries: ["IN"],
  },

  // Mongolian
  mn: {
    code: "mn",
    local: "mn",
    flag: "MN",
    dir: "ltr",
    title: "Монгол",
    calendar: Calendar.georgian,
    full_local: "mn-MN", // Used for calendar
    countries: ["MN"],
  },
  // Myanmar
  my: {
    code: "my",
    local: "my",
    flag: "MM",
    dir: "ltr",
    title: "Myanmasa",
    calendar: Calendar.georgian,
    full_local: "my-MM", // Used for calendar
    countries: ["MM"],
  },

  // Nepali
  ne: {
    code: "ne",
    local: "ne",
    flag: "NP",
    dir: "ltr",
    title: "नेपाली",
    calendar: Calendar.georgian,
    full_local: "ne-NP", // Used for calendar
    countries: ["NP"],
  },
  // Norwegian
  no: {
    code: "no",
    local: "no",
    flag: "NO",
    dir: "ltr",
    title: "Norsk",
    calendar: Calendar.georgian,
    full_local: "no-NO", // Used for calendar
    countries: ["NO"],
  },
  // Nyanja
  ny: {
    code: "ny",
    local: "ny",
    flag: "MW",
    dir: "ltr",
    title: "Chi-Chewa",
    calendar: Calendar.georgian,
    full_local: "ny-MW", // Used for calendar
    countries: ["MW", "ZM"],
  },
  // Odia / Oriya
  or: {
    code: "or",
    local: "or",
    flag: "IN",
    dir: "ltr",
    title: "ଓଡ଼ିଆ",
    calendar: Calendar.georgian,
    full_local: "or-IN", // Used for calendar
    countries: ["IN"],
  },

  // Pashto
  ps: {
    code: "ps",
    local: "ps",
    flag: "AF",
    dir: "rtl",
    title: "پښتو",
    calendar: Calendar.georgian,
    full_local: "ps-AF", // Used for calendar
    countries: ["AF"],
  },

  // Polish
  pl: {
    code: "pl",
    local: "pl",
    flag: "PL",
    dir: "ltr",
    title: "Polski",
    calendar: Calendar.georgian,
    full_local: "pl-PL", // Used for calendar
    countries: ["PL"],
  },
  // Romanian
  ro: {
    code: "ro",
    local: "ro",
    flag: "RO",
    dir: "ltr",
    title: "Română",
    calendar: Calendar.georgian,
    full_local: "ro-RO", // Used for calendar
    countries: ["RO", "MO"],
  },
  // Serbian
  sr: {
    code: "sr",
    local: "sr",
    flag: "RS",
    dir: "ltr",
    title: "Српски",
    calendar: Calendar.georgian,
    full_local: "sr-RS", // Used for calendar
    countries: ["BA", "CS", "ME", "RS"],
  },

  // Sesotho
  st: {
    code: "st",
    local: "st",
    flag: "LS",
    dir: "ltr",
    title: "Sesotho",
    calendar: Calendar.georgian,
    full_local: "st-LS", // Used for calendar
    countries: ["ZA", "LS", "ZW"],
  },
  // Shona
  sn: {
    code: "sn",
    local: "sn",
    flag: "ZW",
    dir: "ltr",
    title: "chiShona",
    calendar: Calendar.georgian,
    full_local: "sn-ZW", // Used for calendar
    countries: ["ZW", "MZ"],
  },
  // Sinhala / Sinhalese
  si: {
    code: "si",
    local: "si",
    flag: "LK",
    dir: "ltr",
    title: "සිංහල",
    calendar: Calendar.georgian,
    full_local: "si-LK", // Used for calendar
    countries: ["LK"],
  },
  // Slovak
  sk: {
    code: "sk",
    local: "sk",
    flag: "SK",
    dir: "ltr",
    title: "Slovenčina",
    calendar: Calendar.georgian,
    full_local: "sk-SK", // Used for calendar
    countries: ["SK"],
  },
  // Slovenian
  sl: {
    code: "sl",
    local: "sl",
    flag: "SI",
    dir: "ltr",
    title: "Slovenščina",
    calendar: Calendar.georgian,
    full_local: "sl-SI", // Used for calendar
    countries: ["SI"],
  },
  // Somali
  so: {
    code: "so",
    local: "so",
    flag: "SO",
    dir: "ltr",
    title: "Soomaaliga",
    calendar: Calendar.georgian,
    full_local: "so-SO", // Used for calendar
    countries: ["SO", "ET", "KE"],
  },

  // Sundanese
  su: {
    code: "su",
    local: "su",
    flag: "IN",
    dir: "ltr",
    title: "Basa Sunda",
    calendar: Calendar.georgian,
    full_local: "su-IN", // Used for calendar
    countries: ["IN"],
  },

  // Swahili
  sw: {
    code: "sw",
    local: "sw",
    flag: "KE",
    dir: "ltr",
    title: "Kiswahili",
    calendar: Calendar.georgian,
    full_local: "sw-KE", // Used for calendar
    countries: ["KE"],
  },
  // Tajik
  tg: {
    code: "tg",
    local: "tg",
    flag: "TJ",
    dir: "ltr",
    title: "Тоҷикӣ",
    calendar: Calendar.georgian,
    full_local: "tg-TJ", // Used for calendar
    countries: ["TJ"],
  },
  // Tamil
  ta: {
    code: "ta",
    local: "ta",
    flag: "IN",
    dir: "ltr",
    title: "தமிழ்",
    calendar: Calendar.georgian,
    full_local: "ta-IN", // Used for calendar
    countries: ["IN"],
  },
  // Tatar
  tt: {
    code: "tt",
    local: "tt",
    flag: "RU",
    dir: "ltr",
    title: "Tatarça",
    calendar: Calendar.georgian,
    full_local: "tt-RU", // Used for calendar
    countries: ["RU"],
  },
  // Telugu
  te: {
    code: "te",
    local: "te",
    flag: "IN",
    dir: "ltr",
    title: "తెలుగు",
    calendar: Calendar.georgian,
    full_local: "te-IN", // Used for calendar
    countries: ["IN"],
  },

  // Thai
  th: {
    code: "th",
    local: "th",
    flag: "TH",
    dir: "ltr",
    title: "ไทย",
    calendar: Calendar.georgian,
    full_local: "th-TH", // Used for calendar
    countries: ["TH"],
  },
  // Turkmen
  tk: {
    code: "tk",
    local: "tk",
    flag: "TM",
    dir: "ltr",
    title: "Туркмен",
    calendar: Calendar.georgian,
    full_local: "tk-TM", // Used for calendar
    countries: ["TM"],
  },
  // Ukrainian
  uk: {
    code: "uk",
    local: "uk",
    flag: "UA",
    dir: "ltr",
    title: "Українська",
    calendar: Calendar.georgian,
    full_local: "uk-UA", // Used for calendar
    countries: ["UA"],
  },

  // Uyghur
  ug: {
    code: "ug",
    local: "ug",
    flag: "CN",
    dir: "ltr",
    title: "Uyƣurqə",
    calendar: Calendar.georgian,
    full_local: "ug-CN", // Used for calendar
    countries: ["CN"],
  },
  // Uzbek
  uz: {
    code: "uz",
    local: "uz",
    flag: "UZ",
    dir: "ltr",
    title: "Ўзбек",
    calendar: Calendar.georgian,
    full_local: "uz-UZ", // Used for calendar
    countries: ["BO", "EC", "PE", "UZ"],
  },
  // Vietnamese
  vi: {
    code: "vi",
    local: "vi",
    flag: "VN",
    dir: "ltr",
    title: "Tiếng Việt",
    calendar: Calendar.georgian,
    full_local: "vi-VN", // Used for calendar
    countries: ["VN"],
  },
  // Welsh
  cy: {
    code: "cy",
    local: "cy",
    flag: "GB",
    dir: "ltr",
    title: "Cymraeg",
    calendar: Calendar.georgian,
    full_local: "cy-GB", // Used for calendar
    countries: ["GB"],
  },
  // Xhosa
  xh: {
    code: "xh",
    local: "xh",
    flag: "ZA",
    dir: "ltr",
    title: "isiXhosa",
    calendar: Calendar.georgian,
    full_local: "xh-ZA", // Used for calendar
    countries: ["ZA"],
  },

  // Yiddish
  yi: {
    code: "yi",
    local: "yi",
    flag: "RU",
    dir: "rtl",
    title: "ייִדיש ",
    calendar: Calendar.georgian,
    full_local: "yi-RU", // Used for calendar
    countries: ["RU"],
  },
  // Yoruba
  yo: {
    code: "yo",
    local: "yo",
    flag: "NG",
    dir: "ltr",
    title: "Yorùbá",
    calendar: Calendar.georgian,
    full_local: "yo-NG", // Used for calendar
    countries: ["NG"],
  },
  // Zulu
  zu: {
    code: "zu",
    local: "zu",
    flag: "ZA",
    dir: "ltr",
    title: "isiZulu",
    calendar: Calendar.georgian,
    full_local: "zu-ZA", // Used for calendar
    countries: ["ZA"],
  },
};
