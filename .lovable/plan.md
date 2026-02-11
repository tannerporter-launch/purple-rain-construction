
# Replace Fallback Images with Uploaded Compressed Assets

## Objective
Replace 5 placeholder images in the Gallery with the newly uploaded compressed versions by copying them to the appropriate asset directories and updating imports in `src/pages/Gallery.tsx`.

## Part 1: Copy Images to Asset Directories

The uploaded images will be placed in the following locations:

| Uploaded File | Destination | Current Import | Updated Import |
|---|---|---|---|
| `A-Frame_front_symmetrical_copy.png` | `src/assets/remodels/gilchrest-a-frame/front-symmetrical-new.png` | `aframeFrontExterior` from `front-symmetrical.png` | Point to `front-symmetrical-new.png` |
| `Side_yard_barn_copy.jpg` | `src/assets/remodels/oliviero/side-yard-barn-new.jpg` | `fullHomeSideYard` from `side-patio-seating.jpg` | Point to new file |
| `Upper_balcony_gallery_version_copy.jpg` | `src/assets/decks/upper-balcony-gallery-new.jpg` | `fullHomeDeck` from `upper-balcony-rebuild-after.jpg` | Point to new file |
| `Custom_kitchen_remodel_copy.jpg` | `src/assets/remodels/oliviero/kitchen-custom-gallery-new.jpg` | `fullHomeKitchenCustom` from `kitchen-full-new.jpg` | Point to new file |
| `Farmhouse_sink_detail_copy.jpg` | `src/assets/remodels/oliviero/farmhouse-sink-detail-new.jpg` | `fullHomeFarmhouseSink` from `kitchen-farmhouse-sink.jpg` | Point to new file |

## Part 2: Update Import Statements in Gallery.tsx

Modify the import statements at the top of `src/pages/Gallery.tsx` (lines 15-56):

**Line 16:** Update A-Frame front exterior import
- From: `import aframeFrontExterior from "@/assets/remodels/gilchrest-a-frame/front-symmetrical.png";`
- To: `import aframeFrontExterior from "@/assets/remodels/gilchrest-a-frame/front-symmetrical-new.png";`

**Line 28:** Update Full Home side yard import
- From: `import fullHomeSideYard from "@/assets/remodels/oliviero/side-patio-seating.jpg";`
- To: `import fullHomeSideYard from "@/assets/remodels/oliviero/side-yard-barn-new.jpg";`

**Line 31:** Update Full Home deck import
- From: `import fullHomeDeck from "@/assets/decks/upper-balcony-rebuild-after.jpg";`
- To: `import fullHomeDeck from "@/assets/decks/upper-balcony-gallery-new.jpg";`

**Line 34:** Update Full Home custom kitchen import
- From: `import fullHomeKitchenCustom from "@/assets/remodels/oliviero/kitchen-full-new.jpg";`
- To: `import fullHomeKitchenCustom from "@/assets/remodels/oliviero/kitchen-custom-gallery-new.jpg";`

**Line 36:** Update Farmhouse sink import
- From: `import fullHomeFarmhouseSink from "@/assets/remodels/oliviero/kitchen-farmhouse-sink.jpg";`
- To: `import fullHomeFarmhouseSink from "@/assets/remodels/oliviero/farmhouse-sink-detail-new.jpg";`

## Part 3: File Operations

1. Copy 5 uploaded images to their target directories using `lov-copy`
2. Update 5 import statements in Gallery.tsx using `lov-line-replace`
3. No changes needed to gallery project data structure — only import paths change

## Expected Outcome

The Gallery page will display the newly uploaded high-quality images in the following gallery items:
- "A-Frame Cabin Remodel — Front Exterior" (ID: 1)
- "Side Yard, Barn & Patio" (ID: 11)
- "Upper Balcony Deck Rebuild" (ID: 26)
- "Custom Kitchen Remodel" (ID: 15)
- "Farmhouse Sink & Quartz Countertop Details" (ID: 17)

All gallery functionality (filters, lightbox, descriptions) remains unchanged.

