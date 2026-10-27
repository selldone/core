import { DateConverter } from "../helper/date/DateConverter";
import type { IRawData } from "./TimeSeries";

const PRODUCT_TYPES = [
  "physical",
  "virtual",
  "file",
  "service",
  "subscription",
];
const STOCK_KEYS = [
  "users",
  ...PRODUCT_TYPES.map((type) => `total_products_${type}`),
];

// ShopData writer traits increment these daily counters; stocks above are snapshots.
const EVENT_KEYS = [
  ...PRODUCT_TYPES.flatMap((type) => [
    `view_products_${type}`,
    `sell_products_${type}`,
    `send_products_${type}`,
    `order_${type}_added`,
    `order_${type}_checkout`,
  ]),
  "view_avocados",
  "request_avocados",
  "sell_avocados",
  "hyper_views",
  "hyper_new_carts",
  "hyper_checkouts",
  "hyper_pays",
  "hyper_rejects",
  "views",
  "page_views",
  "amp",
  "new_visitors",
  "returning_visitors",
  "likes",
  "powers",
  "favorites",
  "wishlist",
  "comments",
  "comments_approved",
  "ratings",
  "users_add",
  "products_add",
  "products_remove",
  "categories_add",
  "categories_remove",
  "customers_add",
  "customers_remove",
  "pages_add",
  "pages_remove",
  "ds_count",
  "ds_payments",
  "ds_confirms",
  "ds_sends",
  "ds_deliveries",
  "ds_cancels",
  "ds_rejects",
];

/** Display projection of a successfully loaded, complete shop-statistic range. */
export function normalizeShopDailyData(
  rows: IRawData[],
  startExclusive: Date,
  endInclusive: Date,
): IRawData[] {
  if (
    !Number.isFinite(startExclusive?.getTime()) ||
    !Number.isFinite(endInclusive?.getTime())
  )
    return [];

  const start = new Date(startExclusive.getTime());
  const end = new Date(endInclusive.getTime());
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);
  if (end <= start) return [];

  const recorded = new Map<number, IRawData>();
  for (const row of rows) {
    if (!row || typeof row !== "object") continue;
    const date = DateConverter.convertToLocalTime(row.created_at, true);
    if (!date || !Number.isFinite(date.getTime()) || date > end) continue;
    if (!recorded.has(date.getTime())) recorded.set(date.getTime(), row);
  }

  const stocks: Record<string, number | null> = Object.fromEntries(
    STOCK_KEYS.map((key) => [key, null]),
  );
  const currencies = new Set<string>();
  const updateStocks = (row: IRawData) => {
    for (const key of STOCK_KEYS) {
      if (typeof row[key] === "number" && Number.isFinite(row[key]))
        stocks[key] = row[key];
    }
  };
  for (const [time, row] of [...recorded].sort(([a], [b]) => a - b)) {
    // The excluded boundary day is also a valid earlier stock baseline.
    if (time <= start.getTime()) updateStocks(row);
    for (const finance of Array.isArray(row.finances) ? row.finances : []) {
      if (typeof finance?.currency === "string" && finance.currency.trim())
        currencies.add(finance.currency);
    }
  }

  const result: IRawData[] = [];
  const cursor = new Date(start.getTime());
  cursor.setDate(cursor.getDate() + 1);
  for (; cursor <= end; cursor.setDate(cursor.getDate() + 1)) {
    const row = recorded.get(cursor.getTime());
    if (row) {
      updateStocks(row);
      result.push({ ...row });
      continue;
    }
    // No UTC date-only string: it would parse as the previous local day west of UTC.
    const date = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}-${String(cursor.getDate()).padStart(2, "0")}T00:00:00`;
    result.push({
      ...Object.fromEntries(EVENT_KEYS.map((key) => [key, 0])),
      ...stocks,
      created_at: date,
      social: {},
      finances: [...currencies].map((currency) => ({
        currency,
        pay: 0,
        sell: 0,
        discount: 0,
      })),
      // Display-only rows deliberately have no database identity or update timestamp.
    } as unknown as IRawData);
  }
  return result;
}
