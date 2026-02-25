

# Purple Rain Construction -- Comprehensive Revision Audit & Implementation Plan

This plan systematically compares the PDF/TXT revision documents against the current live website, page by page. Items are categorized as **DONE** (already matches), **NEEDS CHANGE**, **NEEDS CONFIRMATION**, or **BLOCKED** (waiting on client assets).

---

## Page Mapping

| Page | URL | Referenced in TXT Lines | PDF Pages |
|------|-----|------------------------|-----------|
| Home | `/` | 1-51 | 2-5 |
| Decks | `/decks` | 52-178 | 6-11 |
| Sunriver Deck Builder | `/sunriver-deck-builder` | 180-288 | 12-14 |
| SROA Services | `/sunriver-sroa-services` | 217-288 | 15-18 |
| About | `/about` | 291-338 | 19-22 |
| Kitchen Remodels | `/kitchen-remodels` | 341-417 | 23-26 |
| Bathroom Remodels | `/bathroom-remodels` | 421-489 | 27-30 |
| Remodeling | `/remodeling` | 495-509 | 31-32 |
| Services | `/services` | 515-523 | 33-34 |
| Snow Removal | `/snow-removal` | 522 | 35-36 |
| New Construction | `/new-construction` | 526 | 37-38 |
| Privacy | `/privacy` | 528-600 | 39-42 |
| Terms | `/terms` | 602-643 | 43-46 |
| FAQ | `/faq` | 647-681 | 47-49 |
| Gallery | `/gallery` | 759-871 | N/A |
| Contact | `/contact` | 738-745 | N/A |
| Tracking/Privacy Setup | N/A | 874-917 | N/A |
| Gallery-Only New Assets | N/A | 918-945 | N/A |

---

## PAGE-BY-PAGE CHANGE LOG

### 1. HOME PAGE (`/`) -- Index.tsx

| # | Section | Current | Required | Source | Status |
|---|---------|---------|----------|--------|--------|
| 1.1 | S1 Header Image | Old Mill stock photo | "Can you show us masked/unmasked version?" -- exploratory question, no definitive replacement specified | TXT:3-6 | Needs confirmation |
| 1.2 | S2 Deck photo | `deck-new-hero.jpg` (already replaced) | Matches requested URL | TXT:9 | DONE |
| 1.3 | S2 Remodel photo | `remodel-exterior-new.jpg` (already replaced) | Matches requested URL | TXT:10 | DONE |
| 1.4 | S2 Remodeling description | "Bathroom and kitchen remodels, full home renovations, and select commercial projects." | Matches exactly | TXT:13 | DONE |
| 1.5 | S3 checkmarks | "Clear, transparent communication" and "Proudly local--serving Central Oregon with care and integrity" | Matches exactly | TXT:16-17 | DONE |
| 1.6 | S4 JobTread section | Uses portal screenshots with 4-card grid | Matches revision intent | TXT:19-30, PDF:3 | DONE |
| 1.7 | S5 Sunriver photo | Uses `sunriver-section-5.jpg` | TXT:32 specifies a specific download URL | TXT:32 | NEEDS CHANGE |
| 1.8 | S5 paragraph | Uses "SROA" (not "HOA") | Matches | TXT:33 | DONE |
| 1.9 | S6 Testimonials | 3 real Google reviews (Arthur Diamond, D K, Cindy Kunz) | Matches exactly | TXT:37-49 | DONE |
| 1.10 | Footer Bend Chamber | "Bend Chamber" badge in footer | Matches | TXT:51 | DONE |

**Changes needed:**
- **1.7**: Replace Sunriver section photo. The TXT specifies the same URL as the Sunriver hero header image. Currently using `sunriver-section-5.jpg` -- needs to use the downloaded `sunriver-hero-header.jpg` image.

---

### 2. DECKS PAGE (`/decks`) -- Decks.tsx

