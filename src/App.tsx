import { useState } from "react";
import { nino34, pacificRainfall, iod, monsoon2026, thermocline, ssh } from "./data/realData";

type Page = "overview" | "trend" | "relationship" | "monsoon" | "datasets" | "methodology" | "phase3";

const pages: { id: Page; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "trend", label: "Trend Explorer" },
  { id: "relationship", label: "Relationships" },
  { id: "monsoon", label: "India Monsoon" },
  { id: "datasets", label: "Datasets" },
  { id: "methodology", label: "Methodology" },
  { id: "phase3", label: "Phase 3: Preparedness" },
];

export default function App() {
  const [page, setPage] = useState<Page>("overview");
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#0b1220", color: "#e5e7eb", minHeight: "100vh" }}>
      <header style={{ padding: "20px 32px", borderBottom: "1px solid #1f2937" }}>
        <h1 style={{ margin: 0, fontSize: 28 }}>🌍 EarthTrend — Earth System Trend Detective</h1>
        <p style={{ color: "#9ca3af", margin: "6px 0 0" }}>Built during NASA Space Apps, 14–15 Nov 2026. Real 2026 data only — source, period and caveats on every finding.</p>
      </header>
      <nav style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: "16px 32px" }}>
        {pages.map((p) => (
          <button key={p.id} onClick={() => setPage(p.id)}
            style={{ padding: "8px 14px", borderRadius: 8, border: "1px solid #374151", background: page === p.id ? "#2563eb" : "#111827", color: "#fff", cursor: "pointer" }}>
            {p.label}
          </button>
        ))}
      </nav>
      <main style={{ padding: "8px 32px 48px", maxWidth: 1100 }}>
        {page === "overview" && (
          <section>
            <h2>What is changing in the Pacific — and why it matters for India</h2>
            <svg viewBox="0 0 600 260" width="100%" style={{ background: "#0e2a47", borderRadius: 12 }}>
              <text x="20" y="30" fill="#fff" fontSize="16">Pacific Ocean — schematic map</text>
              <rect x="120" y="80" width="360" height="80" fill="none" stroke="#f59e0b" strokeWidth="3" />
              <text x="130" y="70" fill="#fbbf24" fontSize="14">Niño-3.4 box: 5°N–5°S, 170°W–120°W</text>
              <text x="20" y="200" fill="#93c5fd">East: warmer, higher sea level → West: cooler, lower</text>
              <text x="20" y="230" fill="#9ca3af" fontSize="13">Schematic reference only — not an anomaly map. No contours or fields.</text>
            </svg>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginTop: 16 }}>
              <div style={{ background: "#111827", padding: 16, borderRadius: 12 }}>
                <b style={{ fontSize: 26, color: "#f87171" }}>+{nino34.oct2026Monthly}°C</b>
                <p>Niño-3.4, Oct 2026 monthly (Sep: +{nino34.sep2026Monthly}°C). {nino34.source}</p>
              </div>
              <div style={{ background: "#111827", padding: 16, borderRadius: 12 }}>
                <b style={{ fontSize: 26, color: "#60a5fa" }}>+{pacificRainfall.sep2026Anomaly} mm/day</b>
                <p>Pacific rainfall anomaly, Sep 2026: {pacificRainfall.sep2026Mean} vs {pacificRainfall.sepBaselineMean} mm/day baseline. {pacificRainfall.source}</p>
              </div>
              <div style={{ background: "#111827", padding: 16, borderRadius: 12 }}>
                <b style={{ fontSize: 26, color: "#fbbf24" }}>IOD split</b>
                <p>BoM positive +{iod.bomWeeklyTo8Nov2026}°C (week to 8 Nov) vs IMD: {iod.imdStatus31Oct2026}. {iod.source}</p>
              </div>
              <div style={{ background: "#111827", padding: 16, borderRadius: 12 }}>
                <b style={{ fontSize: 26, color: "#34d399" }}>{monsoon2026.percentOfLPA}% of LPA</b>
                <p>Southwest monsoon 2026: {monsoon2026.rainfallMm} mm vs {monsoon2026.lpaMm} mm LPA. {monsoon2026.source}</p>
              </div>
            </div>
            <p style={{ color: "#9ca3af" }}>Significance: not assessed for these headline values — they are observed values against their stated baselines, not a statistical test. Correlation does not prove causation.</p>
          </section>
        )}
        {page === "trend" && (
          <section>
            <h2>Trend Explorer</h2>
            <p><b>Sea-surface temperature:</b> Niño-3.4 rose from +{nino34.sep2026Monthly}°C in Sep 2026 to +{nino34.oct2026Monthly}°C in Oct 2026 (NOAA CPC, relative index, 1991–2020 baseline). Strong-to-very-strong El Niño likely through Jan–Mar 2027 — forecast, not observation.</p>
            <p><b>Pacific rainfall:</b> Sep 2026 mean {pacificRainfall.sep2026Mean} mm/day against a Sep 2001–2019 mean of {pacificRainfall.sepBaselineMean} mm/day — anomaly +{pacificRainfall.sep2026Anomaly} mm/day. September is normally the driest month in this box, so quote the mm/day, not just the %.</p>
            <p><b>Thermocline:</b> {thermocline.label} {thermocline.cpcOct2026Update}. Source: {thermocline.source}</p>
            <p><b>Sea level:</b> {ssh.label} Source: {ssh.source}</p>
            <p style={{ color: "#f59e0b" }}>Where no real dataset or API is behind a chart, this tool shows “Data unavailable” — it never invents a series.</p>
          </section>
        )}
        {page === "relationship" && (
          <section>
            <h2>How the variables relate</h2>
            <p>Warmer eastern Pacific SST, a deeper thermocline in the east, and much higher central-Pacific rainfall all point the same way in late 2026 — a strong El Niño. These are observed together; that does not prove one caused the other.</p>
            <p>For India, the IOD split matters: BoM says positive IOD, IMD says neutral. A positive IOD is <b>not</b> a blanket “good for India” and does not explain Assam / northern / coastal flooding on its own.</p>
            <p>Significance: not assessed — no p-values are shown because no significance test was run on these headline values.</p>
          </section>
        )}
        {page === "monsoon" && (
          <section>
            <h2>India Monsoon 2026</h2>
            <p>Seasonal rainfall <b>{monsoon2026.rainfallMm} mm = {monsoon2026.percentOfLPA}% of the {monsoon2026.lpaMm} mm long-period average</b> — 4th lowest since 2001. Monthly: June 65%, July 101%, August 84%, September 92% of LPA.</p>
            <p>East and Northeast India were driest since 1901 on seasonal totals. Keep seasonal totals separate from individual flood events — a dry season can still contain floods.</p>
            <p>IMD forecast below-normal November rainfall for the south peninsula and the country as a whole.</p>
          </section>
        )}
        {page === "datasets" && (
          <section>
            <h2>Datasets &amp; sources</h2>
            <ul>
              <li>Niño-3.4 SST — {nino34.source}</li>
              <li>Pacific rainfall — {pacificRainfall.source}</li>
              <li>IOD — {iod.source}</li>
              <li>Monsoon — {monsoon2026.source}</li>
              <li>Thermocline — {thermocline.source}</li>
              <li>Sea level — {ssh.source}</li>
            </ul>
            <p>Data frozen 13 Nov 2026. No 2026 ORAS5 thermocline data exists; the CPC Oct 2026 update is a separate contextual panel, not an extension of that series.</p>
          </section>
        )}
        {page === "methodology" && (
          <section>
            <h2>Methodology &amp; caveats</h2>
            <ul>
              <li>Every finding carries units, scale, source, period and caveats.</li>
              <li>Baselines are stated per value (e.g. 1991–2020 for Niño-3.4; 2001–2019 for September rainfall).</li>
              <li>Weekly and monthly values are never mixed. Different agencies (BoM vs IMD) are shown separately, neither is called wrong.</li>
              <li>SSH is pattern-only. Thermocline is a single point (0°N, 110°W), metres with units unconfirmed in the file header.</li>
              <li>AI tools used: Muse, Google AI Studio, Codex (free), Antigravity. All code in this repo was written / regenerated during 14–15 Nov 2026.</li>
            </ul>
          </section>
        )}
        {page === "phase3" && (
          <section>
            <h2>Phase 3: Disaster Resilience Model — Prepared. Not Panicked.</h2>
            <p>An educational preparedness programme for school and college students in India. It is <b>not</b> a predictive model — no hazard probabilities, no invented safety advice. Official guidance first: NDMA, IMD, Indian Red Cross.</p>
            <p><b>Why it matters:</b> in Jan–Sep 2026, India faced extreme weather on 251 of 273 days, with 3,220 lives lost (CSE, Jan–Sep 2026). Only about 10% of people act calmly in a disaster (Leach 10-80-10) — be one of them.</p>
            <p><b>Five modules:</b> Physics (floods, earthquakes) · Biology (first aid, heatstroke) · Psychology (freeze vs act) · Geography (your district risk map) · Ethics (verify before you forward).</p>
            <p>🎥 Phase 3 training video (60 sec, Pictory + Steve AI versions) — link the MP4 from Google Drive here, do not push the video file to GitHub.</p>
            <p>Correct figures: 128,334 houses damaged Jan–Sep 2026; Cyclone Arnab — 9 in Andhra Pradesh, 26+ total; Cyclone Murasu — 17+ deaths, ≥$203m damage, landfall 2–3 Nov near Ongole.</p>
          </section>
        )}
      </main>
      <footer style={{ padding: "16px 32px", borderTop: "1px solid #1f2937", color: "#9ca3af" }}>
        EarthTrend · NASA Space Apps 2026 · Built 14–15 Nov 2026 · Sources: NOAA CPC, NASA Giovanni (GPM IMERG), BoM, IMD, ORAS5, NASA Sentinel-6
      </footer>
    </div>
  );
}
