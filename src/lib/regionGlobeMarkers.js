/** @typedef {"Niño-3.4" | "Rajasthan" | "Assam"} RegionGlobeMarkerName */
/** @typedef {{readonly name: RegionGlobeMarkerName, readonly lat: number, readonly lng: number}} RegionGlobeMarker */

/** @type {readonly RegionGlobeMarker[]} */
export const regionGlobeMarkers = Object.freeze([
  Object.freeze({ name: "Niño-3.4", lat: 0, lng: -145 }),
  Object.freeze({ name: "Rajasthan", lat: 26.5, lng: 73.5 }),
  Object.freeze({ name: "Assam", lat: 26, lng: 92.5 }),
]);
