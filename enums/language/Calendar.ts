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
}

/**
 * Calendar configurations containing details of various calendar types.
 */ export const Calendar: Record<string, ICalendar> = {
  /**
   * Georgian Calendar Configuration
   */
  georgian: {
    /**
     * The system or method used to organize and measure time.
     * For Georgian, it's the Gregorian calendar system.
     */
    calendar: "gregory",

    /**
     * Unique code representing the Georgian calendar.
     */
    code: "georgian",

    /**
     * Human-readable name of the Georgian calendar.
     */
    title: "Georgian",

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
  },

  /**
   * Jalali (Persian) Calendar Configuration
   */
  jalali: {
    /**
     * The system or method used to organize and measure time.
     * For Jalali, it's the Persian calendar system.
     */
    calendar: "persian",

    /**
     * Unique code representing the Jalali (Persian) calendar.
     */
    code: "jalali",

    /**
     * Human-readable name of the Jalali calendar in Persian script.
     */
    title: "جلالی",

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
  },
};
