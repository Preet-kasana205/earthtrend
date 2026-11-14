import { useState } from "react";
import { OverviewPage } from "./pages/OverviewPage";
import { TrendExplorerPage } from "./pages/TrendExplorerPage";
import { RelationshipsPage } from "./pages/RelationshipsPage";
import { IndiaMonsoonPage } from "./pages/IndiaMonsoonPage";
import { DatasetsPage } from "./pages/DatasetsPage";
import { MethodologyPage } from "./pages/MethodologyPage";
import { Phase3Page } from "./pages/Phase3Page";

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
    <div style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", background: "#0b1220", color: "#e5e7eb", minHeight: "100vh", textAlign: "left" }}>
      <header style={{ padding: "24px 32px", borderBottom: "1px solid #1f2937", background: "#0e1726" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <h1 style={{ margin: 0, fontSize: "28px", color: "#f9fafb", fontWeight: 700 }}>
              🌍 EarthTrend — Earth System Trend Detective
            </h1>
            <span style={{ fontSize: "12px", background: "rgba(37, 99, 235, 0.2)", border: "1px solid #2563eb", color: "#93c5fd", padding: "4px 10px", borderRadius: "9999px", fontWeight: 600 }}>
              Verified 2026 Data Only
            </span>
          </div>
          <p style={{ color: "#9ca3af", margin: "8px 0 0", fontSize: "14px" }}>
            Built during NASA Space Apps Challenge, 14–15 Nov 2026. Real 2026 data only — source, period and caveats on every finding.
          </p>
        </div>
      </header>

      {/* Primary Navigation */}
      <nav style={{ background: "#0d1527", borderBottom: "1px solid #1f2937" }}>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", padding: "14px 32px", maxWidth: 1100, margin: "0 auto" }}>
          {pages.map((p) => (
            <button
              key={p.id}
              onClick={() => setPage(p.id)}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: page === p.id ? "1px solid #3b82f6" : "1px solid #374151",
                background: page === p.id ? "#2563eb" : "#111827",
                color: page === p.id ? "#ffffff" : "#d1d5db",
                fontWeight: page === p.id ? 600 : 500,
                fontSize: "14px",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Page Body */}
      <main style={{ padding: "24px 32px 48px", maxWidth: 1100, margin: "0 auto", boxSizing: "border-box" }}>
        {page === "overview" && <OverviewPage />}
        {page === "trend" && <TrendExplorerPage />}
        {page === "relationship" && <RelationshipsPage />}
        {page === "monsoon" && <IndiaMonsoonPage />}
        {page === "datasets" && <DatasetsPage />}
        {page === "methodology" && <MethodologyPage />}
        {page === "phase3" && <Phase3Page />}
      </main>

      {/* Footer */}
      <footer style={{ padding: "20px 32px", borderTop: "1px solid #1f2937", background: "#0e1726", color: "#9ca3af", fontSize: "13px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <span>
            EarthTrend · NASA Space Apps 2026 · Built 14–15 Nov 2026
          </span>
          <span>
            Sources: NOAA CPC, NASA Giovanni (GPM IMERG), BoM, IMD, ORAS5, NASA Sentinel-6
          </span>
        </div>
      </footer>
    </div>
  );
}
