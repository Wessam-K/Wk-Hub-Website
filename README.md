# WK-Hub Marketing Website

A modern, professional SaaS marketing website for the WK-Hub POS system.

## 🚀 Features

### Pages
- **Home** - Hero section with floating particles, interactive POS demo, AI agent demo, features grid, pricing, FAQ
- **Build Your App** - 4-step wizard for custom solution requests
- **About** - Company story, team, values, milestones, technology stack
- **Contact** - Contact form, office info, support tiers, FAQ

### Technical Features
- ⚡ **React 18** + **TypeScript**
- 🎨 **Tailwind CSS** for styling
- 🎭 **Framer Motion** for animations
- 🧭 **React Router v7** for navigation
- 📱 **Fully responsive** design
- ✨ **Interactive elements**:
  - Mouse-follow glow effect
  - Floating particles
  - Parallax scrolling
  - Animated counters
  - Interactive POS demo
  - AI chat simulation

## 🛠️ Development

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```
Opens at http://localhost:8000

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx      # Animated navigation with mobile menu
│   └── Footer.tsx      # Footer with newsletter signup
├── pages/
│   ├── HomePage.tsx    # Main landing page with all sections
│   ├── BuildPage.tsx   # 4-step custom solution wizard
│   ├── AboutPage.tsx   # Company info & team
│   └── ContactPage.tsx # Contact form & support info
├── App.tsx             # Router setup
├── main.tsx            # Entry point
└── index.css           # Global styles & Tailwind config
```

## 🎨 Design System

### Colors
- **Primary**: Indigo-600 (`#4F46E5`)
- **Accent**: Cyan-500 (`#06B6D4`)
- **Gradient**: `from-indigo-600 to-cyan-500`

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300-900

### Components
- Rounded corners (`rounded-xl`, `rounded-2xl`, `rounded-3xl`)
- Soft shadows (`shadow-lg`, `shadow-xl`)
- Gradient backgrounds
- Hover animations

## 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔗 Related Links
- Main POS System: `../wk-pos-system`
- Admin Panel: `../wk-pos-system/admin-panel`

## 📄 License
Proprietary - WK-Hub © 2026
