

# Website Revision 1 -- Remaining Edits

After a detailed comparison of every revision in the PDF against the current code, most changes are already live. The following items still need implementation:

---

## 1. SROA Page: Convert FAQs to Accordion Style

The SROA page (`/sunriver-sroa-services`) currently displays FAQs as static cards (plain `div` blocks). All other service pages use the accordion component. This needs to match for consistency.

**Change:** Replace the static FAQ cards in `SunriverSROAServices.tsx` with the `Accordion` / `AccordionItem` / `AccordionTrigger` / `AccordionContent` components used on Decks, Kitchen, and Bathroom pages.

---

## 2. About Page: Fix Truncated Team Bios

Team bios on the About page (`/about`) are cut off mid-sentence due to `line-clamp-4` on the bio text. Clicking does not expand or reveal the full text.

**Change:** In `About.tsx`, remove the `line-clamp-4` class from team bio paragraphs so the full bio text is always visible. May also slightly adjust card layout to accommodate longer text gracefully.

---

## 3. Kitchen & Bathroom Remodel Pages: Remove Filler Background Images

Both pages have full-width decorative image break sections that do not appear on other service pages:

- **Kitchen** (`KitchenRemodels.tsx`): Two full-width image sections (lines 107-115 after hero, and lines 194-203 before gallery)
- **Bathroom** (`BathroomRemodels.tsx`): Two full-width image sections (lines 119-127 after hero, and lines 218-227 before gallery)

**Change:** Remove these four `<section>` blocks entirely from both files.

---

## 4. Service Page Gallery Standardization

All service page galleries need to display exactly 4 images in a clean grid with captions, followed by a single CTA button to the full gallery. Current state:

- **Decks**: 5 images -- reduce to 4, remove the "Deck Refinish & Railing Upgrade" per PDF note ("don't feature on Deck Service Page")
- **Kitchen**: 6 images without captions in a 3-column grid -- reduce to 4 with captions matching the PDF descriptions
- **Remodeling**: 16 images without captions -- reduce to 4 with captions per PDF descriptions

Bathroom page already has 4 images with captions -- no changes needed there.

### Decks gallery (keep these 4):
1. Upper Balcony Deck Rebuild
2. Structural Repair & Deck Refresh
3. Sunriver Deck Rebuild -- Engineered & Permitted
4. Deck Addition & Accessibility Upgrade

### Kitchen gallery (4 with captions):
1. Full Kitchen Remodel (Mid-Range Custom Build)
2. Custom Indoor-Outdoor Feature
3. Material & Finish Details
4. Functional Kitchen Layout Upgrade

### Remodeling gallery (4 with captions):
1. Full Home Remodel (Exterior Transformation)
2. Integrated Remodel & Outdoor Living
3. Main Living Area Remodel
4. Structural & Finish Carpentry Upgrade

**CTA button copy per page:**
- Decks: "View Full Deck Gallery"
- Kitchen: "View Full Gallery"
- Bathroom: "View Full Gallery"
- Remodeling: "View Full Gallery"

---

## 5. Composite Decking Header Update

The PDF specifies the header should read "PVC & Composite Decking" but the current code says "Composite Decking".

**Change:** In `Decks.tsx`, update the materials section header from "Composite Decking" to "PVC & Composite Decking".

---

## Technical Summary

| File | Changes |
|------|---------|
| `SunriverSROAServices.tsx` | Convert FAQ section from static cards to Accordion components |
| `About.tsx` | Remove `line-clamp-4` from team bio paragraphs |
| `KitchenRemodels.tsx` | Remove 2 full-width image break sections; standardize gallery to 4 images with captions |
| `BathroomRemodels.tsx` | Remove 2 full-width image break sections |
| `Decks.tsx` | Remove 1 gallery item (Refinish & Railing); update "Composite Decking" header to "PVC & Composite Decking" |
| `Remodeling.tsx` | Standardize gallery to 4 images with captions in 2x2 grid |

No new dependencies or backend changes required.

