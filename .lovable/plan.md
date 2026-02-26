

# Gallery Page Revision Plan

## Current State Assessment

After comparing the uploaded PDFs, screenshots, and the user's build directive against the current `Gallery.tsx`, the gallery is **95% aligned**. The structure, categories, filters, ordering, tags, Before/After sliders, and most content already match the requirements exactly.

## Changes Required (3 code changes + 1 image verification task)

### Change 1: Add 2-line clamp to description text
**File:** `src/pages/Gallery.tsx` line 443
**Current:** `<p className="text-sm text-muted-foreground mb-1">`
**Update to:** `<p className="text-sm text-muted-foreground mb-1 line-clamp-2">`

This ensures consistent caption height across all cards and prevents layout shift from long descriptions. The `line-clamp-2` utility is already available via Tailwind.

### Change 2: Update Item #20 (Full Bathroom Remodel) description
**File:** `src/pages/Gallery.tsx` line 274
**Current:** `"Full bathroom remodel featuring a freestanding tub with wall-mounted shower, custom vanity, patterned tile flooring, and modern fixtures."`
**Update to:** `"Freestanding tub with wall-mounted shower, custom vanity, patterned tile flooring, and modern fixtures."`

Removes the redundant "Full bathroom remodel featuring" prefix to match the user's directive caption format (materials/budget approach only, not repeating the title).

### Change 3: Update Item #23 (Custom Walk-In Shower) description
**File:** `src/pages/Gallery.tsx` line 301
**Current:** `"Jacuzzi tub removal, new tile shower, flooring, paint, and custom cabinetry."`
**Update to:** `"Jacuzzi tub removal, new tile shower, flooring, paint, and custom cabinetry (this is our most recently completed master bathroom remodel)."`

Adds the parenthetical suffix specified on PDF Revision 1.4 page 4.

### Change 4: Image Verification (Decision Needed)

The user's directive includes 27 Google Drive URLs for every gallery image. The current code uses local assets (most with `-new` suffixes) that were downloaded from GCS URLs in previous revision rounds. The images shown in the user's screenshots visually match the current live site.

**Two options:**
- **Option A (Recommended):** Confirm that the current local assets already match the Google Drive links (they appear to based on visual inspection of the screenshots). No image changes needed.
- **Option B:** Re-download all 27 images from Google Drive and replace every local asset. This is a significant effort and risks breaking existing references on other pages that share these assets (Decks.tsx, KitchenRemodels.tsx, BathroomRemodels.tsx, Remodeling.tsx all import some of the same files).

## What Stays Unchanged (Verified)

- Before/After slider section (structure, styling, copy, images, behavior)
- Hero section (title, subtitle, gradient background)
- Category filter buttons: All, Decks, Kitchen, Bathroom, Living / Feature, A-Frame Cabin Remodel, Full Home Remodel
- No Snow Removal filter or items (already absent)
- Grid layout (3-col desktop, 2-col tablet, 1-col mobile)
- Card structure (image, tags, title, description)
- All 26 gallery items with correct titles, tags, and ordering
- Lightbox functionality
- CTA section ("Like What You See?")
- Footer
- All global styles, typography, spacing, colors, shadows, border radius

## Implementation Sequence

1. Apply the 2-line clamp CSS class (1 line change)
2. Update Item #20 description (1 line change)
3. Update Item #23 description (1 line change)
4. Confirm image approach with user (Option A or B)

Total scope: 3 line-level edits in a single file, plus one decision point on images.

