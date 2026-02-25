

# Purple Rain Construction -- Remaining Website Corrections & Fixes

This plan addresses 11 items. After thorough analysis, here's the status and implementation approach for each.

---

## Item-by-Item Analysis

### 1. KITCHEN PAGE -- Fix Gallery Images & Captions
**Status: Partially done -- captions need updating, images need replacing**

Current gallery (lines 194-198 of KitchenRemodels.tsx) has 4 photos with *similar but not exact* captions. Specifically:
- Photo 1 caption says "Complete kitchen renovation featuring custom cabinetry, patterned backsplash, and modern farmhouse finishes." -- needs to change to "Shaker cabinetry, quartz countertops, custom island, and updated lighting for improved flow and everyday function."
- Photo 2 caption says "Custom fold-out bar window with mountain-scene metal art..." -- needs to change to "Pass-through window and counter designed for entertaining, connecting the kitchen to the patio and outdoor living space."
- Photo 3 caption says "Professional range with patterned tile backsplash and wood-wrapped hood..." -- needs to change to "Patterned tile backsplash, custom hood surround, and open shelving to add character without excessive complexity."
- Photo 4 caption says "Modern kitchen with black island, white cabinets, and patterned backsplash..." -- needs to change to "Reworked cabinetry, appliance placement, and lighting to create a practical, well-balanced kitchen for daily use."

The Google Drive image URLs provided cannot be directly downloaded by automated tools (they require browser interaction). The current images used are from the Oliviero project and appear to match the content described. I'll update captions to match exactly, and you'll need to upload the 4 replacement images if the current ones aren't the correct photos.

**Changes:**
- Update all 4 gallery caption descriptions in KitchenRemodels.tsx to match exactly

---

### 2. REMODELING PAGE -- Fix Gallery Captions
**Status: Partially done -- 3 captions need updating**

Current captions (lines 206-209 of Remodeling.tsx):
- Photo 1: "Complete exterior renovation with modern farmhouse styling, new siding, roofing, and renovated outbuilding." -- needs to change to "Updated siding, roofing, windows, and entry details to modernize the home while preserving its character."
- Photo 3: "Modern farmhouse living room with leather furniture, wood stove, and ceiling fan -- warm and functional." -- needs to change to "Open layout, updated finishes, and improved circulation designed for everyday comfort and function."
- Photo 4: "Modern stairwell with dark beams and metal railing -- detailed structural and finish carpentry work." -- needs to change to "Rebuilt stair system with updated railings, lighting, and finishes to meet code and enhance safety."

**Changes:**
- Update 3 gallery caption descriptions in Remodeling.tsx

---

### 3. KITCHEN PAGE -- Remove Filler Background Image
**Status: Already done**

Looking at KitchenRemodels.tsx, there is NO filler background image between "Why Choose Purple Rain Construction?" (line 157) and "Kitchen Project Gallery" (line 183). The transition is clean: bg-background section followed by bg-muted section. Same for BathroomRemodels.tsx -- clean transition from "Why Choose" (line 181) directly to "Gallery" (line 208). No action needed.

---

### 4. SROA PAGE -- Fix Section 7 Text
**Status: Already done**

Line 377 reads: "Our team has worked in Sunriver for a combined 42 years and is registered with SROA Community Development." This matches exactly. No action needed.

---

### 5. SROA PAGE -- Update Section 4 Image
**Status: Needs implementation**

The SROA page Section 4 currently uses `sroaSection4` imported from `src/assets/sroa/sroa-section4-new.jpg` (line 34, used on line 211). The revision requests replacing this with a Google Drive image. The URL provided is a direct download link, so I can attempt to fetch and replace it.

**Changes:**
- Download image from provided URL and replace `src/assets/sroa/sroa-section4-new.jpg`

---

### 6. SROA PAGE -- Update Section 4 Text
**Status: Already done**

Line 169 matches exactly: "Many Sunriver homeowners are confused about the difference between SROA (Sunriver Owner Association) approval vs building permit requirements..."
Line 179 matches exactly: "Sunriver Owner Association focuses on design aesthetics, materials, exterior appearance, and community compliance."
No HOA instances found on this page. No action needed.

---

### 7. SROA PAGE -- Replace Section 5 Timeline
**Status: Already done**

Lines 231-301 contain all 8 steps with exact matching text and the disclaimer note at the bottom. No action needed.

---

### 8. CONTACT FORM -- Add Email Recipients
**Status: Not implemented**

Currently, the contact form (ContactForm.tsx) only inserts into the `contact_submissions` database table. There is no email notification system -- no edge function exists to send emails. This requires:
1. Creating a new edge function to send notification emails
2. Setting up a Resend API key (or similar email service) as a secret
3. Triggering the email on form submission

