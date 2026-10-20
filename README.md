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
