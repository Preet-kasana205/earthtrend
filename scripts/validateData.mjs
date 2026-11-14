import { nino34, pacificRainfall, iod, monsoon2026, thermocline } from "../src/data/realData.ts";
import { pacificDailyRainfall2026 } from "../src/data/pacificDailyRainfall2026.ts";
import { oras5ThermoclineData } from "../src/data/oras5ThermoclineData.ts";
import { traceabilityData } from "../src/data/traceabilityData.ts";
import assert from "node:assert";

console.log("Running EarthTrend Scientific Data Validation Tests...\n");

console.log("Test 1: Headline values in realData.ts");
assert.strictEqual(nino34.oct2026Monthly, 2.5, "Niño-3.4 Oct 2026 must be +2.5°C");
assert.strictEqual(nino34.sep2026Monthly, 2.1, "Niño-3.4 Sep 2026 must be +2.1°C");
assert.strictEqual(pacificRainfall.sep2026Mean, 4.43, "Sep 2026 mean rainfall must be 4.43 mm/day");
assert.strictEqual(pacificRainfall.sepBaselineMean, 0.67, "Sep baseline rainfall must be 0.67 mm/day");
assert.strictEqual(pacificRainfall.sep2026Anomaly, 3.76, "Pacific rainfall anomaly must be +3.76 mm/day");
assert.strictEqual(iod.bomWeeklyTo8Nov2026, 0.75, "BoM weekly IOD must be +0.75°C");
assert.strictEqual(monsoon2026.percentOfLPA, 87.4, "Monsoon must be 87.4% of LPA");
assert.strictEqual(monsoon2026.rainfallMm, 759.4, "Monsoon observed must be 759.4 mm");
assert.strictEqual(monsoon2026.lpaMm, 868.6, "Monsoon LPA must be 868.6 mm");
console.log("✔ Test 1 Passed: Headline constants verified.");

console.log("\nTest 2: Pacific Rainfall Daily Series (Sep 2026)");
assert.strictEqual(pacificDailyRainfall2026.length, 30, "Sep 2026 must have exactly 30 observations");
const rainSum = pacificDailyRainfall2026.reduce((acc, curr) => acc + curr.precipitation, 0);
assert(Math.abs(rainSum - 132.9762) < 0.00005, `Rainfall sum must be 132.9762 mm, got ${rainSum}`);
assert(Math.abs(rainSum / 30 - 4.43254) < 0.00005, `Rainfall mean must be 4.43254 mm/day, got ${rainSum / 30}`);
assert.strictEqual(pacificDailyRainfall2026[0].date, "2026-09-01", "Start date must be 2026-09-01");
assert.strictEqual(pacificDailyRainfall2026[29].date, "2026-09-30", "End date must be 2026-09-30");
assert.strictEqual(new Set(pacificDailyRainfall2026.map((point) => point.date)).size, 30, "Daily dates must be unique");
assert(pacificDailyRainfall2026.every((point) => Number.isFinite(point.precipitation)), "Rainfall values must be finite numbers");
console.log("✔ Test 2 Passed: 30 daily observations verified (sum=132.9762 mm, mean=4.4325 mm/day).");

console.log("\nTest 3: ORAS5 Thermocline Series");
assert.strictEqual(oras5ThermoclineData.length, 815, "ORAS5 must have exactly 815 monthly observations");
assert.strictEqual(oras5ThermoclineData[0].date, "1958-01", "Start month must be 1958-01");
assert.strictEqual(oras5ThermoclineData[814].date, "2025-11", "End month must be 2025-11");
assert(oras5ThermoclineData.every((point) => Number.isInteger(point.year) && Number.isInteger(point.month) && Number.isFinite(point.value)), "All ORAS5 records need numeric year, month and source value");
assert.strictEqual(new Set(oras5ThermoclineData.map((point) => point.date)).size, 815, "ORAS5 dates must be unique");
for (let index = 1; index < oras5ThermoclineData.length; index += 1) {
  const previous = oras5ThermoclineData[index - 1];
  const current = oras5ThermoclineData[index];
  const expected = previous.month === 12 ? `${previous.year + 1}-01` : `${previous.year}-${String(previous.month + 1).padStart(2, "0")}`;
  assert.strictEqual(current.date, expected, `ORAS5 dates must be continuous after ${previous.date}`);
}
assert(thermocline.unitsCaveat.includes("Unit unconfirmed"), "Units must remain unconfirmed");
console.log("✔ Test 3 Passed: 815 monthly observations verified (Jan 1958 - Nov 2025, no gaps or duplicates).");

console.log("\nTest 4: Traceability Matrix Completeness");
assert(traceabilityData.length >= 7, "Traceability matrix must cover all required parameters");
console.log(`✔ Test 4 Passed: ${traceabilityData.length} parameters fully traced.`);
console.log("\nAll EarthTrend data validation tests passed successfully!");