This is a significant feature addition requiring an email service provider decision.

**Changes:**
- Create a `send-contact-notification` edge function
- Add email sending logic to notify all 3 recipients
- Requires an email service API key (Resend recommended)

---

### 9. HOME PAGE -- Core Services Section Photos
**Status: Not implemented**

The homepage (Index.tsx lines 120-143) uses `deckStockPhoto` and `remodelExterior` for the Deck and Remodel service cards. The revision provides Google Drive download URLs for replacements. These are direct download links that I can attempt to fetch.

**Changes:**
- Download and replace the Deck card image
- Download and replace the Remodel card image

---

### 10. GALLERY PAGE -- Add More Categories & Photos
**Status: Partially done**

The gallery currently has categories: "All", "Decks", "A-Frame Cabin Remodel", "Full Home Remodel" (line 58). Many of the requested photos already exist in the gallery but are categorized under "Full Home Remodel" or "A-Frame Cabin Remodel" with subgroups.

The request adds 3 new top-level categories: "Kitchen", "Bathroom", "Living / Feature". The photos listed in the request are *already present* in the gallery (they match existing entries like kitchen backsplash, bar window, French doors, all bathroom photos, living room, etc.) but they need to be additionally tagged/categorized under these new categories.

**Changes:**
- Add "Kitchen", "Bathroom", "Living / Feature" to the categories array
- Add these category tags to existing gallery items so they appear when filtered
- Ensure all captions match the revision exactly

---

### 11. SUNRIVER PAGE -- Update Section 2 Image
**Status: Needs implementation**

The Sunriver page Section 2 (line 99) uses `sunriverSection2` from `src/assets/decks/sunriver-section-2.jpg`. The revision provides a new Google Drive download URL for a replacement image.

**Changes:**
- Download and replace `src/assets/decks/sunriver-section-2.jpg`

---

## Summary Table

| # | Item | Status |
|---|------|--------|
| 1 | Kitchen gallery captions | Update captions (4 changes) |
| 2 | Remodeling gallery captions | Update captions (3 changes) |
| 3 | Kitchen filler image removal | Already done |
| 4 | SROA Section 7 text | Already done |
| 5 | SROA Section 4 image | Download and replace |
| 6 | SROA Section 4 text | Already done |
| 7 | SROA Section 5 timeline | Already done |
| 8 | Contact form email | New feature -- needs email service |
| 9 | Homepage service card photos | Download and replace (2 images) |
| 10 | Gallery categories + photos | Add 3 categories, tag existing photos |
| 11 | Sunriver Section 2 image | Download and replace |

## Implementation Plan

### Phase 1: Text/Caption Fixes (no dependencies)
1. Update 4 kitchen gallery captions in `KitchenRemodels.tsx`
2. Update 3 remodeling gallery captions in `Remodeling.tsx`

### Phase 2: Gallery Category Expansion
3. Add "Kitchen", "Bathroom", "Living / Feature" to `Gallery.tsx` categories
4. Add additional category tags to existing gallery items so they appear under new filters

### Phase 3: Image Downloads & Replacements
5. Attempt to download and replace:
   - SROA Section 4 image (`src/assets/sroa/sroa-section4-new.jpg`)
   - Homepage Deck card image (new file, update import in Index.tsx)
   - Homepage Remodel card image (new file, update import in Index.tsx)
   - Sunriver Section 2 image (`src/assets/decks/sunriver-section-2.jpg`)

Note: Google Drive URLs may fail automated download (10MB limit or auth walls). If any fail, you'll need to download manually and upload them here.

### Phase 4: Contact Form Email Notifications
6. This requires choosing an email service provider. Resend is recommended (simple API, generous free tier). Steps:
   - Create `supabase/functions/send-contact-notification/index.ts`
   - Add RESEND_API_KEY as a secret
   - Modify ContactForm.tsx to call the new function after successful DB insert
   - Send formatted email to all 3 recipients

### Technical Details

**KitchenRemodels.tsx** -- Lines 195-198: Update `description` fields for all 4 gallery items.

**Remodeling.tsx** -- Lines 206, 208, 209: Update `description` fields for photos 1, 3, and 4.

**Gallery.tsx** -- Line 58: Change categories array to `["All", "Decks", "Kitchen", "Bathroom", "Living / Feature", "A-Frame Cabin Remodel", "Full Home Remodel"]`. Add secondary tags to existing items (e.g., kitchen items get both "Full Home Remodel" and "Kitchen" tags).

**Edge Function** -- New `send-contact-notification/index.ts` using Resend API to POST formatted HTML emails to the 3 recipients upon form submission.

