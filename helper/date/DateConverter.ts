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

/**
 * Provides internationalized date and time formatting.
 */
import { Calendar } from "../../enums/language/Calendar";
Intl.DateTimeFormat("default", { hour: "numeric", minute: "numeric" });

//---------------- prototypes --------------

/**
 * Extends the Date prototype to add various utility methods.
 */
declare global {
  interface Date {
    printTime(): string;
    printMonth(): string;
    printDayWeek(): string;
    setStart(): Date;
    setEnd(): Date;
    addDays(days: number): Date;
    addHours(hours: number): Date;
    addSeconds(seconds: number): Date;
    diffSeconds(date: Date): number;
    diffMinutes(date: Date): number;
    diffHours(date: Date): number;
    diffDays(date: Date): number;
    isBeforeToday(): boolean;
    isAfterToday(): boolean;

    isSameDay(otherDate: Date): boolean;
    isToday(): boolean;
  }

  interface String {
    convertToLocalDate(): Date | null;
    getFromOtherTimeString(date_end: string): string | null;
  }
}

/**
 * Formats the date object to show the time.
 * Uses the global $language object for localization settings.
 * @returns {string} Formatted time string.
 */
Date.prototype.printTime = function (): string {
  return Intl.DateTimeFormat(window.$language?.full_local, {
    calendar: window.$language?.calendar.calendar,
    hour: "numeric",
    minute: "numeric",
  }).format(this);
};

/**
 * Extends the built-in Date prototype with a custom method `printMonth`.
 * This method returns a string representation of the month of the date object,
 * formatted according to the global `$language` settings.
 *
 * @this {Date} - The date object on which the method is called.
 * @returns {string} - The month name of the date, based on `$language` settings.
 *
 * @example
 * const myDate = new Date(2023, 8, 6); // 6th of September 2023
 * console.log(myDate.printMonth()); // Outputs "September" if `$language.full_local` is set to "en-US".
 */
Date.prototype.printMonth = function (): string {
  return Intl.DateTimeFormat(window.$language?.full_local, {
    calendar: window.$language?.calendar.calendar,
    month: "long",
  }).format(this);
};

/**
 * Extends the native Date prototype to add a method `printDayWeek`.
 *
 * This method returns the full name of the day of the week (e.g., "Monday")
 * formatted according to the globally defined `$language` object.
 *
 * @returns {string} The full name of the day of the week.
 *
 * @example
 * const date = new Date('2023-09-06');
 * console.log(date.printDayWeek());  // Outputs: "Wednesday" if `$language.full_local` is set to "en-US"
 */
Date.prototype.printDayWeek = function (): string {
  return Intl.DateTimeFormat(window.$language?.full_local, {
    calendar: window.$language?.calendar.calendar,
    weekday: "long",
  }).format(this);
};

Date.prototype.setStart = function () {
  this.setHours(0, 0, 0, 0);
  return this;
};
Date.prototype.setEnd = function () {
  this.setHours(23, 59, 59, 0);
  return this;
};
Date.prototype.addDays = function (days) {
  return new Date(this.getTime() + days * 24 * 60 * 60 * 1000);
};
Date.prototype.addHours = function (hours) {
  return new Date(this.getTime() + hours * 60 * 60 * 1000);
};
Date.prototype.addSeconds = function (seconds) {
  return new Date(this.getTime() + seconds * 1000);
};

/**
 * Extends the built-in `Date` object with a `diffSeconds` method.
 *
 * @this {Date} The source date object from which the method is called.
 * @param {Date} date The target date to compare against the source date.
 * @returns {number} The difference between the two dates in seconds.
 */
Date.prototype.diffSeconds = function (date: Date): number {
  // Calculate the difference in milliseconds and then convert it to seconds
  // by dividing it by 1000. The absolute value ensures the result is always positive.
  return Math.floor(Math.abs((this.getTime() - date.getTime()) / 1000));
};

Date.prototype.diffMinutes = function (date) {
  return this.diffSeconds(date) / 60;
};
Date.prototype.diffHours = function (date) {
  return this.diffMinutes(date) / 60;
};
Date.prototype.diffDays = function (date) {
  return this.diffHours(date) / 24;
};

Date.prototype.isBeforeToday = function () {
  const today = new Date();
  return this.getTime() < today.getTime();
};
Date.prototype.isAfterToday = function () {
  const today = new Date();
  return this.getTime() > today.getTime();
};

