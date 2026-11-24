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


## Pass 3 — Hats are real product tiles (not Coming Soon)

Patrick approved publishing the three hats (storefront publish is happening in a separate job). The Hats section is now regular product tiles with a HAT ribbon, title, details, and a Buy control, matching shirts/hoodies.

Order and titles (as specified):

1. **Bank of Dad 7-Panel Trucker Cap** — `assets/hats/richardson-168-patch.jpg` — details: Richardson 168 — placeholder key: `Bank of Dad 7-Panel Trucker Cap`
2. **7-Panel Camo Trucker Cap** — `assets/hats/richardson-168p-camo.jpg` — details: Richardson 168P · Camo — placeholder key: `7-Panel Camo Trucker Cap`
3. **Embroidered Trucker Cap** — `assets/hats/richardson-112-embroidered.jpg` — details: Richardson 112 · Embroidered — placeholder key: `Embroidered Trucker Cap`

Removed: the "Hats — Coming Soon." banner, Coming Soon pills, the Coming Soon tag on the category box, grayscale "soon" styling, and the SOON ribbon.

**Buy URLs and prices are not filled in yet.** Checked shop.dadcorpshirts.com `/products` and the sitemap at about 6:46 PM ET on Nov 24, 2026: only the existing 10 shirts and 5 hoodies were listed; no hat product URLs. Each hat tile and Buy control has `data-href-placeholder` / `data-buy-placeholder` / `data-product-key` set to the exact title above so URLs can be dropped in later. Buy is `aria-disabled="true"` and does not navigate until an href is added. Prices are omitted on purpose (draft Printify retail was $32.99 / $34.99 for camo, but that is not confirmed as the live price).

`products.json` hat records use `"status": "live_pending_url"` and `"buy_url": null` with the same placeholder keys.
