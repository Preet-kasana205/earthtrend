import assert from "node:assert/strict";
import { overviewMapRegions } from "../src/lib/overviewMapRegions.js";

assert.deepEqual(
  overviewMapRegions.map(({ name }) => name),
  ["Niño-3.4", "Rajasthan", "Assam"],
  "The interactive map must contain exactly the three requested regions in its selection model",
);

assert.deepEqual(
  Object.fromEntries(overviewMapRegions.map(({ name, bounds }) => [name, bounds])),
  {
    "Niño-3.4": [[-5, -170], [5, -120]],
    Rajasthan: [[23, 69], [30, 78]],
    Assam: [[24, 89], [28, 96]],
  },
  "Map rectangles must use the specified south-west and north-east coordinates",
);

assert.deepEqual(
  Object.fromEntries(overviewMapRegions.map(({ name, selection }) => [name, selection])),
  {
    "Niño-3.4": { variable: "nino34" },
    Rajasthan: { variable: "soil-moisture", region: "Rajasthan" },
    Assam: { variable: "soil-moisture", region: "Assam" },
  },
  "Region selection must route Niño-3.4 to SST and each Indian region to its soil-moisture series",
);

console.log("Overview map region coordinates and Trend Explorer selections verified.");
