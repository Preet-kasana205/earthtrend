import "../traceability.css";
import "../traceability.css";
import { traceabilityData } from "../data/traceabilityData";

export function SourceTraceabilityTable() {
  return (
    <div className="trace-table-scroll" role="region" aria-label="Source to visualization traceability matrix" tabIndex={0}>
      <table className="trace-table">
        <thead><tr><th>Displayed value</th><th>Variable · source agency</th><th>Domain · period</th><th>Baseline · calculation</th><th>Destination</th><th>Status</th></tr></thead>
        <tbody>
          {traceabilityData.map((item, index) => {
            const tone = item.verificationStatus === "Verified" ? "verified" : item.verificationStatus === "Caution / Caveated" ? "caution" : item.verificationStatus === "Pattern-Only" ? "pattern" : "forecast";
            return (
              <tr key={`${item.variableName}-${index}`}>
                <td className="trace-value">{item.displayedValue}</td>
                <td><strong>{item.variableName}</strong><span>{item.sourceAgency} · {item.productDataset}</span></td>
                <td><span>{item.spatialDomain}</span><span>{item.temporalPeriod}</span></td>
                <td><span><b>Baseline:</b> {item.climatologicalBaseline}</span><span>{item.processingCalculation}</span></td>
                <td className="trace-destination">{item.destinationComponent}</td>
                <td><span className={`trace-status ${tone}`}>{item.verificationStatus}</span></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

