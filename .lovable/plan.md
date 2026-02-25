

# Implement Remaining Decks + Sunriver Page Image Replacements

## Overview

Three images from the revision document can be downloaded and implemented right now. These are the only remaining website edit specifications that are not blocked on client uploads or missing information.

## Items to Implement

### 1. Decks Page Hero Image (Section 1)
- **Source:** `https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698ce9167f6dcf1d3024e602.jpg`
- **Target:** `src/assets/decks/decks-hero-header.jpg` (replace existing)
- **File:** `src/pages/Decks.tsx` line 90 — already references `decksHeroHeader`, so only the image file needs replacing

### 2. Sunriver Page Hero Image (Section 1)
- **Source:** Same URL as above OR the Sunriver-specific URL from the doc: `https://drive.usercontent.google.com/u/0/uc?id=1m5J7c20l5zN9JJmv6lHSveBat_N8yr3u&export=download`
- **Target:** `src/assets/decks/sunriver-hero-header.jpg` (replace existing)
- **File:** `src/pages/SunriverDeckBuilder.tsx` line 11/18 — already references `sunriverHeroHeader`

### 3. Sunriver Page Section 2 Image (Why Specialized Construction)
- **Source:** `https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698cd5a33fdd0e0053bc22b8.jpg`
- **Target:** `src/assets/decks/sunriver-section-2.jpg` (replace existing)
- **File:** `src/pages/SunriverDeckBuilder.tsx` line 12 — already references `sunriverSection2`

## Implementation Steps

1. Fetch each image URL to verify accessibility
2. Download and copy each image to the correct asset path (replacing existing files)
3. No code changes needed in TSX files since the import paths already reference these filenames

## What Stays Unchanged
- All text content on Decks and Sunriver pages (already complete)
- All other pages and sections
- All import paths in components

## Still Waiting (Not Part of This Plan)
- Homepage service card photos (Deck + Remodel) — waiting on your uploads
- Services page Deck photo — same as above
- Meta Pixel ID — blank in client doc
- Sunriver page S7 image — client getting new photo in a few weeks
- Decks page S2 image — client sourcing photo of Cindy's deck
- Contact form CRM/email integration — needs decision
- About page brand logos — client commentary about wanting real entity logos

