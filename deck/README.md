# IMAGINE Group AI — Pitch Deck v2 (brand-unified)

Seven deck pages rebuilt as a single design system derived from
`IMAGINE-group-Ai-brand-kit.jpg`: near-black stage, cream body text, metallic-gold
headlines and line icons, Montserrat with wide letterspacing, one shared
header/footer/card/icon language across every page.

| Page | File |
|------|------|
| 2 — What Are We Solving? | `slide-02-what-are-we-solving.html` |
| 3 — How Are We Solving This? | `slide-03-how-are-we-solving-this.html` |
| 4 — Our Proprietary Advantage | `slide-04-our-proprietary-advantage.html` |
| 6 — Go-To-Market Strategy | `slide-06-go-to-market-strategy.html` |
| 7 — The Team *(new)* | `slide-07-the-team.html` |
| 8 — The Competitive Landscape | `slide-08-competitive-landscape.html` |
| 9 — The Economics of the Ecosystem | `slide-09-economics-of-the-ecosystem.html` |

- `brand.css` — the design system (palette, type scale, header/footer, cards, pills).
- `icons.js` — shared gold line-icon SVG sprite.
- `fonts/` — Montserrat 200–700 (OFL licensed), embedded so renders are self-contained.
- `exports/` — rendered 1536×1024 PNGs (same canvas as the original slides).
- `render.sh` — re-renders all HTML pages to PNG via headless Chromium.

Text content on pages 2/3/4/6/8/9 is carried over verbatim from the original
slide PNGs at the repo root. Team titles and bios on page 7 are **placeholders
pending real copy**.
