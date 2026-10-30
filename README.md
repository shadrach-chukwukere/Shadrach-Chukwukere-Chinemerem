# Shadrach Chukwukere — Portfolio

A premium, minimalist personal portfolio for a Lead Frontend & Mobile App Developer.
Built with React 19, Vite, TypeScript and Tailwind CSS 4.

## Sections

- Floating pill navbar with scroll-spy and mobile menu
- Hero — portrait on an organic accent blob, floating skill pills, rotating "Hire me" badge
- Infinite technology marquee (pauses on hover)
- Services accordion — one dark expanded row at a time, keyboard accessible
- About, Selected Projects, Experience timeline
- Contact — validated form (EmailJS, with automatic mailto fallback)
- Footer with back-to-top

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Edit content

All text, links, services, projects and experience live in **one file**:
[`src/data/portfolio.ts`](src/data/portfolio.ts). Update it and the whole site changes.

- Replace the hero portrait: swap `src/assets/portrait.webp` (or point `profile.portrait` at your own file).
- Projects with no `image` render a typographic placeholder tile — add a screenshot to `src/assets` and set `image` when ready (e.g. SabiFlex).
- Social profiles are defined in the `socials` array.

## Contact form (EmailJS)

Without keys, the form opens the visitor's mail client pre-filled to your email.
To send directly, create a free account at [emailjs.com](https://www.emailjs.com), then add a `.env.local` file (see `.env.example`):

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Recommended template variables: `from_name`, `reply_to`, `email`, `message`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), import the repository.
3. Framework preset: **Vite** (build command `npm run build`, output `dist`).
4. Add the three `VITE_EMAILJS_*` environment variables if you use the direct form.
5. Deploy. Update the canonical/OG URLs in `index.html` if your domain differs.

Replace `public/portfolio-preview.webp` with a screenshot of the finished site for social sharing cards.
