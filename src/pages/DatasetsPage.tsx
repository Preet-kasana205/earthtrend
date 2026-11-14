import { Archive, ArrowDownToLine, FileSpreadsheet, FileText, FolderOpen } from "lucide-react";
import { SourceTraceabilityTable } from "../components/SourceTraceabilityTable";
import { ScientificCaveat } from "../components/ScientificCaveat";

const sourceFiles = [
  { name: "sep_26g4.areaAvgTimeSeries.GPM_3IMERGDL_07_precipitation.20260901-20260930.170W_5S_120W_5N.csv", kind: "NASA Giovanni CSV", description: "Daily GPM IMERG v07 precipitation · 1–30 September 2026 · 170°W–120°W, 5°S–5°N" },
  { name: "g4.areaAvgTimeSeries.GPM_3IMERGDL_07_precipitation.20010101-20200101.170W_5S_120W_5N.csv", kind: "NASA Giovanni CSV", description: "Daily GPM IMERG v07 precipitation · September baseline source spanning 2001–2019" },
  { name: "ORAS5_Thermocline_Cleaned_1958_2025_No_Readme.xlsx", kind: "ECMWF ORAS5 workbook", description: "Monthly depth of 20°C isotherm source values · 0°N, 110°W · Jan 1958–Nov 2025" },
  { name: "g4.areaAvgTimeSeries.GLDAS_NOAH025_M_2_1_SoilMoi0_10cm_inst.20000101-20251231.69E_23N_78E_30N.csv", kind: "NASA Giovanni CSV", description: "GLDAS Noah v2.1 soil moisture content · 0–10 cm · Rajasthan · Jan 2000–Dec 2025" },
  { name: "g4.areaAvgTimeSeries.GLDAS_NOAH025_M_2_1_SoilMoi0_10cm_inst.20000101-20251231.89E_24N_96E_28N.csv", kind: "NASA Giovanni CSV", description: "GLDAS Noah v2.1 soil moisture content · 0–10 cm · Assam · Jan 2000–Dec 2025" },
  { name: "g4.areaAvgTimeSeries.MODISA_L3m_SST_Monthly_4km_R2019_0_sst.20020701-20251231.170W_5S_120W_5N.csv", kind: "NASA Giovanni CSV", description: "MODIS Aqua daytime 11 μm absolute SST · Niño-3.4 box · Aug 2002–Dec 2025" },
];

export function DatasetsPage() {
  return (
    <section className="page-section datasets-page">
      <div className="page-intro">
        <div><div className="eyebrow">Sources · periods · methods</div><h2>Dataset provenance</h2><p>Trace each displayed value back to its agency, product, spatial domain, period, baseline, calculation, and destination.</p></div>
        <span className="badge"><span className="badge-dot" />Verified Source Data</span>
      </div>

      <section className="surface traceability-surface">
        <div className="traceability-heading"><div><div className="eyebrow">Source-to-visualization matrix</div><h3 className="surface-title">Evidence and lineage</h3></div><span className="trace-count mono">10 traced parameters</span></div>
        <SourceTraceabilityTable />
      </section>

      <section className="raw-manifest surface surface-pad">
        <div className="manifest-header"><div><div className="eyebrow">Preserved original inputs</div><h3 className="surface-title">Raw files</h3><p className="surface-subtitle">Original CSV and XLSX files remain unchanged in <code>src/data/raw/</code>.</p></div><div className="manifest-icon"><Archive size={19} /></div></div>
        <div className="raw-file-list">
          {sourceFiles.map((file) => {
            const Icon = file.kind === "ECMWF ORAS5 workbook" ? FileSpreadsheet : FileText;
            return <article key={file.name} className="raw-file-row"><span className="raw-file-icon"><Icon size={17} /></span><div className="raw-file-copy"><strong>{file.name}</strong><span>{file.description}</span></div><span className="raw-file-kind">{file.kind}</span></article>;
          })}
        </div>
        <div className="reproducibility-note"><FolderOpen size={15} /><span>Typed chart modules are reproducible from the preserved source files with <code>npm run data:extract</code>; <code>npm run data:check</code> validates the raw records and generated modules.</span><ArrowDownToLine size={15} /></div>
      </section>

      <div className="data-freeze-note"><strong>Data freeze · 13 November 2026</strong><span>This application serves the preserved, locally bundled observations and documented headline values. It does not use demo series or a backend feed.</span></div>
      <ScientificCaveat significanceNotAssessed={false}>Trend tests are shown for GLDAS, ORAS5, MODIS Aqua absolute SST, and the 19 annual September baseline means. Significance is not assessed for the two-month CPC Niño-3.4 anomaly record or the single-season monsoon percentages.</ScientificCaveat>
    </section>
  );
}


