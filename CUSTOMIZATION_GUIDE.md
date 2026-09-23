# Portfolio Customization Guide

This guide will help you personalize the portfolio website with your own information, projects, and style preferences.

## 📝 Update Personal Information

### 1. Hero Section (src/components/Hero.tsx)

Update your headline and social links:

```typescript
// Change the main headline
<span className="bg-gradient-to-r from-accent-cyan via-accent-emerald to-accent-violet bg-clip-text text-transparent">
  Frontend & CMS{' '}
  Developer
</span>

// Update the subtitle
<p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
  4+ years crafting responsive, configuration-driven UI applications...
</p>

// Update social media links
<a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
  <Github size={24} />
</a>
```

### 2. Experience Timeline (src/components/Timeline.tsx)

Update your work experience:

```typescript
const timelineData: TimelineItem[] = [
  {
    year: '2023 - Present',
    title: 'Your Job Title',
    company: 'Your Company',
    description: 'Your role description',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
  },
  // Add more entries...
];
```

### 3. Projects Section (src/components/Projects.tsx)

Add your featured projects:

```typescript
const projectsData: Project[] = [
  {
    id: '1',
    title: 'Your Project Name',
    description: 'Short description',
    longDescription: 'Detailed description of what you built and why',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'Web App',  // Use: CMS, Platform, E-commerce, Search, Web App, Mobile
    link: 'https://project-demo.com',
    github: 'https://github.com/your-username/project',
  },
  // Add more projects...
];
```

#### Add New Project Categories

In the `Projects.tsx` component, update the categories array:

```typescript
const categories = ['All', 'Web App', 'Mobile', 'Design System', 'API'];
```

### 4. Skills Section (src/components/Skills.tsx)

Update your technical skills:

```typescript
const skillsData: SkillCategory[] = [
  {
    icon: <Code2 className="text-accent-cyan" size={32} />,
    title: 'Frontend Technologies',
    description: 'Core web development skills',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js'],
  },
  // Add more categories...
];
```

### 5. Contact Section (src/components/Contact.tsx)

Update your contact information:

```typescript
// Update email, phone, and location
const contactData = [
  {
    icon: <Mail className="text-accent-cyan" size={28} />,
    title: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com',
  },
  // Update other contact info...
];
```

### 6. Navigation & Footer

The navigation is auto-generated from the section IDs. Ensure sections have correct IDs:
- `id="hero"`
- `id="experience"`
- `id="projects"`
- `id="skills"`
- `id="contact"`

## 🎨 Customize Colors & Styling

### Primary Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        900: '#0f172a',  // Dark background
        800: '#1e293b',  // Medium background
        700: '#334155',  // Light background
      },
      accent: {
        cyan: '#00d9ff',    // Primary accent (change hex code)
        emerald: '#10b981', // Secondary accent
        violet: '#a78bfa',  // Tertiary accent
      },
    },
  },
}
```

### Common Color Schemes

**Cyberpunk Theme:**
```javascript
cyan: '#00d9ff',
emerald: '#00ff00',
violet: '#ff00ff',
```

**Ocean Theme:**
```javascript
cyan: '#0ea5e9',
emerald: '#06b6d4',
violet: '#6366f1',
```

**Forest Theme:**
```javascript
cyan: '#10b981',
emerald: '#059669',
violet: '#7c3aed',
```

## 🎬 Customize Animations

### Animation Speeds

In individual components, adjust Framer Motion transition durations:

```typescript
transition: { duration: 0.8, ease: 'easeOut' } // Increase/decrease duration
```

### Disable Animations

If you prefer minimal animations, update the variants:

```typescript
// Before
visible: {
  opacity: 1,
  y: 0,
  transition: { duration: 0.8, ease: 'easeOut' },
}

// After (instant)
visible: {
  opacity: 1,
  y: 0,
  transition: { duration: 0 },
}
```

## 📱 Responsive Design

The portfolio is mobile-first. Adjust breakpoints in `tailwind.config.js`:

```javascript
screens: {
  'sm': '640px',   // Small phones
  'md': '768px',   // Tablets
  'lg': '1024px',  // Desktops
  'xl': '1280px',  // Large desktops
}
```

## 🔗 Adding Social Links

Update social links in multiple places:

1. **Hero Section** (src/components/Hero.tsx)
2. **Footer** (src/components/Footer.tsx)
3. **Contact Section** (src/components/Contact.tsx)

```typescript
// Add new social link
<a
  href="https://twitter.com/your-handle"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-primary-800 hover:bg-accent-cyan/20 rounded-lg transition-all duration-300 transform hover:scale-110 text-accent-cyan"
>
  <Twitter size={24} />
</a>
```

Available icons from lucide-react:
- `Github`
- `Linkedin`
- `Mail`
- `Twitter`
- `Youtube`
- `Dribbble`
- `Codepen`
- And 500+ more

## 🏢 Company & Brand Updates

### Update Brand Name

1. **Navigation** (src/components/Navigation.tsx):
```typescript
<motion.div className="text-2xl font-bold ...">
  YourBrandName
</motion.div>
```

2. **Footer** (src/components/Footer.tsx):
```typescript
<h3 className="text-2xl font-bold ...">
  YourBrandName
</h3>
```

## 📊 Project Categories

Suggested project categories:
- `CMS` - Content Management Systems
- `Platform` - Web Applications & Platforms
- `E-commerce` - Shopping & Commerce
- `Search` - Search Engines
- `Web App` - Web Applications
- `Mobile` - Mobile Applications
- `Design System` - Component Libraries
- `API` - Backend Services

## 🔍 SEO Customization

Update in `index.html`:

```html
<title>Your Name - Frontend Developer Portfolio</title>
<meta name="description" content="Your description here" />
<meta property="og:title" content="Your Title" />
<meta property="og:description" content="Your description" />
```

## 📧 Contact Form Setup

The contact form includes basic validation. To handle form submissions:

1. **Client-side only** (current): Data logged to console
2. **Add Email Service**: Integrate with services like:
   - EmailJS
   - Formspree
   - SendGrid
   - AWS SES

Example with EmailJS:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  ).then(() => {
    alert('Message sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  });
};
```

## 🚀 Performance Optimization

### Image Optimization

Add optimized images to `/public`:

```typescript
import myImage from '../public/my-project.jpg';

<img src={myImage} alt="Project description" className="w-full" />
```

### Code Splitting

Components are automatically code-split by Vite. For dynamic imports:

```typescript
import { lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

## 🔐 Environment Variables

Create `.env.local`:

```
VITE_API_URL=https://api.example.com
VITE_GITHUB_TOKEN=your_token_here
```

Access in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 📚 Additional Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev/)
- [Lucide Icons](https://lucide.dev/)
- [Vite Guide](https://vite.dev/)

## 💡 Tips & Best Practices

1. **Keep it simple** - Don't overload with too many projects
2. **Use high-quality content** - Professional descriptions and screenshots
3. **Mobile-first** - Test on mobile devices frequently
4. **Performance** - Monitor Core Web Vitals with Lighthouse
5. **Regular updates** - Keep projects and experience current
6. **Accessibility** - Test with screen readers

## 🐛 Troubleshooting

### Styles not applying?
- Check Tailwind config for proper content paths
- Rebuild with `npm run build`

### Animations laggy?
- Disable some animations or reduce duration
- Check browser performance with DevTools

### Page loads slow?
- Optimize images
- Check bundle size with `npm run build`
- Enable gzip compression on server

---

Happy customizing! 🚀
