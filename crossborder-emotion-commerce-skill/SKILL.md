---
name: crossborder-emotion-commerce-site
description: Build a Next.js emotional storytelling independent commerce site for a product. Use when the user says they need to sell a specific product, validate a cross-border product, build a one-product landing page, create a niche brand site, or generate a high-conversion ecommerce site with SSR/SEO. Do not use for marketplace listing copy only, ERP/admin systems, or generic company websites.
---

# Cross-border Emotional Commerce Site Skill

## Mission

When a user says “I need to sell a [product]”, generate or modify a Next.js site that can validate and sell that product through:

- emotional storytelling
- short-video/ad traffic conversion
- SEO-ready SSR pages
- fast checkout intent
- trust-building blocks
- reusable product-page architecture
- configurable style direction

The default output is **not a giant marketplace**. It is a focused, conversion-oriented site that can be reused across product tests.

## Core principle

Do not start by building a complete ecommerce platform. Build a product validation machine:

`one product → one emotional promise → one landing page → one checkout path → measurable conversion`

The site should be reusable enough to change products quickly, but each product page should feel intentionally designed, not like a generic template.

## Expected input

Minimum useful input:

- Product: required. Example: “interactive bird toy”, “capybara plush night light”, “desk gadget”.
- Target market: optional. Default: US/EU English-speaking consumers.
- Product category: optional. Infer from product.
- Style: optional. If omitted, follow `references/design-system.md`.
- Selling mode: optional. Default: one-product landing page.
- Checkout: optional. Default: Stripe payment link or simple checkout placeholder.
- Assets: optional. If product images/videos are missing, create clear placeholders and specify required media.

## Ask clarifying questions only when blocked

If product name is known, proceed. Do not ask many questions first. Make reasonable assumptions and document them in `docs/assumptions.md` or the final response.

Ask only if the product is ambiguous enough to affect legality, positioning, or implementation.

## Recommended stack

Use:

- Next.js App Router
- TypeScript
- React Server Components where useful
- SSR/SSG-friendly metadata
- Tailwind CSS
- shadcn/ui style components if already installed
- plain local data files for the first version
- Stripe Payment Link or placeholder checkout route for MVP
- no heavy CMS unless user requests it

Avoid:

- building full cart/account/admin unless explicitly requested
- hard-coding copy inside components when it should live in product config
- using client components for static sections
- fake reviews that look real
- unsupported medical/health/safety claims
- copyrighted brand names or protected character assets unless user has rights

## Repository behavior

If starting from scratch:

1. Create or use a Next.js app.
2. Use `app/` router.
3. Create `src/config/product.ts` or `src/content/product.ts`.
4. Create composable landing sections.
5. Add `app/page.tsx`, `app/layout.tsx`, and metadata.
6. Add reusable components under `src/components/sections`.
7. Add docs under `docs/`.

If modifying an existing project:

1. Inspect package manager and app structure first.
2. Preserve existing conventions.
3. Do not introduce new dependencies unless clearly useful.
4. Keep the landing-page content configuration-driven.

## File structure target

```txt
.
├── AGENTS.md
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── product/[slug]/page.tsx          # optional when multi-product testing
├── src/
│   ├── config/
│   │   ├── product.ts
│   │   └── site.ts
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── ProblemAgitation.tsx
│   │   │   ├── DemoStory.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── SocialProof.tsx
│   │   │   ├── Comparison.tsx
│   │   │   ├── OfferStack.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── FinalCTA.tsx
│   │   └── ui/
│   └── lib/
│       ├── seo.ts
│       └── analytics-events.ts
├── docs/
│   ├── assumptions.md
│   ├── conversion-checklist.md
│   └── measurement-plan.md
└── public/
    └── product/
```

## Build workflow

### Step 1: Product extraction

From the user message, infer:

- product name
- buyer persona
- emotional trigger
- main use scenario
- core pain/desire
- impulse-buy hook
- trust objections
- shipping/return sensitivity
- likely content channel
- compliance risks

Write these into the product config.

### Step 2: Choose site mode

Default to one of these:

1. **Single-product landing page**
   - Best for TikTok/Meta ads, short-video traffic, impulse purchase.
   - One product, one CTA, long-form emotional page.

2. **Niche brand starter**
   - Best when the user wants a durable category brand.
   - Home page + 1–3 product pages, still focused around one audience.

3. **Product-test shell**
   - Best for rapid testing multiple unrelated products.
   - Same components, different product config, isolated pages.

Avoid “general store” unless the user explicitly wants it.

### Step 3: Emotional narrative framework

Use this page logic:

1. **Hero: instant desire**
   - Show the product outcome, not just the object.
   - Headline formula: `Turn [ordinary moment] into [emotional result]`.
   - Include direct CTA above the fold.

