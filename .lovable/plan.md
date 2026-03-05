

# Gallery Tag Removal — 4 Items

**File:** `src/pages/Gallery.tsx`

Remove the `"Full Home Remodel"` tag from the `tags` array of exactly these 4 gallery items. Keep their `category` property unchanged. No other modifications.

| ID | Title | Current `tags` | Updated `tags` |
|----|-------|---------------|----------------|
| 14 | Custom French Doors (line 263) | `["Full Home Remodel", "Living / Feature"]` | `["Living / Feature"]` |
| 23 | Custom Walk-In Shower & Built-In Storage (line 300) | `["Full Home Remodel", "Bathroom"]` | `["Bathroom"]` |
| 24 | Modern Vanity & Lighting (line 309) | `["Full Home Remodel", "Bathroom"]` | `["Bathroom"]` |
| 25 | Updated Water Closet (line 318) | `["Full Home Remodel", "Bathroom"]` | `["Bathroom"]` |

**Effect:** These 4 cards will no longer display the "Full Home Remodel" tag badge and will not appear when the "Full Home Remodel" filter is selected. They will still appear under "All", "Bathroom" (or "Living / Feature" for item 14), and remain in their current grid position.

**Do not change:** titles, descriptions, images, category property, subgroup, ordering, or any other gallery items.

