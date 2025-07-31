# Deployment Guide for varunportfolio.com

## Overview
This guide will help you deploy your portfolio website to `http://varunportfolio.com`.

## Prerequisites
- Domain name: `varunportfolio.com`
- Web hosting service (recommended options below)
- Git repository access

## Deployment Options

### Option 1: Netlify (Recommended)
1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Sign up/Login with your GitHub account
   - Click "New site from Git"
   - Select your repository: `kodanda1/Portfolio`

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Base directory: `personal-website`

3. **Custom Domain Setup**
   - Go to Site settings → Domain management
   - Add custom domain: `varunportfolio.com`
   - Follow DNS configuration instructions

4. **Environment Variables** (Optional - for EmailJS)
   - Go to Site settings → Environment variables
   - Add your EmailJS configuration if needed

### Option 2: Vercel
1. **Connect Repository**
   - Go to [Vercel](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your repository

2. **Configure Project**
   - Framework Preset: Create React App
   - Root Directory: `personal-website`
   - Build Command: `npm run build`
   - Output Directory: `build`

3. **Custom Domain**
   - Go to Project settings → Domains
   - Add domain: `varunportfolio.com`
   - Configure DNS as instructed

### Option 3: GitHub Pages
1. **Update Repository Settings**
   - Go to repository settings
   - Navigate to Pages section
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

2. **Deploy**
   ```bash
   npm run deploy
   ```

3. **Custom Domain**
   - Add `varunportfolio.com` to custom domain field
   - Create CNAME file in public folder with domain name

## DNS Configuration

### For Netlify/Vercel:
```
Type: CNAME
Name: @
Value: your-site.netlify.app (or vercel.app)
```

### For GitHub Pages:
```
Type: CNAME
Name: @
Value: kodanda1.github.io
```

## SSL Certificate
- Netlify and Vercel provide automatic SSL certificates
- GitHub Pages also provides SSL for custom domains
- Ensure HTTPS is enabled for security

## Post-Deployment Checklist

1. **Test Website**
   - Visit `http://varunportfolio.com`
   - Test all sections and functionality
   - Verify mobile responsiveness
   - Test contact form (if EmailJS is configured)

2. **SEO Optimization**
   - Meta tags are already configured
   - Verify Google Analytics (if needed)
   - Submit sitemap to search engines

3. **Performance**
   - Run Lighthouse audit
   - Optimize images if needed
   - Check Core Web Vitals

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`
- Verify package.json configuration

### Domain Issues
- DNS propagation can take up to 48 hours
- Check DNS settings with tools like `nslookup`
- Verify SSL certificate status

### EmailJS Issues
- Follow the setup guide in `EMAILJS_SETUP.md`
- Check browser console for errors
- Verify EmailJS service configuration

## Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Monitor for security vulnerabilities: `npm audit`
- Update content and projects as needed

### Backup
- Repository serves as backup
- Consider regular backups of custom configurations
- Document any custom changes

## Support
For deployment issues:
- Check hosting provider documentation
- Review build logs for errors
- Contact hosting provider support

---

**Note**: The website is now configured for `http://varunportfolio.com` in `package.json`. Make sure your hosting provider supports this domain configuration. 