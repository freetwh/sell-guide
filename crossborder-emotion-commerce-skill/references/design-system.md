# Design System for Emotional Cross-border Commerce Sites

## Default visual direction

If the user does not specify a style, use this direction:

**Premium modern DTC, editorial, mobile-first, high-trust.**

Characteristics:

- clean but not empty
- strong product visuals
- one dominant emotional idea
- large rounded sections
- generous spacing
- high contrast hero
- warm human copy
- subtle gradients or soft backgrounds
- product-demo-first layout
- trust blocks near every purchase CTA

## Style presets

### 1. Premium Minimal

Use for: desk gadgets, smart hardware, accessories, design products.

- Background: off-white, charcoal, soft gray.
- Typography: large sans headlines, tight line height.
- Components: large cards, thin borders, no shadows — use border or background contrast instead.
- Copy mood: confident, concise, refined.
- Avoid: cartoon icons, noisy gradients.

### 2. Playful Pet

Use for: pet toys, pet comfort products, cute animal products.

- Background: cream, warm beige, pale yellow, soft blue.
- Typography: friendly rounded sans.
- Components: pill badges, motion-demo cards, playful FAQ.
- Copy mood: warm, empathetic, energetic.
- Avoid: childish clutter or fake veterinarian claims.

### 3. Viral Gadget

Use for: TikTok products, novelty gadgets, visual demo products.

- Background: dark hero + bright product highlights.
- Typography: bold, short, punchy.
- Components: video-first sections, before/after, reaction cards.
- Copy mood: fast, visual, curiosity-driven.
- Avoid: scammy urgency or fake countdowns.

### 4. Cozy Gift

Use for: plush, lamps, home gifts, seasonal items.

- Background: warm gradient, no shadows — use background color contrast, lifestyle imagery.
- Typography: gentle headline with story tone.
- Components: gift badges, occasion cards, testimonial-style story blocks.
- Copy mood: sentimental, comforting, giftable.
- Avoid: overly technical specs in hero.

### 5. Futuristic Hardware

Use for: AI devices, robotics, smart electronics.

- Background: black/near-black, glass panels, controlled glow.
- Typography: sharp modern sans.
- Components: spec cards, interaction demo, product silhouette.
- Copy mood: aspirational, precise, cinematic.
- Avoid: overpromising intelligence or capabilities.

## Page rhythm

Use this rhythm:

1. Dark/strong hero or warm hero
2. White/clean explanation
3. Video or image demo
4. Benefits cards
5. Trust band
6. Comparison
7. Offer
8. FAQ
9. Final CTA

## Copy rules

- Sell the outcome, not the object.
- Use concrete scenes.
- Replace “high quality” with specific trust details.
- Avoid fake proof.
- Avoid exaggerated claims.
- Use short headings and slightly longer support text.

## Example headline formulas

- “Turn [boring moment] into [delightful outcome].”
- “The tiny [category] that makes [routine] feel different.”
- “A better way to [job-to-be-done], without [friction].”
- “Made for [audience] who want [desire], not [annoyance].”

## Trust language

Use real policies when known. If unknown, use placeholders:

- “Shipping policy to be confirmed before launch.”
- “Returns policy placeholder — replace with actual policy.”
- “Secure checkout via Stripe.”
- “Support email placeholder.”

Never invent exact delivery times, certifications, or review counts.

## Component style

- **Do not use shadows** (`shadow`, `box-shadow`, `drop-shadow`). Use border, background color contrast, or spacing to separate elements. Shadows add visual noise and feel dated on modern DTC sites.
- Mobile CTA must be visible after scroll.
- CTA button text should be action-driven:
  - “Get Yours”
  - “See It in Action”
  - “Buy Now”
  - “Start with One”
- CTA should never be the only trust element.
- Product media should dominate over decorative illustration.

## Media checklist

Ask user to provide or generate:

- 1 hero product image or video
- 1 demo video
- 3 lifestyle images
- 1 transparent PNG product cutout
- 1 packaging/shipping image if available
- 3 short UGC-style clips for ads

**Placeholder images:** When real product photos are not available, use Unsplash source images as placeholders. Use direct Unsplash URLs with relevant keywords:

```
https://images.unsplash.com/photo-{id}?w=800&h=600&fit=crop
```

Search Unsplash for product-relevant keywords (e.g., "hanfu", "traditional dress", "pet toy", "desk gadget") and pick photos that match the product context. Always add a descriptive `alt` text and mark the image as a placeholder in code comments. Never use emoji, colored divs, or generic stock placeholders.
