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

import { DateConverter } from "../helper/date/DateConverter";
import ExcelConverter from "../helper/converters/ExcelConverter";
import { Currency } from "../enums/payment/Currency";

export interface IRawData extends Record<string, any> {
  id: number;
  created_at: string;

  finances?: IFinance[];
}
export interface IFinance extends Record<string, any> {
  id: number;
  currency: keyof typeof Currency;
  created_at: string;
  updated_at: string;
}

export class TimeSeries {
  title: string | null;
  _todayData: Record<string, any>;
  _lastDayData: Record<string, any>;
  _yesterdayData: Record<string, any>;
  _lastWeekData: Record<string, any>;
  _previousWeekData: Record<string, any>;
  _lastMonthData: Record<string, any>;

  _todayDataOffset: Record<string, any>;
  _yesterdayDataOffset: Record<string, any>;

  raw_data: IRawData[]; // You can specify a more specific type if needed
  offset: number;
  days: number;

  startDate: Date;
  endDate: Date;

  count: number;

  /**
   *
   * @property Array raw_data
   * @property string title
   * @property int offset
   * @property int days
   *
   * @property Array _todayData
   * @property Array _lastDayData
   * @property Array _yesterdayData
   * @property Array _lastWeekData
   * @property Array _previousWeekData
   * @property Array _lastMonthData
   * @property number count
   *
   * @property Date startDate
   * @property Date endDate
   *
   *
   * @property function fetch     Register fetch callback (Use to refresh by change time span)
   */

  /**
   *
   * @param raw_data
   * @param offset  Optional offset days
   * @param days    Optional length days before offset
   */
  constructor(
    raw_data: IRawData[],
    title: string | null = null,
    offset: number,
    days: number
  ) {
    if(!raw_data)raw_data=[];
    if(!offset)offset=0;
    if(!days)days=0;

    // Prevent duplicated dates:
    const dates: number[] = [];
    const __raw_data: IRawData[] = [];
    raw_data.forEach((it) => {
      if (it.created_at) {
        const date = DateConverter.convertToLocalTime(
          it.created_at,
          true
        )?.getTime();

        if (!date || dates.includes(date)) {
          // Just keep first item! Some bugs create duplicated data for same day! Solve (Maybe): Update statistic by async jobs on the server.
          return;
        }
        dates.push(date);
      }

      __raw_data.push(it);
    });
    raw_data = __raw_data;

    this.title = title;
    this._todayData = {};
    this._lastDayData = {};
    this._yesterdayData = {};
    this._lastWeekData = {};
    this._previousWeekData = {};
    this._lastMonthData = {};

    this._todayDataOffset = {};
    this._yesterdayDataOffset = {};

    this.raw_data = raw_data;
    this.offset = offset;
    this.days = days;

    this.startDate = new Date().addDays(-(offset + days) /*+ 1*/).setStart();
    this.endDate = new Date().addDays(-offset).setEnd();

    //  console.log('Create Time Series','offset',offset,'days',days)

    this.generate_todayData();
    this.generate_lastDayData();
    this.generate_yesterdayData();
    this.generate_lastWeekData();
    this.generate_previousWeekData();
    this.generate_lastMonthData();

    this.generate_todayDataOffset();
    this.generate_yesterdayDataOffset();

    this.count = raw_data.length;
  }
  lastdayData() {
    if (!this.raw_data.length) return null;
    return this.raw_data[this.raw_data.length - 1];
  }
  todayData() {
    return this._todayData;
  }
  lastDayData() {
    return this._lastDayData;
  }
  yesterdayData() {
    return this._yesterdayData;
  }

  lastWeekData() {
    return this._lastWeekData;
  }

  previousWeekData() {
    return this._previousWeekData;
  }

  lastMonthData() {
    return this._lastMonthData;
  }

  todayDataOffset() {
    return this._todayDataOffset;
  }
  yesterdayDataOffset() {
    return this._yesterdayDataOffset;
  }