Date.prototype.isSameDay = function (otherDate) {
  if (!(otherDate instanceof Date)) {
    return false;
  }
  return (
    this.getFullYear() === otherDate.getFullYear() &&
    this.getMonth() === otherDate.getMonth() &&
    this.getDate() === otherDate.getDate()
  );
};
Date.prototype.isToday = function () {
  return DateConverter.isToday(this);
};

String.prototype.convertToLocalDate = function () {
  return DateConverter.convertToLocalTime(this as string);
};
String.prototype.getFromOtherTimeString = function (date_end) {
  if (this === date_end) return "-";
  return DateConverter.getFromOtherTimeString(this as string, date_end);
};

export class DateConverter {
  /**
   * Converts a datetime string or an object containing a date string to a local time Date object.
   * If the `keep_only_date` flag is set, it will set the time to the start of the day.
   *
   * @param datetimeStr - A datetime string or an object containing a date string.
   * @param keep_only_date - A flag to determine if only the date should be kept.
   *
   * @returns Date object representing the local time.
   */
  static convertToLocalTime(
    datetimeStr: { date: string } | string | null | undefined,
    keep_only_date: boolean = false
  ): Date | null {
    if (!datetimeStr) return null;

    // Check if the input is an object with a date property (typically from Laravel).
    if (typeof datetimeStr === "object" && datetimeStr.date) {
      datetimeStr = datetimeStr.date;
    }

    const date = new Date(datetimeStr as string);

    if (keep_only_date) {
      date.setHours(0, 0, 0, 0);
    }

    return date;
  }

  /**
   * Converts a timestamp into a short date string format, specifically for charts.
   * The format can be adjusted based on the `small` and `time` parameters.
   *
   * @param timestamp - The timestamp to convert.
   * @param small - Flag to determine if the month should be in short format.
   * @param time - Flag to determine if the time should be included in the format.
   *
   * @returns A formatted date string or "Invalid date!" in case of an error.
   */
  static ConvertTimestampToShortString(
    timestamp: number | Date,
    small: boolean = true,
    time: boolean = false
  ): string {
    if (!timestamp) return "";

    try {
      // Assuming $language is globally available.
      // In a real-world scenario, you might want to import or directly access it.
      const _calendar = window.$language?.calendar
        ? window.$language.calendar
        : Calendar.gregory;
      const options: Intl.DateTimeFormatOptions = small
        ? { calendar: _calendar.calendar, month: "short", day: "numeric" }
        : { calendar: _calendar.calendar, month: "long", day: "numeric" };

      if (time) {
        options.hour = "numeric";
        options.minute = "numeric";
      }
      const date = new Date(timestamp);

      // Use the global $language setting for formatting
      return Intl.DateTimeFormat(window.$language?.full_local, options).format(
        date
      );
    } catch (e) {
      console.error(e);
      return "Invalid date!";
    }
  }

  /**
   * Get local time string in various formats.
   *
   * @param datetimeStr - Input date in either string or Date format.
   * @param added_seconds - Number of seconds to add to the date.
   * @param isShort - Flag to use a short date format.
   * @param isMicro - Flag to use a micro date format.
   * @param noTime - Flag to omit the time.
   *
   * @returns A formatted date string or null in case of an error.
   */
  static GetLocalTimeString(
    datetimeStr: string | Date,
    added_seconds: number = 0,
    isShort: boolean = false,
    isMicro: boolean = false,
    noTime: boolean = false
  ): string | null {
    if (!datetimeStr) return "";

    try {
      const date: Date | null =
        datetimeStr instanceof Date
          ? datetimeStr
          : DateConverter.convertToLocalTime(datetimeStr); // Assuming DateConverter is imported or available in the same file
      if (!date) return "Error";

      date.setSeconds(date.getSeconds() + added_seconds);

      // Assuming $language is globally available.
      const _calendar = window.$language?.calendar
        ? window.$language.calendar
        : Calendar.gregory;

      let options: Intl.DateTimeFormatOptions;

      if (noTime) {
        options = {
          calendar: _calendar.calendar,
          weekday: "long",
          month: "short",
          day: "numeric",
          year: "numeric",
        };
      } else if (isShort) {
        options = {
          calendar: _calendar.calendar,
          month: "short",
          day: "numeric",
          year: "numeric",
        };
      } else if (isMicro) {
        options = {
          calendar: _calendar.calendar,
          month: "short",
          day: "numeric",
        };
      } else {
        options = {
          calendar: _calendar.calendar,
          weekday: "long",
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        };
      }

      return Intl.DateTimeFormat(window.$language?.full_local, options).format(
        date
      );
    } catch (e) {
      return null;
    }
  }

