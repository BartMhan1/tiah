# TIAH Proposed Repository Structure

This structure reflects the current V1 scope. It can be adjusted during implementation, but new features should not be invented without an explicit product decision.

```text
tiah/
├── app/
│   ├── (store)/
│   │   ├── fashion/
│   │   │   └── page.tsx
│   │   ├── foodstuffs/
│   │   │   └── page.tsx
│   │   ├── product/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── search/
│   │   │   └── page.tsx
│   │   ├── wishlist/
│   │   │   └── page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── admin/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── inventory/
│   │   │   └── page.tsx
│   │   ├── customers/
│   │   │   └── page.tsx
│   │   ├── wishlists/
│   │   │   └── page.tsx
│   │   ├── orders/
│   │   │   └── page.tsx
│   │   ├── content/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── api/
│   │   ├── auth/
│   │   │   ├── request-otp/
│   │   │   │   └── route.ts
│   │   │   ├── verify-otp/
│   │   │   │   └── route.ts
│   │   │   ├── logout/
│   │   │   │   └── route.ts
│   │   │   └── session/
│   │   │       └── route.ts
│   │   ├── products/
│   │   ├── wishlist/
│   │   ├── cart/
│   │   ├── whatsapp/
│   │   ├── media/
│   │   └── admin/
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   ├── auth/
│   ├── products/
│   ├── cart/
│   ├── wishlist/
│   ├── search/
│   └── admin/
│
├── lib/
│   ├── auth/
│   ├── db/
│   ├── email/
│   ├── storage/
│   ├── whatsapp/
│   ├── search/
│   └── utils/
│
├── store/
│   ├── cart-store.ts
│   └── wishlist-store.ts
│
├── types/
│   ├── product.ts
│   ├── customer.ts
│   ├── cart.ts
│   ├── wishlist.ts
│   └── order.ts
│
├── public/
│   ├── logo/
│   └── icons/
│
├── middleware.ts
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Structural principles

- `(store)` contains customer-facing routes.
- `(store)/layout.tsx` owns the global storefront navbar and footer.
- `admin` has its own protected layout and does not inherit the storefront chrome.
- `api` contains route handlers for backend actions.
- `components` contains reusable UI.
- `lib` contains business logic and external integrations.
- `store` contains client-side state such as guest cart state.
- `types` contains shared TypeScript models.
