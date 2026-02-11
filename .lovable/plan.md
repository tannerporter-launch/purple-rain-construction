
# Gallery Page Revision Plan — Complete Breakdown

## Summary of All Changes

The client's revision document specifies updates to the Gallery page's **caption system**, **project titles/descriptions**, **category filters**, and **gallery card display format**. No new images are needed — all assets are already in place. This is a data + UI update only.

---

## Change 1: Update Caption Format (UI Change)

**What the client wants:**
- Each gallery card must have a **2-line caption system** that is always visible (not hover-only)
- Line 1: **Project Type + Context** (bold) — e.g. "Structural Repair & Deck Refresh (Price-Conscious Solution)"
- Line 2: *Materials / Budget approach* (regular weight) — e.g. "Replaced deteriorated log columns, repaired framing as needed..."

**What exists now:**
- Cards show: tag badge, title (h3), description (line-clamp-2), and location
- The description field is already 1-2 lines but lacks the bold title + italic subtitle split

**Implementation:**
- Add a new `caption` field to the `GalleryProject` interface for the materials/budget line
- The existing `title` field becomes the bold "Project Type + Context" line
- The existing `description` field gets replaced with the client-specified captions
- Remove the `location` line from card display (it adds clutter and isn't in the client's format)
- Keep the tag badge for filtering purposes

---

## Change 2: Update All Project Titles and Descriptions

Below is the **exact title and description** for every gallery item, mapped from the revision document to the current project IDs.

### Deck Projects (4 items)

| ID | Current Title | New Title | New Description |
|----|--------------|-----------|-----------------|
| 30 | Structural Repair & Deck Refresh | **Structural Repair & Deck Refresh (Price-Conscious Solution)** | Replaced deteriorated log columns, repaired framing as needed, refinished decking with select board replacement, and installed new handrails. |
| 31 | Deck Refinish & Railing Upgrade | **Deck Refinish & Railing Upgrade** | Refinished and stained existing deck boards with selective replacements, paired with new modern handrails for a clean, updated look. |
| 32 | Sunriver Deck Rebuild | **Sunriver Deck Rebuild — Engineered & Permitted** | Full demolition due to extensive dry rot, followed by an engineered, county- and SROA-approved rebuild. Planned as a phased project to help manage costs over time. |
| 33 | Deck Addition & Accessibility Upgrade | **Deck Addition & Accessibility Upgrade (Budget-Conscious)** | Small deck addition connected to the existing structure to support a hot tub, with a built-in bench, hose access, and a simple privacy wall. Existing decking was sanded and repainted for a cohesive finish. |

### A-Frame Cabin Remodel (7 items)

| ID | Current Title | New Title | New Description |
|----|--------------|-----------|-----------------|
| 1 | A-Frame Cabin Remodel — Front Exterior | **A-Frame Cabin Remodel — Front Exterior** | Gilchrist Area, Central Oregon. Full A-frame cabin renovation. |
| 2 | A-Frame Front Patio & Covered Entry | **A-Frame Front Patio & Covered Entry** | Extended roofline with exposed wood beams over new concrete patio. |
| 3 | Vaulted Wood Ceiling & Timber Craftsmanship | **Vaulted Wood Ceiling & Timber Craftsmanship** | Extended roofline with exposed wood beams and outdoor ceiling fan. |
| 4 | A-Frame Cabin — Side Exterior | **A-Frame Cabin — Side Exterior** | Updated metal roofing, siding, and entry improvements. |
| 5 | Interior Staircase Remodel | **A-Frame — Interior Staircase Remodel** | Rebuilt stair system with updated railings, lighting, and finishes to meet code and enhance safety. |
| 6 | Full Kitchen Remodel | **A-Frame Full Kitchen Remodel (Mid-Range Custom Build)** | Shaker cabinetry, quartz countertops, custom island, and updated lighting for improved flow and everyday function. |
| 7 | Walk-In Shower Remodel | **Full Bathroom Remodel — Walk-In Shower** | Complete bathroom demolition and remodel featuring a custom walk-in shower, full-height tile installation, and modern fixtures. |

### Full Home Remodel (17 items)