  /**
   *
   * @param key
   * @param attach_time_absolute
   * @param time_key
   * @returns {Array}
   */
  arrayOf(
    key: string,
    attach_time_absolute: boolean = false,
    time_key: string = "created_at"
  ) {
    const out: [date: number, value: number][] = [];
    if (this.raw_data)
      this.raw_data.forEach((item) => {
        if (attach_time_absolute) {
          const _date = DateConverter.convertToLocalTime(item[time_key], true);
          if (_date) out.push([_date.getTime(), item[key] ? item[key] : 0]);
        } else {
          out.push(item[key] ? item[key] : 0);
        }
      });
    return out;
  }

  /**
   * Absolute quantities' interpolation. Ex. total products!
   * Interpolate value with previous value or zero by offset & days
   * Start date : Now - offset
   * End date:    Now - (offset+days)
   *
   * @param key
   * @param attach_time_absolute
   * @param time_key
   * @returns {[]}
   */
  arrayOfForceInterpolateByLastValue(
    key: string,
    attach_time_absolute: boolean = false,
    time_key: string = "created_at"
  ) {
    const arr = this.arrayOfForceInterpolateZero(
      key,
      false,
      "created_at",
      null
    ) as [date: number, value: number][] | number[];

    if (arr.length === 0) return [];

    const arr_correct = [];

    function findNext(
      arr: [date: number, value: number][] | number[],
      index: number
    ) {
      const f = arr
        .slice(index)
        .find(
          (i) =>
            (attach_time_absolute
              ? (i as [date: number, value: number])[1]
              : i) !== null
        );
      const out = attach_time_absolute
        ? f
          ? (f as [date: number, value: number])[1]
          : null
        : f;

      return out ? out : 0;
    }
    function findPrevious(
      arr: [date: number, value: number][] | number[],
      index: number
    ) {
      const f = arr
        .slice(0, index)
        .reverse()
        .find(
          (i) =>
            (attach_time_absolute
              ? (i as [date: number, value: number])[1]
              : i) !== null
        );
      const out = attach_time_absolute
        ? f
          ? (f as [date: number, value: number])[1]
          : null
        : f;
      return out ? out : 0;
    }

    const value = findNext(arr, 0);
    arr_correct[0] = attach_time_absolute ? [arr[0] /*date*/, value] : value;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === null) {
        const value = findPrevious(arr, i);

        arr_correct[i] = attach_time_absolute
          ? [arr[0] /*date*/, value]
          : value;
      } else {
        arr_correct[i] = arr[i];
      }
    }

    //console.log("arr_correct", arr, arr_correct);
    return arr_correct;
  }

  /**
   * Interpolate value with zero by offset & days
   * Start date : Now - offset
   * End date:    Now - (offset+days)
   *
   * @param  key    Support nested keys ex. finances.charge  , finances.wage
   * @param attach_time_absolute
   * @param time_key
   * @param interpolate_value
   * @returns {[]}
   */
  arrayOfForceInterpolateZero(
    key: string,
    attach_time_absolute: boolean = false,
    time_key: string = "created_at",
    interpolate_value: number | null = 0
  ) {
    return TimeSeries.GenerateArrayOfForceInterpolateZero(
      this.raw_data,
      this.offset,
      this.days,
      key,
      attach_time_absolute,
      time_key,
      interpolate_value
    );
  }

  static GenerateArrayOfForceInterpolateZero(
    raw_data: IRawData[],
    offset: number,
    days: number,

    key: string,
    attach_time_absolute: boolean = false,
    time_key: string = "created_at",
    interpolate_value: number | null = 0
  ) {
    const out: { diff: number; val: number }[] = [];

    let min = offset;
    let max = offset + days;

    raw_data.forEach((item) => {
      const val = item[key];

      const _date = DateConverter.convertToLocalTime(item[time_key], true);
      if (!_date) return;

      const diff = TimeSeries.diffDays(new Date().getTime(), _date.getTime());
      out.push({ diff: diff, val: val ? val : 0 });
      if (min > diff) min = diff;
      if (max < diff) max = diff;
    });

    const interpolated_out: (
      | [date: number, value: number | null]
      | number
      | null
    )[] = [];
    let i = max;
    while (i >= min) {
      const found_val = out.find((item) => item.diff === i);

      // console.log('Time creation:  i=',i,'found_val',found_val)

      if (attach_time_absolute) {
        const date = new Date();
        date.setDate(date.getDate() - i);

        (interpolated_out as [date: number, value: number | null][]).push([
          date.setStart().getTime(),
          found_val ? found_val.val : null,
        ]);
      } else {
        (interpolated_out as (number | null)[]).push(
          found_val ? found_val.val : interpolate_value
        );
      }

      i--;
    }

    return interpolated_out;
  }

  /**
   * Interpolate value with zero by offset & days
   * Start date : Now - offset
   * End date:    Now - (offset+days)
   *
   * @param time_key
   * @returns {[]}
   */
  arrayOfTimeAbsoluteForceInterpolateZero(time_key: string) {
    let min = this.offset;
    let max = this.offset + this.days;

    this.raw_data.forEach((item) => {
      const _date = DateConverter.convertToLocalTime(item[time_key], true);
      if (!_date) return;

      const diff = TimeSeries.diffDays(new Date().getTime(), _date.getTime());
      if (min > diff) min = diff;
      if (max < diff) max = diff;
    });

    const interpolated_out = [];
    let i = max;
    while (i >= min) {
      const date = new Date();
      date.setDate(date.getDate() - i);

      interpolated_out.push(date.setStart().getTime());

      i--;
    }

    return interpolated_out;
  }

  arrayOfInterpolateZero(
    key: string,
    offset: number = 0,
    days: number = 30,
    time_key: string = "created_at",
    interpolate: boolean = true,
    finance_currency: keyof typeof Currency | null = null // Finance mode?
  ) {
    const out: { diff: number; val: number }[] = [];

    let min = offset;
    let max = days - 1;

    this.raw_data.forEach((item) => {
      let val = 0;
      // Calculate for finance and currency:
      if (finance_currency) {
        const found = item.finances?.find(
          (i) => i.currency === finance_currency
        );
        val = found ? found[key] : 0;
      }
      // Normal mode:
      else {
        val = item[key];
      }

      const _date = DateConverter.convertToLocalTime(item[time_key], true);
      if (!_date) return;

      const diff = TimeSeries.diffDays(
        new Date().setStart().getTime(),
        //   new Date(item[time_key]).setStart().getTime()
        _date.getTime()
      );
      out.push({ diff: diff, val: val ? val : 0 });
      if (min > diff) min = diff;
      if (max < diff) max = diff;
    });
    //console.log('min',min,'max',max)
    const interpolated_out = [];
    let i = max;
    while (i >= min) {
      const found_val = out.find((item) => item.diff === i);
      if (interpolate || found_val)
        interpolated_out.push({ diff: i, val: found_val ? found_val.val : 0 });
      i--;
    }

    return interpolated_out;
  }

  arrayOfDiffByPrevious(
    key: string,
    attach_time_absolute: boolean = false,
    time_key: string = "created_at"
  ) {
    const out: [date: number, value: number][] | number[] = [];
    if (this.raw_data) {
      let pre: string | number = "none";
      this.raw_data.forEach((item) => {
        if (pre === "none") {
          pre = item[key]; // First data always is 0!
        }

        if (attach_time_absolute) {
          const _date = DateConverter.convertToLocalTime(item[time_key], true);
          if (_date) {
            (out as [date: number, value: number][]).push([
              _date.getTime(),
              item[key] - (pre as number),
            ]);
          }
        } else {
          (out as number[]).push(item[key] - (pre as number));
        }
        pre = item[key];
      });
    }
    return out;
  }

  /**
   * Get array of data series.
   * @param key
   * @param isShort
   * @param isMicro
   * @returns {Array}
   */
  arrayOfTime(key: string, isShort: boolean = false, isMicro: boolean = false) {
    const out: string[] = [];
    if (this.raw_data)
      this.raw_data.forEach((item) => {
        const _date = DateConverter.GetLocalTimeString(
          item[key],
          0,
          isShort,
          isMicro
        );
        if (_date) {
          out.push(_date);
        }
      });

    return out;
  }

  arrayOfTimeAbsolute(key: string) {
    const out: number[] = [];
    if (this.raw_data)
      this.raw_data.forEach((item) => {
        const _date = DateConverter.convertToLocalTime(item[key], true);
        if (_date) {
          out.push(_date.getTime());
        }
      });

    return out;
  }

  totalOf(
    key: string,
    start_date: Date | null = null,
    end_date: Date | null = null,
    time_key: string = "created_at"
  ) {
    let out = 0;
    this.raw_data.forEach((item) => {
      const _date = DateConverter.convertToLocalTime(item[time_key], true);
      if (!_date) return;

      if (start_date && _date.getTime() < start_date.getTime()) return;
      if (end_date && _date.getTime() > end_date.getTime()) return;

      out += item[key] ? item[key] : 0;
    });
    return out;
  }
  getTotalAllKeys(except_keys: string[] = []) {
    // like total sessions
    const out: Record<string, number> = {};
    this.raw_data.forEach((item) => {
      const keys = Object.keys(item);
      keys.forEach((key) => {
        if (except_keys.includes(key) || key.length !== 2) return; // Country code length = 2 !
        if (!out[key]) out[key] = 0;
        out[key] += item[key];
      });
    });
    return out;
  }

  findDataOnDay(days_before_today: number) {
    return this.raw_data.find((item) => {
      return DateConverter.inDayRange(item.created_at, 1, days_before_today);
    });
  }

  generate_lastDayData() {
    if (!this.raw_data || this.raw_data.length === 0) return {};

    const data = this.raw_data[this.raw_data.length - 1];

    this._lastDayData = data ? data : {};

    return this._lastDayData;
  }

  generate_todayData() {
    if (!this.raw_data) return {};
    const data = this.raw_data.find((item) => {
      return DateConverter.isToday(item.created_at);
    });
    this._todayData = data ? data : {};

    return this._todayData;
  }

  generate_yesterdayData() {
    this._yesterdayData = this.lasDaysDataPack(1, 1);
    return this._yesterdayData;
  }

  generate_lastWeekData() {
    this._lastWeekData = this.lasDaysDataPack(7);
    return this._lastWeekData;
  }
  generate_previousWeekData() {
    this._previousWeekData = this.lasDaysDataPack(7, 7);
    return this._previousWeekData;
  }

  generate_lastMonthData() {
    this._lastMonthData = this.lasDaysDataPack(30, 0);
    return this._lastMonthData;
  }

  generate_todayDataOffset() {
    this._todayDataOffset = this.lasDaysDataPack(1, this.offset);
    return this._todayDataOffset;
  }
  generate_yesterdayDataOffset() {
    this._yesterdayDataOffset = this.lasDaysDataPack(1, this.offset + 1);
    return this._yesterdayDataOffset;
  }

  lasDaysDataPack(days: number, offset: number = 0) {
    const IGNORED_KEYS = ["id", "shop_id", "data_id"];

    if (!this.raw_data) return {};

    const out: Record<string, number | string | []> = {};

    let initialize = false;

    this.raw_data.forEach((item) => {
      // Fill with zero values:
      if (!initialize) {
        // Initialize value with first item
        for (const key in item) {
          // For date:
          if (days === 1 && ["created_at", "updated_at"].includes(key)) {
            // Just for 1 day set date (otherwise it will be array)
            out[key] = new Date().addDays(-offset).toISOString();
          }
          // For strings:
          else if (
            typeof item[key] === "string" ||
            item[key] instanceof String
          ) {
            out[key] = [];
          }
          //For finances:
          else if (key === "finances") {
            out[key] = [];
          } else {
            out[key] = 0;
          }
          initialize = true;
        }
      } // end !initialize

      if (!DateConverter.inDayRange(item.created_at, days, offset)) return;

      // Set values:
      for (const key in item) {
        const value = item[key];

        // 1. Dates:
        if (days === 1 && ["created_at", "updated_at"].includes(key)) {
          // Just for 1 day set date (otherwise it will be array)
          out[key] = value;
        }
        // 2. String values:
        else if (typeof value === "string" || value instanceof String) {
          (out[key] as string[]).push(value as string);
        }

        // 3. For finances:
        else if (key === "finances") {
          //  const finances=value;  // data.finances

          value.forEach((finance: IFinance) => {
            // finance:{data_id:.., currency:.. , pay:.., sell:.., discount:..}

            const found = (out[key] as IFinance[]).find(
              (k) => k.currency === finance.currency
            ); // Find finance by currency to accumulate values

            if (found) {
              // If find previous value:
              Object.keys(finance).forEach((finance_key) => {
                const finance_value = found[finance_key];

                if (
                  typeof finance_value === "string" ||
                  finance_value instanceof String ||
                  IGNORED_KEYS.includes(finance_key)
                )
                  return; // Dont add string values like currency, created_at & ...!
                found[finance_key] =
                  (finance_value ? finance_value : 0) +
                  (finance[finance_key] ? finance[finance_key] : 0);
              });
            } else {
              // Set current value if not exist:
              (out[key] as IFinance[]).push(Object.assign({}, finance));
            }
          });
        }
        //4. Number values: (Except ID!)
        else if (!IGNORED_KEYS.includes(key)) {
          out[key] += item[key];
        }
      } // end for
    }); // end forEach
    return out;
  }

  //█████████████████████████████████████████████████████████████
  //――――――――――――――――――――――― Finance ―――――――――――――――――――――――
  //█████████████████████████████████████████████████████████████

  financeTotalOf(key: string) {
    //  console.log("===============financeTotalOf================");
    const out: Record<keyof typeof Currency, number> = {};

    this.raw_data.forEach((item) => {
      item.finances?.forEach((finance: IFinance) => {
        const currency = finance.currency;
        const val = finance[key];

        if (!out[currency]) out[currency] = 0;

        out[currency] += val;
        //  console.log("=>",currency,val,'Item ID',item.id,'Finance ID',finance.id,finance);
      });
    });

    //  console.table(out);

    return out;
  }

  financeArrayOf(
    key: string,
    attach_time_absolute: boolean = false,
    time_key: string = "created_at"
  ) {
    const out: Record<
      keyof typeof Currency,
      ([date: number, value: number] | number)[]
    > = {};

    this.raw_data.forEach((item) => {
      item.finances?.forEach((finance: IFinance) => {
        const currency = finance.currency;

        if (!out[currency]) out[currency] = [];

        if (attach_time_absolute) {
          const _date = DateConverter.convertToLocalTime(item[time_key], true);
          if (_date) {
            out[currency].push([_date.getTime(), finance[key] as number]);
          }
        } else {
          out[currency].push(finance[key]);
        }
      });
    });

    //console.table(out);
    return out;
  }

  /**
   * Generate array of value of finance for one key and one currency.
   *
   * @param key
   * @param currency
   * @param offset
   * @param days
   * @param time_key
   * @returns {[ diff ,val]}
   */

  financeArrayOfByCurrencyInTimespan(
    key: string,
    currency: keyof typeof Currency,
    offset = 0,
    days = 30,
    time_key = "created_at"
  ) {
    const out: { diff: number; val: number }[] = [];

    let min = offset;
    let max = days - 1;

    this.raw_data.forEach((item) => {
      const found_finance_item = item.finances?.find(
        (f_item) => f_item.currency === currency
      );
      if (found_finance_item) {
        const val = found_finance_item[key];

        const _date = DateConverter.convertToLocalTime(item[time_key], true);
        if (!_date) return;
        const diff = TimeSeries.diffDays(new Date().getTime(), _date.getTime());
        out.push({ diff: diff, val: val });
        if (min > diff) min = diff;
        if (max < diff) max = diff;
      }
    });

    const interpolated_out = [];
    let i = max;
    while (i >= min) {
      const found_val = out.find((item) => item.diff === i);
      interpolated_out.push({ diff: i, val: found_val ? found_val.val : 0 });
      i--;
    }

    return interpolated_out;
  }

  //█████████████████████████████████████████████████████████████
  //――――――――――――――――――――――― Social ―――――――――――――――――――――――
  //█████████████████████████████████████████████████████████████
  /**
   * Calculate total of each keys in social
   * @returns {{}}
   */
  socialTotalKeys() {
    const out: Record<string, number> = {};
    this.raw_data.forEach((item) => {
      if (item.social)
        Object.keys(item.social).forEach((key) => {
          const val = item.social[key];
          if (!out[key]) out[key] = 0;
          out[key] += val;
        });
    });
    return out;
  }

  static diffDays(timestamp1: number, timestamp2: number) {
    const difference = timestamp1 - timestamp2;
    const daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);

    return daysDifference;
  }

  toString() {
    return JSON.stringify(this.raw_data, undefined, 4);
  }

  downloadExcel() {
    const excel = new ExcelConverter(JSON.stringify(this.raw_data), this.title);
    excel.downLoad();
  }

  //█████████████████████████████████████████████████████████████
  //――――――――――――――――――――――― Helpers ―――――――――――――――――――――――
  //█████████████████████████████████████████████████████████████

  /**
   *
   * @param key
   * @param ignore_last   true: Never return last item! if max item is last then return null! prevent show max values on incremental charts like total shops or total users!
   * @returns {null}
   */
  maxItemByKey(key: string, ignore_last: boolean = false) {
    let max = null;
    for (let i = 0; i < this.raw_data.length; i++) {
      const it = this.raw_data[i];
      if (!max || it[key] > max[key]) {
        // If last item is max return null:
        if (ignore_last && i === this.raw_data.length - 1) {
          return null;
        }

        max = it;
      }
    }

    return max;
  }

  //█████████████████████████████████████████████████████████████
  //――――――――――――――――――――――― Simplified Chart ―――――――――――――――――――――――
  //█████████████████████████████████████████████████████████████

  /**
   *
   * @param currency
   * @param keys
   * @returns {(*|number)[][]}    [[a1,b1,c1,d1,...] , [a2,b2,c2,d2,...] , ...]
   */
  simpleChartFinancesDataset(
    currency: keyof typeof Currency,
    ...keys: string[]
  ) {
    const out = (
      this.arrayOfForceInterpolateZero(
        "finances",
        false,
        "created_at",
        null
      ) as (IFinance[] | null)[]
    )
      .map((finances: IFinance[] | null) =>
        finances?.find((f: IFinance) => f.currency === currency)
      )
      .map((f) => keys.map((k) => (f ? f[k] : 0)));
    return out;
  }

  /**
   *
   * @param keys
   * @returns {*}   [[a1,b1,c1,d1,...] , [a2,b2,c2,d2,...] , ...]
   */
  simpleChartDataset(...keys: string[]) {
    const raw_arrays = keys.map((k) =>
      (
        this.arrayOfForceInterpolateZero(k, false, "created_at") as number[]
      ).map((val) => [val >= 0 ? val : 0])
    );
    return raw_arrays[0].map((_, i) => raw_arrays.map((arr) => arr[i][0]));
  }
}
