# 🛋️ Furniture Fixture - E-Commerce Project

![Angular](https://img.shields.io/badge/Angular-17-red?style=for-the-badge&logo=angular)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple?style=for-the-badge&logo=bootstrap)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)

## 📌 About The Project

**Furniture Fixture** is a fully responsive e-commerce web application built with Angular 17. It allows users to browse furniture products, add them to a shopping cart, and manage products through an admin dashboard.

---

## 🚀 Features

- 🏠 **Home Page** - Browse all available furniture products with search and filter
- 🛒 **Shopping Cart** - Add/remove products with total price calculation
- ➕ **Add Product** - Admin can add new products dynamically
- ✏️ **Edit Product** - Admin can edit existing products
- 🗑️ **Delete Product** - Admin can delete products
- 📊 **Dashboard** - Overview of products, orders and account info
- 👤 **Profile** - User profile management
- 📝 **Blog** - Furniture tips and trends with details page
- 📞 **Contact** - Contact form with info
- ℹ️ **About** - Company information
- 🔐 **Login/Register** - User authentication with LocalStorage
- 🔍 **Search** - Search products by name
- 🏷️ **Filter** - Filter products by category
- 📄 **Pagination** - Products split into pages
- 🛡️ **Auth Guard** - Protected routes for admin pages
- 🔢 **Cart Counter** - Live cart item counter in navbar
- 📦 **Product Details** - Detailed page for each product
- 404 **Not Found Page** - Custom 404 page

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| Angular 17 | Frontend Framework |
| TypeScript | Programming Language |
| Bootstrap 5 | UI Styling |
| HTML5 & CSS3 | Structure & Design |
| LocalStorage | Data Persistence |
| Angular Signals | State Management |
| Angular Router | Navigation |
| Angular Guards | Route Protection |
| Angular Forms | Form Handling |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/MohamedHofny/-E-commerce-Project-Completed-.git

# Navigate to project directory
cd -E-commerce-Project-Completed-

# Install dependencies
npm install

# Run the development server
ng serve -o
```

---

## 📁 Project Structure


src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   ├── products/
│   │   ├── product-details/
│   │   ├── cart/
│   │   ├── dashboard/
│   │   ├── profile/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── blog/
│   │   ├── blog-details/
│   │   ├── login/
│   │   ├── add-product/
│   │   ├── edit-product/
│   │   └── not-found/
│   ├── services/
│   │   ├── cart.service.ts
│   │   └── product.service.ts
│   ├── guards/
│   │   └── auth.guard.ts
│   └── models/
│       └── iproduct.ts
└── assets/


---

## 👨‍💻 Developer

**Mohamed Hofny**

[![GitHub](https://img.shields.io/badge/GitHub-MohamedHofny-black?style=for-the-badge&logo=github)](https://github.com/MohamedHofny)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).