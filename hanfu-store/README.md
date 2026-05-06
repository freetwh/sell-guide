# Hanfu Elegance - Traditional Chinese Fashion Store

A modern e-commerce landing page for selling traditional Chinese hanfu clothing, built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- **Emotional Storytelling**: Conversion-focused landing page design
- **Responsive Design**: Mobile-first approach with beautiful desktop layouts
- **SEO Optimized**: Built-in metadata, Open Graph, and JSON-LD structured data
- **Performance**: Server-side rendering with static generation
- **Modern Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
hanfu-store/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   └── sections/
│   │       ├── Hero.tsx        # Hero section with CTA
│   │       ├── Benefits.tsx    # Product benefits
│   │       ├── SocialProof.tsx # Customer testimonials
│   │       ├── OfferStack.tsx  # Special offers
│   │       ├── FAQ.tsx         # Frequently asked questions
│   │       └── FinalCTA.tsx    # Final call-to-action
│   ├── config/
│   │   ├── product.ts          # Product configuration
│   │   └── site.ts             # Site-wide configuration
│   └── lib/
│       └── seo.ts              # SEO utility functions
├── docs/
│   └── assumptions.md          # Project assumptions
└── public/
    └── product/                # Product images
```

## Customization

### Product Configuration

Edit `src/config/product.ts` to update:
- Product details and pricing
- Hero section content
- Benefits and features
- Customer testimonials
- FAQ items
- Special offers

### Site Configuration

Edit `src/config/site.ts` to update:
- Site name and description
- URL and domain
- Theme colors
- SEO keywords

### Adding Images

Replace placeholder images in `public/product/` with actual product photos:
- `hero.jpg` - Main hero image
- Additional product images as needed

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
```

## SEO Checklist

- [x] Title tags optimized
- [x] Meta descriptions
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] JSON-LD Product schema
- [x] JSON-LD FAQ schema
- [x] Semantic HTML structure
- [x] Alt text for images
- [x] Mobile-responsive design

## Conversion Optimization

- [x] Above-the-fold CTA
- [x] Social proof section
- [x] Trust indicators
- [x] FAQ section
- [x] Urgency elements
- [x] Clear pricing
- [x] Shipping information
- [x] Return policy

## License

MIT