| # | Section | Current | Required | Source | Status |
|---|---------|---------|----------|--------|--------|
| 2.1 | S1 Hero image | `decks-hero-header.jpg` (replaced) | Matches | TXT:54 | DONE |
| 2.2 | S2 Image | `project-2-after.jpg` | "Get photo of Cindy's deck w/ Kali to add here" | TXT:56 | BLOCKED -- waiting on client |
| 2.3 | S2 Text | "certified TimberTech and TrexPro builder" | Matches | TXT:57 | DONE |
| 2.4 | S2 Composite text | "PVC & Composite decking Options" mentioned | Current list says "Composite decking options as a certified TimberTech and TrexPro builder" -- close but doesn't say "PVC" | TXT:58 | NEEDS CHANGE |
| 2.5 | S3 Railing upgrades | "Metal Railing, Cable Railing or upgrade to glass panels for improved views and durability." | Matches exactly | TXT:60 | DONE |
| 2.6 | S4 Materials | Complete PVC & Composite vs Wood section | Matches revision content | TXT:61-88 | DONE |
| 2.7 | S5 Sunriver section | Image uses `deck-new-hero.jpg`; text matches revision | Image should use the specified URL (TXT:90) which is a different image | TXT:89-97 | NEEDS CHANGE |
| 2.8 | S5 Text | Current text closely matches but includes "60 lbs per sq ft" detail not in revision | Should match revision exactly | TXT:92-96 | NEEDS CHANGE |
| 2.9 | S6 Pricing | Matches revision content | OK | TXT:98-117 | DONE |
| 2.10 | S7 Gallery | 4 photos with captions, before photos removed | Matches | TXT:120-132 | DONE |
| 2.11 | S7 Upper Balcony image | Uses `upperBalconyRebuild` from `upper-balcony-rebuild-after.jpg` | "The gallery image currently shown for Upper Balcony Deck Rebuild is incorrect" (EMAIL REVISION 2, TXT:717) | TXT:717 | NEEDS CHANGE |
| 2.12 | S8 Testimonials | 2 real Google reviews | Matches | TXT:133-136 | DONE |
| 2.13 | S10 FAQs | 7 FAQs, removed 3 as specified | Matches | TXT:141-178 | DONE |
| 2.14 | S5 image | Different image specified via GCS URL | TXT:90 gives different URL than hero | TXT:90 | NEEDS CHANGE |

**Changes needed:**
- **2.4**: Add "PVC &" before "Composite" in the S2 checklist item. Change to "PVC & Composite decking options as a certified TimberTech and TrexPro builder"
- **2.7/2.14**: S5 Sunriver section image should use the specific URL from TXT:90 -- this is a different photo than what's currently used. Download from `https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698ce9677f6dcfb2ae24f523.jpg`
- **2.8**: Rewrite S5 text to match revision exactly -- remove "60 lbs per square foot" detail
- **2.11**: Replace Upper Balcony gallery image with the correct one from `https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698cd5a33fdd0e7d01bc22b5.jpg` (TXT line 924, "upper-balcony-gallery-new" -- this asset already exists at `src/assets/decks/upper-balcony-gallery-new.jpg` and is used in Gallery.tsx but NOT in Decks.tsx)

---

### 3. SUNRIVER DECK BUILDER (`/sunriver-deck-builder`) -- SunriverDeckBuilder.tsx

| # | Section | Current | Required | Source | Status |
|---|---------|---------|----------|--------|--------|
| 3.1 | S1 Hero image | `sunriver-hero-header.jpg` (replaced) | Matches | TXT:182 | DONE |
| 3.2 | S1 Badges | 4 badges matching spec | Matches | TXT:183-187 | DONE |
| 3.3 | S2 Image | `sunriver-section-2.jpg` (replaced) | Matches | TXT:191 | DONE |
| 3.4 | S2 Checkmarks | All 6 items match | Matches | TXT:192-198 | DONE |
| 3.5 | S3 Services | "HOA" replaced with "SROA" | Matches | TXT:200-205 | DONE |
| 3.6 | S7 Process steps | 5 steps matching revision | Matches | TXT:206-211 | DONE |
| 3.7 | S8 Testimonials | 2 real Google reviews (D K, Arthur D.) | Matches | TXT:212-216 | DONE |
| 3.8 | SROA FAQ section | Not present on Sunriver page | Revision adds FAQ section with 7 questions | TXT:256-284 | NEEDS CHANGE |

