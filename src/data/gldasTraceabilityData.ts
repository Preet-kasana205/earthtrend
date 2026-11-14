import type { TraceabilityItem } from "./traceabilityData.ts";

export const gldasTraceabilityData: TraceabilityItem = {
  displayedValue: "2 regional monthly series · 312 observations each",
  variableName: "Soil moisture content, 0–10 cm",
  sourceAgency: "NASA Giovanni / GSFC",
  productDataset: "GLDAS Noah v2.1 monthly (GLDAS_NOAH025_M_2_1_SoilMoi0_10cm_inst)",
  spatialDomain: "Rajasthan (69°E–78°E, 23°N–30°N); Assam (89°E–96°E, 24°N–28°N)",
  temporalPeriod: "January 2000 – December 2025 (312 monthly observations per region)",
  climatologicalBaseline: "None; no climatological baseline applied",
  processingCalculation: "Theil–Sen slope and standard two-sided Mann–Kendall test; no seasonal or serial-autocorrelation adjustment",
  destinationComponent: "Trend Explorer · Soil moisture (NASA GLDAS) selector",
  verificationStatus: "Verified",
};
