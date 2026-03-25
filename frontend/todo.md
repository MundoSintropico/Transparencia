# Lo que no ves — Development Plan

## Design Guidelines

### Design References
- Dark investigative journalism platforms
- Terminal/hacker aesthetic with modern web design
- Inspired by: The Intercept, Bellingcat, Dark Reading

### Color Palette
- Background: #0a0a0a (near-pure black)
- Surface: #111111 (cards, elevated surfaces)
- Surface Alt: #1a1a1a (closing section)
- Text Primary: #ffffff (white)
- Text Secondary: #a0a0a0 (muted text)
- Accent Green Neon: #00ff88 (Capa 1, quotes, glow)
- Accent Cyan: #00e5ff (Capa 2)
- Accent Magenta: #ff006e (Capa 3)
- Glow effects: box-shadow and text-shadow with accent colors

### Typography
- Headings: Inter or system sans-serif, bold
- Body: Inter, regular weight
- Monospace (stats/quotes): JetBrains Mono or Fira Code (Google Fonts)
- All text white on dark background

### Key Component Styles
- Buttons: Transparent bg with neon border, glow on hover
- Quote blocks: left border green neon, subtle green-tinted bg
- Layer reveal: smooth fade-in + slide-up transition
- Counter animation: count-up on viewport intersection
- Cards (article list): dark surface with subtle border, hover glow

### Images to Generate
1. **hero-surveillance-eye.jpg** — Abstract digital eye made of data streams and code, green neon glow on black background, surveillance theme (Style: photorealistic, dark mood)
2. **layer1-data-sharing.jpg** — Smartphone screen emitting streams of personal data icons (location, photos, messages) dissolving into the void, green neon tint (Style: photorealistic, dark)
3. **layer2-metadata-patterns.jpg** — Abstract visualization of metadata connections, network graph with glowing cyan nodes on dark background (Style: photorealistic, dark)
4. **layer3-surveillance-state.jpg** — Dark cityscape with surveillance cameras and data streams flowing upward, magenta/red tint, dystopian feel (Style: photorealistic, dark mood)

---

## Development Tasks & Files

### 1. src/index.css — Global styles (dark theme, glow effects, animations)
### 2. tailwind.config.ts — Extended with custom colors and animations
### 3. src/data/articles.ts — Article data structure and first article content
### 4. src/hooks/useCountUp.ts — Custom hook for count-up animation on viewport entry
### 5. src/components/ArticleLayer.tsx — Single layer component with reveal animation
### 6. src/components/CountUpStat.tsx — Animated counter component
### 7. src/components/QuoteBlock.tsx — Styled quote block component
### 8. src/pages/Index.tsx — Main page: entry screen + article viewer + closing section + subscription