// Centralised pricing data, aligned with homepage PricingPreview
export const PRICING = {
  WALK_30: 14.95,
  WALK_60: 24.95,
  PUPPY_VISIT: 9,
  BUNDLE5_60: 111.95, // ~10% off vs singles (homepage value)
  BUNDLE10_60: 249.5, // ~15% off vs singles (homepage value)
  SECOND_DOG_DISCOUNT_APPROX: 15, // % off first-dog rate (same household)
} as const;

export type Pricing = typeof PRICING;
