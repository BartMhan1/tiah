# TIAH Screen Responsibilities

This document locks what each screen is responsible for showing and doing.

It does not lock visual design, spacing, typography, section composition, animations, or final layout details.

## Global customer layout

All customer-facing screens use the shared TIAH store layout.

### Navbar
- TIAH logo
- Fashion / Foodstuffs switcher
- Global search
- One context-aware cart icon
  - Fashion context: Bag
  - Foodstuffs context: Basket
- Profile icon

The underlying cart is shared across both departments.

### Footer
- Shared across all customer-facing screens

## Fashion

Purpose: main Fashion browsing and discovery experience.

Responsibilities:
- Show the Fashion storefront experience
- Include a large video hero
- Surface Fashion products and visual/editorial content
- Support Fashion-specific filtering
- Use the global navbar and footer
- Show the cart as Bag in this context

Exact visual design and section arrangement are not locked yet.

## Foodstuffs

Purpose: main Foodstuffs browsing and discovery experience.

Responsibilities:
- Show the Foodstuffs storefront experience
- Surface Foodstuffs products
- Support Foodstuffs-specific filtering
- Use the global navbar and footer
- Show the cart as Basket in this context

The Foodstuffs experience should not simply be a visual clone of Fashion.

Exact visual design and section arrangement are not locked yet.

## Search

Purpose: search the full TIAH catalog.

Responsibilities:
- Search across both Fashion and Foodstuffs
- Return products from either department
- Clearly identify each result's department
- Route users into the correct product and department context
- Support context-aware filtering
- Preserve the global navbar and footer

Example behavior:
- Searching for Shito from Fashion can return a Foodstuffs product
- Searching for Kente from Foodstuffs can return a Fashion product

## Product Detail

Purpose: let a customer understand, configure, save, add, or order one product.

Responsibilities:
- Show product images and/or video
- Show product name
- Show price
- Show short description
- Show variant selectors
- Show variant-level stock quantity
- Show in-stock or out-of-stock state
- Show quantity selector
- Add product to Bag or Basket
- Save product to Wishlist
- Order this product on WhatsApp
- Show related products

Variant options are data-driven and can differ by product.

Examples:
- Fashion: size, color, material
- Foodstuffs: weight, pack size

## Bag / Basket

Purpose: manage the customer's shared cart.

Responsibilities:
- Show all cart items
- Show selected variants
- Show quantities
- Allow quantity updates
- Allow item removal
- Order an individual item on WhatsApp
- Order all cart items on WhatsApp

Behavior:
- There is one shared cart across Fashion and Foodstuffs
- Fashion context labels it Bag
- Foodstuffs context labels it Basket
- Cart data must survive page changes and refreshes
- Guest cart persists locally
- Signed-in cart syncs to Supabase
- Signed-in cart follows the customer across devices
- Guest cart merges into the user's active cart on sign-in

## Wishlist

Purpose: let signed-in customers save products for later.

Responsibilities:
- Show saved products
- Open a saved product
- Remove a saved product
- Add a saved product to the cart
- Persist wishlist against the customer account
- Support wishlist reminder emails

Wishlist reminder emails are part of V1.

## Profile / Authentication

Purpose: provide lightweight customer identity and account access without passwords.

The main authentication interaction happens inline from the navbar profile icon.

### First-time flow
1. User opens the profile dropdown or popover
2. User enters:
   - Full name
   - Email
   - Contact / WhatsApp number
3. User submits
4. Resend sends an OTP email
5. The same dropdown changes to the OTP entry state
6. User enters the OTP without navigating away or refreshing
7. Backend verifies the OTP
8. User becomes authenticated immediately

Responsibilities:
- Request OTP
- Verify OTP
- Persist session
- Automatically restore returning sessions
- Show profile details
- Allow profile editing
- Allow logout

Authentication is custom Next.js auth logic. Supabase Auth is not used.

## Admin layout

The admin portal uses its own layout and is separate from the customer storefront layout.

Any registered account whose database role is set to admin can access the admin portal.

## Admin Dashboard

Purpose: high-level store control center.

Responsibilities:
- Show a store overview
- Provide quick access to products
- Provide quick access to inventory
- Provide quick access to customers
- Provide quick access to orders
- Provide quick access to storefront content

Exact dashboard metrics are not locked yet.

## Admin Products

Purpose: manage the catalog.

Responsibilities:
- Create products
- Edit products
- Delete or deactivate products
- Assign exactly one department
- Manage base price
- Manage product options and variants
- Manage variant-specific prices
- Manage variant-specific stock quantities
- Upload product images and videos
- Reorder product media
- Manage product filter attributes

## Admin Inventory

Purpose: manage stock at variant level.

Responsibilities:
- View product variants and their stock quantities
- Update stock quantities
- Identify low-stock items
- Identify out-of-stock items

Stock belongs at the variant level.

## Admin Customers

Purpose: view customer records.

Responsibilities:
- View registered customers
- View basic customer information
- Support access to relevant customer-linked data where needed

## Admin Wishlists

Purpose: view customer wishlist activity and support reminder workflows.

Responsibilities:
- View wishlist activity
- See which customers saved which products
- Support the wishlist reminder email system

## Admin Orders

Purpose: manage WhatsApp order intents and their lifecycle.

Responsibilities:
- View WhatsApp order intents
- View order items
- View historical price snapshots
- Update order status manually

Order statuses:
- initiated
- confirmed
- completed
- cancelled

Rules:
- initiated means the customer clicked Order on WhatsApp
- initiated does not prove payment or completed purchase
- stock is reduced only when the admin changes an order to confirmed

## Admin Content

Purpose: manage storefront content that should change without editing source code.

Responsibilities:
- Manage hero media
- Manage dynamic storefront text/content
- Manage department-specific content
- Upload and reference media stored in Cloudflare R2

Examples include Fashion hero video and future dynamic storefront content.

## Locked scope boundary

This document defines screen responsibilities only.

Do not treat it as a visual design specification.

The following are intentionally not locked here:
- Exact card layouts
- Exact spacing
- Typography hierarchy
- Final section order
- Animations
- Color usage beyond the future design system
- Final component composition

Those decisions can be made during implementation and UI design without changing the product responsibilities defined above.
