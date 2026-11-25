# Category order changes (live tile styling untouched)

- Tabs now: Designs, Shirts, Hoodies, Hats, All (All last). Default with no hash and `#catalog` = Designs. `#designs`, `#shirts`, `#hoodies`, `#hats`, `#all` deep links work; ARIA and keyboard nav unchanged.
- New Designs tab: 10 artwork-only square tiles (`assets/designs/`), title only, no price/ribbon/Buy; tile click goes to the matching shirt buy URL. One tiny CSS rule hides the ribbon on tiles with no `data-ribbon`.
- Shirts: tile image is now the shirt mockup (`assets/shirts/`); artwork hover/tap swap removed. Titles, prices, details, URLs unchanged.
- Hoodies: unchanged.
- Hats: Coming Soon removed (tiles, SOON ribbons, pills, banner, script logic). 3 live HAT tiles with price, details, Buy and `data-href`: 7-Panel Trucker $32.99, 7-Panel Camo $34.99, Embroidered $32.99, using the new `assets/hats/bank-of-dad-*` JPEGs.
- All: shows Designs, Shirts, Hoodies, Hats in that order in the existing grid.
- `products.json`: hats marked live with buy URLs/prices/images (existing `design_tile` fields already cover the designs).
- Files touched: index.html, script.js, styles.css (one rule), products.json.
