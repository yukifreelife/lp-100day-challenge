```markdown
# Design System Document: Artisan Coffee & Grain Editorial

## 1. Overview & Creative North Star
### Creative North Star: "The Modern Alchemist’s Journal"
This design system moves beyond the "rustic cafe" trope to create a high-end, editorial experience that feels like a curated journal of a master craftsman. It rejects the rigid, boxy constraints of traditional web design in favor of **Organic Asymmetry** and **Tonal Depth**. 

The goal is to evoke the tactile sensation of heavy-weight paper, the aroma of roasted beans, and the precision of a master baker. We achieve this through:
- **Intentional Breathing Room:** Using large, unconventional margins to frame content like a museum piece.
- **Layered Textures:** Mimicking physical materials (linen, wood, stone) through color layering rather than literal images.
- **Editorial Typography:** High-contrast scale shifts between serif headlines and sans-serif body text to establish an authoritative yet warm voice.

---

## 2. Colors: The Palette of the Earth
The color strategy is "Low Contrast, High Sophistication." We avoid harsh blacks and stark whites in favor of organic, pigment-inspired tones.

### Surface Hierarchy & The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries must be invisible yet felt.
- **Background (`#fcf9f4`):** The primary canvas, reflecting unbleached linen.
- **Tonal Shifts:** Separate sections by shifting from `surface` to `surface-container-low` (`#f6f3ee`) or `surface-container` (`#f0ede8`).
- **Nesting:** To highlight a specific piece of content (like a featured coffee bean), place a `surface-container-lowest` (`#ffffff`) card inside a `surface-container-high` (`#ebe8e3`) section. This creates "light" and "shadow" without artificial effects.

### The "Glass & Gradient" Rule
To add a "soul" to the digital interface, use subtle, long-form gradients for hero backgrounds or large CTA areas:
- **Signature Gradient:** A soft transition from `primary` (`#361f1a`) to `primary-container` (`#4e342e`) at a 145-degree angle.
- **Artisan Glass:** For floating navigation or modal overlays, use `surface` at 85% opacity with a `24px` backdrop blur. This allows the "wheat" and "coffee" tones to bleed through the edges, softening the UI.

---

## 3. Typography: Tradition Meets Clarity
The typography is the "scent" of the brand—rich, traditional, and welcoming.

- **Display & Headlines (Noto Serif):** Used for storytelling. `display-lg` (3.5rem) should be used with tight letter-spacing and generous line-height to create an editorial, magazine-like feel. 
- **Body & Labels (Work Sans):** Chosen for its "honest" and "humane" geometry. It provides a clean, modern counterpoint to the ornate serif headlines.
- **The Hierarchy Rule:** Never center-align long blocks of text. Use left-aligned "ragged right" layouts with `body-lg` to maintain the feel of a hand-pressed book.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "pop"; we use depth to create "focus."

- **The Layering Principle:** Depth is achieved by stacking. A `surface-container-lowest` card sitting on a `surface-container-low` background creates a natural, soft lift.
- **Ambient Shadows:** If a floating element (like a mobile FAB) is required, use a shadow with a `32px` blur, 0px offset, and 6% opacity using the `on-surface` color. It should look like a soft glow of light, not a shadow.
- **The Ghost Border Fallback:** If accessibility requires a border, use `outline-variant` (`#d4c3bf`) at 20% opacity. 100% opaque borders are strictly forbidden as they "trap" the organic flow of the layout.

---

## 5. Components: Handcrafted Digital Elements

### Buttons & Interaction
- **Primary Button:** `primary` (`#361f1a`) background with `on-primary` text. Use `sm` (0.125rem) roundedness for a sharp, architectural feel.
- **Secondary/Ghost:** No background, `primary` text, and a `ghost border` (20% `outline-variant`).
- **Signature Accent:** Use `secondary` (`#7d562d`) for interactive hover states to evoke the warm glow of toasted grain.

### Cards & Lists
- **The "No Divider" Rule:** Forbid horizontal lines between list items. Use `spacing-5` (1.7rem) vertical padding and subtle background color shifts (`surface-container-low`) to group items.
- **Asymmetric Cards:** When displaying products (e.g., bread or coffee bags), use `xl` (0.75rem) roundedness on only the top-left and bottom-right corners to mimic hand-torn paper or organic shapes.

### Input Fields
- **Artisan Inputs:** Use `surface-container-highest` for the input background. Upon focus, transition the background to `surface-container-lowest` and add a subtle `tertiary` (`#1b2813`) underline (2px) to signify the "Forest/Green" accent of the brand's freshness.

### Custom Component: "The Signature Stamp"
A small, circular badge (using `tertiary_container`) with `label-sm` text, used to denote "Craftsman Choice" or "Limited Roast." This acts as a digital wax seal.

---

## 6. Do's and Don'ts

### Do:
- **Use "White Space" as a Material:** Treat empty space as if it were the texture of the cafe's tabletop.
- **Embrace Asymmetry:** Offset images and text blocks by `spacing-8` or `spacing-10` to create a dynamic, editorial rhythm.
- **Layering:** Use `surface-variant` for subtle decorative backgrounds behind images to give them "weight."

### Don't:
- **Don't use 1px Solid Borders:** It breaks the artisan, handcrafted illusion.
- **Don't use Pure Black (#000000):** Use `primary` or `on-surface` for all "dark" elements to keep the palette warm and organic.
- **Don't use Standard Grid Rigidity:** Allow elements to overlap slightly (e.g., an image overlapping a text container by `spacing-4`) to create a sense of physical objects laid out on a table.

### Accessibility Note:
While we use low-contrast tonal shifts for layout, all text must maintain a minimum contrast ratio against its background. Use `on-surface-variant` (`#504442`) for secondary text to ensure it remains readable while staying within the "warm brown" spectrum.```