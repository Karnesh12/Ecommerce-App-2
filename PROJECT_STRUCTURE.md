# Project Structure: React Native E-Commerce App

A unified view of the complete folder and file structure for both the client (React Native / Expo) and server (Express.js / TypeScript / MongoDB).

```text
ecommerce-app/
│
├── .gitignore
├── PROJECT_STRUCTURE.md
│
├── client/                                     # Frontend: React Native (Expo Router + NativeWind)
│   ├── app/                                    # Expo Router file-based routes
│   │   ├── _layout.tsx                         # Root app layout & context providers
│   │   ├── checkout.tsx                        # Checkout screen
│   │   ├── shop.tsx                            # Catalog / shop screen
│   │   ├── (auth)/                             # Authentication route group
│   │   │   ├── _layout.tsx                     # Auth stack layout
│   │   │   ├── sign-in.tsx                     # Sign-in screen
│   │   │   └── sign-up.tsx                     # Sign-up screen
│   │   ├── (tabs)/                             # Bottom tab navigation
│   │   │   ├── _layout.tsx                     # Tab bar configuration
│   │   │   ├── cart.tsx                        # Cart tab screen
│   │   │   ├── favorites.tsx                   # Wishlist / favorites tab screen
│   │   │   ├── index.tsx                       # Home tab screen
│   │   │   └── profile.tsx                     # Profile tab screen
│   │   ├── addresses/                          # Address management
│   │   │   └── index.tsx                       # Shipping addresses screen
│   │   ├── admin/                              # Admin portal
│   │   │   ├── _layout.tsx                     # Admin layout
│   │   │   ├── index.tsx                       # Admin dashboard overview
│   │   │   ├── orders.tsx                      # Admin orders list
│   │   │   └── products/                       # Admin product management
│   │   │       ├── _layout.tsx                 # Products layout
│   │   │       ├── add.tsx                     # Add product screen
│   │   │       ├── index.tsx                   # Admin product listing
│   │   │       └── edit/
│   │   │           └── [id].tsx                # Edit product by ID
│   │   ├── orders/                             # User order management
│   │   │   ├── [id].tsx                        # Single order detail
│   │   │   └── index.tsx                       # User order history
│   │   └── product/
│   │       └── [id].tsx                        # Product details screen
│   │
│   ├── assets/                                 # Static media, icons & images
│   │   ├── assets.ts                           # Static asset exports
│   │   ├── favicon.svg                         # Favicon SVG
│   │   ├── logo.png                            # App logo
│   │   └── images/                             # App icons, splash & brand images
│   │
│   ├── components/                             # Reusable UI components
│   │   ├── CartItem.tsx                        # Cart item row component
│   │   ├── CategoryItem.tsx                    # Category pill / button
│   │   ├── Header.tsx                          # App bar header
│   │   └── ProductCard.tsx                     # Product grid item card
│   │
│   ├── constants/                              # App constants, configuration & types
│   │   ├── api.ts                              # API base URL & Axios configuration
│   │   ├── index.ts                            # Theme colors & general constants
│   │   └── types.ts                            # Frontend TypeScript interfaces
│   │
│   ├── context/                                # React Context state providers
│   │   ├── CartContext.tsx                     # Cart state and actions
│   │   └── WishlistContext.tsx                 # Wishlist state and actions
│   │
│   ├── declarations.d.ts                       # Custom TS type declarations
│   ├── eslint.config.js                        # ESLint configuration
│   ├── expo-env.d.ts                           # Expo type declarations
│   ├── global.css                              # Tailwind CSS definitions
│   ├── metro.config.js                         # Metro bundler config
│   ├── nativewind-env.d.ts                     # NativeWind type declarations
│   ├── package.json                            # Client dependencies & scripts
│   ├── tailwind.config.js                      # Tailwind CSS settings
│   └── tsconfig.json                           # Client TypeScript configuration
│
└── server/                                     # Backend: Express.js, TypeScript & MongoDB
    ├── config/                                 # Third-party & DB configurations
    │   ├── cloudinary.ts                       # Cloudinary asset storage config
    │   └── db.ts                               # MongoDB connection via Mongoose
    │
    ├── controllers/                            # Request handlers & business logic
    │   ├── addressController.ts                # Address CRUD operations
    │   ├── adminController.ts                  # Admin dashboard & analytics
    │   ├── cartController.ts                   # Cart CRUD operations
    │   ├── ordersController.ts                 # Order creation & history
    │   ├── paymentController.ts                # Stripe payment processing
    │   ├── productController.ts                # Product queries & catalog
    │   ├── webhooks.ts                         # Clerk & Stripe webhook receivers
    │   └── wishlistController.ts               # Wishlist operations
    │
    ├── middleware/                             # Custom Express middlewares
    │   ├── auth.ts                             # Clerk JWT authentication & admin checks
    │   └── upload.ts                           # Multer file upload handling
    │
    ├── models/                                 # Mongoose Schemas & Models
    │   ├── Address.ts                          # Address data model
    │   ├── Cart.ts                             # Cart data model
    │   ├── Order.ts                            # Order data model
    │   ├── Product.ts                          # Product data model
    │   ├── User.ts                             # User data model
    │   └── Wishlist.ts                         # Wishlist data model
    │
    ├── routes/                                 # Express API Routes
    │   ├── addressRoutes.ts                    # /api/address
    │   ├── adminRoutes.ts                      # /api/admin
    │   ├── cartRoutes.ts                       # /api/cart
    │   ├── ordersRoutes.ts                     # /api/orders
    │   ├── paymentRoute.ts                     # /api/payment
    │   ├── productsRoutes.ts                   # /api/products
    │   └── wishlistRoutes.ts                   # /api/wishlist
    │
    ├── scripts/                                # Utility & administrative scripts
    │   ├── makeAdmin.ts                        # Script to elevate a user to admin
    │   └── seedProducts.ts                     # Script to seed initial catalog data
    │
    ├── types/                                  # Server TypeScript types
    │   ├── express.d.ts                        # Extended Express Request types
    │   └── index.ts                            # Core server type definitions
    │
    ├── .env                                    # Environment variables
    ├── package.json                            # Server dependencies & scripts
    ├── server.ts                               # Server entrypoint & route registration
    ├── tsconfig.json                           # Server TypeScript configuration
    └── vercel.json                             # Deployment configuration
```
