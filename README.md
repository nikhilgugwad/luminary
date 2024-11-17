# **Luminary**

## **Table of Contents**

1. [Introduction](#introduction)
2. [Core Features](#core-features)
3. [Tech Stack Used](#tech-stack-used)
4. [Setup Instructions](#setup-instructions)
5. [API Endpoints](#api-endpoints)
6. [Deployment](#deployment)
7. [Future Improvements](#future-improvements)
8. [Collaborations and Contributions](#collaborations-and-contributions)
9. [Additional Notes](#additional-notes)

## **Introduction**

**Luminary** is a modern web application designed for a seamless and flexible experience for managing products, categories, and images. It is built using Next.js for the frontend and Sanity.io for content management, allowing for easy customization and management of dynamic content. It supports a wide range of features to manage and display products with rich media content and flexible categorization.

The application provides an easy-to-use admin interface (via Sanity Studio) for managing product listings and other content. It supports multi-image handling, category referencing, and other essential features for e-commerce and product display websites.

## **Core Features**

- **Product Management**: Users can create and manage products, including images, descriptions, prices, and categories.
- **Category Management**: Create and manage product categories that can be referenced in individual product entries.
- **Hero Images**: Set up two hero images that can be displayed on the homepage, offering visual appeal and marketing functionality.
- **Dynamic Content**: Real-time updates to the product catalog via Sanity’s CMS.
- **Responsive Design**: The app is optimized for mobile and desktop use.
- **Stripe Integration**: Integration with Stripe for payment processing and pricing management.

## **Tech Stack Used**

- **Frontend**:
  - **Next.js**: A React framework for server-side rendering and static site generation.
  - **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
  - **Shadcn UI**: A component library for styled UI components.
  - **TypeScript**: A superset of JavaScript that offers optional static typing for better developer experience.
- **Backend**:
  - **Sanity.io**: A headless CMS for managing content (product listings, categories, images), to manage content and products efficiently we can utilize.
  - **Stripe**: For payment processing, including product pricing integration.
- **Deployment**:
  - **Vercel**: A platform for deploying Next.js applications [Luminary](https://luminary.vercel.app).
  - **Sanity**: Hosted CMS solution [Sanity Studio](https://luminary.sanity.studio).

## **Setup Instructions**

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/nikhilgugwad/luminary-ecommerce-app.git
   cd luminary
   ```

2. **Install dependencies**:
   Use `npm` or `yarn` to install the necessary packages:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file at the root of your project with the following content:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   This will start the Next.js server at `http://localhost:3000`.

## **API Endpoints**

Here are the main API endpoints that your app interacts with:

### **Sanity API Endpoints**

Sanity is used to fetch and manage content. The following endpoints are used for retrieving products and categories:

- **GET `/api/products`**: Fetch all products.
- **GET `/api/categories`**: Fetch all product categories.

### **Stripe API Endpoints**

- **POST `/api/checkout`**: Initiates the Stripe checkout process.

Refer to the official [Sanity API](https://www.sanity.io/docs/http-api) and [Stripe API documentation](https://stripe.com/docs/api) for more details.

## **Deployment**

### **Vercel (Frontend Deployment)**

1. Create an account on [Vercel](https://vercel.com/).
2. Connect your GitHub repository and deploy the app to Vercel.
3. Set the environment variables in the Vercel dashboard (same as `.env.local` above).
4. Once deployed, the app will be available at `https://your-project-name.vercel.app`.

### **Sanity (Content Management)**

1. Set up your Sanity Studio by following the instructions in the [Sanity documentation](https://www.sanity.io/docs/getting-started).

## **Future Improvements**

- **Payment Integration**: Add support for multiple payment methods with Stripe (e.g., Apple Pay, Google Pay).
- **Advanced Product Filters**: Implement advanced search and filtering for product categories.
- **Admin Dashboard**: Improve the backend experience with a comprehensive admin dashboard.
- **Localization**: Add multi-language support for different regions.
- **User Authentication**: Implement user authentication for order tracking and account management.

## **Collaborations and Contributions**

We welcome contributions from the community! To contribute:

1. Fork the repository and clone it locally.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push your changes to your fork (`git push origin feature/your-feature`).
5. Open a pull request describing the changes.

Please ensure your code adheres to the coding standards and passes all the tests before creating a pull request.

## **Additional Notes**

- **Sanity Studio**: The Sanity Studio allows easy content management for the project, especially for products and categories. You can access it via the admin panel after setting up the project.
- **Tailwind CSS**: Used for styling across the application with a utility-first approach for faster development.
- **Shadcn UI**: A set of pre-styled components to accelerate the UI development process.