**Changes needed:**
- **3.8**: Add a Frequently Asked Questions section to the Sunriver page with 7 SROA-related FAQs (TXT:257-284). Use accordion style matching other pages.

---

### 4. SROA SERVICES (`/sunriver-sroa-services`) -- SunriverSROAServices.tsx

| # | Section | Current | Required | Source | Status |
|---|---------|---------|----------|--------|--------|
| 4.1 | S1 Hero image | `sroa-hero-new.jpg` | TXT:220 specifies a different image URL | TXT:220 | NEEDS CHANGE |
| 4.2 | S2 Badges | No changes | Matches | TXT:221 | DONE |
| 4.3 | S3 Services | No changes | Matches | TXT:222 | DONE |
| 4.4 | S4 Image | `sroa-section4-new.jpg` (replaced) | Matches | TXT:224 | DONE |
| 4.5 | S4 Text | Matches revision exactly | Matches | TXT:225-228 | DONE |
| 4.6 | S5 Timeline | All 8 steps match with disclaimer | Matches | TXT:229-244 | DONE |
| 4.7 | S6 No changes | OK | TXT:245 | DONE |
| 4.8 | S7 Text | "42 years" and "registered with SROA Community Development" | Matches | TXT:250 | DONE |
| 4.9 | S7 Image | Uses `sunriver-rebuild-new.jpg` | TXT:247-249 says "will get updated image in a few weeks" with two options | BLOCKED -- client getting new photo |
| 4.10 | FAQ section | Uses accordion style | TXT line 689 (EMAIL REVISION 2): "Please update the FAQs on the SROA page to match the accordion-style FAQs used on the other pages" | TXT:689-690 | DONE (already accordion) |
| 4.11 | S8 Resources | No changes | Matches | TXT:253 | DONE |

**Changes needed:**
- **4.1**: SROA hero image. TXT:220 specifies `https://drive.usercontent.google.com/u/0/uc?id=1LkmeaOOri0t7Yl8qKLEyjEFV68BHnwCv&export=download`. Attempt download and replace `sroa-hero-new.jpg`.

---

### 5. ABOUT PAGE (`/about`) -- About.tsx

| # | Section | Current | Required | Source | Status |
|---|---------|---------|----------|--------|--------|
| 5.1 | S1 Our Story | All 4 paragraphs match revision | Matches | TXT:292-298 | DONE |
| 5.2 | S2 Quality Over Quantity | "We intentionally stay small so we can give every project the attention it deserves." | Matches | TXT:300-301 | DONE |
| 5.3 | S3 Nicholas bio | Full bio matches revision | Matches | TXT:304-306 | DONE |
| 5.4 | S3 Kole Stout | Added with correct bio and philosophy | Matches | TXT:308-311 | DONE |
| 5.5 | S3 Team bios | TXT:693-694 (EMAIL REV 2): "Team bios are currently cut off mid-sentence. Clicking does not expand or reveal the full bio text." | Current code shows full bio in `text-xs` class -- may need visual check | TXT:693-694 | NEEDS CHANGE |
| 5.6 | S4 Credentials | Lists 7 credentials including Bend Chamber | TXT:334 says "I would like the Icon for all of these individual entities with the boxes" -- wants real logos | TXT:312-334 | BLOCKED -- client wants real entity logos |

**Changes needed:**
- **5.5**: Team bios are displayed in `text-xs text-muted-foreground` which makes them very small. The revision says they're "cut off mid-sentence" and "clicking does not expand." Need to make full bios readable -- increase font size and/or add expand/collapse functionality.

---

### 6. KITCHEN REMODELS (`/kitchen-remodels`) -- KitchenRemodels.tsx

