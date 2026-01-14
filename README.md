# Pandit Subham ji — Astrologer Website

Modern, responsive, SEO-first website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- SEO with Next Metadata API (titles, descriptions, Open Graph)
- Schema.org JSON-LD (LocalBusiness + Person/Astrologer)
- Sitemap and robots
- Mobile-first, accessible UI
- Lazy-loaded testimonials slider (CSS scroll-snap, no heavy JS)
- Contact API with server-side validation (Zod)

## Tech Stack

- Next.js 14, TypeScript, Tailwind CSS

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## Configure

- Update phone, email, and address in components and layout.
- Replace `https://example.com` in `app/sitemap.ts` and `app/robots.ts` with your domain.
- Replace Unsplash background or add your own images in `next.config.mjs` allowlist.

## Notes

- API endpoint: `POST /api/contact` expects `{ name, email, phone, message }`.
- Integrate email/SMS provider in `app/api/contact/route.ts` (marked TODO).
