from __future__ import annotations

import argparse
import csv
import json
import math
import sys
from datetime import date, datetime
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "src" / "data" / "raw"
RAIN_2026 = RAW / "sep_26g4.areaAvgTimeSeries.GPM_3IMERGDL_07_precipitation.20260901-20260930.170W_5S_120W_5N.csv"
RAIN_BASELINE = RAW / "g4.areaAvgTimeSeries.GPM_3IMERGDL_07_precipitation.20010101-20200101.170W_5S_120W_5N.csv"
ORAS5 = RAW / "ORAS5_Thermocline_Cleaned_1958_2025_No_Readme.xlsx"
PACIFIC_OUT = ROOT / "src" / "data" / "pacificDailyRainfall2026.ts"
ORAS5_OUT = ROOT / "src" / "data" / "oras5ThermoclineData.ts"


def read_giovanni(path: Path) -> list[dict[str, Any]]:
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        lines = handle.readlines()
    header_index = next((i for i, line in enumerate(lines) if line.startswith("time,")), None)
    if header_index is None:
        raise ValueError(f"No Giovanni table header found in {path.name}")
    reader = csv.DictReader(lines[header_index:])
    value_key = next((name for name in reader.fieldnames or [] if name != "time"), None)
    if value_key is None:
        raise ValueError(f"No measurement column found in {path.name}")
    result = []
    for row in reader:
        if not row.get("time"):
            continue
        value = float(row[value_key])
        if not math.isfinite(value) or value == -9999.9:
            raise ValueError(f"Invalid/fill value in {path.name} on {row['time']}: {value}")
        result.append({"date": date.fromisoformat(row["time"]), "value": value})
    return result


def read_oras5() -> tuple[list[dict[str, Any]], str]:
    try:
        from openpyxl import load_workbook
    except ImportError as error:
        raise RuntimeError("Install extraction requirements with: python -m pip install -r requirements-extraction.txt") from error

    workbook = load_workbook(ORAS5, read_only=True, data_only=True)
    if "Monthly Data" not in workbook.sheetnames:
        raise ValueError("ORAS5 workbook is missing the 'Monthly Data' worksheet")
    rows = workbook["Monthly Data"].iter_rows(values_only=True)
    headers = next(rows)
    date_key = "Date"
    value_key = "Depth of 20C isotherm (source value; confirm units)"
    lat_key = "Latitude (degrees)"
    lon_key = "Longitude (degrees)"
    required = (date_key, value_key, lat_key, lon_key)
    if any(key not in headers for key in required):
        raise ValueError(f"Unexpected ORAS5 workbook columns: {headers}")
    indexes = {key: headers.index(key) for key in required}
    records = []
    for row in rows:
        if not any(cell is not None for cell in row):
            continue
        raw_date = row[indexes[date_key]]
        if not isinstance(raw_date, (date, datetime)):
            raise ValueError(f"ORAS5 Date must be an Excel date, got {raw_date!r}")
        raw_value = row[indexes[value_key]]
        if isinstance(raw_value, bool) or not isinstance(raw_value, (int, float)) or not math.isfinite(raw_value):
            raise ValueError(f"ORAS5 source value must be finite numeric data on {raw_date}: {raw_value!r}")
        lat = row[indexes[lat_key]]
        lon = row[indexes[lon_key]]
        if (lat, lon) != (0, -110):
            raise ValueError(f"Unexpected ORAS5 location on {raw_date}: {lat}, {lon}")
        records.append({"date": date(raw_date.year, raw_date.month, 1), "value": float(raw_value)})
    return records, value_key


def expected_months(start_year: int, start_month: int, count: int) -> list[tuple[int, int]]:
    months = []
    year, month = start_year, start_month
    for _ in range(count):
        months.append((year, month))
        month += 1
        if month > 12:
            year += 1
            month = 1
    return months


def ts_array(interface: str, name: str, rows: list[dict[str, Any]], metadata: list[str]) -> str:
    comments = "\n".join(f"// {line}" for line in metadata)
    body = json.dumps(rows, ensure_ascii=False, indent=2, allow_nan=False)
    return f"{comments}\n\nexport interface {interface} {{\n  date: string;\n  {('day: number;\n  precipitation: number;' if interface == 'DailyRainfallPoint' else 'year: number;\n  month: number;\n  value: number;')}\n}}\n\nexport const {name}: {interface}[] = {body};\n"