  /**
   * Gets a descriptive string indicating the time elapsed since `datetime_start` to now.
   *
   * @param datetime_start - The starting date/time.
   * @param local - Optional locale setting.
   * @param abstract - A flag to determine the string format.
   *
   * @returns A formatted string describing the elapsed time.
   */
  static getFromNowString(
    datetime_start: Date | string,
    local: string | null = null,
    abstract: boolean = false
  ): string | null {
    return this.getFromOtherTimeString(
      datetime_start,
      new Date(),
      local,
      abstract
    );
  }

  /**
   * Calculates the relative time difference between two dates and returns it as a string.
   *
   * @param datetime_start - The start date/time.
   * @param datetime_end - The end date/time.
   * @param local - Optional locale setting, defaults to the global `$language.full_local`.
   * @param abstract - Determines if the returned string should use the "short" or "long" style.
   *
   * @returns A string indicating the relative time difference between `datetime_start` and `datetime_end`.
   */
  static getFromOtherTimeString(
    datetime_start: Date | string,
    datetime_end: Date | string,
    local: string | null = null,
    abstract: boolean = false
  ): string {
    if (!datetime_start) return "";

    const formatter = new Intl.RelativeTimeFormat(
      local || window.$language?.full_local,
      {
        localeMatcher: "best fit",
        numeric: "auto", // change to "always" if you want 1 day ago/from now
        style: abstract ? "short" : "long",
      }
    );

    const DIVISIONS: { amount: number; name: Intl.RelativeTimeFormatUnit }[] = [
      { amount: 60, name: "seconds" },
      { amount: 60, name: "minutes" },
      { amount: 24, name: "hours" },
      { amount: 7, name: "days" },
      { amount: 4.34524, name: "weeks" },
      { amount: 12, name: "months" },
      { amount: 1000000, name: "years" }, // A big number for simplicity
    ];

    const date_start =
      datetime_start instanceof Date
        ? datetime_start
        : new Date(datetime_start);
    const date_end =
      datetime_end instanceof Date ? datetime_end : new Date(datetime_end);

    let duration = (date_start.getTime() - date_end.getTime()) / 1000;

    for (const division of DIVISIONS) {
      if (Math.abs(duration) < division.amount) {
        return formatter.format(Math.round(duration), division.name);
      }
      duration /= division.amount;
    }

    return "Invalid date";
  }

  /**
   * Returns the difference between the current time and a given datetime in the specified dimension.
   *
   * Supported Dimensions:
   * - s: Seconds
   * - m: Minutes
   * - h: Hours
   * - d: Days
   *
   * @param datetimeStr - The given datetime to compare with.
   * @param dim - The dimension to represent the difference in (s/m/h/d).
   *
   * @returns The difference in the specified dimension or null if `datetimeStr` is not provided.
   */
  static getFromNowNumber(
    datetimeStr: string,
    dim: "s" | "m" | "h" | "d"
  ): number | null {
    if (!datetimeStr) return null;

    const DIVISIONS: { [key: string]: number } = {
      s: 1000,
      m: 1000 * 60,
      h: 1000 * 60 * 60,
      d: 1000 * 60 * 60 * 24,
    };

    const div = DIVISIONS[dim] || 1;

    const start = new Date(datetimeStr);
    return Math.round((new Date().getTime() - start.getTime()) / div);
  }
  /**
   * Computes the duration string between two datetime values. The result will be formatted as `d:H:M` or `d:H:M:S` based on the `has_second` flag.
   *
   * Examples:
   * - For a duration of 1 day, 2 hours, 15 minutes, and 30 seconds:
   *   - Without seconds: "1d 2:15"
   *   - With seconds: "1d 2:15:30"
   *
   * @param datetime_start - The starting datetime.
   * @param datetime_end - The ending datetime.
   * @param has_second - Flag to determine whether the resulting string should include seconds.
   *
   * @returns A string representation of the duration between the two datetime values in `d:H:M` or `d:H:M:S` format.
   * If the input datetime are invalid, returns an empty string.
   */
  static getDurationOtherTimeString(
    datetime_start: Date | string,
    datetime_end: Date | string,
    has_second: boolean = false
  ): string {
    if (!datetime_start || !datetime_end) return "";

    const date_start =
      typeof datetime_start === "string"
        ? new Date(datetime_start)
        : datetime_start;
    const date_end =
      typeof datetime_end === "string" ? new Date(datetime_end) : datetime_end;

    const duration_min = Math.floor(
      Math.abs((date_start.getTime() - date_end.getTime()) / 60000)
    );

    const min = duration_min % 60;
    const h = Math.floor(duration_min / 60) % 60;
    const d = Math.floor(duration_min / (60 * 24));

    let out = d ? `${d}d ` : "";

    out += `${h}:${String(min).padStart(2, "0")}`;

    if (has_second) {
      const sec = Math.floor(
        Math.abs((date_start.getTime() - date_end.getTime()) / 1000) % 60
      );
      out += `:${String(sec).padStart(2, "0")}`;
    }

    return out;
  }

