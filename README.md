# VybeSync

## Live Demo
[Frontend Live URL](https://vybesync-okjsujr1o-samuel-njomo-njoroges-projects.vercel.app)  
[Backend Live URL](https://vybesync-backend-1.onrender.com)

## Project Overview
VybeSync is a modern event management web application designed to help users discover, sign up for, and manage events efficiently. The platform emphasizes user experience, responsiveness, and real-time backend integration to provide a seamless interface for both attendees and organizers.

## Brand Identity

### Color System
- **Primary:** #6B46C1 – Main branding and call-to-action buttons to convey energy and creativity.
- **Secondary:** #D6BCFA – Accent color for highlights and emphasis on key sections.
- **Neutral:** #F7FAFC – Backgrounds and content separation to maintain readability.

### Typography
- **Headings:** Poppins – Clean, modern, and professional for clear hierarchy.
- **Body:** Roboto – Readable and neutral font for smooth reading on all devices.

## Design Decisions

### Layout Adherence
- Spacing and padding were implemented using Tailwind CSS utility classes for consistent design.
- Flexbox and grid layouts ensure responsiveness across devices.
- Figma mockups were referenced to ensure design accuracy and alignment.

### Creative Departures
- Testimonials and CTA sections were enhanced to improve engagement.
- Content strategy focused on clarity and minimalism, avoiding clutter.
- Mobile-first design ensures optimal stacking and readable content at medium (MD) breakpoints and below.

## Component Architecture
- **Reusable components:** Header, Footer, CTA, Features, Events, etc.
- **Pages:** Hero, Signup, Login, Fom (Form), Testimonials.
- React Router v6 manages navigation between pages.
- Components are structured for modularity and reusability to allow future scalability.

## Performance Optimizations
- Tailwind CSS utility classes to reduce CSS bloat.
- React functional components and hooks for lightweight state management.
- Compressed and optimized images for faster loading.
- Lazy-loading sections where appropriate to improve initial render speed.

## Image Credits
- Unsplash and Pexels for royalty-free event imagery.
- Any custom graphics created specifically for VybeSync.

### Technologies Used

-React v18
-Tailwind CSS v3
-React Router v6
-Node.js & Express.js
-MongoDB & Mongoose
-Vercel (frontend) & Render (backend)

### Challenges and Solutions

-CORS issues: Resolved by configuring CORS middleware on the backend to allow requests from local and deployed frontend URLs.
-Frontend-backend connection across folders: Solved using environment variables and absolute API URLs.
-Deployment port handling: Used process.env.PORT to ensure backend works on Render without manual port configuration.

### Future Improvements

-Implement real-time event notifications.
-Add user profiles with event history and preferences.
-Enhance analytics dashboard for event organizers.

## Installation & Setup

### Backend
```bash
# Navigate to backend folder
cd vybesync-backend

# Install dependencies
npm install

# Create a .env file with:
# PORT=5000
# MONGO_URI=<Your MongoDB URI>

# Start the server
npm start

# Navigate to frontend folder
cd Event-app

# Install dependencies
npm install

# Create a .env file with:
# VITE_API_URL=http://localhost:5000   # Use Render URL in production

# Start development server
npm run dev