| # | Section | Current | Required | Source | Status |
|---|---------|---------|----------|--------|--------|
| 6.1 | S1 H1 | "Central Oregon Kitchen Remodelers You Can Trust" | Matches | TXT:347 | DONE |
| 6.2 | S1 Subheader | Matches | Matches | TXT:348 | DONE |
| 6.3 | S1 Paragraph | Matches | Matches | TXT:349 | DONE |
| 6.4 | S2 Heading | "Expert Kitchen Remodeling Across Central Oregon" | Matches | TXT:351 | DONE |
| 6.5 | S2 Paragraph | Matches | Matches | TXT:352 | DONE |
| 6.6 | S3 Heading | "Kitchen Remodeling Services Across Central Oregon" | Matches | TXT:356 | DONE |
| 6.7 | S3 Subheading | "Custom design, renovations, and full kitchen remodels tailored to your home" | Matches | TXT:357 | DONE |
| 6.8 | S3 Card titles | Custom Kitchen Design / Kitchen Renovations / Full Remodels & Updates | Matches | TXT:359-361 | DONE |
| 6.9 | S3 Card CTAs | Start Your Kitchen Design / Request a Renovation Quote / Get a Kitchen Remodel Estimate | Matches | TXT:363-368 | DONE |
| 6.10 | S4 Why Choose | Checkmarks only, no badges | Matches | TXT:370-375 | DONE |
| 6.11 | S5 Gallery captions | All 4 captions match revision | Matches | TXT:379-387 | DONE |
| 6.12 | S5 Gallery images | Uses Oliviero project photos | TXT provides Google Drive URLs for 4 specific images | TXT:380-387 | Needs confirmation -- are current images correct? |
| 6.13 | S5 Transition line | "See the quality and craftsmanship we bring to every kitchen project." | Matches revision intent for soft transition | TXT:377 | DONE |
| 6.14 | S6 Cost & Timeline | Matches | Matches | TXT:388-390 | DONE |
| 6.15 | S7 FAQs | 5 FAQs match revision, renamed Q2 | Matches | TXT:391-416 | DONE |
| 6.16 | Background image | TXT:697-698 (EMAIL REV 2): "remove filler background images" | No filler background images between sections | TXT:697-698 | DONE |
| 6.17 | Gallery CTA | "View Full Gallery" | Should say "View Kitchen Remodel Gallery" per TXT:710 | TXT:710 | NEEDS CHANGE |

**Changes needed:**
- **6.17**: Change gallery CTA from "View Full Gallery" to "View Kitchen Remodel Gallery"

---

### 7. BATHROOM REMODELS (`/bathroom-remodels`) -- BathroomRemodels.tsx

| # | Section | Current | Required | Source | Status |
|---|---------|---------|----------|--------|--------|
| 7.1 | S1 H1 | "Bathroom Remodels in Central Oregon" | Matches | TXT:426 | DONE |
| 7.2 | S1 Subheading | "Spa-like bathroom remodels built for everyday comfort and lasting performance" | Matches | TXT:427 | DONE |
| 7.3 | S1 CTAs | "Request a Bathroom Remodel Quote" + Call button | Matches | TXT:429-430 | DONE |
| 7.4 | S3 Service cards | 3 text-only cards matching revision | Matches | TXT:434-452 | DONE |
| 7.5 | S4 Why Choose | Checkmarks with "Proven waterproofing standards" and "Coordination with trusted plumbing and electrical trade partners" | Matches | TXT:453-456 | DONE |
| 7.6 | S5 Gallery | 4 photos with correct captions | Matches | TXT:458-462 | DONE |
| 7.7 | S6 FAQs | 6 FAQs matching revision | Matches | TXT:463-488 | DONE |
| 7.8 | Background image | No filler background images | Matches | TXT:697-698 | DONE |
| 7.9 | Gallery CTA | "View Full Gallery" | Should say "View Bathroom Remodel Gallery" per TXT:711 | TXT:711 | NEEDS CHANGE |

**Changes needed:**
- **7.9**: Change gallery CTA from "View Full Gallery" to "View Bathroom Remodel Gallery"

---

### 8. REMODELING (`/remodeling`) -- Remodeling.tsx

