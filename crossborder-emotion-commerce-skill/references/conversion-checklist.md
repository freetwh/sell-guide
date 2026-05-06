# Conversion Checklist

## Above the fold

- [ ] Product outcome is clear within 3 seconds
- [ ] CTA is visible
- [ ] Product visual or demo is visible
- [ ] Price or offer is visible
- [ ] Trust microcopy is visible

## Story

- [ ] Page explains why the product matters emotionally
- [ ] Pain/desire is concrete
- [ ] Demo section shows product in use
- [ ] Benefits are outcomes, not just features

## Trust

- [ ] Shipping policy exists or placeholder is marked
- [ ] Return policy exists or placeholder is marked
- [ ] Payment method is clear
- [ ] FAQ handles buyer objections
- [ ] No fake reviews or fake scarcity

## Payment

- [ ] Stripe Checkout Session creates successfully
- [ ] Checkout redirects to Stripe-hosted page
- [ ] Webhook receives `checkout.session.completed`
- [ ] Order stored in database on successful payment
- [ ] Coupon/promotion codes work if configured
- [ ] Shipping address collection enabled for physical products
- [ ] Success and cancel URLs route correctly
- [ ] Payment amount matches product config price

## Analytics and tracking

- [ ] GA4 script loads on all pages
- [ ] Meta Pixel fires `PageView` on load
- [ ] `click_buy_now` event fires on CTA click
- [ ] `initiate_checkout` event fires when checkout starts
- [ ] `purchase` event fires on successful payment with value/currency
- [ ] `faq_expand` tracks FAQ interactions
- [ ] `video_play` tracks demo video engagement
- [ ] UTM parameters preserved across checkout flow
- [ ] No PII sent to analytics platforms
- [ ] Measurement plan documented in `docs/measurement-plan.md`

## Email and marketing

- [ ] Newsletter signup form exists on landing page
- [ ] Email captured in database or email service
- [ ] Transactional email sent on successful order
- [ ] UTM data passed to Stripe metadata for attribution

## SEO

- [ ] Metadata exists on all pages
- [ ] JSON-LD Product schema injected (not just generated)
- [ ] JSON-LD FAQ schema injected
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] OG image exists in `/public/` (1200x630px)
- [ ] Canonical URL set on every page
- [ ] All images have descriptive alt text
- [ ] Mobile layout works
- [ ] CTA links work
- [ ] Main content is SSR/SSG friendly
- [ ] Basic analytics event stubs exist

## Backend & Deployment

- [ ] Next.js API Routes handle checkout and webhooks on Cloudflare Workers
- [ ] D1 database created and bindings configured in `wrangler.toml`
- [ ] Orders table schema created (SQLite via Drizzle)
- [ ] Subscribers table schema created (SQLite via Drizzle)
- [ ] `next/image` set to `unoptimized: true` (CF limitation)
- [ ] Stripe secrets set via `wrangler secret put`
- [ ] Custom domain configured in Cloudflare Pages
- [ ] SSL/TLS active (auto-provisioned by Cloudflare)
- [ ] No secrets committed to git (`.dev.vars` gitignored)

## Launch

- [ ] Replace placeholder media with real product images
- [ ] Replace policy placeholders with real policies
- [ ] Test full checkout flow (browse → CTA → Stripe → success)
- [ ] Test webhook delivery with Stripe CLI
- [ ] Test mobile speed (Lighthouse score > 80)
- [ ] Verify GA4 receives events in DebugView
- [ ] Verify Meta Pixel events in Events Manager
- [ ] Test first 3 ad creatives with pixel tracking
- [ ] Confirm transactional email delivers
- [ ] Check OG image renders on social platforms