2. **Problem / tension**
   - Explain the user’s daily annoyance or unmet desire.
   - Keep it concrete and visual.

3. **Demonstration story**
   - Show the product in action.
   - Prefer video-first layout.
   - Include “before / after” or “watch what happens” structure.

4. **Benefits**
   - Convert features into emotional/user outcomes.
   - Use 3–5 benefits.

5. **Trust**
   - Shipping promise, secure payment, support, return policy.
   - Use real review placeholders only if no real reviews.

6. **Comparison**
   - Compare with ordinary alternatives.
   - Do not make unverifiable competitor claims.

7. **Offer**
   - Price, bundle, guarantee, urgency.
   - Urgency must be honest.

8. **FAQ**
   - Handle size, compatibility, shipping, returns, safety, warranty.

9. **Final CTA**
   - Repeat emotional promise.
   - Simple checkout action.

### Step 4: SEO and SSR

Implement:

- `generateMetadata` where dynamic
- static metadata where single page
- canonical URL
- Open Graph and Twitter card images
- JSON-LD Product schema where appropriate
- semantic headings
- accessible buttons and images
- server-rendered main content
- no hidden keyword stuffing

SEO page title formula:

`[Product Name] – [Emotional Outcome] for [Audience]`

Meta description formula:

`Discover [product], a [category] designed to help [audience] [emotional/result benefit]. Fast checkout, clear shipping, and secure payment.`

### Step 5: Visual style selection

If user specified style, apply it.

If not specified, use `references/design-system.md`.

Default design direction:

- premium direct-to-consumer
- emotionally warm but not childish
- high contrast hero
- large product visuals
- editorial spacing
- clean cards
- mobile-first
- trust-first checkout area

Use category-specific adaptations from `references/category-positioning.md`.

### Step 6: Product config schema

Use a central product object similar to:

```ts
export const product = {
  slug: "smart-pet-orb",
  name: "Smart Pet Orb",
  category: "Pet Toy",
  audience: "busy pet owners",
  emotionalPromise: "keep your pet curious, active, and less lonely",
  oneLiner: "An interactive rolling toy that turns quiet afternoons into playful chase sessions.",
  price: "$39",
  compareAtPrice: "$59",
  checkoutUrl: "#checkout",
  hero: {
    eyebrow: "For bored pets and busy humans",
    headline: "Turn lonely afternoons into a chase-your-tail kind of day.",
    subheadline: "A playful motion toy designed to spark curiosity, movement, and joy while you are busy.",
    media: "/product/hero.mp4"
  },
  benefits: [
    {
      title: "More movement without more effort",
      description: "Encourages playful activity during slow parts of the day."
    }
  ],
  objections: [
    {
      question: "How long does shipping take?",
      answer: "Add your actual shipping policy here before launch."
    }
  ]
}
```

### Step 7: Implementation standards

- Use TypeScript.
- Keep components small and named by purpose.
- Avoid over-animation.
- Use responsive design from the start.
- Use real `<button>` or `<a>` semantics.
- Add alt text for images.
- Keep Lighthouse-friendly performance.
- Prefer CSS/Tailwind over runtime animation libraries unless needed.
- Add analytics event stubs:
  - `view_product`
  - `click_buy_now`
  - `view_checkout`
  - `faq_expand`
  - `video_play`

### Step 8: Conversion requirements

Every generated page must include:

- Above-the-fold CTA
- price or starting price
- shipping/return trust text
- at least one demo section
- at least one objection-handling section
- sticky mobile CTA or repeated CTA
- FAQ
- product schema
- measurement plan

### Step 9: Output requirements

When completing the task, report:

- what mode was chosen and why
- what assumptions were made
- what files were created/changed
- how to run locally
- what media assets the user still needs
- what to test first

## Quality bar

The result should feel like a serious DTC landing page, not a developer demo.

Bad output:

- generic “Welcome to our store”
- feature list without emotional reason to buy
- fake testimonials
- low-trust checkout
- no SEO metadata
- desktop-only layout
- category-generic copy

Good output:

- one clear promise
- emotional story
- concrete demos
- fast path to checkout
- trust language
- mobile-first design
- config-driven page
- SEO-ready metadata

## Safety and compliance

Do not help sell illegal or heavily restricted goods. For regulated categories, add compliance placeholders and recommend legal review.

Avoid unsupported claims for:

- health
- medical effects
- child safety
- pet safety
- electronics certifications
- financial outcomes
- guaranteed performance

For toys, kids products, pet electronics, cosmetics, supplements, batteries, and wireless devices, include a compliance note in the launch checklist.

## Use with Claude/Codex

This skill is compatible with Claude-style and Codex-style skill loading because it uses a directory with `SKILL.md`.

For Codex repository guidance, also include or copy `assets/AGENTS.template.md` into the repo root as `AGENTS.md`.
