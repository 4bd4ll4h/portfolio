# Deployment Guide

This guide will help you deploy Abdallah Abdelmahmoud's portfolio website to various hosting platforms.

## 🚀 Quick Deploy Options

### Vercel (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your portfolio repository

2. **Configure Project**
   - Vercel will auto-detect Astro
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 (or higher)

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live!

### GitHub Pages

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Set folder to `/ (root)`

3. **Deploy Script** (Add to package.json)
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

## 🔧 Environment Variables

No environment variables are required for this static site, but you can add them if needed:

```bash
# .env
PUBLIC_SITE_URL=https://your-domain.com
PUBLIC_GA_ID=your-google-analytics-id
```

## 📝 Custom Domain Setup

### Vercel
1. Go to Project Settings
2. Navigate to Domains
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to Site Settings
2. Navigate to Domain Management
3. Add custom domain
4. Update DNS records

## 🔍 SEO Optimization

The site is already optimized for SEO with:
- Meta tags for all pages
- Open Graph tags
- Twitter Card tags
- Structured data
- Semantic HTML
- Sitemap generation

## 📊 Analytics Setup

### Google Analytics
Add your GA4 tracking ID to the layout:

```html
<!-- In Layout.astro -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics
If using Vercel, enable Vercel Analytics in your project settings.

## 🔒 Security Headers

For additional security, add headers to your hosting platform:

### Vercel (vercel.json)
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Netlify (_headers)
```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
```

## 🚀 Performance Optimization

The site is already optimized with:
- Static generation
- Image optimization
- CSS/JS minification
- Lazy loading
- Efficient bundling

## 📱 PWA Setup (Optional)

To make it a Progressive Web App:

1. **Add manifest.json** to `public/`:
```json
{
  "name": "Abdallah Abdelmahmoud - Portfolio",
  "short_name": "Abdallah Portfolio",
  "description": "Software Engineer  Portfolio",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0ea5e9",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

2. **Add service worker** for offline functionality

## 🔄 Continuous Deployment

### GitHub Actions (Vercel/Netlify)
Both Vercel and Netlify automatically deploy on push to main branch.

### Manual Deployment
```bash
# Build
npm run build

# Upload dist/ folder to your hosting provider
```

## 📞 Support

If you encounter any issues:
1. Check the build logs
2. Verify all dependencies are installed
3. Ensure Node.js version is 18+
4. Check the [Astro documentation](https://docs.astro.build/)

---

Happy deploying! 🎉
