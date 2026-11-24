# dadcorpshirts.com redesign notes

## Pass 1 — bigger category boxes

- The category buttons became full-catalog-width boxes: Oswald name + item count, Hats also carries a small "Coming Soon" tag (`.tab-soon`).
- Under 700px: 2-column grid, 1rem gap. 700px and up: one row of 4, 1.5rem gap (same gaps as the product grid).
- Each box: cream fill, 2px black border, square corners, `4px 4px 0` hard shadow (sits inside the catalog padding, so nothing clips). Selected = orange/cream, hover = tan/orange, `:focus-visible` = 3px black outline.

## Pass 2 — stacked sections + shirt mockups

**Page order below the hero/tagline:** category boxes, then four always-visible sections, each with an Oswald uppercase heading (`.cat-title`):

1. **Designs** (`#designs`) — 10 square tiles (aspect-ratio 1, 2px black border) showing only the flat art from `assets/designs/`. Title underneath, no price, no ribbon, no hover swap. Each tile links to the matching shirt's existing shop URL.
2. **Shirts** (`#shirts`) — same 10 products, titles, prices, details, Buy links and SHIRT ribbon. Tile image is now the shirt mockup from `assets/shirts/` (one image, no artwork-to-mockup swap); click goes to the buy URL, like hoodies.
3. **Hoodies** (`#hoodies`) — the 5 hoodie tiles, unchanged.
4. **Hats** (`#hats`) — see Pass 3; these are now real product tiles, not Coming Soon.

**Category boxes** are now `<a href="#designs|#shirts|#hoodies|#hats">` jump links inside a `<nav>`: Designs 10, Shirts 10, Hoodies 5, Hats 3. The "All / 18 items" box is gone. They no longer filter or hide anything. The box for the section currently in view gets `aria-current="true"` (orange/cream); keyboard focus and the visible focus ring still work.

**Header nav:** Designs, Shirts, Hoodies, Hats, About (same hashes); the current link turns orange. At 520px and under, the nav drops to its own full-width row below the logo and spreads evenly, so it can't overflow at 390px.

**script.js:** removed the tab/filter logic and the hover/tap artwork-to-mockup swap. Remaining: tile click-through to `data-href` when present, and a scroll-driven current-section highlight (`aria-current`). Deep links work through native anchors + the existing `scroll-padding-top` (`#catalog` lands on the category boxes).

**styles.css:** removed the `.img-shirt` reveal, tab/filter, `.cat-count` and `[hidden]` rules; added `.cat-section`, `.cat-title`, `.design-img`. Colors, fonts, widths (`.catalog` 1280px, padding 1rem / 2rem at 1100px) are unchanged. The boxes and grids share the same container.

Not touched: announcement, hero, tagline, about, footer, Cloudflare snippet, product data, files under `assets/`, CNAME, `.nojekyll`.

Not visually tested in a browser (no browser run in this session); please check at 1280px and 390px, including the header row and the `#designs`/`#shirts`/`#hoodies`/`#hats`/`#about` deep links.


## Pass 3 — Hats are live product tiles

Patrick approved publishing the three hats. The Hats section is now regular product tiles (HAT ribbon, title, price, details, Buy), in this order:

1. **Bank of Dad 7-Panel Trucker Cap** — $32.99 — https://shop.dadcorpshirts.com/product/35007433 — Printify `6b05fb0443337059c707be17` — image `assets/hats/bank-of-dad-7-panel-trucker-cap.jpg` (storefront default front mockup, variant 251116 / camera 131159, white backdrop flood-filled to site tan `#F3DBB9` and sized 1200×1200).
2. **Bank of Dad 7-Panel Camo Trucker Cap** — $34.99 — https://shop.dadcorpshirts.com/product/35007436 — Printify `6b05fb0343337059c707be16` — image `assets/hats/bank-of-dad-7-panel-camo-trucker-cap.jpg`. The storefront's preloaded default front mockup (variant 251134) is byte-identical to the 7-panel default — a known Fulfill Engine limitation; none of the official mockups show a camo pattern. The tile uses the next distinct storefront front mockup, variant 251135 / camera 135327, which is also this product's Open Graph image.
3. **Bank of Dad Embroidered Trucker Cap** — $32.99 — https://shop.dadcorpshirts.com/product/35007441 — Printify `6b05fa9de50eaed6300383d6` — image `assets/hats/bank-of-dad-embroidered-trucker-cap.jpg` (storefront default front mockup, variant 118727 / camera 110130, same tan treatment).

Removed: Coming Soon banner, pills, category-box tag, grayscale soon styling, SOON ribbon, and the title-keyed URL placeholders. Buy links and tile clicks go to the live product URLs above. Details lines (Richardson 168 / 168P · Camo / 112 · Embroidered) are unchanged facts.
