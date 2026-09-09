# TIAH V1 Tech Stack

## Application
- Language: TypeScript
- Full-stack framework: Next.js with App Router
- Frontend: React through Next.js
- Backend: Next.js server logic and route handlers
- Frontend and backend remain in one codebase

## UI
- Google Material Design 3 foundation
- Material Symbols/icons preferred for consistency

## Data
- Database: Supabase PostgreSQL
- Supabase is the structured application database
- Supabase Auth is NOT used

## Authentication
- Custom passwordless auth logic inside Next.js
- Email OTP flow
- Resend handles OTP email delivery
- Server-side session handling with secure cookies

## State
- Zustand for appropriate client-side state such as guest cart state
- Authenticated carts sync to Supabase

## Object storage
- Cloudflare R2 stores product images, videos, and other media
- PostgreSQL stores only the object key/URL/reference and media metadata

## Ordering
- WhatsApp deep links with generated pre-filled messages
- TIAH records order intent before handing the customer off to WhatsApp

## Deployment
- Cloudflare hosts the full-stack Next.js application
- One application deployment, not separate frontend/backend deployments

## High-level architecture

```text
TIAH Next.js App
├── React storefront
├── Admin portal
├── API / server logic
├── Custom auth
└── WhatsApp message generation

External services
├── Supabase PostgreSQL -> structured data
├── Cloudflare R2 -> images/videos/media
├── Resend -> OTP and reminder email delivery
└── WhatsApp -> order conversation and completion
```
