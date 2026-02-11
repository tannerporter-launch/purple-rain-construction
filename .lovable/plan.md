

# Website Revision 2 -- Image Swaps, Gallery Overhaul & Tracking Setup

After cross-referencing every line of the MD file and PDF against the current codebase, all **text, copy, structural, and layout** changes from previous rounds are confirmed complete. The remaining work falls into three categories: **image replacements**, **gallery page restructuring**, and **tracking/analytics setup**.

---

## Phase 1: Download & Replace Images Across Service Pages

Each Google Drive link needs to be fetched, saved to `src/assets/`, and imported in the relevant component. All download URLs follow the format:
`https://drive.usercontent.google.com/u/0/uc?id=IMAGE_ID&export=download`

### Home Page (`Index.tsx`)

| Section | Current Image | New Image (Drive ID) | Notes |
|---------|--------------|---------------------|-------|
| Core Services -- Deck card | `timbertech-deck-forest.jpeg` | `1Jf8IiADAbSAdVkIxaebT0XD4DhiFUEuZ` | Replace `deckStockPhoto` |
| Core Services -- Remodel card | `exterior-final-front.jpeg` | `1t0HslAQ_54lOjPQ5FcCu_VoiPXgkYxol` | Replace `remodelExterior` |
| Sunriver Section | `timbertech-deck-forest.jpeg` (same as deck) | `1m5J7c20l5zN9JJmv6lHSveBat_N8yr3u` | Replace `deckStockPhoto` in Sunriver section |

### Decks Page (`Decks.tsx`)

| Section | Current Image | New Image (Drive ID) | Notes |
|---------|--------------|---------------------|-------|
| Hero header | `decks-hero-header.jpg` | `1G4bY6fL_MwuNtKffPCY9Omtl9hcddo_I` | |
| Sunriver section | `sunriver-section-deck.jpg` | `1Jf8IiADAbSAdVkIxaebT0XD4DhiFUEuZ` | |
| Gallery: Upper Balcony | `upper-balcony-rebuild-after.jpg` | `19PNEdhE1H51Ffy62XbKRtDRvsGUpkS1O` | |
| Gallery: Structural Repair | `structural-repair-refresh.jpg` | `1cr6YFOX062Za6kNicAby7lL_1DGM_Syl` | |
| Gallery: Sunriver Rebuild | `sunriver-rebuild-engineered.jpg` | `1AXWowU7Bk0fnPlfV1mH-MQRtOEvx1AeK` | |
| Gallery: Deck Addition | `deck-addition-accessibility.jpg` (from `deck-addition-hot-tub.jpg`) | `10_8orin7fcUxpXkSKcHawuyXFNaV-L3E` | |

### Sunriver Page (`SunriverDeckBuilder.tsx`)

| Section | Current Image | New Image (Drive ID) | Notes |
|---------|--------------|---------------------|-------|
| Hero header | `sunriver-hero-header.jpg` | `1m5J7c20l5zN9JJmv6lHSveBat_N8yr3u` | |
| Section 2 (Why Specialized) | `sunriver-section-2.jpg` | `1jfJ4u-x28sTqBoOmLGT9ekMLDabKln6C` | |
| Section 7 (Trusted Contractor) | `sunriver-rebuild-engineered.jpg` | `1AXWowU7Bk0fnPlfV1mH-MQRtOEvx1AeK` | Uses option 1 |

### SROA Page (`SunriverSROAServices.tsx`)

| Section | Current Image | New Image (Drive ID) | Notes |
|---------|--------------|---------------------|-------|
| Hero header | `sroa-hero-header.jpg` | `1LkmeaOOri0t7Yl8qKLEyjEFV68BHnwCv` | |
| Section 4 (SROA vs Permits) | `sroa-section4.jpg` | `1MY3fh2MeAeO2g180gbMISBsfSXy7FrzL` | |

### Bathroom Page (`BathroomRemodels.tsx`)

| Section | Current Image | New Image (Drive ID) | Notes |
|---------|--------------|---------------------|-------|
| Hero background | `walk-in-shower.jpg` | `1yb-yYrwMNna1Tt_kVxJSlSGwsIOJLXGe` | May already match |
| Section 2 image | `double-vanity.jpg` | `1yb-yYrwMNna1Tt_kVxJSlSGwsIOJLXGe` | Same walk-in shower |
| Gallery 1: Walk-In Shower | `walk-in-shower.jpg` | `1yb-yYrwMNna1Tt_kVxJSlSGwsIOJLXGe` | |
| Gallery 2: Patterned Tile | `patterned-tile-shower.jpg` | `1rSuyv2oOg0Af_ISdofNjeJs_njF71ehF` | |
| Gallery 3: Double Vanity | `double-vanity.jpg` | `1bBKPlcEkkyUkh2GyaP7Z3fFuZY3KxKwQ` | |
| Gallery 4: Freestanding Tub | `freestanding-tub.jpg` | `18Pyd1XT7hx1--DUAGxCW3XjgCz0z7_Ms` | |

### Kitchen Page (`KitchenRemodels.tsx`)

