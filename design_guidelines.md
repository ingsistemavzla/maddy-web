# Design Guidelines: Recruitment Landing Page

## Design Approach
**Reference-Based Approach**: Professional corporate recruitment sites (LinkedIn Talent Solutions, Indeed, Glassdoor) with modern, motivational aesthetics. Clean, aspirational design that balances corporate professionalism with emotional connection.

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Dark Navy: `#102C3A` (primary backgrounds, headlines)
- Royal Blue: `#26358C` (brand elements, accents)
- Cyan Blue: `#048ABF` (interactive elements, highlights)
- Off-White: `#FFFFF3` (text on dark backgrounds)
- Warm Coral: `#F28D77` (CTAs, emphasis, glow effects)

**Layered Grays:**
- `#222222` (darkest - footer base)
- `#555555` (medium dark - borders)
- `#999999` (medium - secondary text)
- `#CCCCCC` (light - dividers)
- `#E5E5E5` (lightest - card backgrounds)

**Gradient Applications:**
- Hero background: Soft gray gradient with subtle navy/cyan overlays
- Headline glow: Cyan text with coral glow effect
- Footer: Dark gray (#222222) → Navy (#102C3A) blend
- Testimonial overlays: Light gray with soft blue transparent overlays

### B. Typography
**Font Stack**: Modern sans-serif (Montserrat, Poppins, or Inter)
- Headlines: Semi-bold to Bold, 2.5rem-4rem
- Subheadings: Semi-bold, 1.5rem-2rem
- Body: Regular, 1rem-1.125rem
- CTA buttons: Bold, 1.125rem

### C. Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: `py-20` desktop, `py-12` mobile
- Card padding: `p-6` to `p-8`
- Element spacing: `gap-6` to `gap-8` in grids

**Container Widths:**
- Max width: `max-w-7xl`
- Content sections: `max-w-6xl`
- Text content: `max-w-4xl`

### D. Component Library

**Hero Section:**
- Full-width gradient background (soft gray with navy/cyan overlays)
- Professional image: Young professional with phone/laptop (right or left aligned)
- Headline: "Opportunity Unlimited" - "Opportunity" in navy (#102C3A), "Unlimited" in cyan (#048ABF) with coral glow effect
- Subtitle: "Apply, Act and Win 🚀" in off-white over gray-blue background
- CTA: Coral background (#F28D77), white text, rounded corners (`rounded-lg`), bold typography

**Benefits Cards (3 cards in grid):**
- Icons: 💰 (salaries), 💻 (remote work), 📈 (growth)
- Alternating backgrounds: Light gray (#E5E5E5) and light blue (cyan with 10% opacity)
- Rounded corners: `rounded-xl`
- Padding: `p-6`
- Layout: `grid-cols-1 md:grid-cols-3 gap-6`

**Trust Badges:**
- Dark gray cards (#555555) with blue borders (royal blue #26358C)
- Text: "95% Success Rate", "10%+ Hired"
- White text with subtle glow
- Centered layout with icons

**Testimonial Section:**
- Light gray background (#E5E5E5) with soft blue overlays
- Professional image placeholder (circular or rounded square)
- Quote text: Navy (#102C3A) with coral highlights (#F28D77) on keywords
- Attribution in royal blue (#26358C)

**Footer:**
- Gradient: Dark gray (#222222) → Navy (#102C3A)
- Off-white text (#FFFFF3)
- Multi-column layout for links
- Social icons in cyan (#048ABF)

### E. Visual Styling
- Smooth gradients throughout
- Geometric overlays (subtle diagonal lines, abstract shapes in hero)
- Subtle textures on cards (light noise or grain)
- Box shadows: Soft, multi-layered (`shadow-lg` to `shadow-2xl`)
- Border radius: Consistent `rounded-lg` to `rounded-xl`
- Transitions: 300ms ease for all interactive elements

## Images
**Hero Image**: Young professional (diverse, smiling) holding phone or working on laptop in bright, modern environment. Image should be positioned on right or left side of hero section, not full-width background. Soft gray gradient background with geometric navy/cyan accent overlays.

**Testimonial Image**: Professional headshot placeholder, circular or rounded square format, with subtle border in royal blue.

## Accessibility & Responsiveness
- High contrast ratios maintained (navy on off-white, white on coral)
- Mobile-first responsive: Single column on mobile, multi-column on desktop
- Touch-friendly CTA buttons: Minimum 44px height
- Smooth scroll animations (fade-in on scroll, no distracting effects)

## Layout Sections (in order)
1. Hero with image, headline with color-coded text, subtitle, coral CTA
2. Benefits grid (3 cards, alternating backgrounds)
3. Trust badges (2 badges, dark cards with blue borders)
4. Testimonials (light gray section with quote and image)
5. Footer (gradient, multi-column, off-white text)