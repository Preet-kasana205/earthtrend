import { nino34, pacificRainfall, iod, monsoon2026, thermocline } from "../src/data/realData.ts";
import { pacificDailyRainfall2026 } from "../src/data/pacificDailyRainfall2026.ts";
import { oras5ThermoclineData } from "../src/data/oras5ThermoclineData.ts";
import { pacificSeptemberBaselineMeans } from "../src/data/pacificSeptemberBaselineMeans.ts";
import { traceabilityData } from "../src/data/traceabilityData.ts";
import { gldasSoilMoisture } from "../src/data/gldasSoilMoistureData.ts";
import { gldasTraceabilityData } from "../src/data/gldasTraceabilityData.ts";
import { analyzeTrend } from "../src/lib/trendAnalysis.ts";
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
console.log(`✔ Test 4 Passed: ${traceabilityData.length} existing parameters traced.`);


console.log("\nTest 5: NASA GLDAS Soil Moisture Series");
assert.strictEqual(gldasSoilMoisture.length, 624, "GLDAS must have 312 monthly observations per region");
for (const region of ["Rajasthan", "Assam"]) {
  const points = gldasSoilMoisture.filter((point) => point.region === region);
  assert.strictEqual(points.length, 312, `${region} must contain 312 observations`);
  assert.strictEqual(points[0].date, "2000-01", `${region} must start in Jan 2000`);
  assert.strictEqual(points[311].date, "2025-12", `${region} must end in Dec 2025`);
  assert.strictEqual(new Set(points.map((point) => point.date)).size, 312, `${region} months must be unique`);
  assert(points.every((point) => Number.isInteger(point.year) && Number.isInteger(point.month) && Number.isFinite(point.value)), `${region} observations must have numeric values`);
  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const current = points[index];
    const next = previous.month === 12 ? `${previous.year + 1}-01` : `${previous.year}-${String(previous.month + 1).padStart(2, "0")}`;
    assert.strictEqual(current.date, next, `${region} dates must be continuous after ${previous.date}`);
  }
}
const rajasthanTrend = analyzeTrend(gldasSoilMoisture.filter((point) => point.region === "Rajasthan"));
const assamTrend = analyzeTrend(gldasSoilMoisture.filter((point) => point.region === "Assam"));
assert(Math.abs(rajasthanTrend.senSlopePerYear - 0.086226) < 0.00001, `Rajasthan trend slope unexpected: ${rajasthanTrend.senSlopePerYear}`);
assert(Math.abs(rajasthanTrend.mannKendallP - 0.005565) < 0.00001, `Rajasthan Mann–Kendall p unexpected: ${rajasthanTrend.mannKendallP}`);
assert.strictEqual(rajasthanTrend.significanceLabel, "Significant wetting");
assert(Math.abs(assamTrend.senSlopePerYear - -0.027743) < 0.00001, `Assam trend slope unexpected: ${assamTrend.senSlopePerYear}`);
assert(Math.abs(assamTrend.mannKendallP - 0.346636) < 0.00001, `Assam Mann–Kendall p unexpected: ${assamTrend.mannKendallP}`);
assert.strictEqual(assamTrend.significanceLabel, "Not significant drying");
console.log(`  Rajasthan: Sen slope=${rajasthanTrend.senSlopePerYear.toFixed(6)} kg/m2/year; Mann-Kendall p=${rajasthanTrend.mannKendallP.toFixed(8)}; ${rajasthanTrend.significanceLabel}`);
console.log(`  Assam: Sen slope=${assamTrend.senSlopePerYear.toFixed(6)} kg/m2/year; Mann-Kendall p=${assamTrend.mannKendallP.toFixed(8)}; ${assamTrend.significanceLabel}`);
const regionMeans = Object.fromEntries(["Rajasthan", "Assam"].map((region) => {
  const values = gldasSoilMoisture.filter((point) => point.region === region).map((point) => point.value);
  return [region, values.reduce((sum, value) => sum + value, 0) / values.length];
}));
assert(Math.abs((regionMeans.Assam - regionMeans.Rajasthan) - 11.049429) < 0.00001, "Assam–Rajasthan full-period mean difference must be +11.05 kg/m2");
console.log("✔ Test 5 Passed: both 312-month GLDAS series and computed trend results verified.");

console.log("\nTest 6: GLDAS Traceability Record");
assert.strictEqual(gldasTraceabilityData.verificationStatus, "Verified");
assert(gldasTraceabilityData.variableName.includes("0–10 cm"), "Traceability must name the measured soil layer");
assert(gldasTraceabilityData.productDataset.includes("v2.1"), "Traceability must identify GLDAS Noah v2.1");
assert(gldasTraceabilityData.temporalPeriod.includes("312 monthly observations per region"), "Traceability must identify the verified periods and counts");
assert(gldasTraceabilityData.destinationComponent.includes("Trend Explorer"), "Traceability must point to the selector");
console.log("✔ Test 6 Passed: NASA GLDAS is represented in the source-to-visualization matrix.");

console.log("\nTest 7: ORAS5 and Pacific September Trend Analysis");
const oras5Trend = analyzeTrend(oras5ThermoclineData, {
  positive: "upward trend in source values",
  negative: "downward trend in source values",
});
assert(Math.abs(oras5Trend.senSlopePerYear - -0.1491984203) < 0.000001, `ORAS5 slope unexpected: ${oras5Trend.senSlopePerYear}`);
assert(Math.abs(oras5Trend.mannKendallP - 0.0007040684) < 0.00000001, `ORAS5 Mann-Kendall p unexpected: ${oras5Trend.mannKendallP}`);
assert.strictEqual(oras5Trend.significanceLabel, "Significant downward trend in source values");
assert.strictEqual(pacificSeptemberBaselineMeans.length, 19, "September baseline trend requires 19 annual means");
assert.strictEqual(pacificSeptemberBaselineMeans[0].year, 2001);
assert.strictEqual(pacificSeptemberBaselineMeans[18].year, 2019);
assert(pacificSeptemberBaselineMeans.every((point) => point.observationCount === 30 && Number.isFinite(point.value)), "Each annual September mean must use 30 numeric daily observations");
const septemberRainTrend = analyzeTrend(pacificSeptemberBaselineMeans, {
  positive: "upward trend in September rainfall rate",
  negative: "downward trend in September rainfall rate",
});
assert(Math.abs(septemberRainTrend.senSlopePerYear - -0.0100477377) < 0.000001, `September rainfall trend slope unexpected: ${septemberRainTrend.senSlopePerYear}`);
assert(Math.abs(septemberRainTrend.mannKendallP - 0.5756368657) < 0.00000001, `September rainfall Mann-Kendall p unexpected: ${septemberRainTrend.mannKendallP}`);
assert.strictEqual(septemberRainTrend.significanceLabel, "Not significant downward trend in September rainfall rate");
console.log(`  ORAS5 (815 monthly): Sen slope=${oras5Trend.senSlopePerYear.toFixed(8)} source-values/year; Mann-Kendall p=${oras5Trend.mannKendallP.toFixed(8)}; ${oras5Trend.significanceLabel}`);
console.log(`  September baseline (19 annual means): Sen slope=${septemberRainTrend.senSlopePerYear.toFixed(8)} mm/day/year; Mann-Kendall p=${septemberRainTrend.mannKendallP.toFixed(8)}; ${septemberRainTrend.significanceLabel}`);
console.log("✔ Test 7 Passed: both long-series trends are computed from the source observations.");
console.log("\nAll EarthTrend data validation tests passed successfully!");
