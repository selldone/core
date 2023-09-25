

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
 */export const Calendar:Record<string, ICalendar>= {
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
