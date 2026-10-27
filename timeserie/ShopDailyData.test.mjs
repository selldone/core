import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

// Execute the actual helper and DateConverter without application bootstrap or APIs.
const modules = new Map();
function load(url) {
  if (modules.has(url.href)) return modules.get(url.href);
  const exports = {};
  modules.set(url.href, exports);
  const compiled = ts.transpileModule(readFileSync(url, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
    reportDiagnostics: true,
  });
  assert.deepEqual(
    compiled.diagnostics.filter(
      (item) => item.category === ts.DiagnosticCategory.Error,
    ),
    [],
  );
  vm.runInNewContext(
    compiled.outputText,
    {
      exports,
      Date,
      String,
      Intl,
      require: (name) => {
        assert.ok(
          name.startsWith("."),
          "Only local date/source modules are loaded",
        );
        return load(new URL(name + ".ts", url));
      },
    },
    { filename: url.pathname },
  );
  return exports;
}
const { normalizeShopDailyData } = load(
  new URL("./ShopDailyData.ts", import.meta.url),
);
const { DateConverter } = load(
  new URL("../helper/date/DateConverter.ts", import.meta.url),
);
const plain = (value) => JSON.parse(JSON.stringify(value));
const localDate = (day, hour = 0) => new Date(2026, 9, day, hour);
const dayKey = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
const freeze = (value) => {
  if (value && typeof value === "object") {
    Object.values(value).forEach(freeze);
    Object.freeze(value);
  }
  return value;
};

