# NFT Marketplace Landing Page

A pixel-perfect, fully responsive NFT marketplace landing page built with React and Vite. This project replicates a Figma design with strong emphasis on responsiveness across desktop, tablet, and mobile devices.

## 🎨 Design

This landing page is based on the Figma design:
- **Figma URL**: https://www.figma.com/design/U5oWZGnEQjv3ckO42dWzbV/Untitled?node-id=0-1

## ✨ Features

- **Pixel-accurate UI**: Faithfully recreates the Figma design
- **Fully Responsive**: Optimized for desktop (1920px), tablet (768px), and mobile (480px)
- **Modern Tech Stack**: React 18, Vite, React Router
- **Clean Architecture**: Modular components and sections
- **Smooth Animations**: Hover effects, transitions, and gradient effects
- **Multiple Pages**: Home, About, and Features pages
- **Design System**: Consistent colors, typography, and spacing using CSS variables

## 📁 Project Structure

```
figma-landing-page-ui/
├── public/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   ├── Card.jsx
│   │   ├── Card.css
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Features.jsx
│   │   └── Features.css
│   ├── sections/           # Home page sections
│   │   ├── HeroSection.jsx
│   │   ├── HeroSection.css
│   │   ├── StatsSection.jsx
│   │   ├── StatsSection.css
│   │   ├── FeaturesSection.jsx
│   │   ├── FeaturesSection.css
│   │   ├── CTASection.jsx
│   │   └── CTASection.css
│   ├── styles/             # Global styles
│   │   ├── globals.css
│   │   ├── responsive.css
│   │   └── variables.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd figma-landing-page-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎯 Responsiveness

The landing page is fully responsive across three main breakpoints:

### Desktop (> 768px)
- Full-width layouts
- Multi-column grids
- Large typography
- Spacious padding and margins

### Tablet (≤ 768px)
- Adjusted grid layouts (3-column → 2-column)
- Medium typography
- Modified spacing
- Responsive navigation menu

### Mobile (≤ 480px)
- Single-column layouts
- Compact typography
- Reduced spacing
- Mobile-first navigation (hamburger menu)
- Full-width buttons

## 📄 Pages

### Home Page
- **Hero Section**: Main landing section with CTA buttons
- **Stats Section**: Key metrics display
- **Features Section**: Trending NFTs grid
- **CTA Section**: Community join section

### About Page
- Company mission and vision
- Core values showcase
- Team member profiles
- Company statistics

### Features Page
- Platform features grid
- Benefits for creators and collectors
- How it works (step-by-step guide)
- Call-to-action section

## 🎨 Design System

### Colors
- **Background**: Dark theme (#0f0f1a, #1a1a2e)
- **Accent Colors**: Purple (#8b5cf6), Pink (#ec4899), Blue (#3b82f6)
- **Gradients**: Purple to Pink linear gradients

### Typography
- **Font Family**: Inter
- **Scale**: 12px - 60px
- **Weights**: 300 - 900

### Spacing
- **System**: 8px base unit
- **Range**: 8px - 96px

## 🛠️ Technologies Used

- **React**: ^18.2.0
- **React Router DOM**: ^6.20.0
- **Vite**: ^5.0.8
- **CSS3**: Custom properties, Grid, Flexbox
- **Google Fonts**: Inter font family

## 🧰 Primary Frontend Stack Used

- **Framework**: React 18.2 (SPA)
- **Dev/Build Tool**: Vite 5 + @vitejs/plugin-react
- **Routing**: React Router DOM 6.20
- **Styling**: CSS (variables, Flexbox, Grid) with modular component/section styles
- **Language**: Modern JavaScript (ES Modules)
- **Node Runtime**: Node.js 18+ with npm scripts
- **Build Output**: Static site in `dist` suitable for Netlify/Vercel

## 📦 Deployment


### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify



1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📸 Screenshots

Screenshots should be captured at:
- **Desktop**: 1920x1080
- **Tablet**: 768x1024
- **Mobile**: 375x812

## 🔗 Live Demo

[Add your live demo URL here after deployment]

## 📝 Notes

- Images are placeholder URLs from Unsplash for demonstration
- "Store", "Games", and "Connect Wallet" features have been removed as requested
- The design focuses on NFT marketplace functionality

## 👨‍💼 Author

[Your Name]

## 📄 License

This project is for educational/assignment purposes.

---

Built with ❤️ using React and Vite