| # | Section | Current | Required | Source | Status |
|---|---------|---------|----------|--------|--------|
| 8.1 | S3 Our Approach image | Uses BeforeAfterSlider of A-Frame exterior | "Can you change the our remodeling approach picture to that before and after slide of the A-Frame exterior" | TXT:497 | DONE |
| 8.2 | S5 Gallery | 4 photos with updated captions | Captions match revision | TXT:500-508 | DONE |
| 8.3 | S5 Photo 2 | Uses `olivieroBackPatio` with description "Back patio with outdoor seating, fire pit, upper balcony, and hot tub -- seamless indoor-outdoor living." | Should be "Rear exterior improvements coordinated with deck and patio spaces for cohesive indoor-outdoor flow." (title: "Integrated Remodel & Outdoor Living") | TXT:503-504 | NEEDS CHANGE |
| 8.4 | Gallery CTA | "View Full Gallery" | Should say "View Remodeling Project Gallery" per TXT:712 | TXT:712 | NEEDS CHANGE |
| 8.5 | S5 Photo 2 image | Uses `olivieroBackPatio` (`back-patio-deck.jpg`) | TXT:504 specifies a Google Drive URL for a different image | TXT:504 | NEEDS CHANGE |

**Changes needed:**
- **8.3**: Update Photo 2 description to "Rear exterior improvements coordinated with deck and patio spaces for cohesive indoor-outdoor flow."
- **8.4**: Change gallery CTA from "View Full Gallery" to "View Remodeling Project Gallery"
- **8.5**: Photo 2 image needs replacement. The revision provides a Google Drive URL. This may be the same image as `olivieroBackPatio` or different -- attempt download.

---

### 9. SERVICES PAGE (`/services`) -- Services.tsx

| # | Section | Current | Required | Source | Status |
|---|---------|---------|----------|--------|--------|
| 9.1 | Deck photo | Uses `deck-new-hero.jpg` (already updated) | "Change photo for Deck Building & Repairs" | TXT:517 | DONE |

No other changes specified.

---

### 10. SNOW REMOVAL (`/snow-removal`) -- No changes
TXT:522-523: "No Edits - looks good!" -- **DONE**

### 11. NEW CONSTRUCTION (`/new-construction`) -- No changes
TXT:526-527: "No Edits" -- **DONE**

---

### 12. PRIVACY POLICY (`/privacy`) -- Privacy.tsx

| # | Section | Current | Required | Source | Status |
|---|---------|---------|----------|--------|--------|
| 12.1 | Full content | Matches revision exactly | Matches word for word | TXT:529-600 | DONE |

---

### 13. TERMS OF SERVICE (`/terms`) -- Terms.tsx

| # | Section | Current | Required | Source | Status |
|---|---------|---------|----------|--------|--------|
| 13.1 | Full content | Matches revision exactly | Matches word for word | TXT:602-643 | DONE |

---

### 14. FAQ PAGE (`/faq`) -- FAQ.tsx

| # | Section | Current | Required | Source | Status |
|---|---------|---------|----------|--------|--------|
| 14.1 | Cross-links | FAQ answers link to service page sections | Matches revision intent | TXT:651-680 | DONE |
| 14.2 | FAQ content | 8 FAQs with correct answers and links | Matches | TXT:658-680 | DONE |
| 14.3 | Keep existing FAQs | "What areas do you serve?", "How do I track my project?", "Are you licensed and insured?" | All present | TXT:680 | DONE |

---

### 15. GALLERY PAGE (`/gallery`) -- Gallery.tsx

| # | Section | Current | Required | Source | Status |
|---|---------|---------|----------|--------|--------|
| 15.1 | Categories | "All", "Decks", "Kitchen", "Bathroom", "Living / Feature", "A-Frame Cabin Remodel", "Full Home Remodel" | Matches | TXT:805 | DONE |
| 15.2 | Remove Snow Removal | No snow removal category exists | Matches | TXT:806 | DONE |
| 15.3 | Captions | Always visible, not hover-only | Implemented with `p-5` div below images | TXT:766 | DONE |
| 15.4 | Before/After sliders | Kept at top | Matches | TXT:760 | DONE |
| 15.5 | Gallery photos | All photos organized by category with correct tags | Need to verify all titles/captions match exactly | TXT:812-871 | Mostly DONE |
| 15.6 | Indoor-Outdoor title | "Indoor-Outdoor Window Bar Feature" | Should be "Indoor--Outdoor Window Bar Feature" (em dash) | TXT:860 | NEEDS CHANGE |

