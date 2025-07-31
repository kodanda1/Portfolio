# VARUNTEJ KODANDAPURAM - Personal Portfolio Website

A modern, innovative, and stylish personal portfolio website built with React, TypeScript, and Framer Motion. Designed specifically for job search purposes with a focus on showcasing technical skills, experience, and projects.

## 🚀 Features

* **Modern Design**: Sleek, professional design with glassmorphism effects and gradient animations
* **Responsive Layout**: Fully responsive design that works on all devices (mobile, tablet, desktop)
* **Cross-Platform Compatibility**: Optimized for Chrome, Firefox, Safari, Edge, and mobile browsers
* **Interactive Animations**: Smooth animations powered by Framer Motion
* **Particle Background**: Dynamic animated background with connecting particles
* **Section Navigation**: Smooth scrolling between sections
* **Contact Form**: Functional contact form with EmailJS integration
* **Project Showcase**: Interactive project cards with detailed information
* **Skills Visualization**: Animated skill bars and categorized skill display
* **Experience Timeline**: Beautiful timeline layout for work experience
* **Loading Screen**: Elegant loading animation

## 🛠️ Technologies Used

* **React 18** - Modern React with hooks
* **TypeScript** - Type-safe development
* **Framer Motion** - Smooth animations and transitions
* **React Icons** - Beautiful icon library
* **CSS3** - Modern styling with gradients and animations
* **Canvas API** - Particle background animation
* **EmailJS** - Contact form email functionality

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx           # Landing section
│   ├── About.tsx          # About and education section
│   ├── Experience.tsx     # Work experience timeline
│   ├── Projects.tsx       # Project showcase
│   ├── Skills.tsx         # Skills and certifications
│   ├── Contact.tsx        # Contact form and info
│   ├── ParticleBackground.tsx # Animated background
│   └── *.css              # Component-specific styles
├── App.tsx                # Main application component
├── App.css               # Global styles
└── index.tsx             # Application entry point
```

## 🎨 Design Features

### Color Scheme

* **Primary**: #64ffda (Cyan)
* **Secondary**: #00d4ff (Blue)
* **Background**: Dark gradient (#0f0f23 to #16213e)
* **Text**: #ffffff (White) and #8892b0 (Muted)

### Typography

* **Font Family**: Inter, system fonts with fallbacks
* **Weights**: 400, 500, 600, 700, 800
* **Responsive**: Scales appropriately on all devices

### Animations

* **Page Transitions**: Smooth section changes
* **Hover Effects**: Interactive elements with scale and color changes
* **Loading Animations**: Elegant loading screen
* **Particle System**: Dynamic background particles with connections

## 🚀 Getting Started

### Prerequisites

* Node.js (v14 or higher)
* npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kodanda1/Portfolio.git
   cd personal-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure EmailJS (Optional - for contact form functionality):
   * Follow the setup guide in `EMAILJS_SETUP.md`
   * Update the EmailJS configuration in `src/components/Contact.tsx`

4. Start the development server:
   ```bash
   npm start
   ```

5. Open http://localhost:3000 to view it in the browser.

### Building for Production

```bash
npm run build
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

* **Desktop**: 1200px+ (Full layout with side-by-side sections)
* **Tablet**: 768px - 1199px (Adjusted layouts)
* **Mobile**: < 768px (Stacked layouts, optimized navigation)
* **Small Mobile**: < 480px (Compact layouts)
* **Extra Small**: < 360px (Minimal layouts)

### Cross-Platform Compatibility

* **Browsers**: Chrome, Firefox, Safari, Edge
* **Operating Systems**: Windows, macOS, Linux, iOS, Android
* **Devices**: Desktop, laptop, tablet, smartphone
* **Touch Support**: Optimized for touch interactions
* **Performance**: Optimized for various network conditions

## 🎯 Sections Overview

### 1. Hero Section

* Animated text with role rotation
* Floating elements
* Call-to-action buttons
* Social media links
* Profile statistics

### 2. About Section

* Personal introduction
* Key highlights
* Education details
* Personal values

### 3. Experience Section

* Timeline layout
* Company information
* Technologies used
* Key achievements
* Career highlights

### 4. Projects Section

* Interactive project cards
* Technology tags
* Live demo links
* GitHub repositories
* Project statistics

### 5. Skills Section

* Categorized skills
* Animated skill bars
* Certification display
* Skill level indicators

### 6. Contact Section

* Functional contact form with email integration
* Contact information
* Social media links
* Resume download
* Email notifications to kodandapuramvaruntej@gmail.com

## 🔧 Customization

### Personal Information

Update the following files with your information:

* `src/components/Hero.tsx` - Name, roles, description
* `src/components/About.tsx` - Personal story, education
* `src/components/Experience.tsx` - Work experience
* `src/components/Projects.tsx` - Projects and links
* `src/components/Skills.tsx` - Skills and certifications
* `src/components/Contact.tsx` - Contact details

### Styling

* Modify `src/App.css` for global styles
* Update component-specific CSS files for section styling
* Adjust color variables in CSS for brand colors

### Content

* Replace placeholder images with actual project screenshots
* Update social media links
* Add your actual resume PDF
* Customize project descriptions and links

## 📧 EmailJS Setup

The contact form is configured to send emails to `kodandapuramvaruntej@gmail.com`. To set up EmailJS:

1. Follow the detailed guide in `EMAILJS_SETUP.md`
2. Replace placeholder values in `src/components/Contact.tsx`:
   - `YOUR_PUBLIC_KEY`
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`

## 🚀 Deployment

### Current Configuration

* **Homepage**: http://varunportfolio.com
* **Repository**: https://github.com/kodanda1/Portfolio

### Deployment Options

1. **GitHub Pages** (Recommended):
   ```bash
   npm run deploy
   ```

2. **Netlify**: Connect repository and configure build settings
3. **Vercel**: Connect repository and configure build settings

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please reach out:

* **Email**: kodandapuramvaruntej@gmail.com
* **LinkedIn**: https://www.linkedin.com/in/varuntejk/
* **GitHub**: https://github.com/kodanda1

---

Built by VARUNTEJ KODANDAPURAM
