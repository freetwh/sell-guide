export const product = {
  slug: "hanfu-collection",
  name: "Hanfu Collection",
  category: "Traditional Chinese Clothing",
  audience: "cultural enthusiasts, cosplay lovers, and fashion-forward individuals",
  emotionalPromise: "embrace timeless elegance and cultural heritage through modern hanfu fashion",
  oneLiner: "Step into a world where ancient Chinese beauty meets contemporary style, with handcrafted hanfu that tells a story.",
  price: "$89",
  compareAtPrice: "$129",
  checkoutUrl: "#checkout",
  hero: {
    eyebrow: "Where Tradition Meets Modern Elegance",
    headline: "Wear the beauty of a thousand years.",
    subheadline: "Discover handcrafted hanfu that blends ancient Chinese artistry with contemporary comfort, perfect for cultural celebrations, cosplay, or everyday elegance.",
    media: "/product/hero.jpg"
  },
  benefits: [
    {
      title: "Authentic Cultural Heritage",
      description: "Each piece is designed with traditional Chinese patterns and techniques, preserving centuries of artistic legacy."
    },
    {
      title: "Modern Comfort, Timeless Style",
      description: "Premium fabrics and contemporary tailoring ensure you look elegant while feeling comfortable all day."
    },
    {
      title: "Versatile Occasions",
      description: "Perfect for cultural festivals, weddings, photoshoots, cosplay events, or adding unique flair to your daily wardrobe."
    },
    {
      title: "Handcrafted Quality",
      description: "Meticulous attention to detail with hand-stitched embroidery and premium materials that stand the test of time."
    },
    {
      title: "Complete Outfit Sets",
      description: "Each set includes all necessary layers and accessories, so you can achieve the perfect look effortlessly."
    }
  ],
  objections: [
    {
      question: "How do I choose the right size?",
      answer: "We provide detailed size guides for each style. Our customer service team can also help you find the perfect fit based on your measurements."
    },
    {
      question: "What is the shipping time?",
      answer: "Standard shipping takes 7-14 business days worldwide. Express shipping options are available at checkout for faster delivery."
    },
    {
      question: "Can I return or exchange?",
      answer: "Yes, we offer 30-day returns and exchanges. Items must be unworn with tags attached. Contact our support team to initiate a return."
    },
    {
      question: "Are these authentic hanfu designs?",
      answer: "Yes, our designs are researched and crafted based on historical Chinese clothing traditions, adapted for modern wearability."
    },
    {
      question: "What fabrics are used?",
      answer: "We use premium silk, cotton, and polyester blends depending on the style. Each product page lists the specific materials used."
    }
  ],
  socialProof: {
    reviewCount: 2847,
    averageRating: 4.8,
    testimonials: [
      {
        name: "Sarah L.",
        location: "Los Angeles, CA",
        text: "I wore this to a cultural festival and received so many compliments! The quality is amazing and it's so comfortable.",
        rating: 5
      },
      {
        name: "Michael C.",
        location: "London, UK",
        text: "Perfect for my cosplay events. The attention to detail is incredible and shipping was faster than expected.",
        rating: 5
      },
      {
        name: "Yuki T.",
        location: "Tokyo, JP",
        text: "Beautiful craftsmanship. I've bought multiple sets now and each one is stunning. Highly recommend!",
        rating: 5
      }
    ]
  },
  faq: [
    {
      question: "How do I care for my hanfu?",
      answer: "We recommend hand washing or gentle machine washing in cold water. Hang dry and iron on low heat if needed. Detailed care instructions are included with each order."
    },
    {
      question: "Do you offer custom sizing?",
      answer: "Yes, we offer custom sizing for select styles. Contact our customer service with your measurements for a personalized quote."
    },
    {
      question: "Can I wear hanfu daily?",
      answer: "Absolutely! Many of our modern hanfu designs are perfect for everyday wear, combining traditional aesthetics with contemporary comfort."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted."
    }
  ],
  offer: {
    headline: "Limited Time: 30% Off Your First Order",
    description: "Use code HANFU30 at checkout. Plus, enjoy free shipping on orders over $150.",
    urgency: "Offer ends in 2 days",
    guarantee: "30-day satisfaction guarantee"
  }
};

export type Product = typeof product;
