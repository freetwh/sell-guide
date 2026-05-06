# AGENTS.md — Cross-border Emotional Commerce Site

## Project goal

Build or modify a Next.js independent commerce site that sells a specific product through emotional storytelling, SEO-ready SSR, mobile-first design, and high-conversion landing-page structure.

## Default behavior

When the user says “I need to sell a [product]”:

1. Infer product, audience, emotional promise, objections, and compliance risks.
2. Build a focused one-product landing page unless the user requests a broader brand site.
3. Use the product config as the source of truth.
4. Implement SSR/SEO metadata.
5. Add trust, FAQ, demo, and CTA sections.
6. Avoid building a full marketplace unless requested.

## Stack expectations

- Next.js App Router
- TypeScript
- Tailwind CSS
- Server-rendered main content
- Componentized sections
- Product config under `src/config/product.ts`
- No unnecessary dependencies

## Design expectations

Use `references/design-system.md` from the skill when available. If unavailable, default to premium modern DTC style: mobile-first, high trust, strong hero, clear CTA, emotional copy, demo-first layout.

## Quality rules

- Do not invent real customer reviews.
- Do not invent certifications, shipping times, or guarantees.
- Do not make unsupported medical, safety, or performance claims.
- Do not overbuild admin, account, cart, or CMS for MVP.
- Keep copy emotionally specific and product-specific.
