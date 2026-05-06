# Cross-border Emotional Commerce Site Skill

A reusable Skill for Claude/Codex-style coding agents to build Next.js independent commerce sites from a simple user prompt like:

> I need to sell a smart pet toy.

The Skill turns a product idea into a focused DTC landing page with:

- emotional storytelling
- reusable Next.js architecture
- SSR/SEO requirements
- category-aware positioning
- trust and conversion sections
- Stripe payment integration
- GA4 + Meta Pixel analytics
- email capture and transactional emails
- Next.js built-in backend (no separate server)
- launch checklist

## Files

```txt
crossborder-emotion-commerce-skill/
├── SKILL.md
├── references/
│   ├── design-system.md
│   ├── category-positioning.md
│   ├── conversion-checklist.md
│   └── measurement-plan.md
└── assets/
    └── AGENTS.template.md
```

## Install for Claude

Claude Skills are folder-based and require a `SKILL.md` file with metadata. Zip this folder and upload it where your Claude product supports custom Skills.

## Install for Codex

Codex supports skills as directories with `SKILL.md`. Put this folder under one of Codex’s skill locations, for example:

```txt
your-repo/.agents/skills/crossborder-emotion-commerce-site/
```

You can also copy:

```txt
assets/AGENTS.template.md
```

to your project root as:

```txt
AGENTS.md
```

## Example prompt

```txt
Use the crossborder-emotion-commerce-site skill.
I need to sell a capybara night light to US customers.
Style: cozy gift, premium but cute.
Use Next.js, SSR, SEO, and Stripe payment link placeholder.
```

## Recommended first run

Ask the coding agent to create a landing page MVP first, not a complete ecommerce platform.
