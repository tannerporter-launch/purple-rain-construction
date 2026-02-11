
# Gallery Page Overhaul + Remaining Image Downloads

## Part 1: Download New Gallery-Only Images

These 12 images are needed exclusively for the Gallery page and have not been downloaded yet. Each will be fetched from Google Drive and saved to `src/assets/`.

| # | Drive ID | Destination File | Caption |
|---|----------|-----------------|---------|
| 1 | `1-_TOT9jvypxCifbPB0pU2cbXEktVfL4d` | `gilchrest-a-frame/front-symmetrical-new.jpg` | A-Frame Cabin Remodel -- Front Exterior |
| 2 | `1GTACoH-TKrjHH-QTJ9zNmxSMY3_gayMi` | `gilchrest-a-frame/front-patio-angle.jpg` (reuse if exists, else new) | A-Frame Front Patio & Covered Entry |
| 3 | `18u-n2LbENDkISp6EipQw1hOcMlU6gxlG` | `gilchrest-a-frame/ceiling-detail-fan-new.jpg` | Vaulted Wood Ceiling & Timber Craftsmanship |
| 4 | `1YDR19ZlQXfA-nzOFqdWK7w9Qu5BcH-by` | `gilchrest-a-frame/side-roof-angle-new.jpg` | A-Frame Cabin -- Side Exterior |
| 5 | `1goRpbwRATt-qHD3dscLSOpelyj3bLa7Z` | `remodels/oliviero/side-yard-barn-new.jpg` | Full Home Remodel -- Side Yard, Barn & Patio |
| 6 | `1crh5OMsY_pHVDzDpNO5Edyo0IEWNQHLp` | `decks/upper-balcony-gallery-new.jpg` | Upper Balcony Deck Rebuild (gallery version) |
| 7 | `1tnwXWFf-d5rTZm3y-rbrZzgcWI-61fJY` | `remodels/oliviero/kitchen-custom-new.jpg` | Custom Kitchen Remodel -- Central Oregon |
| 8 | `1tV46pFUmDbyLrQEVmUv2R1UfD84AKTKy` | `remodels/oliviero/farmhouse-sink-detail-new.jpg` | Farmhouse Sink & Quartz Countertop Details |
| 9 | `1f6fBdEMnNAlJtsZBjza3cBd6yM9dFacH` | `remodels/elke-french-doors/french-doors-new.jpg` | Custom French Doors |
| 10 | `1uGdkGQSCqfbVuBARqE9E5nVvJ-DbLrUo` | `remodels/bathroom/master-shower-new.jpg` | Full Bathroom Remodel -- Custom Walk-In Shower & Built-In Storage |
| 11 | `1YiJBzhmXq1iMhJ6hL9HiO4PsPJCsdYb4` | `remodels/bathroom/modern-vanity-new.jpg` | Full Bathroom Remodel -- Modern Vanity & Lighting |
| 12 | `1g4dlYJK_WcFvHHi4tjs4eSx8mtwWk8ri` | `remodels/bathroom/water-closet-new.jpg` | Full Bathroom Remodel -- Updated Water Closet |

Images that previously failed (>10MB) will be retried. If they fail again, existing assets remain in place. These include the Sunriver hero, Decks hero, upper balcony (service page version), Sunriver section 2, kitchen stove backsplash, back patio outdoor living, and living room remodel.

---

## Part 2: Gallery Page Restructure (`Gallery.tsx`)

Complete rewrite of the gallery data and layout:

### Structure Changes

1. **Remove** Snow Removal from categories array. New categories: `["All", "Decks", "A-Frame Cabin Remodel", "Full Home Remodel"]`

2. **Remove** all standalone "before" and "progress" photos from the projects array (IDs 31, 32, 33 -- barn/hay/workshop befores; IDs 12, 13 -- door install/exterior work process photos)

3. **Keep** the two Before & After sliders at the top (Gilchrest front + Oliviero front) -- no changes

4. **Add visible captions** to every gallery card: display the `description` field below each photo title, always visible (not hover-only). Update the card layout from the current hover-only description to always showing 1-2 lines of caption text beneath the title.

5. **Rename project groupings**: 
   - All Gilchrest items: category changes from "Remodels" to display under "A-Frame Cabin Remodel"
   - All Oliviero items: category changes from "Remodels" to display under "Full Home Remodel"
   - Deck items stay as "Decks"

