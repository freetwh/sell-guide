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

- Next.js App Router (deployed to Cloudflare Pages via `@cloudflare/next-on-pages`)
- TypeScript
- React Server Components where useful
- SSR/SSG-friendly metadata
- Tailwind CSS
- shadcn/ui style components if already installed
- plain local data files for the first version
- Stripe Checkout (hosted) for payment
- Cloudflare D1 (SQLite) + Drizzle ORM for order/subscriber storage
- Cloudflare Images for product image optimization
- GA4 + Meta Pixel for analytics
- Resend or Cloudflare Email Service for transactional email
- no heavy CMS unless user requests it
- no separate backend project — use Next.js API Routes + Server Actions on Cloudflare Workers

Deployment target: **Cloudflare Pages + Workers** (free tier allows commercial use, unlimited bandwidth, no egress fees).

Avoid:

- building full cart/account/admin unless explicitly requested
- hard-coding copy inside components when it should live in product config
- using client components for static sections
- fake reviews that look real
- unsupported medical/health/safety claims
- copyrighted brand names or protected character assets unless user has rights
- using `next/image` default loader (use Cloudflare Images or unoptimized instead)
- Node.js APIs in middleware (not supported on Cloudflare Workers runtime)

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
├── .dev.vars                             # local secrets (Stripe keys, etc.) — gitignored
├── wrangler.toml                         # Cloudflare Pages + D1 config
├── app/
│   ├── layout.tsx                        # inject analytics scripts, cookie consent
│   ├── page.tsx
│   ├── globals.css
│   ├── robots.ts                         # generates robots.txt
│   ├── sitemap.ts                        # generates sitemap.xml
│   ├── product/[slug]/page.tsx           # optional when multi-product testing
│   └── api/
│       ├── checkout/route.ts             # create Stripe Checkout Session
│       ├── stripe/webhook/route.ts       # handle Stripe webhooks
│       └── subscribe/route.ts            # email capture endpoint
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
│   │   ├── ui/
│   │   └── analytics/
│   │       ├── GoogleAnalytics.tsx       # GA4 script injection
│   │       ├── MetaPixel.tsx             # Meta/Facebook pixel
│   │       └── EventTracker.tsx          # client-side event tracking wrapper
│   ├── lib/
│   │   ├── seo.ts
│   │   ├── analytics.ts                  # event dispatch helpers (gtag, fbq, custom)
│   │   ├── db.ts                         # D1 database client via Drizzle
│   │   └── stripe.ts                     # Stripe client singleton
│   ├── db/
│   │   └── schema.ts                     # D1 orders, subscribers tables (SQLite)
│   └── actions/
│       └── checkout.ts                   # Server Action for checkout flow
├── docs/
│   ├── assumptions.md
│   ├── conversion-checklist.md
│   └── measurement-plan.md
└── public/
    ├── product/
    ├── robots.txt                        # optional if using app/robots.ts
    └── og-image.jpg                      # required for social sharing
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
- **Do not use shadows** (`shadow-*`, `box-shadow`, `drop-shadow`). Use border, background color, or spacing for visual separation.
- **Placeholder images**: use Unsplash source URLs with product-relevant keywords. Never use emoji, colored divs, or generic gray boxes as image placeholders.
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

### Step 10: Payment integration

For MVP, use Stripe Checkout (hosted or embedded). Do not build a custom payment form.

**Architecture:**

- `app/api/checkout/route.ts` — creates a Stripe Checkout Session with product/price from config, returns session URL
- `app/api/stripe/webhook/route.ts` — receives Stripe events, verifies signature with `stripe.webhooks.constructEvent(await req.text(), sig, secret)`, handles `checkout.session.completed` to store order
- Client CTA buttons call the checkout route and redirect to Stripe
- Store order in database on successful payment (see Step 12)

**Required env vars:**

