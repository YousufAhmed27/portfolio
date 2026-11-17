# Yousuf Gamal Eldeen - Portfolio Website

A modern, responsive, and interactive portfolio website built with HTML, CSS, JavaScript, and JSON. Designed to showcase projects, skills, and professional information with a catchy, animated design.

## Features

- 🎨 Modern, eye-catching design with gradient backgrounds
- ✨ Smooth animations and transitions
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Fast loading with vanilla JavaScript
- 📝 Easy customization via JSON data file
- 🔗 Direct links to projects and social media
- 💬 Contact form for inquiries
- ⌨️ Typing animation for dynamic titles
- 📊 Animated statistics counter
- 🎯 Smooth scroll navigation
- 🌙 Multiple theme support (Dark, Light, Blue, Green)
- 📥 Downloadable CV button
- ⬆️ Back to top button
- 🔍 SEO optimized with meta tags and structured data
- 📱 Social media sharing support (Open Graph, Twitter Cards)
- ♿ Accessible with ARIA labels and semantic HTML

## Project Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── data.json           # Portfolio data (easy to customize)
└── README.md           # This file
```

## Customization

### Editing Your Information

All your personal information, projects, skills, and contact details are stored in `data.json`. Simply edit this file to customize your portfolio:

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "description": "Short description about yourself",
  "roles": ["Role 1", "Role 2", "Role 3"],
  "about": "Your full about me text...",
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername",
    "email": "your.email@example.com"
  },
  "cvFile": "",
  "stats": {
    "Technologies": 20,
    "Years Coding": 3
  },
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description...",
      "technologies": ["Tech1", "Tech2", "Tech3"],
      "image": "fa-icon-name",
      "liveUrl": "https://your-project.com",
      "githubUrl": "https://github.com/yourusername/project"
    }
  ],
  "skills": {
    "Category Name": ["Skill1", "Skill2", "Skill3"]
  },
  "certificates": {
    "Work & Volunteer": [
      {
        "title": "Certificate Name",
        "issuer": "Organization Name",
        "date": "2023",
        "credentialId": "Optional ID",
        "url": "https://certificate-url.com"
      }
    ],
    "Education": [
      {
        "title": "Degree Name",
        "issuer": "University Name",
        "date": "2020 - Present",
        "credentialId": "",
        "url": ""
      }
    ],
    "Technical": [
      {
        "title": "Course Name",
        "issuer": "Platform Name",
        "date": "2023",
        "credentialId": "ABC123",
        "url": "https://coursera.org/verify/ABC123"
      }
    ]
  },
  "contact": {
    "email": "your.email@example.com",
    "phone": "+20 123 456 7890",
    "location": "Your City, Country"
  }
}
```

**Note:** The "Projects" stat is automatically calculated based on the number of projects in your `projects` array. You only need to add custom stats in the `stats` object (like "Technologies" and "Years Coding").

The `cvFile` field should contain the exact filename of your CV PDF in the portfolio folder. If you don't have a CV file or want to hide the download button, you can set it to an empty string: `"cvFile": ""`

### Adding Projects

To add a new project, add a new object to the `projects` array in `data.json`:

```json
{
  "title": "Your New Project",
  "description": "Description of your project",
  "technologies": ["React", "Node.js", "MongoDB"],
  "image": "fa-rocket",
  "liveUrl": "https://your-project-url.com",
  "githubUrl": "https://github.com/yourusername/project"
}
```