def validate_and_render() -> tuple[str, str, list[dict[str, Any]], list[dict[str, Any]]]:
    daily_rows = read_giovanni(RAIN_2026)
    daily_dates = [row["date"] for row in daily_rows]
    expected_days = [date(2026, 9, day) for day in range(1, 31)]
    if len(daily_rows) != 30 or daily_dates != expected_days or len(set(daily_dates)) != 30:
        raise ValueError("Pacific September 2026 must contain exactly one row for each date from Sep 1 through Sep 30")
    rain_sum = sum(row["value"] for row in daily_rows)
    rain_mean = rain_sum / len(daily_rows)
    if abs(rain_sum - 132.9762) >= 0.00005 or abs(rain_mean - 4.4325) >= 0.00005:
        raise ValueError(f"Unexpected September 2026 totals: sum={rain_sum:.8f}, mean={rain_mean:.8f}")

    baseline_rows = read_giovanni(RAIN_BASELINE)
    september = [row for row in baseline_rows if 2001 <= row["date"].year <= 2019 and row["date"].month == 9]
    baseline_dates = [row["date"] for row in september]
    if len(september) != 570 or len(set(baseline_dates)) != 570:
        raise ValueError(f"September baseline must have 570 unique observations, got {len(september)}")
    baseline_sum = sum(row["value"] for row in september)
    baseline_mean = baseline_sum / len(september)
    if abs(baseline_sum - 383.7893) >= 0.00005 or abs(baseline_mean - 0.6733) >= 0.00005:
        raise ValueError(f"Unexpected baseline totals: sum={baseline_sum:.8f}, mean={baseline_mean:.8f}")

    oras_rows, unit_header = read_oras5()
    months = [(row["date"].year, row["date"].month) for row in oras_rows]
    expected = expected_months(1958, 1, 815)
    if len(oras_rows) != 815 or months != expected or len(set(months)) != 815:
        raise ValueError("ORAS5 must have 815 unique continuous monthly observations from Jan 1958 through Nov 2025")
    if unit_header != "Depth of 20C isotherm (source value; confirm units)":
        raise ValueError(f"Unexpected ORAS5 unit caveat: {unit_header}")

    rainfall_points = [
        {"date": row["date"].isoformat(), "day": row["date"].day, "precipitation": row["value"]}
        for row in daily_rows
    ]
    thermocline_points = [
        {"date": row["date"].strftime("%Y-%m"), "year": row["date"].year, "month": row["date"].month, "value": row["value"]}
        for row in oras_rows
    ]
    rainfall_ts = ts_array(
        "DailyRainfallPoint", "pacificDailyRainfall2026", rainfall_points,
        [f"Extracted directly from {RAIN_2026.relative_to(ROOT).as_posix()}.",
         "NASA Giovanni GPM_3IMERGDL_07_precipitation, daily mean rate, 170°W–120°W and 5°S–5°N.",
         f"30 observed days, 1–30 Sep 2026; sum {rain_sum:.4f} mm; mean {rain_mean:.4f} mm/day."])
    oras_ts = ts_array(
        "ThermoclinePoint", "oras5ThermoclineData", thermocline_points,
        [f"Extracted directly from {ORAS5.relative_to(ROOT).as_posix()}, worksheet Monthly Data.",
         "ECMWF ORAS5 depth of 20°C isotherm at 0°N, 110°W; Jan 1958–Nov 2025; 815 monthly records.",
         f"Source header: {unit_header}. Units are unconfirmed; values are not labelled as metres."])
    return rainfall_ts, oras_ts, rainfall_points, thermocline_points


def main() -> int:
    parser = argparse.ArgumentParser(description="Reproduce typed chart series from the preserved CSV and XLSX sources.")
    parser.add_argument("--check", action="store_true", help="Validate sources and ensure generated modules are up to date without writing files.")
    args = parser.parse_args()
    rainfall_ts, oras_ts, rainfall_points, thermocline_points = validate_and_render()
    outputs = ((PACIFIC_OUT, rainfall_ts), (ORAS5_OUT, oras_ts))
    if args.check:
        stale = [path.relative_to(ROOT).as_posix() for path, expected in outputs if not path.exists() or path.read_text(encoding="utf-8-sig") != expected]
        if stale:
            print("Generated data modules do not match raw sources:")
            print("\n".join(f"  - {path}" for path in stale))
            return 1
        action = "checked; generated modules match raw sources"
    else:
        for path, content in outputs:
            path.write_text(content, encoding="utf-8")
        action = "extracted typed modules from raw sources"
    print("EarthTrend raw-data extraction validation:")
    rain_sum = sum(point["precipitation"] for point in rainfall_points)
    rain_mean = rain_sum / len(rainfall_points)
    print(f"  Pacific Sep 2026: {len(rainfall_points)} daily observations, 2026-09-01 through 2026-09-30; sum={rain_sum:.4f} mm; mean={rain_mean:.4f} mm/day")
    print("  September baseline 2001–2019: 570 observations; sum=383.7893 mm; mean=0.6733 mm/day; anomaly=+3.7592 mm/day")
    print(f"  ORAS5: {len(thermocline_points)} monthly observations, {thermocline_points[0]['date']} through {thermocline_points[-1]['date']}; 815 unique continuous dates; no missing/non-numeric values")
    print("  ORAS5 location: 0°N, 110°W for all rows; unit remains unconfirmed")
    print(f"  Result: {action}.")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except Exception as error:
        print(f"Data extraction validation failed: {error}", file=sys.stderr)
        sys.exit(1)
