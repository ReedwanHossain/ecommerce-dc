# E-commerce Product Gallery

A modern e-commerce product gallery application built with Next.js and TypeScript, featuring product filtering, sorting, shopping cart functionality, and responsive design.

**Live Demo:** [https://ecommerce-dc-tau.vercel.app/](https://ecommerce-dc-tau.vercel.app/)


## Features

### Product Listing
- Responsive grid layout
- Product cards with image, name, price, and category
- In-stock status indicators
- Add to cart functionality directly from cards

### Filtering and Sorting
- Filter by product category
- Filter by price range using a slider
- Filter by availability (in stock/out of stock)
- Sort by price (low to high, high to low)
- Sort alphabetically (A to Z, Z to A)

### Shopping Cart
- Add/remove items
- Update quantities
- Automatic discount (10% off for orders over $200)
- Cart persistence using localStorage
- Cart drawer with summary

### Product Detail Pages
- Detailed product information
- Larger product images
- Quantity selector
- Add to cart functionality
- Back navigation to product gallery

### Responsive Design
- Mobile-first approach
- Optimized layouts for mobile, tablet, and desktop
- Consistent user experience across all devices

### User Experience
- Loading states during data fetching and actions
- Error handling with user-friendly messages
- Toast notifications for cart actions
- Smooth transitions and animations

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **State Management**: React Context API
- **Styling**: Tailwind CSS with shadcn/ui components
- **Data Fetching**: Next.js API Routes
- **Persistence**: LocalStorage for cart data


## Technical Decisions and Reasoning

### Next.js App Router
**Decision**: Used Next.js 15 with App Router.
**Reasoning**: Provides intuitive file-based routing, built-in support for layouts, loading states, and error handling. Enables efficient server-side rendering and better code organization.

### React Context for State Management
**Decision**: Used React Context API instead of Redux.
**Reasoning**: Simpler and more lightweight solution for this application's scope. Makes cart state accessible throughout the application without prop drilling or Redux complexity.

### Tailwind CSS with radix-ui
**Decision**: Used Tailwind CSS with radix-ui components.
**Reasoning**: Enables rapid UI development with a utility-first approach while providing accessible, reusable components. Creates a consistent design system with minimal custom CSS.

### TypeScript
**Decision**: Implemented with TypeScript.
**Reasoning**: Adds static type checking, improving code quality and developer experience. Helps catch errors during development and provides better autocompletion.

### LocalStorage for Cart Persistence
**Decision**: Used localStorage for cart data.
**Reasoning**: Ensures users don't lose cart items between sessions without requiring a backend database. Simple yet effective solution for this assessment's scope.

## Assumptions Made

1. **Product Data Structure**: 
   - Mock API endpoint returns this data structure.

2. **Discount Logic**: 
   - 10% discount for orders over $200 is appropriate for demonstration purposes.

3. **Image Handling**: 
   - Placeholder/demo images are used, levering NextJS built-in image optimization

4. **Browser Support**: 
   - Application is designed for modern browsers supporting ES6+ features and the Fetch API.

5. **User Experience**: 
   - Users expect immediate feedback when adding items to cart, hence the implementation of toast notifications and loading states.

## Future Improvements

1. **User Authentication**: 
   - Login/signup functionality
   - User accounts with saved information
   - Order history tracking

2. **Checkout Process**: 
   - Complete checkout flow with shipping information
   - Payment processing integration
   - Order confirmation and tracking

3. **Search Functionality**: 
   - Search bar for finding products by name or description
   - Autocomplete suggestions
   - Advanced search filters

4. **Performance Optimizations**: 
   - Image optimization for faster loading
   - Code splitting for improved initial load time
   - Server-side rendering for critical pages

5. **Testing**: 
   - Unit tests with Jest and React Testing Library
   - Integration tests for key user flows
   - End-to-end tests with Cypress

6. **Additional Features**: 
   - Product reviews and ratings
   - Wishlist functionality
   - Related products recommendations
   - Recently viewed products
   - Internationalization support


## Setup Instructions

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-product-gallery.git
   cd ecommerce-product-gallery

   ```
2. Install Dependencies 
   ```bash
   npm install or npm install --legacy-peer-deps
   ``` 

3. Run application 
   ```bash
   npm run dev
   ```