**Available FontAwesome icons** (for the `image` field):
- `fa-hospital`, `fa-heartbeat`, `fa-book-medical`, `fa-video`, `fa-pills`, `fa-user-md`
- `fa-rocket`, `fa-code`, `fa-mobile-alt`, `fa-database`, `fa-cloud`, `fa-gamepad`
- And many more from [FontAwesome](https://fontawesome.com/icons)

### Adding Certificates

The certificates section allows you to showcase your actual certificate images organized by category.

**Format in data.json:**

```json
"certificates": {
  "Technical": [
    {
      "title": "Full Stack Web Development",
      "issuer": "Coursera",
      "date": "2023",
      "credentialId": "ABC123",
      "url": "https://coursera.org/verify/ABC123",
      "image": "certificates/fullstack-webdev.jpg"
    }
  ],
  "Education": []
}
```

**Fields:**
- `title`: Name of the certificate/degree
- `issuer`: Organization or institution that issued it
- `date`: Date or date range
- `credentialId`: Optional credential ID for verification
- `url`: Optional link to verify certificate online
- `image`: Path to certificate image (required for display)

**Best Practices:**
- Use JPG or PNG format for certificate images
- Keep images under 500KB for faster loading
- Recommended size: 800x600px or similar aspect ratio
- If no image is available, the card will show text-only

**Interaction:**
- Click anywhere on the certificate card to open the verification URL
- Hover to see details and zoom effect
- "Verify" button opens the verification link in a new tab

**Available category icons** (auto-assigned):
- `fa-briefcase` - Work & Volunteer
- `fa-graduation-cap` - Education
- `fa-code` - Technical
- `fa-heartbeat` - Medical
- `fa-trophy` - Achievements

### Customizing Stats

The stats section in the About section is now fully customizable via the `stats` object in `data.json`. The "Projects" stat is automatically calculated from your projects array, but you can add or modify other stats:

```json
"stats": {
  "Technologies": 20,
  "Years Coding": 3,
  "Happy Clients": 15,
  "Coffee Cups": 999
}
```

Add as many stats as you want - they will all be displayed automatically!

### Theme System

The portfolio comes with multiple built-in themes that users can cycle through by clicking the theme toggle button in the navigation bar:

- **Dark** (default) - Purple/indigo dark theme
- **Light** - Clean white/light gray theme
- **Blue** - Deep blue ocean theme
- **Green** - Nature-inspired green theme

To add a new theme, simply add a new CSS rule in `styles.css`:

```css
[data-theme="your-theme-name"] {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
    --bg-dark: #your-color;
    --bg-light: #your-color;
    --text-primary: #your-color;
    --text-secondary: #your-color;
    --gradient-1: linear-gradient(135deg, #color1 0%, #color2 100%);
    --gradient-2: linear-gradient(135deg, #color1 0%, #color2 100%);
    --shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    --nav-bg: rgba(your-color, 0.95);
    --nav-scrolled-bg: rgba(your-color, 0.98);
    --border-color: rgba(your-color, 0.1);
}
```

Then add the theme name to the `themes` array in `script.js` and update the `icons` object:

```javascript
const themes = ['dark', 'light', 'blue', 'green', 'your-theme-name'];

const icons = {
    'dark': 'fa-moon',
    'light': 'fa-sun',
    'blue': 'fa-palette',
    'green': 'fa-leaf',
    'your-theme-name': 'fa-your-icon'
};
```

### CV Download

The "Download CV" button in the hero section allows visitors to download your CV. To set this up:

1. Place your CV file (PDF) in the portfolio folder
2. Update the `cvFile` field in `data.json`:

```json
"cvFile": "Your CV Filename.pdf"
```

The CV button will automatically use this filename. If you don't have a CV file or want to hide the button, you can set it to an empty string or remove the field from `data.json`.

**Troubleshooting CV Download:**
- Make sure the CV file is in the same folder as index.html
- The filename in `data.json` must match exactly (including extension)
- If using GitHub Pages, make sure the PDF file is committed to the repository
- Check browser console for any errors (press F12 → Console)
- Try opening the CV file directly in the browser to verify it's accessible

## SEO Optimization

The portfolio comes with built-in SEO optimization to help you rank better on search engines and look professional when shared on social media.

### Automatic SEO Updates

Most SEO elements are automatically updated from your `data.json` file:
- Page title uses your name and title
- Meta description uses your about text
- Keywords are generated from your skills
- Structured data (JSON-LD) is dynamically generated
- Open Graph and Twitter cards use your profile info

### Manual SEO Updates

After deploying, update these placeholders in `index.html`:

1. **Update URLs** (replace with your actual URLs):
   ```html
   <meta property="og:url" content="https://yourusername.github.io/portfolio">
   <meta property="og:image" content="https://yourusername.github.io/portfolio/og-image.jpg">
   <meta name="twitter:image" content="https://yourusername.github.io/portfolio/og-image.jpg">
   ```

2. **Update sitemap.xml**:
   ```xml
   <loc>https://yourusername.github.io/portfolio/</loc>
   <lastmod>2026-11-04</lastmod>
   ```

3. **Update robots.txt**:
   ```txt
   Sitemap: https://yourusername.github.io/portfolio/sitemap.xml
   ```

4. **Add a social image** (optional):
   - Create an image (1200x630px recommended)
   - Name it `og-image.jpg`
   - Place it in the portfolio folder
   - Update the meta tags to reference it

### Adding a Favicon

1. Create a favicon image (32x32 or 16x16 PNG)
2. Save it as `favicon.png` in the portfolio folder
3. The HTML already links to `favicon.png`

### Testing SEO

To test your SEO:
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **PageSpeed Insights**: https://pagespeed.web.dev/

### Structured Data

The portfolio includes Schema.org structured data for the "Person" type, which helps Google understand:
- Who you are
- Your job title
- Your skills
- Your social media profiles
- Your location

This can lead to rich search results with your profile information.

### Back to Top Button

A back-to-top button automatically appears when you scroll down the page. Clicking it smoothly scrolls back to the top. This feature is built-in and requires no configuration.

### Changing Colors

Edit the CSS variables in `styles.css` (lines 1-12):

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #06b6d4;
    --bg-dark: #0f172a;
    --bg-light: #1e293b;
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
}
```

## Deployment

### Option 1: GitHub Pages (Free & Recommended)

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings → Pages
4. Under "Source", select "main branch" and save
5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Go to [Netlify](https://netlify.com)
2. Drag and drop the `portfolio` folder
3. Your site will be live instantly with a random URL
4. You can customize the domain in site settings

### Option 3: Vercel (Free)

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically deploy your site
4. Your site will be live at: `https://your-project.vercel.app`

