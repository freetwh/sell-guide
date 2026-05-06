# Measurement Plan

## KPIs

| Metric | Definition | Target | Tool |
|---|---|---|---|
| Conversion Rate | Purchases / Unique Visitors | > 2% | GA4 |
| CPA (Cost Per Acquisition) | Ad Spend / Purchases | < $25 | Meta Ads / GA4 |
| ROAS (Return on Ad Spend) | Revenue / Ad Spend | > 3x | Meta Ads / GA4 |
| Bounce Rate | Single-page sessions / All sessions | < 50% | GA4 |
| Email Capture Rate | Subscribers / Unique Visitors | > 5% | Custom |
| Average Order Value | Revenue / Orders | Config price | Stripe / GA4 |

## Event Taxonomy

| Event | Trigger | Parameters | Destination |
|---|---|---|---|
| `view_product` | Page load | `item_id`, `item_name`, `price`, `currency` | GA4, Meta |
| `click_buy_now` | CTA click | `item_id`, `price`, `position` (above_fold / mid_page / final) | GA4, Meta |
| `initiate_checkout` | Checkout started | `value`, `currency`, `items[]` | GA4, Meta (standard event) |
| `purchase` | Payment success | `transaction_id`, `value`, `currency`, `items[]` | GA4, Meta (standard event) |
| `faq_expand` | FAQ toggle | `question_index`, `question_text` | GA4 |
| `video_play` | Video start | `video_title`, `video_position` | GA4 |
| `scroll_depth` | Scroll milestone | `percent` (25/50/75/100) | GA4 |
| `newsletter_signup` | Email submit | `source` (landing_page / exit_intent) | GA4, Meta |
| `add_to_cart` | If multi-product | `item_id`, `value`, `quantity` | GA4, Meta |

## Conversion Funnel

```
[Ad Click / Organic Visit]
        ↓
   view_product          ← GA4 page_view + custom event
        ↓
   click_buy_now         ← GA4 custom event + Meta ViewContent
        ↓
   initiate_checkout     ← GA4 begin_checkout + Meta InitiateCheckout
        ↓
   [Stripe Checkout]
        ↓
   purchase              ← GA4 purchase + Meta Purchase
        ↓
   [Email Confirmation]
```

## Ad Platform Pixel Events

### Meta (Facebook/Instagram)

Map custom events to Meta standard events:

| Our Event | Meta Standard Event |
|---|---|
| `view_product` | `ViewContent` |
| `initiate_checkout` | `InitiateCheckout` |
| `purchase` | `Purchase` |
| `newsletter_signup` | `Lead` |

### Google Ads

- Link GA4 to Google Ads
- Import `purchase` as conversion action
- Use `click_buy_now` for micro-conversion bidding

### TikTok (optional)

- Install TikTok pixel
- Map `ViewContent`, `InitiateCheckout`, `Purchase`

## UTM Strategy

**Campaign naming convention:**

```
utm_source={platform}
utm_medium={ad_type}
utm_campaign={product_slug}_{campaign_name}
utm_content={creative_variant}
```

**Example:**

```
?utm_source=meta&utm_medium=cpc&utm_campaign=smart-pet-orb_launch&utm_content=video-v1
```

**Preservation:**

- Capture UTM params on first visit (sessionStorage)
- Pass to Stripe Checkout Session metadata
- Store with order record for attribution

## Reporting cadence

- **Daily:** ad spend, purchases, CPA
- **Weekly:** conversion rate trend, scroll depth, FAQ engagement
- **Monthly:** ROAS, email list growth, top traffic sources
