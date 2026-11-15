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
const overviewStyles = readFileSync(new URL("../src/overview.css", import.meta.url), "utf8");
const heroIndex = overviewSource.indexOf('className="overview-banner"');
const globeIndex = overviewSource.indexOf("<RegionGlobe");
const rightColumnIndex = overviewSource.indexOf('className="overview-right-snapshot-column"');
const ninoCardIndex = overviewSource.indexOf('title="Monthly Niño-3.4 SST anomaly"');
const rainfallCardIndex = overviewSource.indexOf('title="Pacific rainfall anomaly"');
const bottomCardsIndex = overviewSource.indexOf('className="overview-bottom-snapshot-grid"');
const iodCardIndex = overviewSource.indexOf('title="Indian Ocean Dipole"');
const monsoonCardIndex = overviewSource.indexOf('title="Southwest monsoon"');
const findingsIndex = overviewSource.indexOf('className="key-findings-section"');
const leafletIndex = overviewSource.indexOf("<InteractiveOverviewMap");

assert.ok(heroIndex >= 0 && heroIndex < globeIndex, "The globe must follow the complete hero banner");
assert.ok(globeIndex < rightColumnIndex && rightColumnIndex < ninoCardIndex && ninoCardIndex < rainfallCardIndex, "The first two cards must be vertically stacked beside the globe");
assert.ok(rainfallCardIndex < bottomCardsIndex && bottomCardsIndex < iodCardIndex && iodCardIndex < monsoonCardIndex, "IOD and monsoon cards must follow beneath the globe in order");
assert.ok(monsoonCardIndex < findingsIndex && findingsIndex < leafletIndex, "Key findings and Leaflet must follow the composition unchanged");
assert.ok(globeSource.includes("Reference globe — regions only, no data layer"), "The exact reference-only caption must be present");
assert.ok(globeSource.includes("autoRotateSpeed = 1.8"), "Globe rotation must use the requested visible speed");
assert.ok(globeSource.includes("lat: 20, lng: 90, altitude: 2.0"), "The globe must start centered on India");
assert.ok(globeSource.includes("setInterval"), "Globe controls must be retried until available");
assert.ok(globeSource.includes("console.error"), "Globe initialization failures must be logged");
assert.ok(!globeSource.includes("GLOBE_READY_TIMEOUT"), "Control readiness must not hide the globe after a timeout");
assert.ok(globeSource.includes("labelsData={labelsData}"), "Readable region labels must be rendered on the globe");

assert.equal((overviewSource.match(/<StatCard\b/g) ?? []).length, 4, "Snapshot cards must be rendered once each");
assert.ok(overviewStyles.includes("grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr)"), "Desktop Overview row must position globe and cards side by side");
assert.ok(overviewStyles.includes("grid-template-columns:repeat(2,minmax(0,1fr))"), "The bottom two cards must share the left-column width equally");
assert.ok(overviewStyles.includes("grid-template-columns:minmax(0,1fr)"), "Mobile Overview composition must collapse without horizontal overflow");
assert.ok(overviewStyles.includes("height:380px"), "Desktop globe height must be about 380px");
assert.ok(overviewStyles.includes("height:320px"), "Mobile globe height must remain about 320px");

console.log("Region globe markers, navigation mapping, placement, and caption verified.");
