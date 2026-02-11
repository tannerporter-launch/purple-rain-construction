

## Replace Section 5 Sunriver Photo on Homepage

### What Changes

Replace the current Sunriver deck image (Section 5: "Decks Built for Sunriver Living") on the homepage with the new image provided: `Decks_Built_for_Sunriver_Living.jpg`

### Implementation Steps

**Step 1: Copy the image to the project**
- Copy `user-uploads://Decks_Built_for_Sunriver_Living.jpg` to `src/assets/decks/sunriver-section-5.jpg`
- This follows the existing naming convention (sunriver-section-*.jpg) and preserves the asset organization

**Step 2: Update Index.tsx**
- Add new import at line 14 (after the existing stock photo imports):
  ```typescript
  import sunriverSection5 from "@/assets/decks/sunriver-section-5.jpg";
  ```
- Update line 278 in the Sunriver section to use the new image:
  - Change: `src={deckStockPhoto}`
  - To: `src={sunriverSection5}`
- Update the alt text to be more descriptive of the new image content:
  - Current: `"Composite deck with mountain views - built for Sunriver living"`
  - New: `"Modern elevated deck with composite decking, mountain forest views, and glass railing - custom-built for Sunriver living"`

### What Stays Unchanged
- All other homepage sections (Hero, Trust Badges, Services, JobTread, Testimonials, etc.)
- Section 5 layout, styling, text content, and buttons
- Image styling (rounded-2xl shadow, lazy loading, responsive sizing)
- All existing imports for other images

### Image Quality Notes
The new image is a professional photograph of a composite deck with modern styling, mountain forest backdrop, and seating areas — perfect for the "Decks Built for Sunriver Living" section. It shows premium deck craftsmanship in a Sunriver setting.

