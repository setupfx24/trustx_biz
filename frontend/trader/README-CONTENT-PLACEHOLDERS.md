# Content Placeholders — Where to drop images, banners & assets

This guide lists **every** banner / image / thumbnail / avatar placeholder
on the marketing site. Drop the real asset at the path shown, then either
pass it as a prop (banners) or replace the placeholder `<div>` with an
`<img>` (everything else).

All paths are **relative to** `frontend/trader/`. Files in `public/` are
served at the same path **without the `public/`** prefix — e.g.
`public/images/banners/foo.webp` is referenced in JSX as
`src="/images/banners/foo.webp"`.

Recommended folders (create them if missing):

```
public/
└── images/
    ├── banners/                 ← page hero banners
    ├── services/                ← service-page inline visuals
    ├── academy/
    │   ├── videos/              ← video thumbnails
    │   ├── pdfs/                ← PDF cover thumbnails
    │   └── blogs/               ← blog post images
    ├── products/
    │   ├── ib-referral/         ← IB partner avatars
    │   └── fixed-return-insurance/
    ├── managers/                ← portfolio manager headshots
    ├── analysts/                ← research-desk analyst headshots
    └── bonus/                   ← welcome-bonus illustrations
public/
└── files/
    └── academy/                 ← downloadable PDFs
```

Image specs: **WebP** preferred (AVIF if your CDN supports it), sRGB,
< 250 KB for banners, < 80 KB for thumbnails.

---

## 1. Page banners (hero at the top of each page)

Every page uses `<BannerPlaceholder>`. It now accepts an optional
`bannerSrc` prop. To swap the gradient for a real image:

```tsx
<BannerPlaceholder
  title="…"
  tagline="…"
  bannerSrc="/images/banners/<page-slug>.webp"
/>
```

**Recommended dimensions: 1920 × 800 px**, WebP or AVIF, < 250 KB.

Drop the file at the path on the right, then add `bannerSrc` to the page on
the left:

| Page                               | File path                                                    |
| ---------------------------------- | ------------------------------------------------------------ |
| `/services/ai-auto-trading`        | `public/images/banners/ai-auto-trading.webp`                 |
| `/services/portfolio-management`   | `public/images/banners/portfolio-management.webp`            |
| `/services/market-research`        | `public/images/banners/market-research.webp`                 |
| `/services/education`              | `public/images/banners/education.webp`                       |
| `/services/automated-profit`       | `public/images/banners/automated-profit.webp`                |
| `/services/ico-coming-soon`        | _(inline gradient — see §6 below, no `<BannerPlaceholder>`)_ |
| `/bonus`                           | `public/images/banners/bonus.webp`                           |
| `/academy/videos`                  | `public/images/banners/academy-videos.webp`                  |
| `/academy/pdfs`                    | `public/images/banners/academy-pdfs.webp`                    |
| `/academy/blogs`                   | `public/images/banners/academy-blogs.webp`                   |
| `/risk-management/calculator`      | `public/images/banners/risk-calculator.webp`                 |
| `/products/ib-referral`            | `public/images/banners/ib-referral.webp`                     |
| `/products/fixed-return-insurance` | `public/images/banners/fixed-return-insurance.webp`          |

The fallback gradient stays in place automatically if no `bannerSrc` is passed.

---

## 2. Inline visuals on Service pages

These are the secondary illustrations next to the intro callout on each
service page (not the top banner). Each is a `min-h-[260px]` placeholder.

| Page                             | Marker in code                                         | Drop image at                                             |
| -------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |
| `/services/ai-auto-trading`      | `TODO: AI engine screenshot / animation yahan aayega`  | `public/images/services/ai-auto-trading-engine.webp`      |
| `/services/ai-auto-trading`      | `TODO: Live equity-curve chart yahan aayega`           | _(or wire a live chart — TradingView widget / recharts)_  |
| `/services/portfolio-management` | `TODO: Manager headshot / firm logo yahan aayega`      | `public/images/managers/<slug>.webp` (6 cards — one each) |
| `/services/market-research`      | `TODO: Sample research report screenshot yahan aayega` | `public/images/services/market-research-sample.webp`      |
| `/services/market-research`      | `TODO: Analyst headshot yahan aayega`                  | `public/images/analysts/<slug>.webp` (4 cards — one each) |
| `/services/automated-profit`     | `TODO: Bot dashboard mockup yahan aayega`              | `public/images/services/automated-profit-dashboard.webp`  |
| `/services/automated-profit`     | `TODO: Live equity-curve chart yahan aayega`           | _(or wire a live chart)_                                  |

**Replace pattern** for each: find the `image-placeholder` div and swap with:

```tsx
{
  /* eslint-disable-next-line @next/next/no-img-element */
}
<img
  src="/images/services/<slug>.webp"
  alt="<descriptive alt>"
  className="rounded-2xl w-full h-auto object-cover"
/>;
```

Recommended size: **1280 × 800 px** for landscape illustrations,
**400 × 400 px** for square headshots, **600 × 600 px** for manager cards.

---

## 3. Bonus (`/bonus`) — Welcome Bonus details

- File: `src/app/(landing)/bonus/page.tsx`
- Marker: `TODO: Bonus illustration / coin-stack animation yahan aayega`
- Drop image: `public/images/bonus/welcome-bonus-illustration.webp`
- Recommended size: **800 × 600 px**, transparent PNG or WebP.

