# Sale prices (25 Nov 2026)

Approved by Patrick, 1:27 PM ET: "Yes, do the sale prices and use those captions".

- `index.html`: price line only on the 18 priced tiles (10 shirts, 5 hoodies, 3 hats), now `<s>regular</s> sale <span class="sale-label">Sale</span>`. Designs tiles are untouched.
  - Shirts: ~~$19.99~~ $17.99
  - Hoodies: ~~From $29.99~~ From $27.99
  - Hats: ~~$29.99~~ $27.99 (168), ~~$31.99~~ $29.99 (168P), ~~$28.99~~ $26.99 (112)
- `styles.css`: two rules added, `.price s` (muted, struck, slightly smaller) and `.sale-label` (small outlined orange tag, uppercase via CSS, HTML text is `Sale`).
- `products.json`: added `regular_price` and `sale_price` to each shirt, hoodie and hat. `price` now equals the sale display string.
- No changes to layout, tile size, grid, tabs, buttons, URLs, `script.js`, or assets. No git commands were run.

## Note for review
The previous live prices were higher than the new "regular" prices (shirts $29.99, hoodies From $49.99, hats $32.99/$34.99/$32.99). The strikethrough shows the approved captions' values, not the old live prices. Please confirm those are the true regular prices on the shop.
