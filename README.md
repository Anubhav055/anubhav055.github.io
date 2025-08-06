# Anubhav Chauhan - Portfolio Website 

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring dynamic content management through CSV files. Based on a clean dark theme design with smooth animations and mobile-first approach.

## 🌟 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark Theme**: Modern dark color scheme with blue accents
- **Dynamic Content**: All content loaded from CSV files for easy management
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Interactive Elements**: Working contact form, navigation highlighting
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized CSS and minimal JavaScript

## 📁 Project Structure

```
PortFolio/
├── index.html              # Main HTML file
├── styles.css              # CSS styles and animations
├── script.js               # JavaScript functionality
├── README.md               # This file
└── data/                   # CSV data files
    ├── skills.csv          # Technical skills and proficiency
    ├── experience.csv      # Professional experience
    ├── projects.csv        # Project portfolio
    ├── education.csv       # Educational background
    └── contact.csv         # Contact information
```

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in a web browser
3. **Customize** the CSV files in the `data/` folder with your information
4. **Replace** the placeholder profile image URL in `index.html`
5. **Update** social media links and contact information

## 📊 CSV File Formats

### skills.csv
```csv
name,icon,level
Java,☕,Advanced
Spring Boot,🍃,Advanced
```

### experience.csv
```csv
position,company,location,startDate,endDate,description
Programmer Analyst,Cognizant,Kolkata,December 2023,Present,Job description here
```

### projects.csv
```csv
title,description,technologies,icon,github,demo
Project Name,Project description,Tech1 Tech2,fas fa-icon,github-url,demo-url
```

### education.csv
```csv
degree,institution,location,year,gpa,relevant_coursework
Bachelor of Technology,University Name,City,2023,8.96,Course1 Course2
```

### contact.csv
```csv
type,value,icon
Phone,123-456-7890,fas fa-phone
Email,email@example.com,fas fa-envelope
```

## 🎨 Customization

### Colors
Update the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #3b82f6;    /* Blue accent */
    --background-dark: #0a0a0a;  /* Main background */
    --background-light: #18181b; /* Card backgrounds */
    --text-primary: #e4e4e7;     /* Main text */
    --text-secondary: #a1a1aa;   /* Secondary text */
}
```

### Profile Image
Replace the placeholder image URL in `index.html`:
```html
<img src="your-image-url.jpg" alt="Anubhav Chauhan" id="profile-img">
```

### Content
Edit the CSV files in the `data/` folder to update:
- Skills and technologies
- Work experience
- Projects
- Education
- Contact information

## 🔧 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Grid, Flexbox, animations, responsive design
- **JavaScript**: Dynamic content loading, interactions
- **Font Awesome**: Icons and symbols
- **Google Fonts**: Inter font family

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🚀 Deployment

### GitHub Pages
1. Upload files to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (main/master)
4. Your site will be available at `username.github.io/repository-name`

### Netlify
1. Drag and drop the folder to netlify.com
2. Your site will be deployed automatically

### Local Server
For local development with CSV loading:
```bash
python -m http.server 8000
# or
npx serve .
```

## 📋 To-Do List

- [ ] Add your actual profile photo
- [ ] Update CSV files with your real information
- [ ] Add actual project GitHub links
- [ ] Create and link a PDF resume
- [ ] Add Google Analytics (optional)
- [ ] Set up contact form backend (optional)

## 🎯 Key Sections

1. **Hero Section**: Introduction and call-to-action
2. **About**: Personal description and education
3. **Skills**: Technical proficiencies with icons
4. **Experience**: Professional timeline
5. **Projects**: Portfolio showcase
6. **Contact**: Contact form and information

## 🔄 Data Management

The portfolio uses CSV files for easy content management:
- **No coding required** to update content
- **Version control friendly** - track changes easily
- **Bulk editing** possible with spreadsheet software
- **Lightweight** and fast loading

## 📞 Support

For questions or customization help:
- Email: anubhav.rajput055@gmail.com
- Review the code comments for guidance
- Check browser console for any errors

## 📄 License

This portfolio template is free to use and modify for personal and commercial projects.

---


**Built with ❤️ by Anubhav Chauhan** 