```
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

**Checkout Session must include:**

- `line_items` with product name, price, quantity
- `mode: 'payment'` for one-time purchases
- `success_url` and `cancel_url`
- `metadata` with product slug for tracking
- `shipping_address_collection` if physical product
- `allow_promotion_codes: true` if coupon support is needed

**Webhook must handle:**

- `checkout.session.completed` — store order, send confirmation
- `checkout.session.expired` — optional cleanup
- Idempotent processing: check event ID in DB before acting

**Do NOT:**

- Build a custom credit card form (PCI compliance burden)
- Store card numbers
- Use Stripe Elements unless user explicitly requests embedded checkout

### Step 11: Analytics and tracking

Every generated site must include a measurement layer. Do not just add event stubs — wire up real tracking.

**Minimum viable analytics stack:**

1. **Google Analytics 4 (GA4)** — page views, conversions, audience
   - Inject `gtag.js` in `layout.tsx` via Next.js `<Script>` component
   - Use `NEXT_PUBLIC_GA_ID` env var
   - Create `src/lib/analytics.ts` with typed event helpers

2. **Meta Pixel** — Facebook/Instagram ad conversion tracking
   - Inject pixel script in `layout.tsx`
   - Use `NEXT_PUBLIC_META_PIXEL_ID` env var
   - Track `PageView`, `ViewContent`, `InitiateCheckout`, `Purchase` events

3. **Custom event tracking** — dispatch to both GA4 and Meta
   - Create `src/lib/analytics.ts` with unified `trackEvent()` function
   - Events to track:
     - `view_product` — page load with product metadata
     - `click_buy_now` — CTA button click with product/price
     - `view_checkout` — checkout page load
     - `initiate_checkout` — checkout started (Meta standard event)
     - `purchase` — successful payment with value/currency
     - `faq_expand` — FAQ interaction
     - `video_play` — demo video engagement
     - `scroll_depth` — 25/50/75/100% scroll milestones
     - `newsletter_signup` — email capture

4. **Component structure:**
   - `src/components/analytics/GoogleAnalytics.tsx` — `<Script>` wrapper for gtag
   - `src/components/analytics/MetaPixel.tsx` — `<Script>` wrapper for fbq
   - Inject both in `layout.tsx` `<head>`

**Measurement plan (`docs/measurement-plan.md`):**

Create a document listing:
- KPIs (conversion rate, CPA, ROAS, bounce rate)
- Event taxonomy (event name, trigger, parameters, destination)
- Conversion funnel stages
- Ad platform pixel events mapping

**Do NOT:**

- Add analytics scripts without env var guards (breaks SSR/build)
- Use `window.gtag` without null checks
- Track PII (email, name) in analytics events
- Block page load on analytics scripts (use `strategy="afterInteractive"`)

### Step 12: Backend architecture

Deploy Next.js to **Cloudflare Pages + Workers**. Do NOT create a separate backend project.

**Why Cloudflare over Vercel:**

- Free tier allows commercial use (Vercel Hobby does not)
- Unlimited bandwidth, no egress fees
- D1 database free tier: 5GB storage + 5M reads/day + 100K writes/day
- Fixed cost: $0-5/month vs Vercel's $20/month minimum
- No surprise bandwidth overage bills

**Why built-in backend wins:**

- Stripe webhook handling via Route Handlers is reliable on Cloudflare Workers
- Server Actions handle checkout mutations with no CORS overhead
- One deployment pipeline, one codebase, one type system

**Deployment setup:**

- Use `@cloudflare/next-on-pages` to build Next.js for Cloudflare
- Configure `wrangler.toml` with D1 database binding
- Set secrets via `wrangler secret put` (Stripe keys, etc.)
- Image optimization: use `unoptimized: true` in `next.config.ts` or Cloudflare Images (Next.js default image loader does not work on Cloudflare)

**Database: Cloudflare D1 (SQLite)**

- **D1** — serverless SQLite on Cloudflare edge, free tier covers MVP
- **ORM: Drizzle** with `drizzle-orm/d1` adapter — type-safe, minimal boilerplate
- No egress fees, no connection pooling needed (serverless)

**Minimum schema (SQLite via Drizzle):**

```ts
// src/db/schema.ts
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const orders = sqliteTable('orders', {
  id: text('id').primaryKey(),
  stripeSessionId: text('stripe_session_id').unique(),
  email: text('email'),
  productSlug: text('product_slug'),
  amount: integer('amount'),           // in cents
  currency: text('currency').default('usd'),
  status: text('status').default('pending'),
  createdAt: text('created_at').default(sql`(datetime('now'))`),
});

