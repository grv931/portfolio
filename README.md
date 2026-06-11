# Kumar Gaurav — Developer Portfolio

A lightweight, premium, responsive dark-mode portfolio website tailored for Software Engineering, AI/ML, and Data Science opportunities. 

This portfolio is built with pure semantic HTML, vanilla CSS, and client-side JavaScript, ensuring fast loading speeds, clean codebase, and maximum accessibility for recruiters.

---

## 🎨 Tech Stack & Features

- **Core Tech**: Pure HTML5, CSS3, and JavaScript (ES6). No complex frameworks or bulky packages.
- **Visual Design**: Sleek dark-mode glassmorphic theme with tailored HSL color tokens, custom scrollbars, and smooth micro-animations.
- **Tab Navigation**: Clean, dynamic client-side tab routing between **About** and **Contact** sections.
- **Projects Showcase**: Showcases key projects (such as **SkillFleet**) with direct "View Code" links to GitHub repositories for recruiter validation.
- **Organization Highlights**: Features interactive tooltips displaying roles and context at IIIT Bhubaneswar, IIT Madras, NCC, E-Cell, and SSNL.
- **Resume Access**: Instant single-click viewing of the local `KumarGauravResume.pdf` in a new browser tab.
- **Interactive Contact Form**: A client-side contact form integrated with EmailJS for automated email delivery, complete with real-time field validation, loading states, success prompts, and error recovery.
- **Accessibility (a11y)**: Focus rings (`:focus-visible`) for keyboard navigation, high contrast text headers, and `aria-label` descriptors for screen-readers.

---

## 📁 Project Structure

```
portfolio/
│
├── index.html              # Main HTML structure, metadata, layout, and tabs
├── index.css               # Vanilla CSS stylesheets, styling tokens, and media queries
├── index.js                # Custom JS logic for tab switching, mobile sidebar, and EmailJS
├── KumarGauravResume.pdf   # Resume PDF file
├── images/                 # Project assets and organization logos
│   ├── dp.jpg              # Profile avatar
│   ├── SkillFleet.svg      # SkillFleet logo
│   ├── Portfolio.svg       # Portfolio logo
│   └── ...                 # Company/School logos (iiitbh, iitm, ecell, ncc, ssnl)
└── README.md               # Project description and run guide
```

---

## 🚀 How to Run Locally

Since this site is built with pure web standards, it does not require any build tools (`npm install`, `vite`, etc.).

1. **Option 1: Direct File Access**
   Double-click `index.html` in your file explorer to open the site directly in any web browser.

2. **Option 2: Local HTTP Server (Recommended)**
   If you want to test forms or local files exactly as they run on a production server:
   - **Python 3**: Run `python -m http.server 8000` in this directory and open `http://localhost:8000`.
   - **VS Code**: Install the "Live Server" extension, right-click `index.html`, and select "Open with Live Server".
