# Puspadaya - Next.js Admin Dashboard with PM2

**Puspadaya** is an admin dashboard application built with **Next.js** designed for monitoring the nutritional status of toddlers. This project uses **PM2** for efficient process management in production, ensuring that the app runs smoothly and remains available at all times.

## What is Puspadaya?

**Puspadaya** is a comprehensive platform focused on child nutrition, providing tools for parents, caregivers, and healthcare professionals to monitor and enhance the dietary intake and overall health of toddlers. The application aims to empower users with actionable insights into their children’s nutritional needs, promoting better health outcomes and development.

With **Puspadaya**, you can monitor important health metrics and manage related data seamlessly, leveraging **Next.js** advanced features and integrations to enhance the performance and scalability of your application.

### Key Features
- Built with **Next.js 14** for server-side rendering (SSR), static site generation (SSG), and API routes.
- **PM2** integration for robust process management and automatic restarts in production environments.
- **React 18** support for optimized rendering and performance.
- Ready-to-use dashboard UI components for health monitoring and data visualization.
- **TypeScript** support for reliability and ease of development.

## Installation

1. Clone or download the repository, then install the dependencies with:

   ```bash
   npm install
   # or
   yarn install

2. Run project

   ```bash
   npm run dev

## Running in Production with PM2
In production environments, PM2 is used to manage the application processes, providing features like automatic restarts on failure and monitoring performance.

# Steps to Run Puspadaya with PM2
1. Install PM2 Globally: Before using PM2, ensure it's installed globally on your machine:

  ```bash
  npm install -g pm2

2. Build the Project for Production: Prepare the Next.js application for production by building it with:

  ```bash
    npm run build

3. Start the Application Using PM2: Use PM2 to run the app with the provided ecosystem.config.js file, which defines the process management configuration:

  ```bash
    pm2 start ecosystem.config.js

4. Monitor the Application: Check the status of your running application and ensure it's performing as expected by running:

  ```bash
  pm2 status

5. Manage the Application: Use PM2 to manage the application's lifecycle. For instance, you can restart or stop it using:

  ```bash
    pm2 restart ecosystem.config.js
    pm2 stop ecosystem.config.js

PM2 ensures that the app remains operational by handling unexpected crashes and providing efficient monitoring tools for production environments.