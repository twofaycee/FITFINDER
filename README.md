# FITFINDER AI

**One piece. Whole fit.**

FITFINDER is an AI personal stylist MVP: upload one item, choose an occasion and budget, then get three outfit directions with retailer shopping links.

## Current product flow
1. Upload a clothing item.
2. FITFINDER sends the image to the visual analysis API when `AI_GATEWAY_API_KEY` is configured.
3. Choose occasion and budget.
4. Generate three outfit directions.
5. Open retailer searches for recommended pieces.
6. Save looks and build a device-local closet.

## AI setup
Copy `.env.example` to `.env.local` and add a Vercel AI Gateway key. The app uses the OpenAI-compatible AI Gateway endpoint and the current multimodal `alibaba/qwen3.5-flash` model. Without a key, the app stays usable in demo mode.

## Important
Retailer prices and inventory are reference data in this MVP. Live shopping search/affiliate feeds are the next commerce layer.
