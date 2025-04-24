## Overview

This project provides a sleek user interface for job seekers to track their applications, practice interviews, create resumes and cover letters, and analyze LinkedIn profiles. The dashboard features a clean design with smooth animations and interactive elements for an enhanced user experience.

## Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Animated UI Components**: Utilizes Framer Motion for smooth, engaging animations
- **Interactive Elements**: Hover effects, click animations, and state transitions
- **Sidebar Navigation**: Easy access to all dashboard features
- **Dropdown Menus**: Proper dropdown implementations for various selectors
- **Statistics Overview**: Visual representation of job search progress
- **Job Application Tracking**: Track application status and follow-ups
- **Company Profiles**: View and interact with potential employers

## Tech Stack

- **React**: Frontend library for building the user interface
- **Chakra UI**: Component library for consistent styling and responsive design
- **Framer Motion**: Animation library for creating fluid motion effects
- **TypeScript**: Type-safe code for better development experience
- **Lucide React**: Lightweight icon library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/JunaidRathore/techsea

# Navigate to the project directory
cd job-application-dashboard

# Install dependencies
npm install
# or
yarn install
```

### Running the Application

```bash
# Start the development server
npm run dev
# or
yarn dev
```

The application will start running at http://localhost:5173

## Project Structure

```
src/
├── components/           # UI components
│   ├── Dashboard/        # Dashboard-related components
│   │   ├── HeroBanner.tsx   # Hero banner at the top
│   │   ├── index.tsx        # Main Dashboard export
│   │   ├── Overview.tsx     # Statistics overview section
│   │   ├── QuickActions.tsx # Quick action buttons
│   │   └── Status.tsx       # Application status cards
│   ├── Sidebar/          # Sidebar navigation
│   │   ├── index.tsx        # Main Sidebar export
│   │   ├── MenuItems.tsx    # Navigation menu items
│   │   └── Support.tsx      # Support section in sidebar
│   └── ui/               # Reusable UI components
├── lib/                  # Library code and utilities
│   └── utils.ts          # Utility functions
├── app.tsx               # Main application component
├── index.tsx             # Entry point
└── theme.ts              # Chakra UI theme customization
```

## Customization

### Theme

The application uses a custom Chakra UI theme that you can edit in the `src/theme` directory. Colors, fonts, and component styles can be adjusted to match your branding.

```typescript
// Example of theme customization in theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary: "rgba(86, 59, 219, 1)",
      black: "rgba(16, 20, 25, 1)",
      sidebarBg: "rgba(249, 249, 249, 1)",
      // Add more custom colors here
    }
  },
  fonts: {
    body: "Geist, system-ui, sans-serif",
    heading: "Geist, system-ui, sans-serif"
  }
});

export default theme;
```

### Components

All components are built with Chakra UI and Framer Motion, making them highly customizable. You can adjust props, animations, and styling to match your requirements.

## Animation Guide

This project uses Framer Motion for animations. Here are some common patterns used:

### Entry Animations

Components animate in when they first mount using variants:

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};
```

### Hover and Tap Animations

Interactive elements have hover and tap animations:

```tsx
<MotionButton
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  // other props
>
  Button Text
</MotionButton>
```

### Continuous Animations

Some elements have continuous animations to draw attention:

```tsx
<MotionBadge
  animate={{
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }}
  // other props
>
  Badge Content
</MotionBadge>
```

## License

[MIT License](LICENSE)

## Acknowledgements

- Icons by [Lucide React](https://lucide.dev)
- Fonts by [Geist](https://vercel.com/font)
- Design inspiration from modern job application platforms