/** @typedef {"Niño-3.4" | "Rajasthan" | "Assam"} OverviewMapRegionName */
/** @typedef {{ variable: "nino34" } | { variable: "soil-moisture", region: "Rajasthan" | "Assam" }} TrendSelection */
/**
 * @typedef {Object} OverviewMapRegion
 * @property {OverviewMapRegionName} name
 * @property {[[number, number], [number, number]]} bounds
 * @property {TrendSelection} selection
 */

/** @type {OverviewMapRegion[]} */
export const overviewMapRegions = [
  {
    name: "Niño-3.4",
    bounds: [[-5, -170], [5, -120]],
    selection: { variable: "nino34" },
  },
  {
    name: "Rajasthan",
    bounds: [[23, 69], [30, 78]],
    selection: { variable: "soil-moisture", region: "Rajasthan" },
  },
  {
    name: "Assam",
    bounds: [[24, 89], [28, 96]],
    selection: { variable: "soil-moisture", region: "Assam" },
  },
];
