# State Management with Pinia (Running Example: MiniShop)

### App Features
1. **Products page** (`/products`)
   - fetch product list from backend (async)
   - add product to cart
2. **Navbar**
   - show cart badge (cart item count)
   - show login state (Login/Logout)
3. **Cart page** (`/cart`)
   - display cart items, quantities
   - computed totals (items + total price)
   - checkout button (requires login)
4. **Login page** (`/login`)
   - fake login via backend (async), store token + username
5. **Route guard**
   - user must be logged in to access `/cart` (or at least to checkout)

## Project structure
```
src/
  main.js
  App.vue
  router/index.js
  stores/
    products.js
    cart.js
    auth.js
  components/
    NavBar.vue
    ProductCard.vue
    CartItemRow.vue
  views/
    ProductsView.vue
    CartView.vue
    LoginView.vue
```

## Installation steps
### Front-end (Vue)
```bash
cd example
pnpm install 
pnpm dev
```

### Back-end (Express mock API)
```bash
cd REST/products
pnpm install
pnpm dev
```