### Option 4: Traditional Web Hosting

1. Purchase web hosting (e.g., Namecheap, GoDaddy, Bluehost)
2. Upload all files via FTP or file manager
3. Point your domain to the hosting

## Local Development

To view your portfolio locally:

1. Open the folder in your code editor
2. Simply open `index.html` in your browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with http-server installed)
   npx http-server
   
   # Using VS Code Live Server extension
   Right-click on index.html → Open with Live Server
   ```

## Adding Your Profile Image

To add your own profile picture:

1. Place your image in the `portfolio` folder (name it `profile.jpg` or `profile.png`)
2. Edit `index.html` and replace the profile placeholder:
   ```html
   <!-- Find this line around line 85 -->
   <div class="profile-placeholder">
       <i class="fas fa-user-astronaut"></i>
   </div>
   
   <!-- Replace with -->
   <div class="profile-placeholder">
       <img src="profile.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
   </div>
   ```

## Adding Project Screenshots

To add real screenshots to your projects:

1. Create an `images` folder in the portfolio directory
2. Add your project screenshots (e.g., `project1.jpg`, `project2.jpg`)
3. Update `data.json` to use your images:
   ```json
   {
     "image": "images/project1.jpg",
     // or keep using icons
     "image": "fa-rocket"
   }
   ```
4. Update `script.js` to handle image files in the `updateProjects()` function

## Performance Optimization

The portfolio is already optimized for performance:
- Uses vanilla JavaScript (no heavy frameworks)
- CSS animations instead of JavaScript animations
- Minimal external dependencies (only FontAwesome and Google Fonts)
- Lazy loading for animations (Intersection Observer)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Form

The contact form currently shows an alert when submitted. To make it functional:

1. **Option A: Email Service**
   - Use services like Formspree, EmailJS, or Netlify Forms
   - Update the form action in `index.html`

2. **Option B: Backend Integration**
   - Create a backend server (Node.js, Python, etc.)
   - Connect the form to your backend API

3. **Option C: Mailto Link**
   - Replace the form with a simple mailto link:
   ```html
   <a href="mailto:your.email@example.com" class="btn btn-primary">
       <i class="fas fa-envelope"></i> Send Me an Email
   </a>
   ```

## Updates & Maintenance

To update your portfolio:
1. Edit `data.json` with new projects, skills, or information
2. Commit and push to GitHub (if using GitHub Pages)
3. Changes will be live automatically

## Support

If you encounter any issues:
- Check browser console for errors
- Ensure all files are in the same directory
- Verify JSON syntax is valid (use [JSONLint](https://jsonlint.com))
- Make sure you're using a modern browser

## License

This portfolio is free to use and modify for personal or commercial purposes.

---

**Built with ❤️ using HTML, CSS, JavaScript, and JSON**
