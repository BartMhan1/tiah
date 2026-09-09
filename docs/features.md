# TIAH V1 Features

## Storefront

### Fashion browsing
- Dedicated Fashion experience and route.
- Large hero area with video support.
- Fashion imagery and product discovery sections.
- Products lead to product detail pages.
- Fashion design and exact section layout are not locked yet.

### Foodstuffs browsing
- Dedicated Foodstuffs experience and route.
- Own product discovery experience.
- Shares TIAH systems but should not simply copy the Fashion visual structure.

### Global search
- Search works across the entire TIAH catalogue.
- A search can move the user across departments when appropriate.
- Results should clearly indicate whether a product belongs to Fashion or Foodstuffs.
- Filters are department-specific.

Fashion filter examples:
- Gender
- Occasion
- Clothing type
- Material
- Size
- Colour

Foodstuffs filter examples:
- Food category
- Weight
- Pack size

### Product detail page
Show:
- Product images and/or video
- Product name
- Price
- Description
- Availability
- Quantity selector
- Relevant variants such as size, colour, weight, or pack size

Primary actions:
- Add to Bag/Basket
- Order on WhatsApp

Related products may appear below.

### Cart
- One shared cart across Fashion and Foodstuffs.
- Appears as Bag in Fashion and Basket in Foodstuffs.
- Only one cart icon appears at a time.
- Persists across page changes and refreshes.
- Guest cart persists locally.
- Signed-in cart syncs to Supabase and follows the customer across devices.
- Guest cart should merge with the authenticated cart on login.
- Customers can update quantities and remove items.
- Each cart item can be ordered individually on WhatsApp.
- Entire cart can be ordered in one combined WhatsApp draft.

### Wishlist
- Customers can save products without adding them to cart.
- Wishlist is tied to the authenticated user.
- Wishlist reminder emails are part of V1.

### Customer profile and auth
- Lightweight customer identity, not a traditional username/password account experience.
- Custom passwordless authentication implemented inside Next.js.
- Resend is used for OTP email delivery.
- Profile control opens an inline dropdown/surface.
- First-time form collects full name, email, and contact/WhatsApp number.
- After submission, the same surface changes to OTP entry.
- Successful verification creates a persistent session without navigating away.
- Customers can view/edit profile and log out.

### Inventory and product variants
- Variants are a proper data-driven system, not hardcoded.
- Fashion variants may include size and colour.
- Foodstuffs variants may include weight and pack size.
- Variant-level stock quantities.
- Variants may have different prices.
- Product availability includes In Stock and Out of Stock.
- Admin controls inventory and availability.

### WhatsApp ordering
- No payment is processed on TIAH.
- Order on WhatsApp generates a pre-filled draft.
- Single-item ordering drafts only that item.
- Order All drafts all cart items.
- Clicking the WhatsApp order action records an order intent in TIAH.

## Admin portal

Admin access is controlled by the user role stored in the database. Any registered account marked as admin can access the protected admin portal.

Admin capabilities:
- Create products
- Edit products
- Delete products
- Manage prices
- Manage variants
- Manage stock quantities
- Set In Stock / Out of Stock
- Upload product images and videos
- Manage dynamic storefront content such as the Fashion hero video
- View customers
- View wishlists
- View order history/order intents
- Manually update order status

Order status flow:
- initiated
- confirmed
- completed
- cancelled

Stock should change when an order becomes confirmed, not merely when the customer opens WhatsApp.

## Global UI foundation
- Global navbar and footer across storefront pages.
- Material Design 3 foundation.
- Ghanaian brand identity using red, gold/yellow, green, and black thoughtfully.
- Responsive across desktop, tablet, and mobile.