6. **Regroup by room type within each project** (using sub-headings or ordering): Exterior > Living/Feature > Kitchen > Bathroom > Deck

### New Gallery Items to Add

**A-Frame Cabin Remodel -- Exterior:**
- Front Exterior (new download)
- Front Patio & Covered Entry (new download)
- Vaulted Wood Ceiling (new download)
- Side Exterior (new download)

**A-Frame Cabin Remodel -- Living/Feature:**
- Interior Staircase Remodel (reuse `staircase-new.jpg`)

**A-Frame Cabin Remodel -- Kitchen:**
- Full Kitchen Remodel (reuse `kitchen-full-new.jpg`)

**A-Frame Cabin Remodel -- Bathroom:**
- Walk-In Shower (reuse `walk-in-shower-new.jpg`)

**Full Home Remodel -- Exterior:**
- Front Exterior (reuse `remodel-exterior-new.jpg`)
- Side Yard, Barn & Patio (new download)

**Full Home Remodel -- Deck:**
- Upper Balcony Deck Rebuild (new download -- gallery version)

**Full Home Remodel -- Kitchen:**
- Custom Kitchen Remodel (new download)
- Statement Tile Backsplash (reuse existing or new download)
- Farmhouse Sink Details (new download)
- Functional Kitchen Layout (reuse `kitchen-layout-new.jpg`)

**Full Home Remodel -- Living/Feature:**
- Living Room Remodel (reuse existing or retry download)
- Indoor-Outdoor Window Bar (reuse `bar-window-new.jpg`)
- Custom French Doors (new download)

**Full Home Remodel -- Bathroom:**
- Freestanding Tub (reuse `freestanding-tub-new.jpg`)
- Patterned Tile Shower (reuse `patterned-tile-new.jpg`)
- Double Vanity (reuse `double-vanity-new.jpg`)
- Master Shower Remodel (new download)
- Modern Vanity & Lighting (new download)
- Updated Water Closet (new download)

**Deck Projects:**
- Structural Repair & Deck Refresh (reuse `structural-repair-new.jpg`)
- Deck Refinish & Railing Upgrade (reuse `deck-refinish-railing-new.jpg`)
- Sunriver Deck Rebuild (reuse `sunriver-rebuild-new.jpg`)
- Deck Addition & Accessibility (reuse `deck-addition-new.jpg`)

### Items to Remove from Gallery

- All French door entries using old Elke photos (IDs 3, 4) -- replaced by new French doors download
- All standalone "before" photos not part of the B&A slider (IDs 31, 32, 33)
- All "process" photos (IDs 12, 13 -- door install, exterior work)
- Duplicate/redundant kitchen and exterior photos that aren't in the MD spec
- The team/action shot entry if present

### Card Layout Update

Current card shows description only contextually. Change to:

```
[Image 4:3]
[Tags: "Decks" / "A-Frame Cabin Remodel" / etc.]
[Title - bold]
[Caption - 1-2 lines, always visible, muted text]
[Location - small text]
```

---

## Part 3: Retry Previously Failed Large Image Downloads

Attempt to re-download these 7 images that failed due to >10MB size:

1. `1m5J7c20l5zN9JJmv6lHSveBat_N8yr3u` -- Sunriver hero/Home Sunriver section
2. `1G4bY6fL_MwuNtKffPCY9Omtl9hcddo_I` -- Decks hero header
3. `19PNEdhE1H51Ffy62XbKRtDRvsGUpkS1O` -- Upper balcony (service page)
4. `1jfJ4u-x28sTqBoOmLGT9ekMLDabKln6C` -- Sunriver section 2
5. `1Yp23KspkdhctYtoOSjPbjR_t8Ze5plSz` -- Kitchen stove backsplash
6. `1RevNMJgs4W5mdyaFvUcg9QiBT1WahV7R` -- Back patio outdoor living
7. `1BhG-jOlDpAlSO-K-2xhuyt93_fE8_rHb` -- Living room remodel

If they fail again, existing images remain.

---

## Files Modified

| File | Changes |
|------|---------|
| `src/pages/Gallery.tsx` | Complete restructure: new categories, new project data, visible captions, remove befores/process photos, add new gallery images |
| 12+ new image files in `src/assets/` | Downloaded from Google Drive |

No backend or dependency changes needed.
