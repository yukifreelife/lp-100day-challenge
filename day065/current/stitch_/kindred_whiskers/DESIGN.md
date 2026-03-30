# Design System Strategy: The Gentle Guardian

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Living Scrapbook."** 

We are moving away from the "clinical shelter" look and toward a warm, editorial experience that feels like a cherished collection of stories. This system avoids the rigid, boxy constraints of traditional web grids. Instead, we embrace **Intentional Asymmetry** and **Tonal Layering**. By using organic overlaps—such as a cat’s portrait breaking the bounds of its container or typography bleeding into soft background shapes—we create a sense of life and movement. This system doesn't just display data; it curates an emotional connection between the rescuer and the adopter.

## 2. Colors: Tonal Depth vs. Structural Lines
This palette is inspired by natural fibers and earth tones. To maintain a premium feel, we rely on color shifts rather than strokes.

*   **Primary (Terracotta - #944931):** Used for "Heartbeat" moments—adoption CTAs and vital status updates.
*   **Secondary (Sage - #56642b):** Represents growth and health. Reserved for medical info, success stories, and "Available" tags.
*   **Surface (Cream - #fff8ef):** Our canvas. It provides a warmth that pure white cannot achieve.

### The Rules of Engagement
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Use `surface_container_low` (#fbf3e4) against `surface` (#fff8ef) to define areas. Let the eye find the edge through color, not lines.
*   **Surface Hierarchy & Nesting:** Create depth by stacking. A `surface_container_lowest` (#ffffff) card should sit on a `surface_container` (#f5edde) background. This "paper-on-felt" stacking creates a tactile, premium quality.
*   **The "Glass & Gradient" Rule:** For floating navigation or modal overlays, use a backdrop-blur (12px+) with `surface` at 80% opacity. For Hero sections, apply a subtle linear gradient from `primary` (#944931) to `primary_container` (#d67d61) at a 15-degree angle to add "soul" to the header.

## 3. Typography: Professional Warmth
We use a dual-font system to balance the "Friendly" (Plus Jakarta Sans) with the "Professional" (Manrope).

*   **Display & Headlines (Plus Jakarta Sans):** Chosen for its generous apertures and soft terminals. Use `display-lg` for emotional impact statements. Set these with tight letter-spacing (-0.02em) to feel like a high-end magazine.
*   **Body & Labels (Manrope):** A workhorse typeface that maintains legibility in dense cat bios. 
*   **Editorial Contrast:** Don't be afraid of scale. Pair a `display-md` headline with `body-sm` metadata. High contrast in size communicates authority and intentionality.

## 4. Elevation & Depth: The Organic Lift
In this design system, shadows are an extension of the light, not a tool for separation.

*   **The Layering Principle:** Avoid elevation levels 4 and 5. Most components should live at Level 1 or 2, using the `surface-container` tiers to create a "nested" feel. 
*   **Ambient Shadows:** If a card must float (e.g., a featured cat profile), use a shadow with a 32px blur, 8px Y-offset, and 4% opacity of `on_surface` (#1e1b13). It should look like a soft glow, not a drop shadow.
*   **The "Ghost Border" Fallback:** In high-density data tables where separation is mandatory, use `outline_variant` (#dac1ba) at **15% opacity**. It should be barely visible—a whisper of a boundary.
*   **Corner Logic:** Use the `xl` (3rem) radius for major containers and `DEFAULT` (1rem) for internal components like inputs. This "nested rounding" mimics organic shapes found in nature.

## 5. Components

### Buttons
*   **Primary:** `primary` background with `on_primary` text. Use `full` (9999px) rounding.
*   **Secondary:** `secondary_container` background. This is for "Learn More" actions that shouldn't compete with adoption buttons.
*   **Interaction:** On hover, shift background to `primary_fixed_dim`. Avoid "lifting" the button with shadows; instead, use a slight scale increase (1.02x).

### Bio Cards
*   **Rule:** Forbid divider lines.
*   **Layout:** Use `spacing.6` (2rem) of internal padding. Place the cat’s name in `headline-md` and traits in `label-md` chips.
*   **Image Treatment:** Use `xl` (3rem) rounding on the top-left and bottom-right corners only to create a "leaf" shape, breaking the standard rectangle.

### Input Fields
*   **Style:** `surface_container_highest` background with no border. 
*   **Focus State:** A 2px "Ghost Border" using `primary` at 40% opacity. 
*   **Labels:** Always use `label-md` in `on_surface_variant`.

### Impact Chips
*   Used for cat traits (e.g., "Good with Dogs"). Use `secondary_fixed` background with `on_secondary_fixed` text. These should feel like soft pebbles.

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins. A text block might be indented 15% on the left while the image on the right bleeds to the edge.
*   **Do** use "Kind Typography"—ensure line heights for `body-lg` are at least 1.6 to ensure the reading experience is never stressful.
*   **Do** integrate high-quality photography where the cat’s eyes are the focal point.

### Don’t
*   **Don’t** use pure black (#000000). Always use `on_surface` (#1e1b13) to keep the tone soft and "trustworthy."
*   **Don’t** use "Alert Red" for everything. Use the `error` (#ba1a1a) sparingly; for "Urgent Rescue" needs, try `primary` first to maintain a sense of calm.
*   **Don’t** use 100% opaque borders or dividers. They shatter the "Living Scrapbook" illusion.