export const subscribers = sqliteTable('subscribers', {
  id: text('id').primaryKey(),
  email: text('email').unique(),
  source: text('source'),              // 'landing_page', 'exit_intent', etc.
  createdAt: text('created_at').default(sql`(datetime('now'))`),
});
```

**wrangler.toml:**

```toml
name = "hanfu-store"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]

[[d1_databases]]
binding = "DB"
database_name = "hanfu-store-db"
database_id = "<your-d1-database-id>"
```

**D1 client setup:**

```ts
// src/lib/db.ts
import { drizzle } from 'drizzle-orm/d1';
import * as schema from '@/db/schema';

export function getDb(env: CloudflareEnv) {
  return drizzle(env.DB, { schema });
}
```

**Accessing D1 in Route Handlers / Server Actions:**

```ts
// In Route Handlers — access via context
export async function POST(request: Request) {
  const db = getDb(process.env);  // Cloudflare Pages auto-binds D1
  // ... use db
}
```

**API routes needed:**

- `POST /api/checkout` — create Stripe Checkout Session
- `POST /api/stripe/webhook` — handle payment events
- `POST /api/subscribe` — email capture

**Do NOT:**

- Build a REST API with CRUD for products (use config files)
- Add authentication unless user explicitly needs accounts
- Use a headless CMS unless user requests it
- Over-engineer with microservices for a single-product site
- Use `next/image` default loader (not supported on Cloudflare)

### Step 13: Email and marketing

**Email capture (minimum viable):**

- Add newsletter signup form in landing page (below CTA or as exit-intent)
- `POST /api/subscribe` stores email in `subscribers` table
- Use env vars for email service: `MAILCHIMP_API_KEY` or `RESEND_API_KEY`
- Server Action sends subscriber to email service on form submit

**Transactional emails:**

- Order confirmation email on `checkout.session.completed`
- Use Resend, SendGrid, or Postmark (not raw SMTP)
- Template should include: order summary, shipping timeline, support contact

**Marketing integrations to expose in config:**

```ts
// src/config/site.ts — add marketing section
marketing: {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  mailchimpAudienceId: process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID,
  tiktokPixelId: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID,   // optional
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,        // optional
}
```

**UTM tracking:**

- Preserve UTM parameters across navigation (store in sessionStorage or cookie)
- Pass UTM data to Stripe Checkout Session metadata for attribution
- Create `src/lib/utm.ts` to parse and persist UTM params

### Step 14: SEO completeness

Step 4 covers metadata basics. This step ensures SEO is actually complete and production-ready.

**Must generate (not just define):**

- `app/robots.ts` — Next.js metadata API, allows all crawlers, points to sitemap
- `app/sitemap.ts` — dynamic sitemap with all pages, last modified dates
- JSON-LD schemas must be **injected into the page** via `<script type="application/ld+json">`, not just generated in a utility file
- Canonical URL on every page
- OG image must **actually exist** in `/public/` — do not reference a missing file
- Product images must have descriptive `alt` text, not empty strings

**JSON-LD required schemas:**

- `Product` schema with name, description, image, price, availability, brand
- `FAQPage` schema for FAQ section
- `Organization` schema in layout for site-level entity
- `BreadcrumbList` if multi-page

**Check before launch:**

- [ ] `robots.txt` renders at `/robots.txt`
- [ ] `sitemap.xml` renders at `/sitemap.xml`
- [ ] OG image exists and is 1200x630px
- [ ] JSON-LD validates at Google Rich Results Test
- [ ] All pages have unique `<title>` and `<meta description>`
- [ ] Canonical URLs point to production domain
- [ ] No broken internal links
- [ ] Images have descriptive alt text

### Step 15: Deployment to Cloudflare

**Setup commands:**

```bash
# Install dependencies
npm install -D @cloudflare/next-on-pages wrangler

# Create D1 database
wrangler d1 create hanfu-store-db
# Copy the database_id into wrangler.toml

# Run D1 migrations locally
npx drizzle-kit push

# Set production secrets
wrangler secret put STRIPE_SECRET_KEY
wrangler secret put STRIPE_WEBHOOK_SECRET

# Build for Cloudflare
npx @cloudflare/next-on-pages

