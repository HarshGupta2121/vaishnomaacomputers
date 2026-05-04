# CCTV & Network Installation Business Platform

## Setup Instructions

Because this is a brand new monorepo project, please follow these steps to install dependencies and run the application.

### 1. Backend Setup

Open a terminal and navigate to the `server` directory:
```bash
cd server
npm install
npx prisma db push
npm run start
```
*(This will initialize the SQLite database and start the backend on port 5000)*

To create the initial admin user, make a POST request to:
`http://localhost:5000/api/auth/setup`

### 2. Frontend Setup

Open a second terminal and navigate to the `client` directory:
```bash
cd client
npm install
npm run dev
```
*(This will start the frontend Vite server on port 3000)*

## Features Included
- **Public Website:** Home, Products, Product Details, Services, Gallery, and Contact pages with the exact UI you provided.
- **Admin Dashboard:** Access via `/admin`. Manage inquiries, view products, etc.
- **REST API:** Fully functional Node.js/Express API with SQLite (Prisma).
- **Tailwind CSS Config:** Properly synced with your UI color scheme.
