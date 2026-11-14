# EarthTrend Platform Refresh Implementation Plan

> **For agentic workers:** Execute task-by-task; verify the data and each page before committing its changes.

**Goal:** Rebuild the seven-page EarthTrend dashboard in the designated repository with the requested visual system while preserving original raw observations and all scientific caveats.

**Architecture:** Keep the existing React/TypeScript/Vite app and page content, add Tailwind v4 and shared navigation/stat/chart components, and extract the original CSV/XLSX series reproducibly into typed TypeScript modules. All pages remain static and use only verified project data.

**Tech Stack:** React 19, TypeScript, Vite 8, Tailwind CSS v4 via `@tailwindcss/vite`, Recharts, lucide-react.

**Spec:** User's request in the active Codex conversation.

## Global Constraints

- Edit only `C:\Users\Lenovo\Desktop\earthtrend`; do not touch the old visual-reference repository.
- Preserve every original raw file byte-for-byte and keep all series sourced from those files.
- Keep ORAS5 units unconfirmed; keep monthly Niño-3.4 SST anomalies separate from ONI; label significance as not assessed; keep SSH pattern-only and Phase 3 educational.
- Use a map-first Overview, chart-led Trend Explorer, table-led Datasets page, and explanation-led Methodology page.
- Run `npm run build`, `npm test`, and available TypeScript/lint checks; commit and push only authored changes, then deploy after a passing production build.

## Review Focus

- ORAS5 month gaps, duplicate dates, nonnumeric/missing values, or wrong coordinates: raw-data validator checks all 815 rows.
- Rainfall extraction rounding or date drift: validator compares exact 30-day series and independently recomputes the 570-value September baseline.
- Charts implying unsupported units or significance: page copy and chart metadata retain source, period, units, caveat, and explicit significance language.
- Narrow screen/collapsed navigation: verify responsive shell and all seven routes in browser.
- Existing unrelated edits: stage only files authored for this work.

### Task 1: Raw-data extraction and verification

**Files:** `scripts/extractChartData.py`, `scripts/validateData.mjs`, `src/data/pacificDailyRainfall2026.ts`, create `src/data/oras5ThermoclineData.ts`, update the ORAS5 import compatibility module if needed.

- Add a reproducible extractor from the preserved NASA CSVs and ORAS5 workbook.
- Assert 30 September 2026 rainfall records, total 132.9762 mm and mean 4.4325 mm/day; assert 570 baseline September records, mean 0.6733 mm/day.
- Assert 815 unique, continuous monthly ORAS5 records from Jan 1958 through Nov 2025, finite numeric values, no missing rows, all at 0°N, 110°W, and no inferred units.
- Regenerate typed modules and run the validation scripts before any chart conversion.

### Task 2: Shared shell and visual system

**Files:** `package.json`, `package-lock.json`, `vite.config.ts`, `index.html`, `src/index.css`, `src/App.css`, `src/App.tsx`, new shared components.

- Install Tailwind v4/Vite, Recharts, and lucide-react.
- Build collapsible icon sidebar with seven numbered badges, sticky breadcrumb/title top bar, responsive max-width content, and footer.
- Define requested dark palette and Inter/JetBrains Mono font stacks; build reusable StatCard with trend, badge, and hover border.

### Task 3: Overview

**Files:** `src/pages/OverviewPage.tsx`, map and shared components as required.

- Preserve the map as the primary visualization, integrate the four existing verified headline metrics, and add the NASA Space Apps banner and two in-app CTAs.
- Verify layout and content; commit as `feat: rebuild map-first overview`.

### Tasks 4–9: Remaining pages (one page per task)

**Files:** `src/pages/TrendExplorerPage.tsx`, `RelationshipsPage.tsx`, `IndiaMonsoonPage.tsx`, `DatasetsPage.tsx`, `MethodologyPage.tsx`, `Phase3Page.tsx`, and reusable Recharts components.

- Trend Explorer is chart-led with Recharts Line/Bar charts, full unsampled series, gridlines and tooltips; every chart identifies source, period, units and caveat.
- Relationships preserves empirical co-occurrences and agency divergence without unsupported statistical claims.
- India Monsoon uses verified four-month LPA percentages and preserves spatial/temporal distinction.
- Datasets leads with the provenance table and preserved raw-file manifest.
- Methodology leads with the actual rainfall calculation and explicit safeguards.
- Phase 3 remains educational preparedness, not prediction.
- Run `npm run build` and relevant validation for each page before its meaningful commit.

### Task 10: README and delivery

**Files:** `README.md`, only if needed deployment configuration.

- Document purpose, architecture, datasets, sources, methods, setup, actual AI tools disclosed in the existing project materials, and exact event dates.
- Run production build, `npm test`, TypeScript and lint checks; review status/diff; commit only authored files; push; deploy to Vercel after build passes; verify live deployment.
