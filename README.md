# 🚀 Frontend & CMS Developer Portfolio

A stunning, high-performance portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Designed to showcase a Senior Frontend Developer's skills, projects, and experience.

## 🎨 Features

### Visual Design
- **Dark-mode-first aesthetic** with electric neon accents (cyan, emerald, violet)
- **Smooth animations** powered by Framer Motion for premium micro-interactions
- **Fully responsive** design optimized for mobile, tablet, and desktop
- **Lightning-fast performance** with lazy loading and code splitting

### Accessibility
- **WCAG AA compliant** for inclusive web experience
- **Semantic HTML** structure for better SEO and screen readers
- **Keyboard navigation** support throughout
- **High contrast** color scheme for readability

### Core Sections

#### 1. **Hero Section**
- Clean, minimalist aesthetic with bold typography
- Magnetic headline showcasing 4+ years of expertise
- Two CTAs: "View Work" and "Contact Me" with smooth scroll navigation
- Active social media links (GitHub, LinkedIn, Email)

#### 2. **Experience Timeline**
- Beautiful interactive timeline showing 3+ years at Kreatio Technologies
- Key accomplishments with major global media publishers:
  - Aspermont
  - Incisive
  - Hemming Group
  - Ardent Alcobev
- Hover animations with highlighted achievements
- Responsive layout adapting to mobile/desktop

#### 3. **Interactive Projects Display**
- Filterable project cards with category selection
- Featured projects:
  - **Enterprise Multi-Site CMS** - Role-based access, config-driven UI
  - **Mailfixx** - Email campaign template builder
  - **Samhitha's Ladies Apparel** - E-commerce platform
  - **Whereitz** - Local search engine with SEO optimization
- Tech stack tags for each project
- Links to project demos and GitHub repositories

#### 4. **Core Skills Grid**
- Categorized skill sections:
  - **Core Frontend**: HTML5, CSS3, SCSS, JavaScript, TypeScript
  - **Frameworks**: React, Next.js, Angular, Tailwind CSS, Material UI
  - **Architecture**: CMS, RESTful APIs, GraphQL, Microservices
- Hover animations on skill tags
- Expertise areas highlight (4 key pillars)

#### 5. **Contact Section**
- Modern contact form with validation
- Direct contact details (email, phone, location)
- Social media links for professional networking
- Smooth form submission with user feedback

#### 6. **Navigation & Footer**
- Fixed header with smooth scrolling navigation
- Mobile-responsive hamburger menu
- Footer with quick links and social connections
- Accessibility-first footer design

## 🛠 Tech Stack

### Frontend Framework
- **React 18** - UI library
- **TypeScript** - Type-safe code
- **Vite** - Lightning-fast build tool

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformation
- **Framer Motion** - Production-ready animation library

### UI Components
- **Lucide React** - Beautiful, consistent icons

### Development
- **Oxlint** - Fast, production-grade linter
- **Vite Dev Server** - Instant HMR (Hot Module Replacement)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd harip

# Install dependencies
npm install

# Start development server
npm run dev
```

The portfolio will be available at `http://localhost:5173/`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Hero section with CTA
│   ├── Navigation.tsx    # Fixed header with nav menu
│   ├── Timeline.tsx      # Experience timeline
│   ├── Projects.tsx      # Projects showcase with filters
│   ├── Skills.tsx        # Skills grid and expertise
│   ├── Contact.tsx       # Contact form and details
│   ├── Footer.tsx        # Footer with links
│   └── index.ts          # Component exports
├── App.tsx               # Main app component
├── App.css               # Global styles (Tailwind)
├── index.css             # Tailwind directives
└── main.tsx              # Entry point
```

## 🎯 Key Features in Detail

### Smooth Scroll Navigation
- All navigation links smoothly scroll to sections
- Fixed header stays visible while scrolling
- Mobile menu closes after navigation

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly buttons and interactive elements
- Optimized images and fast load times

### Animation Strategy
- Entry animations on scroll using Framer Motion variants
- Staggered animations for lists and grids
- Hover effects on interactive elements
- Smooth transitions between states
- Performance-optimized with GPU acceleration

### Customization Guide

#### Update Personal Information
Edit these files to add your information:
- `src/components/Hero.tsx` - Headline and social links
- `src/components/Timeline.tsx` - Experience details
- `src/components/Projects.tsx` - Project descriptions
- `src/components/Contact.tsx` - Contact information

#### Customize Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      accent: {
        cyan: '#00d9ff',    // Primary accent
        emerald: '#10b981',  // Secondary accent
        violet: '#a78bfa',   // Tertiary accent
      },
    },
  },
}
```

#### Add More Projects
Add objects to the `projectsData` array in `src/components/Projects.tsx`:
```typescript
{
  id: '5',
  title: 'Your Project',
  description: 'Short description',
  longDescription: 'Detailed description',
  category: 'Category',
  tags: ['Tech1', 'Tech2'],
  link: 'https://demo.com',
  github: 'https://github.com/...',
}
```

## ⚡ Performance Optimizations

- **Code Splitting** - Components loaded on demand
- **Lazy Loading** - Images load when visible
- **Image Optimization** - Compressed and responsive images
- **Caching** - Optimized browser caching strategy
- **Minification** - Production builds are optimized
- **Fast Refresh** - Instant HMR during development

## ♿ Accessibility Features

- **WCAG AA Compliant** - Meets web accessibility standards
- **Semantic HTML** - Proper heading hierarchy and landmarks
- **Color Contrast** - 4.5:1 ratio for text readability
- **Keyboard Navigation** - Full keyboard support
- **Focus Management** - Visible focus indicators
- **ARIA Labels** - Proper labels for screen readers
- **Alt Text** - Descriptive alternative text for images

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Best Practices

- XSS Protection through React's built-in sanitization
- Secure form handling with client-side validation
- No sensitive data stored in local storage
- Content Security Policy ready
- Dependency vulnerability scanning with npm audit

## 📈 SEO Optimization

- Semantic HTML structure
- Meta tags in index.html
- Structured data ready
- Mobile-friendly responsive design
- Fast page load times
- Clean URL structure with smooth scrolling

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Check the Vite documentation: https://vite.dev
- React docs: https://react.dev
- Tailwind CSS docs: https://tailwindcss.com
- Framer Motion docs: https://www.framer.com/motion

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and Framer Motion**
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
