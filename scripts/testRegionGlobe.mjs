import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { regionGlobeMarkers } from "../src/lib/regionGlobeMarkers.js";
import { overviewMapRegions } from "../src/lib/overviewMapRegions.js";

assert.deepEqual(
  regionGlobeMarkers.map(({ name, lat, lng }) => [name, lat, lng]),
  [
    ["Niño-3.4", 0, -145],
    ["Rajasthan", 26.5, 73.5],
    ["Assam", 26, 92.5],
  ],
  "The globe must contain exactly the three specified reference markers",
);

assert.deepEqual(
  regionGlobeMarkers.map(({ name }) => overviewMapRegions.find((region) => region.name === name)?.selection),
  [
    { variable: "nino34" },
    { variable: "soil-moisture", region: "Rajasthan" },
    { variable: "soil-moisture", region: "Assam" },
  ],
  "Globe markers must reuse the Leaflet region-to-variable selections",
);

const overviewSource = readFileSync(new URL("../src/pages/OverviewPage.tsx", import.meta.url), "utf8");
const globeSource = readFileSync(new URL("../src/components/RegionGlobe.tsx", import.meta.url), "utf8");
const heroIndex = overviewSource.indexOf('className="overview-banner"');
const globeIndex = overviewSource.indexOf("<RegionGlobe");
const signalsIndex = overviewSource.indexOf('className="section-heading-row"');
const findingsIndex = overviewSource.indexOf('className="key-findings-section"');
const leafletIndex = overviewSource.indexOf("<InteractiveOverviewMap");

assert.ok(heroIndex >= 0 && heroIndex < globeIndex, "The globe must follow the complete hero banner");
assert.ok(globeIndex < signalsIndex, "The globe must precede Signals in this snapshot");
assert.ok(signalsIndex < findingsIndex && findingsIndex < leafletIndex, "Existing Overview content order must remain intact");
assert.ok(globeSource.includes("Reference globe — regions only, no data layer"), "The exact reference-only caption must be present");

console.log("Region globe markers, navigation mapping, placement, and caption verified.");
