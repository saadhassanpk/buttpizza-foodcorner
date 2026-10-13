# Butt Pizza & Food Corner

Production-ready standalone React 19 + TypeScript + Vite website based on the [Floot original](https://buttpizza-foodcorner.floot.app/). Original on-platform source and original project-generated food artwork are included; no runtime Floot dependency.

## Development

Node.js 20+ recommended.

```bash
npm install
npm run dev
```

Visit http://localhost:5173. The Vercel API routes are available after deployment at `/api/site`, `/api/menu`, `/api/order-link`, `/api/health`. The local Vite dev server only serves the frontend (the /api proxy expects a separately configured local API server).

## Deployment on Vercel

Import this GitHub repository into Vercel, framework **Vite**, root directory **./**, build command `npm run build`, output directory `dist`. Serverless functions reside in `api/`.

## Important

The logo in the original Floot site is a typographic treatment, not a confirmed official restaurant logo. Food visuals are illustrative generated artwork. No menu prices, business hours, discounts or reviews have been invented. All order CTAs open WhatsApp; no payment or order database is implemented.
