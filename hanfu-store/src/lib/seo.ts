import { product } from "@/config/product";
import { siteConfig } from "@/config/site";

export function generateProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.oneLiner,
    image: `${siteConfig.url}${product.hero.media}`,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      price: product.price.replace("$", ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}${product.checkoutUrl}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.socialProof.averageRating.toString(),
      reviewCount: product.socialProof.reviewCount.toString(),
    },
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
