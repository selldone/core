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

interface ICalendar {
  /**
   * The system or method used to organize and measure time.
   * Support as calendar value in Intl.DateTimeFormat...
   */
  calendar: string;

  /**
   * Unique code representing the calendar.
   */
  code: string;

  /**
   * Human-readable name of the calendar.
   */
  title: string;

  description: string;
  /**
   * Display format for both date and time in the calendar.
   * Suitable for presenting full date-time details.
   */
  displayFormat: string;

  /**
   * Display format for date only in the calendar.
   * Excludes time details.
   */
  displayFormatDateOnly: string;

  /**
   * Represents the first day of the week.
   */
  first_day_of_week: number;

  /**
   * Default Local.
   */
  default_local:string;
}

/**
 * Calendar configurations containing details of various calendar types.
 */ export const Calendar: Record<string, ICalendar> = {
  /**
   * Georgian Calendar Configuration
   */
  gregory: {
    /**
     * The system or method used to organize and measure time.
     * For Georgian, it's the Gregorian calendar system.
     */
    calendar: "gregory",

    /**
     * Unique code representing the Georgian calendar.
     */
    code: "gregory",

    /**
     * Human-readable name of the Georgian calendar.
     */
    title: "Gregory",


    /**
     * A brief description of the Georgian calendar.
     * The Georgian calendar is the modern civil calendar used worldwide,
     * featuring 12 months and 365 or 366 days in a year.
     */
    description: "The Georgian calendar, also known as the Gregorian calendar, is the most widely used civil calendar. It consists of 12 months and features leap years to align with the Earth's revolutions around the Sun.",


    /**
     * Display format for both date and time in the Georgian calendar.
     * Suitable for presenting full date-time details.
     */
    displayFormat: "dddd DD MMMM YYYY HH:mm",

    /**
     * Display format for date only in the Georgian calendar.
     * Excludes time details.
     */
    displayFormatDateOnly: "DD MMMM YYYY",

    /**
     * Represents the first day of the week.
     * 0 indicates Sunday.
     */
    first_day_of_week: 0,

    default_local: "en-US",  // English (United States) is commonly used for Gregorian calendar
  },

  /**
   * Jalali (Persian) Calendar Configuration
   */
  persian: {
    /**
     * The system or method used to organize and measure time.
     * For Jalali, it's the Persian calendar system.
     */
    calendar: "persian",

    /**
     * Unique code representing the Jalali (Persian) calendar.
     */
    code: "persian",

    /**
     * Human-readable name of the Jalali calendar in Persian script.
     */
    title: "جلالی",


    /**
     * A brief description of the Jalali (Persian) calendar.
     * The Jalali calendar is a solar calendar that has been used traditionally in Iran
     * and neighboring regions, with months corresponding to the solar transit of the zodiac.
     */
    description: "The Jalali or Persian calendar is a solar calendar system traditionally used in Iran and other parts of the Middle East. It marks time based on the Earth's movement around the Sun, with years divided into 12 months of varying lengths.",



    /**
     * Display format for both date and time in the Jalali calendar.
     * Suitable for presenting full date-time details.
     */
    displayFormat: "dddd jDD jMMMM jYYYY HH:mm",

    /**
     * Display format for date only in the Jalali calendar.
     * Excludes time details.
     */
    displayFormatDateOnly: "jDD jMMMM jYYYY",

    /**
     * Represents the first day of the week.
     * 6 indicates Saturday.
     */
    first_day_of_week: 6,

    default_local: "fa-IR",  // Persian (Iran) is the primary locale for the Jalali calendar
  },


  // Islamic Calendar Configuration
  islamic: {
    calendar: "islamic-civil",
    code: "islamic",
    title: "Islamic",
    description: "The Islamic calendar is a lunar calendar used by Muslims worldwide for religious purposes. It consists of 12 months based on the moon's phases, with a year totaling 354 or 355 days.",
    displayFormat: "dddd DD MMMM YYYY HH:mm",
    displayFormatDateOnly: "DD MMMM YYYY",
    first_day_of_week: 0,

    default_local: "ar-SA",  // Arabic (Saudi Arabia) is commonly used for Islamic calendar
  },

  // Hebrew Calendar Configuration
  hebrew: {
    calendar: "hebrew",
    code: "hebrew",
    title: "Hebrew",
    description: "The Hebrew calendar is used primarily for Jewish religious observances and features 12 or 13 months. It is a lunisolar calendar, with months based on lunar months and years adjusted to sync with solar years.",
    displayFormat: "dddd DD MMMM YYYY HH:mm",
    displayFormatDateOnly: "DD MMMM YYYY",
    first_day_of_week: 0,
    default_local: "he-IL",  // Hebrew (Israel) is the primary locale for the Hebrew calendar
  },

  // Chinese Calendar Configuration
  chinese: {
    calendar: "chinese",
    code: "chinese",
    title: "Chinese",
    description: "The traditional Chinese calendar is a lunisolar calendar that determines months by lunar phases and years by the solar terms. It's used for traditional festivals and determining auspicious dates.",
    displayFormat: "dddd DD MMMM YYYY HH:mm",
    displayFormatDateOnly: "DD MMMM YYYY",
    first_day_of_week: 0,
    default_local: "zh-CN",  // Chinese (China) is commonly used for the traditional Chinese calendar
  },

  // Buddhist Calendar Configuration
  buddhist: {
    calendar: "buddhist",
    code: "buddhist",
    title: "Buddhist",
    description: "The Buddhist calendar is used in various Southeast Asian countries and is similar to the Hindu calendar. It is primarily a lunar calendar but also incorporates various solar influences.",
    displayFormat: "dddd DD MMMM YYYY HH:mm",
    displayFormatDateOnly: "DD MMMM YYYY",
    first_day_of_week: 0,
    default_local: "th-TH",  // Thai (Thailand) is a primary locale where the Buddhist calendar is used
  },



  // Japanese Calendar Configuration
  japanese: {
    calendar: "japanese",
    code: "japanese",
    title: "Japanese",
    description: "The Japanese calendar is used for official and cultural purposes in Japan and is similar to the Gregorian calendar. Years are often associated with the reign of the current emperor.",
    displayFormat: "GGGG[年]MM[月]DD[日] HH:mm",
    displayFormatDateOnly: "GGGG[年]MM[月]DD[日]",
    first_day_of_week: 0,
    default_local: "ja-JP",  // Japanese (Japan) is the primary locale for the Japanese calendar
  },

  // Ethiopic calendar, Amete Alem (epoch approx. 5493 B.C.E)
  ethioaa: {
    calendar: "ethioaa",
    code: "ethioaa",
    title: "Ethiopic Amete Alem",
    description: "The Ethiopic Amete Alem calendar is an ancient calendar system used in Ethiopia. It has an epoch set around 5493 B.C.E, marking the start of its count. It's similar to the Ethiopian calendar but counts years from a different epoch. The calendar consists of 12 months of 30 days each and an additional month, Pagumē, with 5 or 6 days depending on the year.",
    displayFormat: "dddd, MMMM DD, YYYY A.A.",
    displayFormatDateOnly: "MMMM DD, YYYY A.A.",
    first_day_of_week: 0,
    default_local: "am-ET",  // Amharic (Ethiopia) is commonly used where the Ethiopic Amete Alem calendar is relevant
  },




  // Ethiopic Calendar Configuration
  ethiopic: {
    calendar: "ethiopic",
    code: "ethiopic",
    title: "Ethiopic",
    description: "The Ethiopic calendar, also known as the Ge'ez calendar, is used in Ethiopia and Eritrea. It has 12 months of 30 days each, with an additional 5 or 6 days at the end of the year.",
    displayFormat: "dddd DD MMMM YYYY HH:mm",
    displayFormatDateOnly: "DD MMMM YYYY",
    first_day_of_week: 0,
    default_local: "am-ET",  // Amharic (Ethiopia) is commonly used for the Ethiopic calendar
  },

  // Indian National Calendar Configuration
  indian: {
    calendar: "indian",
    code: "indian",
    title: "Indian",
    description: "The Indian national calendar, also known as the Saka calendar, is used alongside the Gregorian calendar in India. It's a lunisolar calendar with months that correspond to the phases of the moon.",
    displayFormat: "dddd DD MMMM YYYY HH:mm",
    displayFormatDateOnly: "DD MMMM YYYY",
    first_day_of_week: 0,
    default_local: "hi-IN",  // Hindi (India) is commonly used where the Indian national calendar is relevant
  }



};
