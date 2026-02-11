
# Replace Fallback Assets with Compressed Images

## Objective
Replace the 12 fallback/existing assets in the codebase with the compressed images provided via direct download links. This completes the image migration from the previous plan where downloads exceeded 10MB.

## Technical Implementation

### Part 1: Download & Replace Gallery-Only Images (5 assets)

These are new assets for the Gallery page that currently use fallbacks:

| Current Fallback | New URL | Destination | Usage |
|------------------|---------|-------------|-------|
| `front-symmetrical.png` | https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698cd5907f6dcf1a6b20aa68.png | `src/assets/remodels/gilchrest-a-frame/front-symmetrical-new.png` | A-Frame front exterior gallery card |
| `side-patio-seating.jpg` | https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698cd59b52c9520cb20ee165.jpg | `src/assets/remodels/oliviero/side-yard-barn-new.jpg` | Full Home side yard gallery card |
| `upper-balcony-rebuild-after.jpg` (service version) | https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698cd5a33fdd0e7d01bc22b5.jpg | `src/assets/decks/upper-balcony-gallery-new.jpg` | Upper balcony gallery-specific version |
| `kitchen-full-new.jpg` (reused oliviero) | https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698cd5a39d61010f08bf44cc.jpg | `src/assets/remodels/oliviero/kitchen-custom-gallery-new.jpg` | Custom kitchen gallery card |
| `kitchen-farmhouse-sink.jpg` (reused) | https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698cd5a330ec4a9ff1381970.jpg | `src/assets/remodels/oliviero/farmhouse-sink-detail-new.jpg` | Farmhouse sink gallery card |

### Part 2: Download & Replace Service/Hero Images (7 assets)

These replace hero headers and section images used across service pages:

| Current Asset | New URL | Destination | Usage Pages |
|---------------|---------|-------------|------------|
| `sunriver-hero-header.jpg` | https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698cd5a3c21b0341e46dec4d.jpg | `src/assets/decks/sunriver-hero-header.jpg` (replace) | SunriverDeckBuilder.tsx, Home Sunriver section |
| `decks-hero-header.jpg` | https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698cd5a33fdd0e53cdbc22b6.jpg | `src/assets/decks/decks-hero-header.jpg` (replace) | Decks.tsx |
| `sunriver-section-2.jpg` | https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698cd5a33fdd0e0053bc22b8.jpg | `src/assets/decks/sunriver-section-2.jpg` (replace) | SunriverDeckBuilder.tsx section 2 |
| `kitchen-stove-backsplash.jpg` | https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698cd5a33fdd0e37d1bc22b7.jpg | `src/assets/remodels/oliviero/kitchen-stove-backsplash.jpg` (replace) | KitchenRemodels.tsx gallery |
| `side-patio-seating.jpg` | https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698cd5a3715cda758aa61ead.jpg | `src/assets/remodels/oliviero/side-patio-seating.jpg` (replace) | Remodeling.tsx gallery |
| `living-room-farmhouse.jpg` | https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698cd5a3715cda46d4a61eac.jpg | `src/assets/remodels/oliviero/living-room-farmhouse.jpg` (replace) | Remodeling.tsx gallery, Gallery.tsx |

### Part 3: Update Gallery.tsx Imports

Update the following import statements in `src/pages/Gallery.tsx` to reference the new/replaced assets:

- Replace any references to old fallback paths with the new filenames
- Ensure all 27 gallery items have correct image paths

### Implementation Strategy

1. **Download** all 12 images from the provided URLs
2. **Replace** existing files in their respective directories
3. **Verify** imports in Gallery.tsx, Index.tsx, Decks.tsx, SunriverDeckBuilder.tsx, KitchenRemodels.tsx, and Remodeling.tsx point to correct filenames
4. **Test** all pages to confirm images render correctly with no broken links

### Files to be Modified/Created

**New Gallery Assets:**
- `src/assets/remodels/gilchrest-a-frame/front-symmetrical-new.png` (new)
- `src/assets/remodels/oliviero/side-yard-barn-new.jpg` (new)
- `src/assets/decks/upper-balcony-gallery-new.jpg` (new)
- `src/assets/remodels/oliviero/kitchen-custom-gallery-new.jpg` (new)
- `src/assets/remodels/oliviero/farmhouse-sink-detail-new.jpg` (new)

**Replaced Service Assets:**
- `src/assets/decks/sunriver-hero-header.jpg` (replace)
- `src/assets/decks/decks-hero-header.jpg` (replace)
- `src/assets/decks/sunriver-section-2.jpg` (replace)
- `src/assets/remodels/oliviero/kitchen-stove-backsplash.jpg` (replace)
- `src/assets/remodels/oliviero/side-patio-seating.jpg` (replace)
- `src/assets/remodels/oliviero/living-room-farmhouse.jpg` (replace)

**Code Updates:**
- `src/pages/Gallery.tsx` — update any import paths if filenames changed