const originalTimezone = process.env.TZ;
try {
  for (const timezone of [
    "UTC",
    "America/New_York",
    "Europe/Berlin",
    "Asia/Dubai",
  ]) {
    process.env.TZ = timezone;
    for (const days of [0, 1, 7, 30, 90]) {
      for (const offset of [0, 11, 365]) {
        const end = localDate(27, 23);
        end.setDate(end.getDate() - offset);
        const start = new Date(end);
        start.setDate(start.getDate() - days);
        const before = [start.getTime(), end.getTime()];
        const result = normalizeShopDailyData([], start, end);
        assert.equal(
          result.length,
          days,
          `${timezone}: exactly ${days} selected days at offset ${offset}`,
        );
        assert.deepEqual(
          [start.getTime(), end.getTime()],
          before,
          "Caller bounds are not mutated",
        );
        const cursor = new Date(start);
        cursor.setHours(0, 0, 0, 0);
        for (const row of result) {
          cursor.setDate(cursor.getDate() + 1);
          assert.equal(
            dayKey(DateConverter.convertToLocalTime(row.created_at, true)),
            dayKey(cursor),
          );
          assert.equal(row.created_at, dayKey(cursor) + "T00:00:00");
          assert.equal(row.views, 0);
          assert.equal(row.users, null);
          assert.deepEqual(plain(row.finances), []);
        }
      }
    }
    for (const [month, startDay, endDay, expected] of [
      [2, 5, 12, 7],
      [9, 22, 29, 7],
      [10, 0, 4, 4],
    ]) {
      const start = new Date(2026, month, startDay);
      const end = new Date(2026, month, endDay, 23);
      const result = normalizeShopDailyData([], start, end);
      assert.equal(result.length, expected);
      const dates = result.map((row) =>
        DateConverter.convertToLocalTime(row.created_at, true),
      );
      assert.equal(
        new Set(dates.map(dayKey)).size,
        expected,
        "DST changes neither skip nor repeat calendar slots",
      );
      if (timezone === "America/New_York" && month === 2)
        assert.ok(
          dates.some(
            (date, i) => i && date - dates[i - 1] === 23 * 60 * 60 * 1000,
          ),
        );
      if (timezone === "Europe/Berlin" && month === 9)
        assert.ok(
          dates.some(
            (date, i) => i && date - dates[i - 1] === 25 * 60 * 60 * 1000,
          ),
        );
    }

    const rows = freeze([
      {
        id: 30,
        created_at: "2026-10-03T12:00:00",
        updated_at: "recorded-update",
        users: 0,
        total_products_physical: 0,
        views: -3,
        finances: [
          { id: 80, currency: "USD", pay: -7, sell: -2, discount: null },
        ],
        arbitrary: { note: "preserved only on its recorded day" },
      },
      {
        id: 31,
        created_at: "2026-10-03T18:00:00",
        users: 999,
        views: 999,
        finances: [{ currency: "DUP", pay: 999 }],
      },
      {
        id: 10,
        created_at: "2026-09-29T12:00:00",
        users: 9,
        total_products_physical: 11,
      },
      {
        id: 11,
        created_at: "2026-10-01T12:00:00",
        users: 10,
        total_products_physical: 7,
        total_products_file: 0,
        finances: [{ currency: "JPY", pay: 400 }],
      },
      {
        id: 50,
        created_at: "2026-10-05T12:00:00",
        users: null,
        views: null,
        finances: null,
        social: null,
      },
      {
        id: 70,
        created_at: { date: "2026-10-07T12:00:00" },
        users: 15,
        views: 0,
        finances: [{ currency: "EUR", pay: 3 }],
      },
      {
        id: 90,
        created_at: "2026-10-09T12:00:00",
        users: 9999,
        finances: [{ currency: "FUTURE", pay: 999 }],
      },
      { id: 100, created_at: "not-a-date", users: 888 },
      null,
    ]);
    const before = JSON.stringify(rows);
    const result = normalizeShopDailyData(rows, localDate(1), localDate(7, 23));
    assert.equal(result.length, 6);
    const [second, third, fourth, fifth, sixth, seventh] = result;
    assert.equal(
      second.users,
      10,
      "The excluded boundary day seeds the following day",
    );
    assert.equal(second.total_products_physical, 7);
    assert.equal(
      second.total_products_file,
      0,
      "A recorded zero stock remains known",
    );
    assert.equal(
      second.total_products_service,
      null,
      "No stock value is inferred before its first observation",
    );
    for (const key of [
      "views",
      "users_add",
      "likes",
      "favorites",
      "wishlist",
      "sell_products_subscription",
      "send_products_physical",
      "order_file_checkout",
      "request_avocados",
      "hyper_rejects",
      "ds_deliveries",
      "customers_remove",
      "pages_add",
    ])
      assert.equal(second[key], 0);
    assert.deepEqual(plain(second.social), {});
    assert.deepEqual(
      plain(second.finances),
      ["JPY", "USD", "EUR"].map((currency) => ({
        currency,
        pay: 0,
        sell: 0,
        discount: 0,
      })),
    );
    assert.equal(second.id, undefined);
    assert.equal(second.updated_at, undefined);
    assert.equal(
      second.arbitrary,
      undefined,
      "Synthetic rows never copy arbitrary metadata",
    );
    assert.notEqual(third, rows[0], "Recorded row objects are copied");
    assert.deepEqual(
      plain(third),
      plain(rows[0]),
      "The first row on the local day wins without changing its payload",
    );
    assert.equal(third.views, -3);
    assert.equal(third.finances[0].pay, -7);
    assert.equal(third.finances[0].discount, null);
    assert.equal(
      Object.hasOwn(third, "order_physical_added"),
      false,
      "A partial recorded row is never repaired with synthetic zero",
    );
    assert.equal(fourth.users, 0, "Zero resets the stock baseline");
    assert.equal(fourth.total_products_physical, 0);
    assert.deepEqual(
      plain(fifth),
      plain(rows[4]),
      "Recorded null fields stay null",
    );
    assert.equal(
      sixth.users,
      0,
      "Only earlier finite stock values are carried",
    );
    assert.equal(seventh.users, 15);
    assert.equal(
      JSON.stringify(rows),
      before,
      "Frozen source records and nested finances are not mutated",
    );
    assert.deepEqual(
      normalizeShopDailyData(result, localDate(1), localDate(7, 23)),
      result,
      "Normalization is idempotent",
    );

    const leading = normalizeShopDailyData(
      [
        {
          id: 8,
          created_at: "2026-10-03T12:00:00",
          users: 45,
          total_products_physical: 9,
        },
      ],
      localDate(1),
      localDate(4, 23),
    );
    assert.equal(
      leading[0].users,
      null,
      "A later snapshot cannot backfill an earlier stock",
    );
    assert.equal(leading[2].users, 45);
    const utcRows = [{ id: 1, created_at: "2026-10-02T00:30:00Z", users: 12 }];
    const parsedDay = DateConverter.convertToLocalTime(
      utcRows[0].created_at,
      true,
    );
    const utcResult = normalizeShopDailyData(
      utcRows,
      localDate(0),
      localDate(3, 23),
    );
    assert.equal(
      utcResult.find((row) => row.id === 1)?.created_at,
      utcRows[0].created_at,
    );
    assert.equal(
      dayKey(
        DateConverter.convertToLocalTime(
          utcResult.find((row) => row.id === 1).created_at,
          true,
        ),
      ),
      dayKey(parsedDay),
      "UTC observations use the actual shared local-date parser",
    );
  }
  assert.deepEqual(
    plain(normalizeShopDailyData([], new Date(NaN), localDate(3))),
    [],
  );
  assert.deepEqual(
    plain(normalizeShopDailyData([], localDate(3), localDate(1))),
    [],
  );
} finally {
  if (originalTimezone === undefined) delete process.env.TZ;
  else process.env.TZ = originalTimezone;
}
console.log(
  "Shop daily ranges, DST/local dates, event zeros, stock carry, native currencies, partial rows, and immutability passed.",
);
