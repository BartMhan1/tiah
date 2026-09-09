# TIAH V1 Database Schema

Database: Supabase PostgreSQL

Media storage: Cloudflare R2. PostgreSQL stores object references and metadata, not raw image/video binaries.

## users
```text
id                  uuid PK
full_name           text
email               text UNIQUE
phone               text
role                customer | admin
email_verified      boolean
created_at          timestamp
updated_at          timestamp
```

Any registered user whose role is set to `admin` can access the admin portal.

## auth_otps
```text
id                  uuid PK
email               text
code_hash           text
expires_at          timestamp
used_at             timestamp nullable
attempt_count       integer
created_at          timestamp
```

Never store raw OTP values.

## sessions
```text
id                  uuid PK
user_id             uuid FK -> users.id
token_hash          text
expires_at          timestamp
last_seen_at        timestamp
created_at          timestamp
```

## departments
```text
id                  uuid PK
name                text
slug                text UNIQUE
```

Seed values:
```text
Fashion      fashion
Foodstuffs   foodstuffs
```

A product belongs to exactly one department.

## products
```text
id                  uuid PK
department_id       uuid FK -> departments.id
name                text
slug                text UNIQUE
description         text
base_price          decimal
status              active | inactive
created_at          timestamp
updated_at          timestamp
```

## product_options
Defines configurable product dimensions.

```text
id                  uuid PK
product_id          uuid FK -> products.id
name                text
```

Examples: Size, Colour, Weight, Pack Size.

## product_option_values
```text
id                  uuid PK
option_id           uuid FK -> product_options.id
value               text
sort_order          integer
```

## product_variants
Price and stock live at the variant level.

```text
id                  uuid PK
product_id          uuid FK -> products.id
sku                 text UNIQUE
price_override      decimal nullable
stock_quantity      integer
is_active           boolean
created_at          timestamp
updated_at          timestamp
```

If `price_override` is null, use `products.base_price`.

Products without visible options should still use one default variant internally so cart, inventory, and order logic remain consistent.

## variant_option_values
```text
variant_id          uuid FK -> product_variants.id
option_value_id     uuid FK -> product_option_values.id
PRIMARY KEY (variant_id, option_value_id)
```

## filter_definitions
Department-specific, admin-managed product filters.

```text
id                  uuid PK
department_id       uuid FK -> departments.id
name                text
slug                text
data_type           text | number | boolean
sort_order          integer
is_active           boolean
```

Examples:

Fashion:
- Gender
- Occasion
- Clothing Type
- Material

Foodstuffs:
- Food Category
- Origin
- Type

Variant properties such as size, colour, weight, and pack size remain in the variant system.

## filter_values
```text
id                   uuid PK
filter_definition_id uuid FK -> filter_definitions.id
value                 text
sort_order            integer
```

## product_filter_values
```text
product_id           uuid FK -> products.id
filter_value_id      uuid FK -> filter_values.id
PRIMARY KEY (product_id, filter_value_id)
```

## product_media
```text
id                  uuid PK
product_id          uuid FK -> products.id
r2_key              text
media_type          image | video
alt_text            text
sort_order          integer
is_primary          boolean
created_at          timestamp
```

The actual file lives in Cloudflare R2.

## carts
```text
id                  uuid PK
user_id             uuid FK -> users.id
status              active | converted | abandoned
created_at          timestamp
updated_at          timestamp
```

A signed-in customer should normally have one active cart.

## cart_items
```text
id                  uuid PK
cart_id             uuid FK -> carts.id
variant_id          uuid FK -> product_variants.id
quantity            integer
created_at          timestamp
updated_at          timestamp
```

Guest carts persist locally. On login, guest cart contents merge with the user's active Supabase cart.

## wishlist_items
```text
id                  uuid PK
user_id             uuid FK -> users.id
product_id          uuid FK -> products.id
variant_id          uuid FK -> product_variants.id nullable
created_at          timestamp
```

## wishlist_reminders
```text
id                  uuid PK
wishlist_item_id    uuid FK -> wishlist_items.id
scheduled_for       timestamp
sent_at             timestamp nullable
status              pending | sent | cancelled
created_at          timestamp
```

Resend handles reminder email delivery.

## orders
Created when the customer initiates an Order on WhatsApp action.

```text
id                  uuid PK
user_id             uuid FK -> users.id
status              initiated | confirmed | completed | cancelled
order_type          single | cart
whatsapp_message    text
total_amount        decimal
created_at          timestamp
confirmed_at        timestamp nullable
completed_at        timestamp nullable
cancelled_at        timestamp nullable
updated_at          timestamp
```

`initiated` means the customer clicked Order on WhatsApp. It does not prove that payment or order completion occurred.

Admin manually updates order status.

Stock should be reduced when an order becomes `confirmed`, not when it is merely `initiated`.

## order_items
Store a historical snapshot so later product or price changes do not alter old orders.

```text
id                  uuid PK
order_id            uuid FK -> orders.id
product_id          uuid FK -> products.id
variant_id          uuid FK -> product_variants.id
product_name        text
variant_description text
unit_price          decimal
quantity            integer
subtotal            decimal
```

## store_content
Admin-managed dynamic storefront content.

```text
id                  uuid PK
department_id       uuid FK -> departments.id nullable
content_key         text UNIQUE
content_type        text
title               text nullable
body                text nullable
r2_key              text nullable
metadata            jsonb nullable
is_active           boolean
updated_at          timestamp
```

Examples:
```text
fashion.hero.video
fashion.hero.title
foodstuffs.hero.image
```

## Core relationships
```text
USER
├── Sessions
├── Cart
│   └── Cart Items
├── Wishlist
│   └── Wishlist Reminders
└── Orders
    └── Order Items

DEPARTMENT
├── Products
└── Filter Definitions

PRODUCT
├── Product Options
│   └── Option Values
├── Variants
│   └── Variant Option Values
├── Media -> Cloudflare R2
└── Product Filter Values
```
