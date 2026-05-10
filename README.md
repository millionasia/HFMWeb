# HFM Website Redesign

賀民企業有限公司網站改版專案，使用 Nuxt 3 與 Tailwind CSS 建置，資料先集中 Mock 在 `data/millionasia.js` 的 `MillionAsia` 類別中。

## Tech Stack

- Nuxt 3
- Tailwind CSS
- pnpm / Corepack
- Vercel

## Local Development

```bash
corepack pnpm install
corepack pnpm dev
```

本機開發預設使用 `http://127.0.0.1:3001`。

## Build

```bash
corepack pnpm build
```

Nuxt 會輸出至 `.output`，本機快取與部署連結資料不會提交到 Git。
