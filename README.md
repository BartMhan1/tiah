# TIAH

Authentic Ghanaian online store for local fashion and foodstuffs.

## Status

**Foundation Phase**: The repository is initialized with a clean, minimal Next.js + TypeScript foundation. Product implementation (storefront, catalog, cart, admin, auth, ordering) has not started yet.

All product specifications, screen responsibilities, and architecture definitions are documented in `/docs` and serve as the project's source of truth.

## Technology Foundation

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI:** React
- **Design System (Upcoming):** Google Material Design 3 (M3)
- **Database (Upcoming):** Supabase PostgreSQL
- **Media Storage (Upcoming):** Cloudflare R2
- **Authentication (Upcoming):** Passwordless Email OTP via Resend
- **State Management (Upcoming):** Zustand
- **Deployment Target:** Cloudflare

## Documentation Reference

Please consult the `/docs` directory for complete project specifications:
- [`/docs/product-overview.md`](./docs/product-overview.md) — High-level product definition
- [`/docs/features.md`](./docs/features.md) — V1 feature breakdown
- [`/docs/screens.md`](./docs/screens.md) — Screen responsibilities & scope boundaries
- [`/docs/tech-stack.md`](./docs/tech-stack.md) — Locked technology stack
- [`/docs/database-schema.md`](./docs/database-schema.md) — PostgreSQL schema & models
- [`/docs/repo-structure.md`](./docs/repo-structure.md) — Incremental repository structure

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```