**Changes needed:**
- **15.6**: Minor -- update title from "Indoor-Outdoor" to "Indoor--Outdoor" to match revision (uses em dash)

---

### 16. CONTACT PAGE (`/contact`) -- Contact.tsx

| # | Section | Current | Required | Source | Status |
|---|---------|---------|----------|--------|--------|
| 16.1 | Credentials sidebar | Lists CCB, TrexPro, TimberTech Pro, BBB, COBA, Bend Chamber | TXT:739 adds "Bend Chamber of Commerce Member and TimberTech Pro" -- both present | TXT:739 | DONE |
| 16.2 | Email notifications | ContactForm.tsx calls `send-contact-notification` edge function | Edge function created but RESEND_API_KEY not configured | TXT:745 | BLOCKED -- deferred |
| 16.3 | CRM integration | "Pull contact form fill through to JobTread CRM" | Not possible without JobTread API -- email fallback requested | TXT:742-745 | BLOCKED -- deferred |

---

### 17. TRACKING & PRIVACY SETUP

| # | Item | Current | Required | Source | Status |
|---|------|---------|----------|--------|--------|
| 17.1 | GA4 | Not implemented | ID: G-P6MM594ZGJ | TXT:878 | NEEDS CHANGE |
| 17.2 | GTM | Not implemented | ID: GTM-KHK2QTD6 | TXT:881-882 | NEEDS CHANGE |
| 17.3 | Meta Pixel | Not implemented | ID: blank in doc | TXT:884 | BLOCKED -- no ID provided |
| 17.4 | reCAPTCHA | Implemented with correct keys | Matches | TXT:888-913 | DONE |
| 17.5 | Cookie consent | CookieConsent component exists | Needs to gate analytics/marketing scripts | TXT:894-902 | NEEDS CHANGE |

**Changes needed:**
- **17.1-17.2**: Implement GA4 (G-P6MM594ZGJ) and GTM (GTM-KHK2QTD6) on all pages
- **17.5**: Update cookie consent to categorize and gate scripts

---

### 18. GALLERY-ONLY NEW ASSETS (TXT:918-945)

These are GCS-hosted images that should replace or supplement existing gallery photos. Several have already been downloaded:

| # | Asset | Current | Required | Status |
|---|-------|---------|----------|--------|
| 18.1 | A-Frame front symmetrical | `front-symmetrical-new.png` exists | From GCS URL | Check if same |
| 18.2 | Side yard/barn | `side-yard-barn-new.jpg` exists | From GCS URL | Check if same |
| 18.3 | Upper balcony gallery | `upper-balcony-gallery-new.jpg` exists | From GCS URL | Check if same |
| 18.4 | Custom kitchen remodel | `kitchen-custom-gallery-new.jpg` exists | From GCS URL | Check if same |
| 18.5 | Farmhouse sink detail | `farmhouse-sink-detail-new.jpg` exists | From GCS URL | Check if same |

These appear to already exist. No action needed unless images don't match.

---

## SUMMARY OF CHANGES NEEDED

### Implementable Now (Code Changes)

1. **Home Page S5**: Replace Sunriver section image import to use `sunriverHeroHeader` instead of `sunriverSection5`
2. **Decks S2**: Add "PVC &" to composite decking checklist item
3. **Decks S5**: Rewrite Sunriver section text to match revision exactly (remove "60 lbs per sq ft")
4. **Decks S5**: Download and replace Sunriver section image from GCS URL
5. **Decks S7**: Fix Upper Balcony image -- use `upper-balcony-gallery-new.jpg` (already in project) instead of `upper-balcony-rebuild-after.jpg`
6. **Sunriver page**: Add FAQ section with 7 questions
7. **Kitchen page**: Change gallery CTA to "View Kitchen Remodel Gallery"
8. **Bathroom page**: Change gallery CTA to "View Bathroom Remodel Gallery"
9. **Remodeling page**: Update Photo 2 caption and change gallery CTA to "View Remodeling Project Gallery"
10. **About page**: Fix team bio readability (increase font size or add expand/collapse)
11. **Gallery page**: Fix "Indoor-Outdoor" to "Indoor--Outdoor" title
12. **Implement GA4 and GTM**: Add tracking scripts to index.html

