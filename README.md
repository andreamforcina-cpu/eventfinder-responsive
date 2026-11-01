# EventFinder — Responsive React Application

Application Development II, Assignment 8. Based on RizeComputerScience/COMPSX-EventFinder.

## Responsive layout
- Mobile base (375px): stacked filters and one card per row.
- Tablet (48rem / 768px): two cards per row with flex-basis.
- Desktop (64rem / 1024px): 17.5rem sidebar next to results.
- Responsive units, fluid 16:9 images, wrapping titles/navigation, border-box sizing, and minimum 44px detail buttons.

## Run
1. Run `npm ci`.
2. Copy `.env.example` to `.env` and set `VITE_TICKETMASTER_API_KEY` to your own Ticketmaster Discovery Consumer Key.
3. Run `npm run dev` and open `/events`.

No API key is included. Without a key the app displays configuration guidance. Live Ticketmaster requests have not been verified because developer-account access was unavailable. No fabricated events are presented as real data.

## Validation
`npm test`, `npm run build`, and `npm run lint` passed locally. The three functional tests use mocked API responses for cards/detail links, HTTP failures, and empty results. Visual checks at the three target viewport widths remain unverified; the local browser used for that check did not launch.
