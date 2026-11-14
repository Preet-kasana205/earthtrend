import type { TraceabilityItem } from "./traceabilityData";

export const modisAquaTraceabilityData: TraceabilityItem = {
  displayedValue: "281 monthly observations · absolute SST",
  variableName: "Sea Surface Temperature at 11 microns (Day) · ABSOLUTE SST",
  sourceAgency: "NASA Giovanni",
  productDataset: "MODISA_L3m_SST_Monthly_4km_R2019_0_sst",
  spatialDomain: "Niño-3.4 box · 170°W–120°W, 5°S–5°N",
  temporalPeriod: "August 2002–December 2025 · 281 monthly observations",
  climatologicalBaseline: "None · absolute SST in °C, not an anomaly",
  processingCalculation: "Original monthly source dates are normalized to YYYY-MM. Theil–Sen slope and two-sided Mann–Kendall test; no seasonal or serial-autocorrelation correction.",
  destinationComponent: "Trend Explorer · MODIS Aqua absolute SST selector and separate CPC anomaly panel",
  verificationStatus: "Caution / Caveated",
};