  /**
   *
   * @param created_at
   * @returns {boolean}
   */
  static isToday(created_at: Date | string): boolean {
    if (!created_at) return false;
    const date = new Date(created_at);
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  /**
   * Checks if a given date string is within a specified range of days.
   *
   * @param date_string - The date string to check.
   * @param days - The number of days in the range.
   * @param offset - The offset in days from the current date (default is 0).
   * @returns A boolean indicating whether the date is within the specified day range.
   */
  static inDayRange(
    date_string: string | null,
    days: number,
    offset: number = 0
  ): boolean {
    if (!date_string) return false;

    // Convert the date string to a Date object
    const date = new Date(date_string);

    // Calculate the minimum and maximum dates in the range
    const minDate = new Date();
    minDate.setDate(minDate.getDate() - (offset + days) + 1);
    minDate.setHours(0, 0, 0, 0);

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() - offset);
    maxDate.setHours(23, 59, 59, 999);

    // Check if the date is within the range
    if (days === 1 && offset === 0) {
      // Force show today's data (time zone conflict)
      return date >= minDate;
    }

    return date <= maxDate && date >= minDate;
  }

  static inBetweenDates(test: Date, start: Date | null, end: Date | null) {
    if (!test) return false;
    //console.log("*************************************");

    //console.log("1 : test : "+ test);
    if (start && end)
      return (
        test.getTime() <= end.getTime() && test.getTime() > start.getTime()
      );

    //console.log("2 : start: "+ start);
    if (start) return test.getTime() > start.getTime();
    //console.log("3 : end: "+ end);
    if (end) return test.getTime() <= end.getTime();
    //console.log("4");
    return true;
  }

  /**
   * Get start of day before (days) days.
   *
   * @param {int | null} days
   * @param {string | date | null} origin_date
   * @returns {null|Date}
   * @constructor
   */
  static GetStartOfDateBefore(
    days: number,
    origin_date: Date | string | null = null
  ): null | Date {
    if (days === null) return null;

    let target_date;
    if (origin_date && origin_date instanceof Date) {
      target_date = origin_date;
    } else if (origin_date) {
      target_date = new Date(origin_date);
    } else {
      target_date = new Date();
    }

    // Add days:
    const new_date = target_date.addDays(-days);

    // Set start of date:
    new_date.setStart();

    return new_date;
  }

  /**
   * Get end of day before (days) days.
   *
   * @param  {int | null} days
   * @param {string | date | null} origin_date
   * @returns {null|Date}
   * @constructor
   */
  static GetEndOfDateBefore(
    days: number,
    origin_date: Date | string | null = null
  ): null | Date {
    if (days === null) return null;

    let target_date;
    if (origin_date && origin_date instanceof Date) {
      target_date = origin_date;
    } else if (origin_date) {
      target_date = new Date(origin_date);
    } else {
      target_date = new Date();
    }

    // Add days:
    const new_date = target_date.addDays(-days);
    //console.log('new_date 1',new_date)

    // Set end of date:
    new_date.setEnd();
    // console.log('new_date 2',new_date)

    return new_date;
  }

  /**
   * Check two date in same day.
   *
   * @param {Date} d1
   * @param {Date} d2
   * @returns {boolean}
   * @constructor
   */
  static InSameDay(d1: Date, d2: Date): boolean {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  static SecondsToString(duration: number) {
    if (duration / 60 < 120)
      return (
        Math.round(duration / 60) +
        " " +
        (window.$t("global.time.minutes") as string).toLowerCase()
      );
    return (
      Math.round(duration / (60 * 60)) +
      " " +
      (window.$t("global.time.hours") as string).toLowerCase()
    );
  }

  /**
   * Convert date to string for url query builder!
   *
   * @param date
   * @returns {string|*}
   */
  static dateToString(date: Date | string): string | any {
    if (date instanceof Date) return date.toISOString();
    return date;
  }
}
