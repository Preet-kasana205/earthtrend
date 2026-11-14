export type OverviewMapRegionName = "Niño-3.4" | "Rajasthan" | "Assam";

export type TrendSelection =
  | { variable: "nino34" }
  | { variable: "soil-moisture"; region: "Rajasthan" | "Assam" };

export interface OverviewMapRegion {
  name: OverviewMapRegionName;
  bounds: [[number, number], [number, number]];
  selection: TrendSelection;
}

export const overviewMapRegions: OverviewMapRegion[];
