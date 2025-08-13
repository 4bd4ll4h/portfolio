# Abdallah Abdelmahmoud - Portfolio Website

A modern, minimalist portfolio website built with **Astro** showcasing my work as a Software Engineer  specializing in AI-powered applications and mobile development.

## 🚀 Features

- **Modern Design**: Clean, minimalist aesthetic with artistic touches
- **Dark/Light Mode**: Smooth theme switching with persistent preferences
- **Responsive**: Mobile-first approach with perfect responsiveness
- **Performance**: Optimized for speed with static generation
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Smooth Animations**: Subtle micro-interactions and hover effects
- **Accessibility**: High contrast ratios and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: Custom SVG icons and Lucide React
- **Fonts**: Inter & Poppins from Google Fonts
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.astro
│   └── Footer.astro
├── layouts/            # Page layouts
│   └── Layout.astro
├── pages/              # Route pages
│   ├── index.astro     # Home page
│   ├── about.astro     # About page
│   ├── projects.astro  # Projects page
│   └── blog.astro      # Blog page
├── styles/             # Global styles
└── data/               # Static data
public/                 # Static assets
└── favicon.svg
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Gray scale (#f8fafc to #0f172a)
- **Accent**: Purple gradient (#d946ef to #a21caf)

### Typography
- **Display**: Poppins (headings)
- **Body**: Inter (body text)

### Animations
- Fade in, slide up/down, scale in effects
- Smooth hover transitions
- Floating animations for visual elements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📄 Pages

### Home (`/`)
- Hero section with personal introduction
- Quick stats and achievements
- Call-to-action sections

### About (`/about`)
- Professional summary
- Background highlights
- Education and languages
- Contact information
- Skills overview

### Projects (`/projects`)
- Featured projects showcase
- Complete project portfolio
- Technology tags and links

### Blog (`/blog`)
- Article categories
- Featured and all posts
- Newsletter signup

## 🎯 Key Features

### Theme Toggle
- Persistent dark/light mode preference
- Smooth transitions between themes
- System preference detection

### Responsive Navigation
- Mobile-friendly hamburger menu
- Smooth scrolling navigation
- Active page highlighting

### Project Showcase
- Interactive project cards
- Technology stack display
- GitHub and live links
- Hover effects and animations

### Contact Form
- Professional contact form
- Form validation
- Quick response guarantee

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.mjs` with:
- Custom color palette
- Custom animations
- Font family definitions
- Responsive breakpoints

### Astro Config
Configuration in `astro.config.mjs` with:
- React integration
- Tailwind CSS integration
- Site metadata
- Build optimization

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color ratios
- Screen reader friendly

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-detect Astro
3. Deploy with zero configuration

### Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Other Platforms
The site generates static files in the `dist/` directory that can be deployed to any static hosting service.

## 📝 Content Management

### Adding Projects
Edit the `projects` array in `src/pages/projects.astro`:
```javascript
const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/...",
    live: "https://...",
    featured: true,
    icon: "🚀"
  }
];
```

### Adding Blog Posts
Edit the `blogPosts` array in `src/pages/blog.astro`:
```javascript
const blogPosts = [
  {
    title: "Post Title",
    excerpt: "Post excerpt...",
    category: "Category",
    date: "2024-01-15",
    readTime: "5 min read",
    featured: false,
    slug: "post-slug"
  }
];
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: 4bd4ll4h.m@gmail.com
- **Phone**: +201556315866
- **GitHub**: [github.com/4bd4ll4h](https://github.com/4bd4ll4h)
- **LinkedIn**: [linkedin.com/in/4bd4ll4h](https://www.linkedin.com/posts/4bd4ll4h_linkedinskillassessment-activity-6901870297373401089-fnUt)

---

Built with ❤️ by Abdallah Abdelmahmoud