| ID | Current Title | New Title | New Description |
|----|--------------|-----------|-----------------|
| 10 | Full Home Remodel — Front Exterior | **Full Home Remodel — Front Exterior** | Updated siding, roofing, windows, and entry details to modernize the home while preserving its character. |
| 11 | Side Yard, Barn & Patio | **Full Home Remodel — Side Yard, Barn & Patio** | (no specific caption provided in doc — keep existing or leave blank) |
| 26 | Upper Balcony Deck Rebuild | **Upper Balcony Deck Rebuild** | County-permitted rebuild with accented handrails, integrated into a larger remodel that added an outdoor bar and patio living space below. |
| 15 | Custom Kitchen Remodel | **Custom Kitchen Remodel — Central Oregon** | (no specific description in doc) |
| 16 | Statement Tile Backsplash | **Kitchen Remodel — Statement Tile Backsplash & Range** | Patterned tile backsplash, custom hood surround, and open shelving to add character without excessive complexity. |
| 17 | Farmhouse Sink & Quartz Countertop Details | **Farmhouse Sink & Quartz Countertop Details** | (no specific description change in doc) |
| 18 | Functional Kitchen Layout Upgrade | **Functional Kitchen Layout Upgrade** | Reworked cabinetry, appliance placement, and lighting to create a practical, well-balanced kitchen for daily use. |
| 12 | Living Room Remodel | **Living Room Remodel — Open Concept Design** | Open layout, updated finishes, and improved circulation designed for everyday comfort and function. |
| 13 | Indoor-Outdoor Window Bar | **Indoor-Outdoor Window Bar Feature** | Pass-through window and counter designed for entertaining, connecting the kitchen to the patio and outdoor living space. |
| 14 | Custom French Doors | **Custom French Doors** | (no specific description in doc) |
| 20 | Freestanding Tub Bathroom | **Full Bathroom Remodel** | Full bathroom remodel featuring a freestanding tub with wall-mounted shower, custom vanity, patterned tile flooring, and modern fixtures. |
| 21 | Patterned Tile Shower | **Patterned Tile Shower** | Custom tile shower featuring patterned accent tile and professional waterproofing systems. |
| 22 | Double Vanity Bathroom Remodel | **Double Vanity Bathroom Remodel** | Double vanity bathroom remodel with custom storage, quartz countertop, and modern plumbing fixtures. |
| 23 | Custom Walk-In Shower & Built-In Storage | **Full Bathroom Remodel — Custom Walk-In Shower & Built-In Storage** | Jacuzzi tub removal, new tile shower, flooring, paint, and custom cabinetry. *(Most recently completed master bathroom remodel)* |
| 24 | Modern Vanity & Lighting | **Full Bathroom Remodel — Modern Vanity & Lighting** | Custom cabinetry, solid-surface counters, and updated fixtures. |
| 25 | Updated Water Closet | **Full Bathroom Remodel — Updated Water Closet** | New flooring, paint, and finish details throughout. |

---

## Change 3: Remove "Snow Removal" from Category Filters

**Current categories array:** `["All", "Decks", "A-Frame Cabin Remodel", "Full Home Remodel"]`

**Status:** Already done. Snow Removal was previously removed. No action needed.

---

## Change 4: Before/After Slider Labels

**Current labels:** "Gilchrest A-Frame Front" and "Oliviero Exterior" (as shown in screenshot)

**New labels from client:**
- Left slider: **"A-Frame Cabin Remodel"** (currently shows "A-Frame Cabin — Front Exterior")
- Right slider: **"Full Home Remodel"** (currently shows "Full Home Remodel — Front Exterior")

**Status:** Current labels are close but should be simplified to match the screenshot exactly.

---

## Change 5: Gallery Card Ordering

The revision document groups projects in this specific order:

1. **Decks** (4 items): Structural Repair, Refinish & Railing, Sunriver Rebuild, Deck Addition
2. **A-Frame Cabin Remodel** grouped by subgroup:
   - Exterior (4): Front, Patio, Ceiling, Side
   - Living/Feature (1): Staircase
   - Kitchen (1): Full Kitchen
   - Bathroom (1): Walk-In Shower
3. **Full Home Remodel** grouped by subgroup:
   - Exterior (2): Front, Side Yard/Barn
   - Deck (1): Upper Balcony
   - Kitchen (4): Custom Kitchen, Backsplash, Farmhouse Sink, Layout
   - Living/Feature (3): Living Room, Bar Window, French Doors
   - Bathroom (6): Freestanding Tub, Patterned Tile, Double Vanity, Walk-In Shower, Modern Vanity, Water Closet

**Current order:** A-Frame first, then Full Home, then Decks. The revision doc lists Decks first in the adjustment section, but the "All" view should show projects in a logical flow. The current order is acceptable but needs the remodel items reordered to match the subgroup sequence from the doc.

---

## Technical Implementation (Files to Modify)

### File: `src/pages/Gallery.tsx`

1. **Update `GalleryProject` interface** — no changes needed, `title` and `description` fields already exist
2. **Update all 27 project entries** in the `projects` array with new titles and descriptions from the tables above
3. **Update Before/After slider labels** (lines 398, 408) to simplified versions
4. **Reorder projects** to match the document's grouping sequence
5. **Ensure card caption display** shows the full description (remove `line-clamp-2` class so longer captions display fully, per the "always visible" requirement)

No other files need to be modified. No new images. No new components.
