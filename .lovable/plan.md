
# Integrate Remaining 6 Compressed Service/Hero Images

## Objective
Replace 6 existing service page images with the newly uploaded compressed versions by copying them to their asset directories and updating import statements in relevant pages.

## Part 1: Asset Mapping & File Placement

The 6 uploaded images will be placed in these locations with corresponding page updates:

| Uploaded File | Destination | Current Import File | Used In |
|---|---|---|---|
| `Sunriver_hero_header_copy.jpg` | `src/assets/decks/sunriver-hero-header.jpg` | Line 11: `SunriverDeckBuilder.tsx` | SunriverDeckBuilder, Index (Sunriver section) |
| `Decks_hero_header_copy.jpg` | `src/assets/decks/decks-hero-header.jpg` | Line 18: `Decks.tsx` | Decks hero section |
| `Sunriver_section_2_Why_Specialized_copy.jpg` | `src/assets/decks/sunriver-section-2.jpg` | Line 12: `SunriverDeckBuilder.tsx` | SunriverDeckBuilder section 2 (Why Specialized) |
| `Kitchen_stove_backsplash_copy.jpg` | `src/assets/remodels/oliviero/kitchen-stove-backsplash.jpg` | Line 14: `KitchenRemodels.tsx` | KitchenRemodels gallery |
| `Back_patio_outdoor_living_copy.jpg` | `src/assets/remodels/oliviero/side-patio-seating.jpg` | Line 29: `Remodeling.tsx` | Remodeling gallery (labeled as "back patio") |
| `Living_room_remodel_copy.jpg` | `src/assets/remodels/oliviero/living-room-farmhouse.jpg` | Line 26: `Remodeling.tsx` | Remodeling gallery, Gallery.tsx |

## Part 2: Technical Implementation

### Image Placement Strategy
- Copy 6 uploaded images to their permanent asset locations (replace existing files)
- No import statement changes needed — the files will overwrite existing assets with the same names
- All pages already reference these filenames and will automatically use the new versions

### Pages Affected
These pages import the hero/section images and will immediately show the updated versions:

1. **SunriverDeckBuilder.tsx** (lines 11, 12)
   - `sunriverHeroHeader` (line 11) → receives compressed Sunriver hero
   - `sunriverSection2` (line 12) → receives compressed Sunriver section 2

2. **Decks.tsx** (line 18)
   - `decksHeroHeader` (line 18) → receives compressed Decks hero

3. **KitchenRemodels.tsx** (line 14)
   - `olivieroKitchenStove` (line 14) → receives compressed kitchen backsplash

4. **Remodeling.tsx** (lines 26, 29)
   - `olivieroLivingRoom` (line 26) → receives compressed living room
   - `olivieroBackPatio` (line 29) → receives compressed back patio

5. **Index.tsx**
   - Sunriver hero is used in the Sunriver section of the homepage (imported from SunriverDeckBuilder.tsx)

### Why No Import Updates Needed
The existing asset files will be overwritten with the new compressed versions. Since the filenames and import paths remain unchanged, all references automatically point to the updated images.

## Part 3: File Operations

1. Copy 6 uploaded images to their target asset directories (overwrites)
2. No code changes required — imports remain identical
3. All pages automatically display the new images on next build/reload

## Expected Outcome

After completion:
- **Decks page** displays the new compressed hero header
- **SunriverDeckBuilder page** displays new compressed Sunriver hero and section 2 images
- **KitchenRemodels gallery** shows the new kitchen backsplash detail
- **Remodeling gallery** shows the new living room and back patio images
- **Gallery page** automatically shows the new living room image (imports from Remodeling.tsx reference)
- **Homepage** Sunriver section displays the new hero (inherits from SunriverDeckBuilder import)

All 12 gallery images have now been successfully replaced with compressed versions, completing the full image migration.