| Section | Current Image | New Image (Drive ID) | Notes |
|---------|--------------|---------------------|-------|
| Gallery 1 | `kitchen-full-view-1.jpg` | `1rL8fSNreAI-zQb_8QLt4jNzHS1HAl0kC` | |
| Gallery 2 | `bar-window-exterior-full.jpg` | `1wMc6Q7QY6_MEF-dDr5vw5Tq5M36E8_q1` | |
| Gallery 3 | `kitchen-stove-backsplash.jpg` | `1Yp23KspkdhctYtoOSjPbjR_t8Ze5plSz` | |
| Gallery 4 | `3-kitchen-after.jpg` | `151bMPIngZhb5fh9eFYTSwuCz20Xd6QBu` | |

### Remodeling Page (`Remodeling.tsx`)

| Section | Current Image | New Image (Drive ID) | Notes |
|---------|--------------|---------------------|-------|
| Gallery 1: Exterior | Current oliviero photo | `1t0HslAQ_54lOjPQ5FcCu_VoiPXgkYxol` | |
| Gallery 2: Outdoor Living | Current back patio | `1RevNMJgs4W5mdyaFvUcg9QiBT1WahV7R` | |
| Gallery 3: Living Room | Current living room | `1BhG-jOlDpAlSO-K-2xhuyt93_fE8_rHb` | |
| Gallery 4: Staircase | Current stairs after | `1aFRPEW5ylqwXnvPRDZygg4rHGsmGVkak` | |

### Services Page (`Services.tsx`)

| Section | Current Image | New Image | Notes |
|---------|--------------|-----------|-------|
| Deck Building card | `sunriver-section-deck.jpg` | Use same new deck photo from Home page (Drive ID `1Jf8IiADAbSAdVkIxaebT0XD4DhiFUEuZ`) | |

### JobTread Portal Images (Home Page Section 4)

| Image | Current | New Image (Drive ID) | Notes |
|-------|---------|---------------------|-------|
| Progress Photos | `progress-photos.png` | `1CjzYbciku3YqQ5hP1xb3l2frDLPBftvH` | |
| Daily Logs | `daily-logs.png` | `1MMUx_Ct0MSk-xufoxeQjycN2Hn5efhKZ` | |
| Scheduling | `scheduling.png` | `1wQ9xeqdHFOgAK2_zhF8MWWuUckdRpAqW` | |
| Communications | `communications.png` | `1g4Mxis_JfRCZeq2BwloKzXsxcvrzhrcZ` | |

---

## Phase 2: Gallery Page Overhaul (`Gallery.tsx`)

Major restructuring of the full Gallery page:

1. **Remove** Snow Removal category from gallery filters
2. **Remove** all "before" and "progress" photos -- keep only final/after images
3. **Rename** project groupings: "A-Frame Cabin Remodel" and "Full Home Remodel"
4. **Add visible captions** under each photo (1-2 lines, always visible, not hover-only)
5. **Keep** the two before/after sliders at the top of the gallery
6. **Group** images by project, then by room type (Exterior, Kitchen, Bathroom, Living/Feature, Deck)
7. **Add new gallery images** from Google Drive for each category with specific captions provided in the MD file

### Gallery images to download and add (20+ new photos with captions from the MD file covering):
- A-Frame Cabin exterior, patio, ceiling, side views
- A-Frame staircase, kitchen, bathroom
- Full Home Remodel exterior, side yard, deck, kitchen variants, living room, bar window, bathrooms, french doors
- Deck gallery: structural repair, refinish & railing, sunriver rebuild, deck addition

---

## Phase 3: Tracking & Analytics Setup

### Google Tag Manager (GTM)
- Container ID: `GTM-KHK2QTD6`
- Install GTM script in `index.html` (head + body noscript)
- All page tracking flows through GTM

### Google Analytics (GA4)
- Measurement ID: `G-P6MM594ZGJ`
- Configure via GTM (preferred) or direct tag

### Google reCAPTCHA v2 Invisible
- Site Key: `6LeyLOIrAAAAAO5mcC_IVQiEBRO1tUhmhuitZzaY`
- Secret Key: needs to be stored as a backend secret
- Apply to contact/estimate forms
- Server-side verification via a backend function

### Cookie Consent Banner
- Categories: Functional (always on), Analytics, Marketing
- Analytics and marketing scripts load only after consent
- Links to Privacy Policy
- Persistent consent state (localStorage)

### Meta (Facebook) Pixel
- Pixel ID: not yet provided (blank in document)
- Track: PageView (all pages), Lead (form submissions)
- Load only after marketing consent

---

## Phase 4: Deferred Items (Waiting on Client)

These items are noted in the MD but cannot be implemented yet:

- **Home Page header image**: Client is deciding between masked/unmasked Old Mill photo options -- need a decision
- **Decks "Why Our Decks Perform Better" image**: Client says "get photo of Cindy's deck w/ Kali" -- waiting on photo
- **SROA Section 7 image**: Client says "will get an updated image in a few weeks"
- **Meta Pixel ID**: Left blank in the document
- **Contact form CRM integration**: JobTread CRM pull-through or email forwarding to admin@purpleraincs.com, kela@purpleraincs.com, nicholas@purpleraincs.com
- **Blog strategy**: Client asking about blog management approach

