import React from "react";
import { nino34, pacificRainfall, iod, monsoon2026 } from "../data/realData";
import { PacificSchematicMap } from "../components/PacificSchematicMap";
import { MetricCard } from "../components/MetricCard";
import { ScientificCaveat } from "../components/ScientificCaveat";

export const OverviewPage: React.FC = () => {
  return (
    <section>
      <h2 style={{ fontSize: "24px", color: "#f3f4f6", margin: "0 0 16px 0" }}>
        What is changing in the Pacific — and why it matters for India
      </h2>

      {/* Map box is a geographic reference, not an anomaly map */}
      <PacificSchematicMap />

      {/* 4 headline metric cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        <MetricCard
          title="Niño-3.4 SST Anomaly"
          headline={`+${nino34.oct2026Monthly}°C`}
          headlineColor="#f87171"
          badge="Monthly Anomaly (Not ONI)"
          badgeColor="#7f1d1d"
          description={`Niño-3.4, Oct 2026 monthly (Sep: +${nino34.sep2026Monthly}°C). Labelled strictly as monthly Niño-3.4 SST anomalies, NOT ONI.`}
          baseline={`${nino34.baseline} (${nino34.product})`}
          source={nino34.source}
        />

        <MetricCard
          title="Pacific Rainfall Anomaly"
          headline={`+${pacificRainfall.sep2026Anomaly} mm/day`}
          headlineColor="#60a5fa"
          badge="GPM IMERG v07 Late"
          badgeColor="#1e3a8a"
          description={`Pacific rainfall anomaly, Sep 2026: ${pacificRainfall.sep2026Mean} mm/day vs ${pacificRainfall.sepBaselineMean} mm/day baseline (Total: ${pacificRainfall.sep2026TotalMm} mm over 30 days).`}
          baseline="0.67 mm/day (570 September daily obs, 2001–2019)"
          source={pacificRainfall.source}
        />

        <MetricCard
          title="Indian Ocean Dipole (IOD)"
          headline="IOD Split"
          headlineColor="#fbbf24"
          badge="Dual Agency View"
          badgeColor="#78350f"
          description={`BoM positive +${iod.bomWeeklyTo8Nov2026}°C (week to 8 Nov) vs IMD: ${iod.imdStatus31Oct2026}. Different methods/dates; neither agency is wrong.`}
          baseline="Agency standard climatological thresholds"
          source={iod.source}
        />

        <MetricCard
          title="Southwest Monsoon 2026"
          headline={`${monsoon2026.percentOfLPA}% of LPA`}
          headlineColor="#34d399"
          badge={monsoon2026.rank}
          badgeColor="#064e3b"
          description={`Southwest monsoon 2026: ${monsoon2026.rainfallMm} mm vs ${monsoon2026.lpaMm} mm LPA. Monthly: Jun 65%, Jul 101%, Aug 84%, Sep 92% of LPA.`}
          baseline="868.6 mm LPA (1971–2020)"
          source={monsoon2026.source}
        />
      </div>

      <ScientificCaveat significanceNotAssessed={true}>
        Significance: not assessed for these headline values — they are observed values against their stated baselines, not a statistical test. Correlation does not prove causation.
      </ScientificCaveat>
    </section>
  );
};