### Requires Image Downloads

13. **Decks S5 image**: Download from `https://storage.googleapis.com/msgsndr/XGURfeqIU4yoXltEk3OH/media/698ce9677f6dcfb2ae24f523.jpg`
14. **SROA S1 hero image**: Download from Google Drive URL
15. **Remodeling Photo 2**: Download from Google Drive URL (may fail)

### Blocked / Deferred

- Decks S2 image: "get photo of Cindy's deck w/ Kali" -- waiting on client
- SROA S7 image: "will get an updated image in a few weeks"
- About page credentials: Client wants real entity logos
- Meta Pixel: No ID provided
- Contact form email: RESEND_API_KEY not configured (deferred)
- CRM integration: JobTread API not available

### No Changes (Confirmed Done)

Home S2-S6, Decks S1/S3/S4/S6/S8/S10, Sunriver S1-S3/S7-S8, SROA S2-S8, About S1-S4, Kitchen S1-S7, Bathroom S1-S7, Remodeling S3, Services, Snow Removal, New Construction, Privacy, Terms, FAQ, Gallery structure

---

## IMPLEMENTATION SEQUENCE

### Phase 1: Text and Code Changes (no image dependencies)
1. Home Index.tsx -- swap Sunriver image import
2. Decks.tsx -- fix S2 text, rewrite S5 text, swap Upper Balcony image import
3. SunriverDeckBuilder.tsx -- add FAQ section
4. KitchenRemodels.tsx -- update gallery CTA text
5. BathroomRemodels.tsx -- update gallery CTA text
6. Remodeling.tsx -- update Photo 2 caption, update gallery CTA text
7. About.tsx -- improve team bio readability
8. Gallery.tsx -- fix Indoor-Outdoor title

### Phase 2: Tracking Implementation
9. index.html -- add GTM container snippet (head + body)
10. CookieConsent.tsx -- update to categorize and gate scripts

### Phase 3: Image Downloads
11. Download Decks S5 image from GCS
12. Attempt SROA hero image download
13. Attempt Remodeling Photo 2 download

### Technical Details

**Index.tsx line 15**: Change `import sunriverSection5` to use `sunriverHeroHeader` from decks folder (already imported in SunriverDeckBuilder -- can reuse same asset path). Change line 279 `src={sunriverSection5}` to `src={sunriverHeroHeader}` where `sunriverHeroHeader` is imported from `@/assets/decks/sunriver-hero-header.jpg`.

**Decks.tsx line 138**: Change "Composite decking options as a certified TimberTech and TrexPro builder" to "PVC & Composite decking options as a certified TimberTech and TrexPro builder"

**Decks.tsx lines 288-295**: Rewrite S5 paragraph to match revision exactly:
- Line 1: "Material choice matters -- but in Sunriver, proper design and construction matter even more."
- Line 2: "Decks in Sunriver are exposed to heavy snow loads, ongoing moisture from snow and rain, freeze-thaw cycles, and shaded lots that tend to stay damp longer than other areas in Central Oregon. These conditions place added stress on both materials and structure."
- Line 3: "We account for these factors in every Sunriver project, designing decks that meet SROA guidelines while prioritizing long-term performance and safety. To learn more about Sunriver-specific requirements, approvals, and construction considerations, visit our sunriver-deck-builder page."
- Line 4: "Whether your deck needs to support a hot tub, outdoor kitchen, or regular rental traffic, our team builds with durability and longevity in mind."

**Decks.tsx line 379**: Change `src: upperBalconyRebuild` to reference the gallery version image `upper-balcony-gallery-new.jpg` (import needed).

**SunriverDeckBuilder.tsx**: Add new FAQ section before the Final CTA section, with 7 accordion-style questions (TXT:257-284).

**About.tsx line 160**: Change `text-xs` to `text-sm` for bio text to fix readability. Optionally add a collapsible/expandable pattern.

**Gallery.tsx line 251**: Change "Indoor-Outdoor Window Bar Feature" to "Indoor--Outdoor Window Bar Feature"

**index.html**: Add GTM snippet in head and noscript in body.