---

## Implementation Order

1. Download all Google Drive images and save to `src/assets/` (organized by folder)
2. Update imports and references across all service pages
3. Restructure Gallery page with new images, captions, and categories
4. Add GTM/GA4 to `index.html`
5. Implement cookie consent banner component
6. Add reCAPTCHA to contact forms (frontend + backend verification function)
7. Test all pages for correct image display and tracking

---

## Technical Details

### Unique Google Drive image IDs to download (deduplicated):

1. `1Jf8IiADAbSAdVkIxaebT0XD4DhiFUEuZ` -- Deck photo (Home, Decks Sunriver section, Services)
2. `1t0HslAQ_54lOjPQ5FcCu_VoiPXgkYxol` -- Remodel exterior (Home, Remodeling gallery)
3. `1m5J7c20l5zN9JJmv6lHSveBat_N8yr3u` -- Sunriver deck (Home Sunriver, Sunriver hero)
4. `1CjzYbciku3YqQ5hP1xb3l2frDLPBftvH` -- JobTread progress photos
5. `1MMUx_Ct0MSk-xufoxeQjycN2Hn5efhKZ` -- JobTread daily logs
6. `1wQ9xeqdHFOgAK2_zhF8MWWuUckdRpAqW` -- JobTread scheduling
7. `1g4Mxis_JfRCZeq2BwloKzXsxcvrzhrcZ` -- JobTread communications
8. `1G4bY6fL_MwuNtKffPCY9Omtl9hcddo_I` -- Decks hero header
9. `19PNEdhE1H51Ffy62XbKRtDRvsGUpkS1O` -- Upper balcony rebuild
10. `1cr6YFOX062Za6kNicAby7lL_1DGM_Syl` -- Structural repair
11. `1_51jBgpwcOU2El-GJDNZV4XG9Ld_rqFZ` -- Deck refinish railing (gallery only)
12. `1AXWowU7Bk0fnPlfV1mH-MQRtOEvx1AeK` -- Sunriver rebuild engineered
13. `10_8orin7fcUxpXkSKcHawuyXFNaV-L3E` -- Deck addition accessibility
14. `1jfJ4u-x28sTqBoOmLGT9ekMLDabKln6C` -- Sunriver section 2
15. `1LkmeaOOri0t7Yl8qKLEyjEFV68BHnwCv` -- SROA hero
16. `1MY3fh2MeAeO2g180gbMISBsfSXy7FrzL` -- SROA section 4
17. `1oNfd5qJvJAr0KZWmAht5S8VBpCbiGuKT` -- SROA trusted contractor alt
18. `1yb-yYrwMNna1Tt_kVxJSlSGwsIOJLXGe` -- Bathroom walk-in shower
19. `1rSuyv2oOg0Af_ISdofNjeJs_njF71ehF` -- Patterned tile shower
20. `1bBKPlcEkkyUkh2GyaP7Z3fFuZY3KxKwQ` -- Double vanity
21. `18Pyd1XT7hx1--DUAGxCW3XjgCz0z7_Ms` -- Freestanding tub
22. `1rL8fSNreAI-zQb_8QLt4jNzHS1HAl0kC` -- Kitchen full remodel
23. `1wMc6Q7QY6_MEF-dDr5vw5Tq5M36E8_q1` -- Indoor-outdoor bar window
24. `1Yp23KspkdhctYtoOSjPbjR_t8Ze5plSz` -- Kitchen stove backsplash
25. `151bMPIngZhb5fh9eFYTSwuCz20Xd6QBu` -- Functional kitchen layout
26. `1RevNMJgs4W5mdyaFvUcg9QiBT1WahV7R` -- Back patio outdoor living
27. `1BhG-jOlDpAlSO-K-2xhuyt93_fE8_rHb` -- Living room remodel
28. `1aFRPEW5ylqwXnvPRDZygg4rHGsmGVkak` -- Staircase remodel

Plus 15+ additional gallery-only images for the full Gallery page restructuring.

### Files to modify:
- `index.html` -- GTM scripts
- `src/pages/Index.tsx` -- Image swaps (3)
- `src/pages/Decks.tsx` -- Image swaps (6)
- `src/pages/SunriverDeckBuilder.tsx` -- Image swaps (3)
- `src/pages/SunriverSROAServices.tsx` -- Image swaps (2)
- `src/pages/BathroomRemodels.tsx` -- Image swaps (5-6)
- `src/pages/KitchenRemodels.tsx` -- Image swaps (4)
- `src/pages/Remodeling.tsx` -- Image swaps (4)
- `src/pages/Services.tsx` -- Image swap (1)
- `src/pages/Gallery.tsx` -- Major overhaul with new images, captions, categories
- New: `src/components/CookieConsent.tsx` -- Cookie consent banner
- `src/components/forms/ContactForm.tsx` -- reCAPTCHA integration
- New: backend function for reCAPTCHA server-side verification

