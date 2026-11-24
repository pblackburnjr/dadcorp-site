# Category selector redesign

**index.html** – each of the four tab buttons now holds a `.tab-name` (Oswald name) and `.tab-num` (item count: 18 / 10 / 5 / 3). Hats also has a small "Coming Soon" tag (`.tab-soon`). All roles, ids, `data-tab`, aria attributes and tabindex are unchanged.

**styles.css** – `.tabs` is now a full-width grid (no 640px cap), so tiles span the same width as the product grid.
- Under 700px: 2×2 grid, 1rem gap (matches the product grid's 2-col gap).
- 700px and up: one row of 4 equal tiles, 1.5rem gap (matches the product grid's gap).
- Each tile: cream fill, 2px black border, square corners, `4px 4px 0` hard shadow (sits inside the catalog padding, so no clipping or overflow). Selected = orange/cream, hover = tan/orange, `:focus-visible` = 3px black outline offset outside the tile.
- Only existing colors, fonts and shadow style are used.

**script.js** – unchanged; it still finds the same `button[role=tab][data-tab]` elements. The `#cat-count` live region and the Hats banner are untouched.

Not visually tested in a browser (no browser run in this session); verify at 1280px and 390px.
