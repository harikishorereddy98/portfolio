# Development Guide

This guide covers the development setup, architecture, and best practices for this portfolio project.

## 🏗 Project Architecture

### Component Structure

```
src/
├── components/              # Reusable React components
│   ├── Hero.tsx            # Landing section with CTA
│   ├── Navigation.tsx      # Fixed header with nav menu
│   ├── Timeline.tsx        # Experience timeline
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills and expertise
│   ├── Contact.tsx         # Contact form and info
│   ├── Footer.tsx          # Footer section
│   └── index.ts            # Export all components
├── App.tsx                 # Main app component
├── App.css                 # Global styles
├── index.css              # Tailwind and global CSS
└── main.tsx               # React entry point
```

### Design System

**Color Palette:**
- Primary: Deep slate (#0f172a, #1e293b)
- Accents: Cyan (#00d9ff), Emerald (#10b981), Violet (#a78bfa)
- Text: Gray (#e5e7eb, #9ca3af)

**Typography:**
- Font: System UI stack (Inter if available)
- Heading: Bold (font-weight: 700)
- Body: Regular (font-weight: 400)

**Spacing:**
- Follows Tailwind scale: 4px, 8px, 12px, 16px, etc.
- Sections: 80px - 128px padding

**Animations:**
- Duration: 0.4s - 0.8s
- Easing: `easeOut`, `easeInOut`
- Library: Framer Motion

## 🛠 Development Workflow

### Setup

```bash
# Install dependencies
npm install

# Start dev server with HMR
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Environment

- **Editor**: VS Code (recommended)
- **Node Version**: 16+
- **Package Manager**: npm (or yarn/pnpm)
- **TypeScript**: 5.3+
- **React**: 18.2+

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dsznajder.es7-react-js-snippets",
    "ms-typescript.vscode-type-definitions"
  ]
}
```

## 📝 Code Standards

### TypeScript Best Practices

```typescript
// Always use TypeScript interfaces for props
interface ComponentProps {
  title: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

// Use strict mode
"strict": true

// Always define return types
const getTitle = (): string => {
  return 'Title';
}
```

### Component Structure

```typescript
import { motion } from 'framer-motion';
import { SomeIcon } from 'lucide-react';

interface MyComponentProps {
  title: string;
}

export function MyComponent({ title }: MyComponentProps) {
  // State first
  const [count, setCount] = useState(0);
  
  // Functions second
  const handleClick = () => {
    setCount(count + 1);
  };
  
  // Animations third
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  
  // JSX last
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {title}
    </motion.div>
  );
}
```

### Naming Conventions

```typescript
// Components: PascalCase
export function MyComponent() {}

// Functions: camelCase
const handleClick = () => {}
const getFormattedDate = () => {}

// Constants: UPPER_SNAKE_CASE
const MAX_WIDTH = 1200;

// Variables: camelCase
const isLoading = true;
const userData = {};

// Interfaces/Types: PascalCase
interface UserData {}
type Direction = 'left' | 'right';
```

### CSS/Tailwind Guidelines

```typescript
// Use Tailwind utility classes
<div className="flex items-center justify-between px-4 py-6 md:px-8 md:py-12">
  {/* content */}
</div>

// Avoid inline styles
<div style={{ color: 'red' }}> ❌

// Use CSS modules for complex styles
import styles from './Component.module.css';
```

## 🎨 Framer Motion Patterns

### Staggered List Animation

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

return (
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={containerVariants}
  >
    {items.map((item) => (
      <motion.div key={item.id} variants={itemVariants}>
        {item.content}
      </motion.div>
    ))}
  </motion.div>
);
```

### Hover & Tap Effects

```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={handleClick}
>
  Click me
</motion.button>
```

### Scroll Animations

```typescript
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={containerVariants}
>
  Content
</motion.section>
```

## 🧪 Testing

### Manual Testing Checklist

```
[ ] Navigation links scroll correctly
[ ] Mobile menu opens/closes
[ ] Forms validate input
[ ] Animations play smoothly
[ ] Hover effects work
[ ] Links are clickable
[ ] Images load correctly
[ ] No console errors
[ ] Accessible with keyboard
[ ] Works on mobile (375px, 768px, 1024px)
```

### Accessibility Testing

```bash
# Check with Lighthouse
npm install -g lighthouse
lighthouse https://localhost:5173

# Test with keyboard only (Tab navigation)
# Test with screen reader (VoiceOver, NVDA)
```

## 🔍 Code Review Guidelines

### Before Committing

1. **Formatting**
   ```bash
   npm run lint
   ```

2. **Type Checking**
   - No `any` types unless absolutely necessary
   - Proper TypeScript inference

3. **Performance**
   - No unnecessary re-renders
   - Memoize expensive calculations
   - Lazy load components when possible

4. **Accessibility**
   - Proper ARIA labels
   - Semantic HTML
   - Keyboard navigation

5. **Code Quality**
   - Clear variable names
   - Comments for complex logic
   - DRY principle (Don't Repeat Yourself)

## 📦 Adding Dependencies

### Approved Libraries

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "vite": "^8.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.3.0"
  }
}
```

### Adding New Libraries

```bash
# Production dependency
npm install package-name

# Development dependency
npm install --save-dev package-name

# Always check bundle impact
npm install vite-plugin-visualizer --save-dev
```

## 🐛 Debugging

### Browser DevTools

1. **React DevTools Browser Extension**
   - Inspect component props and state
   - Trace re-renders

2. **Performance Tab**
   - Check animation frame rates
   - Identify performance bottlenecks

3. **Network Tab**
   - Monitor asset loading
   - Check bundle sizes

### VS Code Debugging

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src",
      "sourceMap": true
    }
  ]
}
```

### Console Debugging

```typescript
console.log('Value:', value);           // Variable inspection
console.error('Error:', error);         // Error logging
console.time('label');                  // Performance timing
// ... code to measure
console.timeEnd('label');               // End timing

// Check component renders
console.count('MyComponent');
```

## 🚀 Performance Optimization

### Key Metrics to Monitor

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Bundle Size**: Target < 200KB JS, < 50KB CSS

### Optimization Techniques

```typescript
// 1. Code Splitting
const HeavyComponent = lazy(() => import('./Heavy'));
<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>

// 2. Memoization
const MemoComponent = memo(({ data }) => {
  return <div>{data}</div>;
});

// 3. useCallback for function stability
const handleClick = useCallback(() => {
  console.log('Clicked');
}, []);

// 4. useMemo for expensive calculations
const processedData = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
```

## 🔄 Git Workflow

### Branch Naming

```
feature/add-new-project      # New feature
bugfix/fix-mobile-layout     # Bug fix
docs/update-readme           # Documentation
chore/update-dependencies    # Maintenance
```

### Commit Messages

```
// Format: type(scope): description

feat(projects): add new project card
fix(nav): fix mobile menu toggle
docs(readme): update installation steps
style(components): format code
chore(deps): update React to 18.3
```

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Performance improvement

## Testing
How to test these changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tested on mobile
- [ ] Accessibility verified
```

## 📚 Resources

### Documentation
- [React Documentation](https://react.dev)
- [Framer Motion](https://www.framer.com/motion)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vite.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Tools
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web Vitals](https://web.dev/vitals)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/my-feature`
3. Make changes and test
4. Commit with meaningful messages
5. Push to branch: `git push origin feature/my-feature`
6. Open Pull Request

---

Happy coding! 🚀