---

## 4. Academy — Videos (`/academy/videos`)

- File: `src/app/(landing)/academy/videos/page.tsx`
- Marker: `TODO: Video thumbnail image yahan aayegi`
- Drop thumbs at: `public/images/academy/videos/<id>.webp`
- Recommended size: **1280 × 720 px** (16:9), WebP < 80 KB
- Add a `thumbnail` field to each `Video` in the `VIDEOS` array and render
  via `<img>` in place of the `<PlayCircle />` icon.
- Wire the `Watch Now` button to a real video URL.

---

## 5. Academy — PDFs (`/academy/pdfs`)

- File: `src/app/(landing)/academy/pdfs/page.tsx`
- Cover marker: `TODO: PDF cover thumbnail yahan aayega`
- Drop covers at: `public/images/academy/pdfs/<id>.webp`
- Recommended cover size: **600 × 800 px** (3:4), WebP < 80 KB
- Drop the PDFs themselves at: `public/files/academy/<id>.pdf`
- Change the `Download` button to `<a href="/files/academy/<id>.pdf" download>`

---

## 6. Academy — Blog (`/academy/blogs`)

- File: `src/app/(landing)/academy/blogs/page.tsx`
- Featured marker: `TODO: Featured post hero image yahan aayegi`
- Thumbnail marker: `TODO: Post thumbnail yahan aayega`
- Drop images at: `public/images/academy/blogs/<id>.webp`
- Recommended size: **1280 × 720 px** (16:9)
- Wire `Read More` / `Read Full Story` buttons to per-post routes
  (e.g. `<Link href={\`/academy/blogs/\${post.id}\`}>`) once those pages exist.

---

## 7. ICO Coming Soon (`/services/ico-coming-soon`)

This page has its **own** inline hero (no `<BannerPlaceholder>`).

- File: `src/app/(landing)/services/ico-coming-soon/page.tsx`
- Marker: `TODO: ICO hero banner / particle animation yahan aayega`
- Drop a banner at: `public/images/banners/ico-coming-soon.webp`
- Replace the `image-placeholder` div with an `<img>` covering the section.
- Recommended size: **1920 × 800 px**, WebP < 250 KB.

---

## 8. Products — IB Referral (`/products/ib-referral`)

- File: `src/app/(landing)/products/ib-referral/page.tsx`
- Marker: `TODO: Partner avatar yahan aayega`
- Drop avatars at: `public/images/products/ib-referral/<name>.webp`
- Recommended size: **120 × 120 px** square, WebP < 20 KB.
- Replace the empty `<div className="image-placeholder size-12 …">` with an `<img>`.
- Application form `onSubmit` currently shows `alert(…)` — wire it to your
  CRM endpoint (HubSpot, Salesforce, or `/api/ib-applications`).
- `partners@trustx.biz` is a placeholder — update to a real inbox.

---

## 9. Products — Fixed Return Insurance (`/products/fixed-return-insurance`)

- File: `src/app/(landing)/products/fixed-return-insurance/page.tsx`
- No inline image placeholders (the apply form was removed).
- Confirm all quoted rates with compliance and the underwriter before going live.
- The risk-disclosure copy is a generic template — have legal review per jurisdiction.

---

## 10. Other (already-shipped landing pages — using src/landing/pages)

The legacy landing pages (`Forex.jsx`, `Indices.jsx`, `Crypto.jsx`,
`Commodities.jsx`, `AboutUs.jsx`, etc.) use `TradingPageTemplate` and
existing brand assets. Logos / favicon already live at:

- `public/images/trustx-logo.png`
- `public/images/trustx_fevicon.png`

To brand-refresh those: drop replacement files at the same paths (same names).

---

## 11. How to drop a banner — worked example

To put a real banner on `/services/ai-auto-trading`:

1. Export your banner as WebP, **1920 × 800 px**, < 250 KB.
2. Save it at:
   ```
   frontend/trader/public/images/banners/ai-auto-trading.webp
   ```
3. Open `src/app/(landing)/services/ai-auto-trading/page.tsx` and find:
   ```tsx
   <BannerPlaceholder title="AI-Driven Auto Trading" tagline="..." />
   ```
4. Add the `bannerSrc` prop:
   ```tsx
   <BannerPlaceholder
     title="AI-Driven Auto Trading"
     tagline="..."
     bannerSrc="/images/banners/ai-auto-trading.webp"
   />
   ```
5. Save. The dev server hot-reloads — refresh the browser.

That's it. The gradient fallback only renders when no `bannerSrc` is supplied.

---

## 12. Sanity checklist before going live

- [ ] All page banners dropped (see §1).
- [ ] All inline `image-placeholder` divs replaced with `<img>` / `<video>` (§2–§8).
- [ ] All forms wired to a real backend (not `alert(…)`).
- [ ] `partners@trustx.biz`, `support@trustx.biz`, etc. replaced with monitored inboxes.
- [ ] Calculator pip values reviewed by trading desk.
- [ ] Fixed Return plan rates, minimums, and disclosure copy reviewed by compliance.
- [ ] PDFs uploaded, blog posts wired to per-post routes.
- [ ] OG / Twitter share images added per page (not scaffolded yet).
