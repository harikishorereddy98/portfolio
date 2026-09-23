# Deployment Guide

This guide covers deploying your portfolio to various platforms.

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Contact form email delivery

Set `VITE_CONTACT_FORM_ENDPOINT` in the hosting provider's environment variables before building. The endpoint must accept a JSON `POST` with `name`, `email`, `subject`, and `message` fields and forward submissions to your inbox. For example, FormSubmit provides an endpoint in this format:

```text
https://formsubmit.co/ajax/your-email@example.com
```

See `.env.example` for the local configuration key.

## 🚀 Popular Hosting Platforms

### 1. Vercel (Recommended for Vite)

**Easiest option with automatic deployments**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repository:
1. Go to [vercel.com](https://vercel.com)
2. Import your repository
3. Framework: Select "Vite"
4. Deploy!

**vercel.json** (optional):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {}
}
```

### 2. Netlify

**Great for static sites with easy rollback**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

Or via web UI:
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repo
3. Set build command: `npm run build`
4. Set publish directory: `dist`

**netlify.toml** (optional):
```toml
[build]
command = "npm run build"
publish = "dist"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

### 3. GitHub Pages

**Free hosting with automatic deployment from GitHub**

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. Create a public GitHub repository, push the `main` branch, then enable **Settings → Pages → Source: GitHub Actions**. The workflow builds and publishes the site automatically.

The public URL will be:

```text
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

### 4. Cloudflare Pages

**Fast global CDN with great performance**

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Select "Pages" → "Create a project"
3. Connect your GitHub repository
4. Build settings:
   - Framework: "Vite"
   - Build command: `npm run build`
   - Build output directory: `dist`

### 5. AWS Amplify

**Scalable hosting with AWS ecosystem**

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Deploy
amplify publish
```

### 6. Railway

**Modern deployment with easy setup**

1. Go to [railway.app](https://railway.app)
2. Connect GitHub repository
3. Set environment variables if needed
4. Deploy automatically on push

### 7. Render

**Simple static site hosting**

1. Go to [render.com](https://render.com)
2. Create new "Static Site"
3. Connect GitHub repository
4. Build command: `npm run build`
5. Publish directory: `dist`

## 🌐 Custom Domain Setup

### For Vercel/Netlify/Cloudflare:

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS settings
3. Add CNAME record pointing to your hosting provider
4. Hosting platform will provide specific instructions
5. Wait 24-48 hours for DNS propagation

### Example DNS Records:

```
Type: CNAME
Name: www
Value: your-site.vercel.app

Type: A
Name: @
Value: <IP provided by host>
```

## 🔒 SSL/HTTPS

All major platforms provide free SSL certificates:
- ✅ Vercel - Automatic
- ✅ Netlify - Automatic
- ✅ GitHub Pages - Automatic
- ✅ Cloudflare - Free tier includes SSL
- ✅ AWS Amplify - Automatic

## 📊 Performance Optimization for Deployment

### Build Analysis

```bash
npm install -g vite-plugin-visualizer

# Add to vite.config.ts:
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ]
})
```

### Recommended Bundle Size:
- Total JS: < 200KB
- CSS: < 50KB
- Images: Optimized and compressed

### Enable Compression:

Most platforms auto-enable gzip. If not:

**Vercel/Netlify**: Automatic
**Cloudflare**: Automatic with Workers
**Custom Server**: Configure in nginx/Apache

```nginx
# nginx example
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;
```

## 🚨 Pre-deployment Checklist

- [ ] Update personal info in components
- [ ] Test on mobile devices
- [ ] Run `npm run build` successfully
- [ ] Check Lighthouse score (target: >90)
- [ ] Test form validation
- [ ] Verify all links work
- [ ] Check meta tags in index.html
- [ ] Optimize images
- [ ] Remove console.logs
- [ ] Test on different browsers

## 🔍 Post-deployment Verification

### Check Performance:
```bash
# Lighthouse
npm install -g lighthouse
lighthouse https://your-portfolio.com
```

### Monitor Uptime:
- Use services like Uptime Robot
- Get alerts if site goes down

### Analytics Setup:

**Google Analytics:**
```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

**Vercel Analytics (automatic with Vercel hosting)**

## 🔄 Continuous Deployment

### Auto-deploy on Git Push:

1. **Vercel/Netlify**: Automatic with GitHub/GitLab connection
2. **GitHub Actions**: Manual workflow (see below)
3. **GitLab CI**: Manual setup with .gitlab-ci.yml

### GitHub Actions Example:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/
```

## 🐛 Troubleshooting Deployment

### Issue: 404 errors after deployment
**Solution**: Add redirect rules or use hash-based routing

For SPA redirects in different platforms:

**Netlify (netlify.toml):**
```toml
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

**Vercel (vercel.json):**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**GitHub Pages**: Use `hash` routing:
```typescript
// In Router setup if using react-router
import { HashRouter } from 'react-router-dom';
```

### Issue: Slow page loads
- [ ] Compress images
- [ ] Enable caching headers
- [ ] Check bundle size
- [ ] Use CDN
- [ ] Enable gzip compression

### Issue: Form not working
- [ ] Check environment variables
- [ ] Verify CORS settings
- [ ] Check API endpoints
- [ ] Review browser console for errors

### Issue: Styles not loading
- [ ] Verify base path in vite.config.ts
- [ ] Check CSS import statements
- [ ] Clear browser cache
- [ ] Verify Tailwind build output

## 📈 Monitoring & Maintenance

### Regular Tasks:
- Update dependencies: `npm update`
- Check security vulnerabilities: `npm audit`
- Monitor performance with Lighthouse monthly
- Update portfolio projects regularly
- Fix broken links periodically

### Useful Monitoring Tools:
- [Uptime Robot](https://uptimerobot.com) - Monitor uptime
- [Sentry](https://sentry.io) - Error tracking
- [LogRocket](https://logrocket.com) - Session replay
- [GTmetrix](https://gtmetrix.com) - Performance monitoring

## 💡 Cost Comparison

| Platform | Cost | Best For |
|----------|------|----------|
| Vercel | Free tier, $20+/mo | Fast, reliable |
| Netlify | Free tier, $19+/mo | Great DX |
| GitHub Pages | Free | Budget-conscious |
| Cloudflare Pages | Free | Speed |
| Railway | $5/mo+ | Full-stack |
| Custom Server | $5+/mo | Full control |

---

Choose the platform that best fits your needs. For most portfolios, **Vercel** or **Netlify** free tiers are perfect!
