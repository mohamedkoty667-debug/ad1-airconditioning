# Ad1 Airconditioning Ltd: website

Built with Next.js, Tailwind CSS and Framer Motion.

## Run it locally
```
npm install
npm run dev
```
Then open http://localhost:3000

## Where to change things
| What | File |
|---|---|
| Phone, email, address, company number, services list, gallery photos | `src/lib/site.ts` |
| Colours and fonts | `src/app/globals.css` (the `@theme` block) |
| Home page | `src/app/page.tsx` |
| Other pages | `src/app/services`, `emergency`, `quote`, `contact` |
| Header / mobile menu | `src/components/Header.tsx` |
| Footer | `src/components/Footer.tsx` |
| Animations | `src/components/motion.tsx` |
| Quote form | `src/components/QuoteForm.tsx` |

To add a gallery photo: put the image in `public/work/` and add a line for it in `workPhotos` in `src/lib/site.ts`.

## Quote form emails (one-time setup, ~5 minutes)
The quote form emails each request to you. Until this is set up, it automatically offers WhatsApp/email instead, so nothing is lost.

1. Create a free account at https://resend.com (sign up with the email you want quotes sent to).
2. In Resend, go to **API Keys → Create API Key** and copy it (starts with `re_`).
3. **On your computer:** copy `.env.example` to a new file called `.env.local` and paste the key after `RESEND_API_KEY=`. Restart `npm run dev`.
   **On Vercel:** Project → Settings → Environment Variables → add `RESEND_API_KEY` with the key, then redeploy.
4. Send a test request from the Get a Quote page.

Optional: verify your own domain in Resend, then set `QUOTE_FROM_EMAIL` (e.g. `Ad1 Website <quotes@yourdomain.co.uk>`) so emails come from your domain and can go to any address (`QUOTE_TO_EMAIL`).

## When the site goes live
Set `NEXT_PUBLIC_SITE_URL` to your web address (e.g. `https://www.ad1airconditioning.co.uk`) so Google and link previews use the right address.
Then add the site to Google Search Console and submit `/sitemap.xml`.

## Other pages and files
| What | File |
|---|---|
| Privacy policy (update the date when you change it) | `src/app/privacy/page.tsx` |
| Quote form email sender | `src/app/api/quote/route.ts` |
| Sticky Call/WhatsApp bar on phones | `src/components/MobileCallBar.tsx` |
| Link preview image (WhatsApp/Facebook) | `src/app/opengraph-image.jpg` |
| Business details for Google | `src/app/layout.tsx` (`businessJsonLd`) |
