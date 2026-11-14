export interface TrendObservation {
  date: string;
  value: number;
}

export interface TrendAnalysis {
  senSlopePerYear: number;
  mannKendallS: number;
  zScore: number;
  mannKendallP: number;
  significanceLabel: string;
}

export interface TrendDirectionLabels {
  positive: string;
  negative: string;
}

const DEFAULT_DIRECTION_LABELS: TrendDirectionLabels = {
  positive: "wetting",
  negative: "drying",
};

const DAYS_PER_YEAR = 365.2425;
const SIGNIFICANCE_LEVEL = 0.05;

function erfc(value: number): number {
  const absolute = Math.abs(value);
  const t = 1 / (1 + 0.5 * absolute);
  const approximation = t * Math.exp(
    -absolute * absolute - 1.26551223 + t * (
      1.00002368 + t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 +
        t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 +
          t * (-0.82215223 + t * 0.17087277)))))))
    ),
  );
  return value >= 0 ? approximation : 2 - approximation;
}

function observationTime(date: string): number {
  const match = /^(\d{4})-(\d{2})$/.exec(date);
  if (!match) throw new Error(`Expected YYYY-MM observation date, got ${date}`);
  return Date.UTC(Number(match[1]), Number(match[2]) - 1, 1);
}

function median(values: number[]): number {
  values.sort((left, right) => left - right);
  const middle = Math.floor(values.length / 2);
  return values.length % 2 === 0
    ? (values[middle - 1] + values[middle]) / 2
    : values[middle];
}

function mannKendall(values: number[]): { s: number; zScore: number; p: number } {
  const n = values.length;
  let s = 0;
  for (let left = 0; left < n - 1; left += 1) {
    for (let right = left + 1; right < n; right += 1) {
      s += Math.sign(values[right] - values[left]);
    }
  }

  const ties = new Map<number, number>();
  for (const value of values) ties.set(value, (ties.get(value) ?? 0) + 1);
  const tieCorrection = [...ties.values()].reduce(
    (total, count) => total + count * (count - 1) * (2 * count + 5),
    0,
  );
  const variance = (n * (n - 1) * (2 * n + 5) - tieCorrection) / 18;
  if (variance === 0 || s === 0) return { s, zScore: 0, p: 1 };

  const zScore = (s - Math.sign(s)) / Math.sqrt(variance);
  return { s, zScore, p: erfc(Math.abs(zScore) / Math.SQRT2) };
}

/**
 * Computes a Theil-Sen slope and a two-sided, tie-corrected, continuity-corrected
 * standard Mann-Kendall test over the ordered observations. This does not apply
 * seasonal stratification, serial-correlation correction, or causal attribution.
 */
export function analyzeTrend(
  observations: readonly TrendObservation[],
  directionLabels: TrendDirectionLabels = DEFAULT_DIRECTION_LABELS,
): TrendAnalysis {
  if (observations.length < 2) throw new Error("At least two observations are required to estimate a trend");
  const times = observations.map((observation) => observationTime(observation.date));
  const values = observations.map((observation) => observation.value);
  if (values.some((value) => !Number.isFinite(value))) throw new Error("Trend observations must be finite numbers");
  for (let index = 1; index < times.length; index += 1) {
    if (times[index] <= times[index - 1]) throw new Error("Trend observations must be in strictly increasing date order");
  }

  const slopes: number[] = [];
  for (let left = 0; left < values.length - 1; left += 1) {
    for (let right = left + 1; right < values.length; right += 1) {
      const years = (times[right] - times[left]) / (DAYS_PER_YEAR * 24 * 60 * 60 * 1000);
      slopes.push((values[right] - values[left]) / years);
    }
  }

  const { s, zScore, p } = mannKendall(values);
  const senSlopePerYear = median(slopes);
  const direction = senSlopePerYear > 0
    ? directionLabels.positive
    : senSlopePerYear < 0
      ? directionLabels.negative
      : null;
  const significanceLabel = direction === null
    ? "No significant trend"
    : `${p < SIGNIFICANCE_LEVEL ? "Significant" : "Not significant"} ${direction}`;

  return { senSlopePerYear, mannKendallS: s, zScore, mannKendallP: p, significanceLabel };
}