# Deploy
wrangler pages deploy .vercel/output/static
```

**next.config.ts for Cloudflare:**

```ts
const nextConfig = {
  images: {
    unoptimized: true,  // required — Next.js image optimizer not available on CF
  },
};
```

**Stripe webhook URL (set in Stripe Dashboard):**

```
https://your-domain.com/api/stripe/webhook
```

### Step 16: Post-build — Manual configuration checklist

**After the code is built and deployed, the user MUST manually complete these items. Report this checklist prominently in the final output.**

**Domain & DNS (user action required):**

- [ ] Purchase domain name (Cloudflare Registrar, Namecheap, etc.)
- [ ] Add custom domain in Cloudflare Pages dashboard
- [ ] Configure DNS records to point to Cloudflare Pages
- [ ] Enable SSL/TLS (Cloudflare auto-provisions certificates)
- [ ] Update `site.url` in `src/config/site.ts` to production domain
- [ ] Update `canonical` URLs and `metadataBase` in `layout.tsx`

**Stripe setup (user action required):**

- [ ] Create Stripe account at dashboard.stripe.com
- [ ] Get API keys: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- [ ] Create product and price in Stripe Dashboard (or via API)
- [ ] Update `checkoutUrl` in `src/config/product.ts` if using Stripe Payment Links
- [ ] Set up webhook endpoint in Stripe Dashboard → Developers → Webhooks
  - URL: `https://your-domain.com/api/stripe/webhook`
  - Events: `checkout.session.completed`, `checkout.session.expired`
- [ ] Get `STRIPE_WEBHOOK_SECRET` from webhook signing secret
- [ ] Set all three secrets in Cloudflare: `wrangler secret put <KEY>`
- [ ] Test checkout flow with Stripe test mode before going live
- [ ] Switch to live mode keys when ready

**Database (user action required):**

- [ ] Create D1 database: `wrangler d1 create hanfu-store-db`
- [ ] Copy `database_id` into `wrangler.toml`
- [ ] Run migrations: `wrangler d1 migrations apply hanfu-store-db`
- [ ] Verify tables exist: `wrangler d1 execute hanfu-store-db --command "SELECT name FROM sqlite_master WHERE type='table'"`

**Analytics (user action required):**

- [ ] Create Google Analytics 4 property → get Measurement ID (G-XXXXXXX)
- [ ] Set `NEXT_PUBLIC_GA_ID` in Cloudflare Pages environment variables
- [ ] Create Meta Pixel in Facebook Events Manager → get Pixel ID
- [ ] Set `NEXT_PUBLIC_META_PIXEL_ID` in environment variables
- [ ] Verify events in GA4 DebugView and Meta Events Manager after launch
- [ ] Set up conversion goals in GA4 and Meta Ads Manager

**Email (user action required):**

- [ ] Create Resend account (resend.com) or use Cloudflare Email Service
- [ ] Get API key → set `RESEND_API_KEY` in environment variables
- [ ] Verify sending domain (SPF, DKIM, DMARC records)
- [ ] Test order confirmation email delivery
- [ ] Set up newsletter capture destination (Resend Audience, Mailchimp, etc.)

**Product content (user action required):**

- [ ] Replace all placeholder images with real product photos
- [ ] Create and upload OG image (1200x630px) to `/public/og-image.jpg`
- [ ] Update product copy in `src/config/product.ts`
- [ ] Update testimonials with real reviews (or remove if none available)
- [ ] Update shipping and return policies with real policies
- [ ] Set correct product price in both config and Stripe

**Legal (user action required):**

- [ ] Add Privacy Policy page
- [ ] Add Terms of Service page
- [ ] Add Cookie consent banner (if targeting EU — GDPR required)
- [ ] Add refund/return policy page
- [ ] Link all legal pages from footer

**Pre-launch testing:**

- [ ] Test full checkout flow on mobile (iPhone + Android)
- [ ] Test checkout with Stripe test cards (4242 4242 4242 4242)
- [ ] Verify webhook receives events (check Cloudflare Workers logs)
- [ ] Test with Lighthouse — target score > 80
- [ ] Verify OG image renders when sharing link on social media
- [ ] Check all CTA links work
- [ ] Test email delivery end-to-end

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
- shadows on cards, sections, or buttons
- emoji or colored divs as image placeholders

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
