# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## Prerequisites

1. Make sure all changes are committed to your Git repository
2. Ensure EmailJS is properly configured (see EMAILJS_SETUP.md)
3. Test the website locally: `npm start`

## Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "gh-pages" branch as source
   - Set custom domain to `varunportfolio.com` if needed

### Option 2: Netlify

1. **Connect your GitHub repository to Netlify**
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: 18 (or latest LTS)

3. **Environment variables (if needed):**
   - Add any required environment variables in Netlify dashboard

4. **Custom domain:**
   - Add `varunportfolio.com` in domain settings
   - Configure DNS records as instructed

### Option 3: Vercel

1. **Connect your GitHub repository to Vercel**
2. **Build settings:**
   - Framework preset: Create React App
   - Build command: `npm run build`
   - Output directory: `build`

3. **Custom domain:**
   - Add `varunportfolio.com` in domain settings
   - Configure DNS records as instructed

## Post-Deployment Checklist

- [ ] Test all sections of the website
- [ ] Verify contact form functionality
- [ ] Check mobile responsiveness
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all links work correctly
- [ ] Check loading performance
- [ ] Test download functionality for resume

## Troubleshooting

### Common Issues

1. **Build fails:**
   - Check for TypeScript errors: `npm run build`
   - Ensure all dependencies are installed: `npm install`

2. **Contact form not working:**
   - Verify EmailJS configuration
   - Check browser console for errors
   - Ensure EmailJS credentials are correct

3. **Mobile issues:**
   - Test on actual mobile devices
   - Check viewport meta tag
   - Verify responsive CSS is working

4. **Performance issues:**
   - Optimize images
   - Enable compression on hosting platform
   - Consider using CDN for static assets

### Performance Optimization

1. **Image optimization:**
   - Compress images using tools like TinyPNG
   - Use WebP format where possible
   - Implement lazy loading for images

2. **Code splitting:**
   - Consider implementing React.lazy() for components
   - Split large bundles if needed

3. **Caching:**
   - Configure proper cache headers
   - Use service workers if needed

## Monitoring

- Set up Google Analytics for traffic monitoring
- Configure error tracking (e.g., Sentry)
- Monitor website performance with tools like Lighthouse
- Set up uptime monitoring

## Security

- Enable HTTPS (automatic with most hosting platforms)
- Keep dependencies updated
- Use environment variables for sensitive data
- Implement Content Security Policy if needed 