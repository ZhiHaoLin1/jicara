# Jícara Taquería — Website

Next.js site built by Munch Media. Premium tier.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Fontsource (Fraunces, Lora, DM Sans — bundled, no Google Fonts network dependency)

## Local Development

```bash
npm install
npm run dev
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_ID/YOUR_TOKEN
```

The site works without this variable — contact form submissions just won't be forwarded anywhere.

## Deploy to Vercel

1. Push repo to GitHub (ZhiHaoLin1/jicara or similar)
2. Import project in Vercel dashboard
3. Add `DISCORD_WEBHOOK_URL` in Vercel > Settings > Environment Variables
4. Vercel auto-deploys on every push to `main`

## Swap in Real Images

Both images are served from R2. To swap:
- Hero: `app/components/Hero.tsx` — update the `src` on both `<Image>` tags
- Story/Oaxaca: `app/components/Story.tsx` — update the `src`

The R2 domain is already whitelisted in `next.config.ts`.

## Add Google Maps

In `app/components/MapSection.tsx`, replace the placeholder div with:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
  className="absolute inset-0 w-full h-full border-0"
  allowFullScreen
  loading="lazy"
/>
```

## Instagram Integration (Premium)

Follow Munch Media skill onboarding steps to connect the client's Instagram.
Add `CLIENT_ID`, `NEXT_PUBLIC_SUPABASE_URL`, and `SUPABASE_SERVICE_ROLE_KEY` to Vercel env vars.
Then replace `app/components/Instagram.tsx` with the live feed version using `lib/instagram.js`.

## SEO Checklist
- [x] Restaurant schema markup (layout.tsx)
- [x] Meta title and description
- [x] OG image
- [ ] Submit sitemap to Google Search Console after launch
- [ ] Connect Google Business Profile
