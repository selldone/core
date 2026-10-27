# Shop daily display data

`normalizeShopDailyData(rows, startExclusive, endInclusive)` projects an authorized, successfully loaded **complete** shop-statistic response into its selected local calendar days. It does not fetch, store or change source records. Generic `TimeSeries` behavior is unchanged.

- The start date is excluded; the end date is included. Local `setDate` iteration preserves calendar slots across daylight-saving changes. Generated timestamps use `YYYY-MM-DDT00:00:00`, so parsing cannot shift them to a previous day west of UTC.
- Keep the first observed row for each local day, using the existing `DateConverter` parser. Return only the selected dates, in order. Recorded rows are shallow copied without changing fields or nested payloads; partial, null, zero and signed values remain intact.
- Only entirely absent days receive the explicit `ShopData` daily-event whitelist at zero. `users` and the five `total_products_*` snapshots carry their latest preceding finite values, including zero. Before a known snapshot, those stocks are `null`. An observed excluded boundary/prefix day can seed stocks; a future observation cannot.
- Generated attribution is `social:{}`. Generated finance rows contain only observed currency codes plus zero `pay`, `sell` and `discount`; money is never carried. Currency discovery excludes invalid/duplicate rows and dates after the selected end. With no observed currency, `finances` is empty; currency display fallbacks belong to the caller.
- Generated rows have no database `id`, `data_id`, `shop_id`, `updated_at` or arbitrary source metadata. The return uses the existing `IRawData` type through an explicit cast because that legacy interface requires an ID. This is a display projection: retain original observations separately for comparisons/sync/export paths that require recorded rows.

Callers must distinguish a complete empty array from denied/unloaded data, failed requests and incremental responses. Supply an earlier observed stock baseline when available; never seed historical days from current inventory or a later row.

Run the isolated actual-source checks without an application, network or build:

```text
node @selldone/core-js/timeserie/ShopDailyData.test.mjs
```

The checks cover exact 0/1/7/30/90-day scopes and offsets, UTC/New York/Berlin/Dubai, DST, stock zero/carry/unknown prefixes, native currencies and signed/null values, first-row deduplication, malformed/outside rows, immutable inputs and idempotency.
