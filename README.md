# Camera Shop - E-commerce Application

Client Side Link : https://camera-shop-shuva.vercel.app/
Server Side Link : https://my-camera-shop-server.vercel.app/

## Overview
Camera Shop is an e-commerce platform designed for users to browse, buy, sell, and manage camera products. The application offers separate functionalities for different user roles: buyers, sellers, and admins.

- **Buyers** can browse products, manage their wishlist, and make purchases.
- **Sellers** can add products and manage their inventory.
- **Admins** can manage users and view the overall system performance.

---

## Features

### Buyer Features
- **View Products**: Browse a wide range of cameras and accessories.
- **Wishlist**: Add products to a wishlist for later viewing or purchasing.
- **Purchase**: Add products to cart and complete the checkout process.

### Seller Features
- **Manage Products**: Add new products to the store and update product details.
- **Product Inventory**: View and update the inventory of listed products.
- **Product Statistics**: Track the sales and views of the seller’s products.

### Admin Features
- **Manage Users**: View and manage buyer and seller accounts.
- **Approve Sellers**: Approve new sellers and manage their statuses.
- **System Monitoring**: Monitor the overall health and performance of the platform.

---

## How to Run the Application Locally

### Prerequisites
- Node.js installed (v14.x or higher)
- npm (Node Package Manager) installed
- MongoDB (for storing user and product data) or a remote database

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
For Client: git clone https://github.com/shuvakarmakar/my-camera-shop-client
For Server : git clon https://github.com/shuvakarmakar/my-camera-shop-server

### 2. Install Dependencies

cd camera-shop
npm install

### 3. Configure Environment Variables from .env.local functionalities

### 4. Run the Backend Server
cd server
npm install
npm start

### 5. Run the Frontend Application
cd client
npm start


Credentials for Different User Types
1. Buyer Credentials
Email: buyer@example.com
Password: Buyer123!
2. Seller Credentials
Email: seller@example.com
Password: Seller123!
Role: seller (Seller will need to request approval from admin before listing products)
3. Admin Credentials
Email: admin@example.com
Password: Admin123!
Role: admin (Admins have access to manage all users and system settings)

