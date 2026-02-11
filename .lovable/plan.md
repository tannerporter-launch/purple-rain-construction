

# Add Bend Chamber of Commerce Member Badge

## What Changes

Add "Bend Chamber of Commerce Member" as a trust credential on the homepage, consistent with how CCB, BBB, and COBA are already displayed.

## Implementation

### File: `src/pages/Index.tsx`

**Update the Trust Badges row (Section: Quick Trust Indicators, lines 83-109)**

Add "Bend Chamber of Commerce Member" to one of the existing trust badges. The most logical placement is to update the "Family-Owned & Local" badge description from "Central Oregon Based" to "Central Oregon Based | Bend Chamber Member", or add a 5th badge.

Since the current grid is `grid-cols-2 md:grid-cols-4` with exactly 4 items, the cleanest approach is to append the Bend Chamber mention to the existing "Family-Owned & Local" badge description:

- Change the `description` prop of the second TrustBadge from `"Central Oregon Based"` to `"Central Oregon Based · Bend Chamber Member"`

This keeps the 4-column grid intact, adds the credential prominently, and requires a single line change.

### What stays unchanged
- All other TrustBadge items (Licensed/Bonded/Insured, Decks/Remodels/Snow, Transparent Estimates)
- Grid layout, spacing, styling, and responsiveness
- All other homepage sections
- Footer credentials display

## Waiting on You (Separate from This Plan)

Once you upload the 3 replacement photos (Deck service card, Remodel service card, Sunriver section), I will swap them in immediately — no other changes needed, just image source replacements.

